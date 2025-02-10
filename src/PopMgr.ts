import { Utils } from "./Utils.js";

export class PopMgr {

    static showPopup(title: string, desc: string, ID: string) {
        if (document !== null) {
            // 写入任务id并隐藏
            $("#quest_id").text(ID).hide();
            $("#title").html("<h1>" + Utils.expMCcolor(title) + "</h1>");
            $("#desc").html(this.processDesc(Utils.expMCcolor(desc)));

            $("#popup").css("display", "flex");
            $("#overlay").css("display", "block");
            $("#mainPage").focus();
        }
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
        if (document !== null) {
            $("#popup").css("display", "none");
            $("#overlay").css("display", "none");
        }
    }
}