import { m2qData, msgAction, quest } from "./Define.js";
import { hidePopup, showPopup } from "./popup.js";
import { ProjectConfig } from "./ProjectConfig.js";
import { ProjectData } from "./ProjectData.js";
import { Utils } from "./Utils.js";

export class MainPage {
	private questList: quest[] = [];
	private buttonList: JQuery<HTMLElement>[] = [];

	private showSidebar: boolean = true;

	constructor() {
		$(() => {
			this.initPage();
			this.addEvent();
			this.loadList();
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
		$("#overlay").click(function () {
			hidePopup();
		});
		// 绑定点击复制任务详情
		$("#copyBtn").click(function () {
			var str = "";
			str += document.getElementById("title")!.innerText;
			str += "\n";
			str += document.getElementById("desc")!.innerText;
			Utils.copyH5Str(str);
			console.log("成功复制");
		});
		// 绑定点击复制任务ID
		$("#copyIdBtn").click(function () {
			Utils.copyH5Str(document.getElementById("quest_id")!.innerText);
			console.log("成功复制");
		});
		addEventListener("keydown", (event: KeyboardEvent) => {
			console.log(event.key);
			if (event.key == "Escape" || event.key == "e") {
				hidePopup();
			}
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

	loadList() {
		$.getJSON(ProjectData.getQuestLinePath(), (data: any) => {
			this.questList = data;
			this.questList.forEach((quest, index) => {
				let button = this.createButton(index, quest);
				$("#sidebar").append(button);
				this.buttonList.push(button);
			});
		});
	}

	createButton(index: number, quest: quest) {
		const button = $("<button>", {
			id: "btnQuest_" + index,
			class: "questButton unselected",
			click: (btn: any) => {
				this.buttonList.forEach((button) => {
					if (button[0] == btn.currentTarget) {
						button.removeClass("unselected").addClass("selected");
					} else {
						button.removeClass("selected").addClass("unselected");
					}
				});
				let data: m2qData = { action: msgAction.init, data: quest.url };
				this.sendMessageToIframe(data);
			},
		});
		button.data("questData", quest);

		// TODO change to json's icon
		const img = $("<img>", {
			src:
				"./" +
				ProjectData.getPath("") +
				"/quests_icons/QuestLineIcon/" +
				quest.url.split("/").pop()!.replace(".js", "") +
				".png",
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
		let url = localStorage.getItem("mainIframeUrl");
		if (url) {
			let data: m2qData = { action: msgAction.init, data: url };
			this.sendMessageToIframe(data);
		} else {
			let data: m2qData = {
				action: msgAction.init,
				data: this.questList[0].url,
			};
			this.sendMessageToIframe(data);
			this.buttonList[0].removeClass("unselected").addClass("selected");
		}
	}

	sendMessageToIframe(msg: m2qData) {
		const iframe = $("#mainIframe")[0] as HTMLIFrameElement;
		iframe.contentWindow!.postMessage(msg, "*");
	}

	onGetMessageFromIframe(event: MessageEvent) {
		console.warn(event);
		let data: m2qData = event.data;
		switch (data.action) {
			case msgAction.ready:
				this.initMainIframe();
				break;
			case msgAction.showPopup:
				// 展示
				showPopup(data.data.title, data.data.desc, data.data.ID);
				break;
		}
	}
}
