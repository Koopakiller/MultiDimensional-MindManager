"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var PageComponentBase_js_1 = require("../Common/PageComponentBase.js");
var FinancesNewTransactionComponent = (function (_super) {
    __extends(FinancesNewTransactionComponent, _super);
    function FinancesNewTransactionComponent(financesService, locationService, router) {
        var _this = _super.call(this) || this;
        _this.financesService = financesService;
        _this.locationService = locationService;
        _this.router = router;
        _this.includeTimeStampTime = false;
        _this.showAddPersonForm = false;
        return _this;
    }
    FinancesNewTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addLoadingProcess();
        this.financesService.persons.subscribe(function (x) {
            _this.persons = x;
            _this.person = x.length > 0 ? x[0].id : null;
            _this.removeLoadingProcess();
        });
        this.addLoadingProcess();
        this.financesService.users.subscribe(function (x) {
            _this.users = x;
            _this.user = x.length > 0 ? x[0].id : null;
            _this.removeLoadingProcess();
        });
        this.addLoadingProcess();
        this.locationService.location.subscribe(function (x) {
            _this.coordinates = x ? x.coords : null;
            _this.removeLoadingProcess();
        });
        this.timeStampDate = new Date();
        this.timeStampDate.setHours(0, 0, 0, 0);
        this.timeStampTime = new Date('12:34 AM');
        this.value = 0;
    };
    Object.defineProperty(FinancesNewTransactionComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            var _this = this;
            this.addLoadingProcess();
            this._user = value;
            this.financesService.getCurrencyAccounts(value).subscribe(function (x) {
                _this.currencyAccounts = x;
                _this.currencyAccount = x.length > 0 ? x[0].id : null;
                _this.removeLoadingProcess();
            });
        },
        enumerable: true,
        configurable: true
    });
    FinancesNewTransactionComponent.prototype.submit = function () {
        var _this = this;
        this.addLoadingProcess();
        var tvm = new FinancesViewModels_js_1.TransactionViewModel();
        tvm.currencyAccountId = this.currencyAccount;
        tvm.personId = this.person;
        tvm.userId = this.user;
        tvm.timeStampDate = this.timeStampDate;
        tvm.timeStampTime = this.timeStampTime;
        tvm.includeTimeStampTime = this.includeTimeStampTime;
        tvm.note = this.name;
        tvm.value = this.value;
        if (this.coordinates) {
            tvm.rawData = [
                new KeyValuePair_js_1.KeyValuePair("Coordinates", JSON.stringify(this.coordinates))
            ];
        }
        this.financesService.addTransaction([tvm]).subscribe(function () {
            _this.router.navigateByUrl("/Finances");
            _this.removeLoadingProcess();
        }, function (error) {
            alert(error);
            _this.removeLoadingProcess();
        });
    };
    FinancesNewTransactionComponent.prototype.cancel = function () {
        this.router.navigateByUrl("/Finances");
    };
    FinancesNewTransactionComponent.prototype.submitNewPerson = function () {
        var _this = this;
        this.addLoadingProcess();
        this.financesService.addPerson(this.addNewPersonName, this.user);
        this.addNewPersonName = "";
        this.showAddPersonForm = false;
        this.financesService.persons.subscribe(function (x) {
            _this.persons = x;
            _this.person = x.length > 0 ? x[0].id : null;
            _this.removeLoadingProcess();
        });
    };
    return FinancesNewTransactionComponent;
}(PageComponentBase_js_1.PageComponentBase));
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
