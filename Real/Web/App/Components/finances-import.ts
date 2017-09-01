import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel } from "../ViewModels/FinancesViewModels.js";
import { Router } from '@angular/router';
import * as Papa from "papaparse";
import { KeyValuePair } from "../Common/KeyValuePair.js";
import { PageComponentBase } from "../Common/PageComponentBase.js";
import { GlobalLoadingIndicatorService } from "../Services/GlobalLoadingIndicatorService.js";

@Component({
    selector: "finances-import",
    templateUrl: "/Templates/FinancesImport"
})
export class FinancesImportComponent implements OnInit {
    constructor(
        private financesService: FinancesService,
        private router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    ngOnInit(): void {
        this.initCurrentStep();
        this.possibleFileTypes = [
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank Giro Account Statement CSV Export", mode: "recommended", method: "importCommerzbankGiroAccountStatement" },
            { extension: "csv", provider: "Commerzbank", description: "Commerzbank Credit Card Statement CSV Export", mode: "not-implemented", method: "importCommerzbankCreditCardStatement" },
            { extension: "csv", provider: "PayPal", description: "Paypal (German) \"Guthaben-relevante Zahlungen (CSV, Komma getrennt)\" Export", mode: "not-implemented", method: "importPayPalAccountStatement" },
            { extension: "xml", provider: "Finances", description: "Excel Form XML Export", mode: "not-implemented", method: "" },
        ];
        this._globalLoadingIndicatorService.addLoadingProcess();
        this.financesService.persons.subscribe(x => {
            this.persons = x;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this._globalLoadingIndicatorService.addLoadingProcess();
        this.financesService.users.subscribe(x => {
            this.users = x;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    }

    persons: PersonViewModel[];
    users: UserViewModel[];
    currencyAccounts: CurrencyAccountViewModel[];

    possibleFileTypes: any[];

    _selectedUser: number;
    get selectedUser() {
        return this._selectedUser;
    }
    set selectedUser(value: number) {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._selectedUser = value;
        this.financesService.getCurrencyAccounts(value).subscribe(x => {
            this.currencyAccounts = x;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    }

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

    getPersonIdFromName(name: string) {
        let sortedPersons = this.persons.slice();
        sortedPersons.sort((a, b) => a.header.length - b.header.length 
                                  || a.header.localeCompare(b.header));
     
        for (let person of sortedPersons) {
            if (person.header.toUpperCase() === name.toUpperCase()) {
                return person.id;
            }
        }
        for (let person of sortedPersons) {
            if (name.indexOf(person.header) >= 0) {
                return person.id; // in case the person name is in another text like a description or similar
            }
        }
        return null;
    }

    getCurrencyAccountIdFromName(name: string, currency: string): number {
        let sortedCAs = this.currencyAccounts.slice();
        sortedCAs.sort((a, b) => a.accountName.length - b.accountName.length 
                              || a.accountName.localeCompare(b.accountName));

        for (let ca of sortedCAs) {
            if (ca.accountName.toUpperCase() === name.toUpperCase()
                && ca.currencySymbols.indexOf(currency) >= 0) {
                return ca.id;
            }
        }
        for (let ca of sortedCAs) {
            if (ca.accountName.toUpperCase().indexOf(name.toUpperCase()) >= 0
                && ca.currencySymbols.indexOf(currency) >= 0) {
                return ca.id;
            }
        }
        return null;
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
                    tvm.timeStampDate = this.parseGermanTimeStamp(row["Wertstellung"]);
                    tvm.note = row["Buchungstext"];
                    tvm.value = this.parseGermanNumber(row["Betrag"]);
                    tvm.personId = this.getPersonIdFromName(row["Buchungstext"]);
                    tvm.currencyAccountId = this.getCurrencyAccountIdFromName("Konto", "EUR");
                    this.addRawData(tvm, row, result.meta.fields);
                    this.transactions.push(tvm);
                }
            }
        });
    }

    importCommerzbankCreditCardStatement(): void {
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
                    tvm.timeStampDate = this.parseGermanTimeStamp(row["Buchungstag"]);
                    tvm.note = row["Unternehmen"];
                    tvm.value = this.parseGermanNumber(row["Betrag"]);
                    tvm.personId = this.getPersonIdFromName(row["Unternehmen"]);
                    tvm.suggestedPersonName = row["Unternehmen"];
                    tvm.currencyAccountId = this.getCurrencyAccountIdFromName("Kreditkarte", "EUR");
                    this.addRawData(tvm, row, result.meta.fields);
                    this.transactions.push(tvm);
                }
            }
        });
    }

    importPayPalAccountStatement(): void {
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
                    if (!row[" Netto"] || row[" Netto"] == "") {
                        continue;
                    }
                    var tvm = new TransactionViewModel();
                    tvm.timeStampDate = tvm.timeStampTime = this.parseGermanTimeStamp(row["Datum"], row[" Zeit"], row[" Zeitzone"]);
                    tvm.note = row[" Name"] + " " + row[" Typ"] + (row[" Artikelbezeichnung"] ? " " + row[" Artikelbezeichnung"] : "");
                    tvm.value = this.parseGermanNumber(row[" Netto"]);
                    tvm.personId = this.getPersonIdFromName(row[" Name"]);
                    tvm.suggestedPersonName = row[" Name"];
                    tvm.currencyAccountId = this.getCurrencyAccountIdFromName("PayPal", row[" Währung"]);
                    this.addRawData(tvm, row, result.meta.fields);
                    this.transactions.push(tvm);
                }
            }
        });
    }

    addRawData(tvm: TransactionViewModel, row: any, keys: string[]) {
        for (let key of keys) {
            if (key && row[key] && row[key] != "") {
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

    // Show Details (additional/raw data) of a Transaction ###########################################
    shownRawData: KeyValuePair<string, string>[];
    lastIndexShownDetails: number = -1;
    toggleDetails(i: number): void {
        if (this.transactions[i].showDetails) {
            this.transactions[i].showDetails = false;
            this.shownRawData = null;
            this.lastIndexShownDetails = -1;
        }
        else {
            if (this.lastIndexShownDetails >= 0) {
                this.transactions[this.lastIndexShownDetails].showDetails = false;
            }
            this.transactions[i].showDetails = true;
            this.shownRawData = this.transactions[i].rawData;
            this.lastIndexShownDetails = i;
        }
    }

    // Navigation ####################################################################################
    currentStep: string;
    steps = [
        "userSelect",
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

    // Add Person ####################################################################################
    addPerson(name: string = ""): void {
        this.showAddPersonPopup = true;
        this.suggestedNewPersonName = name;
    }
    closeAddPersonPopup(pvm: PersonViewModel) {
        this.showAddPersonPopup = false;
        this.suggestedNewPersonName = "";
        if (pvm) {
            this.persons.push(pvm);
            for (let transaction of this.transactions) {
                if (transaction.suggestedPersonName === pvm.header && !transaction.personId) {
                    transaction.personId = pvm.id
                }
            }
        }
    }
    showAddPersonPopup: boolean = false;
    suggestedNewPersonName: string = "";
}