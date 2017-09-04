import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../Services/FinancesService.js";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../Services/GlobalLoadingIndicatorService.js";
import { UserViewModel, UserGroupViewModel } from "../ViewModels/FinancesViewModels.js";

@Component({
    selector: "finances-usergroups",
    templateUrl: "/Templates/FinancesUserGroups"
})
export class FinancesUserGroupsComponent implements OnInit {
    
    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    ngOnInit(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.getUserGroups().subscribe(
            x => {
                this.userGroups = x;
                this._globalLoadingIndicatorService.removeLoadingProcess();
            },
            error => {
                alert(error);
            }
        );  
    }

    userGroups: UserGroupViewModel[];
}