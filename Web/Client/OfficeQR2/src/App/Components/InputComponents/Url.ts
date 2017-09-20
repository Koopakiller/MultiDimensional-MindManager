import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { ComponentBase } from "./ComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputDataService } from "../../Services/InputDataService";

@Component({
    templateUrl: "Url.html"
})
export class UrlComponent extends ComponentBase implements OnInit{
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        private _inputDataService: InputDataService
    ) {
        super(router, activatedRoute);
    }
    public url: string;

    public updateData(){
        this._inputDataService.provide(this.url); 
    }

    public ngOnInit(): void {
        this._inputDataService.provide(this.url); 
    }
}
