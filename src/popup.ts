export function showPopup(title: string, desc: string, ID: string) {
	if (document !== null) {
		// 写入任务id并隐藏
		document.getElementById("quest_id")!.innerText = ID;
		document.getElementById("quest_id")!.style.display = "none";

		document.getElementById("title")!.innerHTML = "<h1>" + title + "</h1>";
		document.getElementById("desc")!.innerHTML = processDesc(desc);
		document.getElementById("popup")!.style.display = "flex";
		document.getElementById("overlay")!.style.display = "block";
	}
}

function processDesc(desc: string): string {
	var temp = desc.split(/\[\/?url\]/);
	var new_desc: string = "";
	for (var i = 0; i <= temp.length; i++) {
		if (temp[i] != undefined) {
			if (i % 2 == 1 && temp[i].trim().length > 0) {
				var temp_str = temp[i];
				new_desc += "<a href=" + temp_str + ">" + temp_str + "</a>";
			} else {
				new_desc += temp[i];
			}
		}
	}

	temp = new_desc.split(/\[\/?note\]/);
	new_desc = "";
	for (var i = 0; i <= temp.length; i++) {
		if (temp[i] != undefined) {
			if (i % 2 == 1 && temp[i].trim().length > 0) {
				var temp_str = temp[i];
				new_desc += "<note style='color:#00AAAA'>" + temp_str + "</note>";
			} else {
				new_desc += temp[i];
			}
		}
	}

	temp = new_desc.split(/\[\/?warn\]/);
	new_desc = "";
	for (var i = 0; i <= temp.length; i++) {
		if (temp[i] != undefined) {
			if (i % 2 == 1 && temp[i].trim().length > 0) {
				var temp_str = temp[i];
				new_desc += "<warn style='color:#AA0000'>" + temp_str + "</warn>";
			} else {
				new_desc += temp[i];
			}
		}
	}
	return new_desc;
}

export function hidePopup() {
	if (document !== null) {
		document.getElementById("popup")!.style.display = "none";
		document.getElementById("overlay")!.style.display = "none";
	}
}
