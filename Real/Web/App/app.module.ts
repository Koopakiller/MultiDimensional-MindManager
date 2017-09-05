import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Components/app.js";
import { FinancesComponent } from "./Components/finances.js";
import { FinancesNewTransactionComponent } from "./Components/finances-new-transaction.js";
import { FinancesService } from "./Services/FinancesService.js";
import { LocationService } from "./Services/LocationService.js";
import { RouterModule, Routes } from '@angular/router';
import { StyleTestComponent } from "./Components/style-test.js";
import { HomeComponent } from "./Components/home.js";
import { MediaAppletComponent } from "./Components/MediaApplet.js";
import { FinancesImportComponent } from "./Components/finances-import.js";
import { FinancesNewPersonComponent } from "./Components/finances-new-person.js";
import { FinancesOverviewComponent } from "./Components/finances-overview.js";
import { LoadingIndicatorComponent } from "./Components/loading-indicator.js";
import { GlobalLoadingIndicatorService } from "./Services/GlobalLoadingIndicatorService.js";
import { UtcPipe } from "./Pipes/UtcPipe.js";
import { FinancesUsersComponent } from "./Components/finances-users.js";
import { FinancesUserGroupsComponent } from "./Components/finances-usergroups.js";
import { ErrorComponent } from "./Components/error.js";

const appRoutes: Routes = [
  { path: 'Home',                     component: HomeComponent },
  { path: 'Finances',                 component: FinancesComponent },
  { path: 'Finances/AddTransaction',  component: FinancesNewTransactionComponent },
  { path: 'Finances/Import',          component: FinancesImportComponent },
  { path: 'Finances/Overview',        component: FinancesOverviewComponent },
  { path: 'Finances/Users',           component: FinancesUsersComponent },
  { path: 'Finances/UserGroups',      component: FinancesUserGroupsComponent },
  { path: 'StyleTest',                component: StyleTestComponent },
  { path: 'Media',                    component: MediaAppletComponent },
  { path: 'Error/:errorId',           component: ErrorComponent },
  { path: '',      pathMatch: 'full', redirectTo: '/Home' },
  { path: '**',                       redirectTo: '/Error/http404' }
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
    FinancesNewPersonComponent,
    FinancesOverviewComponent,
    FinancesComponent,
    FinancesUsersComponent,
    HomeComponent,
    MediaAppletComponent,
    StyleTestComponent,
    UtcPipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers:[
    FinancesService,
    LocationService,
    GlobalLoadingIndicatorService
  ],
})   
export class AppModule { }
 