import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Components/app.js";
import { FinancesComponent } from "./Components/finances.js";
import { FinancesNewEntryComponent } from "./Components/finances-new-entry.js";
import { FinancesService } from "./Services/FinancesService.js";
import { LocationService } from "./Services/LocationService.js";
import { RouterModule, Routes } from '@angular/router';
import { StyleTestComponent } from "./Components/style-test.js";
import { HomeComponent } from "./Components/home.js";
import { MediaAppletComponent } from "./Components/MediaApplet.js";
import { FinancesImportComponent } from "./Components/finances-import.js";
import { FinancesNewPersonComponent } from "./Components/finances-new-person.js";

const appRoutes: Routes = [
  { path: 'Home',               component: HomeComponent },
  { path: 'Finances',           component: FinancesComponent },
  { path: 'Finances/AddEntry',  component: FinancesNewEntryComponent },
  { path: 'Finances/Import',    component: FinancesImportComponent },
  { path: 'StyleTest',          component: StyleTestComponent },
  { path: 'Media',              component: MediaAppletComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
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
    FinancesNewEntryComponent,
    FinancesImportComponent,
    FinancesNewPersonComponent,
    FinancesComponent,
    HomeComponent,
    MediaAppletComponent,
    StyleTestComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers:[
    FinancesService,
    LocationService
  ]
})
export class AppModule { }
 