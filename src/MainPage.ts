import {
	lang,
	localEnum,
	m2qData,
	msgAction,
	quest,
	questAllData,
	questData,
	questLine,
} from "./Define";
import { EeggMgr } from "./EeggMgr";
import { PopMgr } from "./PopMgr";
import { ProjectConfig } from "./ProjectConfig";
import { ProjectData } from "./ProjectData";
import { TipsMgr } from "./TipsMgr";
import { Utils } from "./Utils";

export class MainPage {
	private questLine: questLine[] = [];
	private buttonList: JQuery<HTMLElement>[] = [];
	/**是否展示侧边栏 */
	private showSidebar: boolean = false;
	/**所有任务的数据 */
	private questAllData: { [lang: string]: questAllData } = {};

	/**标题对应任务数据 */
	private titleToQuest: { [lang: string]: { [key: string]: quest } } = {};
	/**任务ID对应任务数据 */
	private questIdToQuest: { [lang: string]: { [key: string]: quest } } = {};

	private oldQuestData: { title: string, data: any } = null!;


	private echarts: echarts.ECharts;
	/**当前页面数据 桌面端才有的 */
	private pageData: any;
	/**搜索任务列表 */
	private questList: quest[];

	constructor() {
		$(() => {
			TipsMgr.showLoading();
			ProjectData.processUrlParameters(window.location.href);
			this.initPlatform();

			this.initLang();
			this.initPage();
			this.addEvent();
			this.loadQuestLine();
			this.showProjectMsg();

		});
	}

	initPlatform() {
		let isMobile = (window as any).isMobile;
		if (isMobile.phone) {
			ProjectData.isPhone = true;
		} else {
			ProjectData.isPhone = false;
		}
	}

	showProjectMsg() {
		setTimeout(() => {
			console.log(
				`%c${ProjectConfig.projectName_zh}\n\n%c${ProjectConfig.projectDsc_zh}\n\n%c作者: ${ProjectConfig.projectAuthor}\n\n%c项目地址: ${ProjectConfig.projectUrl}`,
				"color:#252525; font-size: 30px;",
				"color:#e12885; font-size: 18px;",
				"color:#137a7f; font-size: 20px;",
				"color:#525658; font-size: 16px;"
			);
		}, 300);
	}

	initPage() {
		for (let i = 0; i < ProjectConfig.versionList.length; i++) {
			let option = $("<option>", {
				text: ProjectConfig.versionList[i],
				value: ProjectConfig.versionList[i],
			});
			$("#versionSelect").append(option);
		}
	}

	initLang() {
		if (localStorage.getItem(localEnum.language)) {
			if (localStorage.getItem(localEnum.language) == lang.zh) {
				ProjectData.language = lang.zh;
			} else {
				ProjectData.language = lang.en;
			}
		} else {
			if (navigator.language.includes("zh")) {
				ProjectData.language = lang.zh;
			} else {
				ProjectData.language = lang.en;
			}
		}
		this.initTitle();
	}

	initTitle() {
		if (ProjectData.language == lang.zh) {
			document.title = ProjectConfig.projectName_zh;
		} else {
			document.title = ProjectConfig.projectName;
		}
	}

	addEvent() {
		addEventListener("message", this.onGetMessageFromIframe);
		$("#toggleSidebar").on("click", this.toggleSidebar);

		addEventListener("keydown", this.onKeyDown);

		$("#logoImg").on("click", this.onClickLogo);
		$("#logoImg").on("contextmenu", this.onRightClickLogo);
		$("#search").on("focus", this.onSearchFocus);
		$("#search").on("blur", this.onSearchBlur);
		$("#search").on("input", this.onSeachInput);

		$("#btnCloseSp").on("click", this.onClosePop);

		$("#changeLang").on("click", this.onChangeLang);

		$("#btnShowMsg").on("click", this.onClickInfo);

		$("#btnTop").on("click", this.onClickTop);
	}

