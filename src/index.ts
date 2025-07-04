import { MainPage } from "./MainPage";
import { SwitchStyle } from "./SwitchStyle";

export class index {

	constructor() {
		(window as any).mp = new MainPage();
		new SwitchStyle();
	}
}

new index();
