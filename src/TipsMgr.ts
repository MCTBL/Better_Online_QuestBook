import { myDialog } from "./Define.js";

export class TipsMgr {

	private static dialog: JQuery<HTMLDialogElement>;

	static showDialog(content: string, caller: any, sure: Function | null, cancel: Function | null, onlySure: boolean = true, title: string = "提示", sureMsg: string = "确定", cancelMsg: string = "取消") {
		if (!this.dialog) {
			$("body").append(myDialog) as JQuery<HTMLDialogElement>;
			this.dialog = $("#myDialog");
		}

		let dialog = this.dialog.get(0)! as HTMLDialogElement;

		this.dialog.find(".dialogContent").html(content);
		this.dialog.find("header p strong").text(title);
		if (onlySure) {
			this.dialog.find("footer button.secondary").hide();
		} else {
			this.dialog.find("footer button.secondary").show();
		}

		this.dialog.find("article header button").off("click");
		this.dialog.find("article header button").click(() => {
			dialog.close();
		});

		this.dialog.find("footer button").off("click");
		this.dialog.find("footer button").click((e) => {
			if ($(e.target).hasClass("secondary")) {
				if (cancel) {
					cancel.call(caller);
				}
			} else {
				if (sure) {
					sure.call(caller);
				}
			}
			dialog.close();
		});

		this.dialog.find("footer button").eq(0).text(cancelMsg);
		this.dialog.find("footer button").eq(1).text(sureMsg);


		dialog.showModal();

	}
}