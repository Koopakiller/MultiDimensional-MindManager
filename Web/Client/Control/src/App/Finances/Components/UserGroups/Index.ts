import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../../Services/FinancesService";
import { Router, ActivatedRoute } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";
import { UserViewModel, UserGroupViewModel } from "../../Models/FinancesModels";
import { ManageUsersComponent } from "./ManageUsers";

@Component({
    selector: "finances-usergroups",
    templateUrl: "Index.html",
    styleUrls:[
        "../../../Shared/Styles/data-table.less"
    ]
})
export class IndexComponent implements OnInit {

    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService,
        private _activatedRoute: ActivatedRoute
    ) { }

    public static RoutingInformation(path: string = "UserGroups") {
        return {
            path: path,
            component: IndexComponent,
            children: [
                ManageUsersComponent.RoutingInformation()
            ]
        };
    }

    ngOnInit(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.getUserGroups().subscribe(
            x => {
                this.userGroups = x;
                this._globalLoadingIndicatorService.removeLoadingProcess();
            },
            error => {
                alert(error);
                this._globalLoadingIndicatorService.removeLoadingProcess();
            }
        );
    }

    public userGroups: UserGroupViewModel[];

    public manageUsers(ugId: number){
        this._router.navigate(["ManageUsers", ugId], { relativeTo: this._activatedRoute });
    }
}