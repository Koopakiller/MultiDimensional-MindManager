import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Components/app.js";
import { MainMenuComponent } from "./Components/main-menu.js";
import { FinancesComponent } from "./Components/finances.js";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MainMenuComponent,
    FinancesComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
 