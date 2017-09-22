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
import { VCardComponent as InputVCardComponent } from "./Components/DataInputComponents/VCard";
import { FileComponent as InputFileComponent } from "./Components/DataInputComponents/File";
import { PhoneComponent as InputPhoneComponent } from "./Components/DataInputComponents/Phone";
import { InputService } from "./Services/InputService";
import { CodePreviewComponent } from "./Components/CodePreview";
import { SettingsInputComponent } from "./Components/SettingsInput";
import { MessageComponent } from "./Components/Message";

const appRoutes: Routes = [
  //Input Components:
  { path: InputIndexComponent.PathPart, outlet: "data-input", component: InputIndexComponent },
  { path: InputUrlComponent.PathPart, outlet: "data-input", component: InputUrlComponent },
  { path: InputEmailComponent.PathPart, outlet: "data-input", component: InputEmailComponent },
  { path: InputTextComponent.PathPart, outlet: "data-input", component: InputTextComponent },
  { path: InputVCardComponent.PathPart, outlet: "data-input", component: InputVCardComponent },
  { path: InputFileComponent.PathPart, outlet: "data-input", component: InputFileComponent },
  { path: InputPhoneComponent.PathPart, outlet: "data-input", component: InputPhoneComponent },

  { path: "Message", outlet: "popup", component: MessageComponent },

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
    InputVCardComponent,
    InputFileComponent,
    InputPhoneComponent,
    MessageComponent,
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
