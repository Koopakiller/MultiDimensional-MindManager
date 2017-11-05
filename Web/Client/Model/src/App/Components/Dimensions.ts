import { Component, OnDestroy, OnInit, HostListener, ElementRef, ViewChild, Input } from "@angular/core";
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

	@Input()
	public path: string;

	ngOnInit(): void {
		this._dataService.getDynamicModelData(this.path).subscribe(x => this.dimensions = x.dimensions);
	}

	public dimensions: any[];

	public changed(name: string) {
		this._dataService.toggleDimension(name, this.path);
		return this._dataService.getEnabledDimensions(this.path).subscribe(x => {
			this._disableUncheckedDimensions = x.length == 3;
		});
	}

	private _disableUncheckedDimensions: boolean;
	public get disableUncheckedDimensions(): boolean {
		return this._disableUncheckedDimensions;
	}
}