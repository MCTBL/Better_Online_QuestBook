var win = window;
var $ = window.$;
export class index {
    constructor() {
        this.questList = [];
        $(document).ready(() => {
            $.getJSON("./res/quest_line.json", (data) => {
                this.questList = data;
                this.questList.forEach((quest, index) => {
                    let button = this.createButton(index, quest);
                    $("#sidebar").append(button);
                });
            });
        });
    }
    createButton(index, quest) {
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
    sendMessageToIframe(msg) {
        $("#mainIframe").contentWindow.postMessage(msg, "*");
    }
}
new index();
