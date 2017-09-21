import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { DataInputComponentBase } from "./DataInputComponentBase";
import { Router, ActivatedRoute } from "@angular/router";
import { InputService } from "../../Services/InputService";

@Component({
    templateUrl: "VCardForm.html"
})
export class VCardFormComponent extends DataInputComponentBase implements OnInit {
    constructor(
        router: Router,
        activatedRoute: ActivatedRoute,
        inputService: InputService
    ) {
        super(router, activatedRoute, inputService);
    }

    public title: string;
    public firstName: string;
    public middleName: string;
    public lastName: string;

    public company: string;
    public jobRole: string;
    public jobTitle: string;

    public phoneNumberWork: string;
    public phoneNumberHome: string;

    public addressStreetAndNumber: string;
    public addressZip: string;
    public addressCity: string;
    public addressCountry: string;

    public email: string;
    public url: string;

    public updateData() {
        let data = "";
        data += `BEGIN:VCARD\n`;
        data += `VERSION:4.0\n`;
        data += `N:${this.lastName};${this.firstName};${this.middleName};${this.title}\n`;
        data += `FN:${this.concat([this.title, this.firstName, this.middleName, this.lastName], " ")}\n`

        if (this.company) {
            data += `ORG:${this.company}\n`;
        }
        if (this.jobRole) {
            data += `ROLE:${this.jobRole}\n`;
        }
        if (this.jobTitle) {
            data += `TITLE:${this.jobTitle}\n`;
        }

        if (this.phoneNumberWork) {
            data += `TEL;TYPE=work,voice;VALUE=uri:tel:${this.phoneNumberWork}\n`;
        }
        if (this.phoneNumberHome) {
            data += `TEL;TYPE=home,voice;VALUE=uri:tel:${this.phoneNumberHome}\n`;
        }

        if (this.addressStreetAndNumber || this.addressZip || this.addressCity || this.addressCountry) {
            data += `ADR;TYPE=home;LABEL="${this.concat([this.addressStreetAndNumber, this.addressZip + " " + this.addressCity, this.addressCountry], "\n")}"\n`
            data += `:;;${this.addressStreetAndNumber};${this.addressCity};;${this.addressZip};${this.addressCountry}\n`
        }

        if (this.email) {
            data += `EMAIL:${this.email}\n`;
        }
        if (this.url) {
            data += `URL:${this.url}\n`;
        }

        data += `REV:${this.getTimeStamp(new Date())}\n`
        data += `END:VCARD`

        this._inputService.provideDataString(data);
    }

    private concat(parts: string[], seperator: string): string {
        let result = "";
        for (let part of parts) {
            if (part && part != "") {
                result = result + seperator + part;
            }
        }
        return result.length > 0 ? result.substr(seperator.length) : "";
    }

    private getTimeStamp(date: Date) {
        return `${date.getUTCFullYear()}${date.getUTCMonth()}${date.getUTCDate()}T`
            + `${date.getUTCHours()}${date.getUTCMinutes()}${date.getUTCSeconds()}Z`
    }

    public ngOnInit(): void {
        this.updateData();
    }
}
