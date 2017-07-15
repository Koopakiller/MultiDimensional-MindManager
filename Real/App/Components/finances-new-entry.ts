import { Component } from "@angular/core";
import * as _ from "lodash";

@Component({
    selector: "finances-new-entry",
    templateUrl: "/Templates/FinancesNewEntry"
})
export class FinancesNewEntryComponent {
    public ngOnInit() {
        navigator.geolocation.getCurrentPosition(location => this.location = location);
    }

    location: Position;
    value: number = 0;
    currency: string = "Euro";
    person: string;

    currencies = [
        { id: "Euro", header: "Euro (€)" }, 
        { id: "USDollar", header: "US Dollar ($)" }
    ]

    public submitNew() {
        alert(this.currency + "\n" + this.value)
    }

    public submit(){
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