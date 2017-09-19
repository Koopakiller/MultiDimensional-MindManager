import { Component, OnDestroy, OnInit } from "@angular/core";
import { GlobalLoadingIndicatorService } from "../../Shared/Services/GlobalLoadingIndicatorService";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { NavigationService } from "../../Shared/Services/NavigationService";
import {
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
    Router
} from "@angular/router";

@Component({
    selector: "app",
    templateUrl: "App.html"
})
export class AppComponent {
    constructor(
        private _navigationService: NavigationService,
        private _router: Router
    ) {
        this._router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationStart) {
                this.isLoading = true;
            }
            if (event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError) {
                this.isLoading = false;
            }
        });
    }

    public isLoading: boolean = true
}
