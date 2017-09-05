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
var router_1 = require("@angular/router");
var ErrorComponent = (function () {
    function ErrorComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
    }
    Object.defineProperty(ErrorComponent.prototype, "html", {
        get: function () {
            return this._html;
        },
        enumerable: true,
        configurable: true
    });
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._activatedRoute.params.subscribe(function (params) {
            _this.errorId = params['errorId'];
            _this.updateDisplay();
        });
    };
    ErrorComponent.prototype.updateDisplay = function () {
        if (this.errorId === "http404") {
            this._html = "Page not found";
        }
        else {
            this._html = "An unknown error occurred.";
        }
    };
    ErrorComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return ErrorComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ErrorComponent.prototype, "errorId", void 0);
ErrorComponent = __decorate([
    core_1.Component({
        selector: "error",
        templateUrl: "/Templates/Error"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;
