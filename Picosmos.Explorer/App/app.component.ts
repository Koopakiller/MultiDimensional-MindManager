import { Component } from "@angular/core";

import "/App/DatabaseObjects.js";
import DataTableComponent = require("./dataTable.component.js");

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
