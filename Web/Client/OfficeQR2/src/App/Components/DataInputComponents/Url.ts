import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { DataInputComponentBase } from "./DataInputComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../../Services/InputService";

@Component({
    templateUrl: "Url.html"
})
export class UrlComponent extends DataInputComponentBase implements OnInit{
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService
    ) {
        super(router, activatedRoute, inputService);
    }
    public url: string;

    public updateData(){
        this._inputService.provideDataString(this.url); 
    }

    public ngOnInit(): void {
        this._inputService.provideDataString(this.url); 
    }
}
