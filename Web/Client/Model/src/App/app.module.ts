import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./Components/App";
import { DataService } from "./Services/DataService";

const appRoutes: Routes = [
  { path: "**", component: AppComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    DataService
  ],
})
export class AppModule {
}
