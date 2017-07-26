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
var FinancesNewPersonComponent = (function () {
    function FinancesNewPersonComponent(financesService, router) {
        this.financesService = financesService;
        this.router = router;
        this.close = new core_1.EventEmitter();
    }
    FinancesNewPersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.financesService.persons.subscribe(function (x) { _this.persons = x; });
    };
    FinancesNewPersonComponent.prototype.submit = function () {
        this.financesService.addPerson(this.personName);
        var pvm = new FinancesViewModels_js_1.PersonViewModel(-1, this.personName);
        this.close.emit(pvm);
    };
    FinancesNewPersonComponent.prototype.cancel = function () {
        this.close.emit();
    };
    return FinancesNewPersonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FinancesNewPersonComponent.prototype, "personName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FinancesNewPersonComponent.prototype, "close", void 0);
FinancesNewPersonComponent = __decorate([
    core_1.Component({
        selector: "finances-new-person",
        templateUrl: "/Templates/FinancesNewPerson"
    }),
    __metadata("design:paramtypes", [FinancesService_js_1.FinancesService,
        router_1.Router])
], FinancesNewPersonComponent);
exports.FinancesNewPersonComponent = FinancesNewPersonComponent;
//# sourceMappingURL=finances-new-person.js.map