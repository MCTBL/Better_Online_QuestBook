import { TipsMgr } from "./TipsMgr.js";
import { Utils } from "./Utils.js";

export class PopMgr {

	private static nowTitle: string = "";
	private static nowDesc: string = "";
	private static nowID: string = "";


	static onCopyDesc = () => {
		Utils.copyH5Str(`${this.nowTitle}\n${this.nowDesc}`);
		TipsMgr.showTips("复制成功");
	}

	static onCopyId = () => {
		Utils.copyH5Str(this.nowID);
		TipsMgr.showTips("复制成功");
	}


	static showPopup(title: string, desc: string, ID: string) {

		this.nowTitle = title;
		this.nowDesc = desc;
		this.nowID = ID;

		$("#quest_id").text(ID).hide();
		$("#popTitle").html("<h1>" + Utils.expMCcolor(title) + "</h1>");
		$("#popDesc").html(this.processDesc(Utils.expMCcolor(desc)));

		$("#popup").css("display", "flex");
		$("#overlay").css("display", "block");
		$("#mainPage").focus();

		$("#copyBtn").off("click", this.onCopyDesc);
		// 绑定点击复制任务详情
		$("#copyBtn").on("click", this.onCopyDesc);
		// 绑定点击复制任务ID
		$("#copyIdBtn").off("click", this.onCopyId);
		$("#copyIdBtn").on("click", this.onCopyId);
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
}