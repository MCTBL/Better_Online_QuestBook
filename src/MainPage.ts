import { localEnum, m2qData, msgAction, quest, questAllData, questData, questLine } from "./Define.js";
import { PopMgr } from "./PopMgr.js";
import { ProjectConfig } from "./ProjectConfig.js";
import { ProjectData } from "./ProjectData.js";
import { Utils } from "./Utils.js";

export class MainPage {
	private questLine: questLine[] = [];
	private buttonList: JQuery<HTMLElement>[] = [];
	/**是否展示侧边栏 */
	private showSidebar: boolean = true;
	/**所有任务的数据 */
	private questAllData: questAllData = {};
	/**所有任务的无序数据，用于检索 */
	private questList: quest[] = [];



	constructor() {
		$(() => {
			const iframe = $("#mainIframe");
			iframe.on("load", () => {//iframe加载完成
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

	addEvent() {
		addEventListener("message", (event: MessageEvent) => {
			this.onGetMessageFromIframe(event);
		});
		$("#toggleSidebar").click(this.toggleSidebar);
		// 绑定点击消失
		$("#overlay").click(() => {
			PopMgr.hidePopup();
		});
		// 绑定点击复制任务详情
		$("#copyBtn").click(() => {
			var str = "";
			str += document.getElementById("title")!.innerText;
			str += "\n";
			str += document.getElementById("desc")!.innerText;
			Utils.copyH5Str(str);
			this.showTips("复制成功");
		});
		// 绑定点击复制任务ID
		$("#copyIdBtn").click(() => {
			Utils.copyH5Str(document.getElementById("quest_id")!.innerText);
			this.showTips("复制成功");
		});
		addEventListener("keydown", (event: KeyboardEvent) => {
			if (event.key == "Escape" || event.key == "e") {
				PopMgr.hidePopup();
			}
			if (event.key == "r") {
				let data: m2qData = { action: msgAction.resetChart, data: null };
				this.sendMessageToIframe(data);
			}
		});

		$("#logoImg").click(() => {
			//TODO 随机多次点击才能出现的 添加梦大师语录或者其他彩蛋
			// this.showTips("GTNH like a job");
		});
	}

	toggleSidebar() {
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
	}

	// 加载任务列表
	loadQuestLine() {
		$.getJSON(ProjectData.getQuestLinePath(), (data: any) => {
			this.questLine = data;
			this.questLine.forEach((quest, index) => {
				let button = this.createButton(index, quest);
				$("#sidebar").append(button);
				this.buttonList.push(button);
			});
			this.loadQuestData();
		});
	}


	loadQuestData() {
		$.getJSON(ProjectData.getQuestDataPath(), (data: any) => {
			this.questAllData = data;
			for (let key in this.questAllData) {
				this.questList.push(...this.questAllData[key].data);
			}
			this.initMainIframe();
		});
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
					data: this.questAllData[quest.quest],
				};

				this.sendMessageToIframe(data);
			},
		});
		button.data("questData", quest);

		// TODO change to json's icon
		const img = $("<img>", {
			src: ProjectData.getPath(`quests_icons/QuestLineIcon/${quest.quest}.png`),
			class: "questIcon",
		});

		const txt = $("<span>", {
			text: quest.title_zh ? quest.title_zh : quest.title,
			class: "questText",
		});

		button.append(img);
		button.append(txt);
		return button;
	}

	initMainIframe() {
		let selectBtnIndex = localStorage.getItem(localEnum.selectBtnIndex);
		let btn: JQuery<HTMLElement> | undefined;
		if (selectBtnIndex && this.buttonList && this.buttonList.length) {
			btn = this.buttonList[parseInt(selectBtnIndex)];
		} else {
			btn = this.buttonList[0];
		}
		btn?.removeClass("unselected").addClass("selected");
		let quest: string = btn.data("questData").quest;
		let questData: questData = this.questAllData[quest];
		if (questData) {
			let data: m2qData = {
				action: msgAction.init,
				data: questData,
			};
			console.log(data);
			this.sendMessageToIframe(data);
		} else {
			console.error("任务数据异常");
			this.showTips("任务数据异常");
		}

	}

	/**发送消息到子域 */
	sendMessageToIframe(msg: m2qData) {
		const iframe = $("#mainIframe")[0] as HTMLIFrameElement;
		iframe.contentWindow!.postMessage(msg, "*");
	}

	onGetMessageFromIframe(event: MessageEvent) {
		console.warn(event);
		let data: m2qData = event.data;
		switch (data.action) {
			case msgAction.ready:
				// this.initMainIframe();
				break;
			case msgAction.showPopup:
				// 展示任务详情
				PopMgr.showPopup(data.data.title, data.data.desc, data.data.ID);
				break;
		}
	}

	private tipsTimer: number = 0;
	showTips(msg: string) {
		$("#tips").text(msg);
		$("#tips").css("width", (msg.length * 30 + 40) + "px");
		$("#tips").animate({ bottom: "0px" }, 500);
		if (this.tipsTimer) {
			clearTimeout(this.tipsTimer);
			this.tipsTimer = 0;
		}
		this.tipsTimer = setTimeout(() => {
			$("#tips").animate({ bottom: "-70px" }, 500);
		}, 2000);
	}
}
