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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FinancesService_js_1 = require("../Services/FinancesService.js");
var FinancesViewModels_js_1 = require("../ViewModels/FinancesViewModels.js");
var router_1 = require("@angular/router");
var Papa = require("papaparse");
var KeyValuePair_js_1 = require("../Common/KeyValuePair.js");
var PageComponentBase_js_1 = require("../Common/PageComponentBase.js");
var FinancesImportComponent = (function (_super) {
    __extends(FinancesImportComponent, _super);
    function FinancesImportComponent(financesService, router) {
        var _this = _super.call(this) || this;
        _this.financesService = financesService;
        _this.router = router;
        _this.transactions = [];
        _this.lastIndexShownDetails = -1;
        _this.steps = [
            "userSelect",
            "fileSelect",
            "fileTypeSelect",
            "showAndFitData"
        ];
        _this.showAddPersonPopup = false;
        _this.suggestedNewPersonName = "";
        return _this;
    }
    FinancesImportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initCurrentStep();
        this.possibleFileTypes = [
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank Giro Account Statement CSV Export", mode: "recommended", method: "importCommerzbankGiroAccountStatement" },
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank Credit Card Statement CSV Export", mode: "not-implemented", method: "importCommerzbankCreditCardStatement" },
            { extension: "csv", provider: "PayPal", description: "Paypal (German) \"Guthaben-relevante Zahlungen (CSV, Komma getrennt)\" Export", mode: "not-implemented", method: "importPayPalAccountStatement" },
            { extension: "xml", provider: "Finances", description: "Excel Form XML Export", mode: "not-implemented", method: "" },
        ];
        this.addLoadingProcess();
        this.financesService.persons.subscribe(function (x) {
            _this.persons = x;
            _this.removeLoadingProcess();
        });
        this.addLoadingProcess();
        this.financesService.users.subscribe(function (x) {
            _this.users = x;
            _this.removeLoadingProcess();
        });
    };
    Object.defineProperty(FinancesImportComponent.prototype, "selectedUser", {
        get: function () {
            return this._selectedUser;
        },
        set: function (value) {
            var _this = this;
            this.addLoadingProcess();
            this._selectedUser = value;
            this.financesService.getCurrencyAccounts(value).subscribe(function (x) {
                _this.currencyAccounts = x;
                _this.removeLoadingProcess();
            });
        },
        enumerable: true,
        configurable: true
    });
    FinancesImportComponent.prototype.processFileInputChange = function ($event) {
        var inputValue = $event.target;
        if ($event.target.files.length > 0) {
            this.nextStep();
            this.selectedFile = inputValue.files[0];
        }
    };
    FinancesImportComponent.prototype.import = function (index) {
        this.nextStep();
        this[this.possibleFileTypes[index].method]();
    };
    FinancesImportComponent.prototype.getPersonIdFromName = function (name) {
        var sortedPersons = this.persons.slice();
        sortedPersons.sort(function (a, b) { return a.header.length - b.header.length
            || a.header.localeCompare(b.header); });
        for (var _i = 0, sortedPersons_1 = sortedPersons; _i < sortedPersons_1.length; _i++) {
            var person = sortedPersons_1[_i];
            if (person.header.toUpperCase() === name.toUpperCase()) {
                return person.id;
            }
        }
        for (var _a = 0, sortedPersons_2 = sortedPersons; _a < sortedPersons_2.length; _a++) {
            var person = sortedPersons_2[_a];
            if (name.indexOf(person.header) >= 0) {
                return person.id; // in case the person name is in another text like a description or similar
            }
        }
        return null;
    };
    FinancesImportComponent.prototype.getCurrencyAccountIdFromName = function (name, currency) {
        var sortedCAs = this.currencyAccounts.slice();
        sortedCAs.sort(function (a, b) { return a.accountName.length - b.accountName.length
            || a.accountName.localeCompare(b.accountName); });
        for (var _i = 0, sortedCAs_1 = sortedCAs; _i < sortedCAs_1.length; _i++) {
            var ca = sortedCAs_1[_i];
            if (ca.accountName.toUpperCase() === name.toUpperCase()
                && ca.currencySymbols.indexOf(currency) >= 0) {
                return ca.id;
            }
        }
        for (var _a = 0, sortedCAs_2 = sortedCAs; _a < sortedCAs_2.length; _a++) {
            var ca = sortedCAs_2[_a];
            if (ca.accountName.toUpperCase().indexOf(name.toUpperCase()) >= 0
                && ca.currencySymbols.indexOf(currency) >= 0) {
                return ca.id;
            }
        }
        return null;
    };
    FinancesImportComponent.prototype.importCommerzbankGiroAccountStatement = function () {
        var _this = this;
        var result = Papa.parse(this.selectedFile, {
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
                    tvm.timeStampDate = _this.parseGermanTimeStamp(row["Wertstellung"]);
                    tvm.note = row["Buchungstext"];
                    tvm.value = _this.parseGermanNumber(row["Betrag"]);
                    tvm.personId = _this.getPersonIdFromName(row["Buchungstext"]);
                    tvm.currencyAccountId = _this.getCurrencyAccountIdFromName("Konto", "EUR");
                    _this.addRawData(tvm, row, result.meta.fields);
                    _this.transactions.push(tvm);
                }
            }
        });
    };
    FinancesImportComponent.prototype.importCommerzbankCreditCardStatement = function () {
        var _this = this;
        var result = Papa.parse(this.selectedFile, {
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
                    tvm.timeStampDate = _this.parseGermanTimeStamp(row["Buchungstag"]);
                    tvm.note = row["Unternehmen"];
                    tvm.value = _this.parseGermanNumber(row["Betrag"]);
                    tvm.personId = _this.getPersonIdFromName(row["Unternehmen"]);
                    tvm.suggestedPersonName = row["Unternehmen"];
                    tvm.currencyAccountId = _this.getCurrencyAccountIdFromName("Kreditkarte", "EUR");
                    _this.addRawData(tvm, row, result.meta.fields);
                    _this.transactions.push(tvm);
                }
            }
        });
    };
    FinancesImportComponent.prototype.importPayPalAccountStatement = function () {
        var _this = this;
        var result = Papa.parse(this.selectedFile, {
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
                    tvm.timeStampDate = tvm.timeStampTime = _this.parseGermanTimeStamp(row["Datum"], row[" Zeit"], row[" Zeitzone"]);
                    tvm.note = row[" Name"] + " " + row[" Typ"] + (row[" Artikelbezeichnung"] ? " " + row[" Artikelbezeichnung"] : "");
                    tvm.value = _this.parseGermanNumber(row[" Netto"]);
                    tvm.personId = _this.getPersonIdFromName(row[" Name"]);
                    tvm.suggestedPersonName = row[" Name"];
                    tvm.currencyAccountId = _this.getCurrencyAccountIdFromName("PayPal", row[" Währung"]);
                    _this.addRawData(tvm, row, result.meta.fields);
                    _this.transactions.push(tvm);
                }
            }
        });
    };
    FinancesImportComponent.prototype.addRawData = function (tvm, row, keys) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key && row[key] && row[key] != "") {
                tvm.rawData.push(new KeyValuePair_js_1.KeyValuePair(key, row[key]));
            }
        }
    };
    // TODO: respect timeZone parameter 
    FinancesImportComponent.prototype.parseGermanTimeStamp = function (date, time, timeZone) {
        if (time === void 0) { time = "00:00:00"; }
        if (timeZone === void 0) { timeZone = ""; }
        if (!date) {
            return null;
        }
        var dateParts = date.split(".");
        var timeParts = time.split(":");
        return new Date(+dateParts[2], +dateParts[1], +dateParts[0], +timeParts[0], +timeParts[1], +timeParts[2]);
    };
    FinancesImportComponent.prototype.parseGermanNumber = function (str) {
        if (!str) {
            return null;
        }
        return Number(str.replace(/,/g, "."));
    };
    FinancesImportComponent.prototype.toggleDetails = function (i) {
        if (this.transactions[i].showDetails) {
            this.transactions[i].showDetails = false;
            this.shownRawData = null;
            this.lastIndexShownDetails = -1;
        }
        else {
            if (this.lastIndexShownDetails >= 0) {
                this.transactions[this.lastIndexShownDetails].showDetails = false;
            }
            this.transactions[i].showDetails = true;
            this.shownRawData = this.transactions[i].rawData;
            this.lastIndexShownDetails = i;
        }
    };
    FinancesImportComponent.prototype.initCurrentStep = function () {
        this.currentStep = this.steps[0];
    };
    FinancesImportComponent.prototype.nextStep = function () {
        this.currentStep = this.steps[this.steps.indexOf(this.currentStep) + 1];
    };
    // Add Person ####################################################################################
    FinancesImportComponent.prototype.addPerson = function (name) {
        if (name === void 0) { name = ""; }
        this.showAddPersonPopup = true;
        this.suggestedNewPersonName = name;
    };
    FinancesImportComponent.prototype.closeAddPersonPopup = function (pvm) {
        this.showAddPersonPopup = false;
        this.suggestedNewPersonName = "";
        if (pvm) {
            this.persons.push(pvm);
            for (var _i = 0, _a = this.transactions; _i < _a.length; _i++) {
                var transaction = _a[_i];
                if (transaction.suggestedPersonName === pvm.header && !transaction.personId) {
                    transaction.personId = pvm.id;
                }
            }
        }
    };
    return FinancesImportComponent;
}(PageComponentBase_js_1.PageComponentBase));
FinancesImportComponent = __decorate([
    core_1.Component({
        selector: "finances-import",
        templateUrl: "/Templates/FinancesImport"
    }),
    __metadata("design:paramtypes", [FinancesService_js_1.FinancesService,
        router_1.Router])
], FinancesImportComponent);
exports.FinancesImportComponent = FinancesImportComponent;
