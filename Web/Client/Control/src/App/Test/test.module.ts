import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { LocationService } from "../Shared/Services/LocationService";
import { GlobalLoadingIndicatorService } from "../Shared/Services/GlobalLoadingIndicatorService";
import { NavigationService } from "../Shared/Services/NavigationService";
import { UtcPipe } from "../Shared/Pipes/UtcPipe";

import { IndexComponent } from "./Components/Index";

import { IndexComponent as StyleIndexComponent } from "./Components/Style/Index";

import { SharedModule } from "../Shared/shared.module";

import { FormSectionComponent } from "./Components/Style/FormSection";
import { TextSectionComponent } from "./Components/Style/TextSection";

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
