import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Components/app.js";
import { MainMenuComponent } from "./Components/main-menu.js";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
