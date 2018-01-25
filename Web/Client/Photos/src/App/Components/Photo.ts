import { Component, OnDestroy, OnInit, HostListener, ElementRef, ViewChild } from "@angular/core";
import * as THREE from "three";
import { PhotoService } from "../Services/PhotoService";
import { Subject } from "rxjs/Rx"
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "Photo.html",
    styleUrls: [
        "Photo.less"
    ]
})
export class PhotoComponent implements OnInit, OnDestroy {

    public constructor(
        private _photoService: PhotoService,
        private _activatedRoute: ActivatedRoute
    ) {
    }

    private library: string;
    private photo: string;

    private _parameterSubscription: Subscription;

    public ngOnDestroy() {
        this._parameterSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this._parameterSubscription = this._activatedRoute.params.subscribe(params => {
            this.library = params['library'];
            this.photo = params['photo'];
        });

    }

    public imagePath: string;
}