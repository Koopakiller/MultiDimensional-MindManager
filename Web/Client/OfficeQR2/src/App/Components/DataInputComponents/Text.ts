import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { DataContainer, GenericDataInputComponentBase } from "./ComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../../Services/InputService";

@Component({
    templateUrl: "Text.html"
})
export class TextComponent extends GenericDataInputComponentBase<TextDataContainer> {
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService
    ) {
        super(router, activatedRoute, inputService, TextComponent.DataObjectKey);
    }

    public dataChanged(): void {
        super.dataChanged();
        this.updateMessage();
    }

    public get textLength(): number {
        return (this.data.text ? this.data.text : "").length;
    }

    public messageKey: string;
    public messageColor: string;

    private updateMessage(): void {

        // green -> yellow -> red

        if (this.data.text.length < 20) {
            this.messageKey = "good";
            this.messageColor = "#009020";
            return;
        }
        if (this.data.text.length < 80) {
            this.messageKey = "ok";
            this.messageColor = "#808000";
            return;
        }
        if (this.data.text.length < 300) {
            this.messageKey = "warning";
            this.messageColor = "#C00000";
            return;
        }

        this.messageKey = "problem";
    }

    public static readonly DataObjectKey: string = "text";

    protected initializeData(): void {
        this.data = new TextDataContainer();
    }
}

export class TextDataContainer implements DataContainer {
    public text: string;

    generateDataString(): string {
        return this.text;
    }
}