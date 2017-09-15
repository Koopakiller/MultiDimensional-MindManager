"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var GermanDataParser = (function () {
    function GermanDataParser() {
    }
    GermanDataParser.prototype.parseNumber = function (value) {
        if (!value) {
            return null;
        }
        return Number(value.replace(/,/g, "."));
    };
    GermanDataParser.prototype.parseTimeStamp = function (dateTime, format) {
        try {
            var m = moment.utc(dateTime, format, false);
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
    };
    return GermanDataParser;
}());
exports.GermanDataParser = GermanDataParser;
