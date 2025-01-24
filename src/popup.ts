export function showPopup(title: string, desc: string) {
	if (document !== null) {
		document.getElementById("title")!.innerHTML = title;
		document.getElementById("desc")!.innerHTML = desc;
		document.getElementById("popup")!.style.display = "block";
		document.getElementById("overlay")!.style.display = "block";
	}
}

export function hidePopup() {
	if (document !== null) {
		document.getElementById("popup")!.style.display = "none";
		document.getElementById("overlay")!.style.display = "none";
	}
}
