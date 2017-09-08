import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Scaffold/Components/app.js";
import { FinancesComponent } from "./Finances/Components/finances.js";
import { FinancesNewTransactionComponent } from "./Finances/Components/transaction-add.js";
import { FinancesService } from "./Finances/Services/FinancesService.js";
import { LocationService } from "./Common/Services/LocationService.js";
import { RouterModule, Routes } from '@angular/router';
import { StyleTestComponent } from "./Components/style-test.js";
import { HomeComponent } from "./Components/home.js";
import { MediaAppletComponent } from "./Components/MediaApplet.js";
import { FinancesImportComponent } from "./Finances/Components/import.js";
import { FinancesPersonAddComponent } from "./Finances/Components/person-add.js";
import { FinancesOverviewComponent } from "./Finances/Components/overview.js";
import { LoadingIndicatorComponent } from "./Components/loading-indicator.js";
import { GlobalLoadingIndicatorService } from "./Scaffold/Services/GlobalLoadingIndicatorService.js";
import { UtcPipe } from "./Common/Pipes/UtcPipe.js";
import { FinancesUsersComponent } from "./Finances/Components/users.js";
import { FinancesUserGroupsComponent } from "./Finances/Components/usergroups.js";
import { ErrorComponent } from "./Scaffold/Components/error.js";
import { FinancesUsersListComponent } from "./Finances/Components/users-list.js";

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  {
    path: 'Finances', component: FinancesComponent,
    children: [
      { path: 'Transactions/Add', component: FinancesNewTransactionComponent },
      { path: 'Import', component: FinancesImportComponent },
      { path: 'Transactions/Overview', component: FinancesOverviewComponent },
      { path: 'Users', component: FinancesUsersComponent },
      { path: 'UserGroups', component: FinancesUserGroupsComponent },
    ]
  },
  { path: 'StyleTest', component: StyleTestComponent },
  { path: 'Media', component: MediaAppletComponent },
  { path: 'Error/:errorId', component: ErrorComponent },
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
  { path: '**', redirectTo: '/Error/http404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      //,{ enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ErrorComponent,
    LoadingIndicatorComponent,
    FinancesUserGroupsComponent,
    FinancesNewTransactionComponent,
    FinancesImportComponent,
    FinancesPersonAddComponent,
    FinancesOverviewComponent,
    FinancesComponent,
    FinancesUsersComponent,
    FinancesUsersListComponent,
    HomeComponent,
    MediaAppletComponent,
    StyleTestComponent,
    UtcPipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    FinancesService,
    LocationService,
    GlobalLoadingIndicatorService
  ],
})
export class AppModule { }
