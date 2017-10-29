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
		this.dimensions = this._dataService.data.dimensions.map(x => new DimensionModel(x.name));
	}

	public dimensions: DimensionModel[];

	public changed(name: string) {
		this._dataService.toggleDimension(name);
		this.disableUncheckedDimensions = this._dataService.getEnabledDimensions().length == 3;
	}

	public disableUncheckedDimensions: boolean = false;
}

class DimensionModel {
	public constructor(
		public name: string
	) {
	}

	public isChecked: boolean = false;
}