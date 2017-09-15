import * as moment from "moment";

export interface IDataParser {
    parseNumber(value: string): number;
    parseTimeStamp(dateTime: string, format: string): moment.Moment;
}

export class GermanDataParser implements IDataParser {

    parseNumber(value: string): number {
        if (!value) {
            return null;
        }
        return Number(value.replace(/,/g, "."));
    }

    parseTimeStamp(dateTime: string, format: string): moment.Moment {
        try {
            let m = moment.utc(dateTime, format, false);
            if (!m.isValid()) {
                console.warn("Cannot parse TimeStamp. dateTime=" + dateTime + "; format=" + format);
                return null;
            }
            return m;
        }
        catch (ex) {
            console.warn(ex);
            return null;
        }
    }
}