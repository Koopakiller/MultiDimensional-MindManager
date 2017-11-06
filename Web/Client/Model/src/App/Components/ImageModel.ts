import { Component, OnDestroy, OnInit, HostListener, ElementRef, ViewChild } from "@angular/core";
import * as THREE from "three";
import { DataService, DynamicModelData } from "../Services/DataService";
import { Subject } from "rxjs/Rx"
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "ImageModel.html",
    styleUrls: [
        "ImageModel.less"
    ]
})
export class ImageModelComponent implements OnInit, OnDestroy {

    public constructor(
        private _dataService: DataService,
        private _activatedRoute: ActivatedRoute
    ) {
    }

    private path: string;

    private _parameterSubscription: Subscription;

    public ngOnDestroy() {
        this._parameterSubscription.unsubscribe();
    }

    ngOnInit(): void {

        this._parameterSubscription = this._activatedRoute.params.subscribe(params => {
            this.path = params['path'];

            this._dataService.getImageModelData(this.path).subscribe(x => {
                this.imagePath = "/Model/Data/" + this.path + "/" + x.fileName;
                console.log(x);
            });
        });

    }

    public imagePath: string;
}