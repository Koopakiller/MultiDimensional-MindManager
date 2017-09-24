/// <reference path="../../../dev/typings/office-js/index.d.ts"/>

import { Injectable } from "@angular/core";

@Injectable()
export class OfficeService {

    insertQRCode(url: string) {
        console.log("Inserting code...");
        if (Office.CoercionType.Ooxml) {
            Office.context.document.setSelectedDataAsync(
                "<img src='" + url + "' alt='QR Code' width='200' height='200' />",
                { coercionType: "html" },
                function (asyncResult) {
                    if (asyncResult.status.toString() == "failed") {
                        console.log("please copy manual to your document.");
                    }
                    else {
                        console.log("inserted QR code.");
                    }
                });
        }
        else {
            console.log("Your office does not support inserting images bei this app. copy it manual.");
        }
    }

}
