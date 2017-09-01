import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel } from "../ViewModels/FinancesViewModels.js";
import {Router} from '@angular/router';
import { PageComponentBase } from "../Common/PageComponentBase.js";
import { GlobalLoadingIndicatorService } from "../Services/GlobalLoadingIndicatorService.js";

@Component({
    selector: "finances-new-person",
    templateUrl: "/Templates/FinancesNewPerson"
})
export class FinancesNewPersonComponent implements OnInit {
    constructor(
        private _financesService: FinancesService,
        private _router: Router,
        private _globalLoadingIndicatorService: GlobalLoadingIndicatorService
    ) { }

    ngOnInit(): void {
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.users.subscribe(x => { 
            this.users = x;
            this.user = x.length > 0 ? x[0].id : null; 
            this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    }

    users: UserViewModel[];
    user: number;

    @Input() 
    personName: string;

    @Output()
    close = new EventEmitter(); 

    submit(): void{
        //TODO: Loading Indicator
        this._financesService.addPerson(this.personName, this.user);
        let pvm = new PersonViewModel(-1, this.personName);
        this.close.emit(pvm);
    }

    cancel(): void{
        this.close.emit();
    }
}