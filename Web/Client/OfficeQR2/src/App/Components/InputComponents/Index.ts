import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { QRCodeService } from "../../Services/QRCodeService";
import { Router, ActivatedRoute } from "@angular/router";
import { ComponentBase } from "./ComponentBase";
import { InputDataService } from "../../Services/InputDataService";

@Component({
    templateUrl: "Index.html"
})
export class IndexComponent extends ComponentBase implements OnInit{
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputDataService: InputDataService
    ) {
        super(router, activatedRoute, inputDataService);
    }

    ngOnInit(): void {
        this._inputDataService.provide(null); 
    }
}
