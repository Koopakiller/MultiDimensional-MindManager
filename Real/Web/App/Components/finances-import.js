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
var FinancesImportComponent = (function () {
    function FinancesImportComponent(financesService, router) {
        this.financesService = financesService;
        this.router = router;
        this.possibleFileTypes = [
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank CSV Export", mode: "recommended", method: this.importCommerzbank },
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank Credit Card CSV Export", mode: "not-implemented", method: function () { } },
            { extension: "csv", provider: "PayPal", description: "Paypal CSV Export", mode: "not-implemented", method: function () { } },
            { extension: "xml", provider: "Finances", description: "Excel Form XML Export", mode: "not-implemented", method: function () { } },
        ];
        this.steps = [
            "fileSelect",
            "fileTypeSelect",
            "showAndFitData"
        ];
    }
    FinancesImportComponent.prototype.ngOnInit = function () {
        this.initCurrentStep();
    };
    FinancesImportComponent.prototype.processFileInputChange = function ($event) {
        var inputValue = $event.target;
        if ($event.target.files.length > 0) {
            this.nextStep();
            var file = inputValue.files[0];
            var myReader = new FileReader();
            myReader.onloadend = function (e) {
                console.log(myReader.result);
            };
            myReader.readAsText(file);
        }
    };
    FinancesImportComponent.prototype.importCommerzbank = function () {
        this.nextStep();
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
