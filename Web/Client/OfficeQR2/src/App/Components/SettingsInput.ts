import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../Services/InputService";

@Component({
    selector: "settings-input",
    templateUrl: "SettingsInput.html"
})
export class SettingsInputComponent implements OnInit{
    constructor(
        private _inputService: InputService
    ) {
    }

    public updateData(){
    }

    public ngOnInit(): void {
    }
}
