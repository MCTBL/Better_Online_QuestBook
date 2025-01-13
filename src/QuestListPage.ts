
import { m2qData, msgAction } from "./Define.js";
import { Utils } from "./Utils.js";

export class QuestListPage {
    constructor() {
        this.init();
    }

    private echarts: echarts.ECharts;

    init() {
        $(() => {
            this.onMessage();
            let data = { action: msgAction.ready, data: null };
            this.sendMessageToMain(data);
        });
    }

    sendMessageToMain(data: m2qData) {
        window.parent.postMessage(data, "*");
    }


    onMessage() {
        addEventListener("message", (event: MessageEvent) => {
            let data: m2qData = event.data;
            switch (data.action) {
                case msgAction.init:
                    this.loadJSData(data.data);
                    break;
            }
        });
    }



    loadJSData(url: string) {
        $.getScript(url, (script, textStatus) => {
            this.initEcharts();
        });
    }

    initEcharts() {
        if (!this.echarts) {
            this.echarts = echarts.init(document.getElementById("this_chart") as HTMLDivElement, "white", { renderer: "canvas" });
        }

        this.echarts.on("click", (params: any) => {
            if (params.dataType === "node") {
                let str = params.data.tooltip.replaceAll("<br/>", "");
                Utils.copyH5Str(str);
            }
        });

        if ((window as any).option_this_chart) {
            this.echarts.setOption((window as any).option_this_chart);
        } else {
            console.error("内容丢失");
        }
        window.addEventListener("resize", () => {
            this.echarts.resize();
        });
    }
}

new QuestListPage();