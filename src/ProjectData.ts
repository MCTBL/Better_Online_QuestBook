import { lang } from "./Define.js";
import { ProjectConfig } from "./ProjectConfig.js";

export class ProjectData {
	/**默认为中文 */
	static language: lang = lang.zh;

	static selectVersionIndex: number = 0;
	static getPath(url: string) {
		return (
			"version/" +
			ProjectConfig.resList[ProjectData.selectVersionIndex] +
			"/" +
			url
		);
	}

	/**获取任务列表数据地址 */
	static getQuestLinePath() {
		return this.getPath(ProjectConfig.questLinePath);
	}

	/**获取任务数据地址 */
	static getQuestDataPath(language: lang) {
		var questDataPath = this.getPath(ProjectConfig.questDataPath);
		if (language == lang.en) {
			questDataPath = questDataPath + "_en";
		}
		return questDataPath + ".json";
	}

	/**任务淡出配置 */
	static readonly emphasis = {
		"disabled": true,
		"scale": 1,
		"focus": "None"
	}

	/**默认假任务配置 */
	static readonly fakeQuest =
		{
			"name": 5,//顺序
			"symbolSize": 29,//1.3倍
			"symbol": "image://static/not_main.png",//main或者notmain
			"x": 252.0,//任务一致
			"y": 180.0,//任务一致
			"emphasis": {
				"disabled": true
			},
			"select": {
				"disabled": true
			},
			"tooltip": {
				"show": false
			}
		};

	/**默认echarts配置 */
	static readonly echartsConfig = {
		backgroundColor: "#f5f0d3",
		animation: true,
		animationThreshold: 2000,
		animationDuration: 1000,
		animationEasing: "cubicOut",
		animationDelay: 0,
		animationDurationUpdate: 300,
		animationEasingUpdate: "cubicOut",
		animationDelayUpdate: 0,
		aria: {
			enabled: false,
		},
		color: [
			"#5470c6",
			"#91cc75",
			"#fac858",
			"#ee6666",
			"#73c0de",
			"#3ba272",
			"#fc8452",
			"#9a60b4",
			"#ea7ccc",
		],
		series: [
			{
				type: "graph",
				layout: "none",
				symbolSize: 10,
				circular: {
					rotateLabel: false,
				},
				force: {
					repulsion: 0,
					gravity: 0,
					edgeLength: 30,
					friction: 0.6,
					layoutAnimation: true,
				},
				label: {
					show: false,
					position: "up",
					margin: 8,
					valueAnimation: false,
				},
				lineStyle: {
					show: true,
					width: 1,
					opacity: 1,
					curveness: 0,
					type: "solid",
				},
				roam: true,
				draggable: false,
				focusNodeAdjacency: true,
				data: null,
				edgeLabel: {
					show: false,
					margin: 8,
					valueAnimation: false,
				},
				edgeSymbol: ["circle", "arrow"],
				edgeSymbolSize: 10,
				links: null,
				emphasis: {
					disabled: true,
					scale: 1,
					focus: "None",
				},
			},
		],
		legend: [
			{
				data: [],
				selected: {},
			},
		],
		tooltip: {
			trigger: "item",
			triggerOn: "mousemove|click",
			axisPointer: {
				type: "line",
			},
			showContent: true,
			alwaysShowContent: false,
			showDelay: 0,
			hideDelay: 100,
			enterable: false,
			confine: false,
			appendToBody: false,
			transitionDuration: 0.4,
			textStyle: {
				fontSize: 14,
			},
			borderWidth: 0,
			padding: 5,
			order: "seriesAsc",
		},
	};
}
