"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FinancesServerModels_js_1 = require("../ServerModels/FinancesServerModels.js");
var UserViewModel = (function () {
    function UserViewModel(_id, _header) {
        this._id = _id;
        this._header = _header;
    }
    Object.defineProperty(UserViewModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserViewModel.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: true,
        configurable: true
    });
    return UserViewModel;
}());
exports.UserViewModel = UserViewModel;
var PersonViewModel = (function () {
    function PersonViewModel(_id, _header) {
        this._id = _id;
        this._header = _header;
    }
    Object.defineProperty(PersonViewModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PersonViewModel.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: true,
        configurable: true
    });
    return PersonViewModel;
}());
exports.PersonViewModel = PersonViewModel;
var CurrencyAccountViewModel = (function () {
    function CurrencyAccountViewModel(_id, _header) {
        this._id = _id;
        this._header = _header;
    }
    Object.defineProperty(CurrencyAccountViewModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrencyAccountViewModel.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: true,
        configurable: true
    });
    return CurrencyAccountViewModel;
}());
exports.CurrencyAccountViewModel = CurrencyAccountViewModel;
var TransactionViewModel = (function () {
    function TransactionViewModel() {
        this.rawData = [];
    }
    TransactionViewModel.prototype.toServerModel = function () {
        var tvm = new FinancesServerModels_js_1.TransactionServerModel();
        tvm.currencyAccountId = this.currencyAccountId;
        tvm.id = this.id;
        tvm.note = this.note;
        tvm.personId = this.personId;
        tvm.rawData = this.rawData;
        tvm.timeStamp = this.timeStamp;
        tvm.userId = this.userId;
        tvm.value = this.value;
        return tvm;
    };
    return TransactionViewModel;
}());
exports.TransactionViewModel = TransactionViewModel;
var TransactionOverviewViewModel = (function () {
    function TransactionOverviewViewModel() {
    }
    TransactionOverviewViewModel.prototype.toViewModel = function () {
        var tosm = new FinancesServerModels_js_1.TransactionOverviewServerModel();
        tosm.accountName = this.accountName;
        tosm.currencyId = this.currencyId;
        tosm.currencyAccountId = this.currencyAccountId;
        tosm.value = this.value;
        return tosm;
    };
    return TransactionOverviewViewModel;
}());
exports.TransactionOverviewViewModel = TransactionOverviewViewModel;
