import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel, TransactionOverviewViewModel } from "../ViewModels/FinancesViewModels.js";
import {Router} from '@angular/router';
import { KeyValuePair } from "../Common/KeyValuePair.js";

@Component({
    selector: "finances-overview",
    templateUrl: "/Templates/FinancesOverview"
})
export class FinancesOverviewComponent implements OnInit {
    constructor(
        private financesService: FinancesService,
        private router: Router 
    ) { }

    ngOnInit(): void {
        this.financesService.users.subscribe(x => { this.users = x; this.user = x.length > 0 ? x[0].id : null; });
    }

    currencyAccounts: CurrencyAccountViewModel[];
    users: UserViewModel[];
    transactionOverview: TransactionOverviewViewModel[];

    currencyAccount: number; 
    _user: number;

    get user(){ 
        return this._user;
    }

    set user(value: number){
        this._user = value;
        this.financesService.getCurrencyAccounts(value).subscribe(x => { this.currencyAccounts = x; this.currencyAccount = x.length > 0 ? x[0].id : null; });
        this.financesService.getTransactionOverviewForUserAtTimeStamp(value, new Date()).subscribe(x => { this.transactionOverview = x; });
    }
}