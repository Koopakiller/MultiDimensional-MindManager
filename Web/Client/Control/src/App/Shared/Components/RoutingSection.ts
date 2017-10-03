import { Directive, Input, Output, ElementRef, Renderer, Injectable, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs/Rx';
import { RoutingSectionService } from '../Services/RoutingSectionService';
import { Size } from '../Models/Size';


@Component({
  selector: "routing-section",
  templateUrl: "RoutingSection.html",
  styleUrls:[
    "RoutingSection.less"
  ]
})
export class RoutingSectionComponent implements OnInit {

  constructor(
    private _service: RoutingSectionService
  ) {
  }

  private _paneContainerSize: Size = new Size(NaN, NaN);

  public ngOnInit(): void {
    this._service.size.subscribe(size => {
      this._paneContainerSize = size;
      this.updatePaneSize();
    });
    this.updatePaneSize();
  }

  @Input()
  public header: string;

  updatePaneSize() {
    let size = new Size(this.headerElement.nativeElement.offsetWidth, this.headerElement.nativeElement.offsetHeight);
    let h = this._paneContainerSize.height - size.height;
    this.sectionContentHeight = h;
  }

  public sectionContentHeight: number;

  @ViewChild("headerElement")
  private headerElement: ElementRef;
}