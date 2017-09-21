import { QRCodeErrorCorrectionCodes } from "./QRCodeErrorCorrectionCodes";


export class QRCodeSettings {
    public color: string = "#000000";
    public bgcolor: string = "#FFFFFF";
    public ecc: QRCodeErrorCorrectionCodes = QRCodeErrorCorrectionCodes.L;
}