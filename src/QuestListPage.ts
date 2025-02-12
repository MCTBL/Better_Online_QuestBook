import { m2qData, msgAction, quest, questData } from "./Define.js";
import { ProjectData } from "./ProjectData.js";
import { Utils } from "./Utils.js";

export class QuestListPage {
	private event: Event;
	private echarts: echarts.ECharts;
	private pageData: any;

	private questList: quest[];

	constructor() {
		this.init();
	}

	init() {
		$(() => {
			this.addEvent();
		});
	}

	sendMessageToMain(data: m2qData) {
		window.parent.postMessage(data, "*");
	}

	addEvent() {
		addEventListener("message", this.onMessageFromMain);
		$("#btnCloseSp").on("click", this.onClosePop)
	}







	// 重置echarts
	resetChart() {
		this.echarts?.clear();
		this.echarts?.resize();
		this.echarts?.setOption(this.pageData);
	}

	getPageData(res: { data: questData, title: string }) {
		this.pageData = Utils.deepClone(ProjectData.echartsConfig);
		this.pageData.series[0].data = res.data.data;
		this.pageData.series[0].links = res.data.links;
		$("#questTitle").text(res.title);
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
					this.sendMessageToMain({ action: msgAction.showPopup, data: params.data.quest_id });
				}
			});

			window.addEventListener("resize", () => {
				this.echarts?.resize();
			});
		}
		this.resetChart();
	}



	onMessageFromMain = (event: MessageEvent) => {
		let data: m2qData = event.data;
		switch (data.action) {
			case msgAction.init:
				this.getPageData(data.data);
				break;
			case msgAction.resetChart:
				this.resetChart();
				break;
			case msgAction.showSearchPopup:
				this.showSearchPopup(data.data);
				break;
			default:
				console.warn("未知的消息", data);
				break;
		}
	}

	onClosePop = () => {
		$("#searchPopup").hide();
		this.sendMessageToMain({ action: msgAction.closeSearchPopup, data: null });
		this.questList = [];
	}

	showSearchPopup(res?: quest[]) {
		this.clearSearchList();
		if (res) {
			this.questList = res;
			this.showSearchList();
		}
		$("#searchPopup").show();
	}

	clearSearchList() {

	}

	showSearchList() {

	}


}

new QuestListPage();
