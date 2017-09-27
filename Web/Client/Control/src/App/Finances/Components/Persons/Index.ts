import { Component, OnInit } from "@angular/core";
import { AddComponent } from "./Add";

@Component({
    templateUrl: "Index.html"
})
export class IndexComponent {

    public static RoutingInformation(path: string = "Persons") {
        return {
            path: path,
            component: IndexComponent,
            children: [
                AddComponent.RoutingInformation()
            ]
        };
    }

}