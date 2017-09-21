import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { DataInputComponentBase } from "./DataInputComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../../Services/InputService";

@Component({
    templateUrl: "File.html"
})
export class FileComponent extends DataInputComponentBase implements OnInit {
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
            this._inputService.provideDataString(reader.result);
            this._inputService.setDataObject("text", { text: reader.result });
            this.goTo("Text");
        };
    }

    public ngOnInit(): void {
        this._inputService.provideDataString(null);
    }
}
