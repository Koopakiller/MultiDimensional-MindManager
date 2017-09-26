import { NgModule } from "@angular/core";

import { UtcPipe } from "../Shared/Pipes/UtcPipe";
import { CookieService } from "./Services/CookieService";

@NgModule({
	imports: [
	],
	declarations: [
		UtcPipe
	],
	providers:[
		CookieService
	],
	exports: [
		UtcPipe
	]
})
export class SharedModule {
}
