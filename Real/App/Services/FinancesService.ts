import { Injectable } from '@angular/core';
import { StaticFinanceData, PersonServerModel, UserServerModel, CurrencyServerModel } from "../ServerModels/FinancesServerModels.js";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PersonViewModel, UserViewModel, CurrencyViewModel } from "../ViewModels/FinancesViewModels.js";

@Injectable()
export class FinancesService {

    constructor(
        private http: Http
    ) { }

    private map<T>(response: Response, mapFx: any) {
        let lst: IViewModelConvert<T>[] = response.json().data;
        return lst.map(mapFx);
    }

    // Object.assign is neccessary because assigning does not "transfer" methods too.
    // see: https://stackoverflow.com/a/40063179/1623754

    public get persons(): Observable<PersonViewModel[]> {
        return this.http.get(`/api/Finances/GetPersons`)
            .map(response => this.map(response, (sm: PersonServerModel) => { var obj = new PersonServerModel(); Object.assign(obj, sm); return obj.toViewModel(); }));
    }

    public get users(): Observable<UserViewModel[]> {
        return this.http.get(`/api/Finances/GetUsers`)
            .map(response => this.map(response, (sm: UserServerModel) => { var obj = new UserServerModel(); Object.assign(obj, sm); return obj.toViewModel(); }));
    }

    public get currencies(): Observable<CurrencyViewModel[]> {
        return this.http.get(`/api/Finances/GetCurrencies`)
            .map(response => this.map(response, (sm: CurrencyServerModel) => { var obj = new CurrencyServerModel(); Object.assign(obj, sm); return obj.toViewModel(); }));
    }
}