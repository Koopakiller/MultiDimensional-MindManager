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
        this.steps = [
            "fileSelect",
            "fileTypeSelect",
            "showAndFitData"
        ];
    }
    FinancesImportComponent.prototype.ngOnInit = function () {
        this.initCurrentStep();
        this.possibleFileTypes = [
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank CSV Export", mode: "recommended", method: "importCommerzbank" },
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank Credit Card CSV Export", mode: "not-implemented", method: "" },
            { extension: "csv", provider: "PayPal", description: "Paypal CSV Export", mode: "not-implemented", method: "" },
            { extension: "xml", provider: "Finances", description: "Excel Form XML Export", mode: "not-implemented", method: "" },
        ];
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
    FinancesImportComponent.prototype.importCommerzbank = function () {
        var _this = this;
        var result = Papa.parse(this.selectedFile, {
            delimiter: ";",
            header: true,
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
                    _this.transactions.push(tvm);
                }
            }
        });
    };
    FinancesImportComponent.prototype.parseGermanTimeStamp = function (str) {
        if (!str) {
            return null;
        }
        var parts = str.split(".");
        return new Date(+parts[2], +parts[1], +parts[0]);
    };
    FinancesImportComponent.prototype.parseGermanNumber = function (str) {
        if (!str) {
            return null;
        }
        return Number(str.replace(/,/g, "."));
    };
    FinancesImportComponent.prototype.initCurrentStep = function () {
        this.currentStep = this.steps[0];
    };
    FinancesImportComponent.prototype.nextStep = function () {
        this.currentStep = this.steps[this.steps.indexOf(this.currentStep) + 1];
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
