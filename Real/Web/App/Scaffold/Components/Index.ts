import { Component, OnDestroy, OnInit } from "@angular/core";
import { GlobalLoadingIndicatorService } from "../../Shared/Services/GlobalLoadingIndicatorService.js";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { NavigationService } from "../../Shared/Services/NavigationService.js";

@Component({
    selector: "app",
    templateUrl: "/App/Scaffold/Templates/Index.html"
})
export class IndexComponent{
}
