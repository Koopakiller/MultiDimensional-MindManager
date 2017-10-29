import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

    public data = {
        "dimensions": [
            {
                "name": "A",
                "description": "Rationales Ich",
                "point": [0, -1, 0],
                "color": 0xffff00
            },
            {
                "name": "B",
                "description": "Emotionales Ich",
                "point": [0, 0, 0],
                "color": 0xff00ff
            },
            {
                "name": "C",
                "description": "Körperliches Ich",
                "point": [0, 0, 1],
                "color": 0x00ff00
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

}