import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { DataInputComponentBase } from "./ComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../../Services/InputService";
import { TextComponent, TextDataContainer } from "./Text";

@Component({
    templateUrl: "File.html"
})
export class FileComponent extends DataInputComponentBase {
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService
    ) {
        super(router, activatedRoute, inputService);
    }

    selectFile($event: any) {
        let reader: FileReader = new FileReader();
        reader.readAsText($event.target.files[0]);
        reader.onloadend = (e) => {
            let data = new TextDataContainer();
            data.text = reader.result;
            this.updateInputService(data, TextComponent.DataObjectKey);
            this.goTo(TextComponent.PathPart);
        };
    }

    public static readonly PathPart: string = "File";
}
