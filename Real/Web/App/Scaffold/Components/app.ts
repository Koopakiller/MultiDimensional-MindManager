import { Component, OnDestroy, OnInit } from "@angular/core";
import { GlobalLoadingIndicatorService } from "../Services/GlobalLoadingIndicatorService.js";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { NavigationService } from "../Services/NavigationService";

@Component({
    selector: "app",
    templateUrl: "/Templates/Scaffold/App"
})
export class AppComponent implements OnInit{
    constructor(
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService,
        private _navigationService: NavigationService
    ) { }

    public isLoadingObservable: Observable<boolean>;

    ngOnInit() {
        this.isLoadingObservable = this._globalLoadingIndicatorService.isLoadingObservable;
    }
}
