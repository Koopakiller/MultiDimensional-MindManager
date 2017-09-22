import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";

@Component({
    selector: "notification",
    templateUrl: "Notification.html",
    styleUrls: [
        "Notification.less"
    ]
})
export class NotificationComponent {
    public text: string = "Lorem Ipsum dolor sit amet";
    public header: string = "Info";
    public isVisible: boolean = true;

    public close(){
        this.isVisible = false;
    }
}