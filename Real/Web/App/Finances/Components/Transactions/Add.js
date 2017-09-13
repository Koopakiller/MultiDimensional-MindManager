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
var FinancesService_js_1 = require("../../Services/FinancesService.js");
var LocationService_js_1 = require("../../../Shared/Services/LocationService.js");
var FinancesViewModels_js_1 = require("../../ViewModels/FinancesViewModels.js");
var router_1 = require("@angular/router");
var KeyValuePair_js_1 = require("../../../Shared/KeyValuePair.js");
var GlobalLoadingIndicatorService_js_1 = require("../../../Shared/Services/GlobalLoadingIndicatorService.js");
var AddComponent = (function () {
    function AddComponent(_financesService, _locationService, _router, _globalLoadingIndicatorService) {
        this._financesService = _financesService;
        this._locationService = _locationService;
        this._router = _router;
        this._globalLoadingIndicatorService = _globalLoadingIndicatorService;
        this.includeTimeStampTime = false;
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.persons.subscribe(function (x) {
            _this.persons = x;
            _this.person = x.length > 0 ? x[0].id : null;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.users.subscribe(function (x) {
            _this.users = x;
            _this.user = x.length > 0 ? x[0].id : null;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._locationService.location.subscribe(function (x) {
            _this.coordinates = x ? x.coords : null;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this.timeStampDate = new Date();
        this.timeStampDate.setHours(0, 0, 0, 0);
        this.timeStampTime = new Date('12:34 AM');
        this.value = 0;
    };
    Object.defineProperty(AddComponent.prototype, "user", {
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
        },
        enumerable: true,
        configurable: true
    });
    AddComponent.prototype.submit = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
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
        this._financesService.addTransactions([tvm]).subscribe(function () {
            _this._router.navigateByUrl("/Finances");
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        }, function (error) {
            alert(error);
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    };
    AddComponent.prototype.cancel = function () {
        this._router.navigateByUrl("/Finances");
    };
    AddComponent.prototype.addPerson = function () {
        this._router.navigate([{ outlets: { next: '/Persons/Add' } }]).then(function () { });
    };
    return AddComponent;
}());
AddComponent = __decorate([
    core_1.Component({
        templateUrl: "/App/Finances/Templates/Transactions/Add.html"
    }),
    __metadata("design:paramtypes", [FinancesService_js_1.FinancesService,
        LocationService_js_1.LocationService,
        router_1.Router,
        GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService])
], AddComponent);
exports.AddComponent = AddComponent;
