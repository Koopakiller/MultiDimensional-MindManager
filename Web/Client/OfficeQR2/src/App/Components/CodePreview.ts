import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { QRCodeService } from "../Services/QRCodeService";
import { InputService, QRCodeConfig } from "../Services/InputService";
import { OfficeService } from "../Services/OfficeService";
import { QRCodeFileFormat } from "../Model/QRCodeFileFormat";

@Component({
    selector: "code-preview",
    templateUrl: "CodePreview.html",
    styleUrls: [
        "CodePreview.less"
    ]
})
export class CodePreviewComponent {
    constructor(
        private _inputService: InputService,
        private _qrCodeService: QRCodeService,
        private _officeService: OfficeService
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
            this.imageUrl = this._qrCodeService.getCodeUrl(this.config, QRCodeFileFormat.svg);
        }
        else {
            this.imageUrl = null;
        }

        this.isHostedInOffice = this._officeService.isHostedInOffice;
    }

    public imageUrl: string;

    public isHostedInOffice: boolean = false;

    public insertIntoDocument() {
        let url = this._qrCodeService.getCodeUrl(this.config, QRCodeFileFormat.png);
        this._officeService.insertQRCode(url);
    }
}
