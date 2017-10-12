import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Common/Components/App";
import { RouterModule, Routes } from "@angular/router";
import { LoadingIndicatorComponent } from "./Common/Components/LoadingIndicator";
import { GlobalLoadingIndicatorService } from "./Common/Services/GlobalLoadingIndicatorService";
import { ErrorComponent } from "./Common/Components/Error";
import { NavigationService } from "./Common/Services/NavigationService";
import { DashboardComponent } from "./Common/Components/Dashboard";
import { SharedModule } from "./Common/shared.module";
import { RoutingSectionService } from "./Common/Services/RoutingSectionService";

const appRoutes: Routes = [
  { path: "Finances", loadChildren: "./Finances/finances.module#FinancesModule" },
  { path: "Test", loadChildren: "./Test/test.module#TestModule" },
  { path: "Media", loadChildren: "./Media/media.module#MediaModule" },

  { path: "Dashboard", component: DashboardComponent },
  { path: "Error/:errorId", component: ErrorComponent },
  { path: "", pathMatch: "full", redirectTo: "Dashboard" },
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
    NavigationService,
		RoutingSectionService
  ],
})
export class AppModule {
}
