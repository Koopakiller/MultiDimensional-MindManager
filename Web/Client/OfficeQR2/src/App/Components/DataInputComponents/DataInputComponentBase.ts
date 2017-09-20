import { Router, ActivatedRoute } from "@angular/router";
import { EventEmitter, Output } from "@angular/core";
import { InputService } from "../../Services/InputService";

export class DataInputComponentBase {
    constructor(
        protected _router: Router,
        protected _activatedRoute: ActivatedRoute,
        protected _inputService: InputService
    ) {
    }

    public goTo(name: string) {
        this._router.navigate([{ outlets: { "data-input": name } }], { relativeTo: this._activatedRoute.parent })
    }
}
