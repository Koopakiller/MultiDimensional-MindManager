import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import {
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
    Router
} from "@angular/router";
import { QRCodeService } from "../Services/QRCodeService";

@Component({
    selector: "app",
    templateUrl: "App.html"
})
export class AppComponent {
    constructor(
        private _navigationService: QRCodeService
    ) {
    }
}
