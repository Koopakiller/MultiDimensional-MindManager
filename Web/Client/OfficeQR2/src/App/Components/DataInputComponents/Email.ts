import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { DataContainer, GenericDataInputComponentBase } from "./ComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../../Services/InputService";

@Component({
    templateUrl: "Email.html",
    styleUrls: [
        "Shared.less",
        "../../Styles/Form.less"
    ]
})
export class EmailComponent extends GenericDataInputComponentBase<EmailDataContainer> {
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService
    ) {
        super(router, activatedRoute, inputService, EmailComponent.DataObjectKey);
    }

    public static readonly DataObjectKey: string = "email";
    public static readonly PathPart: string = "Email";

    protected initializeData(): void {
        this.data = new EmailDataContainer();
    }
}

export class EmailDataContainer implements DataContainer {
    public email: string;

    generateDataString(): string {
        if (this.email) {
            return "mailto:" + this.email;
        }
        return null;
    }
}