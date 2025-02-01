export type quest = {
	title: string;
	url: string;
	icon: string;
	title_zh?: string;
};

export type m2qData = { action: msgAction; data: any };

export enum msgAction {
	init = "init",
	ready = "ready",
	showPopup = "showPopup",
	resetChart = "resetChart",
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

export type popup = {
	title: String;
	desc: String;
	ID: String;
};
