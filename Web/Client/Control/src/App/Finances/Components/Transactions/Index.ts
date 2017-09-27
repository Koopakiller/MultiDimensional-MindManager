import { Component } from "@angular/core";
import { OverviewComponent } from "./Overview";
import { AddComponent } from "./Add";

@Component({
    templateUrl: "Index.html"
})
export class IndexComponent {

    public static RoutingInformation(path: string = "Transactions") {
        return {
            path: path,
            component: IndexComponent,
            children: [
                OverviewComponent.RoutingInformation(),
                AddComponent.RoutingInformation()
            ]
        };
    };

}