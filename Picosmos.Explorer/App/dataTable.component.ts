import { Component, Input } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";


@Component({
    selector: "data-table",
    templateUrl: "/Templates/DataTable"
})
export class DataTableComponent {
    private _dataset: DatasetIdentifier;
    @Input()
    set dataset(value: DatasetIdentifier) {
        this._dataset = value;
        if (value) {
            this.updateFromServer();
        }
    }
    get dataset(): DatasetIdentifier {
        return this._dataset;
    }

    getData(): Observable<TableResultModel[]> {
        if (this.dataset) {
            const url = `/Data/GetAssociatedData?table2=${this.dataset.tableName}&column2=${this.dataset.columnName}&value2=${this.dataset.columnValue}`;
            return this.http.get(url)
                .map(this.extractData)
                .catch(this.handleError);
        }
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        return Observable.throw("An error occured.");
    }

    constructor(private http: Http) { }

    updateFromServer() {
        const res = this.getData();
        if (res) {
            res.subscribe(
                data => {
                    this.tables = data;

                    for (let table of this.tables) {
                        for (let row of table.rows) {
                            for (let cell of row.cells) {
                                for (let col of table.columns) {
                                    if (col.ordinalPosition === cell.ordinalPosition) {
                                        cell.isParent = col.isParent;
                                        cell.isChild = col.isChild;
                                    }
                                }
                                if ((cell.isChild || cell.isParent) && cell.content !== "") {
                                    cell.canExpand = true;
                                }
                                cell.wasAlreadyExpanded = false;
                            }
                            row.expandedDatasets = [];
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
            if (col.ordinalPosition === cell.ordinalPosition) {
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
            row.expandedDatasets.push(item);
        }

        cell.wasAlreadyExpanded = true;
    }
}


class TableResultModel {
    name: string;
    columns: TableColumn[];
    rows: TableRow[];
}

class TableColumn {
    isChild: boolean;
    isParent: boolean;
    columnName: string;
    columnType: string;
    ordinalPosition: number;
}

class TableRow {
    rowNumber: number;
    cells: TableCell[];

    expandedDatasets: DatasetIdentifier[];
}

class TableCell {
    ordinalPosition: number;
    content: string;
    isChild: boolean;
    isParent: boolean;

    canExpand: boolean;
    wasAlreadyExpanded: boolean;
}