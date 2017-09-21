import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { QRCodeSettings } from "../Model/QRCodeSettings";

@Injectable()
export class InputService {

    private _lastDataString: string = null;
    private _lastSettings: QRCodeSettings = null;

    public provideDataString(data: string): void {
        this._lastDataString = data;
        this.push();
    }

    public provideSettings(settings: QRCodeSettings): void {
        this._lastSettings = settings;
        this.push();
    }

    public resetDataString(): void {
        this._lastDataString = null;
        this.push();
    }

    private push() {
        let obj = new QRCodeConfig();
        obj.settings = this._lastSettings;
        obj.dataString = this._lastDataString;
        this._dataSource.next(obj);
    }

    private _dataSource = new BehaviorSubject<QRCodeConfig>(null);
    public dataSourceObservable = this._dataSource.asObservable();


    private _dataObjectStore = {};

    public getDataObject(key: string) {
        return this._dataObjectStore[key];
    }
    public setDataObject(key: string, obj: any) {
        this._dataObjectStore[key] = obj;
    }
}


export class QRCodeConfig {
    public dataString: string;
    public settings: QRCodeSettings;
}