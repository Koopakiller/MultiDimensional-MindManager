import { ElementRef } from "@angular/core";

export class ScrollPosition {
    public constructor(
        public id: number,
        public header: string,
        private element: ElementRef
    ) {
    }

    public get position(): number{
        return this.element.nativeElement.offsetTop;
    }
}