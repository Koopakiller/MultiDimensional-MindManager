"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavigationService_js_1 = require("../../Shared/Services/NavigationService.js");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(_navigationService, _router) {
        var _this = this;
        this._navigationService = _navigationService;
        this._router = _router;
        this.isLoading = true;
        this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                _this.isLoading = true;
            }
            if (event instanceof router_1.NavigationEnd ||
                event instanceof router_1.NavigationCancel ||
                event instanceof router_1.NavigationError) {
                _this.isLoading = false;
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "/App/Scaffold/Templates/App.html"
    }),
    __metadata("design:paramtypes", [NavigationService_js_1.NavigationService,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
