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
var FinancesService_js_1 = require("../../Services/FinancesService.js");
var router_1 = require("@angular/router");
var GlobalLoadingIndicatorService_js_1 = require("../../../Scaffold/Services/GlobalLoadingIndicatorService.js");
var AddComponent = (function () {
    function AddComponent(_financesService, _router, _globalLoadingIndicatorService) {
        this._financesService = _financesService;
        this._router = _router;
        this._globalLoadingIndicatorService = _globalLoadingIndicatorService;
        this._isInitialized = false;
        this.close = new core_1.EventEmitter();
    }
    AddComponent.prototype.ngOnInit = function () {
        this._isInitialized = true;
        this.updateUserGroups();
    };
    AddComponent.prototype.ngOnDestroy = function () {
        this._isInitialized = false;
    };
    Object.defineProperty(AddComponent.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
            if (this._isInitialized) {
                this.updateUserGroups();
            }
        },
        enumerable: true,
        configurable: true
    });
    AddComponent.prototype.updateUserGroups = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.getUserGroups(this._userId).subscribe(function (x) {
            _this.userGroups = x;
            _this.userGroup = x.length > 0 ? x[0].id : null;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        }, function (error) {
            alert(error);
        });
    };
    AddComponent.prototype.submit = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.addPerson(this.personName, this.userGroup).subscribe(function (item) {
            _this.close.emit(item);
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        }, function (error) {
            alert(error);
        });
    };
    AddComponent.prototype.cancel = function () {
        this.close.emit();
    };
    return AddComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AddComponent.prototype, "personName", void 0);
__decorate([
    core_1.Input("userId"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], AddComponent.prototype, "userId", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddComponent.prototype, "close", void 0);
AddComponent = __decorate([
    core_1.Component({
        templateUrl: "/Templates/Finances/Persons/Add.html"
    }),
    __metadata("design:paramtypes", [FinancesService_js_1.FinancesService,
        router_1.Router,
        GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService])
], AddComponent);
exports.AddComponent = AddComponent;
