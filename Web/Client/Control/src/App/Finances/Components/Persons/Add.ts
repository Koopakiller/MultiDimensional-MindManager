import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from "@angular/core";
import { FinancesService } from "../../Services/FinancesService";
import { LocationService } from "../../../Shared/Services/LocationService";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, UserGroupViewModel } from "../../ViewModels/FinancesViewModels";
import { Router } from "@angular/router";
import { GlobalLoadingIndicatorService } from "../../../Shared/Services/GlobalLoadingIndicatorService";

@Component({
    templateUrl: "Add.html"
})
export class AddComponent implements OnInit, OnDestroy {

    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    public static RoutingInformation(path: string = "Add") {
        return {
            path: path,
            component: AddComponent,
            outlet: "next"
        };
    }

    ngOnInit(): void {
        this._isInitialized = true;
        this.updateUserGroups();
    }

    ngOnDestroy(): void {
        this._isInitialized = false;
    }

    private userGroups: UserGroupViewModel[];
    private userGroup: number;
    private _userId: number;
    private _isInitialized: boolean = false;

    @Input()
    personName: string;

    @Input("userId")
    public set userId(value: number) {
        this._userId = value;
        if (this._isInitialized) {
            this.updateUserGroups();
        }
    }
    public get userId(): number {
        return this._userId;
    }

    private updateUserGroups(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.getUserGroups(this._userId).subscribe(
            x => {
                this.userGroups = x;
                this.userGroup = x.length > 0 ? x[0].id : null;
                this._globalLoadingIndicatorService.removeLoadingProcess();
            },
            error => {
                alert(error);
            }
        );
    }

    @Output()
    close = new EventEmitter();

    submit(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.addPerson(this.personName, this.userGroup).subscribe(
            item => {
                this.close.emit(item);
                this._globalLoadingIndicatorService.removeLoadingProcess();
            },
            error => {
                alert(error);
            }
        );
    }

    cancel(): void {
        this.close.emit();
    }
}