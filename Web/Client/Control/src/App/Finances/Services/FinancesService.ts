import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { PersonServerModel, UserServerModel, CurrencyAccountServerModel, TransactionServerModel, TransactionOverviewServerModel, UserGroupServerModel, PersonViewModel, UserViewModel, CurrencyAccountViewModel, TransactionViewModel, TransactionOverviewViewModel, UserGroupViewModel } from "../Models/FinancesModels";
import { DataContainer } from "../../Shared/DataContainer";
import { FinancesAuthenticationService } from "./FinancesAuthenticationService";
import { Environment } from "../../../Environments/Environment";
import { BehaviorSubject, ReplaySubject, Observable, Observer } from "rxjs/Rx";

@Injectable()
export class FinancesService {

    private _apiUrl: string = Environment.ApiUrl + "Finances/v1";

    constructor(
        private http: Http,
        private _financesAuthenticationService: FinancesAuthenticationService
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

    private postWithOptions(url: string, postData?: any): Observable<Response> {
        let token = this._financesAuthenticationService.getCachedToken();
        let headers = new Headers({
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
            "X-Authorization": "Bearer " + token
        });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(url, postData, options);
    }

    private getList<TServerModel extends IViewModelConvert<TViewModel>, TViewModel>(url: string, serverModelFactory: (() => TServerModel)): Observable<TViewModel[]> {
        return this.postWithOptions(url).map(response => this.getListFromResponse(response, serverModelFactory));
    }

    public getUsers(): Observable<UserViewModel[]> {
        return this.getList<UserServerModel, UserViewModel>(`${this._apiUrl}/GetUsers`, () => new UserServerModel());
    }

    public getUsersFromUserGroup(userGroupId: number): Observable<UserViewModel[]> {
        return this.getList<UserServerModel, UserViewModel>(`${this._apiUrl}/GetUsersFromUserGroup?userGroupId=${userGroupId}`, () => new UserServerModel());
    }

    public getUserGroups(userId?: number): Observable<UserGroupViewModel[]> {
        var url = `${this._apiUrl}/GetUserGroups`;
        if (userId) {
            url = url + `?userId=${userId}`;
        }
        return this.getList<UserGroupServerModel, UserGroupViewModel>(url, () => new UserGroupServerModel());
    }

    public getCurrencyAccounts(userId: number): Observable<CurrencyAccountViewModel[]> {
        return this.getList<CurrencyAccountServerModel, CurrencyAccountViewModel>(`${this._apiUrl}/GetCurrencyAccountsForUser?userId=${userId}`, () => new CurrencyAccountServerModel());
    }

    public getCurrencyAccountsFromUserGroup(userGroupId: number): Observable<CurrencyAccountViewModel[]> {
        return this.getList<CurrencyAccountServerModel, CurrencyAccountViewModel>(`${this._apiUrl}/GetCurrencyAccountsForUserGroup?userGroupId=${userGroupId}`, () => new CurrencyAccountServerModel());
    }

    public getTransactions(currencyAccountId: number, skipCount: number, takeCount: number): Observable<TransactionViewModel[]> {
        let url = `${this._apiUrl}/GetTransactions?currencyAccountId=${currencyAccountId}&skipCount=${skipCount}&takeCount=${takeCount}`;
        return this.getList<TransactionServerModel, TransactionViewModel>(url, () => new TransactionServerModel());
    }

    public getTransactionOverviewForUserAtTimeStamp(userId: number, timeStamp: Date): Observable<TransactionOverviewViewModel[]> {
        let url = `${this._apiUrl}/GetTransactionOverviewForUserAtTimeStamp?userId=${userId}&timeStamp=${timeStamp.toUTCString()}`;
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
        return Observable.create((observer: Observer<TransactionViewModel[]>) => {
            this.postWithOptions(`${this._apiUrl}/AddTransactions`, postData).subscribe(
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

    // Persons

    private _persons = {};

    public updatePersons(userGroupId: number) {
        this.getList<PersonServerModel, PersonViewModel>(`${this._apiUrl}/GetPersons`, () => new PersonServerModel())
            .subscribe(result => {
                this._persons[userGroupId].next(result);
            },
            error => {
                this._persons[userGroupId].error(error);
            });
    }

    public getPersons(userGroupId?: number): Observable<PersonViewModel[]> {
        let lst: ReplaySubject<PersonViewModel[]> = this._persons[userGroupId];
        if (!lst) {
            this._persons[userGroupId] = new ReplaySubject<PersonViewModel[]>(1);
            lst = this._persons[userGroupId];
            this.updatePersons(userGroupId);
        }
        return lst.asObservable();
    }

    public addPerson(name: string, userGroupId: number): Observable<PersonViewModel> {
        let data = {
            data: {
                name: name,
                userGroupId: userGroupId
            }
        };
        return Observable.create((observer: Observer<PersonViewModel>) => {
            this.postWithOptions(`${this._apiUrl}/AddPerson`, JSON.stringify(data)).subscribe(
                response => {
                    let smodc: DataContainer<IViewModelConvert<PersonServerModel>> = response.json();
                    let smo = smodc.data;
                    var sm = new PersonServerModel();
                    Object.assign(sm, smo);
                    observer.next(sm.toViewModel());
                    observer.complete();

                    this.updatePersons(userGroupId);
                },
                error => {
                    observer.error(error);
                    observer.complete();
                }
            );
        })
    }
}