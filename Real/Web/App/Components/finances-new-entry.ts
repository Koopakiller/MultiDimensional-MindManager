import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel } from "../ViewModels/FinancesViewModels.js";
import { FinanceEntryServerModel } from "../ServerModels/FinancesServerModels.js";
import {Router} from '@angular/router';

@Component({
    selector: "finances-new-entry",
    templateUrl: "/Templates/FinancesNewEntry"
})
export class FinancesNewEntryComponent implements OnInit {
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
        this.financesService.addEntry(this.currencyAccount, this.person, this.user, this.timeStamp, this.name, this.value, this.coordinates);
        this.router.navigateByUrl("/Finances");
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