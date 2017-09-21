import { Router, ActivatedRoute } from "@angular/router";
import { EventEmitter, Output, OnInit } from "@angular/core";
import { InputService } from "../../Services/InputService";

/** Base class for components with navigation feature */
export class InputRoutingComponentBase {
    constructor(
        protected _router: Router,
        protected _activatedRoute: ActivatedRoute,
        protected _inputService: InputService
    ) {
    }

    public goTo(name: string): void {
        this._router.navigate([{ outlets: { "data-input": name } }], { relativeTo: this._activatedRoute.parent })
    }
}

/** Base class for components which can modify the stored data in InputService */
export class DataInputComponentBase extends InputRoutingComponentBase implements OnInit {
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService
    ) {
        super(router, activatedRoute, inputService);
    }

    ngOnInit(): void {
        this._inputService.resetDataString();
    }

    /** Populates the data-object into the InputService */
    protected updateInputService(data: DataContainer, key?: string): void {
        this._inputService.provideDataString(data.generateDataString());
        this._inputService.setDataObject(key, data);
    }
}

/** Base class for components which store data in InputService and can restore the data */
export abstract class GenericDataInputComponentBase<TDataContainer extends DataContainer> extends DataInputComponentBase implements OnInit {
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService,
        protected _key: string
    ) {
        super(router, activatedRoute, inputService);
    }

    public data: TDataContainer;


    /** Updates data-property from existing data in InputService. 
     * Initializes data-property if no data exists in InputService */
    protected tryGetDataFromInputService(): void {
        this.data = this._inputService.getDataObject(this._key);
        if (!this.data) {
            this.initializeData();
        }
        this.updateInputService(this.data, this._key);
    }

    /** Should be called from View if any part of the DataContainer changed. */
    public dataChanged(): void {
        this.updateInputService(this.data, this._key);
    }

    public ngOnInit(): void {
        this.tryGetDataFromInputService();
    }

    protected abstract initializeData(): void;
}

export interface DataContainer {
    generateDataString(): string;
}