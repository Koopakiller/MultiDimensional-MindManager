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
    }
    FinancesImportComponent.prototype.ngOnInit = function () {
    };
    FinancesImportComponent.prototype.processFileInputChange = function ($event) {
        var inputValue = $event.target;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            console.log(myReader.result);
        };
        myReader.readAsText(file);
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
