import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel } from "../ViewModels/FinancesViewModels.js";
import {Router} from '@angular/router';
import { KeyValuePair } from "../Common/KeyValuePair.js";

@Component({
    selector: "finances-new-transaction",
    templateUrl: "/Templates/FinancesNewTransaction"
})
export class FinancesNewTransactionComponent implements OnInit {
    constructor(
        private financesService: FinancesService,
        private locationService: LocationService,
        private router: Router 
    ) { }

    ngOnInit(): void {
        this.financesService.persons.subscribe(x => { this.persons = x; this.person = x.length > 0 ? x[0].id : null; });
        this.financesService.users.subscribe(x => { this.users = x; this.user = x.length > 0 ? x[0].id : null; });
        this.locationService.location.subscribe(x => this.coordinates = x ? x.coords : null);
        this.timeStamp = new Date();
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
    timeStamp: Date;

    get user(){ 
        return this._user;
    }

    set user(value: number){
        this._user = value;
        this.financesService.getCurrencyAccounts(value).subscribe(x => { this.currencyAccounts = x; this.currencyAccount = x.length > 0 ? x[0].id : null; });
    }

    public setTimeToNow(){
        this.timeStamp = new Date();
    }

    public submit(): void {
        let tvm = new TransactionViewModel();
        tvm.currencyAccountId = this.currencyAccount;
        tvm.personId = this.person;
        tvm.userId = this.user;
        tvm.timeStamp = this.timeStamp;
        tvm.note = this.name;
        tvm.value = this.value;
        if(this.coordinates){
            tvm.rawData = [ 
                new KeyValuePair<string, string>("Coordinates", JSON.stringify(this.coordinates)) 
            ];
        }
        this.financesService.addTransaction([tvm]).subscribe(()=>{
            this.router.navigateByUrl("/Finances");
        },
        error => {
            alert(error);
        });
        
    }

    public cancel(): void{
        this.router.navigateByUrl("/Finances");
    }

    showAddPersonForm: boolean = false;
    addNewPersonName: string;

    public submitNewPerson(): void{
        this.financesService.addPerson(this.addNewPersonName);
        this.addNewPersonName = "";
        this.showAddPersonForm = false;
        this.financesService.persons.subscribe(x => { this.persons = x; this.person = x.length > 0 ? x[0].id : null; });       
    }
}