import { Component, OnDestroy, OnInit, HostListener, ElementRef, ViewChild } from "@angular/core";
import * as THREE from "three";
import { DataService, ModelData } from "../Services/DataService";
import { Subject } from "rxjs/Rx"

@Component({
    templateUrl: "Index.html",
    styleUrls: [
        "Index.less"
    ]
})
export class IndexComponent implements OnInit {

    public constructor(
        private _dataService: DataService
    ) {
    }

    private models: ModelData[];

    ngOnInit(): void {
        this._dataService.getAvailableModels().subscribe(x => this.models = x);
    }
}