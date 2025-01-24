import { msgAction } from "./Define.js";
import { Utils } from "./Utils.js";
function showPopup(content) {
    if (document !== null) {
        document.getElementById("popupContent").innerHTML = content;
        document.getElementById("popup").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    }
}
export function hidePopup() {
    if (document !== null) {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
}
export class QuestListPage {
    constructor() {
        this.init();
        this.event = new Event("reset");
    }
    init() {
        $(() => {
            this.onMessageFromMain();
            let data = { action: msgAction.ready, data: null };
            this.sendMessageToMain(data);
        });
        //TODO 重写以下代码，并且把方法放到主域
        // 绑定点击消失
        document.getElementById("overlay").addEventListener("click", function () {
            hidePopup();
        });
        // 绑定点击复制任务详情
        document.getElementById("copyBtn").addEventListener("click", function () {
            Utils.copyH5Str(document.getElementById("popupContent").innerText);
            console.log("成功复制");
        });
        // 绑定点击复制任务ID
        document
            .getElementById("copyIdBtn")
            .addEventListener("click", function () {
            Utils.copyH5Str(document.getElementById("quest_id").innerText);
            console.log("成功复制");
        });
        // 重置echarts
        document.getElementById("reset_btn").addEventListener("click", () => {
            this.echarts.clear();
            if (window.option_this_chart) {
                this.echarts.setOption(window.option_this_chart);
            }
        });
    }
    sendMessageToMain(data) {
        window.parent.postMessage(data, "*");
    }
    onMessageFromMain() {
        addEventListener("message", (event) => {
            let data = event.data;
            switch (data.action) {
                case msgAction.init:
                    this.loadJSData(data.data);
                    break;
            }
        });
    }
    loadJSData(url) {
        $.getScript(url, (script, textStatus) => {
            this.initEcharts();
        });
    }
    initEcharts() {
        if (!this.echarts) {
            this.echarts = echarts.init(document.getElementById("this_chart"), "white", { renderer: "canvas" });
        }
        this.echarts.clear();
        this.echarts.resize();
        //TODO 重写以下代码，并且把方法放到主域
        this.echarts.on("click", (params) => {
            if (params.dataType === "node") {
                // 写入任务id并隐藏
                document.getElementById("quest_id").innerText = params.data.quest_id;
                document.getElementById("quest_id").style.display = "none";
                // 展示
                showPopup("<h1>" +
                    params.data.name +
                    "</h1>" +
                    params.data.data.replaceAll("%n", "</br>"));
                let msg = params.data.data.replaceAll("%n", "</br>");
                msg = Utils.encodeMsg2AHref(msg);
                console.warn(msg);
                let data = {
                    content: msg,
                    caller: null,
                    sure: null,
                    cancel: null,
                    onlySure: true,
                    title: params.data.name,
                    sureMsg: "复制任务ID",
                    cancelMsg: "取消"
                };
                this.sendMessageToMain({ action: msgAction.showDialog, data: data });
            }
        });
        if (window.option_this_chart) {
            this.echarts.setOption(window.option_this_chart);
        }
        else {
            console.error("内容丢失");
        }
        window.addEventListener("resize", () => {
            var _a;
            (_a = this.echarts) === null || _a === void 0 ? void 0 : _a.resize();
        });
    }
}
new QuestListPage();
