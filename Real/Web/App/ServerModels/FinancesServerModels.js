"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FinancesViewModels_js_1 = require("../ViewModels/FinancesViewModels.js");
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
        var currencyNames = this.currencyNames.map(function (x) { return x.symbol; }).join(", ");
        var cavm = new FinancesViewModels_js_1.CurrencyAccountViewModel(this.currencyAccountId, this.accountName + " (" + currencyNames + ")");
        cavm.currencySymbols = this.currencyNames.map(function (x) { return x.symbol; });
        cavm.accountName = this.accountName;
        return cavm;
    };
    return CurrencyAccountServerModel;
}());
exports.CurrencyAccountServerModel = CurrencyAccountServerModel;
var CurrencySymbolServerModel = (function () {
    function CurrencySymbolServerModel() {
    }
    return CurrencySymbolServerModel;
}());
exports.CurrencySymbolServerModel = CurrencySymbolServerModel;
var TransactionServerModel = (function () {
    function TransactionServerModel() {
        this.rawData = [];
    }
    TransactionServerModel.prototype.toViewModel = function () {
        var tvm = new FinancesViewModels_js_1.TransactionViewModel();
        tvm.currencyAccountId = this.currencyAccountId;
        tvm.id = this.id;
        tvm.note = this.note;
        tvm.personId = this.personId;
        tvm.rawData = this.rawData;
        tvm.timeStampDate = this.timeStampDate;
        tvm.timeStampTime = new Date(this.timeStampTime);
        tvm.userId = this.userId;
        tvm.value = this.value;
        return tvm;
    };
    return TransactionServerModel;
}());
exports.TransactionServerModel = TransactionServerModel;
var TransactionOverviewServerModel = (function () {
    function TransactionOverviewServerModel() {
    }
    TransactionOverviewServerModel.prototype.toViewModel = function () {
        var tovm = new FinancesViewModels_js_1.TransactionOverviewViewModel();
        tovm.accountName = this.accountName;
        tovm.currencyId = this.currencyId;
        tovm.currencyAccountId = this.currencyAccountId;
        tovm.value = this.value;
        return tovm;
    };
    return TransactionOverviewServerModel;
}());
exports.TransactionOverviewServerModel = TransactionOverviewServerModel;
