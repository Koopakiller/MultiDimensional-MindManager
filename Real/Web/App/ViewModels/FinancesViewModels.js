"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var CurrencyViewModel = (function () {
    function CurrencyViewModel(_id, _header) {
        this._id = _id;
        this._header = _header;
    }
    Object.defineProperty(CurrencyViewModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrencyViewModel.prototype, "header", {
        get: function () {
            return this._header;
        },
        enumerable: true,
        configurable: true
    });
    return CurrencyViewModel;
}());
exports.CurrencyViewModel = CurrencyViewModel;
var TransactionViewModel = (function () {
    function TransactionViewModel() {
        this.rawData = [];
    }
    return TransactionViewModel;
}());
exports.TransactionViewModel = TransactionViewModel;
var KeyValuePair = (function () {
    function KeyValuePair(_key, _value) {
        this._key = _key;
        this._value = _value;
    }
    Object.defineProperty(KeyValuePair.prototype, "key", {
        get: function () {
            return this._key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KeyValuePair.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
