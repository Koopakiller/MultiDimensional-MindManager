import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { QRCodeService, QRCodeErrorCorrectionCodes, QRCodeFileFormat } from "../Services/QRCodeService";
import { InputService } from "../Services/InputService";

@Component({
    selector: "code-preview",
    templateUrl: "CodePreview.html"
})
export class CodePreviewComponent {
    constructor(
        private _qrCodeService: QRCodeService
    ) {
    }

    private _dataString: string;
    @Input()
    public set dataString(value: string) {
        this._dataString = value;
        this.updateCode();
    }
    public get dataString(): string {
        return this._dataString;
    }

    updateCode(): void{
        this.imageUrl = this._qrCodeService.getCodeUrl(this.dataString, 150, QRCodeErrorCorrectionCodes.H, "#000000", "#FFFFFF", 0, 0, QRCodeFileFormat.png);
    }

    public imageUrl: string;
}
