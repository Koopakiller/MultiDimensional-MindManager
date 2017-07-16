"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FinancesViewModels_js_1 = require("../ViewModels/FinancesViewModels.js");
var FinanceEntry = (function () {
    function FinanceEntry() {
    }
    return FinanceEntry;
}());
exports.FinanceEntry = FinanceEntry;
var PersonServerModel = (function () {
    function PersonServerModel() {
    }
    PersonServerModel.prototype.toViewModel = function () {
        return new FinancesViewModels_js_1.PersonViewModel(this.id, this.name);
    };
    return PersonServerModel;
}());
exports.PersonServerModel = PersonServerModel;
var UserServerModel = (function () {
    function UserServerModel() {
    }
    UserServerModel.prototype.toViewModel = function () {
        return new FinancesViewModels_js_1.UserViewModel(this.id, this.name);
    };
    return UserServerModel;
}());
exports.UserServerModel = UserServerModel;
var CurrencyServerModel = (function () {
    function CurrencyServerModel() {
    }
    CurrencyServerModel.prototype.toViewModel = function () {
        return new FinancesViewModels_js_1.CurrencyViewModel(this.id, this.names.join(", "));
    };
    return CurrencyServerModel;
}());
exports.CurrencyServerModel = CurrencyServerModel;
