import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyViewModel, UserViewModel } from "../ViewModels/FinancesViewModels.js";
import { FinanceEntry } from "../ServerModels/FinancesServerModels.js";

@Component({
    selector: "finances-new-entry",
    templateUrl: "/Templates/FinancesNewEntry"
})
export class FinancesNewEntryComponent implements OnInit {
    constructor(
        private financesService: FinancesService,
        private locationService: LocationService      
    ) { }

    ngOnInit(): void {
        this.financesService.persons.subscribe(x => this.persons = x);
        this.financesService.currencies.subscribe(x => this.currencies = x);
        this.financesService.users.subscribe(x => this.users = x);
        this.locationService.location.subscribe(x => this.location = x);
    }

    persons: PersonViewModel[];
    currencies: CurrencyViewModel[];
    users: UserViewModel[];

    location: Position;

    value: number = 0;
    person: number = 0;
    currency: number = 0;
    user: number = 0;
    name: string;

    public submit(): void{
        let data = new FinanceEntry();
        data.currencyId = 0;
        data.existingPersonId = 0;
        data.name = "";
        data.person = "";
        data.timeStamp = new Date();
        data.userId = 0;
        data.value = 0;


    }
}     