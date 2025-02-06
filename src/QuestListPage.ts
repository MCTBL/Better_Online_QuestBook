import { m2qData, msgAction, popup } from "./Define.js";

export class QuestListPage {
	private event: Event;
	private echarts: echarts.ECharts;

	constructor() {
		this.init();
	}

	init() {
		$(() => {
			this.onMessageFromMain();
		});
	}

	sendMessageToMain(data: m2qData) {
		window.parent.postMessage(data, "*");
	}

	onMessageFromMain() {
		addEventListener("message", (event: MessageEvent) => {
			let data: m2qData = event.data;
			switch (data.action) {
				case msgAction.init:
					this.loadJSData(data.data);
					break;
				case msgAction.resetChart:
					this.resetChart();
					break;
			}
		});
	}

	// 重置echarts
	resetChart() {
		this.echarts.clear();
		if ((window as any).option_this_chart) {
			this.echarts.setOption((window as any).option_this_chart);
		}
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
		this.echarts.clear();
		this.echarts.resize();

		//TODO 重写以下代码，并且把方法放到主域
		this.echarts.on("click", (params: any) => {
			if (params.dataType === "node") {
				let data: popup = {
					title: params.data.title,
					desc: params.data.data,
					ID: params.data.quest_id,
				};
				this.sendMessageToMain({ action: msgAction.showPopup, data: data });
			}
		});

		if ((window as any).option_this_chart) {
			this.echarts.setOption((window as any).option_this_chart);
		} else {
			console.error("内容丢失");
		}
		window.addEventListener("resize", () => {
			this.echarts?.resize();
		});
	}
}

new QuestListPage();
