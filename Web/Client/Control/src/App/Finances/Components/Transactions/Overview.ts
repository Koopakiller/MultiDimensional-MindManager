import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../../Services/FinancesService";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel, TransactionOverviewViewModel } from "../../Models/FinancesModels";
import { Router } from "@angular/router";
import { KeyValuePair } from "../../../Shared/KeyValuePair";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";

@Component({
    templateUrl: "Overview.html"
})
export class OverviewComponent implements OnInit {

    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    public static RoutingInformation(path: string = "Overview") {
        return {
            path: path,
            outlet: "next",
            component: OverviewComponent
        };
    };

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
            console.log(x[0].timeStampTime);
            console.log(x[1].timeStampTime);
            console.log(x[2].timeStampTime);
            this._globalLoadingIndicatorService.removeLoadingProcess();
        })
    }

    public hideTable() {
        this.transactionsInTable = null;
    }
}