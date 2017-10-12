import { Component, OnInit } from "@angular/core";
import * as _ from "lodash";
import { FinancesService } from "../../Services/FinancesService";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Common/Services/GlobalLoadingIndicatorService";
import { UserViewModel } from "../../Models/FinancesModels";

@Component({
    templateUrl: "Index.html",
    styleUrls:[
        "../../../Common/Styles/data-table.less"
    ]
})
export class IndexComponent implements OnInit {
    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    public static RoutingInformation(path: string = "Users") {
        return {
            path: path,
            component: IndexComponent,
            children: [
            ]
        };
    }

    public ngOnInit(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.getUsers().subscribe(
            x => {
                this.users = x;
                this._globalLoadingIndicatorService.removeLoadingProcess();
            },
            error => {
                alert(error);
            }
        );
    }

    public users: UserViewModel[];
}