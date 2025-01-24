import { m2qData, msgAction, popup } from "./Define.js";

export class QuestListPage {
	private event: Event;
	private echarts: echarts.ECharts;

	constructor() {
		this.init();
		this.event = new Event("reset");
	}

	init() {
		$(() => {
			this.onMessageFromMain();
			let data = { action: msgAction.ready, data: null };
			this.sendMessageToMain(data);
		});

		//TODO 重写以下代码，并且把方法放到主域
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

	onMessageFromMain() {
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
		this.echarts.clear();
		this.echarts.resize();

		//TODO 重写以下代码，并且把方法放到主域
		this.echarts.on("click", (params: any) => {
			if (params.dataType === "node") {
				let data: popup = {
					title: params.data.name,
					desc: params.data.data.replaceAll("%n", "</br>"),
					ID: params.data.quest_id,
				};

				// let msg = params.data.data.replaceAll("%n", "</br>");
				// msg = Utils.encodeMsg2AHref(msg);
				// console.warn(msg);
				// let data: dialogMsg =
				// {
				// 	content: msg,
				// 	caller: null,//TODO 这里不能传递方法和作用域，必须重写做一个dialog
				// 	sure: null,
				// 	cancel: null,
				// 	onlySure: true,
				// 	title: params.data.name,
				// 	sureMsg: "复制任务ID",
				// 	cancelMsg: "取消"
				// }
				this.sendMessageToMain({ action: msgAction.showDialog, data: data });
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
