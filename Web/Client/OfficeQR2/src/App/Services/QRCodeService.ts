import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Http } from "@angular/http";

@Injectable()
export class QRCodeService {
    constructor(
        private _http: Http
    ){        
    }

    public getCodeUrl(dataString: string, size: number, ecc: QRCodeErrorCorrectionCodes, color: string, bgcolor: string, margin: number, qzone: number, fileFormat: QRCodeFileFormat){
        let url = `https://api.qrserver.com/v1/create-qr-code/`;
        url += `?size=${size}x${size}`;
        url += `&data=${encodeURI(dataString)}`;
        url += `&ecc=${ecc}`;
        url += `&color=${color}`;
        url += `&bgcolor=${bgcolor}`;
        url += `&margin=${margin}`;
        url += `&qzone=${qzone}`;
        url += `&fileFormat=${fileFormat}`;
        return url;
    }
}

export enum QRCodeErrorCorrectionCodes{
    L,
    M,
    Q,
    H
}

export enum QRCodeFileFormat{
    eps,
    svg,
    jpeg, jpg,
    png,
    gif
}