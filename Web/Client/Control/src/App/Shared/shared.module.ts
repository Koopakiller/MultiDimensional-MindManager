import { NgModule } from "@angular/core";

import { UtcPipe } from "../Shared/Pipes/UtcPipe";

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
