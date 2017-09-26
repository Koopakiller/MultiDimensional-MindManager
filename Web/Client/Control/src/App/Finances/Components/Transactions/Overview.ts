import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../../Services/FinancesService";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel, TransactionOverviewViewModel } from "../../Models/FinancesModels";
import { Router, ActivatedRoute } from "@angular/router";
import { KeyValuePair } from "../../../Shared/KeyValuePair";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";
import { ListComponent } from "./List";

@Component({
    templateUrl: "Overview.html"
})
export class OverviewComponent implements OnInit {

    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService,
        private _activatedRoute: ActivatedRoute
    ) { }

    public static RoutingInformation(path: string = "Overview") {
        return {
            path: path,
            outlet: "next",
            component: OverviewComponent,
            children: ListComponent.RoutingInformation()
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
        this._router.navigate([{ outlets: { next: null } }], { relativeTo: this._activatedRoute })
    }

    public showTable(currencyAccountId: number) {
        this._router.navigate([{ outlets: { next: ["List", currencyAccountId] } }], { relativeTo: this._activatedRoute })
    }
}