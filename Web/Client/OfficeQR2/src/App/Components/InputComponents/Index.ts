import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { QRCodeService } from "../../Services/QRCodeService";
import { Router, ActivatedRoute } from "@angular/router";
import { ComponentBase } from "./ComponentBase";

@Component({
    templateUrl: "Index.html"
})
export class IndexComponent extends ComponentBase{
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute
    ) {
        super(router, activatedRoute);
    }
}
