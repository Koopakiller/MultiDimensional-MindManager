import { Injectable } from "@angular/core";
import { Observable, ReplaySubject, Observer } from "rxjs/Rx";
import { RequestOptions, Http } from "@angular/http";

@Injectable()
export class PhotoService {

    public constructor(
        private http: Http
    ) {
    }

    private getWithOptions(url: string) {
        let options = new RequestOptions();
        return this.http.get(url);
    }

    public getLibraries(){
        return Observable.create((observer: Observer<string[]>) => {
            this.getWithOptions(`/Photos/Data/libraries.json`).subscribe(
                x => {
                    let res: {data: string[]} = x.json()
                    observer.next(res.data);
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