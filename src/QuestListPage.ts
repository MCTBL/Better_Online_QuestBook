import { m2qData, msgAction, popupData, questData } from "./Define.js";
import { ProjectData } from "./ProjectData.js";
import { Utils } from "./Utils.js";

export class QuestListPage {
	private event: Event;
	private echarts: echarts.ECharts;
	private pageData: any;

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
					this.loadJsonData(data.data);
					break;
				case msgAction.resetChart:
					this.resetChart();
					break;
			}
		});
	}

	// 重置echarts
	resetChart() {
		this.echarts?.clear();
		this.echarts?.resize();
		this.echarts?.setOption(this.pageData);
	}

	loadJsonData(quest: questData) {
		this.pageData = Utils.deepClone(ProjectData.echartsConfig);
		this.pageData.series[0].data = quest.data;
		this.pageData.series[0].links = quest.links;
		this.initEcharts();
	}

	initEcharts() {
		if (!this.echarts) {
			this.echarts = echarts.init(
				document.getElementById("this_chart") as HTMLDivElement,
				"white",
				{ renderer: "canvas" }
			);
			this.echarts.on("click", (params: any) => {
				if (params.dataType === "node") {
					let data: popupData = {
						title: params.data.name,
						desc: params.data.data,
						ID: params.data.quest_id,
					};
					this.sendMessageToMain({ action: msgAction.showPopup, data: data });
				}
			});

			window.addEventListener("resize", () => {
				this.echarts?.resize();
			});
		}
		this.resetChart();
	}
}

new QuestListPage();
