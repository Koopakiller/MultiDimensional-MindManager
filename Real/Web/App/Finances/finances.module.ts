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
import { SharedModule } from "../Shared/shared.module.js";

const financesRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: 'Transactions',
                component: TransactionIndexComponent,
                children: [
                    {
                        path: 'Add',
                        outlet: "next",
                        component: TransactionAddComponent,
                        children: [
                            { path: "AddPerson", component: PersonsAddComponent, outlet: "next" }
                        ]
                    },
                    { path: 'Overview', component: TransactionOverviewComponent, outlet: "next" },
                ]
            },
            {
                path: 'Import',
                component: ImportIndexComponent,
                children: [
                ]
            },
            {
                path: 'Persons',
                component: PersonsIndexComponent,
                children: [
                    { path: 'Add', component: PersonsAddComponent },
                ]
            },
            {
                path: 'UserGroups',
                component: UserGroupsIndexComponent,
                children: [
                ]
            },
            {
                path: 'Users',
                component: UsersIndexComponent,
                children: [
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
        SharedModule,
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
        UsersIndexComponent
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
