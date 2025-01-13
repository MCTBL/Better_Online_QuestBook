export class index {
    constructor() {
        this.questList = [];
        this.buttonList = [];
        this.addEvent();
        this.loadList();
    }
    addEvent() {
        $("#search").on("input", (e) => {
            const text = $(e.target).val().toString();
            $(".questButton").each((index, element) => {
                var _a, _b;
                const button = $(element);
                const questData = button.data("questData");
                if (questData.title.includes(text) || ((_a = questData.title_zh) === null || _a === void 0 ? void 0 : _a.includes(text)) || ((_b = questData.search_key) === null || _b === void 0 ? void 0 : _b.includes(text))) {
                    button.show();
                }
                else {
                    button.hide();
                }
            });
        });
    }
    loadList() {
        $(document).ready(() => {
            $.getJSON("./res/quest_line.json", (data) => {
                this.questList = data;
                this.questList.forEach((quest, index) => {
                    let button = this.createButton(index, quest);
                    $("#sidebar").append(button);
                    this.buttonList.push(button);
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
    sendMessageToIframe(msg) {
    }
}
new index();
