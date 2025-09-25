import {
	lang,
	localEnum,
	quest,
	questAllData,
	questData,
	questLine,
} from "./Define";
import { EeggMgr } from "./EeggMgr";
import { PopMgr } from "./PopMgr";
import { ProjectConfig } from "./ProjectConfig";
import { ProjectData } from "./ProjectData";
import { QuestList } from "./QuestList";
import { TipsMgr } from "./TipsMgr";
import { Utils } from "./Utils";

export class MainPage {
	private questLine: questLine[] = [];
	private buttonList: JQuery<HTMLElement>[] = [];
	/**是否展示侧边栏 */
	private isSidebarHide: boolean = false;
	/**所有任务的数据 */
	private questAllData: { [lang: string]: questAllData } = {};

	/**标题对应任务数据 */
	private titleToQuest: { [lang: string]: { [key: string]: quest } } = {};
	/**任务ID对应任务数据 */
	private questIdToQuest: { [lang: string]: { [key: string]: quest } } = {};

	private oldQuestData: { title: string; data: any } = null!;

	private startX = 0;
	private startY = 0;

	constructor() {
		$(() => {
			TipsMgr.showLoading();

			let url = new URL(window.location.href);
			ProjectData.urlParameter = Utils.processUrlParameters(url);
			ProjectData.basicUrl = url.origin;
			this.initVersion();
			this.initPlatform();
			this.initLang();
			this.initPage();
			this.addEvent();
			this.loadQuestLine();
			this.showProjectMsg();
		});
	}

