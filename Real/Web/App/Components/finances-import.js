"use strict";
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
var FinancesImportComponent = (function () {
    function FinancesImportComponent(financesService, router) {
        this.financesService = financesService;
        this.router = router;
        this.transactions = [];
        this.lastIndexShownDetails = -1;
        this.steps = [
            "fileSelect",
            "fileTypeSelect",
            "showAndFitData"
        ];
        this.showAddPersonPopup = false;
        this.suggestedNewPersonName = "";
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
        this.financesService.persons.subscribe(function (x) { _this.persons = x; });
        this.financesService.users.subscribe(function (x) { _this.users = x; });
    };
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
        for (var _i = 0, _a = this.persons; _i < _a.length; _i++) {
            var person = _a[_i];
            if (person.header == name) {
                return person.id;
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
                    tvm.timeStamp = _this.parseGermanTimeStamp(row["Wertstellung"]);
                    tvm.note = row["Buchungstext"];
                    tvm.value = _this.parseGermanNumber(row["Betrag"]);
                    //tvm.personId = this.getPersonIdFromName(row[...]);
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
                    tvm.timeStamp = _this.parseGermanTimeStamp(row["Buchungstag"]);
                    tvm.note = row["Unternehmen"];
                    tvm.value = _this.parseGermanNumber(row["Betrag"]);
                    tvm.personId = _this.getPersonIdFromName(row["Unternehmen"]);
                    tvm.suggestedPersonName = row["Unternehmen"];
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
                    tvm.timeStamp = _this.parseGermanTimeStamp(row["Datum"], row[" Zeit"], row[" Zeitzone"]);
                    tvm.note = row[" Name"] + " " + row[" Typ"] + (row[" Artikelbezeichnung"] ? " " + row[" Artikelbezeichnung"] : "");
                    tvm.value = _this.parseGermanNumber(row[" Netto"]);
                    tvm.personId = _this.getPersonIdFromName(row[" Name"]);
                    tvm.suggestedPersonName = row[" Name"];
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
                tvm.rawData.push(new FinancesViewModels_js_1.KeyValuePair(key, row[key]));
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
}());
FinancesImportComponent = __decorate([
    core_1.Component({
        selector: "finances-import",
        templateUrl: "/Templates/FinancesImport"
    }),
    __metadata("design:paramtypes", [FinancesService_js_1.FinancesService,
        router_1.Router])
], FinancesImportComponent);
exports.FinancesImportComponent = FinancesImportComponent;
