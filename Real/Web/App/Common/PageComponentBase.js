"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PageComponentBase = (function () {
    function PageComponentBase() {
        this._loadingProcessCount = 0;
    }
    Object.defineProperty(PageComponentBase.prototype, "isLoading", {
        get: function () {
            return this._loadingProcessCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    PageComponentBase.prototype.addLoadingProcess = function () {
        this._loadingProcessCount += 1;
    };
    PageComponentBase.prototype.removeLoadingProcess = function () {
        this._loadingProcessCount -= 1;
        if (this._loadingProcessCount < 0) {
            throw "Negative _loadingProcessCount is not possible.";
        }
    };
    return PageComponentBase;
}());
exports.PageComponentBase = PageComponentBase;
