import { Injectable } from '@angular/core';
import { PersonServerModel, UserServerModel, CurrencyAccountServerModel, TransactionServerModel } from "../ServerModels/FinancesServerModels.js";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PersonViewModel, UserViewModel, CurrencyAccountViewModel, TransactionViewModel } from "../ViewModels/FinancesViewModels.js";
import { Observer } from "rxjs/Observer";
import { DataContainer } from "../Common/DataContainer.js";

@Injectable()
export class FinancesService {

    constructor(
        private http: Http
    ) { }

    private getListFromResponse<TServerModel extends IViewModelConvert<TViewModel>, TViewModel>(response: Response, serverModelFactory : (() => TServerModel)): TViewModel[]{
        let object: DataContainer<IViewModelConvert<TServerModel>[]> = response.json();
        let lst = object.data;
        return lst.map(smo => {
            // Object.assign is neccessary because assigning does not "transfer" methods too.
            // see: https://stackoverflow.com/a/40063179/1623754
            var sm = serverModelFactory(); 
            Object.assign(sm, smo); 
            return sm.toViewModel(); 
        });
    }

    private getList<TServerModel extends IViewModelConvert<TViewModel>, TViewModel>(url: string, serverModelFactory : (()=>TServerModel)): Observable<TViewModel[]>{
        return this.http.get(url).map(response => this.getListFromResponse(response, serverModelFactory));
    }


    public get persons(): Observable<PersonViewModel[]> {
        return this.getList<PersonServerModel, PersonViewModel>(`/api/Finances/GetPersons`, () => new PersonServerModel());
    }

    public get users(): Observable<UserViewModel[]> {
        return this.getList<UserServerModel, UserViewModel>(`/api/Finances/GetUsers`, () => new UserServerModel());
    }

    public getCurrencyAccounts(userId: number): Observable<CurrencyAccountViewModel[]> {
        return this.getList<CurrencyAccountServerModel, CurrencyAccountViewModel>(`/api/Finances/GetCurrencyAccountsForUser?userId=${userId}`, () => new CurrencyAccountServerModel());
    }

    public addTransaction(tvms: TransactionViewModel[]): Observable<TransactionViewModel[]> {
        let data = {  }
        var postData = JSON.stringify(data);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return Observable.create((observer: Observer<TransactionViewModel[]>) => {
            this.http.post("/api/Finances/AddTransaction", postData, options).subscribe(response => {
                let lst = this.getListFromResponse<TransactionServerModel, TransactionViewModel>(response, () => new TransactionServerModel());
                observer.next(lst);
                observer.complete(); 
            },
            error => {
                observer.error("Error from Server...");
                observer.complete();
            });
        });
    }

    public addPerson(name: string) {
        let data = {
            name: name
        };
        this.http.post("/api/Finances/AddPerson", JSON.stringify(data)).subscribe(()=>{
            alert("sendet");
        });
    }
}