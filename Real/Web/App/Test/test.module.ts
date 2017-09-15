import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { LocationService } from "../Shared/Services/LocationService.js";
import { GlobalLoadingIndicatorService } from "../Shared/Services/GlobalLoadingIndicatorService.js";
import { NavigationService } from "../Shared/Services/NavigationService.js";
import { UtcPipe } from "../Shared/Pipes/UtcPipe.js";

import { IndexComponent } from "./Components/Index.js";

import { IndexComponent as StyleIndexComponent } from "./Components/Style/Index.js";

import { SharedModule } from "../Shared/shared.module.js";

import { FormSectionComponent } from "./Components/Style/FormSection.js";
import { TextSectionComponent } from "./Components/Style/TextSection.js";

const financesRoutes: Routes = [
	{
		path: "",
		component: IndexComponent,
		children: [
			{
				path: "Style",
				component: StyleIndexComponent,
				children: [
					{ path: "Section/Form", component: FormSectionComponent },
					{ path: "Section/Text", component: TextSectionComponent }
				]
			}
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(
			financesRoutes
		),
		HttpModule,
		CommonModule,
		FormsModule,
		SharedModule
	],
	declarations: [
		IndexComponent,
		StyleIndexComponent,
		FormSectionComponent,
		TextSectionComponent
	],
	bootstrap: [
		IndexComponent
	],
	providers: [
		GlobalLoadingIndicatorService,
		NavigationService
	],
})
export class TestModule {
}
