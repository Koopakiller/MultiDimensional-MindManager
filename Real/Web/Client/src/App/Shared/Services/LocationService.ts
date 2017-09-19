import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class LocationService {
    public get location() : Observable<Position>{
        return Observable.of(this.getLocation())
    }

    private getLocation() : Position{
        var l;
        navigator.geolocation.getCurrentPosition(loc => l = loc);
        return l;
    }
}