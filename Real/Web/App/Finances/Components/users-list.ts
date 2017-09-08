import { Component, OnInit, Input } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../Services/FinancesService.js";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../Scaffold/Services/GlobalLoadingIndicatorService.js";
import { UserViewModel } from "../ViewModels/FinancesViewModels.js";

@Component({
    selector: "finances-users-list",
    templateUrl: "/Templates/Finances/UsersList"
})
export class FinancesUsersListComponent {

    @Input()
    users: UserViewModel[];
}