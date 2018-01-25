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

    public getLibraries() {
        return Observable.create((observer: Observer<Library[]>) => {
            this.getWithOptions(`/Photos/Data/libraries.json`).subscribe(
                x => {
                    let res: { data: Library[] } = x.json()
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

    public getPhotos(library: string) {
        return Observable.create((observer: Observer<string[]>) => {
            this.getWithOptions(`/Photos/Data/${library}/files.txt`).subscribe(
                x => {
                    let res = x.text().split("\n")
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

export class Library {
    public name: string;
    public path: string;
    public thumbnail: string;
    public description: string;
}