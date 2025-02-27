import { MainPage } from "./MainPage";

export class index {

	constructor() {
		(window as any).mp = new MainPage();
	}
}

new index();
