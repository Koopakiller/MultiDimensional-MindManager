import { Injectable } from '@angular/core';
import { PersonServerModel, UserServerModel, CurrencyAccountServerModel, TransactionServerModel, TransactionOverviewServerModel, UserGroupServerModel } from "../ServerModels/FinancesServerModels.js";
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PersonViewModel, UserViewModel, CurrencyAccountViewModel, TransactionViewModel, TransactionOverviewViewModel, UserGroupViewModel } from "../ViewModels/FinancesViewModels.js";
import { Observer } from "rxjs/Observer";
import { DataContainer } from "../../Common/DataContainer.js";

@Injectable()
export class FinancesService {

    constructor(
        private http: Http
    ) { }

    private getListFromResponse<TServerModel extends IViewModelConvert<TViewModel>, TViewModel>(response: Response, serverModelFactory: (() => TServerModel)): TViewModel[] {
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

    private getList<TServerModel extends IViewModelConvert<TViewModel>, TViewModel>(url: string, serverModelFactory: (() => TServerModel)): Observable<TViewModel[]> {
        return this.http.get(url).map(response => this.getListFromResponse(response, serverModelFactory));
    }

    public get persons(): Observable<PersonViewModel[]> {
        return this.getList<PersonServerModel, PersonViewModel>(`/api/Finances/GetPersons`, () => new PersonServerModel());
    }

    public get users(): Observable<UserViewModel[]> {
        return this.getList<UserServerModel, UserViewModel>(`/api/Finances/GetUsers`, () => new UserServerModel());
    }

    public getUsersFromUserGroup(userGroupId: number): Observable<UserViewModel[]>{
        return this.getList<UserServerModel, UserViewModel>(`/api/Finances/GetUsersFromUserGroup?userGroupId=${userGroupId}`, () => new UserServerModel());
    }

    public getUserGroups(userId?: number): Observable<UserGroupViewModel[]>{
        var url = `/api/Finances/GetUserGroups`;
        if(userId){
            url = url + `?userId=${userId}`;
        }
        return this.getList<UserGroupServerModel, UserGroupViewModel>(url, () => new UserGroupServerModel());
    }

    public getCurrencyAccounts(userId: number): Observable<CurrencyAccountViewModel[]> {
        return this.getList<CurrencyAccountServerModel, CurrencyAccountViewModel>(`/api/Finances/GetCurrencyAccountsForUser?userId=${userId}`, () => new CurrencyAccountServerModel());
    }

    public getTransactions(currencyAccountId: number, skipCount: number, takeCount: number): Observable<TransactionViewModel[]> {
        let url = `/api/Finances/GetTransactions?currencyAccountId=${currencyAccountId}&skipCount=${skipCount}&takeCount=${takeCount}`;
        return this.getList<TransactionServerModel, TransactionViewModel>(url, () => new TransactionServerModel());
    }

    public getTransactionOverviewForUserAtTimeStamp(userId: number, timeStamp: Date): Observable<TransactionOverviewViewModel[]> {
        let url = `/api/Finances/GetTransactionOverviewForUserAtTimeStamp?userId=${userId}&timeStamp=${timeStamp.toUTCString()}`;
        return Observable.create((observer: Observer<TransactionOverviewViewModel[]>) => {
            var readyCounter = 0;
            var items: TransactionOverviewViewModel[];
            var cas: CurrencyAccountViewModel[];
            function tryAddToObserver() {
                if (readyCounter != 2) {
                    return; // not ready yet
                }
                //assign currency names
                for (let itemIndex in items) {
                    for (let ca of cas) {
                        if (ca.id === items[itemIndex].currencyAccountId) {
                            items[itemIndex].currencyAccountName = ca.header;
                        }
                    }
                }
                observer.next(items);
                observer.complete();
            }
            this.getList<TransactionOverviewServerModel, TransactionOverviewViewModel>(url, () => new TransactionOverviewServerModel()).subscribe((x) => {
                readyCounter += 1;
                tryAddToObserver();
                items = x;
            });
            this.getCurrencyAccounts(userId).subscribe((x) => {
                readyCounter += 1;
                cas = x;
                tryAddToObserver();
            });
        });
    }

    public addTransactions(tvms: TransactionViewModel[]): Observable<TransactionViewModel[]> {
        let data = new DataContainer<TransactionServerModel[]>(tvms.map(x => x.toServerModel()));
        var postData = JSON.stringify(data);
        console.log(postData);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return Observable.create((observer: Observer<TransactionViewModel[]>) => {
            this.http.post("/api/Finances/AddTransactions", postData, options).subscribe(
                response => {
                    let lst = this.getListFromResponse<TransactionServerModel, TransactionViewModel>(response, () => new TransactionServerModel());
                    observer.next(lst);
                    observer.complete();
                },
                error => {
                    observer.error(error);
                    observer.complete();
                }
            );
        });
    }

    public addPerson(name: string, userGroupId: number): Observable<PersonViewModel> {
        let data = {
            data: {
                name: name,
                userGroupId: userGroupId
            }
        };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return Observable.create((observer: Observer<PersonViewModel>) => {
            this.http.post("/api/Finances/AddPerson", JSON.stringify(data), options).subscribe(
                response => {
                    let smodc: DataContainer<IViewModelConvert<PersonServerModel>> = response.json();
                    let smo = smodc.data;
                    var sm = new PersonServerModel();
                    Object.assign(sm, smo);
                    observer.next(sm.toViewModel());
                    observer.complete();
                },
                error => {
                    observer.error(error);
                    observer.complete();
                }
            );
        })
    }
}