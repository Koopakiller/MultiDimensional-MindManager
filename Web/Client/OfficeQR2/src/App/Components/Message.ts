import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    templateUrl: "Message.html",
    styleUrls: [
        "Message.less"
    ]
})
export class MessageComponent {

    constructor(
        private _router: Router
    ) {
    }

    public text: string = "Lorem Ipsum dolor sit amet";
    public header: string = "Info";
    public isVisible: boolean = true;

    public close() {
        this._router.navigate([{ outlets: { popup: null } }]);
    }
}