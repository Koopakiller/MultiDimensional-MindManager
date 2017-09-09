import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent as TransactionIndexComponent } from "./Components/Transactions/index.js";
import { AddComponent as TransactionAddComponent } from "./Components/Transactions/add.js";
import { OverviewComponent as TransactionOverviewComponent } from "./Components/Transactions/overview.js";

import { IndexComponent as ImportIndexComponent } from "./Components/Import/index.js";

import { IndexComponent as PersonsIndexComponent } from "./Components/Persons/index.js";
import { AddComponent as PersonsAddComponent } from "./Components/Persons/add.js";

import { IndexComponent as UserGroupsIndexComponent } from "./Components/UserGroups/index.js";

import { IndexComponent as UsersIndexComponent } from "./Components/Users/index.js";

import { FinancesComponent } from "./Components/finances.js";

import { FinancesService } from "./Services/FinancesService.js";
import { LocationService } from "../Shared/Services/LocationService.js";
import { GlobalLoadingIndicatorService } from "../Scaffold/Services/GlobalLoadingIndicatorService.js";
import { NavigationService } from "../Scaffold/Services/NavigationService.js";
import { UtcPipe } from "../Shared/Pipes/UtcPipe.js";

const financesRoutes: Routes = [
    {
        path: '',
        component: FinancesComponent
    },
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
        FinancesComponent,
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
        FinancesComponent
    ],
    providers: [
        FinancesService,
        LocationService,
        GlobalLoadingIndicatorService,
        NavigationService
    ],
})
export class FinancesModule { }
