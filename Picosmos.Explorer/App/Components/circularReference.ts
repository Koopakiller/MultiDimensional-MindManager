import { Component, Input } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import DataTable = require("./dataTable.js");

@Component({
    selector: "circular-reference",
    templateUrl: "/Templates/CircularReference"
})
export class CircularReferenceComponent {

    constructor(private http: Http) { }

    private _data: CircularReferenceDataModel;

    @Input()
    public set data(value: CircularReferenceDataModel) {
        this._data = value;
        if (value) {
            this.update();
        }
    }
    public get data(): CircularReferenceDataModel {
        return this._data;
    }

    public get expandedDataTableKind(): DataTable.DataTableKinds {
        return DataTable.DataTableKinds.self;
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        return Observable.throw("An error occured.");
    }

    private update() {
        if (this.data) {
            const url = `/Data/GetCircularReferencedData?chainId=${this.data.chainId}&columnValue=${this.data.columnValue}`;
            this.http.get(url)
                .map(this.extractData)
                .catch(this.handleError)
                .subscribe(data => {
                    this.tableModel = data;
                    this.entries = [];
                    for (let row of this.tableModel.rows) {
                        let entry = new CircularReferenceEntryClientModel();
                        entry.header = row.possibleHeader;
                        entry.expandCommands = false;
                        entry.nextModel = new CircularReferenceDataModel();
                        entry.nextModel.chainId = this.data.chainId;
                        entry.nextModel.chainDescription = this.data.chainDescription;
                        entry.nextModel.firstColumnName = this.data.firstColumnName;
                        for (let cell of row.cells) {
                            if (cell.columnName === this.data.firstColumnName) {
                                entry.nextModel.columnValue = cell.content;
                                break;
                            }
                        }
                        entry.nextDataTableModel = new DatasetIdentifier();
                        entry.nextDataTableModel.tableName = this.tableModel.name;
                        entry.nextDataTableModel.columnName = this.data.firstColumnName;
                        entry.nextDataTableModel.columnValue = entry.nextModel.columnValue;
                        this.entries.push(entry);
                    }
                },
                error => {
                    console.error(error);
                    return error;
                });
        }
    }

    public tableModel: TableResultModel;
    public entries: CircularReferenceEntryClientModel[];
}