import { myDialog } from "./Define.js";
export class TipsMgr {
    static showDialog(content, caller, sure, cancel, onlySure = true, title = "提示", sureMsg = "确定", cancelMsg = "取消") {
        if (!this.dialog) {
            $("body").append(myDialog);
            this.dialog = $("#myDialog");
        }
        let dialog = this.dialog.get(0);
        this.dialog.find(".dialogContent").text(content);
        this.dialog.find("header p strong").text(title);
        if (onlySure) {
            this.dialog.find("footer button.secondary").hide();
        }
        else {
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
            }
            else {
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
