import { Component } from "@angular/core";
import * as _ from "lodash";

@Component({
    selector: "finances",
    templateUrl: "/Templates/Finances"
})
export class FinancesComponent {
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
}     
 
export class FinanceEntry{
    constructor(
        public value: number,
        public currency: string,
        public person: string,
        public location: Position
    ) { }
}