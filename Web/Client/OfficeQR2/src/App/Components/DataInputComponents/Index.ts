import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { QRCodeService } from "../../Services/QRCodeService";
import { Router, ActivatedRoute } from "@angular/router";
import { DataInputComponentBase } from "./DataInputComponentBase";
import { InputService } from "../../Services/InputService";

@Component({
    templateUrl: "Index.html"
})
export class IndexComponent extends DataInputComponentBase implements OnInit{
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService
    ) {
        super(router, activatedRoute, inputService);
    }

    ngOnInit(): void {
        this._inputService.resetDataString(); 
    }
}