"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DBValueProvider = (function () {
    function DBValueProvider(_persons, _currencyAccounts) {
        var _this = this;
        this._persons = _persons;
        this._currencyAccounts = _currencyAccounts;
        this._currencyAccounts = this._currencyAccounts.slice();
        this._currencyAccounts.sort(function (a, b) { return _this.compareByLengthAndThenAlphabetically(a.accountName, b.accountName); });
        this._persons = this._persons.slice();
        this._persons.sort(function (a, b) { return _this.compareByLengthAndThenAlphabetically(a.header, b.header); });
    }
    DBValueProvider.prototype.compareByLengthAndThenAlphabetically = function (a, b) {
        return a.length - b.length
            || a.localeCompare(b);
    };
    DBValueProvider.prototype.getPersonIdFromName = function (name) {
        for (var _i = 0, _a = this._persons; _i < _a.length; _i++) {
            var person = _a[_i];
            if (person.header.toUpperCase() === name.toUpperCase()) {
                return person.id;
            }
        }
        for (var _b = 0, _c = this._persons; _b < _c.length; _b++) {
            var person = _c[_b];
            if (name.indexOf(person.header) >= 0) {
                return person.id; // in case the person name is in another text like a description or similar
            }
        }
        return null;
    };
    DBValueProvider.prototype.getCurrencyAccountIdFromName = function (name, currency) {
        for (var _i = 0, _a = this._currencyAccounts; _i < _a.length; _i++) {
            var ca = _a[_i];
            if (ca.accountName.toUpperCase() === name.toUpperCase()
                && ca.currencySymbols.indexOf(currency) >= 0) {
                return ca.id;
            }
        }
        for (var _b = 0, _c = this._currencyAccounts; _b < _c.length; _b++) {
            var ca = _c[_b];
            if (ca.accountName.toUpperCase().indexOf(name.toUpperCase()) >= 0
                && ca.currencySymbols.indexOf(currency) >= 0) {
                return ca.id;
            }
        }
        return null;
    };
    return DBValueProvider;
}());
exports.DBValueProvider = DBValueProvider;
