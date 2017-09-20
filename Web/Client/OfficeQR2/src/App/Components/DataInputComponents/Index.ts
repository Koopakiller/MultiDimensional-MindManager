import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { QRCodeService } from "../../Services/QRCodeService";
import { Router, ActivatedRoute } from "@angular/router";
import { DataInputComponentBase } from "./DataInputComponentBase";
import { InputDataService } from "../../Services/InputDataService";

@Component({
    templateUrl: "Index.html"
})
export class IndexComponent extends DataInputComponentBase implements OnInit{
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
