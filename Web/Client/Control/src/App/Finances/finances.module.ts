import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent as TransactionIndexComponent } from "./Components/Transactions/Index";
import { AddComponent as TransactionAddComponent } from "./Components/Transactions/Add";
import { OverviewComponent as TransactionOverviewComponent } from "./Components/Transactions/Overview";
import { ListComponent as TransactionListComponent } from "./Components/Transactions/List";

import { IndexComponent as ImportIndexComponent } from "./Components/Import/Index";

import { IndexComponent as PersonsIndexComponent } from "./Components/Persons/Index";
import { AddComponent as PersonsAddComponent } from "./Components/Persons/Add";

import { IndexComponent as UserGroupsIndexComponent } from "./Components/UserGroups/Index";

import { IndexComponent as UsersIndexComponent } from "./Components/Users/Index";

import { IndexComponent } from "./Components/Index";

import { IndexComponent as AuthenticationIndexComponent } from "./Components/Authentication/Index";

import { FinancesService } from "./Services/FinancesService";
import { LocationService } from "../Shared/Services/LocationService";
import { GlobalLoadingIndicatorService } from "../Shared/Services/GlobalLoadingIndicatorService";
import { NavigationService } from "../Shared/Services/NavigationService";
import { SharedModule } from "../Shared/shared.module";
import { FinancesAuthenticationService } from "./Services/FinancesAuthenticationService";

const financesRoutes: Routes = [
    IndexComponent.RoutingInformation()
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
        TransactionListComponent,
        ImportIndexComponent,
        PersonsIndexComponent,
        PersonsAddComponent,
        UserGroupsIndexComponent,
        UsersIndexComponent,
        AuthenticationIndexComponent
    ],
    bootstrap: [
        IndexComponent
    ],
    providers: [
        FinancesService,
        FinancesAuthenticationService,
        LocationService,
        GlobalLoadingIndicatorService,
        NavigationService
    ],
})
export class FinancesModule { }
