/**任务栏 */
export type questLine = {
	title: string;
	quest: string;
	icon: string;
	title_zh?: string;
};

export type m2qData = { action: msgAction; data: any };

export enum msgAction {
	init = "init",
	ready = "ready",
	showPopup = "showPopup",
	resetChart = "resetChart",
	closeSearchPopup = "closeSearchPopup",
	showSearchPopup = "showSearchPopup",
}

export type dialogMsg = {
	content: string;
	caller: any;
	sure: Function | null;
	cancel: Function | null;
	onlySure: boolean;
	title: string;
	sureMsg: string;
	cancelMsg: string;
};


export enum localEnum {
	// /**上次打开的任务页面 */
	// mainIframeUrl = "mainIframeUrl",
	/**上次选中的任务下标 */
	selectBtnIndex = "selectBtnIndex",
	// 	/**所有的任务数据 */
	// 	questData = "questData",
	// 	/**任务数据版本 */
	// 	questDataVersion = "questDataVersion",
}

/**所有的任务数据 */
export type questAllData = {
	[key: string]: questData;
};
/**单页任务数据 */
export type questData = { data: quest[]; links: questLink[] };

/**任务前置 */
export type questLink = {
	source: string;
	target: string;
};
/**任务数据 */
export type quest = {
	title: string;
	name: string;
	symbolSize: number;
	symbol: string;
	x: number;
	y: number;
	data: string;
	quest_id: string;
	tooltip: string;
};
