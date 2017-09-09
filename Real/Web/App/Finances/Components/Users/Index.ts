import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../../Services/FinancesService.js";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Scaffold/Services/GlobalLoadingIndicatorService.js";
import { UserViewModel } from "../../ViewModels/FinancesViewModels.js";

@Component({
    templateUrl: "/Templates/Finances/Index.html"
})
export class IndexComponent implements OnInit {
    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    ngOnInit(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.users.subscribe(
            x => {
                this.users = x;
                this._globalLoadingIndicatorService.removeLoadingProcess();
            },
            error => {
                alert(error);
            }
        );  
    }

    users: UserViewModel[];
}