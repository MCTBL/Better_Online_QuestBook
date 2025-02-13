import { quest } from "./Define.js";
import { TipsMgr } from "./TipsMgr.js";
import { Utils } from "./Utils.js";

export class PopMgr {
	private static nowTitle: string = "";
	private static nowDesc: string = "";
	private static nowID: string = "";
	private static nowLogo: string = "";

	static onCopyDesc = () => {
		Utils.copyH5Str(Utils.removeHTMLTags(`${this.nowTitle}\n${this.nowDesc}`));
		TipsMgr.showTips("复制成功");
	};

	static onCopyId = () => {
		Utils.copyH5Str(this.nowID);
		TipsMgr.showTips("复制成功");
	};

	static showPopup(res: quest) {
		this.nowTitle = Utils.expMCcolor(res.title);
		this.nowDesc = this.processDesc(Utils.expMCcolor(res.data));
		this.nowID = res.quest_id;
		this.nowLogo = res.symbol.replace("image://", "");

		$("#quest_id").text(this.nowID);
		$("#popTitle").html("<h1>" + this.nowTitle + "</h1>");
		$("#popDesc").html(this.nowDesc);
		$("#quest_logo")[0].setAttribute("src", this.nowLogo);

		$("#popup").css("display", "flex");
		$("#overlay").css("display", "block");
		$("#mainPage").focus();

		$("#copyBtn").off("click", this.onCopyDesc);
		// 绑定点击复制任务详情
		$("#copyBtn").on("click", this.onCopyDesc);
		// 绑定点击复制任务ID
		$("#copyIdBtn").off("click", this.onCopyId);
		$("#copyIdBtn").on("click", this.onCopyId);

		$("btnClosePop").off("click", this.hidePopup);
		$("#btnClosePop").on("click", this.hidePopup);

		$("#screenShot").off("click", this.screenShot);
		$("#screenShot").on("click", this.screenShot);
	}

	static processDesc(desc: string): string {
		let temp = desc.split(/\[\/?url\]/);
		let new_desc = "";
		for (let i = 0; i < temp.length; i++) {
			if (temp[i] !== undefined) {
				if (i % 2 === 1 && temp[i].trim().length > 0) {
					let temp_str = temp[i];
					new_desc += `<a href="${temp_str}">${temp_str}</a>`;
				} else {
					new_desc += temp[i];
				}
			}
		}

		temp = new_desc.split(/\[\/?note\]/);
		new_desc = "";
		for (let i = 0; i < temp.length; i++) {
			if (temp[i] !== undefined) {
				if (i % 2 === 1 && temp[i].trim().length > 0) {
					let temp_str = temp[i];
					new_desc += `<note style='color:#00AAAA'>${temp_str}</note>`;
				} else {
					new_desc += temp[i];
				}
			}
		}

		temp = new_desc.split(/\[\/?warn\]/);
		new_desc = "";
		for (let i = 0; i < temp.length; i++) {
			if (temp[i] !== undefined) {
				if (i % 2 === 1 && temp[i].trim().length > 0) {
					let temp_str = temp[i];
					new_desc += `<warn style='color:#AA0000'>${temp_str}</warn>`;
				} else {
					new_desc += temp[i];
				}
			}
		}
		return new_desc;
	}

	static hidePopup() {
		$("#popup").css("display", "none");
		$("#overlay").css("display", "none");
	}

	static screenShot() {
		// Utils.screenShot();
	}
}
