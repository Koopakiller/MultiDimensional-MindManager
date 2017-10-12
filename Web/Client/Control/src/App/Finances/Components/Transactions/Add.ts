import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../../Services/FinancesService";
import { LocationService } from "../../../Shared/Services/LocationService";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel, UserGroupViewModel } from "../../Models/FinancesModels";
import { Router } from "@angular/router";
import { KeyValuePair } from "../../../Shared/KeyValuePair";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";
import { AddComponent as PersonAddComponent } from "../Persons/Add";


@Component({
    templateUrl: "Add.html"
})
export class AddComponent implements OnInit {

    constructor(
        private _financesService: FinancesService,
        private _locationService: LocationService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    public static RoutingInformation(path: string = "Add") {
        return {
            path: path,
            component: AddComponent,
            children: [
                PersonAddComponent.RoutingInformation("AddPerson")
            ]
        };
    }

    ngOnInit(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.getUsers().subscribe(x => {
            this.users = x;
            this.user = x.length > 0 ? x[0].id : null;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._locationService.location.subscribe(x => {
            this.coordinates = x ? x.coords : null;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this.timeStampDate = new Date();
        this.timeStampDate.setHours(0, 0, 0, 0);
        this.timeStampTimeStr = "00:00:00";
        this.value = 0;
    }

    users: UserViewModel[];
    userGroups: UserGroupViewModel[];
    currencyAccounts: CurrencyAccountViewModel[];
    persons: PersonViewModel[];

    coordinates: Coordinates;

    name: string;
    value: number;

    timeStampDate: Date;
    timeStampTimeStr: string;
    includeTimeStampTime: boolean = false;

    _user: number;
    public get user() {
        return this._user;
    }
    public set user(value: number) {
        this._user = value;
        if (value) {
            this._globalLoadingIndicatorService.addLoadingProcess();
            this._financesService.getUserGroups(value).subscribe(x => {
                this.userGroups = x;
                this.userGroup = x.length > 0 ? x[0].id : null;
                this._globalLoadingIndicatorService.removeLoadingProcess();
            });
        }
    }

    private _userGroup: number;
    public get userGroup() {
        return this._userGroup;
    }
    public set userGroup(value: number) {
        this._userGroup = value;
        if (value) {
            this._globalLoadingIndicatorService.addLoadingProcess();
            this._financesService.getCurrencyAccountsFromUserGroup(value).subscribe(x => {
                this.currencyAccounts = x;
                this.currencyAccount = x.length > 0 ? x[0].id : null;
                this._globalLoadingIndicatorService.removeLoadingProcess();
            });
            this._globalLoadingIndicatorService.addLoadingProcess();
            this._financesService.getPersons(value).subscribe(x => {
                this.persons = x;
                this.person = x.length > 0 ? x[0].id : null;
                this._globalLoadingIndicatorService.removeLoadingProcess();
            });
        }
    }

    public currencyAccount: number;
    
    public person: number;


    public submit(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        let tvm = new TransactionViewModel();
        tvm.currencyAccountId = this.currencyAccount;
        tvm.personId = this.person;
        tvm.userId = this.user;
        tvm.timeStampDate = this.timeStampDate;

        var parts = this.timeStampTimeStr.split(":");
        if (tvm.includeTimeStampTime &&
            (parts.length != 3 || this.timeStampTimeStr.length != 8 || isNaN(+parts[0]) || isNaN(+parts[1]) || isNaN(+parts[2]))) {
            alert("TimeStamp is not valid. It must be in format 'HH:mm:ss'!");
            return;
        }
        else {
            tvm.timeStampTime = new Date(0, 0, 0, +parts[0], +parts[1], +parts[2], 0);
        }

        tvm.includeTimeStampTime = this.includeTimeStampTime;
        tvm.note = this.name;
        tvm.value = this.value;
        if (this.coordinates) {
            tvm.rawData = [
                new KeyValuePair<string, string>("Coordinates", JSON.stringify(this.coordinates))
            ];
        }
        this._financesService.addTransactions([tvm]).subscribe(() => {
            this._router.navigateByUrl("/Finances");
            this._globalLoadingIndicatorService.removeLoadingProcess();
        }, error => {
            alert(error);
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });

    }

    public cancel(): void {
        this._router.navigateByUrl("/Finances");
    }
}