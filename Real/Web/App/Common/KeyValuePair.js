"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
