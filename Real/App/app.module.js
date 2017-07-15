"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var app_js_1 = require("./Components/app.js");
var main_menu_js_1 = require("./Components/main-menu.js");
var finances_js_1 = require("./Components/finances.js");
var finances_new_entry_js_1 = require("./Components/finances-new-entry.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_js_1.AppComponent,
            main_menu_js_1.MainMenuComponent,
            finances_new_entry_js_1.FinancesNewEntryComponent,
            finances_js_1.FinancesComponent
        ],
        bootstrap: [
            app_js_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
