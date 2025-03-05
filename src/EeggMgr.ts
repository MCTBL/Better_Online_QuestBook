import { TipsMgr } from "./TipsMgr";
import { Utils } from "./Utils";

export class EeggMgr {

	private static txtIndex: number = -1;
	private static imgIndex: number = -1;

	//一些语录
	//以及一些梗图
	static readonly eeggs = {
		txt: [
			"GTNH is like a job",
		],
		img: [
			"static/eeggs/1.png",
		]

	}

	//概率
	static readonly rate = 0.1;

	static showEegg() {
		if (Math.random() < this.rate) {
			if (this.txtIndex == -1) {
				Utils.shuffle(this.eeggs.txt);
				this.txtIndex = 0;
			}
			if (this.imgIndex == -1) {
				Utils.shuffle(this.eeggs.img);
				this.imgIndex = 0;
			}

			//显示
			if (Math.random() < 0.5) {
				TipsMgr.showTips(this.eeggs.txt[this.txtIndex]);
				this.txtIndex++;
				if (this.txtIndex >= this.eeggs.txt.length) {
					this.txtIndex = 0;
				}
			} else {
				console.log(this.eeggs.img[this.imgIndex]);
				this.imgIndex++;
				if (this.imgIndex >= this.eeggs.img.length) {
					this.imgIndex = 0;
				}
			}
		}
	}
}