import { NgModule } from "@angular/core";

import { UtcPipe } from "../Shared/Pipes/UtcPipe.js";

@NgModule({
	imports: [
	],
	declarations: [
		UtcPipe
	],
	exports: [
		UtcPipe
	]
})
export class SharedModule {
}
