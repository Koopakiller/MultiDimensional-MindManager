import { QRCodeErrorCorrectionCodes } from "./QRCodeErrorCorrectionCodes";


export class QRCodeSettings {
    public color: string;
    public bgcolor: string;
    public ecc: QRCodeErrorCorrectionCodes;

    public static Default(): QRCodeSettings {
        let result = new QRCodeSettings();
        result.color = "#000000";
        result.bgcolor = "#FFFFFF";
        result.ecc = QRCodeErrorCorrectionCodes.L;
        return result;
    };
}