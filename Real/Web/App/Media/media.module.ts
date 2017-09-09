import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./Components/Index.js";

import { GlobalLoadingIndicatorService } from "../Shared/Services/GlobalLoadingIndicatorService.js";
import { NavigationService } from "../Shared/Services/NavigationService.js";

const financesRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(
            financesRoutes
        ),
        HttpModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        IndexComponent
    ],
    bootstrap: [
        IndexComponent
    ],
    providers: [
        GlobalLoadingIndicatorService,
        NavigationService
    ],
})
export class MediaModule {
}
