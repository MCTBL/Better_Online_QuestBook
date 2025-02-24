export class Utils {

	private static typingInterval: any = null;

	/**打字机 */
	static typeText(selector: string, text: string, speed: number = 50) {
		const element = $(selector);
		element.text("");
		let index = 0;

		// 清除之前的 interval
		if (this.typingInterval !== null) {
			clearInterval(this.typingInterval);
		}

		this.typingInterval = setInterval(() => {
			if (index < text.length) {
				element.append(text.charAt(index));
				index++;
			} else {
				if (!isNaN(Number(this.typingInterval))) {
					clearInterval(Number(this.typingInterval));
				}
				this.typingInterval = null;
			}
		}, speed);
	}

	static rotScreen() {
		var main = document.getElementById("main")!;
		window.addEventListener("resize", function () {
			adjustImageSize();
		});
		adjustImageSize();
		function adjustImageSize() {
			var windowHeight =
				window.innerHeight ||
				document.documentElement.clientHeight ||
				document.body.clientHeight;
			var windowWidth =
				window.innerWidth ||
				document.documentElement.clientWidth ||
				document.body.clientWidth;
			main.style.height = windowHeight + "px";
			main.style.width = windowWidth + "px";
			if (windowWidth > windowHeight) {
				main.style.transform = "rotate(0deg)";
			} else {
				main.style.transform = "rotate(90deg)";
			}
		}
	}

	static copyH5Str(str: string) {
		var input = str + "";
		const el = document.createElement("textarea");
		el.value = input;
		el.setAttribute("readonly", "");
		el.style.position = "absolute";
		el.style.left = "-9999px";
		el.style.fontSize = "12pt";
		const selection = getSelection()!;
		var originalRange;
		if (selection.rangeCount > 0) {
			originalRange = selection.getRangeAt(0);
		}
		document.body.appendChild(el);
		el.select();
		el.selectionStart = 0;
		el.selectionEnd = input.length;
		var success = false;
		try {
			success = document.execCommand("copy");
		} catch (err) { }

		document.body.removeChild(el);
		if (originalRange) {
			selection.removeAllRanges();
			selection.addRange(originalRange);
		}
	}

	static encodeMsg2AHref(msg: string): string {
		return msg.replace(
			/\[url\](https?:\/\/[^\s\[\]]+)\[\/url\]/g,
			'<a href="$1" target="_blank">$1</a>'
		);
	}

	static expMCcolor(source_str: string): string {
		if (!source_str.includes("§")) {
			return source_str;
		}

		var reg = /([^§]+)/g; // /(^)?([^§]+)($)?/g; // 去掉所有§符号的正则表达式

		if (source_str.match(reg) == null) {
			console.error("正则匹配失败");
			return source_str;
		}


		var target = document.createElement("span"); // 创建一个span最终输出的
		var len = source_str.match(reg)!.length; // 获取原始motd分割后的段数
		var output = ""; // 创建最终输出的变量

		var color = "#000000"; // 默认颜色为黑色
		var fontWeight = "normal"; // 默认字体为Minecraft常规
		var textDecoration = "none"; // 默认没有下划线或删除线
		var fontStyle = "normal"; // 默认字体不倾斜

		///////////////////////////////////////////////////////////////////////////////////////循环开始 ↓
		for (var i = 0; i < len; i++) {
			// 开始遍历分段的motd
			var one_match = source_str.match(reg)![i]; // 获取motd分割后的第[i]段
			var first_char = one_match.substring(0, 1); // 获取第[i]段的第一个字符
			var child = document.createElement("quest_desc");
			var style = this.functioncolor(first_char); // 创建判断样式后的返回值变量
			if (style.substring(0, 1) == "#") {
				color = style;
				textDecoration = "none"; // 下划线和删除线会因为后面有颜色代码而被重置
				fontStyle = "normal"; // 斜体会因为后面有颜色代码而被重置
				fontWeight = "normal"; // 加粗会因为后面有颜色代码而被重置
			} else if (style == "bold") {
				// 粗体
				fontWeight = style;
			} else if (style == "line-through") {
				// 删除线
				textDecoration = style;
				fontWeight = "normal"; // 加粗会因为后面有删除线代码而被重置
			} else if (style == "underline") {
				// 下划线
				textDecoration = style;
				fontWeight = "normal";
			} else if (style == "italic") {
				// 斜体
				fontStyle = style;
			} else if (style == "none") {
				// 重置
				color = "#000000"; // 默认颜色为黑色
				fontWeight = "normal"; // 默认字体为Minecraft常规
				textDecoration = "none"; // 默认没有下划线或删除线
				fontStyle = "normal"; // 默认字体不倾斜
			}

			var temp = one_match.substr(style == "unknown style" ? 0 : 1);

			if (temp.length != 0) {
				child.style.color = color;
				child.style.fontWeight = fontWeight;
				child.style.textDecoration = textDecoration;
				child.style.fontStyle = fontStyle;
				child.innerHTML = temp;
				target.append(child);
			}
		}
		return target.innerHTML; // 返回输出创建的span
	}

	static functioncolor(colorcod: string) {
		// 颜色代码返回对应的样式属性判断
		if (colorcod == "a") {
			return "#55ff55"; // 返回对应的颜色
		} else if (colorcod == "b") {
			return "#4de6e6"; // 返回对应的颜色
		} else if (colorcod == "c") {
			return "#ff5555"; // 返回对应的颜色
		} else if (colorcod == "d") {
			return "#ff55ff"; // 返回对应的颜色
		} else if (colorcod == "e") {
			return "#bebe00"; // 返回对应的颜色
		} else if (colorcod == "f") {
			return "#ffffff"; // 返回对应的颜色
		} else if (colorcod == "g") {
			return "#ddd605"; // 返回对应的颜色
		} else if (colorcod == "0") {
			return "#000000"; // 返回对应的颜色
		} else if (colorcod == "1") {
			return "#0000aa"; // 返回对应的颜色
		} else if (colorcod == "2") {
			return "#00aa00"; // 返回对应的颜色
		} else if (colorcod == "3") {
			return "#00aaaa"; // 返回对应的颜色
		} else if (colorcod == "4") {
			return "#aa0000"; // 返回对应的颜色
		} else if (colorcod == "5") {
			return "#aa00aa"; // 返回对应的颜色
		} else if (colorcod == "6") {
			return "#ffaa00"; // 返回对应的颜色
		} else if (colorcod == "7") {
			return "#aaaaaa"; // 返回对应的颜色
		} else if (colorcod == "8") {
			return "#555555"; // 返回对应的颜色
		} else if (colorcod == "9") {
			return "#5555ff"; // 返回对应的颜色
		} else if (colorcod == "k") {
			return "Random"; // 随机字符 想用Gif来实现，有待考虑
		} else if (colorcod == "l") {
			return "bold"; // 加粗 font-family: Minecraft;
		} else if (colorcod == "m") {
			return "line-through"; // 删除线text-decoration:line-through;
		} else if (colorcod == "n") {
			return "underline"; // 下划线 text-decoration:underline;
		} else if (colorcod == "o") {
			return "italic"; // 斜体 font-style: italic;
		} else if (colorcod == "r") {
			return "none"; // 重置样式
		} else {
			return "unknown style";
		}
	}

	//https://www.cnblogs.com/truestar666/p/16111890.html
	static deepClone(target: any) {
		// WeakMap作为记录对象Hash表（用于防止循环引用）
		const map = new SimpleWeakMap(); //防止没有

		// 判断是否为object类型的辅助函数，减少重复代码
		function isObject(target: any) {
			return (
				(typeof target === "object" && target) || typeof target === "function"
			);
		}

		function clone(data: any): any {
			// 基础类型直接返回值
			if (!isObject(data)) {
				return data;
			}

			// 日期或者正则对象则直接构造一个新的对象返回
			if ([Date, RegExp].indexOf(data.constructor) !== -1) {
				return new data.constructor(data);
			}

			// 处理函数对象
			if (typeof data === "function") {
				return "not support"; // new Function('return ' + data.toString())() 微信不支持
			}

			// 如果该对象已存在，则直接返回该对象
			const exist = map.get(data);
			if (exist) {
				return exist;
			}

			//处理Array对象
			if (Array.isArray(data)) {
				let ary = [];
				for (let i = 0; i < data.length; i++) {
					ary.push(clone(data[i]));
				}
				return ary;
			}

			// 处理Map对象
			if (data instanceof Map) {
				const result = new Map();
				map.set(data, result);
				data.forEach((val, key) => {
					// 注意：map中的值为object的话也得深拷贝
					if (isObject(val)) {
						result.set(key, clone(val));
					} else {
						result.set(key, val);
					}
				});
				return result;
			}

			// 处理Set对象
			if (data instanceof Set) {
				const result = new Set();
				map.set(data, result);
				data.forEach((val) => {
					// 注意：set中的值为object的话也得深拷贝
					if (isObject(val)) {
						result.add(clone(val));
					} else {
						result.add(val);
					}
				});
				return result;
			}

			// 收集键名（考虑了以Symbol作为key以及不可枚举的属性）
			const keys = Reflect.ownKeys(data);
			// 利用 Object 的 getOwnPropertyDescriptors 方法可以获得对象的所有属性以及对应的属性描述
			var allDesc: any = {};
			Object.keys(data).forEach(function (key: any) {
				allDesc[key] = Object.getOwnPropertyDescriptor(data, key);
			});
			// 结合 Object 的 create 方法创建一个新对象，并继承传入原对象的原型链， 这里得到的result是对data的浅拷贝
			const result = Object.create(Object.getPrototypeOf(data), allDesc);

			// 新对象加入到map中，进行记录
			map.set(data, result);

			// Object.create()是浅拷贝，所以要判断并递归执行深拷贝
			keys.forEach((key) => {
				const val = data[key];
				if (isObject(val)) {
					// 属性值为 对象类型 或 函数对象 的话也需要进行深拷贝
					result[key] = clone(val);
				} else {
					result[key] = val;
				}
			});
			return result;
		}

		return clone(target);
	}

	static removeHTMLTags(html: string): string {
		// 将<br/>替换为换行符
		let textWithUrls = html.replace(/<br\s*\/?>/gi, "\n");

		// 正则表达式匹配<a>标签，并捕获href属性值
		const aTagRegex = /<a\s+[^>]*?href=["']([^"']*)["'][^>]*?>([^<]*?)<\/a>/gi;

		// 替换函数，用于处理每个匹配的<a>标签
		const replacer = (match: string, url: string, text: string): string => {
			// 保留href属性值，并用空格分隔URL和文本
			return `${url}`;
		};

		// 首先处理<a>标签，保留href属性值和文本
		textWithUrls = textWithUrls.replace(aTagRegex, replacer);

		// 正则表达式匹配并移除所有剩余的HTML标签
		const tagRegex = /<[^>]*>/g;
		textWithUrls = textWithUrls.replace(tagRegex, "");

		return textWithUrls;
	}

	static screenshot(node: HTMLElement) {
		html2canvas(node).then((canvas: any) => {
			$(canvas)
				.css("position", "fixed")
				.css("top", "0")
				.css("left", "0")
				.css("z-index", "999999")
				.css("background", "rgba(0,0,0,0.5)")
				.css("width", "80%")
				.css("height", "80%")
				.css("cursor", "pointer")
				.click(function () {
					$(this).remove();
				});
			document.body.appendChild(canvas);
		});
	}


	/**洗牌算法 */
	static shuffle<T>(array: T[]): T[] {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
}

//模拟一个简单的weakmap
class SimpleWeakMap {
	private _keys: any[];
	private _values: any[];

	constructor() {
		this._keys = [];
		this._values = [];
	}

	set(key: any, value: any): void {
		const index = this._keys.indexOf(key);
		if (index === -1) {
			this._keys.push(key);
			this._values.push(value);
		} else {
			this._values[index] = value;
		}
	}

	get(key: any): any {
		const index = this._keys.indexOf(key);
		return index === -1 ? undefined : this._values[index];
	}

	has(key: any): boolean {
		return this._keys.indexOf(key) !== -1;
	}

	delete(key: any): boolean {
		const index = this._keys.indexOf(key);
		if (index === -1) {
			return false;
		}
		this._keys.splice(index, 1);
		this._values.splice(index, 1);
		return true;
	}
}
