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
var DataContainer_js_1 = require("../../Shared/DataContainer.js");
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
    FinancesService.prototype.getUsersFromUserGroup = function (userGroupId) {
        return this.getList("/api/Finances/GetUsersFromUserGroup?userGroupId=" + userGroupId, function () { return new FinancesServerModels_js_1.UserServerModel(); });
    };
    FinancesService.prototype.getUserGroups = function (userId) {
        var url = "/api/Finances/GetUserGroups";
        if (userId) {
            url = url + ("?userId=" + userId);
        }
        return this.getList(url, function () { return new FinancesServerModels_js_1.UserGroupServerModel(); });
    };
    FinancesService.prototype.getCurrencyAccounts = function (userId) {
        return this.getList("/api/Finances/GetCurrencyAccountsForUser?userId=" + userId, function () { return new FinancesServerModels_js_1.CurrencyAccountServerModel(); });
    };
    FinancesService.prototype.getTransactions = function (currencyAccountId, skipCount, takeCount) {
        var url = "/api/Finances/GetTransactions?currencyAccountId=" + currencyAccountId + "&skipCount=" + skipCount + "&takeCount=" + takeCount;
        return this.getList(url, function () { return new FinancesServerModels_js_1.TransactionServerModel(); });
    };
    FinancesService.prototype.getTransactionOverviewForUserAtTimeStamp = function (userId, timeStamp) {
        var _this = this;
        var url = "/api/Finances/GetTransactionOverviewForUserAtTimeStamp?userId=" + userId + "&timeStamp=" + timeStamp.toUTCString();
        return Observable_1.Observable.create(function (observer) {
            var readyCounter = 0;
            var items;
            var cas;
            function tryAddToObserver() {
                if (readyCounter != 2) {
                    return; // not ready yet
                }
                //assign currency names
                for (var itemIndex in items) {
                    for (var _i = 0, cas_1 = cas; _i < cas_1.length; _i++) {
                        var ca = cas_1[_i];
                        if (ca.id === items[itemIndex].currencyAccountId) {
                            items[itemIndex].currencyAccountName = ca.header;
                        }
                    }
                }
                observer.next(items);
                observer.complete();
            }
            _this.getList(url, function () { return new FinancesServerModels_js_1.TransactionOverviewServerModel(); }).subscribe(function (x) {
                readyCounter += 1;
                tryAddToObserver();
                items = x;
            });
            _this.getCurrencyAccounts(userId).subscribe(function (x) {
                readyCounter += 1;
                cas = x;
                tryAddToObserver();
            });
        });
    };
    FinancesService.prototype.addTransactions = function (tvms) {
        var _this = this;
        var data = new DataContainer_js_1.DataContainer(tvms.map(function (x) { return x.toServerModel(); }));
        var postData = JSON.stringify(data);
        console.log(postData);
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return Observable_1.Observable.create(function (observer) {
            _this.http.post("/api/Finances/AddTransactions", postData, options).subscribe(function (response) {
                var lst = _this.getListFromResponse(response, function () { return new FinancesServerModels_js_1.TransactionServerModel(); });
                observer.next(lst);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    FinancesService.prototype.addPerson = function (name, userGroupId) {
        var _this = this;
        var data = {
            data: {
                name: name,
                userGroupId: userGroupId
            }
        };
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return Observable_1.Observable.create(function (observer) {
            _this.http.post("/api/Finances/AddPerson", JSON.stringify(data), options).subscribe(function (response) {
                var smodc = response.json();
                var smo = smodc.data;
                var sm = new FinancesServerModels_js_1.PersonServerModel();
                Object.assign(sm, smo);
                observer.next(sm.toViewModel());
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    return FinancesService;
}());
FinancesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FinancesService);
exports.FinancesService = FinancesService;
