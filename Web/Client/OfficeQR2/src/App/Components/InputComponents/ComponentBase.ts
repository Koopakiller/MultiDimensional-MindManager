import { Router, ActivatedRoute } from "@angular/router";
import { EventEmitter, Output } from "@angular/core";
import { InputDataService } from "../../Services/InputDataService";

export class ComponentBase {
    constructor(
        protected _router: Router,
        protected _activatedRoute: ActivatedRoute,
        protected _inputDataService: InputDataService
    ) {
    }

    public goTo(name: string) {
        this._router.navigate([{ outlets: { input: name } }], { relativeTo: this._activatedRoute.parent })
    }
}
