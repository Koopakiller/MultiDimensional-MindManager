import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";
import { FinancesAuthenticationService } from "../../Services/FinancesAuthenticationService";
import { FinancesService } from "../../Services/FinancesService";

@Component({
    templateUrl: "Index.html"
})
export class IndexComponent {
    constructor(
        private _financesAuthenticationService: FinancesAuthenticationService,
        private _financesService: FinancesService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    public userName: string;
    public password: string;

    public submit(): void {
        this._financesAuthenticationService.getToken(this.userName, this.password).subscribe(
            token => {
                this._financesService.assignToken(token);
                this._router.navigate(["../"], { relativeTo: this._activatedRoute });
            },
            error => {
                alert(error);
            }
        );
    }
}
