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
var DataTableKinds;
(function (DataTableKinds) {
    DataTableKinds[DataTableKinds["self"] = 0] = "self";
    DataTableKinds[DataTableKinds["referenced"] = 1] = "referenced";
})(DataTableKinds = exports.DataTableKinds || (exports.DataTableKinds = {}));
var DataTableComponent = (function () {
    function DataTableComponent(http) {
        this.http = http;
        this.kind = DataTableKinds.referenced;
    }
    Object.defineProperty(DataTableComponent.prototype, "dataset", {
        get: function () {
            return this._dataset;
        },
        set: function (value) {
            this._dataset = value;
            if (value) {
                this.updateFromServer();
            }
        },
        enumerable: true,
        configurable: true
    });
    DataTableComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DataTableComponent.prototype.handleError = function (error) {
        return Observable_1.Observable.throw("An error occured.");
    };
    DataTableComponent.prototype.updateFromServer = function () {
        var _this = this;
        var url = "/Data/GetDataFromTableColumnValue?tableName=" + this.dataset.tableName + "&columnName=" + this.dataset.columnName + "&columnValue=" + this.dataset.columnValue + "&kind=" + DataTableKinds[this.kind];
        var res = this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
        if (res) {
            res.subscribe(function (data) {
                _this.tables = data;
                for (var _i = 0, _a = _this.tables; _i < _a.length; _i++) {
                    var table = _a[_i];
                    for (var _b = 0, _c = table.rows; _b < _c.length; _b++) {
                        var row = _c[_b];
                        for (var _d = 0, _e = row.cells; _d < _e.length; _d++) {
                            var cell = _e[_d];
                            for (var _f = 0, _g = table.columns; _f < _g.length; _f++) {
                                var col = _g[_f];
                                if (col.columnName === cell.columnName) {
                                    cell.isParent = col.isParent;
                                    cell.isChild = col.isChild;
                                }
                            }
                            if ((cell.isChild || cell.isParent) && cell.content !== "" && cell.content !== null) {
                                cell.canExpand = true;
                            }
                            cell.wasAlreadyExpanded = false;
                        }
                        row.expandedDatasets = [];
                        row.circularReferences = [];
                        row.expandedCircularReferences = [];
                        for (var _h = 0, _j = table.circularReferences; _h < _j.length; _h++) {
                            var cr = _j[_h];
                            var value = null;
                            for (var _k = 0, _l = row.cells; _k < _l.length; _k++) {
                                var cell = _l[_k];
                                if (cell.columnName === cr.firstColumnName) {
                                    value = cell.content;
                                    break;
                                }
                            }
                            var abc = new CircularReferenceDataModel();
                            abc.chainId = cr.chainId;
                            abc.columnValue = value;
                            abc.chainDescription = cr.description;
                            abc.firstColumnName = cr.firstColumnName;
                            row.circularReferences.push(abc);
                        }
                    }
                }
            }, function (error) {
                console.error(error);
                return error;
            });
        }
    };
    DataTableComponent.prototype.expand = function (table, row, cell) {
        var colName;
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var col = _a[_i];
            if (col.columnName === cell.columnName) {
                colName = col.columnName;
                break;
            }
        }
        if (colName) {
            var item = {
                tableName: table.name,
                columnName: colName,
                columnValue: cell.content
            };
            row.expandedDatasets.unshift(item);
        }
        cell.wasAlreadyExpanded = true;
    };
    DataTableComponent.prototype.expandCircularReference = function (table, row, cr) {
        row.circularReferences.splice(row.circularReferences.indexOf(cr), 1);
        row.expandedCircularReferences.unshift(cr);
    };
    return DataTableComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", DatasetIdentifier),
    __metadata("design:paramtypes", [DatasetIdentifier])
], DataTableComponent.prototype, "dataset", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], DataTableComponent.prototype, "kind", void 0);
DataTableComponent = __decorate([
    core_1.Component({
        selector: "data-table",
        templateUrl: "/Templates/DataTable"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], DataTableComponent);
exports.DataTableComponent = DataTableComponent;
//# sourceMappingURL=dataTable.js.map