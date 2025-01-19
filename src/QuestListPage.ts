import { m2qData, msgAction } from "./Define.js";
import { Utils } from "./Utils.js";

function showPopup(content: string) {
	if (document !== null) {
		document.getElementById("popupContent")!.innerHTML = content;
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

export class QuestListPage {
	private event: Event;
	private echarts: echarts.ECharts;

	constructor() {
		this.init();
		this.event = new Event("reset");
	}

	init() {
		$(() => {
			this.onMessage();
			let data = { action: msgAction.ready, data: null };
			this.sendMessageToMain(data);
		});
		// 绑定点击消失
		document.getElementById("overlay")!.addEventListener("click", function () {
			hidePopup();
		});
		// 绑定点击复制任务详情
		document.getElementById("copyBtn")!.addEventListener("click", function () {
			Utils.copyH5Str(document.getElementById("popupContent")!.innerText);
			console.log("成功复制");
		});
		// 绑定点击复制任务ID
		document
			.getElementById("copyIdBtn")!
			.addEventListener("click", function () {
				Utils.copyH5Str(document.getElementById("quest_id")!.innerText);
				console.log("成功复制");
			});

		// 重置echarts
		document.getElementById("reset_btn")!.addEventListener("click", () => {
			this.echarts.clear();
			if ((window as any).option_this_chart) {
				this.echarts.setOption((window as any).option_this_chart);
			}
		});
	}

	sendMessageToMain(data: m2qData) {
		window.parent.postMessage(data, "*");
	}

	onMessage() {
		addEventListener("message", (event: MessageEvent) => {
			let data: m2qData = event.data;
			switch (data.action) {
				case msgAction.init:
					this.loadJSData(data.data);
					break;
			}
		});
	}

	loadJSData(url: string) {
		$.getScript(url, (script, textStatus) => {
			this.initEcharts();
		});
	}

	initEcharts() {
		if (!this.echarts) {
			this.echarts = echarts.init(
				document.getElementById("this_chart") as HTMLDivElement,
				"white",
				{ renderer: "canvas" }
			);
		}

		this.echarts.on("click", (params: any) => {
			if (params.dataType === "node") {
				// 写入任务id并隐藏
				document.getElementById("quest_id")!.innerText = params.data.quest_id;
				document.getElementById("quest_id")!.style.display = "none";

				// 展示
				showPopup(
					"<h1>" +
						params.data.name +
						"</h1>" +
						params.data.data.replaceAll("%n", "</br>")
				);
			}
		});

		if ((window as any).option_this_chart) {
			this.echarts.setOption((window as any).option_this_chart);
		} else {
			console.error("内容丢失");
		}
		window.addEventListener("resize", () => {
			this.echarts.resize();
		});
	}
}

new QuestListPage();
