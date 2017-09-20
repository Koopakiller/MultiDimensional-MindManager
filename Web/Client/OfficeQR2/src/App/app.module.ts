import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { QRCodeService } from "./Services/QRCodeService";
import { AppComponent } from "./Components/App";
import { IndexComponent as InputIndexComponent } from "./Components/DataInputComponents/Index";
import { UrlComponent as InputUrlComponent } from "./Components/DataInputComponents/Url";
import { InputDataService } from "./Services/InputDataService";
import { CodePreviewComponent } from "./Components/CodePreview";

const appRoutes: Routes = [
  //Input Components:
  { path: "Index", outlet: "data-input", component: InputIndexComponent },
  { path: "Url", outlet: "data-input", component: InputUrlComponent },

  {
    path: "",
    redirectTo: "/(data-input:Index)",
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
