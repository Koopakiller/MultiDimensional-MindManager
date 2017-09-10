import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent as TransactionIndexComponent } from "./Components/Transactions/Index.js";
import { AddComponent as TransactionAddComponent } from "./Components/Transactions/Add.js";
import { OverviewComponent as TransactionOverviewComponent } from "./Components/Transactions/Overview.js";

import { IndexComponent as ImportIndexComponent } from "./Components/Import/Index.js";

import { IndexComponent as PersonsIndexComponent } from "./Components/Persons/Index.js";
import { AddComponent as PersonsAddComponent } from "./Components/Persons/Add.js";

import { IndexComponent as UserGroupsIndexComponent } from "./Components/UserGroups/Index.js";

import { IndexComponent as UsersIndexComponent } from "./Components/Users/Index.js";

import { IndexComponent } from "./Components/Index.js";

import { FinancesService } from "./Services/FinancesService.js";
import { LocationService } from "../Shared/Services/LocationService.js";
import { GlobalLoadingIndicatorService } from "../Shared/Services/GlobalLoadingIndicatorService.js";
import { NavigationService } from "../Shared/Services/NavigationService.js";
import { UtcPipe } from "../Shared/Pipes/UtcPipe.js";

const financesRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: 'Transactions',
                children: [
                    { path: '', component: TransactionIndexComponent },
                    { path: 'Add', component: TransactionAddComponent },
                    { path: 'Overview', component: TransactionOverviewComponent },
                ]
            },
            {
                path: 'Import',
                children: [
                    { path: '', component: ImportIndexComponent },
                ]
            },
            {
                path: 'Persons',
                children: [
                    { path: '', component: PersonsIndexComponent },
                    { path: 'add', component: PersonsAddComponent },
                ]
            },
            {
                path: 'UserGroups',
                children: [
                    { path: '', component: UserGroupsIndexComponent },
                ]
            },
            {
                path: 'Users',
                children: [
                    { path: '', component: UsersIndexComponent },
                ]
            }
        ]
    }
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
        TransactionIndexComponent,
        TransactionAddComponent,
        TransactionOverviewComponent,
        ImportIndexComponent,
        PersonsIndexComponent,
        PersonsAddComponent,
        UserGroupsIndexComponent,
        UsersIndexComponent,
        UtcPipe
    ],
    bootstrap: [
        IndexComponent
    ],
    providers: [
        FinancesService,
        LocationService,
        GlobalLoadingIndicatorService,
        NavigationService
    ],
})
export class FinancesModule { }
