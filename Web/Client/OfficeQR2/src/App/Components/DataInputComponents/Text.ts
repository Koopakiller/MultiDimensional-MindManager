import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { DataInputComponentBase } from "./DataInputComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../../Services/InputService";

@Component({
    templateUrl: "Text.html"
})
export class TextComponent extends DataInputComponentBase implements OnInit {
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService
    ) {
        super(router, activatedRoute, inputService);
    }

    private _text: string;
    public get text(): string {
        return this._text;
    }
    public set text(value: string) {
        this._text = value;
        this.updateMessage();
    }

    public messageKey: string;
    public messageColor: string;

    private updateMessage(): void {
        
        // green -> yellow -> red
        
        if (this.text.length < 20) {
            this.messageKey = "good";
            this.messageColor = "#009020";
            return;
        }
        if (this.text.length < 80) {
            this.messageKey = "ok";
            this.messageColor = "#808000";
            return;
        }
        if (this.text.length < 300) {
            this.messageKey = "warning";
            this.messageColor = "#C00000";
            return;
        }

        this.messageKey = "problem";
    }


    public updateData() {
        this._inputService.provideDataString(this.text);
    }

    public ngOnInit(): void {
        this._inputService.provideDataString(this.text);
    }
}
