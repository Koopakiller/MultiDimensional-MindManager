import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { QRCodeService } from "./Services/QRCodeService";
import { AppComponent } from "./Components/App";
import { IndexComponent } from "./Components/Index";

const appRoutes: Routes = [
  { path: "", component: IndexComponent },
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
    IndexComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    QRCodeService
  ],
})
export class AppModule { 
}
