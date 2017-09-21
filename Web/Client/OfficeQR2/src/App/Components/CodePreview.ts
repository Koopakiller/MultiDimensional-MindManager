import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { QRCodeService } from "../Services/QRCodeService";
import { InputService } from "../Services/InputService";

@Component({
    selector: "code-preview",
    templateUrl: "CodePreview.html"
})
export class CodePreviewComponent implements OnInit {
    constructor(
        private _navigationService: QRCodeService
    ) {
    }

    private _dataString: string;
    @Input()
    public set dataString(value: string) {
        this._dataString = value;
    }

    public get dataString(): string {
        return this._dataString;
    }

    ngOnInit(): void {

    }
}