	// 加载任务列表
	loadQuestLine() {
		$.getJSON(ProjectData.getQuestLinePath(), (data: any) => {
			this.questLine = data;
			this.questLine.forEach((quest, index) => {
				let button = this.createButton(index, quest);
				$("#questLineList").append(button);
				this.buttonList.push(button);
			});
			this.loadQuestData();
		});
	}

	loadQuestData() {
		if (this.questAllData && this.questAllData[ProjectData.language] != null) {
			this.initMainIframe();
		} else {
			$.getJSON(
				ProjectData.getQuestDataPath(ProjectData.language),
				(data: any) => {
					this.questAllData[ProjectData.language] = data;
					let allData = this.questAllData[ProjectData.language];
					let qn: any = {};
					let qid: any = {};
					for (let key in allData) {
						let questList = allData[key].data;
						let nameIndex = 0;
						let fakeQuestList = [];
						if (questList) {
							for (let i = 0; i < questList.length; i++) {
								let quest = questList[i];
								qn[quest.title] = quest;
								qid[quest.quest_id] = quest;
								// //添加一个假任务
								let fakeQuest = Utils.deepClone(ProjectData.fakeQuest);
								fakeQuest.x = quest.x;
								fakeQuest.y = quest.y;
								fakeQuest.name = nameIndex; // quest.quest_id;
								nameIndex++;
								fakeQuest.symbolSize = Math.ceil(quest.symbolSize * 1.3);
								fakeQuest.symbol =
									"image://static/" +
									(quest.is_main == 1 ? "main" : "not_main") +
									".png";
								fakeQuestList.push(fakeQuest);
							}
						}
						allData[key].data = fakeQuestList.concat(allData[key].data);
					}
					this.titleToQuest[ProjectData.language] = qn;
					this.questIdToQuest[ProjectData.language] = qid;
					this.initMainIframe();
				}
			);
		}
	}

	createButton(index: number, quest: questLine) {
		const button = $("<button>", {
			id: "btnQuest_" + index,
			class: "questButton unselected",
			click: (btn: any) => {
				this.buttonList.forEach((button, index) => {
					if (button[0] == btn.currentTarget) {
						localStorage.setItem(localEnum.selectBtnIndex, index.toString());
						button.removeClass("unselected").addClass("selected");
					} else {
						button.removeClass("selected").addClass("unselected");
					}
				});
				let data: any = {
					title: ProjectData.language.includes("zh") ? quest.title_zh : quest.title,
					data: this.questAllData[ProjectData.language][quest.quest],
				};
				this.getPageData(data)
				this.oldQuestData = Utils.deepClone(data);
				ProjectData.isPhone || this.onClosePop();

				this.toggleSidebar();
			},
		});
		button.data("questData", quest);

		const img = $("<img>", {
			src: ProjectData.getPath(`quests_icons/QuestLineIcon/${quest.quest}.png`),
			class: "questIcon",
		});

		const txt = $("<span>", {
			text: ProjectData.language.includes("zh") ? quest.title_zh : quest.title,
			class: "questText",
		});

		button.append(img);
		button.append(txt);
		return button;
	}

