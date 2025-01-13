export class index {

    private questList: quest[] = [];
    private buttonList: JQuery<HTMLElement>[] = [];
    constructor() {
        this.addEvent();
        this.loadList();
    }

    addEvent() {
        $("#search").on("input", (e) => {
            const text = $(e.target)!.val()!.toString();
            $(".questButton").each((index, element) => {
                const button = $(element);
                const questData = button.data("questData");
                if (questData.title.includes(text) || questData.title_zh?.includes(text) || questData.search_key?.includes(text)) {
                    button.show();
                } else {
                    button.hide();
                }
            });
        });
    }

    loadList() {
        $(document).ready(() => {
            $.getJSON("./res/quest_line.json", (data: any) => {
                this.questList = data;
                this.questList.forEach((quest, index) => {
                    let button = this.createButton(index, quest);
                    $("#sidebar").append(button);
                    this.buttonList.push(button);
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


    sendMessageToIframe(msg: any) {

    }


}

new index();

type quest = { title: string, url: string, icon: string, title_zh?: string, search_key?: string[] }