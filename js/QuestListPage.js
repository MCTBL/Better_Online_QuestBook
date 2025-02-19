import { msgAction } from "./Define.js";
import { ProjectData } from "./ProjectData.js";
import { Utils } from "./Utils.js";
export class QuestListPage {
    constructor() {
        this.onMessageFromMain = (event) => {
            let data = event.data;
            switch (data.action) {
                case msgAction.init:
                    this.getPageData(data.data);
                    break;
                case msgAction.resetChart:
                    this.resetChart();
                    break;
                case msgAction.showSearchPopup:
                    this.showSearchPopup(data.data);
                    break;
                case msgAction.closeSearchPopup:
                    this.clearSearchList();
                    break;
                default:
                    console.warn("未知的消息", data);
                    break;
            }
        };
        this.init();
    }
    init() {
        $(() => {
            this.addEvent();
        });
    }
    sendMessageToMain(data) {
        window.parent.postMessage(data, "*");
    }
    addEvent() {
        addEventListener("message", this.onMessageFromMain);
    }
    // 重置echarts
    resetChart() {
        var _a, _b, _c;
        (_a = this.echarts) === null || _a === void 0 ? void 0 : _a.clear();
        (_b = this.echarts) === null || _b === void 0 ? void 0 : _b.resize();
        (_c = this.echarts) === null || _c === void 0 ? void 0 : _c.setOption(this.pageData);
    }
    getPageData(res) {
        this.pageData = Utils.deepClone(ProjectData.echartsConfig);
        this.pageData.series[0].data = res.data.data;
        this.pageData.series[0].links = res.data.links;
        Utils.typeText("#questTitle", res.title);
        this.initEcharts();
    }
    initEcharts() {
        if (!this.echarts) {
            this.echarts = echarts.init(document.getElementById("this_chart"), "white", { renderer: "canvas" });
            this.echarts.on("click", (params) => {
                if (params.dataType === "node" &&
                    params.data.hasOwnProperty("quest_id")) {
                    this.sendMessageToMain({
                        action: msgAction.showPopup,
                        data: params.data.quest_id,
                    });
                }
            });
            window.addEventListener("resize", () => {
                var _a;
                (_a = this.echarts) === null || _a === void 0 ? void 0 : _a.resize();
            });
        }
        this.resetChart();
    }
    showSearchPopup(res) {
        $("#questSearchList").empty();
        if (res && res.length) {
            this.questList = res;
            this.showSearchList();
            $("#searchPopup").show();
        }
    }
    clearSearchList() {
        $("#questSearchList").empty();
        $("#searchPopup").hide();
    }
    showSearchList() {
        if (this.questList && this.questList.length) {
            for (let i = 0; i < this.questList.length; i++) {
                let quest = this.questList[i];
                // <div class="searchItem" data-id="1">
                // 	<img class="searchImg" src="http://192.168.50.82:9192/version/272/quests_icons/QuestIcon/2925.png" />
                // 	<div class="searchTitle">熟练的神秘使</div>
                // 	<div class="searchDesc">我已经掌握了基本的魔法知识.师傅给我讲过一些关于禁忌魔法的事情.但是这个听起来挺有前途的.我认为稍微研究</div>
                // </div>
                if (quest && quest.title != undefined) {
                    let item;
                    item = $(`<div class="searchItem" data-id="${quest.quest_id}"></div>`);
                    let img = $(`<img class="searchImg" src="${quest.symbol.replace("image://", "")}" />`);
                    let title = $(`<div class="searchTitle">${Utils.expMCcolor(quest.title)}</div>`);
                    let desc = $(`<div class="searchDesc">${Utils.expMCcolor(quest.data.substring(0, 50))}</div>`);
                    item.append(img);
                    item.append(title);
                    item.append(desc);
                    item.on("click", () => {
                        this.sendMessageToMain({
                            action: msgAction.showPopup,
                            data: quest.quest_id,
                        });
                    });
                    $("#questSearchList").append(item);
                }
                else {
                    console.warn(quest);
                }
            }
        }
    }
}
new QuestListPage();
