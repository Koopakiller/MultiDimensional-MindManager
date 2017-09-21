import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Http } from "@angular/http";
import { QRCodeConfig } from "./InputService";
import { QRCodeFileFormat } from "../Model/QRCodeFileFormat";


@Injectable()
export class QRCodeService {
    constructor(
        private _http: Http
    ){        
    }

    public getCodeUrl(config: QRCodeConfig){
        const size: number = 150;
        const margin: number = 0;
        const qzone: number = 0;
        const fileFormat: QRCodeFileFormat = QRCodeFileFormat.png;

        let url = `https://api.qrserver.com/v1/create-qr-code/`;
        url += `?size=${size}x${size}`;
        url += `&data=${encodeURI(config.dataString)}`;
        url += `&ecc=${config.settings.ecc}`;
        url += `&color=${config.settings.color.replace("#", "")}`;
        url += `&bgcolor=${config.settings.bgcolor.replace("#", "")}`;
        url += `&margin=${margin}`;
        url += `&qzone=${qzone}`;
        url += `&fileFormat=${fileFormat}`;
        return url;
    }
}
