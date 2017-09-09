import { Component, OnDestroy, OnInit, Input } from "@angular/core";
import { GlobalLoadingIndicatorService } from "../../Shared/Services/GlobalLoadingIndicatorService.js";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "error",
    templateUrl: "/App/Scaffold/Templates/Error.html"
})
export class ErrorComponent implements OnInit, OnDestroy {
    constructor(
        private _activatedRoute: ActivatedRoute
    ) { }

    private _subscription: Subscription;
    private _html: string;

    @Input()
    public errorId: string;

    public get html(){
        return this._html;
    }

    public ngOnInit() {
        this._subscription = this._activatedRoute.params.subscribe(params => {
            this.errorId = params['errorId'];
            this.updateDisplay();
        });
    }

    private updateDisplay(): void {
        if (this.errorId === "http404") {
            this._html = "Page not found";
        }
        else {
            this._html = "An unknown error occurred.";
        }
    }

    public ngOnDestroy(){
        this._subscription.unsubscribe();
    }
}
