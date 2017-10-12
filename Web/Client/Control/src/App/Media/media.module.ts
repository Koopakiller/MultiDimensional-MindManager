import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./Components/Index";

import { GlobalLoadingIndicatorService } from "../Common/Services/GlobalLoadingIndicatorService";
import { NavigationService } from "../Common/Services/NavigationService";
import { SharedModule } from "../Common/shared.module";

const mediaRoutes: Routes = [
    {
        path: "",
        component: IndexComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(
            mediaRoutes
        ),
        HttpModule,
        CommonModule,
        FormsModule,
        SharedModule
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
