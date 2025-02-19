import { lang, quest } from "./Define.js";
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

	/**默认假任务配置 */
	static readonly fakeQuest = {
		name: 5, //顺序
		symbolSize: 29, //1.3倍
		symbol: "image://static/not_main.png", //main或者notmain
		x: 252.0, //任务一致
		y: 180.0, //任务一致
		select: {
			disabled: true,
		},
		tooltip: {
			show: false,
		},
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

	static readonly infoQuest: quest[] = [
		{
			title: "How To Use",
			name: "",
			symbolSize: 0,
			symbol: "logo.png",
			x: 0,
			y: 0,
			data: `§3§l${ProjectConfig.projectName}§r<br/><br/>
			§c§l${ProjectConfig.projectDsc}§r<br/><br/>
			§lAuthor:§r §6§l${ProjectConfig.projectAuthor[0]}§r、 §5§l${ProjectConfig.projectAuthor[1]}§r<br/><br/>
			§lProject Address: [url]${ProjectConfig.projectUrl}[/url]§r<br/>
			 - If you have any questions or needs, please go to the repository to submit an issue.<br/><br/>
			 The icon in the upper right corner can switch languages, the lower left corner can turn the taskbar on and off, and the upper left corner is the search bar.<br/><br/>
			 The §lscroll wheel§r can zoom in and out of the chart, and the §lleft mouse button§r can also drag.<br/><br/>
			 §lShortcut keys:§r<br/>
			 §lR§r - Reset the chart<br/>
			 §lESC / E§r - Exit task details, or simply click on the black area outside the task box.<br/>`,
			quest_id: "",
			tooltip: "",
			is_main: 0,
		},
		{
			title: "使用说明",
			name: "",
			symbolSize: 0,
			symbol: "logo.png",
			x: 0,
			y: 0,
			data: `§3§l${ProjectConfig.projectName_zh}§r<br/><br/>
			§c§l${ProjectConfig.projectDsc_zh}§r<br/><br/>
			§l作者:§r §6§l${ProjectConfig.projectAuthor[0]}§r、 §5§l${ProjectConfig.projectAuthor[1]}§r<br/><br/>
			§l项目地址: [url]${ProjectConfig.projectUrl}[/url]§r<br/>
			 - 有任何问题或需求前往仓库提交issue即可<br/><br/>
			右上角图标可切换语言，左下角可开关任务栏，左上角为搜索栏<br/><br/>
			§l滚轮§r可对图表进行缩放，§l左键§r亦可拖动<br/><br/>
			§l快捷键：§r<br/>
			§lR§r - 重置图表<br/>
			§lESC / E§r - 退出任务详情，或直接点击任务框外侧黑色区域即可<br/><br/>`,
			quest_id: "",
			tooltip: "",
			is_main: 0,
		},
	];
}
