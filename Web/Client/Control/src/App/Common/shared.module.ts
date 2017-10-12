import { NgModule } from "@angular/core";

import { UtcPipe } from "../Common/Pipes/UtcPipe";
import { CookieService } from "./Services/CookieService";
import { RoutingSectionComponent } from "./Components/RoutingSection";


@NgModule({
	imports: [
	],
	declarations: [
		UtcPipe,
		RoutingSectionComponent
	],
	providers:[
		CookieService
	],
	exports: [
		UtcPipe,
		RoutingSectionComponent
	]
})
export class SharedModule {
}
