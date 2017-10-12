import { DBValueProvider } from "./DBValueProvider";
import { TransactionViewModel } from "../Models/FinancesModels";
import { KeyValuePair } from "../../Common/KeyValuePair";
import { IDataParser } from "./Parser";
import * as Papa from "papaparse";
import * as moment from "moment";

export abstract class FinanceAccountStatementImporter {

    public dataParser: IDataParser;
    public dbValueProvider: DBValueProvider;

    protected _transactions: TransactionViewModel[];

    public get transactions(): TransactionViewModel[] {
        return this._transactions;
    }

    public abstract readFile(file: File): void;

    protected addRawData(tvm: TransactionViewModel, row: any, keys: string[]) {
        for (let key of keys) {
            if (key && row[key] && row[key] != "") {
                tvm.rawData.push(new KeyValuePair<string, string>(key, row[key]));
            }
        }
    }

    protected assignTimeStamp(tvm: TransactionViewModel, timeStamp: moment.Moment, includeTime: boolean): TransactionViewModel {
        tvm.timeStampDate = new Date(Date.UTC(
            timeStamp.year(),
            timeStamp.month(),
            timeStamp.date(),
            0, 0, 0, 0));
        if (includeTime) {
            tvm.timeStampTime = new Date(Date.UTC(
                0, 0, 0,
                timeStamp.hour(),
                timeStamp.minute(),
                timeStamp.second(),
                timeStamp.millisecond()));
        }
        else {
            tvm.timeStampTime = null;
        }
        tvm.includeTimeStampTime = includeTime;
        return tvm;
    }
}

export class CommerzbankCreditCardStatementImporter extends FinanceAccountStatementImporter {

    readFile(file: File): void {
        this._transactions = [];
        let result = Papa.parse(file, {
            delimiter: ";",
            header: true,
            skipEmptyLines: true,
            encoding: "utf-8",
            complete: (result) => {
                // it is a german localized file format:
                // Date format: dd.mm.yyyy
                // Number format: xxx,xx
                for (let row of result.data) {
                    var tvm = new TransactionViewModel();
                    let timeStamp = this.dataParser.parseTimeStamp(row["Buchungstag"], "DD.MM.YYYY");
                    tvm = this.assignTimeStamp(tvm, timeStamp, false);
                    tvm.note = row["Unternehmen"];
                    tvm.value = this.dataParser.parseNumber(row["Betrag"]);
                    tvm.personId = this.dbValueProvider.getPersonIdFromName(row["Unternehmen"]);
                    tvm.suggestedPersonName = row["Unternehmen"];
                    tvm.currencyAccountId = this.dbValueProvider.getCurrencyAccountIdFromName("Kreditkarte", "EUR");
                    this.addRawData(tvm, row, result.meta.fields);
                    this._transactions.push(tvm);
                }
            }
        });
    }
}

export class CommerzbankGiroAccountStatementImporter extends FinanceAccountStatementImporter {

    readFile(file: File): void {
        this._transactions = [];
        let result = Papa.parse(file, {
            delimiter: ";",
            header: true,
            skipEmptyLines: true,
            encoding: "utf-8",
            complete: (result) => {
                // it is a german localized file format:
                // Date format: dd.mm.yyyy
                // Number format: xxx,xx
                for (let row of result.data) {
                    if(!row["Wertstellung"]){
                        // skip listed but not booked transactions
                        continue;
                    }
                    var tvm = new TransactionViewModel();
                    let timeStamp = this.dataParser.parseTimeStamp(row["Wertstellung"], "DD.MM.YYYY");
                    tvm = this.assignTimeStamp(tvm, timeStamp, false);
                    tvm.note = row["Buchungstext"];
                    tvm.value = this.dataParser.parseNumber(row["Betrag"]);
                    tvm.personId = this.dbValueProvider.getPersonIdFromName(row["Buchungstext"]);
                    tvm.currencyAccountId = this.dbValueProvider.getCurrencyAccountIdFromName("Konto", "EUR");
                    this.addRawData(tvm, row, result.meta.fields);
                    this._transactions.push(tvm);
                }
            }
        });
    }
}

export class PayPalAccountStatementImporter extends FinanceAccountStatementImporter {

    readFile(file: File): void {
        this._transactions = [];
        let result = Papa.parse(file, {
            delimiter: ",",
            header: true,
            skipEmptyLines: true,
            encoding: "ISO-8859-15",
            complete: (result) => {
                // it is a german localized file format:
                // Date format: dd.mm.yyyy
                // Time format: hh:mm:ss
                // Number format: xxx,xx
                // Attention: PayPals CSV contains spaces before the header-names
                for (let row of result.data) {
                    if (!row[" Netto"] || row[" Netto"] == "") {
                        continue;
                    }
                    var tvm = new TransactionViewModel();
                    let timeStampString = row["Datum"] + (row[" Zeit"] ? " " + row[" Zeit"] : "");
                    let timeStampFormat = "DD.MM.YYYY" + (row[" Zeit"] ? " HH:mm:ss" : "")
                    let timeStamp = this.dataParser.parseTimeStamp(timeStampString, timeStampFormat);
                    tvm = this.assignTimeStamp(tvm, timeStamp, row[" Zeit"] != "");
                    tvm.note = row[" Name"] + " " + row[" Typ"] + (row[" Artikelbezeichnung"] ? " " + row[" Artikelbezeichnung"] : "");
                    tvm.value = this.dataParser.parseNumber(row[" Netto"]);
                    let name = this.tryGetPayPal(row[" Name"]);
                    tvm.personId = this.dbValueProvider.getPersonIdFromName(name);
                    tvm.suggestedPersonName = name;
                    tvm.currencyAccountId = this.dbValueProvider.getCurrencyAccountIdFromName("PayPal", row[" Währung"]);
                    this.addRawData(tvm, row, result.meta.fields);
                    this._transactions.push(tvm);
                }
            }
        });
    }

    private tryGetPayPal(name: string){
        //TODO: move to DBValueProvider/IDataParser
        if(name == "von Euro" || name == "in US Dollar" || name == "Kredikarte" || name=="Bankkonto (Lastschrift)"){
            return "PayPal";
        }
        return name;
    }
}

export class FinancesCsvImporter extends FinanceAccountStatementImporter {

    readFile(file: File): void {
        this._transactions = [];
        let result = Papa.parse(file, {
            delimiter: ",",
            header: true,
            skipEmptyLines: true,
            encoding: "utf-8",
            complete: (result) => {
                // it is a german localized file format:
                // Date format: dd.mm.yyyy
                // Number format: xxx,xx
                for (let row of result.data) {
                    var tvm = new TransactionViewModel();
                    let timeStampString = row["Date"] + (row["Time"] ? " " + row["Time"] : "");
                    let timeStampFormat = "MM/DD/YYYY" + (row["Time"] ? " hh:mm:ss A" : "")
                    let timeStamp = this.dataParser.parseTimeStamp(timeStampString, timeStampFormat);
                    tvm = this.assignTimeStamp(tvm, timeStamp, false);
                    tvm.note = row["Description"];
                    tvm.value = this.dataParser.parseNumber(row["Value"]);
                    tvm.personId = this.dbValueProvider.getPersonIdFromName(row["Person"]);
                    tvm.suggestedPersonName = row["Person"];
                    tvm.currencyAccountId = this.dbValueProvider.getCurrencyAccountIdFromName(row["Account"], row["Currency"]);
                    this.addRawData(tvm, row, result.meta.fields);
                    this._transactions.push(tvm);
                }
            }
        });
    }
}