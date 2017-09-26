import { Component, OnInit, OnDestroy } from "@angular/core";
import { FinancesService } from "../../Services/FinancesService";
import { LocationService } from "../../../Shared/Services/LocationService";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel } from "../../Models/FinancesModels";
import { Router, ActivatedRoute } from "@angular/router";
import { KeyValuePair } from "../../../Shared/KeyValuePair";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";
import { AddComponent as PersonAddComponent } from "../Persons/Add";
import { Subscription } from "rxjs";


@Component({
    templateUrl: "List.html",
    styleUrls:[
        "../../../Shared/Styles/data-table.less"
    ]
})
export class ListComponent implements OnInit, OnDestroy {

    constructor(
        private _financesService: FinancesService,
        private _locationService: LocationService,
        private _router: Router,
        private _activedRoute: ActivatedRoute,
    ) { }

    public static RoutingInformation(path: string = "List") {
        return [
            {
                path: path + "/:caId",
                outlet: "next",
                component: ListComponent,
                children: [
                ]
            },
            {
                path: path + "/:caId/:page",
                outlet: "next",
                component: ListComponent,
                children: [
                ]
            }
        ];
    }

    private _parameterSubscription: Subscription;
    public displayList: TransactionViewModel[];

    public currentPage: number;
    public currencyAccountId: number;

    public pageLinks: number[];
    public previousPage: number;
    public nextPage: number;

    public ngOnInit(): void {
        this._parameterSubscription = this._activedRoute.params.subscribe(params => {
            this.currencyAccountId = params["caId"];
            this.currentPage = +params["page"];
            if (!this.currentPage) {
                setTimeout(() => this.navigateToPage(1));
            } else {
                let count = 10; // number of entries per page

                this._financesService.getTransactions(this.currencyAccountId, (this.currentPage - 1) * count, count).subscribe(
                    result => {
                        this.displayList = result;

                        let maxLinkCountPerSide = 3;
                        this.pageLinks = new Array(2 * maxLinkCountPerSide + 1)
                            .fill(0)
                            .map((x, i) => i + this.currentPage - maxLinkCountPerSide)
                            .filter(i => i > 0/*&&i<<maxPageCount*/);
                        this.previousPage = this.currentPage > 0 ? this.currentPage - 1 : null;
                        this.nextPage = this.currentPage + 1;//TODO
                    },
                    error => {
                        alert(error);
                    }
                );
            }
        });
    }

    public ngOnDestroy(): void {
        this._parameterSubscription.unsubscribe();
    }

    public navigateToPage(page: number) {
        this._router.navigate([{ outlets: { next: ["List", this.currencyAccountId, page] } }], { relativeTo: this._activedRoute.parent });
    }
}
