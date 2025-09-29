import { MainPage } from "./MainPage";

export class index {

	constructor() {
		(window as any).main = new MainPage();
	}
}

new index();
