import { Component, Input } from "@angular/core";
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
    selector: "data-table",
    templateUrl: "/Templates/DataTable"
})
export class InitialSelectorComponent {
    @Input() tableName: string;
    @Input() tableColumn: string;
    @Input() tableColumnValue: string;
}
