import { Component, OnDestroy, OnInit } from "@angular/core";
import { GlobalLoadingIndicatorService } from "../Services/GlobalLoadingIndicatorService.js";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";

@Component({
    selector: "app",
    templateUrl: "/Templates/App"
})
export class AppComponent implements OnInit{
    constructor(
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    public isLoadingObservable: Observable<boolean>;

    ngOnInit() {
        this.isLoadingObservable = this._globalLoadingIndicatorService.isLoadingObservable;
    }
}
