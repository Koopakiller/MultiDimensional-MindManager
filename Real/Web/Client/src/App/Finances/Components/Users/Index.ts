import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../../Services/FinancesService";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";
import { UserViewModel } from "../../ViewModels/FinancesViewModels";

@Component({
    templateUrl: "Index.html"
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