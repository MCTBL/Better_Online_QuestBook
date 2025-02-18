export class TipsMgr {
	static tipsTimer: number = 0;
	static showTips(msg: string) {
		const chineseCharCount = (msg.match(/[\u4e00-\u9fa5]/g) || []).length;
		const otherCharCount = msg.length - chineseCharCount;
		//优化提示的长度计算
		const width = chineseCharCount * 30 + otherCharCount * 15 + 40;

		$("#tips").text(msg);
		$("#tips").css("width", width + "px");
		$("#tips").animate({ bottom: "0px" }, 500);
		if (this.tipsTimer) {
			clearTimeout(this.tipsTimer);
			this.tipsTimer = 0;
		}
		this.tipsTimer = setTimeout(() => {
			$("#tips").animate({ bottom: "-70px" }, 500);
		}, 2000);
	}



	static showLoading() {
		$("#loadingMask").show();
	}

	static hideLoading() {
		$("#loadingMask").hide();
	}
}