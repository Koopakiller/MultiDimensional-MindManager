import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class InputDataService {
    public provide(data: string): void{
        this._dataSource.next(data);
    }

    private _dataSource = new BehaviorSubject<string>(null);
    public dataSourceObservable = this._dataSource.asObservable();
}