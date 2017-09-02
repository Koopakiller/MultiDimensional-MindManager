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
var FinancesNewPersonComponent = (function () {
    function FinancesNewPersonComponent(_financesService, _router, _globalLoadingIndicatorService) {
        this._financesService = _financesService;
        this._router = _router;
        this._globalLoadingIndicatorService = _globalLoadingIndicatorService;
        this.close = new core_1.EventEmitter();
    }
    FinancesNewPersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.users.subscribe(function (x) {
            _this.users = x;
            _this.user = x.length > 0 ? x[0].id : null;
            //this._globalLoadingIndicatorService.removeLoadingProcess();
        }, function (error) {
            alert(error);
        });
    };
    FinancesNewPersonComponent.prototype.submit = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.addPerson(this.personName, this.user).subscribe(function (item) {
            _this.close.emit(item);
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        }, function (error) {
            alert(error);
        });
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
        router_1.Router,
        GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService])
], FinancesNewPersonComponent);
exports.FinancesNewPersonComponent = FinancesNewPersonComponent;
