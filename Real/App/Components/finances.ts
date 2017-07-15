import { Component } from "@angular/core";
import * as _ from "lodash";

@Component({
    selector: "finances",
    templateUrl: "/Templates/Finances"
})
export class FinancesComponent {
    _forms: string[] = [];

    get forms(){
        return this._forms;
    }

    public addSubmitNewForm() {
        this._forms.push("new-entry")
    }
}     