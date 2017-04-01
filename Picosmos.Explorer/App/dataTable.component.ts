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
        this.updateFromServer();
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
                },
                error => {
                    console.error(error);
                    return error;
                });
        }
    }

    public tables: TableResultModel[];
}


interface TableResultModel {
    name: string;
    columns: TableColumn[];
    rows: TableRow[];
}

interface TableColumn {
    isChild: boolean;
    isParent: boolean;
    columnName: string;
    columnType: string;
    ordinalPosition: number;
}

interface TableRow {
    rowNumber: number;
    cells: TableCell[];
}

interface TableCell {
    ordinalPosition: number;
    content: string;
}