import { Component, OnInit } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyViewModel, UserViewModel } from "../ViewModels/FinancesViewModels.js";
import { FinanceEntryServerModel } from "../ServerModels/FinancesServerModels.js";
import {Router} from '@angular/router';

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
    }

    processFileInputChange($event: any): void{
        var inputValue = $event.target;

        if($event.target.files.length > 0){
            this.nextStep();

            var file:File = inputValue.files[0]; 
            var myReader:FileReader = new FileReader();

            myReader.onloadend = function(e){
                console.log(myReader.result);
            }

            myReader.readAsText(file);
        }
    }

    importCommerzbank(): void{
        this.nextStep();
    }


    possibleFileTypes = [
        {extension: "csv", provider: "Commerzbank", description: "Commerzbank CSV Export", mode: "recommended", method: this.importCommerzbank},
        {extension: "csv", provider: "Commerzbank", description: "Commerzbank Credit Card CSV Export", mode: "not-implemented", method: ()=>{}},
        {extension: "csv", provider: "PayPal", description: "Paypal CSV Export", mode: "not-implemented", method: ()=>{}},
        {extension: "xml", provider: "Finances", description: "Excel Form XML Export", mode: "not-implemented", method: ()=>{}},
    ]


    currentStep: string;
    steps = [
        "fileSelect",
        "fileTypeSelect",
        "showAndFitData"
    ]
    initCurrentStep(){
        this.currentStep = this.steps[0];
    }
    nextStep(){
        this.currentStep = this.steps[this.steps.indexOf(this.currentStep) + 1];
    }
}