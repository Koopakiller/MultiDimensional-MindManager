import { Component, OnDestroy, OnInit, HostListener, ElementRef, ViewChild } from "@angular/core";
import * as THREE from "three";
import { PhotoService, Library } from "../Services/PhotoService";
import { Subject } from "rxjs/Rx"
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "Index.html",
    styleUrls: [
        "Index.less"
    ]
})
export class IndexComponent implements OnInit {

    public constructor(
        private _photoService: PhotoService,
        private _activatedRoute: ActivatedRoute
    ) {
    }

    public libraries: Library[]

    private path: string;

    ngOnInit(): void {
        this._photoService.getLibraries().subscribe(x => {
            this.libraries = x;
        });

    }

    public imagePath: string;
}