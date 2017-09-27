import { Component, OnInit, Input } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../../Services/FinancesService";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";
import { UserViewModel } from "../../Models/FinancesModels";

@Component({
    selector: "users-list",
    templateUrl: "List.html"
})
export class FinancesUsersListComponent {

    @Input()
    users: UserViewModel[];
}