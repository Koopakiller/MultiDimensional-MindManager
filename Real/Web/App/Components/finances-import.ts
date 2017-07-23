import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyViewModel, UserViewModel, TransactionViewModel, KeyValuePair } from "../ViewModels/FinancesViewModels.js";
import { FinanceEntryServerModel } from "../ServerModels/FinancesServerModels.js";
import { Router } from '@angular/router';
import * as Papa from "papaparse";

@Component({
    selector: "finances-import",
    templateUrl: "/Templates/FinancesImport"
})
export class FinancesImportComponent implements OnInit {
    constructor(
        private financesService: FinancesService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initCurrentStep();
        this.possibleFileTypes = [
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank Giro Account Statement CSV Export", mode: "recommended", method: "importCommerzbankGiroAccountStatement" },
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank Credit Card Statement CSV Export", mode: "not-implemented", method: "importCommerzbankCreditCardStatement" },
            { extension: "csv", provider: "PayPal", description: "Paypal (German) \"Guthaben-relevante Zahlungen (CSV, Komma getrennt)\" Export", mode: "not-implemented", method: "importPayPalAccountStatement" },
            { extension: "xml", provider: "Finances", description: "Excel Form XML Export", mode: "not-implemented", method: "" },
        ];
    }

    possibleFileTypes: any[];

    selectedFile: File;

    processFileInputChange($event: any): void {
        var inputValue = $event.target;

        if ($event.target.files.length > 0) {
            this.nextStep();

            this.selectedFile = inputValue.files[0];
        }
    }

    import(index: number): void {
        this.nextStep();
        this[this.possibleFileTypes[index].method]();
    }

    importCommerzbankGiroAccountStatement(): void {
        let result = Papa.parse(this.selectedFile, {
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
                    tvm.timeStamp = this.parseGermanTimeStamp(row["Wertstellung"]);
                    tvm.note = row["Buchungstext"];
                    tvm.value = this.parseGermanNumber(row["Betrag"]);
                    this.addRawData(tvm, row, result.meta.fields);
                    this.transactions.push(tvm);
                }
            }
        });
    } 

    importCommerzbankCreditCardStatement(): void{
        let result = Papa.parse(this.selectedFile, {
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
                    tvm.timeStamp = this.parseGermanTimeStamp(row["Buchungstag"]);
                    tvm.note = row["Unternehmen"];
                    tvm.value = this.parseGermanNumber(row["Betrag"]);
                    this.addRawData(tvm, row, result.meta.fields);
                    this.transactions.push(tvm);
                }
            }
        });
    }

    importPayPalAccountStatement(): void{
        let result = Papa.parse(this.selectedFile, {
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
                    if(!row[" Netto"] || row[" Netto"] == ""){
                        continue;
                    }
                    var tvm = new TransactionViewModel();
                    tvm.timeStamp = this.parseGermanTimeStamp(row["Datum"], row[" Zeit"], row[" Zeitzone"]);
                    tvm.note = row[" Name"] + " " + row[" Typ"] + (row[" Artikelbezeichnung"] ? " " + row[" Artikelbezeichnung"]: "" );
                    tvm.value = this.parseGermanNumber(row[" Netto"]);                    
                    this.addRawData(tvm, row, result.meta.fields);
                    this.transactions.push(tvm);
                }
            }
        });
    }

    addRawData(tvm: TransactionViewModel, row: any, keys: string[]){
        for(let key of keys){
            if(key && row[key] && row[key] != ""){
                tvm.rawData.push(new KeyValuePair<string, string>(key, row[key]));
            }
        }
    }

    // TODO: respect timeZone parameter 
    parseGermanTimeStamp(date: string, time: string = "00:00:00", timeZone: string = "") {
        if (!date) {
            return null;
        }
        var dateParts = date.split(".");
        var timeParts = time.split(":");
        return new Date(+dateParts[2], +dateParts[1], +dateParts[0], +timeParts[0], +timeParts[1], +timeParts[2]);
    }

    parseGermanNumber(str: string) {
        if (!str) {
            return null;
        }
        return Number(str.replace(/,/g, "."));
    }

    transactions: TransactionViewModel[] = [];



    currentStep: string;
    steps = [
        "fileSelect",
        "fileTypeSelect",
        "showAndFitData"
    ]
    initCurrentStep() {
        this.currentStep = this.steps[0];
    }
    nextStep() {
        this.currentStep = this.steps[this.steps.indexOf(this.currentStep) + 1];
    }
}