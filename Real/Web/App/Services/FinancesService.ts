import { Injectable } from '@angular/core';
import { PersonServerModel, UserServerModel, CurrencyAccountServerModel, FinanceEntryServerModel } from "../ServerModels/FinancesServerModels.js";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PersonViewModel, UserViewModel, CurrencyAccountViewModel } from "../ViewModels/FinancesViewModels.js";

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

    public getCurrencyAccounts(userId: number): Observable<CurrencyAccountViewModel[]> {
        return this.http.get(`/api/Finances/GetCurrencyAccountsForUser?userId=${userId}`)
            .map(response => this.map(response, (sm: CurrencyAccountServerModel) => { var obj = new CurrencyAccountServerModel(); Object.assign(obj, sm); return obj.toViewModel(); }));
    }

    public addEntry(currencyId: number, personId: number, userId: number, timeStamp: Date, name: string, value: number, coordinates: Coordinates) {
        let data = new FinanceEntryServerModel();
        data.currencyId = currencyId;
        data.personId = personId;
        data.userId = userId;
        data.timeStamp = timeStamp;
        data.name = name;
        data.value = value;
        data.coordinates = coordinates;
        this.http.post("/api/Finances/AddEntry", data);
    }
    public addPerson(name: string) {
        let data = {
            name: name
        };
        this.http.post("/api/Finances/AddPerson", data);
    }
}