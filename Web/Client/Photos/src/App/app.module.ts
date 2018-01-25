import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./Components/App";
import { PhotoService } from "./Services/PhotoService";
import { IndexComponent } from "./Components/Index";
import { LibraryComponent } from "./Components/Library";
import { PhotoComponent } from "./Components/Photo";

const appRoutes: Routes = [
  { path: "", component: IndexComponent },
  { path: "Library/:library", component: LibraryComponent },
  { path: "Library/:library/Photo/:photo", component: PhotoComponent },
  { path: "**", redirectTo: "/" }
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
    IndexComponent,
    PhotoComponent,
    LibraryComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    PhotoService
  ],
})
export class AppModule {
}
