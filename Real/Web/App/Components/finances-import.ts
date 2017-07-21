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
    }

    processFileInputChange($event: any): void{
        var inputValue = $event.target;
        var file:File = inputValue.files[0]; 
        var myReader:FileReader = new FileReader();

        myReader.onloadend = function(e){
            console.log(myReader.result);
        }

        myReader.readAsText(file);
    }
}