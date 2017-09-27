import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../../Services/FinancesService";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";
import { UserViewModel, UserGroupViewModel } from "../../Models/FinancesModels";

@Component({
    selector: "finances-usergroups",
    templateUrl: "Index.html"
})
export class IndexComponent implements OnInit {

    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    public static RoutingInformation(path: string = "UserGroups") {
        return {
            path: path,
            component: IndexComponent,
            children: [
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

    public selectedUserGroup: UserGroupViewModel;

    public toggleManageUsers(index?: number): void {
        if (this.selectedUserGroup || !index) {
            this.selectedUserGroup = null;
        }
        else {
            this.selectedUserGroup = this.userGroups[index];
            this._globalLoadingIndicatorService.addLoadingProcess();
            this._financesService.getUsersFromUserGroup(this.selectedUserGroup.id).subscribe(
                x => {
                    this.usersInSelectedGroup = x;
                    this._globalLoadingIndicatorService.removeLoadingProcess();
                },
                error => {
                    alert(error);
                    this.toggleManageUsers();
                    this._globalLoadingIndicatorService.removeLoadingProcess();
                }
            );
        }
    }

    public usersInSelectedGroup: UserViewModel[];
}