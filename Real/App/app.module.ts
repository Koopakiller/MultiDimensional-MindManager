import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Components/app.js";
import { MainMenuComponent } from "./Components/main-menu.js";
import { FinancesComponent } from "./Components/finances.js";
import { FinancesNewEntryComponent } from "./Components/finances-new-entry.js";
import { FinancesService } from "./Services/FinancesService.js";
import { LocationService } from "./Services/LocationService.js";
import { RouterModule, Routes } from '@angular/router';
import { StyleTestComponent } from "./Components/style-test.js";

const appRoutes: Routes = [
  { path: 'finance', component: FinancesComponent },
  { path: 'finance-new-entry',      component: FinancesNewEntryComponent },
  { path: 'style-test',      component: StyleTestComponent },
  //{ path: 'test',      component: TestComponent },
  { path: '',
    redirectTo: '/finance',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MainMenuComponent,
    FinancesNewEntryComponent,
    FinancesComponent,
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
 