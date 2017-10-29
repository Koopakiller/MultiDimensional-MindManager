import { Component, OnDestroy, OnInit, HostListener, ElementRef, ViewChild } from "@angular/core";
import * as THREE from "three";
import { DataService } from "../Services/DataService";


@Component({
	selector: "dimensions",
	templateUrl: "Dimensions.html",
	styleUrls: [
		"Dimensions.less"
	]
})
export class DimensionsComponent implements OnInit {

	public constructor(
		private _dataService: DataService
	) {

	}

	ngOnInit(): void {
		this.dimensions = this._dataService.data.dimensions;
	}

	public dimensions: any[];

	public changed(name: string) {
		this._dataService.toggleDimension(name);
	}

	public get disableUncheckedDimensions(): boolean{
		return this._dataService.getEnabledDimensions().length == 3;
	}
}