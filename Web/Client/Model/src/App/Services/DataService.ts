import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    public constructor() {
        this._enabledDimensions = this.data.dimensions.filter(x => x.isChecked).map(x => x.name);
    }

    public data = {
        "dimensions": [
            {
                "name": "A",
                "description": "Rationales Ich",
                "point": [0, -1, 0, 0],
                "color": 0xffff00,
                "dimension": 2,
                "isChecked": true
            },
            {
                "name": "B",
                "description": "Emotionales Ich",
                "point": [0, 0, 0, 0],
                "color": 0xff00ff,
                "dimension": 1,
                "isChecked": true
            },
            {
                "name": "C",
                "description": "Körperliches Ich",
                "point": [0, 0, 1, 0],
                "color": 0x00ff00,
                "dimension": 3,
                "isChecked": true
            },
            {
                "name": "D",
                "description": "Test",
                "point": [0, 0, 0, 1],
                "color": 0x808080,
                "dimension": 4,
                "isChecked": false
            }
        ],
        "drugs": [
            {
                "name": "Ecstasy",
                "polygons": [
                    ["A", "", ""],
                    ["", "B", ""]
                ]
            }
        ]
    };


    private _enabledDimensions: string[] = [];

    public toggleDimension(name: string) {
        if (this._enabledDimensions.indexOf(name) >= 0) {
            this._enabledDimensions.splice(this._enabledDimensions.indexOf(name), 1);
        }
        else {
            if (this._enabledDimensions.length <= 3) {
                this._enabledDimensions.push(name);
            }
        }
    }

    public getAllDimensions() {
        return this.data.dimensions;
    }

    public getEnabledDimensions() {
        return this.data.dimensions.filter(x => this._enabledDimensions.indexOf(x.name) >= 0);
    }

}

