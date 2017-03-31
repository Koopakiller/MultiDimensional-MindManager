import { Component } from "@angular/core";

import "/App/DatabaseObjects.js";

@Component({
    selector: "app",
    templateUrl: "/Templates/App"
})
export class AppComponent {
    dataset: DatasetIdentifier;

    public onLoadData(col: DatasetIdentifier) {
        this.dataset = col;
    }
}
