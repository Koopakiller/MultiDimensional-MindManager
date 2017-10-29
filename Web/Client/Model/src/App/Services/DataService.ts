import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    public data = {
        "dimensions": [
            {
                "name": "A",
                "description": "Rationales Ich",
                "point": [0, -1, 0, 0],
                "color": 0xffff00,
                "dimension": 2
            },
            {
                "name": "B",
                "description": "Emotionales Ich",
                "point": [0, 0, 0, 0],
                "color": 0xff00ff,
                "dimension": 1
            },
            {
                "name": "C",
                "description": "Körperliches Ich",
                "point": [0, 0, 1, 0],
                "color": 0x00ff00,
                "dimension": 3
            },
            {
                "name": "D",
                "description": "Test",
                "point": [0, 0, 0, 1],
                "color": 0x808080,
                "dimension": 4
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
        console.log(name);
        console.log(this._enabledDimensions);
        console.log(this._enabledDimensions.indexOf(name));
        if (this._enabledDimensions.indexOf(name) >= 0) {
            this._enabledDimensions.splice(this._enabledDimensions.indexOf(name), 1);
        }
        else {
            this._enabledDimensions.push(name);
        }
        console.log(this._enabledDimensions);
    }

    public getAllDimensions() {
        return this.data.dimensions;
    }

    public getEnabledDimensions() {
        return this.data.dimensions.filter(x => this._enabledDimensions.indexOf(x.name) >= 0);
    }

}
