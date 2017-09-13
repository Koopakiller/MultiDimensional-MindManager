import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService.js";
import { FinancesAuthenticationService } from "../../Services/FinancesAuthenticationService.js";
import { FinancesService } from "../../Services/FinancesService.js";

@Component({
    templateUrl: "/App/Finances/Templates/Authentication/Index.html"
})
export class IndexComponent {
    constructor(
        private _financesAuthenticationService: FinancesAuthenticationService,
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    public userName: string;
    public password: string;

    public submit(): void {
        this._financesAuthenticationService.getToken(this.userName, this.password).subscribe(
            token => {
                //this._financesService.assignToken(token);
                alert(token)
            },
            error => {
                alert(error);
            }
        );
    }
}
