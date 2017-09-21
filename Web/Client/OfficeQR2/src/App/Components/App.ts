import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";
import {
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
    Router
} from "@angular/router";
import { QRCodeService } from "../Services/QRCodeService";
import { InputService } from "../Services/InputService";

@Component({
    selector: "app",
    templateUrl: "App.html"
})
export class AppComponent {
}
