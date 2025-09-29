import { ProjectConfig } from "./ProjectConfig";
import { ProjectData } from "./ProjectData";
/**图集管理器 */
export class AtlasMgr {
	private static _instance: AtlasMgr;
	public static get instance(): AtlasMgr {
		return this._instance ? this._instance : this._instance = new AtlasMgr();
	}

	private path2AtlasMap: { [path: string]: string } = {};

	private path2Base64Map: { [path: string]: string } = {};

	private loadAtlasMap: { [path: string]: { img: HTMLImageElement, path: string }[] } = {};

	//是否使用json格式的图集
	private useJson: boolean = false;


	//任务列表的路径
	//quests_icons/QuestLineIcon/${quest.quest}.png
	//echat的图标路径
	//quests_icons/QuestIcon/608.png


	private loadedPaths: Set<string> = new Set();

	init(cb: Function) {
		this.loadConfig(cb);
	}

	private loadConfig(cb: Function) {
		let url = ProjectConfig.atlasPath;
		url = ProjectData.getPath(url);
		if (this.loadedPaths.has(url)) {
			cb?.();
			return;
		} else {
			fetch(url)
				.then(res => res.json())
				.then(res => {
					this.loadedPaths.add(url);
					this.dealPath(res, url);
					cb?.();
				})
		}
	}

	private dealPath(data: { [key: string]: string }, url: string) {
		let path = url.substring(0, url.lastIndexOf("."));
		for (let key in data) {
			let value = data[key];
			let relKey = path + "/" + value + "/" + key;
			let relValue = path + "/" + value + (this.useJson ? ".json" : ".gtbl");
			this.path2AtlasMap[relKey] = relValue;
		}
	}



	setBase64(path: string, base64: string) {
		this.path2Base64Map[path] = base64;
	}

	setAtlas(path: string, atlasPath: string) {

	}


	/**
	 * 设置图片的src
	 * @param img 图片对象
	 * @param path 路径，带版本的
	 * @returns 空
	 */
	setImgSrc(img: HTMLImageElement, path: string) {
		if (path in this.path2Base64Map) {
			img.src = this.path2Base64Map[path];
			return;
		}
		if (path in this.path2AtlasMap) {
			let loadList = this.path2AtlasMap[path];
			if (!this.loadAtlasMap[loadList]) {

				this.loadAtlasMap[loadList] = [];
				this.loadAtlas(loadList);
			}
			this.loadAtlasMap[loadList].push({ img: img, path: path });
		} else {
			img.src = path;
		}
	}

	private loadAtlas(path: string) {
		fetch(path).then(res => (this.useJson ? res.json() : res.arrayBuffer()))
			.then(bufOrJson => {
				if (this.useJson) {
					let data = bufOrJson as { [key: string]: string };
					this.addBase64(data, path);
				} else {
					let str = pako.ungzip(new Uint8Array(bufOrJson), { to: 'string' });
					if (str && typeof str == "string") {
						let data = JSON.parse(str);
						this.addBase64(data, path);
					}
				}
			});
	}

	private addBase64(data: { [key: string]: string }, path: string) {
		let relpath = path.substring(0, path.lastIndexOf("."));
		for (let key in data) {
			let value = data[key];
			let relKey = relpath + "/" + key;
			let relValue = "data:image/png;base64," + value;
			this.path2Base64Map[relKey] = relValue;
		}
		this.callbackImg(path);
	}

	private callbackImg(path: string) {
		let list = this.loadAtlasMap[path];
		delete this.loadAtlasMap[path];
		if (list && list.length) {
			list.forEach(item => {
				if (item.path in this.path2Base64Map) {
					item.img.src = this.path2Base64Map[item.path];
				} else {
					item.img.src = item.path;
					console.warn("图集加载失败", item.path);
				}
			});
		}
	}

}
(<any>window).atlasMgr = AtlasMgr.instance;