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
