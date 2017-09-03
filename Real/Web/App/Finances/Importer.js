"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var FinancesViewModels_js_1 = require("../ViewModels/FinancesViewModels.js");
var KeyValuePair_js_1 = require("../Common/KeyValuePair.js");
var Papa = require("papaparse");
var FinanceAccountStatementImporter = (function () {
    function FinanceAccountStatementImporter() {
    }
    Object.defineProperty(FinanceAccountStatementImporter.prototype, "transactions", {
        get: function () {
            return this._transactions;
        },
        enumerable: true,
        configurable: true
    });
    FinanceAccountStatementImporter.prototype.addRawData = function (tvm, row, keys) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key && row[key] && row[key] != "") {
                tvm.rawData.push(new KeyValuePair_js_1.KeyValuePair(key, row[key]));
            }
        }
    };
    FinanceAccountStatementImporter.prototype.assignTimeStamp = function (tvm, timeStamp, includeTime) {
        tvm.timeStampDate = new Date(Date.UTC(timeStamp.year(), timeStamp.month(), timeStamp.date(), 0, 0, 0, 0));
        if (includeTime) {
            tvm.timeStampTime = new Date(Date.UTC(0, 0, 0, timeStamp.hour(), timeStamp.minute(), timeStamp.second(), timeStamp.millisecond()));
        }
        else {
            tvm.timeStampTime = null;
        }
        tvm.includeTimeStampTime = includeTime;
        return tvm;
    };
    return FinanceAccountStatementImporter;
}());
exports.FinanceAccountStatementImporter = FinanceAccountStatementImporter;
var CommerzbankCreditCardStatementImporter = (function (_super) {
    __extends(CommerzbankCreditCardStatementImporter, _super);
    function CommerzbankCreditCardStatementImporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommerzbankCreditCardStatementImporter.prototype.readFile = function (file) {
        var _this = this;
        this._transactions = [];
        var result = Papa.parse(file, {
            delimiter: ";",
            header: true,
            skipEmptyLines: true,
            encoding: "utf-8",
            complete: function (result) {
                // it is a german localized file format:
                // Date format: dd.mm.yyyy
                // Number format: xxx,xx
                for (var _i = 0, _a = result.data; _i < _a.length; _i++) {
                    var row = _a[_i];
                    var tvm = new FinancesViewModels_js_1.TransactionViewModel();
                    var timeStamp = _this.dataParser.parseTimeStamp(row["Buchungstag"], "DD.MM.YYYY");
                    tvm = _this.assignTimeStamp(tvm, timeStamp, false);
                    tvm.note = row["Unternehmen"];
                    tvm.value = _this.dataParser.parseNumber(row["Betrag"]);
                    tvm.personId = _this.dbValueProvider.getPersonIdFromName(row["Unternehmen"]);
                    tvm.suggestedPersonName = row["Unternehmen"];
                    tvm.currencyAccountId = _this.dbValueProvider.getCurrencyAccountIdFromName("Kreditkarte", "EUR");
                    _this.addRawData(tvm, row, result.meta.fields);
                    _this._transactions.push(tvm);
                }
            }
        });
    };
    return CommerzbankCreditCardStatementImporter;
}(FinanceAccountStatementImporter));
exports.CommerzbankCreditCardStatementImporter = CommerzbankCreditCardStatementImporter;
var CommerzbankGiroAccountStatementImporter = (function (_super) {
    __extends(CommerzbankGiroAccountStatementImporter, _super);
    function CommerzbankGiroAccountStatementImporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommerzbankGiroAccountStatementImporter.prototype.readFile = function (file) {
        var _this = this;
        this._transactions = [];
        var result = Papa.parse(file, {
            delimiter: ";",
            header: true,
            skipEmptyLines: true,
            encoding: "utf-8",
            complete: function (result) {
                // it is a german localized file format:
                // Date format: dd.mm.yyyy
                // Number format: xxx,xx
                for (var _i = 0, _a = result.data; _i < _a.length; _i++) {
                    var row = _a[_i];
                    var tvm = new FinancesViewModels_js_1.TransactionViewModel();
                    var timeStamp = _this.dataParser.parseTimeStamp(row["Wertstellung"], "DD.MM.YYYY");
                    tvm = _this.assignTimeStamp(tvm, timeStamp, false);
                    tvm.note = row["Buchungstext"];
                    tvm.value = _this.dataParser.parseNumber(row["Betrag"]);
                    tvm.personId = _this.dbValueProvider.getPersonIdFromName(row["Buchungstext"]);
                    tvm.currencyAccountId = _this.dbValueProvider.getCurrencyAccountIdFromName("Konto", "EUR");
                    _this.addRawData(tvm, row, result.meta.fields);
                    _this._transactions.push(tvm);
                }
            }
        });
    };
    return CommerzbankGiroAccountStatementImporter;
}(FinanceAccountStatementImporter));
exports.CommerzbankGiroAccountStatementImporter = CommerzbankGiroAccountStatementImporter;
var PayPalAccountStatementImporter = (function (_super) {
    __extends(PayPalAccountStatementImporter, _super);
    function PayPalAccountStatementImporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPalAccountStatementImporter.prototype.readFile = function (file) {
        var _this = this;
        this._transactions = [];
        var result = Papa.parse(file, {
            delimiter: ",",
            header: true,
            skipEmptyLines: true,
            encoding: "ISO-8859-15",
            complete: function (result) {
                // it is a german localized file format:
                // Date format: dd.mm.yyyy
                // Time format: hh:mm:ss
                // Number format: xxx,xx
                // Attention: PayPals CSV contains spaces before the header-names
                for (var _i = 0, _a = result.data; _i < _a.length; _i++) {
                    var row = _a[_i];
                    if (!row[" Netto"] || row[" Netto"] == "") {
                        continue;
                    }
                    var tvm = new FinancesViewModels_js_1.TransactionViewModel();
                    var timeStampString = row["Datum"] + (row[" Zeit"] ? " " + row[" Zeit"] : "");
                    var timeStampFormat = "DD.MM.YYYY" + (row[" Zeit"] ? " HH:mm:ss" : "");
                    var timeStamp = _this.dataParser.parseTimeStamp(timeStampString, timeStampFormat);
                    tvm = _this.assignTimeStamp(tvm, timeStamp, row[" Zeit"] != "");
                    tvm.note = row[" Name"] + " " + row[" Typ"] + (row[" Artikelbezeichnung"] ? " " + row[" Artikelbezeichnung"] : "");
                    tvm.value = _this.dataParser.parseNumber(row[" Netto"]);
                    var name_1 = _this.tryGetPayPal(row[" Name"]);
                    tvm.personId = _this.dbValueProvider.getPersonIdFromName(name_1);
                    tvm.suggestedPersonName = name_1;
                    tvm.currencyAccountId = _this.dbValueProvider.getCurrencyAccountIdFromName("PayPal", row[" Währung"]);
                    _this.addRawData(tvm, row, result.meta.fields);
                    _this._transactions.push(tvm);
                }
            }
        });
    };
    PayPalAccountStatementImporter.prototype.tryGetPayPal = function (name) {
        //TODO: move to DBValueProvider/IDataParser
        if (name == "von Euro" || name == "in US Dollar" || name == "Kredikarte" || name == "Bankkonto (Lastschrift)") {
            return "PayPal";
        }
        return name;
    };
    return PayPalAccountStatementImporter;
}(FinanceAccountStatementImporter));
exports.PayPalAccountStatementImporter = PayPalAccountStatementImporter;
var FinancesCsvImporter = (function (_super) {
    __extends(FinancesCsvImporter, _super);
    function FinancesCsvImporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FinancesCsvImporter.prototype.readFile = function (file) {
        var _this = this;
        this._transactions = [];
        var result = Papa.parse(file, {
            delimiter: ",",
            header: true,
            skipEmptyLines: true,
            encoding: "utf-8",
            complete: function (result) {
                // it is a german localized file format:
                // Date format: dd.mm.yyyy
                // Number format: xxx,xx
                for (var _i = 0, _a = result.data; _i < _a.length; _i++) {
                    var row = _a[_i];
                    var tvm = new FinancesViewModels_js_1.TransactionViewModel();
                    var timeStampString = row["Date"] + (row["Time"] ? " " + row["Time"] : "");
                    var timeStampFormat = "MM/DD/YYYY" + (row["Time"] ? " hh:mm:ss A" : "");
                    var timeStamp = _this.dataParser.parseTimeStamp(timeStampString, timeStampFormat);
                    tvm = _this.assignTimeStamp(tvm, timeStamp, false);
                    tvm.note = row["Description"];
                    tvm.value = _this.dataParser.parseNumber(row["Value"]);
                    tvm.personId = _this.dbValueProvider.getPersonIdFromName(row["Person"]);
                    tvm.suggestedPersonName = row["Person"];
                    tvm.currencyAccountId = _this.dbValueProvider.getCurrencyAccountIdFromName(row["Account"], row["Currency"]);
                    _this.addRawData(tvm, row, result.meta.fields);
                    _this._transactions.push(tvm);
                }
            }
        });
    };
    return FinancesCsvImporter;
}(FinanceAccountStatementImporter));
exports.FinancesCsvImporter = FinancesCsvImporter;
