import { Component, OnInit, Input } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../../Services/FinancesService.js";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Scaffold/Services/GlobalLoadingIndicatorService.js";
import { UserViewModel } from "../../ViewModels/FinancesViewModels.js";

@Component({
    selector: "users-list",
    templateUrl: "/App/Finances/Templates/Users/List.html"
})
export class FinancesUsersListComponent {

    @Input()
    users: UserViewModel[];
}