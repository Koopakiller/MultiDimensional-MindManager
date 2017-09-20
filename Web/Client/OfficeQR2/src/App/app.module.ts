import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { QRCodeService } from "./Services/QRCodeService";
import { AppComponent } from "./Components/App";
import { IndexComponent as InputIndexComponent } from "./Components/InputComponents/Index";
import { UrlComponent as InputUrlComponent } from "./Components/InputComponents/Url";
import { InputDataService } from "./Services/InputDataService";
import { CodePreviewComponent } from "./Components/CodePreview";

const appRoutes: Routes = [
  //Input Components:
  //{ path: "", outlet: "input", component: InputIndexComponent, pathMatch: "full" },
  { path: "Index", outlet: "input", component: InputIndexComponent },
  { path: "Url", outlet: "input", component: InputUrlComponent },

  {
    path: "",
    //component: InputIndexComponent,
    redirectTo: "/(input:Index)",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    InputIndexComponent,
    InputUrlComponent,
    CodePreviewComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    QRCodeService,
    InputDataService
  ],
})
export class AppModule {
}
