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
var app_js_1 = require("./Components/app.js");
var finances_js_1 = require("./Components/finances.js");
var finances_new_entry_js_1 = require("./Components/finances-new-entry.js");
var FinancesService_js_1 = require("./Services/FinancesService.js");
var LocationService_js_1 = require("./Services/LocationService.js");
var router_1 = require("@angular/router");
var style_test_js_1 = require("./Components/style-test.js");
var home_js_1 = require("./Components/home.js");
var MediaApplet_js_1 = require("./Components/MediaApplet.js");
var finances_import_js_1 = require("./Components/finances-import.js");
var appRoutes = [
    { path: 'Home', component: home_js_1.HomeComponent },
    { path: 'Finances', component: finances_js_1.FinancesComponent },
    { path: 'Finances/AddEntry', component: finances_new_entry_js_1.FinancesNewEntryComponent },
    { path: 'Finances/Import', component: finances_import_js_1.FinancesImportComponent },
    { path: 'StyleTest', component: style_test_js_1.StyleTestComponent },
    { path: 'Media', component: MediaApplet_js_1.MediaAppletComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_js_1.AppComponent,
            finances_new_entry_js_1.FinancesNewEntryComponent,
            finances_import_js_1.FinancesImportComponent,
            finances_js_1.FinancesComponent,
            home_js_1.HomeComponent,
            MediaApplet_js_1.MediaAppletComponent,
            style_test_js_1.StyleTestComponent
        ],
        bootstrap: [
            app_js_1.AppComponent
        ],
        providers: [
            FinancesService_js_1.FinancesService,
            LocationService_js_1.LocationService
        ]
    })
], AppModule);
exports.AppModule = AppModule;
