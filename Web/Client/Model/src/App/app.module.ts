import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./Components/App";
import { DataService } from "./Services/DataService";
import { DimensionsComponent } from "./Components/Dimensions";
import { DynamicModelComponent } from "./Components/DynamicModel";
import { IndexComponent } from "./Components/Index";

const appRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/Index" },
  { path: "Index", component: IndexComponent },
  //{ path: "Image/:path", component: ImageModelComponent},
  { path: "Dynamic/:path", component: DynamicModelComponent },
  { path: "**", redirectTo: "/Index" }
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
    DimensionsComponent,
    DynamicModelComponent,
    IndexComponent
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
