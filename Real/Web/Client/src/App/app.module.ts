import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Scaffold/Components/App";
import { RouterModule, Routes } from "@angular/router";
import { LoadingIndicatorComponent } from "./Scaffold/Components/LoadingIndicator";
import { GlobalLoadingIndicatorService } from "./Shared/Services/GlobalLoadingIndicatorService";
import { ErrorComponent } from "./Scaffold/Components/Error";
import { NavigationService } from "./Shared/Services/NavigationService";
import { DashboardComponent } from "./Scaffold/Components/Dashboard";
import { SharedModule } from "./Shared/shared.module";

const appRoutes: Routes = [
  // { path: "Finances", loadChildren: "App/Finances/finances.module#FinancesModule" },
  // { path: "Test", loadChildren: "App/Test/test.module#TestModule" },
  // { path: "Media", loadChildren: "App/Media/media.module#MediaModule" },

  { path: "Dashboard", component: DashboardComponent },
  { path: "Error/:errorId", component: ErrorComponent },
  { path: "", pathMatch: "full", redirectTo: "Dashboard"},
  { path: "**", redirectTo: "/Error/http404" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    ErrorComponent,
    LoadingIndicatorComponent,
    DashboardComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    GlobalLoadingIndicatorService,
    NavigationService
  ],
})
export class AppModule { 
}
