import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyViewModel, UserViewModel } from "../ViewModels/FinancesViewModels.js";
import { FinanceEntryServerModel } from "../ServerModels/FinancesServerModels.js";

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
        this.financesService.persons.subscribe(x => { this.persons = x; this.person = x.length > 0 ? x[0].id : null; });
        this.financesService.currencies.subscribe(x => { this.currencies = x; this.currency = x.length > 0 ? x[0].id : null; });
        this.financesService.users.subscribe(x => { this.users = x; this.user = x.length > 0 ? x[0].id : null; });
        this.locationService.location.subscribe(x => this.coordinates = x ? x.coords : null);
        this.timeStamp = new Date();
        this.value = 0;
    }

    persons: PersonViewModel[];
    currencies: CurrencyViewModel[];
    users: UserViewModel[];

    coordinates: Coordinates;

    name: string;
    value: number;
    person: number;
    currency: number;
    user: number;
    timeStamp: Date;

    public setTimeToNow(){
        this.timeStamp = new Date();
    }

    public submit(): void {
        this.financesService.addEntry(this.currency, this.person, this.user, this.timeStamp, this.name, this.value, this.coordinates);
    }
}     