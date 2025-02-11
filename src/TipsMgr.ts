
export class TipsMgr {
	static tipsTimer: number = 0;
	static showTips(msg: string) {
		$("#tips").text(msg);
		$("#tips").css("width", (msg.length * 30 + 40) + "px");
		$("#tips").animate({ bottom: "0px" }, 500);
		if (this.tipsTimer) {
			clearTimeout(this.tipsTimer);
			this.tipsTimer = 0;
		}
		this.tipsTimer = setTimeout(() => {
			$("#tips").animate({ bottom: "-70px" }, 500);
		}, 2000);
	}

}