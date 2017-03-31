import { Component } from "@angular/core";

import "/App/DatabaseObjects.js";

@Component({
    selector: "app",
    templateUrl: "/Templates/App"
})
export class AppComponent {
    name = "Angular";

    public onLoadData(col: DatasetIdentifier) {
        alert(col.tableName + "." + col.columnName + "=" + col.columnValue);
    }
}
