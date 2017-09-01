import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel } from "../ViewModels/FinancesViewModels.js";
import { Router } from '@angular/router';
import { KeyValuePair } from "../Common/KeyValuePair.js";
import { PageComponentBase } from "../Common/PageComponentBase.js";

@Component({
    selector: "finances-new-transaction",
    templateUrl: "/Templates/FinancesNewTransaction"
})
export class FinancesNewTransactionComponent extends PageComponentBase implements OnInit {
    constructor(
        private financesService: FinancesService,
        private locationService: LocationService,
        private router: Router
    ) {
        super();
     }

    ngOnInit(): void {
        this.addLoadingProcess();
        this.financesService.persons.subscribe(x => { 
            this.persons = x; 
            this.person = x.length > 0 ? x[0].id : null; 
            this.removeLoadingProcess();
        });
        this.addLoadingProcess();
        this.financesService.users.subscribe(x => { 
            this.users = x; 
            this.user = x.length > 0 ? x[0].id : null;
            this.removeLoadingProcess();
        });
        this.addLoadingProcess();
        this.locationService.location.subscribe(x => {
            this.coordinates = x ? x.coords : null;
            this.removeLoadingProcess();
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
        this.addLoadingProcess();
        this._user = value;
        this.financesService.getCurrencyAccounts(value).subscribe(x => {
             this.currencyAccounts = x; 
             this.currencyAccount = x.length > 0 ? x[0].id : null; 
             this.removeLoadingProcess();
        });
    }

    public submit(): void {
        this.addLoadingProcess();
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
        this.financesService.addTransaction([tvm]).subscribe(() => {
            this.router.navigateByUrl("/Finances");
            this.removeLoadingProcess();
        }, error => {
            alert(error);
            this.removeLoadingProcess();
        });

    }

    public cancel(): void {
        this.router.navigateByUrl("/Finances");
    }

    showAddPersonForm: boolean = false;
    addNewPersonName: string;

    public submitNewPerson(): void {
        this.addLoadingProcess();
        this.financesService.addPerson(this.addNewPersonName, this.user);
        this.addNewPersonName = "";
        this.showAddPersonForm = false;
        this.financesService.persons.subscribe(x => { 
            this.persons = x; 
            this.person = x.length > 0 ? x[0].id : null;
            this.removeLoadingProcess();
        });
    }
}