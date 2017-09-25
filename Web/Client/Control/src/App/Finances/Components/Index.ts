import { Component } from "@angular/core";

import { IndexComponent as TransactionIndexComponent } from "./Transactions/Index";
import { IndexComponent as ImportIndexComponent } from "./Import/Index";
import { IndexComponent as PersonsIndexComponent } from "./Persons/Index";
import { IndexComponent as UserGroupsIndexComponent } from "./UserGroups/Index";
import { IndexComponent as UsersIndexComponent } from "./Users/Index";
import { IndexComponent as AuthenticationIndexComponent } from "./Authentication/Index";

@Component({
    templateUrl: "Index.html"
})
export class IndexComponent {

    public static RoutingInformation(path: string = "") {
        return {
            path: path,
            component: IndexComponent,
            children: [
                TransactionIndexComponent.RoutingInformation(),
                ImportIndexComponent.RoutingInformation(),
                PersonsIndexComponent.RoutingInformation(),
                UserGroupsIndexComponent.RoutingInformation(),
                UsersIndexComponent.RoutingInformation(),
                AuthenticationIndexComponent.RoutingInformation()
            ]
        };
    }

}     