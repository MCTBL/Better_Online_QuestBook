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
  }
  init() {
    $(() => {
      this.onMessage();
      let data = { action: msgAction.ready, data: null };
      this.sendMessageToMain(data);
    });
    document.getElementById("overlay").addEventListener("click", function () {
      hidePopup();
    });
    document.getElementById("copyBtn").addEventListener("click", function () {
      Utils.copyH5Str(document.getElementById("popupContent").innerText);
      console.log("成功复制");
    });
    document.getElementById("copyIdBtn").addEventListener("click", function () {
      Utils.copyH5Str(document.getElementById("quest_id").innerText);
      console.log("成功复制");
    });
  }
  sendMessageToMain(data) {
    window.parent.postMessage(data, "*");
  }
  onMessage() {
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
      this.echarts = echarts.init(
        document.getElementById("this_chart"),
        "white",
        { renderer: "canvas" }
      );
    }
    this.echarts.on("click", (params) => {
      if (params.dataType === "node") {
        document.getElementById("quest_id").innerText = params.data.quest_id;
        showPopup(
          "<h1>" +
            params.data.name +
            "</h1></br>" +
            params.data.data.replaceAll("<br/>", "")
        );
      }
    });
    if (window.option_this_chart) {
      this.echarts.setOption(window.option_this_chart);
    } else {
      console.error("内容丢失");
    }
    window.addEventListener("resize", () => {
      this.echarts.resize();
    });
  }
}
new QuestListPage();
