import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, Observer } from "rxjs/Rx";
import { RequestOptions, Http } from "@angular/http";

@Injectable()
export class DataService {

    public constructor(
        private http: Http
    ) {
    }

    private _displayModelChangedSubject = new ReplaySubject(1)
    public displayModelChanged: Observable<any> = this._displayModelChangedSubject.asObservable();


    private _enabledDimensions: { [id: string]: string[] } = {};

    public toggleDimension(name: string, path: string) {
        if (this._enabledDimensions[path].indexOf(name) >= 0) {
            this._enabledDimensions[path].splice(this._enabledDimensions[path].indexOf(name), 1);
            this._displayModelChangedSubject.next(null);
        }
        else {
            if (this._enabledDimensions[path].length <= 3) {
                this._enabledDimensions[path].push(name);
                this._displayModelChangedSubject.next(null);
            }
        }
    }

    public getAllDimensions(path: string): Observable<DynamicModelDimension[]> {
        return Observable.create((observer: Observer<DynamicModelDimension[]>) => {
            this.getData(path).subscribe(data => {
                this._enabledDimensions[path] = data.dimensions.filter(x => x.isChecked).map(x => x.name);
                observer.next(data.dimensions);
                observer.complete();
            });
        });
    }

    public getEnabledDimensions(path: string): Observable<DynamicModelDimension[]> {
        return Observable.create((observer: Observer<DynamicModelDimension[]>) => {
            this.getAllDimensions(path).subscribe(_ => { //ensure this._enabledDimensions[path] exists
                this.getData(path).subscribe(data => {
                    observer.next(data.dimensions.filter(x => this._enabledDimensions[path].indexOf(x.name) >= 0));
                    observer.complete();
                });
            });
        });
    }

    public getDynamicModelData(path: string): Observable<DynamicModelData> {
        return Observable.create((observer: Observer<DynamicModelData>) => {
            this.getData(path).subscribe(data => {
                observer.next(data);
                observer.complete();
            });
        });
    }

    public getImageModelData(path: string): Observable<ImageModelData>{
        return Observable.create((observer: Observer<ImageModelData>) => {
            this.getWithOptions(`/Model/Data/${path}/index.json`).subscribe(
                x => {
                    let res: ImageModelData = x.json()
                    observer.next(res);
                    observer.complete();
                },
                error => {
                    observer.error(error);
                    observer.complete();
                }
            );
        });
    }


    private getWithOptions(url: string) {
        let options = new RequestOptions();
        return this.http.get(url);
    }

    private getData(path: string): Observable<DynamicModelData> {
        // if (this.data[path]) {
        //     return Observable.create((observer: Observer<DynamicModelData>) => {
        //         observer.next(this.data[path]);
        //         observer.complete();
        //     });
        // }
        // else {
        return Observable.create((observer: Observer<DynamicModelData>) => {
            this.getAvailableModels().subscribe(l => {
                let item = l.filter(x => x.path == path)[0];
                if (!item) {
                    observer.complete();
                }
                else {
                    switch (item.type) {
                        case ModelType.dynamic:

                            this.getWithOptions("/Model/Data/" + path + "/index.json").subscribe(
                                x => {
                                    let res: DynamicModelData = x.json()
                                    observer.next(res);
                                    observer.complete();
                                },
                                error => {
                                    observer.error(error);
                                    observer.complete();
                                }
                            );
                            break;

                        default:

                            observer.error("unknown model type");

                            break;
                    }
                }
            });
        });
        //}
    }


    private availableModels: ModelData[];

    public getAvailableModels(): Observable<ModelData[]> {
        if (this.availableModels) {
            return Observable.create((observer: Observer<ModelData[]>) => {
                observer.next(this.availableModels);
                observer.complete();
            });
        }
        else {
            return Observable.create((observer: Observer<ModelData[]>) => {
                this.getWithOptions("/Model/Data/index.json").subscribe(
                    x => {
                        let res: ModelData[] = x.json()
                        observer.next(res);
                        observer.complete();
                    },
                    error => {
                        observer.error(error);
                        observer.complete();
                    }
                );
            });
        }
    }
}

export enum ModelType {
    dynamic = "dynamic",
    image = "image"
}

export class ModelData {
    public type: ModelType;
    public path: string;
}

export class DynamicModelData {
    public common: { orientationColor: number };
    public dimensions: DynamicModelDimension[];
}

export class DynamicModelDimension {
    public name: string;
    public description: string;
    public color: number;
    public dimension: number;
    public isChecked: boolean;
}

export class ImageModelData{
    public fileName: string;
}