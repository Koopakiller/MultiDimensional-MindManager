import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../Services/InputService";
import { QRCodeSettings } from "../Model/QRCodeSettings";

@Component({
    selector: "settings-input",
    templateUrl: "SettingsInput.html",
    styleUrls:[
        "../Styles/Form.less"
    ]
})
export class SettingsInputComponent {
    constructor(
        private _inputService: InputService
    ) {
    }

    public data: QRCodeSettings = QRCodeSettings.Default();

    public dataChanged() {
        this._inputService.provideSettings(this.data);
    }
}
