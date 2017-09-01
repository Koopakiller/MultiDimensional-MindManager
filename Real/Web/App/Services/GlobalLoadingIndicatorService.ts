import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalLoadingIndicatorService {
    
    private _isLoadingSource = new BehaviorSubject<boolean>(false);
    public isLoadingObservable = this._isLoadingSource.asObservable();

    public get isLoading(): boolean{
        return this._loadingProcessCount > 0;
    }

    private _loadingProcessCount: number = 0;

    public addLoadingProcess(): void{
        this._loadingProcessCount += 1;
        this._isLoadingSource.next(this.isLoading);
    }

    public removeLoadingProcess(): void{
        this._loadingProcessCount -= 1;
        if(this._loadingProcessCount < 0){
            throw "Negative _loadingProcessCount is not possible.";
        }
        this._isLoadingSource.next(this.isLoading);
    }
}