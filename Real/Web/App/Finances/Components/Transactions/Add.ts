import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../../Services/FinancesService.js";
import { LocationService } from "../../../Shared/Services/LocationService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel } from "../../ViewModels/FinancesViewModels.js";
import { Router } from '@angular/router';
import { KeyValuePair } from "../../../Shared/KeyValuePair.js";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService.js";

@Component({
    templateUrl: "/App/Finances/Templates/Transactions/Add.html"
})
export class AddComponent implements OnInit {
    constructor(
        private _financesService: FinancesService,
        private _locationService: LocationService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    ngOnInit(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.persons.subscribe(x => {
            this.persons = x;
            this.person = x.length > 0 ? x[0].id : null;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.users.subscribe(x => {
            this.users = x;
            this.user = x.length > 0 ? x[0].id : null;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._locationService.location.subscribe(x => {
            this.coordinates = x ? x.coords : null;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this.timeStampDate = new Date();
        this.timeStampDate.setHours(0, 0, 0, 0);
        this.timeStampTime = new Date('12:34 AM');
        this.value = 0;
    }

    persons: PersonViewModel[];
    currencyAccounts: CurrencyAccountViewModel[];
    users: UserViewModel[];

    coordinates: Coordinates;

    name: string;
    value: number;
    person: number;
    currencyAccount: number;
    _user: number;
    timeStampDate: Date;
    timeStampTime: Date;
    includeTimeStampTime: boolean = false;

    get user() {
        return this._user;
    }

    set user(value: number) {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._user = value;
        this._financesService.getCurrencyAccounts(value).subscribe(x => {
            this.currencyAccounts = x;
            this.currencyAccount = x.length > 0 ? x[0].id : null;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    }

    public submit(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        let tvm = new TransactionViewModel();
        tvm.currencyAccountId = this.currencyAccount;
        tvm.personId = this.person;
        tvm.userId = this.user;
        tvm.timeStampDate = this.timeStampDate;
        tvm.timeStampTime = this.timeStampTime;
        tvm.includeTimeStampTime = this.includeTimeStampTime;
        tvm.note = this.name;
        tvm.value = this.value;
        if (this.coordinates) {
            tvm.rawData = [
                new KeyValuePair<string, string>("Coordinates", JSON.stringify(this.coordinates))
            ];
        }
        this._financesService.addTransactions([tvm]).subscribe(() => {
            this._router.navigateByUrl("/Finances");
            this._globalLoadingIndicatorService.removeLoadingProcess();
        }, error => {
            alert(error);
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });

    }

    public cancel(): void {
        this._router.navigateByUrl("/Finances");
    }

    public addPerson(): void {
        this._router.navigate([{ outlets: { next: "AddPerson" } }]);
    }
}