import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { QRCodeService } from "../Services/QRCodeService";

@Component({
    templateUrl: "Index.html"
})
export class IndexComponent {
    constructor(
        private _navigationService: QRCodeService
    ) {
    }
}
