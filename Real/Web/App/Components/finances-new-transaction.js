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
var LocationService_js_1 = require("../Services/LocationService.js");
var FinancesViewModels_js_1 = require("../ViewModels/FinancesViewModels.js");
var router_1 = require("@angular/router");
var KeyValuePair_js_1 = require("../Common/KeyValuePair.js");
var FinancesNewTransactionComponent = (function () {
    function FinancesNewTransactionComponent(financesService, locationService, router) {
        this.financesService = financesService;
        this.locationService = locationService;
        this.router = router;
        this.showAddPersonForm = false;
    }
    FinancesNewTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.financesService.persons.subscribe(function (x) { _this.persons = x; _this.person = x.length > 0 ? x[0].id : null; });
        this.financesService.users.subscribe(function (x) { _this.users = x; _this.user = x.length > 0 ? x[0].id : null; });
        this.locationService.location.subscribe(function (x) { return _this.coordinates = x ? x.coords : null; });
        this.timeStamp = new Date();
        this.value = 0;
    };
    Object.defineProperty(FinancesNewTransactionComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            var _this = this;
            this._user = value;
            this.financesService.getCurrencyAccounts(value).subscribe(function (x) { _this.currencyAccounts = x; _this.currencyAccount = x.length > 0 ? x[0].id : null; });
        },
        enumerable: true,
        configurable: true
    });
    FinancesNewTransactionComponent.prototype.setTimeToNow = function () {
        this.timeStamp = new Date();
    };
    FinancesNewTransactionComponent.prototype.submit = function () {
        var _this = this;
        var tvm = new FinancesViewModels_js_1.TransactionViewModel();
        tvm.currencyAccountId = this.currencyAccount;
        tvm.personId = this.person;
        tvm.userId = this.user;
        tvm.timeStamp = this.timeStamp;
        tvm.note = this.name;
        tvm.value = this.value;
        if (this.coordinates) {
            tvm.rawData = [
                new KeyValuePair_js_1.KeyValuePair("Coordinates", JSON.stringify(this.coordinates))
            ];
        }
        this.financesService.addTransaction([tvm]).subscribe(function () {
            _this.router.navigateByUrl("/Finances");
        }, function (error) {
            alert(error);
        });
    };
    FinancesNewTransactionComponent.prototype.cancel = function () {
        this.router.navigateByUrl("/Finances");
    };
    FinancesNewTransactionComponent.prototype.submitNewPerson = function () {
        var _this = this;
        this.financesService.addPerson(this.addNewPersonName);
        this.addNewPersonName = "";
        this.showAddPersonForm = false;
        this.financesService.persons.subscribe(function (x) { _this.persons = x; _this.person = x.length > 0 ? x[0].id : null; });
    };
    return FinancesNewTransactionComponent;
}());
FinancesNewTransactionComponent = __decorate([
    core_1.Component({
        selector: "finances-new-transaction",
        templateUrl: "/Templates/FinancesNewTransaction"
    }),
    __metadata("design:paramtypes", [FinancesService_js_1.FinancesService,
        LocationService_js_1.LocationService,
        router_1.Router])
], FinancesNewTransactionComponent);
exports.FinancesNewTransactionComponent = FinancesNewTransactionComponent;
