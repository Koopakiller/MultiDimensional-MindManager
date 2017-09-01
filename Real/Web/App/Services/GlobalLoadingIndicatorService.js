"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var GlobalLoadingIndicatorService = (function () {
    function GlobalLoadingIndicatorService() {
        // Observable navItem source
        this._isLoadingSource = new BehaviorSubject_1.BehaviorSubject(false);
        // Observable navItem stream
        this.isLoadingObservable = this._isLoadingSource.asObservable();
        this._loadingProcessCount = 0;
    }
    Object.defineProperty(GlobalLoadingIndicatorService.prototype, "isLoading", {
        get: function () {
            return this._loadingProcessCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    GlobalLoadingIndicatorService.prototype.addLoadingProcess = function () {
        this._loadingProcessCount += 1;
        this._isLoadingSource.next(this.isLoading);
    };
    GlobalLoadingIndicatorService.prototype.removeLoadingProcess = function () {
        this._loadingProcessCount -= 1;
        if (this._loadingProcessCount < 0) {
            throw "Negative _loadingProcessCount is not possible.";
        }
        this._isLoadingSource.next(this.isLoading);
    };
    return GlobalLoadingIndicatorService;
}());
GlobalLoadingIndicatorService = __decorate([
    core_1.Injectable()
], GlobalLoadingIndicatorService);
exports.GlobalLoadingIndicatorService = GlobalLoadingIndicatorService;
