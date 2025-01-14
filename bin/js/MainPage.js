import { msgAction } from "./Define.js";
export class MainPage {
    constructor() {
        this.questList = [];
        this.buttonList = [];
        $(() => {
            this.addEvent();
            this.loadList();
        });
    }
    addEvent() {
        // $("#search").on("input", (e) => {
        //     const text = $(e.target)!.val()!.toString();
        //     $(".questButton").each((index, element) => {
        //         const button = $(element);
        //         const questData = button.data("questData");
        //         if (questData.title.includes(text) || questData.title_zh?.includes(text) || questData.search_key?.includes(text)) {
        //             button.show();
        //         } else {
        //             button.hide();
        //         }
        //     });
        // });
        addEventListener("message", (event) => {
            this.onGetMessage(event);
        });
    }
    loadList() {
        $.getJSON("./version/272/quest_line.json", (data) => {
            this.questList = data;
            this.questList.forEach((quest, index) => {
                let button = this.createButton(index, quest);
                $("#sidebar").append(button);
                this.buttonList.push(button);
            });
        });
    }
    createButton(index, quest) {
        const button = $('<button>', {
            id: "btnQuest_" + index,
            class: 'questButton outline',
            click: () => {
                let data = { action: msgAction.init, data: quest.url };
                this.sendMessageToIframe(data);
            }
        });
        button.data("questData", quest);
        const img = $('<img>', {
            src: "./icon/" + quest.icon + ".png",
            class: 'questIcon'
        });
        const txt = $('<span>', {
            text: quest.title_zh ? quest.title_zh : quest.title,
            class: 'questText'
        });
        button.append(img);
        button.append(txt);
        return button;
    }
    onGetMessage(event) {
        console.warn(event);
        let data = event.data;
        switch (data.action) {
            case msgAction.ready:
                this.initMainIframe();
                break;
        }
    }
    initMainIframe() {
        let url = localStorage.getItem("mainIframeUrl");
        if (url) {
            let data = { action: msgAction.init, data: url };
            this.sendMessageToIframe(data);
        }
        else {
            let data = { action: msgAction.init, data: this.questList[0].url };
            this.sendMessageToIframe(data);
        }
    }
    sendMessageToIframe(msg) {
        const iframe = $("#mainIframe")[0];
        iframe.contentWindow.postMessage(msg, "*");
    }
}
