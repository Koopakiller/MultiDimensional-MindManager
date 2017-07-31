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
var FinancesServerModels_js_1 = require("../ServerModels/FinancesServerModels.js");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var DataContainer_js_1 = require("../Common/DataContainer.js");
var FinancesService = (function () {
    function FinancesService(http) {
        this.http = http;
    }
    FinancesService.prototype.getListFromResponse = function (response, serverModelFactory) {
        var object = response.json();
        var lst = object.data;
        return lst.map(function (smo) {
            // Object.assign is neccessary because assigning does not "transfer" methods too.
            // see: https://stackoverflow.com/a/40063179/1623754
            var sm = serverModelFactory();
            Object.assign(sm, smo);
            return sm.toViewModel();
        });
    };
    FinancesService.prototype.getList = function (url, serverModelFactory) {
        var _this = this;
        return this.http.get(url).map(function (response) { return _this.getListFromResponse(response, serverModelFactory); });
    };
    Object.defineProperty(FinancesService.prototype, "persons", {
        get: function () {
            return this.getList("/api/Finances/GetPersons", function () { return new FinancesServerModels_js_1.PersonServerModel(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancesService.prototype, "users", {
        get: function () {
            return this.getList("/api/Finances/GetUsers", function () { return new FinancesServerModels_js_1.UserServerModel(); });
        },
        enumerable: true,
        configurable: true
    });
    FinancesService.prototype.getCurrencyAccounts = function (userId) {
        return this.getList("/api/Finances/GetCurrencyAccountsForUser?userId=" + userId, function () { return new FinancesServerModels_js_1.CurrencyAccountServerModel(); });
    };
    FinancesService.prototype.addTransaction = function (tvms) {
        var _this = this;
        var data = new DataContainer_js_1.DataContainer(tvms);
        var postData = JSON.stringify(data);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return Observable_1.Observable.create(function (observer) {
            _this.http.post("/api/Finances/AddTransactions", postData, options).subscribe(function (response) {
                var lst = _this.getListFromResponse(response, function () { return new FinancesServerModels_js_1.TransactionServerModel(); });
                observer.next(lst);
                observer.complete();
            }, function (error) {
                observer.error("Error from Server...");
                observer.complete();
            });
        });
    };
    FinancesService.prototype.addPerson = function (name) {
        var data = {
            name: name
        };
        this.http.post("/api/Finances/AddPerson", JSON.stringify(data)).subscribe(function () {
            alert("sendet");
        });
    };
    return FinancesService;
}());
FinancesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FinancesService);
exports.FinancesService = FinancesService;
