import { m2qData, msgAction, quest } from "./Define.js";

export class MainPage {
    private questList: quest[] = [];
    private buttonList: JQuery<HTMLElement>[] = [];
    constructor() {
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

        addEventListener("message", (event: MessageEvent) => {
            this.onGetMessage(event);
        });
    }

    loadList() {
        $.getJSON("./version/272/quest_line.json", (data: any) => {
            this.questList = data;
            this.questList.forEach((quest, index) => {
                let button = this.createButton(index, quest);
                $("#sidebar").append(button);
                this.buttonList.push(button);
            });
        });
    }

    createButton(index: number, quest: quest) {
        const button = $('<button>', {
            id: "btnQuest_" + index,
            class: 'questButton outline',
            click: () => {
                let data: m2qData = { action: msgAction.init, data: quest.url };
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


    onGetMessage(event: MessageEvent) {
        console.warn(event);
        let data: m2qData = event.data;
        switch (data.action) {
            case msgAction.ready:
                this.initMainIframe();
                break;
        }
    }

    initMainIframe() {
        let url = localStorage.getItem("mainIframeUrl");
        if (url) {
            let data: m2qData = { action: msgAction.init, data: url };
            this.sendMessageToIframe(data);
        } else {
            let data: m2qData = { action: msgAction.init, data: this.questList[0].url };
            this.sendMessageToIframe(data);
        }
    }

    sendMessageToIframe(msg: m2qData) {
        const iframe = $("#mainIframe")[0] as HTMLIFrameElement;
        iframe.contentWindow!.postMessage(msg, "*");
    }
}

