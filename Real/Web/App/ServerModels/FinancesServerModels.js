"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FinancesViewModels_js_1 = require("../ViewModels/FinancesViewModels.js");
var FinanceEntryServerModel = (function () {
    function FinanceEntryServerModel() {
    }
    return FinanceEntryServerModel;
}());
exports.FinanceEntryServerModel = FinanceEntryServerModel;
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
var CurrencyAccountServerModel = (function () {
    function CurrencyAccountServerModel() {
    }
    CurrencyAccountServerModel.prototype.toViewModel = function () {
        return new FinancesViewModels_js_1.CurrencyAccountViewModel(this.currencyAccountId, this.accountName + " (" + this.currencyName + ")");
    };
    return CurrencyAccountServerModel;
}());
exports.CurrencyAccountServerModel = CurrencyAccountServerModel;
