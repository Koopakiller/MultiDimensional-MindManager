import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";

import { DataContainer } from "../../Shared/DataContainer";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { CookieService } from "../../Shared/Services/CookieService";


@Injectable()
export class FinancesAuthenticationService {

    constructor(
        private http: Http,
        private _cookieService: CookieService
    ) { }

    private _cachedToken: string;
    private static FinancesAuthCookieName = "FinancesAuthCookie";

    public requestToken(userName: string, password: string): Observable<undefined> {
        let url = `http://picosmos.azurewebsites.net/api/Finances/GetToken`;
        let obj = {
            userName: userName,
            password: password,
        }
        let data = new DataContainer<any>(obj);
        var postData = JSON.stringify(data);
        console.log(postData);
        let headers = new Headers({ "Content-Type": "application/json" });
        let options = new RequestOptions({ headers: headers });
        return Observable.create((observer: Observer<undefined>) => {
            this.http.post(url, postData, options).subscribe(
                response => {
                    this._cachedToken = response.json().data;
                    this._cookieService.setCookie(FinancesAuthenticationService.FinancesAuthCookieName, this._cachedToken, 2 * 60);
                    observer.next(undefined);
                    observer.complete();
                },
                error => {
                    observer.error(error);
                    observer.complete();
                }
            );
        });
    }

    public getCachedToken(): string {
        if (!this._cachedToken) {
            this._cachedToken = this._cookieService.getCookie(FinancesAuthenticationService.FinancesAuthCookieName);
        }

        return this._cachedToken;
    }
}