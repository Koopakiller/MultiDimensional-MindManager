import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Observable } from "rxjs/Observable";
import { Size } from "../Models/Size";


@Injectable()
export class RoutingSectionService {

  private sizeSource: ReplaySubject<Size> = new ReplaySubject<Size>(1);

  public size: Observable<Size> = this.sizeSource.asObservable();

  public setSize(size: Size): void {
      console.log("New size: " + size);
    this.sizeSource.next(size);
  }
}