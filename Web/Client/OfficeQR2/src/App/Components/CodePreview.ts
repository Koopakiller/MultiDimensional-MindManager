import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { QRCodeService } from "../Services/QRCodeService";
import { InputService } from "../Services/InputService";

@Component({
    selector: "code-preview",
    templateUrl: "CodePreview.html"
})
export class CodePreviewComponent implements OnInit{
    constructor(
        private _navigationService: QRCodeService
    ) {
    }

    @Input()
    public dataString: string;

    ngOnInit(): void {

    }
}
