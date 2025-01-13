import { Utils } from "./Utils.js";

export class QuestListPage {
    constructor() {
        this.win = window;
        this.$ = this.win.$;
        this.init();
    }
    private win: any;
    private $:any;

    init() {
        var chart_this_chart = this.win.echarts.init(document.getElementById("this_chart"), "white", { renderer: "canvas" });

        chart_this_chart.on("click", function (params: any) {
            console.log(params);
            if (params.dataType === "node") {
                let str = params.data.tooltip.replaceAll("<br/>", "");
                Utils.copyH5Str(str);
            }
        });

        if (this.win.option_this_chart) {
            chart_this_chart.setOption(this.win.option_this_chart);
        } else {
            console.error("内容丢失");
        }
        window.addEventListener("resize", function () {
            chart_this_chart.resize();
        });

        this.onMessage();


    }


    onMessage(){
        this.win.addEventListener("message", (event: any) => {
            console.log(event);

        });
    }
}

new QuestListPage();