import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { Observable } from "rxjs/Observable";
import { Size } from "../Models/Size";
import { ScrollPosition } from "../Models/ScrollPosition";
import { VerticalDirection } from "../Models/VerticalDirection";


@Injectable()
export class RoutingSectionService {

    private sizeSource: ReplaySubject<Size> = new ReplaySubject<Size>(1);

    public size: Observable<Size> = this.sizeSource.asObservable();

    public setSize(size: Size): void {
        this.sizeSource.next(size);
    }


    private _idCounter: number = 0;

    public getUniqueId(): number {
        this._idCounter += 1;
        return this._idCounter;
    }


    private _scrollPositions: ScrollPosition[] = [];

    public addScrollPosition(pos: ScrollPosition): void {
        this._scrollPositions.push(pos);
    }

    public removeScrollPosition(id: number) {
        for (let index = 0; index < this._scrollPositions.length; ++index) {
            if (this._scrollPositions[index].id = id) {
                this._scrollPositions.splice(index, 1);
                break;
            }
        }
    }

    public getNextScrollPosition(pos: number, direction: VerticalDirection): number {
        if(this._scrollPositions.length == 0){
            return null;
        }
        
        let resultPosition: number = direction == VerticalDirection.Up ? -1 : Number.MAX_VALUE;
        let resultIndex: number = -1;
        for (let index = 0; index < this._scrollPositions.length; ++index) {
            if (direction == VerticalDirection.Down &&
                this._scrollPositions[index].position > pos &&
                this._scrollPositions[index].position < resultPosition) {
                resultIndex = index;
                resultPosition = this._scrollPositions[resultIndex].position;
            }

            if (direction == VerticalDirection.Up &&
                this._scrollPositions[index].position < pos &&
                this._scrollPositions[index].position > resultPosition) {
                resultIndex = index;
                resultPosition = this._scrollPositions[resultIndex].position;
            }
        }

        if(resultIndex == -1){
            return null;
        }

        return this._scrollPositions[resultIndex].position;
    }
}