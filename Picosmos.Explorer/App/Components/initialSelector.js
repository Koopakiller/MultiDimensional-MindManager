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
require("/App/Model/DatabaseObjects.js");
var InitialSelectorComponent = (function () {
    function InitialSelectorComponent(http) {
        this.http = http;
        this.onLoadData = new core_1.EventEmitter();
        this.heroesUrl = "/Data/GetTablesAndColumns"; // URL to web API
    }
    InitialSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTablesAndColumns().subscribe(function (data) {
            _this.selectedTableAndColumn = data[0].columns[0];
            _this.tables = data;
        }, function (error) {
            console.error(error);
            return error;
        });
    };
    InitialSelectorComponent.prototype.loadData = function () {
        var obj = {
            tableName: this.selectedTableAndColumn.tableName,
            columnName: this.selectedTableAndColumn.columnName,
            columnValue: this.searchValue
        };
        this.onLoadData.emit(obj);
    };
    InitialSelectorComponent.prototype.getTablesAndColumns = function () {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    InitialSelectorComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    InitialSelectorComponent.prototype.handleError = function (error) {
        return Observable_1.Observable.throw("An error occured.");
    };
    return InitialSelectorComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InitialSelectorComponent.prototype, "onLoadData", void 0);
InitialSelectorComponent = __decorate([
    core_1.Component({
        selector: "initial-selector",
        templateUrl: "/Templates/InitialSelector"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], InitialSelectorComponent);
exports.InitialSelectorComponent = InitialSelectorComponent;
//# sourceMappingURL=initialSelector.js.map