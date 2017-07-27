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
require("rxjs/add/operator/map");
var FinancesService = (function () {
    function FinancesService(http) {
        this.http = http;
    }
    FinancesService.prototype.map = function (response, mapFx) {
        var lst = response.json().data;
        return lst.map(mapFx);
    };
    Object.defineProperty(FinancesService.prototype, "persons", {
        // Object.assign is neccessary because assigning does not "transfer" methods too.
        // see: https://stackoverflow.com/a/40063179/1623754
        get: function () {
            var _this = this;
            return this.http.get("/api/Finances/GetPersons")
                .map(function (response) { return _this.map(response, function (sm) { var obj = new FinancesServerModels_js_1.PersonServerModel(); Object.assign(obj, sm); return obj.toViewModel(); }); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinancesService.prototype, "users", {
        get: function () {
            var _this = this;
            return this.http.get("/api/Finances/GetUsers")
                .map(function (response) { return _this.map(response, function (sm) { var obj = new FinancesServerModels_js_1.UserServerModel(); Object.assign(obj, sm); return obj.toViewModel(); }); });
        },
        enumerable: true,
        configurable: true
    });
    FinancesService.prototype.getCurrencyAccounts = function (userId) {
        var _this = this;
        return this.http.get("/api/Finances/GetCurrencyAccountsForUser?userId=" + userId)
            .map(function (response) { return _this.map(response, function (sm) { var obj = new FinancesServerModels_js_1.CurrencyAccountServerModel(); Object.assign(obj, sm); return obj.toViewModel(); }); });
    };
    FinancesService.prototype.addEntry = function (currencyId, personId, userId, timeStamp, name, value, coordinates) {
        var data = new FinancesServerModels_js_1.FinanceEntryServerModel();
        data.currencyId = currencyId;
        data.personId = personId;
        data.userId = userId;
        data.timeStamp = timeStamp;
        data.name = name;
        data.value = value;
        data.coordinates = coordinates;
        this.http.post("/api/Finances/AddEntry", data);
    };
    FinancesService.prototype.addPerson = function (name) {
        var data = {
            name: name
        };
        this.http.post("/api/Finances/AddPerson", data);
    };
    return FinancesService;
}());
FinancesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FinancesService);
exports.FinancesService = FinancesService;
