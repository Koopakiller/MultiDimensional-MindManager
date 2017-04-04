import { Component, Input } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

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
                },
                error => {
                    console.error(error);
                    return error;
                });
        }
    }

    public tableModel: TableResultModel;
}