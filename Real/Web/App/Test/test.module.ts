import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { LocationService } from "../Shared/Services/LocationService.js";
import { GlobalLoadingIndicatorService } from "../Scaffold/Services/GlobalLoadingIndicatorService.js";
import { NavigationService } from "../Scaffold/Services/NavigationService.js";
import { UtcPipe } from "../Shared/Pipes/UtcPipe.js";

import { IndexComponent } from "./Components/Index.js";

import { IndexComponent as StyleIndexComponent } from "./Components/Style/Index.js";

const financesRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: 'Style',
                children: [
                    { path: '', component: StyleIndexComponent },
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
        FormsModule
    ],
    declarations: [
        IndexComponent,
        StyleIndexComponent,
        UtcPipe
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
