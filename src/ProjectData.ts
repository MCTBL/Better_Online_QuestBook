import { ProjectConfig } from "./ProjectConfig.js";

export class ProjectData {
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
	static getQuestDataPath(language: string) {
		var questDataPath = this.getPath(ProjectConfig.questDataPath);
		if (language.includes("en")) {
			questDataPath = questDataPath + "_en";
		}
		return questDataPath + ".json";
	}

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
