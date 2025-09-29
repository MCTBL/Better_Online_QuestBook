import { ProjectConfig } from "./ProjectConfig";
import { ProjectData } from "./ProjectData";

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
	private atlasLoadingQueue: Record<string, { img: HTMLImageElement; path: string }[]> = {};
	// 已加载的图集配置路径
	private loadedConfigPaths: Set<string> = new Set();
	// 是否使用json格式的图集
	private useJson: boolean = false;
	// 是否使用图集
	private useAtlas: boolean = true;


	/** 初始化，加载图集配置 */
	init(cb: () => void) {
		if (!this.useAtlas) {
			cb?.();
			return;
		}
		this.loadConfig(cb);
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
			.then(res => res.json())
			.then(res => {
				this.loadedConfigPaths.add(url);
				this.parseAtlasConfig(res, url);
				cb?.();
			});
	}

	/** 解析图集配置，建立路径映射 */
	private parseAtlasConfig(data: Record<string, string>, url: string) {
		const basePath = url.substring(0, url.lastIndexOf("."));
		for (const key in data) {
			const value = data[key];
			const relKey = `${basePath}/${value}/${key}`;
			const relValue = `${basePath}/${value}${this.useJson ? ".json" : ".gtbl"}`;
			this.path2Atlas[relKey] = relValue;
		}
	}

	/** 设置base64图片 */
	setBase64(path: string, base64: string) {
		this.path2Base64[path] = base64;
	}

	/** 设置图片的src，自动处理base64/图集/原始路径 */
	setImgSrc(img: HTMLImageElement, path: string) {
		if (!this.useAtlas) {
			img.src = path;
			return;
		}
		if (this.path2Base64[path]) {
			img.src = this.path2Base64[path];
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
			img.src = path;
		}
	}

	/** 加载图集文件（json或gtbl） */
	private loadAtlas(atlasPath: string) {
		fetch(atlasPath)
			.then(res => this.useJson ? res.json() : res.arrayBuffer())
			.then(data => {
				if (this.useJson) {
					this.addBase64(data as Record<string, string>, atlasPath);
				} else {
					const str = pako.ungzip(new Uint8Array(data), { to: 'string' });
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
			this.path2Base64[`${relPath}/${key}`] = `data:image/png;base64,${data[key]}`;
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
					item.img.src = this.path2Base64[item.path];
				} else {
					item.img.src = item.path;
					console.warn("图集加载失败", item.path);
				}
			}
		}
	}
}

(window as any).atlasMgr = AtlasMgr.instance;