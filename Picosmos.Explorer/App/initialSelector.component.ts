import { Component } from "@angular/core";
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

interface InitialSelectorTable {
    tableName: string;
    columns: InitialSelectorColumn[];
}

interface InitialSelectorColumn {
    tableName: string;
    columnName: string;
}


@Component({
    selector: "initial-selector",
    templateUrl: "/Templates/InitialSelector"
})
export class InitialSelectorComponent {
    private heroesUrl = '/Data/GetTablesAndColumns';  // URL to web API

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