	initMainIframe() {
		//处理一些零碎的数据
		$("#search").val("");
		$("#search").attr(
			"placeholder",
			ProjectData.language == lang.zh ? "搜索任务" : "Search Quest"
		);

		let selectBtnIndex = localStorage.getItem(localEnum.selectBtnIndex);
		let btn: JQuery<HTMLElement> | undefined;
		if (selectBtnIndex && this.buttonList && this.buttonList.length) {
			btn = this.buttonList[parseInt(selectBtnIndex)];
		} else {
			btn = this.buttonList[0];
		}
		btn?.removeClass("unselected").addClass("selected");

		if (this.buttonList.length) {
			for (let i = 0; i < this.buttonList.length; i++) {
				let btn = this.buttonList[i];
				let quest: questLine = btn.data("questData");
				let title =
					ProjectData.language == lang.zh ? quest.title_zh : quest.title;
				btn.find(".questText").text(title!);
			}
		}

		let quest: questLine = btn.data("questData");
		let questData: questData =
			this.questAllData[ProjectData.language][quest.quest];
		if (questData) {
			let data: any = {
				title: ProjectData.language == lang.zh ? quest.title_zh : quest.title,
				data: questData,
			};
			this.getPageData(data)
			this.oldQuestData = Utils.deepClone(data);
			TipsMgr.hideLoading();
			if (ProjectData.urlParameter.has("key")) {
				var tempQuestId = ProjectData.urlParameter.get("key")!;
				console.log(tempQuestId);
				console.log(ProjectData.language);
				console.log(this.questIdToQuest);
				console.log(this.questIdToQuest[ProjectData.language]);
				for (let questId in this.questIdToQuest[ProjectData.language]) {
					if (tempQuestId == questId) {
						PopMgr.showPopup(
							this.questIdToQuest[ProjectData.language][questId]
						);
					}
				}
			}
		} else {
			console.error("任务数据异常");
			TipsMgr.showTips("任务数据异常");
		}
	}



	//事件
	onGetMessageFromIframe = (event: MessageEvent) => {
		let data: m2qData = event.data;
		switch (data.action) {
			case msgAction.ready:
				// this.initMainIframe();
				break;
			case msgAction.showPopup:
				// 展示任务详情
				let quest = this.questIdToQuest[ProjectData.language][data.data];
				if (quest) {
					PopMgr.showPopup(quest);
				} else {
					console.warn("任务ID没有对应数据！" + data.data);
				}
				break;
			default:
				console.warn("未知的消息", data);
				break;
		}
	};
	onKeyDown = (event: KeyboardEvent) => {
		if (event.key == "r") {
			this.resetChart();
		}
	};

	onClickLogo = () => {
		EeggMgr.showEegg();
	};

	onRightClickLogo = (evt: Event) => {
		evt.preventDefault(); //拦截邮件点击
		evt.stopPropagation(); //拦截事件冒泡
		console.warn("右键点击");
	};

	toggleSidebar = () => {
		let sidebarWidth = $("#sidebar").width();
		$("#toggleSidebar").hide();
		// TipsMgr.showLoading();
		let time = ProjectData.isPhone ? 250 : 500;
		setTimeout(() => {
			$("#toggleSidebar").show();
			// TipsMgr.hideLoading();
		}, time);
		if (!this.showSidebar) {
			$("#sidebar").animate({ left: `-${sidebarWidth}px` }, time);
			if (!ProjectData.isPhone) {
				$("#mainPage").animate(
					{
						left: "0px",
						width: "100%",
					},
					time
				);
			}
			this.showSidebar = true;
		} else {
			$("#sidebar").animate({ left: "0px" }, time);
			if (!ProjectData.isPhone) {
				let width = $(window).width()! - sidebarWidth!;
				$("#mainPage").animate(
					{
						left: `${sidebarWidth}px`,
						width: width + "px",
					},
					time
				);
			}
			this.showSidebar = false;
		}
	};

	onSearchFocus = () => {
		// this.sendMessageToIframe({ action: msgAction.showSearchPopup, data: null });
	};

	onSeachInput = () => {
		let value = $("#search").val();
		if (value) {
			if ($("#btnCloseSp").css("display") == "none") {
				$("#btnCloseSp").show();
				$("#btnCloseSp").animate({ opacity: 1 }, 500);
			}

			ProjectData.isPhone && $("#logoBg").animate({ opacity: 0.4 }, 500);

			let questList: quest[] = [];
			for (let key in this.titleToQuest[ProjectData.language]) {
				if (
					key
						.toLocaleUpperCase()
						.indexOf(value.toString().toLocaleUpperCase()) != -1
				) {
					let tempQuest = this.titleToQuest[ProjectData.language][key];
					if (tempQuest.title != undefined) {
						questList.push(tempQuest);
					}
				}
			}
			this.showSearchPopup(questList);
		} else {
			this.onClosePop();
		}
	};

