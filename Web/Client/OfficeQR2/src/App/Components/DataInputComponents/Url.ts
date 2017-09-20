import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { DataInputComponentBase } from "./DataInputComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputDataService } from "../../Services/InputDataService";

@Component({
    templateUrl: "Url.html"
})
export class UrlComponent extends DataInputComponentBase implements OnInit{
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputDataService: InputDataService
    ) {
        super(router, activatedRoute, inputDataService);
    }
    public url: string;

    public updateData(){
        this._inputDataService.provide(this.url); 
    }

    public ngOnInit(): void {
        this._inputDataService.provide(this.url); 
    }
}
