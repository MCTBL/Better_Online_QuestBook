export function MCcolor(source_str: string): string {
	if (!source_str.includes("§")) {
		return source_str;
	}

	var reg = /(^)?([^§]+)($)?/g; // 去掉所有§符号的正则表达式
	var target = document.createElement("temp"); // 创建一个span最终输出的
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
		var style = functioncolor(first_char); // 创建判断样式后的返回值变量
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
		var temp = one_match.substr(1);
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

function functioncolor(colorcod: string) {
	// 颜色代码返回对应的样式属性判断
	if (colorcod == "a") {
		return "#55ff55"; // 返回对应的颜色
	} else if (colorcod == "b") {
		return "#55ffff"; // 返回对应的颜色
	} else if (colorcod == "c") {
		return "#ff5555"; // 返回对应的颜色
	} else if (colorcod == "d") {
		return "#ff55ff"; // 返回对应的颜色
	} else if (colorcod == "e") {
		return "#ffff55"; // 返回对应的颜色
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