	onClosePop = () => {
		$("#search").val("");
		$("#btnCloseSp").hide();
		$("#btnCloseSp").css("opacity", 0);
		ProjectData.isPhone && $("#logoBg").css("opacity", 1);
		if (ProjectData.isPhone) {
			this.getPageData(this.oldQuestData);
		} else {
			this.clearSearchList();
		}
	};
	onSearchBlur = () => { };

	onChangeLang = () => {
		TipsMgr.showLoading();
		if (ProjectData.language == lang.zh) {
			ProjectData.language = lang.en;
		} else {
			ProjectData.language = lang.zh;
		}

		localStorage.setItem(localEnum.language, ProjectData.language);

		this.initTitle();

		ProjectData.isPhone || this.onClosePop();
		this.loadQuestData();
	};

	onClickInfo() {
		PopMgr.showInfoPopup();
	}

	onClickTop = () => {
		// $("#btnTop").animate({ opacity: 0 }, 500);
		if (!this.showSidebar) {
			$("#sidebar").animate({ scrollTop: 0 }, 500);
		} else {
			this.toTop();
		}
	};




	//--------------以下是 “子域” -----------------
	// 重置echarts
	resetChart() {
		this.echarts?.clear();
		this.echarts?.resize();
		this.echarts?.setOption(this.pageData);
	}

	getPageData(res: { data: questData; title: string }) {
		if (ProjectData.isPhone) {
			this.showSearchPopup(res.data.data);
		} else {
			Utils.typeText("#questTitle", res.title);
			this.pageData = Utils.deepClone(ProjectData.echartsConfig);
			this.pageData.series[0].data = res.data.data;
			this.pageData.series[0].links = res.data.links;
			this.initEcharts();
		}
	}


	//桌面端才有的
	initEcharts() {
		if (!this.echarts) {
			this.echarts = echarts.init(
				document.getElementById("this_chart") as HTMLDivElement,
				"white",
				{ renderer: "canvas" }
			);
			this.echarts.on("click", (params: any) => {
				if (
					params.dataType === "node" &&
					params.data.hasOwnProperty("quest_id")
				) {
					PopMgr.showPopup(params.data);
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
			case msgAction.closeSearchPopup:
				this.clearSearchList();
				break;
			case msgAction.toTop:
				this.toTop();
				break;
			default:
				console.warn("未知的消息", data);
				break;
		}
	};

	showSearchPopup(res?: quest[]) {
		$("#questSearchList").empty();
		if (res && res.length) {
			this.questList = res;
			this.showSearchList();
			$("#searchPopup").show();
		}
	}

	clearSearchList() {
		$("#questSearchList").empty();
		$("#searchPopup").hide();
	}

	toTop() {
		$("#questSearchList").animate({ scrollTop: 0 }, 500);
	}

	showSearchList() {
		if (this.questList && this.questList.length) {
			for (let i = 0; i < this.questList.length; i++) {
				let quest = this.questList[i];
				if (quest && quest.title != undefined) {
					let item: JQuery<HTMLElement>;
					item = $(
						`<div class="searchItem" data-id="${quest.quest_id}"></div>`
					);
					let img = $(
						`<img class="searchImg" src="${quest.symbol.replace(
							"image://",
							""
						)}" />`
					);
					let title = $(
						`<div class="searchTitle">${Utils.expMCcolor(quest.title)}</div>`
					);
					let desc = $(
						`<div class="searchDesc">${Utils.expMCcolor(
							quest.data.substring(0, 50)
						)}</div>`
					);
					item.append(img);
					item.append(title);
					item.append(desc);
					// item.on("click", () => {
					// 	this.sendMessageToMain({
					// 		action: msgAction.showPopup,
					// 		data: quest.quest_id,
					// 	});
					// });
					PopMgr.showPopup(quest);
					$("#questSearchList").append(item);
				} else {
					// console.warn(quest);
				}
			}
		}
	}
}
