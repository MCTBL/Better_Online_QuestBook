import { lang, localEnum, msgAction, } from "./Define.js";
import { EeggMgr } from "./EeggMgr.js";
import { PopMgr } from "./PopMgr.js";
import { ProjectConfig } from "./ProjectConfig.js";
import { ProjectData } from "./ProjectData.js";
import { TipsMgr } from "./TipsMgr.js";
import { Utils } from "./Utils.js";
export class MainPage {
    constructor() {
        this.questLine = [];
        this.buttonList = [];
        /**是否展示侧边栏 */
        this.showSidebar = false;
        /**所有任务的数据 */
        this.questAllData = {};
        /**标题对应任务数据 */
        this.titleToQuest = {};
        /**任务ID对应任务数据 */
        this.questIdToQuest = {};
        //事件
        this.onGetMessageFromIframe = (event) => {
            let data = event.data;
            switch (data.action) {
                case msgAction.ready:
                    // this.initMainIframe();
                    break;
                case msgAction.showPopup:
                    // 展示任务详情
                    let quest = this.questIdToQuest[ProjectData.language][data.data];
                    if (quest) {
                        PopMgr.showPopup(quest);
                    }
                    else {
                        console.warn("任务ID没有对应数据！" + data.data);
                    }
                    break;
                default:
                    console.warn("未知的消息", data);
                    break;
            }
        };
        this.onKeyDown = (event) => {
            if (event.key == "r") {
                let data = { action: msgAction.resetChart, data: null };
                this.sendMessageToIframe(data);
            }
        };
        this.onClickLogo = () => {
            EeggMgr.showEegg();
        };
        this.onRightClickLogo = (evt) => {
            evt.preventDefault(); //拦截邮件点击
            evt.stopPropagation(); //拦截事件冒泡
            console.warn("右键点击");
        };
        this.toggleSidebar = () => {
            this.onClosePop();
            if (!this.showSidebar) {
                $("#sidebar").animate({ left: "-280px" }, 500);
                $("#mainPage").animate({
                    left: "0px",
                    width: "100%",
                }, 500);
                this.showSidebar = true;
            }
            else {
                $("#sidebar").animate({ left: "0px" }, 500);
                let width = $(window).width() - 280;
                $("#mainPage").animate({
                    left: "280px",
                    width: width + "px",
                }, 500);
                this.showSidebar = false;
            }
        };
        this.onSearchFocus = () => {
            // this.sendMessageToIframe({ action: msgAction.showSearchPopup, data: null });
        };
        this.onSeachInput = () => {
            let value = $("#search").val();
            if (value) {
                if ($("#btnCloseSp").css("display") == "none") {
                    $("#btnCloseSp").show();
                    $("#btnCloseSp").animate({ opacity: 1 }, 500);
                }
                let questList = [];
                for (let key in this.titleToQuest[ProjectData.language]) {
                    if (key
                        .toLocaleUpperCase()
                        .indexOf(value.toString().toLocaleUpperCase()) != -1) {
                        let tempQuest = this.titleToQuest[ProjectData.language][key];
                        if (tempQuest.title != undefined) {
                            questList.push(tempQuest);
                        }
                    }
                }
                this.sendMessageToIframe({
                    action: msgAction.showSearchPopup,
                    data: questList,
                });
            }
            else {
                this.onClosePop();
            }
        };
        this.onClosePop = () => {
            $("#search").val("");
            $("#btnCloseSp").hide();
            $("#btnCloseSp").css("opacity", 0);
            this.sendMessageToIframe({
                action: msgAction.closeSearchPopup,
                data: null,
            });
        };
        this.onSearchBlur = () => { };
        this.onChangeLang = () => {
            TipsMgr.showLoading();
            if (ProjectData.language == lang.zh) {
                ProjectData.language = lang.en;
            }
            else {
                ProjectData.language = lang.zh;
            }
            localStorage.setItem(localEnum.language, ProjectData.language);
            this.initTitle();
            this.onClosePop();
            this.loadQuestData();
        };
        $(() => {
            TipsMgr.showLoading();
            const iframe = $("#mainIframe");
            iframe.on("load", () => {
                //iframe加载完成
                this.initLang();
                this.initPage();
                this.addEvent();
                this.loadQuestLine();
                this.showProjectMsg();
            });
        });
    }
    showProjectMsg() {
        setTimeout(() => {
            console.log(`%c${ProjectConfig.projectName_zh}\n\n%c${ProjectConfig.projectDsc_zh}\n\n%c作者: ${ProjectConfig.projectAuthor}\n\n%c项目地址: ${ProjectConfig.projectUrl}`, "color:#252525; font-size: 30px;", "color:#e12885; font-size: 18px;", "color:#137a7f; font-size: 20px;", "color:#525658; font-size: 16px;");
        }, 300);
    }
    initPage() {
        for (let i = 0; i < ProjectConfig.versionList.length; i++) {
            let option = $("<option>", {
                text: ProjectConfig.versionList[i],
                value: ProjectConfig.versionList[i],
            });
            $("#versionSelect").append(option);
        }
    }
    initLang() {
        if (localStorage.getItem(localEnum.language)) {
            if (localStorage.getItem(localEnum.language) == lang.zh) {
                ProjectData.language = lang.zh;
            }
            else {
                ProjectData.language = lang.en;
            }
        }
        else {
            if (navigator.language.includes("zh")) {
                ProjectData.language = lang.zh;
            }
            else {
                ProjectData.language = lang.en;
            }
        }
        this.initTitle();
    }
    initTitle() {
        if (ProjectData.language == lang.zh) {
            document.title = ProjectConfig.projectName_zh;
        }
        else {
            document.title = ProjectConfig.projectName;
        }
    }
    addEvent() {
        addEventListener("message", this.onGetMessageFromIframe);
        $("#toggleSidebar").on("click", this.toggleSidebar);
        addEventListener("keydown", this.onKeyDown);
        $("#logoImg").on("click", this.onClickLogo);
        $("#logoImg").on("contextmenu", this.onRightClickLogo);
        $("#search").on("focus", this.onSearchFocus);
        $("#search").on("blur", this.onSearchBlur);
        $("#search").on("input", this.onSeachInput);
        $("#btnCloseSp").on("click", this.onClosePop);
        $("#changeLang").on("click", this.onChangeLang);
        $("#btnShowMsg").on("click", this.onClickInfo);
    }
    // 加载任务列表
    loadQuestLine() {
        $.getJSON(ProjectData.getQuestLinePath(), (data) => {
            this.questLine = data;
            this.questLine.forEach((quest, index) => {
                let button = this.createButton(index, quest);
                $("#questLineList").append(button);
                this.buttonList.push(button);
            });
            this.loadQuestData();
        });
    }
    loadQuestData() {
        if (this.questAllData && this.questAllData[ProjectData.language] != null) {
            this.initMainIframe();
        }
        else {
            $.getJSON(ProjectData.getQuestDataPath(ProjectData.language), (data) => {
                this.questAllData[ProjectData.language] = data;
                let allData = this.questAllData[ProjectData.language];
                let qn = {};
                let qid = {};
                for (let key in allData) {
                    let questList = allData[key].data;
                    let nameIndex = 0;
                    let fakeQuestList = [];
                    if (questList) {
                        for (let i = 0; i < questList.length; i++) {
                            let quest = questList[i];
                            qn[quest.title] = quest;
                            qid[quest.quest_id] = quest;
                            // //添加一个假任务
                            let fakeQuest = Utils.deepClone(ProjectData.fakeQuest);
                            fakeQuest.x = quest.x;
                            fakeQuest.y = quest.y;
                            fakeQuest.name = nameIndex; // quest.quest_id;
                            nameIndex++;
                            fakeQuest.symbolSize = Math.ceil(quest.symbolSize * 1.3);
                            fakeQuest.symbol =
                                "image://static/" +
                                    (quest.is_main == 1 ? "main" : "not_main") +
                                    ".png";
                            fakeQuestList.push(fakeQuest);
                        }
                    }
                    allData[key].data = fakeQuestList.concat(allData[key].data);
                }
                this.titleToQuest[ProjectData.language] = qn;
                this.questIdToQuest[ProjectData.language] = qid;
                this.initMainIframe();
            });
        }
    }
    createButton(index, quest) {
        const button = $("<button>", {
            id: "btnQuest_" + index,
            class: "questButton unselected",
            click: (btn) => {
                this.buttonList.forEach((button, index) => {
                    if (button[0] == btn.currentTarget) {
                        localStorage.setItem(localEnum.selectBtnIndex, index.toString());
                        button.removeClass("unselected").addClass("selected");
                    }
                    else {
                        button.removeClass("selected").addClass("unselected");
                    }
                });
                let data = {
                    action: msgAction.init,
                    data: {
                        title: ProjectData.language.includes("zh")
                            ? quest.title_zh
                            : quest.title,
                        data: this.questAllData[ProjectData.language][quest.quest],
                    },
                };
                this.sendMessageToIframe(data);
                this.onClosePop();
            },
        });
        button.data("questData", quest);
        const img = $("<img>", {
            src: ProjectData.getPath(`quests_icons/QuestLineIcon/${quest.quest}.png`),
            class: "questIcon",
        });
        const txt = $("<span>", {
            text: ProjectData.language.includes("zh") ? quest.title_zh : quest.title,
            class: "questText",
        });
        button.append(img);
        button.append(txt);
        return button;
    }
    initMainIframe() {
        //处理一些零碎的数据
        $("#search").val("");
        $("#search").attr("placeholder", ProjectData.language == lang.zh ? "搜索任务" : "Search Quest");
        let selectBtnIndex = localStorage.getItem(localEnum.selectBtnIndex);
        let btn;
        if (selectBtnIndex && this.buttonList && this.buttonList.length) {
            btn = this.buttonList[parseInt(selectBtnIndex)];
        }
        else {
            btn = this.buttonList[0];
        }
        btn === null || btn === void 0 ? void 0 : btn.removeClass("unselected").addClass("selected");
        if (this.buttonList.length) {
            for (let i = 0; i < this.buttonList.length; i++) {
                let btn = this.buttonList[i];
                let quest = btn.data("questData");
                let title = ProjectData.language == lang.zh ? quest.title_zh : quest.title;
                btn.find(".questText").text(title);
            }
        }
        let quest = btn.data("questData");
        let questData = this.questAllData[ProjectData.language][quest.quest];
        if (questData) {
            let data = {
                action: msgAction.init,
                data: {
                    title: ProjectData.language == lang.zh ? quest.title_zh : quest.title,
                    data: questData,
                },
            };
            this.sendMessageToIframe(data);
            TipsMgr.hideLoading();
        }
        else {
            console.error("任务数据异常");
            TipsMgr.showTips("任务数据异常");
        }
    }
    /**发送消息到子域 */
    sendMessageToIframe(msg) {
        const iframe = $("#mainIframe")[0];
        iframe.contentWindow.postMessage(msg, "*");
    }
    onClickInfo() {
        PopMgr.showInfoPopup();
    }
}
