import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { DataContainer, GenericDataInputComponentBase } from "./ComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../../Services/InputService";

@Component({
    templateUrl: "Phone.html"
})
export class PhoneComponent extends GenericDataInputComponentBase<PhoneDataContainer> {
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService
    ) {
        super(router, activatedRoute, inputService, PhoneComponent.DataObjectKey);
    }

    public static readonly DataObjectKey: string = "phone";
    public static readonly PathPart: string = "Phone";

    protected initializeData(): void {
        this.data = new PhoneDataContainer();
    }
}

export class PhoneDataContainer implements DataContainer {
    public phone: string;

    generateDataString(): string {
        if (this.phone) {
            return "tel:" + this.phone;
        }
        return null;
    }
}