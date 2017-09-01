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
var GlobalLoadingIndicatorService_js_1 = require("../Services/GlobalLoadingIndicatorService.js");
var AppComponent = (function () {
    function AppComponent(_globalLoadingIndicatorService) {
        this._globalLoadingIndicatorService = _globalLoadingIndicatorService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._globalLoadingIndicatorService.isLoadingObservable
            .subscribe(function (item) { return _this.isLoading = item; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "/Templates/App"
    }),
    __metadata("design:paramtypes", [GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService])
], AppComponent);
exports.AppComponent = AppComponent;
