import { Component, OnInit, Input } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../Services/FinancesService.js";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../Services/GlobalLoadingIndicatorService.js";
import { UserViewModel } from "../ViewModels/FinancesViewModels.js";

@Component({
    selector: "finances-users-list",
    templateUrl: "/Templates/FinancesUsersList"
})
export class FinancesUsersListComponent {

    @Input()
    users: UserViewModel[];
}