import { Component, OnDestroy, OnInit, HostListener, ElementRef, ViewChild } from "@angular/core";
import * as THREE from "three";
import { PhotoService } from "../Services/PhotoService";
import { Subject } from "rxjs/Rx"
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "Library.html",
    styleUrls: [
        "Library.less"
    ]
})
export class LibraryComponent implements OnInit, OnDestroy {

    public constructor(
        private _photoService: PhotoService,
        private _activatedRoute: ActivatedRoute
    ) {
    }

    public library: string;
    public photos: string[];

    private _parameterSubscription: Subscription;

    public ngOnDestroy() {
        this._parameterSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this._parameterSubscription = this._activatedRoute.params.subscribe(params => {
            this.library = params['library'];
            this._photoService.getPhotos(this.library).subscribe(list=>{
                this.photos = list;
            });
        });

    }

    public imagePath: string;
}