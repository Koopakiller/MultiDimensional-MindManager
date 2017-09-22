import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { DataContainer, GenericDataInputComponentBase } from "./ComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../../Services/InputService";

@Component({
    templateUrl: "Url.html",
    styleUrls: [
        "Shared.less",
        "../../Styles/Form.less"
    ]
})
export class UrlComponent extends GenericDataInputComponentBase<UrlDataContainer> {
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService
    ) {
        super(router, activatedRoute, inputService, UrlComponent.DataObjectKey);
    }

    public static readonly DataObjectKey: string = "url";
    public static readonly PathPart: string = "Url";

    protected initializeData(): void {
        this.data = new UrlDataContainer();
    }
}

export class UrlDataContainer implements DataContainer {
    public url: string;

    generateDataString(): string {
        return this.url;
    }
}