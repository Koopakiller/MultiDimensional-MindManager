import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyViewModel, UserViewModel, TransactionViewModel } from "../ViewModels/FinancesViewModels.js";
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
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank CSV Export", mode: "recommended", method: "importCommerzbank" },
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank Credit Card CSV Export", mode: "not-implemented", method: "" },
            { extension: "csv", provider: "PayPal", description: "Paypal CSV Export", mode: "not-implemented", method: "" },
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

    importCommerzbank(): void {
        let result = Papa.parse(this.selectedFile, {
            delimiter: ";",
            header: true, 
            complete: (result) => {
                // it is a german localized file format:
                // Date format: dd.mm.yyyy
                // Number format: xxx,xx
                for (let row of result.data) { 
                    var tvm = new TransactionViewModel();
                    tvm.timeStamp = this.parseGermanTimeStamp(row["Wertstellung"]);
                    tvm.note = row["Buchungstext"];
                    tvm.value = this.parseGermanNumber(row["Betrag"]);
                    this.transactions.push(tvm);
                }
            }
        });
    }

    parseGermanTimeStamp(str: string) {
        if(!str){
            return null;
        }
        var parts = str.split(".");
        return new Date(+parts[2], +parts[1], +parts[0]);
    }

    parseGermanNumber(str: string){
        if(!str){
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