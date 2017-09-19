import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { ComponentBase } from "./ComponentBase";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "Url.html"
})
export class UrlComponent extends ComponentBase{
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute
    ) {
        super(router, activatedRoute);
    }
    public url: string;
}
