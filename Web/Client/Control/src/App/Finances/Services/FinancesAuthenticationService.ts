import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

import { DataContainer } from "../../Shared/DataContainer";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";


@Injectable()
export class FinancesAuthenticationService {

    constructor(
        private http: Http
    ) { }

    public getToken(userName: string, password: string): Observable<string>{
        let url = `/api/Finances/GetToken`;
        let obj = {
            userName: userName,
            password: password,
        }
        let data = new DataContainer<any>(obj);
        var postData = JSON.stringify(data);
        console.log(postData);
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return Observable.create((observer: Observer<string>) => {
            this.http.post(url, postData, options).subscribe(
                response => {
                    let token = response.json().data;
                    observer.next(token);
                },
                error => {
                    observer.error(error);
                    observer.complete();
                }
            );
        });
    }
}