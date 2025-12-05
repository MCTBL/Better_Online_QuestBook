import { ProjectConfig } from "./ProjectConfig";
import { ProjectData } from "./ProjectData";
import { TipsMgr } from "./TipsMgr";

/** 图集管理器 */
export class AtlasMgr {
    private static _instance: AtlasMgr;
    public static get instance(): AtlasMgr {
        return this._instance ?? (this._instance = new AtlasMgr());
    }

    // 路径到图集文件映射
    private path2Atlas: Record<string, string> = {};
    // 路径到base64图片映射
    private path2Base64: Record<string, string> = {};
    // 图集文件到待设置图片队列
    private atlasLoadingQueue: Record<string, { img: ImageExtended; path: string }[]> = {};
    // 已加载的图集配置路径
    private loadedConfigPaths: Set<string> = new Set();
    // 是否使用json格式的图集
    private useJson: boolean = false;
    // 是否使用图集
    private useAtlas: boolean = true;
    //是否使用webp
    public useWebp: boolean = true;

    /** 初始化，加载图集配置 */
    init(cb: () => void) {
        if (!this.useAtlas) {
            cb?.();
            return;
        }
        this.loadConfig(cb);
    }

    private _supportAvif: number = -1;

    /**是否支持avif格式 */
    supportAvif(): boolean {
        if (this._supportAvif == -1) {
            try {
                const canvas = document.createElement("canvas");
                if (canvas.toDataURL("image/avif").indexOf("data:image/avif") === 0) {
                    this._supportAvif = 1;
                } else {
                    this._supportAvif = 0;
                }
            } catch {
                this._supportAvif = 0;
            }
        }
        return this._supportAvif == 1;
    }

    /** 加载图集配置文件 */
    private loadConfig(cb: () => void) {
        let url = ProjectConfig.atlasPath;
        url = ProjectData.getPath(url);
        if (this.loadedConfigPaths.has(url)) {
            cb?.();
            return;
        }
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                this.loadedConfigPaths.add(url);
                this.parseAtlasConfig(res, url);
                cb?.();
            })
            .catch((err) => {
                console.error("图集配置加载失败", err);
                TipsMgr.showTips("图集配置加载失败");
                cb?.();
            });
    }

    /** 解析图集配置，建立路径映射 */
    private parseAtlasConfig(data: Record<string, string[]>, url: string) {
        // url is likes version/280/quests_icons.json
        const basePath = url.substring(0, url.lastIndexOf("."));
        // basePath is likes version/280/quests_icons
        for (const key in data) {
            let list = data[key];
            const relValue = `${basePath}/${key}${this.useJson ? ".json" : ".gtbl"}`;
            for (let value of list) {
                let relKey = `${basePath}/${key}/${value}`;
                this.path2Atlas[relKey] = relValue;
            }
        }
    }

    /** 设置base64图片 */
    setBase64(path: string, base64: string) {
        this.path2Base64[path] = base64;
    }

    /** 设置图片的src，自动处理base64/图集/原始路径 */
    setImgSrc(image: HTMLImageElement, path: string) {
        let img = image as ImageExtended;
        if (!this.useAtlas) {
            img.nativeSrc = path;
            return;
        }
        if (this.path2Base64[path]) {
            img.nativeSrc = this.path2Base64[path];
            return;
        }
        if (this.path2Atlas[path]) {
            const atlasPath = this.path2Atlas[path];
            if (!this.atlasLoadingQueue[atlasPath]) {
                this.atlasLoadingQueue[atlasPath] = [];
                this.loadAtlas(atlasPath);
            }
            this.atlasLoadingQueue[atlasPath].push({ img, path });
        } else {
            img.nativeSrc = path;
        }
    }

    /** 加载图集文件（json或gtbl） */
    private loadAtlas(atlasPath: string) {
        fetch(atlasPath)
            .then((res) => (this.useJson ? res.json() : res.arrayBuffer()))
            .then((data) => {
                if (this.useJson) {
                    this.addBase64(data as Record<string, string>, atlasPath);
                } else {
                    const str = pako.ungzip(new Uint8Array(data), { to: "string" });
                    if (typeof str === "string") {
                        this.addBase64(JSON.parse(str), atlasPath);
                    }
                }
            });
    }

    /** 将图集数据中的base64图片加入映射，并回调设置图片src */
    private addBase64(data: Record<string, string>, atlasPath: string) {
        const relPath = atlasPath.substring(0, atlasPath.lastIndexOf("."));
        for (const key in data) {
            let base64 = this.useWebp ? `data:image/webp;base64,${data[key]}` : `data:image/png;base64,${data[key]}`;
            this.path2Base64[`${relPath}/${key.split(".")[0]}`] = base64;
        }
        this.callbackImg(atlasPath);
    }

    /** 回调设置所有等待中的图片src */
    private callbackImg(atlasPath: string) {
        const list = this.atlasLoadingQueue[atlasPath];
        delete this.atlasLoadingQueue[atlasPath];
        if (list && list.length) {
            for (const item of list) {
                if (this.path2Base64[item.path]) {
                    item.img.nativeSrc = this.path2Base64[item.path];
                } else {
                    item.img.nativeSrc = item.path;
                    console.warn("图集加载失败", item.path);
                }
            }
        }
    }


}

// echarts的代码是 IFFE ，没有导出，所以只能通过Monkey patch来修改图片加载逻辑
// 保存原生 src 的 descriptor（优先从 HTMLImageElement.prototype）
const nativeImage = window.Image;
const originalSrcDesc =
    Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, "src") ||
    Object.getOwnPropertyDescriptor((window as any).Image.prototype, "src");
const originalSrcSetter = originalSrcDesc?.set;
const originalSrcGetter = originalSrcDesc?.get;

// 立即在 prototype 上安装 nativeSrc（确保所有通过 createElement/jQuery/new Image 创建的 img 都有）
Object.defineProperty(HTMLImageElement.prototype, "nativeSrc", {
    set: function (this: HTMLImageElement, value: string) {
        if (originalSrcSetter) {
            originalSrcSetter.call(this, value);
        } else {
            this.setAttribute("src", value);
        }
    },
    get: function (this: HTMLImageElement) {
        if (originalSrcGetter) {
            return originalSrcGetter.call(this);
        }
        return this.getAttribute("src") || "";
    },
    configurable: true,
    enumerable: false,
});

// 在 prototype 上拦截 src 写入，交给 AtlasMgr 处理
Object.defineProperty(HTMLImageElement.prototype, "src", {
    set: function (this: HTMLImageElement, value: string) {
        AtlasMgr.instance.setImgSrc(this, value);
    },
    get: function (this: HTMLImageElement) {
        return (this as any).nativeSrc || "";
    },
    configurable: true,
    enumerable: true,
});

// 仍然保留 Image 构造器行为（返回原生 Image 实例）
window.Image = function Image(this: any) {
    // 注意：不在这里再次定义 prototype，避免重复或延迟定义
    return new (nativeImage as any)();
} as any;

type ImageExtended = HTMLImageElement & { nativeSrc: string };

