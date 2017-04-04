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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var CircularReferenceComponent = (function () {
    function CircularReferenceComponent(http) {
        this.http = http;
    }
    Object.defineProperty(CircularReferenceComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
            if (value) {
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    CircularReferenceComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    CircularReferenceComponent.prototype.handleError = function (error) {
        return Observable_1.Observable.throw("An error occured.");
    };
    CircularReferenceComponent.prototype.update = function () {
        var _this = this;
        if (this.data) {
            var url = "/Data/GetCircularReferencedData?chainId=" + this.data.chainId + "&columnValue=" + this.data.columnValue;
            this.http.get(url)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe(function (data) {
                _this.tableModel = data;
            }, function (error) {
                console.error(error);
                return error;
            });
        }
    };
    return CircularReferenceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", CircularReferenceDataModel),
    __metadata("design:paramtypes", [CircularReferenceDataModel])
], CircularReferenceComponent.prototype, "data", null);
CircularReferenceComponent = __decorate([
    core_1.Component({
        selector: "circular-reference",
        templateUrl: "/Templates/CircularReference"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], CircularReferenceComponent);
exports.CircularReferenceComponent = CircularReferenceComponent;
//# sourceMappingURL=circularReference.js.map