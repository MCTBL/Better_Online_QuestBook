import { AtlasMgr } from "./AtlasMgr";
import { allInOneQuestData, allInOneQuestDataMap, quest, questData } from "./Define";
import { PopMgr } from "./PopMgr";
import { ProjectData } from "./ProjectData";
import { Utils } from "./Utils";

export class QuestList {
    private static echarts: echarts.ECharts;
    /**当前页面数据 桌面端才有的 */
    private static pageData: any;
    /**搜索任务列表 */
    private static questList: quest[];

    private static allInOneQuestList: allInOneQuestDataMap = {};

    public static isInAllInOneMode: boolean = false;

    // 重置echarts
    static resetChart() {
        this.echarts?.clear();
        this.echarts?.resize();
        this.echarts?.setOption(this.pageData);
    }

    static getPageData(res: { data: questData; title: string }) {
        if (!this.isInAllInOneMode) {
            if (ProjectData.isPhone) {
                this.showSearchPopup(res.data.data);
            } else {
                Utils.typeText("#questTitle", res.title);
                this.pageData = Utils.deepClone(ProjectData.echartsConfig);
                this.pageData.series[0].data = res.data.data;
                this.pageData.series[0].links = res.data.links;
                this.initEcharts();
            }
        } else {
            this.initAllInOne();
        }
    }

    static initAllInOne() {
        // Key like zh/en -ish
        if (!this.allInOneQuestList || !this.allInOneQuestList[ProjectData.language]) {
            $.getJSON(
                ProjectData.getAllInOnePath(ProjectData.language),
                (data: allInOneQuestData) => {
                    this.allInOneQuestList[ProjectData.language] = this.processQuestData(data);
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
        this.isInAllInOneMode = true;
        QuestList.resetChart();
        this.pageData = Utils.deepClone(ProjectData.echartsConfig);
        this.pageData.series[0].links = this.allInOneQuestList[ProjectData.language].allInOneLinks;
        this.pageData.series[0].data = [];
        var tempData = this.allInOneQuestList[ProjectData.language];
        var count = -1;
        const _ = setInterval(() => {
            count++;
            if (count < tempData.allInOneQuestsList.length && this.isInAllInOneMode) {
                Utils.typeText("#questTitle", tempData.allInOneQuestListNames[count]);
                this.pageData.series[0].data.push(...tempData.allInOneQuestsList[count]);
                this.echarts.setOption(this.pageData);
            } else {
                clearInterval(_);
                if (this.isInAllInOneMode) {
                    Utils.typeText("#questTitle", "All Main Quest Line in GTNH");
                    this.pageData.series[0].data.push({ name: "DM is GOD", symbolSize: 400, x: 0, y: 0, symbol: "image://dm.jpg" } as quest);
                    this.echarts.setOption(this.pageData);
                }
            }
        }, 1000);
    }

    static processQuestData(datas: allInOneQuestData) {
        let versionCode = ProjectData.getVersion();
        let questNames = datas.allInOneQuestListNames;
        let fakeIndex = 0;
        for (let i = 0; i < questNames.length; i++) {
            let questListName = questNames[i];
            let questList = datas.allInOneQuestsList[i];
            let fakeQuestList = [];
            for (let quest of questList) {
                // TODO 要删掉的
                quest.symbolSize *= 1.5;
                quest.symbol = AtlasMgr.getFormatSymbolKey(versionCode, questListName, Utils.processBase64ToDecimal(quest.quest_id));
                // 添加一个假任务作为背景
                let fakeQuest: quest = Utils.createFakeQuest(quest, String(fakeIndex++));
                fakeQuestList.push(fakeQuest);
            }
            // 假任务是否留存
            // questList = fakeQuestList.concat(questList);
            datas.allInOneQuestsList[i] = questList;
        }
        return datas;
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
