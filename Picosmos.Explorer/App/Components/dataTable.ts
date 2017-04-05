import { Component, Input } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

export enum DataTableKinds {
    self,
    referenced,
}

@Component({
    selector: "data-table",
    templateUrl: "/Templates/DataTable"
})
export class DataTableComponent {
    private _dataset: DatasetIdentifier;
    @Input()
    public set dataset(value: DatasetIdentifier) {
        this._dataset = value;
        if (value) {
            this.updateFromServer();
        }
    }
    public get dataset(): DatasetIdentifier {
        return this._dataset;
    }

    @Input()
    public kind: DataTableKinds = DataTableKinds.referenced;

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        return Observable.throw("An error occured.");
    }

    constructor(private http: Http) { }

    public updateFromServer() {
        const url = `/Data/GetDataFromTableColumnValue?tableName=${this.dataset.tableName}&columnName=${this.dataset.columnName}&columnValue=${this.dataset.columnValue}&kind=${DataTableKinds[this.kind]}`;
        const res = this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);

        if (res) {
            res.subscribe(
                data => {
                    this.tables = data;

                    for (let table of this.tables) {
                        for (let row of table.rows) {
                            for (let cell of row.cells) {
                                for (let col of table.columns) {
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
                            for (let cr of table.circularReferences) {
                                let value: any = null;
                                for (let cell of row.cells) {
                                    if (cell.columnName === cr.firstColumnName) {
                                        value = cell.content;
                                        break;
                                    }
                                }
                                let abc = new CircularReferenceDataModel();
                                abc.chainId = cr.chainId;
                                abc.columnValue = value;
                                abc.chainDescription = cr.description;
                                abc.firstColumnName = cr.firstColumnName;
                                row.circularReferences.push(abc);
                            }
                        }
                    }
                },
                error => {
                    console.error(error);
                    return error;
                });
        }
    }

    public tables: TableResultModel[];

    public expand(table: TableResultModel, row: TableRow, cell: TableCell) {
        let colName: string;
        for (let col of table.columns) {
            if (col.columnName === cell.columnName) {
                colName = col.columnName;
                break;
            }
        }

        if (colName) {
            let item = {
                tableName: table.name,
                columnName: colName,
                columnValue: cell.content
            }
            row.expandedDatasets.unshift(item);
        }

        cell.wasAlreadyExpanded = true;
    }

    public expandCircularReference(table: TableResultModel, row: TableRow, cr: CircularReferenceDataModel) {
        row.circularReferences.splice(row.circularReferences.indexOf(cr), 1);
        row.expandedCircularReferences.unshift(cr);
    }
}