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
var DataTableComponent = (function () {
    function DataTableComponent(http) {
        this.http = http;
    }
    Object.defineProperty(DataTableComponent.prototype, "dataset", {
        get: function () {
            return this._dataset;
        },
        set: function (value) {
            this._dataset = value;
            this.updateFromServer();
        },
        enumerable: true,
        configurable: true
    });
    DataTableComponent.prototype.getData = function () {
        if (this.dataset) {
            var url = "/Data/GetAssociatedData?table2=" + this.dataset.tableName + "&column2=" + this.dataset.columnName + "&value2=" + this.dataset.columnValue;
            return this.http.get(url)
                .map(this.extractData)
                .catch(this.handleError);
        }
    };
    DataTableComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DataTableComponent.prototype.handleError = function (error) {
        return Observable_1.Observable.throw("An error occured.");
    };
    DataTableComponent.prototype.updateFromServer = function () {
        var _this = this;
        var res = this.getData();
        if (res) {
            res.subscribe(function (data) {
                _this.tables = data;
            }, function (error) {
                console.error(error);
                return error;
            });
        }
    };
    return DataTableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], DataTableComponent.prototype, "dataset", null);
DataTableComponent = __decorate([
    core_1.Component({
        selector: "data-table",
        templateUrl: "/Templates/DataTable"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], DataTableComponent);
exports.DataTableComponent = DataTableComponent;
//# sourceMappingURL=dataTable.component.js.map