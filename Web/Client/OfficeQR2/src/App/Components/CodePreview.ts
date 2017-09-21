import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { QRCodeService } from "../Services/QRCodeService";
import { InputService, QRCodeConfig } from "../Services/InputService";

@Component({
    selector: "code-preview",
    templateUrl: "CodePreview.html"
})
export class CodePreviewComponent {
    constructor(
        private _inputService: InputService,
        private _qrCodeService: QRCodeService
    ) {
        this._inputService.dataSourceObservable.debounceTime(500).subscribe((data) => {
            setTimeout(() => {
                this.config = data;
                this.updateCode();
            })
        })
    }

    public config: QRCodeConfig;

    updateCode(): void {
        if (this.config && this.config.dataString && this.config.dataString.length > 0) {
            this.imageUrl = this._qrCodeService.getCodeUrl(this.config);
        }
        else {
            this.imageUrl = null;
        }
    }

    public imageUrl: string;
}
