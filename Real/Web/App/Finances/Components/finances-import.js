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
var router_1 = require("@angular/router");
var GlobalLoadingIndicatorService_js_1 = require("../Services/GlobalLoadingIndicatorService.js");
var Rx_1 = require("rxjs/Rx");
var Importer_js_1 = require("../Finances/Importer.js");
var Parser_js_1 = require("../Finances/Parser.js");
var DBValueProvider_js_1 = require("../Finances/DBValueProvider.js");
var FinancesImportComponent = (function () {
    function FinancesImportComponent(_financesService, _router, _globalLoadingIndicatorService) {
        this._financesService = _financesService;
        this._router = _router;
        this._globalLoadingIndicatorService = _globalLoadingIndicatorService;
        this.transactions = [];
        this.lastIndexShownDetails = -1;
        this.steps = [
            "userSelect",
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
        this._globalLoadingIndicatorService.addLoadingProcess();
        Rx_1.Observable.zip(this._financesService.persons, this._financesService.users)
            .subscribe(function (_a) {
            var persons = _a[0], users = _a[1];
            _this.persons = persons;
            _this.users = users;
            _this.possibleFileTypes = [
                {
                    extension: "csv",
                    provider: "Commerzbank",
                    description: "Commerzbank Giro Account Statement CSV Export",
                    mode: "implemented",
                    factory: function () {
                        var result = new Importer_js_1.CommerzbankGiroAccountStatementImporter();
                        result.dataParser = new Parser_js_1.GermanDataParser();
                        return result;
                    }
                },
                {
                    extension: "csv",
                    provider: "Commerzbank",
                    description: "Commerzbank Credit Card Statement CSV Export",
                    mode: "implemented",
                    factory: function () {
                        var result = new Importer_js_1.CommerzbankCreditCardStatementImporter();
                        result.dataParser = new Parser_js_1.GermanDataParser();
                        return result;
                    }
                },
                {
                    extension: "csv",
                    provider: "PayPal",
                    description: "Paypal (German) \"Guthaben-relevante Zahlungen (CSV, Komma getrennt)\" Export",
                    mode: "implemented",
                    factory: function () {
                        var result = new Importer_js_1.PayPalAccountStatementImporter();
                        result.dataParser = new Parser_js_1.GermanDataParser();
                        return result;
                    }
                },
                {
                    extension: "csv",
                    provider: "Finances",
                    description: "Finances Import Form CSV",
                    mode: "implemented",
                    factory: function () {
                        var result = new Importer_js_1.FinancesCsvImporter();
                        result.dataParser = new Parser_js_1.GermanDataParser();
                        return result;
                    }
                }
            ];
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    };
    Object.defineProperty(FinancesImportComponent.prototype, "selectedUser", {
        get: function () {
            return this._selectedUser;
        },
        set: function (value) {
            var _this = this;
            this._globalLoadingIndicatorService.addLoadingProcess();
            this._selectedUser = value;
            this._financesService.getCurrencyAccounts(value).subscribe(function (x) {
                _this.currencyAccounts = x;
                _this._globalLoadingIndicatorService.removeLoadingProcess();
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
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        setTimeout(function () {
            _this.nextStep();
            var importer = _this.possibleFileTypes[index].factory();
            importer.dbValueProvider = new DBValueProvider_js_1.DBValueProvider(_this.persons, _this.currencyAccounts);
            importer.readFile(_this.selectedFile);
            _this.transactions = importer.transactions;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        }, 0);
    };
    Object.defineProperty(FinancesImportComponent.prototype, "transactionsHasErrors", {
        get: function () {
            for (var _i = 0, _a = this.transactions; _i < _a.length; _i++) {
                var t = _a[_i];
                if (!t.currencyAccountId || !t.personId) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    FinancesImportComponent.prototype.submitData = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.addTransactions(this.transactions).subscribe(function () {
            _this._router.navigateByUrl("/Finances");
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        }, function (error) {
            alert(error);
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
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
    __metadata("design:paramtypes", [typeof (_a = typeof FinancesService_js_1.FinancesService !== "undefined" && FinancesService_js_1.FinancesService) === "function" && _a || Object, router_1.Router, typeof (_b = typeof GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService !== "undefined" && GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService) === "function" && _b || Object])
], FinancesImportComponent);
exports.FinancesImportComponent = FinancesImportComponent;
var _a, _b;
