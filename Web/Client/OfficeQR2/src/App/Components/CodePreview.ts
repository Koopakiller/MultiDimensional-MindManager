import { Component, OnInit, Input } from "@angular/core";
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
import { InputDataService } from "../Services/InputDataService";

@Component({
    selector: "code-preview",
    templateUrl: "CodePreview.html"
})
export class CodePreviewComponent implements OnInit{
    constructor(
        private _navigationService: QRCodeService
    ) {
    }

    @Input()
    public dataString: string;

    ngOnInit(): void {

    }
}
