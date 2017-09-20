import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class InputService {
    public provideDataString(data: string): void{
        this._dataSource.next(data);
    }

    public resetDataString(): void{
        this._dataSource.next(null);
    }

    public provideSettings(settings: any): void{

    }

    private _dataSource = new BehaviorSubject<string>(null);
    public dataSourceObservable = this._dataSource.asObservable();
}