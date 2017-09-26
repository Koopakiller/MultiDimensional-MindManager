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
    templateUrl: "List.html"
})
export class ListComponent implements OnInit, OnDestroy {

    constructor(
        private _financesService: FinancesService,
        private _locationService: LocationService,
        private _router: Router,
        private _activedRoute: ActivatedRoute
    ) { }

    public static RoutingInformation(path: string = "List") {
        return [
            {
                path: path + "/:caId",
                outlet: "next",
                component: ListComponent,
                children: [
                ]
            }// },
            // {
            //     path: path + "/:caId/:page",
            //     outlet: "next",
            //     component: ListComponent,
            //     children: [
            //     ]
            // },
            // {
            //     path: path + "/:caId/:page/:count",
            //     outlet: "next",
            //     component: ListComponent,
            //     children: [
            //     ]
            // }
        ];
    }

    private _parameterSubscription: Subscription;
    public displayList: TransactionViewModel[];

    public ngOnInit(): void {
        this._parameterSubscription = this._activedRoute.params.subscribe(params => {
            let caId = params["caId"];
            let page = +params["page"];
            if (!page) {
                page = 1;
            }
            let count = +params["count"];
            if (!count) {
                count = 10;
            }

            console.log(`caId=${caId}, page=${page}, count=${count}`);

            this._financesService.getTransactions(caId, (page - 1) * count, count).subscribe(
                result => {
                    this.displayList = result;
                },
                error => {
                    alert(error);
                }
            );
        });
    }

    public ngOnDestroy(): void {
        this._parameterSubscription.unsubscribe();
    }
}