import { Component } from "@angular/core";

import "/App/Model/DatabaseObjects.js";
import DataTableComponent = require("./dataTable.js");

@Component({
    selector: "app",
    templateUrl: "/Templates/App"
})
export class AppComponent {
    public dataset: DatasetIdentifier;
    public dataTableStartKind = DataTableComponent.DataTableKinds.self;

    public onLoadData(col: DatasetIdentifier) {
        this.dataset = col;
    }
}
