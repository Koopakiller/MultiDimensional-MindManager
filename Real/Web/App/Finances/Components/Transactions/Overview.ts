import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../../Services/FinancesService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel, TransactionOverviewViewModel } from "../../ViewModels/FinancesViewModels.js";
import { Router } from "@angular/router";
import { KeyValuePair } from "../../../Shared/KeyValuePair.js";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService.js";

@Component({
    templateUrl: "/App/Finances/Templates/Transactions/Overview.html"
})
export class OverviewComponent implements OnInit {
    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    ngOnInit(): void {
        this._financesService.users.subscribe(x => { this.users = x; this.user = x.length > 0 ? x[0].id : null; });
    }

    currencyAccounts: CurrencyAccountViewModel[];
    users: UserViewModel[];
    transactionOverview: TransactionOverviewViewModel[];

    currencyAccount: number;
    _user: number;

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
        this._financesService.getTransactionOverviewForUserAtTimeStamp(value, new Date()).subscribe(x => { this.transactionOverview = x; });
    }

    transactionsInTable: TransactionViewModel[];

    public showTable(currencyAccountId: number) {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.getTransactions(currencyAccountId, 0, 25).subscribe(x => {
            this.transactionsInTable = x;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        })
    }

    public hideTable() {
        this.transactionsInTable = null;
    }
}