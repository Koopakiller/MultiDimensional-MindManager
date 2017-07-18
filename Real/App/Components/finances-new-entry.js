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
var router_1 = require("@angular/router");
var FinancesNewEntryComponent = (function () {
    function FinancesNewEntryComponent(financesService, locationService, router) {
        this.financesService = financesService;
        this.locationService = locationService;
        this.router = router;
        this.showAddPersonForm = false;
    }
    FinancesNewEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.financesService.persons.subscribe(function (x) { _this.persons = x; _this.person = x.length > 0 ? x[0].id : null; });
        this.financesService.currencies.subscribe(function (x) { _this.currencies = x; _this.currency = x.length > 0 ? x[0].id : null; });
        this.financesService.users.subscribe(function (x) { _this.users = x; _this.user = x.length > 0 ? x[0].id : null; });
        this.locationService.location.subscribe(function (x) { return _this.coordinates = x ? x.coords : null; });
        this.timeStamp = new Date();
        this.value = 0;
    };
    FinancesNewEntryComponent.prototype.setTimeToNow = function () {
        this.timeStamp = new Date();
    };
    FinancesNewEntryComponent.prototype.submit = function () {
        this.financesService.addEntry(this.currency, this.person, this.user, this.timeStamp, this.name, this.value, this.coordinates);
        this.router.navigateByUrl("/Finances");
    };
    FinancesNewEntryComponent.prototype.cancel = function () {
        this.router.navigateByUrl("/Finances");
    };
    FinancesNewEntryComponent.prototype.submitNewPerson = function () {
        var _this = this;
        this.financesService.addPerson(this.addNewPersonName);
        this.addNewPersonName = "";
        this.showAddPersonForm = false;
        this.financesService.persons.subscribe(function (x) { _this.persons = x; _this.person = x.length > 0 ? x[0].id : null; });
    };
    return FinancesNewEntryComponent;
}());
FinancesNewEntryComponent = __decorate([
    core_1.Component({
        selector: "finances-new-entry",
        templateUrl: "/Templates/FinancesNewEntry"
    }),
    __metadata("design:paramtypes", [FinancesService_js_1.FinancesService,
        LocationService_js_1.LocationService,
        router_1.Router])
], FinancesNewEntryComponent);
exports.FinancesNewEntryComponent = FinancesNewEntryComponent;
