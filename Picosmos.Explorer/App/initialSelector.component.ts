import { Component, EventEmitter, Output } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import "/App/DatabaseObjects.js";


@Component({
    selector: "initial-selector",
    templateUrl: "/Templates/InitialSelector"
})
export class InitialSelectorComponent {
    @Output() onLoadData = new EventEmitter<DatasetIdentifier>();

    private heroesUrl = "/Data/GetTablesAndColumns";  // URL to web API

    constructor(private http: Http) { }

    tables: InitialSelectorTable[];
    selectedTableAndColumn: InitialSelectorColumn;
    searchValue: string;

    ngOnInit() {
        this.getTablesAndColumns().subscribe(
            data => {
                this.selectedTableAndColumn = data[0].columns[0];
                this.tables = data;
            },
            error => {
                console.error(error);
                return error;
            });
    }

    public loadData() {
        var obj = {
            tableName: this.selectedTableAndColumn.tableName,
            columnName: this.selectedTableAndColumn.columnName,
            columnValue: this.searchValue
        };
        this.onLoadData.emit(obj);
    }

    getTablesAndColumns(): Observable<InitialSelectorTable[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        return Observable.throw("An error occured.");
    }
}
