import {
    lang,
    localEnum,
    m2qData,
    msgAction,
    quest,
    questAllData,
    questData,
    questLine,
} from "./Define.js";
import { PopMgr } from "./PopMgr.js";
import { ProjectConfig } from "./ProjectConfig.js";
import { ProjectData } from "./ProjectData.js";
import { TipsMgr } from "./TipsMgr.js";
import { Utils } from "./Utils.js";

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

	constructor() {
		$(() => {
			Utils.showLoading();
			const iframe = $("#mainIframe");
			iframe.on("load", () => {
				//iframe加载完成
				this.initLang();
				this.initPage();
				this.addEvent();
				this.loadQuestLine();
			});
		});
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
		$("#search").on("focus", this.onSearchFocus);
		$("#search").on("blur", this.onSearchBlur);
		$("#search").on("input", this.onSeachInput);

		$("#btnCloseSp").on("click", this.onClosePop);

		$("#changeLang").on("click", this.onChangeLang);
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
						if (questList) {
							for (let i = 0; i < questList.length; i++) {
								let quest = questList[i];
								qn[quest.title] = quest;
								qid[quest.quest_id] = quest;
							}
						}
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
				let data: m2qData = {
					action: msgAction.init,
					data: {
						title: ProjectData.language.includes("zh")
							? quest.title_zh
							: quest.title,
						data: this.questAllData[ProjectData.language][quest.quest],
					},
				};
				this.sendMessageToIframe(data);
				this.onClosePop();
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
			let data: m2qData = {
				action: msgAction.init,
				data: {
					title: ProjectData.language == lang.zh ? quest.title_zh : quest.title,
					data: questData,
				},
			};
			this.sendMessageToIframe(data);

			Utils.hideLoading();
		} else {
			console.error("任务数据异常");
			TipsMgr.showTips("任务数据异常");
		}
	}

	/**发送消息到子域 */
	sendMessageToIframe(msg: m2qData) {
		const iframe = $("#mainIframe")[0] as HTMLIFrameElement;
		iframe.contentWindow!.postMessage(msg, "*");
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
			let data: m2qData = { action: msgAction.resetChart, data: null };
			this.sendMessageToIframe(data);
		}
	};

	onClickLogo = () => {
		//TODO 随机多次点击才能出现的 添加梦大师语录或者其他彩蛋
		// this.showTips("GTNH like a job");
	};

	toggleSidebar = () => {
		this.onClosePop();
		if (!this.showSidebar) {
			$("#sidebar").animate({ left: "-280px" }, 500);
			$("#mainPage").animate(
				{
					left: "0px",
					width: "100%",
				},
				500
			);
			this.showSidebar = true;
		} else {
			$("#sidebar").animate({ left: "0px" }, 500);
			let width = $(window).width()! - 280;
			$("#mainPage").animate(
				{
					left: "280px",
					width: width + "px",
				},
				500
			);
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
			this.sendMessageToIframe({
				action: msgAction.showSearchPopup,
				data: questList,
			});
		} else {
			this.onClosePop();
		}
	};

	onClosePop = () => {
		$("#search").val("");
		$("#btnCloseSp").hide();
		$("#btnCloseSp").css("opacity", 0);
		this.sendMessageToIframe({
			action: msgAction.closeSearchPopup,
			data: null,
		});
	};
	onSearchBlur = () => {};

	onChangeLang = () => {
		Utils.showLoading();
		if (ProjectData.language == lang.zh) {
			ProjectData.language = lang.en;
		} else {
			ProjectData.language = lang.zh;

		}

		localStorage.setItem(localEnum.language, ProjectData.language);

		this.initTitle();

		this.onClosePop();
		this.loadQuestData();
	};
}
