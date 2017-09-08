import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../../Services/FinancesService.js";
import { LocationService } from "../../../Shared/Services/LocationService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel, TransactionViewModel } from "../../ViewModels/FinancesViewModels.js";
import { Router } from '@angular/router';
import { KeyValuePair } from "../../../Shared/KeyValuePair.js";
import { GlobalLoadingIndicatorService } from "../../../Scaffold/Services/GlobalLoadingIndicatorService.js";
import { Observable } from "rxjs/Rx";
import { PayPalAccountStatementImporter, FinanceAccountStatementImporter, 
    CommerzbankCreditCardStatementImporter, CommerzbankGiroAccountStatementImporter, 
    FinancesCsvImporter } from "../../Importer.js";
import { GermanDataParser } from "../../Parser.js";
import { DBValueProvider } from "../../DBValueProvider.js";

@Component({
    selector: "finances-import",
    templateUrl: "/Templates/Finances/Import/Index.html"
})
export class IndexComponent implements OnInit {
    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    ngOnInit(): void {
        this.initCurrentStep();

        this._globalLoadingIndicatorService.addLoadingProcess();

        Observable.zip(this._financesService.persons, this._financesService.users)
            //.catch(error => alert(error))
            .subscribe(([persons, users]) => {
                this.persons = persons;
                this.users = users;

                this.possibleFileTypes = [
                    {
                        extension: "csv",
                        provider: "Commerzbank",
                        description: "Commerzbank Giro Account Statement CSV Export",
                        mode: "implemented",
                        factory: () => {
                            let result = new CommerzbankGiroAccountStatementImporter();
                            result.dataParser = new GermanDataParser();
                            return result;
                        }
                    },
                    {
                        extension: "csv",
                        provider: "Commerzbank",
                        description: "Commerzbank Credit Card Statement CSV Export",
                        mode: "implemented",
                        factory: () => {
                            let result = new CommerzbankCreditCardStatementImporter();
                            result.dataParser = new GermanDataParser();
                            return result;
                        }
                    },
                    {
                        extension: "csv",
                        provider: "PayPal",
                        description: "Paypal (German) \"Guthaben-relevante Zahlungen (CSV, Komma getrennt)\" Export",
                        mode: "implemented",
                        factory: () => {
                            let result = new PayPalAccountStatementImporter();
                            result.dataParser = new GermanDataParser();
                            return result;
                        }
                    },
                    {
                        extension: "csv",
                        provider: "Finances",
                        description: "Finances Import Form CSV",
                        mode: "implemented",
                        factory: () => {
                            let result = new FinancesCsvImporter();
                            result.dataParser = new GermanDataParser();
                            return result;
                        }
                    }
                ];

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
        this._financesService.getCurrencyAccounts(value).subscribe(x => {
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
        this._globalLoadingIndicatorService.addLoadingProcess();
        setTimeout(() => {
            this.nextStep();
            let importer: FinanceAccountStatementImporter = this.possibleFileTypes[index].factory();
            importer.dbValueProvider = new DBValueProvider(this.persons, this.currencyAccounts);
            importer.readFile(this.selectedFile);
            this.transactions = importer.transactions;
            this._globalLoadingIndicatorService.removeLoadingProcess();
        }, 0)
    }

    transactions: TransactionViewModel[] = [];

    public get transactionsHasErrors(): boolean{
        for(let t of this.transactions){
            if(!t.currencyAccountId || !t.personId){
                return true;
            }
        }
        return false;
    }

    public submitData(){
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.addTransactions(this.transactions).subscribe(() => {
            this._router.navigateByUrl("/Finances");
            this._globalLoadingIndicatorService.removeLoadingProcess();
        }, error => {
            alert(error);
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    }

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
