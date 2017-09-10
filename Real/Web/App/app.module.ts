import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Scaffold/Components/app.js";
import { RouterModule, Routes } from '@angular/router';
import { LoadingIndicatorComponent } from "./Scaffold/Components/loading-indicator.js";
import { GlobalLoadingIndicatorService } from "./Shared/Services/GlobalLoadingIndicatorService.js";
import { ErrorComponent } from "./Scaffold/Components/error.js";
import { NavigationService } from "./Shared/Services/NavigationService.js";
import { DashboardComponent } from "./Scaffold/Components/Dashboard.js";
import { SharedModule } from "./Shared/shared.module.js";

const appRoutes: Routes = [
  { path: 'Finances', loadChildren: "/App/Finances/finances.module.js#FinancesModule" },
  { path: 'Test', loadChildren: "/App/Test/test.module.js#TestModule" },
  { path: 'Media', loadChildren: "/App/Media/media.module.js#MediaModule" },

  { path: "Dashboard", component: DashboardComponent },
  { path: 'Error/:errorId', component: ErrorComponent },
  { path: '', pathMatch: 'full', redirectTo: "Dashboard"},
  { path: '**', redirectTo: '/Error/http404' }
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
