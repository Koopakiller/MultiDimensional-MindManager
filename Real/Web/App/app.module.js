"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_js_1 = require("./Scaffold/Components/app.js");
var FinancesService_js_1 = require("./Finances/Services/FinancesService.js");
var LocationService_js_1 = require("./Shared/Services/LocationService.js");
var router_1 = require("@angular/router");
var home_js_1 = require("./Components/home.js");
var MediaApplet_js_1 = require("./Components/MediaApplet.js");
var loading_indicator_js_1 = require("./Components/loading-indicator.js");
var GlobalLoadingIndicatorService_js_1 = require("./Scaffold/Services/GlobalLoadingIndicatorService.js");
var error_js_1 = require("./Scaffold/Components/error.js");
var NavigationService_js_1 = require("./Scaffold/Services/NavigationService.js");
var appRoutes = [
    { path: 'Home', component: home_js_1.HomeComponent },
    { path: 'Finances', loadChildren: "/App/Finances/finances.module.js#FinancesModule" },
    { path: 'Test', loadChildren: "/App/Test/test.module.js#TestModule" },
    { path: 'Media', component: MediaApplet_js_1.MediaAppletComponent },
    { path: 'Error/:errorId', component: error_js_1.ErrorComponent },
    { path: '', pathMatch: 'full', redirectTo: '/Home' },
    { path: '**', redirectTo: '/Error/http404' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes),
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_js_1.AppComponent,
            error_js_1.ErrorComponent,
            loading_indicator_js_1.LoadingIndicatorComponent,
            home_js_1.HomeComponent,
            MediaApplet_js_1.MediaAppletComponent
        ],
        bootstrap: [
            app_js_1.AppComponent
        ],
        providers: [
            FinancesService_js_1.FinancesService,
            LocationService_js_1.LocationService,
            GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService,
            NavigationService_js_1.NavigationService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
