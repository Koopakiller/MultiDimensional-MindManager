import { ElementRef, Directive } from "@angular/core";

@Directive({
  selector: '[scrollTo]'
})
export class ScrollToDirective {
  constructor(
    private _elementRef: ElementRef
  ) {     
  }

  ngAfterViewInit() {
    console.log("scroll", this._elementRef);
  }
}
