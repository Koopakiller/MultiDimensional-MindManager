export class PageComponentBase{
    get isLoading(): boolean{
        return this._loadingProcessCount > 0;
    }

    private _loadingProcessCount: number = 0;

    protected addLoadingProcess(): void{
        this._loadingProcessCount += 1;
    }

    protected removeLoadingProcess(): void{
        this._loadingProcessCount -= 1;
        if(this._loadingProcessCount < 0){
            throw "Negative _loadingProcessCount is not possible.";
        }
    }
}