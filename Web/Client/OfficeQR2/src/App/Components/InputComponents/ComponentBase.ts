import { Router, ActivatedRoute } from "@angular/router";

export class ComponentBase {
    constructor(
        protected _router: Router,
        protected _activatedRoute: ActivatedRoute
    ) {
    }

    public goTo(name: string) {
        this._router.navigate([{ outlets: { input: name } }], { relativeTo: this._activatedRoute.parent })
    }
}
