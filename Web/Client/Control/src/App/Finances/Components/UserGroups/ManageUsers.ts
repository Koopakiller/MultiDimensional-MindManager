import { Component, OnInit, OnDestroy } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../../Services/FinancesService";
import { Router, ActivatedRoute } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";
import { UserViewModel } from "../../Models/FinancesModels";
import { Subscription } from "rxjs";

@Component({
    templateUrl: "ManageUsers.html",
    styleUrls: [
        "../../../Shared/Styles/data-table.less"
    ]
})
export class ManageUsersComponent implements OnInit, OnDestroy {

    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService,
        private _activedRoute: ActivatedRoute,
    ) { }

    private _parameterSubscription: Subscription;

    public static RoutingInformation(path: string = "ManageUsers") {
        return {
            path: path + "/:userGroupId",
            component: ManageUsersComponent,
            children: [
            ]
        };
    }

    public ngOnInit(): void {
        this._parameterSubscription = this._activedRoute.params.subscribe(params => {
            let ugId = +params["userGroupId"];
            this._financesService.getUsersFromUserGroup(ugId).subscribe(
                list => {
                    this.users = list;
                },
                error => {
                    alert(error);
                }
            );
        });
    }

    public ngOnDestroy() {
        this._parameterSubscription.unsubscribe();
    }

    public users: UserViewModel[];
}