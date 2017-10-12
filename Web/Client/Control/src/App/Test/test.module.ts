import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { LocationService } from "../Common/Services/LocationService";
import { GlobalLoadingIndicatorService } from "../Common/Services/GlobalLoadingIndicatorService";
import { NavigationService } from "../Common/Services/NavigationService";
import { UtcPipe } from "../Common/Pipes/UtcPipe";

import { IndexComponent } from "./Components/Index";

import { IndexComponent as StyleIndexComponent } from "./Components/Style/Index";

import { SharedModule } from "../Common/shared.module";

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
