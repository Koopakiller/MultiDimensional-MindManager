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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var Index_js_1 = require("./Components/Index.js");
var GlobalLoadingIndicatorService_js_1 = require("../Shared/Services/GlobalLoadingIndicatorService.js");
var NavigationService_js_1 = require("../Shared/Services/NavigationService.js");
var shared_module_js_1 = require("../Shared/shared.module.js");
var mediaRoutes = [
    {
        path: "",
        component: Index_js_1.IndexComponent
    },
];
var MediaModule = (function () {
    function MediaModule() {
    }
    return MediaModule;
}());
MediaModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(mediaRoutes),
            http_1.HttpModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            shared_module_js_1.SharedModule
        ],
        declarations: [
            Index_js_1.IndexComponent
        ],
        bootstrap: [
            Index_js_1.IndexComponent
        ],
        providers: [
            GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService,
            NavigationService_js_1.NavigationService
        ],
    })
], MediaModule);
exports.MediaModule = MediaModule;
