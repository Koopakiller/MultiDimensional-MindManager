"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FinancesComponent = (function () {
    function FinancesComponent() {
        this.value = 0;
        this.currency = "Euro";
        this.currencies = [
            { id: "Euro", header: "Euro (€)" },
            { id: "USDollar", header: "US Dollar ($)" }
        ];
    }
    FinancesComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (location) { return _this.location = location; });
    };
    FinancesComponent.prototype.submitNew = function () {
        alert(this.currency + "\n" + this.value);
    };
    return FinancesComponent;
}());
FinancesComponent = __decorate([
    core_1.Component({
        selector: "finances",
        templateUrl: "/Templates/Finances"
    })
], FinancesComponent);
exports.FinancesComponent = FinancesComponent;
var FinanceEntry = (function () {
    function FinanceEntry(value, currency, person, location) {
        this.value = value;
        this.currency = currency;
        this.person = person;
        this.location = location;
    }
    return FinanceEntry;
}());
exports.FinanceEntry = FinanceEntry;
