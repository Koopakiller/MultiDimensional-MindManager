import { Directive, Input, Output, ElementRef, Renderer, Injectable, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs/Rx';
import { RoutingSectionService } from '../Services/RoutingSectionService';
import { Size } from '../Models/Size';
import { ScrollPosition } from '../Models/ScrollPosition';


@Component({
  selector: "routing-section",
  templateUrl: "RoutingSection.html",
  styleUrls: [
    "RoutingSection.less"
  ]
})
export class RoutingSectionComponent implements OnInit {

  constructor(
    private _service: RoutingSectionService
  ) {
  }

  @ViewChild("headerElement")
  private headerElement: ElementRef;

  private _id: number;

  public ngOnInit(): void {
    this._id = this._service.getUniqueId();
    this._service.addScrollPosition(new ScrollPosition(this._id, this.header, this.headerElement));
  }

  public ngOnDestroy(): void {
    this._service.removeScrollPosition(this._id);
  }

  @Input()
  public header: string;
}