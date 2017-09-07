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
var FinancesService_js_1 = require("../Services/FinancesService.js");
var router_1 = require("@angular/router");
var GlobalLoadingIndicatorService_js_1 = require("../../Services/GlobalLoadingIndicatorService.js");
var FinancesOverviewComponent = (function () {
    function FinancesOverviewComponent(_financesService, _router, _globalLoadingIndicatorService) {
        this._financesService = _financesService;
        this._router = _router;
        this._globalLoadingIndicatorService = _globalLoadingIndicatorService;
    }
    FinancesOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._financesService.users.subscribe(function (x) { _this.users = x; _this.user = x.length > 0 ? x[0].id : null; });
    };
    Object.defineProperty(FinancesOverviewComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            var _this = this;
            this._globalLoadingIndicatorService.addLoadingProcess();
            this._user = value;
            this._financesService.getCurrencyAccounts(value).subscribe(function (x) {
                _this.currencyAccounts = x;
                _this.currencyAccount = x.length > 0 ? x[0].id : null;
                _this._globalLoadingIndicatorService.removeLoadingProcess();
            });
            this._financesService.getTransactionOverviewForUserAtTimeStamp(value, new Date()).subscribe(function (x) { _this.transactionOverview = x; });
        },
        enumerable: true,
        configurable: true
    });
    FinancesOverviewComponent.prototype.showTable = function (currencyAccountId) {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.getTransactions(currencyAccountId, 0, 25).subscribe(function (x) {
            _this.transactionsInTable = x;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    };
    FinancesOverviewComponent.prototype.hideTable = function () {
        this.transactionsInTable = null;
    };
    return FinancesOverviewComponent;
}());
FinancesOverviewComponent = __decorate([
    core_1.Component({
        selector: "finances-overview",
        templateUrl: "/Templates/Finances/Overview"
    }),
    __metadata("design:paramtypes", [FinancesService_js_1.FinancesService,
        router_1.Router,
        GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService])
], FinancesOverviewComponent);
exports.FinancesOverviewComponent = FinancesOverviewComponent;
