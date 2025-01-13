
var win = window;
var $ = (window as any).$;

export class index {

    private questList: quest[] = [];
    constructor() {
        $(document).ready(() => {
            $.getJSON("./res/quest_line.json", (data: any) => {
                this.questList = data;
                this.questList.forEach((quest, index) => {
                    let button = this.createButton(index, quest);
                    $("#sidebar").append(button);
                });
            });
        });




    }

    createButton(index: number, quest: quest) {
        const button = $('<button>', {
            id: "btnQuest_" + index,
            class: 'questButton outline',
            click: () => {
                console.log(quest.url);
            }
        });

        const img = $('<img>', {
            src: "./icon/" + quest.icon + ".png",
            class: 'questIcon'
        });

        const txt = $('<span>', {
            text: quest.title,
            class: 'questText'
        });

        button.append(img);
        button.append(txt);
        return button;
    }


    sendMessageToIframe(msg: any) {
        $("#mainIframe").contentWindow.postMessage(msg, "*");
    }


}

new index();

type quest = { title: string, url: string, icon: string }