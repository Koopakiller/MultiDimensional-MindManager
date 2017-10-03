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

  ngOnInit(): void {
  }

  @Input()
  public header: string;
}