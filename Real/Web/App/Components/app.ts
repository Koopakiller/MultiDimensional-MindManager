import { Component, OnDestroy, OnInit } from "@angular/core";
import { GlobalLoadingIndicatorService } from "../Services/GlobalLoadingIndicatorService.js";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "app",
    templateUrl: "/Templates/App"
})
export class AppComponent implements OnDestroy, OnInit{
    constructor(
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    public isLoading: boolean;
    private subscription: Subscription;

    ngOnInit() {
        this.subscription = this._globalLoadingIndicatorService.isLoadingObservable
            .subscribe(item => this.isLoading = item)
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