	initPlatform() {
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

	initVersion() {
		ProjectData.selectVersionIndex = parseInt(
			localStorage.getItem(localEnum.selectVersionIndex) || "0"
		);
	}

	initPage() {
		for (let i = 0; i < ProjectConfig.versionList.length; i++) {
			let option = $("<option>", {
				text: ProjectConfig.versionList[i],
				value: ProjectConfig.versionList[i],
			});
			$("#versionSelect").append(option);
		}

		$("#versionSelect").val(
			ProjectConfig.versionList[ProjectData.selectVersionIndex]
		);
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
		$("#toggleSidebar").on("click", this.toggleSidebar);

		addEventListener("keydown", this.onKeyDown);

		addEventListener("touchstart", (e: TouchEvent) => {
			this.startX = e.touches[0].pageX;
			this.startY = e.touches[0].pageY;
		});

		addEventListener("touchend", this.whenRightSlide);

		$("#logoImg").on("click", this.onClickLogo);
		$("#logoImg").on("contextmenu", this.onRightClickLogo);
		$("#search").on("focus", this.onSearchFocus);
		$("#search").on("blur", this.onSearchBlur);
		$("#search").on("input", this.onSeachInput);

		$("#btnCloseSp").on("click", this.onClosePop);

		$("#changeLang").on("click", this.onChangeLang);

		$("#btnShowMsg").on("click", this.onClickInfo);

		$("#btnTop").on("click", this.onClickTop);

		$("#versionSelect").on("change", (e: any) => {
			if (ProjectData.selectVersionIndex != e.target.selectedIndex) {
				ProjectData.selectVersionIndex = e.target.selectedIndex;
				localStorage.setItem(
					localEnum.selectVersionIndex,
					ProjectData.selectVersionIndex.toString()
				);
				//直接刷新页面即可
				location.reload();
			}
		});
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
		if (
			this.questAllData &&
			this.questAllData[ProjectData.language] != null
		) {
			this.initQuestList();
		} else {
			$.getJSON(
				ProjectData.getQuestDataPath(ProjectData.language),
				(data: any) => {
					let versionCode = ProjectData.getVersion();
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
								quest.symbol =
									"image://version/" +
									versionCode +
									"/quests_icons/QuestIcon/" +
									Utils.processBase64ToBinary(
										quest.quest_id
									) +
									".png";
								qn[quest.title] = quest;
								qid[quest.quest_id] = quest;
								// //添加一个假任务
								let fakeQuest = Utils.deepClone(
									ProjectData.fakeQuest
								);
								fakeQuest.x = quest.x;
								fakeQuest.y = quest.y;
								fakeQuest.name = nameIndex; // quest.quest_id;
								nameIndex++;
								fakeQuest.symbolSize = Math.ceil(
									quest.symbolSize * 1.3
								);
								fakeQuest.symbol =
									"image://static/" +
									(quest.is_main == 1 ? "main" : "not_main") +
									".png";
								fakeQuestList.push(fakeQuest);
							}
						}
						allData[key].data = fakeQuestList.concat(
							allData[key].data
						);
					}
					this.titleToQuest[ProjectData.language] = qn;
					this.questIdToQuest[ProjectData.language] = qid;
					this.initQuestList();
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
						localStorage.setItem(
							localEnum.selectBtnIndex,
							index.toString()
						);
						button.removeClass("unselected").addClass("selected");
					} else {
						button.removeClass("selected").addClass("unselected");
					}
				});
				let data: any = {
					title: ProjectData.language.includes("zh")
						? quest.title_zh
						: quest.title,
					data: this.questAllData[ProjectData.language][quest.quest],
				};
				QuestList.getPageData(data);
				this.oldQuestData = Utils.deepClone(data);

				ProjectData.isPhone || this.onClosePop();

				ProjectData.isPhone && this.toggleSidebar();
			},
		});
		button.data("questData", quest);

		const img = $("<img>", {
			src: ProjectData.getPath(
				`quests_icons/QuestLineIcon/${quest.quest}.png`
			),
			class: "questIcon",
		});

		const txt = $("<span>", {
			text: ProjectData.language.includes("zh")
				? quest.title_zh
				: quest.title,
			class: "questText",
		});

		button.append(img);
		button.append(txt);
		return button;
	}

	initQuestList() {
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
					ProjectData.language == lang.zh
						? quest.title_zh
						: quest.title;
				btn.find(".questText").text(title!);
			}
		}

		let quest: questLine = btn.data("questData");
		let questData: questData =
			this.questAllData[ProjectData.language][quest.quest];
		if (questData) {
			let data: any = {
				title:
					ProjectData.language == lang.zh
						? quest.title_zh
						: quest.title,
				data: questData,
			};
			QuestList.getPageData(data);
			this.oldQuestData = Utils.deepClone(data);
			TipsMgr.hideLoading();
			this.checkHasQuestIdInParameters();
		} else {
			console.error("任务数据异常");
			TipsMgr.showTips("任务数据异常");
		}
	}

	checkHasQuestIdInParameters() {
		if (ProjectData.urlParameter.has("id")) {
			var tempQuestId = ProjectData.urlParameter.get("id")!;
			if (tempQuestId in this.questIdToQuest[ProjectData.language]) {
				PopMgr.showPopup(
					this.questIdToQuest[ProjectData.language][tempQuestId]
				);
			} else {
				console.error("任务id有误");
				TipsMgr.showTips("任务id有误");
			}
		}
	}

	onKeyDown = (event: KeyboardEvent) => {
		if (event.key == "r") {
			QuestList.resetChart();
		}
	};

	onClickLogo = () => {
		EeggMgr.showEegg();
	};

	onRightClickLogo = (evt: Event) => {
		evt.preventDefault(); //拦截邮件点击
		evt.stopPropagation(); //拦截事件冒泡
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
		if (!this.isSidebarHide) {
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
			this.isSidebarHide = true;
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
			this.isSidebarHide = false;
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
					let tempQuest =
						this.titleToQuest[ProjectData.language][key];
					if (tempQuest.title != undefined) {
						questList.push(tempQuest);
					}
				}
			}
			QuestList.showSearchPopup(questList);
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
			QuestList.getPageData(this.oldQuestData);
		} else {
			QuestList.clearSearchList();
		}
	};
	onSearchBlur = () => {};

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
		if (!this.isSidebarHide) {
			$("#sidebar").animate({ scrollTop: 0 }, 500);
		} else {
			QuestList.toTop();
		}
	};

	whenRightSlide = (e: TouchEvent) => {
		const offsetX = e.changedTouches[0].clientX - this.startX;
		const offsetY = e.changedTouches[0].clientY - this.startY;
		if (
			Math.abs(offsetY) <= 10 &&
			offsetX > 50 &&
			this.isSidebarHide &&
			ProjectData.isPhone
		) {
			this.toggleSidebar();
		}
	};
}
