import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { QRCodeService } from "./Services/QRCodeService";
import { AppComponent } from "./Components/App";
import { IndexComponent as InputIndexComponent } from "./Components/DataInputComponents/Index";
import { UrlComponent as InputUrlComponent } from "./Components/DataInputComponents/Url";
import { EmailComponent as InputEmailComponent } from "./Components/DataInputComponents/Email";
import { TextComponent as InputTextComponent } from "./Components/DataInputComponents/Text";
import { InputService } from "./Services/InputService";
import { CodePreviewComponent } from "./Components/CodePreview";
import { SettingsInputComponent } from "./Components/SettingsInput";

const appRoutes: Routes = [
  //Input Components:
  { path: "Index", outlet: "data-input", component: InputIndexComponent },
  { path: "Url", outlet: "data-input", component: InputUrlComponent },
  { path: "Email", outlet: "data-input", component: InputEmailComponent },
  { path: "Text", outlet: "data-input", component: InputTextComponent },

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
    SettingsInputComponent,
    InputIndexComponent,
    InputUrlComponent,
    InputEmailComponent,
    InputTextComponent,
    CodePreviewComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    QRCodeService,
    InputService
  ],
})
export class AppModule {
}
