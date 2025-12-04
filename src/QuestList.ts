import { AtlasMgr } from "./AtlasMgr";
import { quest, questData } from "./Define";
import { PopMgr } from "./PopMgr";
import { ProjectData } from "./ProjectData";
import { Utils } from "./Utils";

export class QuestList {
    private static echarts: echarts.ECharts;
    /**当前页面数据 桌面端才有的 */
    private static pageData: any;
    /**搜索任务列表 */
    private static questList: quest[];

    private static allInOneQuestList: { [key: string]: { links: []; datas: quest[][]; names: string[] } } = {};

    // 重置echarts
    static resetChart() {
        this.echarts?.clear();
        this.echarts?.resize();
        this.echarts?.setOption(this.pageData);
    }

    static getPageData(res: { data: questData; title: string }) {
        if (ProjectData.isPhone) {
            this.showSearchPopup(res.data.data);
        } else {
            Utils.typeText("#questTitle", res.title);
            this.pageData = Utils.deepClone(ProjectData.echartsConfig);
            this.pageData.series[0].data = res.data.data;
            this.pageData.series[0].links = res.data.links;
            this.initEcharts();
        }
    }

    static initAllInOne() {
        if (!this.allInOneQuestList || !this.allInOneQuestList[ProjectData.language + ProjectData.getVersion()]) {
            $.getJSON(
                ProjectData.getAllInOnePath(ProjectData.language),
                (data: { links: []; datas: { questNames: string[]; allNodesLists: [quest[]] } }) => {
                    this.allInOneQuestList[ProjectData.language + ProjectData.getVersion()] = { datas: this.processQuestData(data.datas), links: data.links, names: data.datas.questNames };
                    this.showAllInOne();
                },
                (err) => {
                    console.error("加载巨型任务数据失败", err);
                }
            );
        } else {
            this.showAllInOne();
        }
    }
    static showAllInOne() {
        QuestList.resetChart();
        this.pageData = Utils.deepClone(ProjectData.echartsConfig);
        this.pageData.series[0].links = this.allInOneQuestList[ProjectData.language + ProjectData.getVersion()].links;
        this.pageData.series[0].data = [];
        var tempData = this.allInOneQuestList[ProjectData.language + ProjectData.getVersion()];
        var count = -1;
        const _ = setInterval(() => {
            count++;
            if (count < tempData.datas.length) {
                Utils.typeText("#questTitle", tempData.names[count]);
                this.pageData.series[0].data.push(...tempData.datas[count]);
                this.echarts.setOption(this.pageData);
            } else {
                clearInterval(_);
                this.pageData.series[0].data.push({ name: "DM is GOD", symbolSize: 100, x: 0, y: 0, symbol: "image://dm.jpg" });
                this.echarts.setOption(this.pageData);
            }
        }, 1000);
    }

    static processQuestData(datas: { questNames: string[]; allNodesLists: [quest[]] }) {
        let versionCode = ProjectData.getVersion();
        let questNames = datas.questNames;
        let allNodesLists = datas.allNodesLists;
        let fakeIndex = 0;
        for (let i = 0; i < questNames.length; i++) {
            let questListName = questNames[i];
            let questList = allNodesLists[i];
            let fakeQuestList = [];
            for (let quest of questList) {
                quest.symbol = "image://version/" + versionCode + "/quests_icons/QuestIcon/" + questListName + "/" + Utils.processBase64ToDecimal(quest.quest_id);
                // 添加一个假任务作为背景
                let fakeQuest: quest = Utils.deepClone(quest);
                fakeQuest.name = String(fakeIndex++);
                fakeQuest.symbolSize = Math.ceil(quest.symbolSize * 1.3);
                fakeQuest.parentSymbol = quest.symbol;
                fakeQuest.symbol = "image://static/" + (quest.is_main == 1 ? "main" : "not_main") + ".png";
                fakeQuestList.push(fakeQuest);
            }
            // questList = fakeQuestList.concat(questList);
            allNodesLists[i] = questList;
        }
        return datas.allNodesLists;
    }

    //桌面端才有的
    static initEcharts() {
        if (!this.echarts) {
            this.echarts = echarts.init(document.getElementById("this_chart") as HTMLDivElement, "white", { renderer: "canvas" });
            this.echarts.on("click", (params: any) => {
                if (params.dataType === "node") {
                    if (params.data.hasOwnProperty("parentSymbol")) {
                        let data: quest = Utils.deepClone(params.data);
                        data.symbol = data.parentSymbol!;
                        PopMgr.showPopup(data);
                    } else if (params.data.hasOwnProperty("quest_id")) {
                        PopMgr.showPopup(params.data);
                    }
                }
            });

            const chartElement = $("#mainPage")[0] as HTMLDivElement;
            const resizeObserver = new ResizeObserver(() => {
                this.onResize();
            });
            resizeObserver.observe(chartElement);
        }
        this.resetChart();
    }

    static onResize() {
        this.echarts?.resize();
    }

    static showSearchPopup(res?: quest[]) {
        $("#questSearchList").empty();
        if (res && res.length) {
            this.questList = res;
            this.showSearchList();
            $("#searchPopup").show();
        }
    }

    static clearSearchList() {
        $("#questSearchList").empty();
        $("#searchPopup").hide();
    }

    static toTop() {
        $("#questSearchList").animate({ scrollTop: 0 }, 500);
    }

    static showSearchList() {
        if (this.questList && this.questList.length) {
            this.questList.forEach((quest) => {
                if (quest && quest.parentSymbol == undefined) {
                    const item = $(`
						<div class="searchItem" data-id="${quest.quest_id}">
							<img class="searchImg" />
							<div class="searchTitle">${Utils.expMCcolor(quest.title)}</div>
							<div class="searchDesc">${Utils.expMCcolor(quest.data.substring(0, 50))}</div>
						</div>
					`);
                    const img = item.find(".searchImg")[0] as HTMLImageElement;
                    AtlasMgr.instance.setImgSrc(img, quest.symbol.replace("image://", ""));
                    item.off("click");
                    item.on("click", () => {
                        PopMgr.showPopup(quest);
                    });
                    $("#questSearchList").append(item);
                }
            });
        }
    }
}
