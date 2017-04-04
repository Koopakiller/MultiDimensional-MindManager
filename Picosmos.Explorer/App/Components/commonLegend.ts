import { Component } from "@angular/core";


@Component({
    selector: "common-legend",
    templateUrl: "/Templates/CommonLegend"
})
export class CommonLegendComponent {
    public isExpanded: boolean = true;

    public toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }
}
