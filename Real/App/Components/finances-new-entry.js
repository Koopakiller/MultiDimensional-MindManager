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
var FinancesServerModels_js_1 = require("../ServerModels/FinancesServerModels.js");
var FinancesNewEntryComponent = (function () {
    function FinancesNewEntryComponent(financesService, locationService) {
        this.financesService = financesService;
        this.locationService = locationService;
        this.value = 0;
        this.person = 0;
        this.currency = 0;
        this.user = 0;
    }
    FinancesNewEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.financesService.persons.subscribe(function (x) { return _this.persons = x; });
        this.financesService.currencies.subscribe(function (x) { return _this.currencies = x; });
        this.financesService.users.subscribe(function (x) { return _this.users = x; });
        this.locationService.location.subscribe(function (x) { return _this.location = x; });
    };
    FinancesNewEntryComponent.prototype.submit = function () {
        var data = new FinancesServerModels_js_1.FinanceEntry();
        data.currencyId = 0;
        data.existingPersonId = 0;
        data.name = "";
        data.person = "";
        data.timeStamp = new Date();
        data.userId = 0;
        data.value = 0;
    };
    return FinancesNewEntryComponent;
}());
FinancesNewEntryComponent = __decorate([
    core_1.Component({
        selector: "finances-new-entry",
        templateUrl: "/Templates/FinancesNewEntry"
    }),
    __metadata("design:paramtypes", [FinancesService_js_1.FinancesService,
        LocationService_js_1.LocationService])
], FinancesNewEntryComponent);
exports.FinancesNewEntryComponent = FinancesNewEntryComponent;
