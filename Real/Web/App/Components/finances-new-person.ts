import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel } from "../ViewModels/FinancesViewModels.js";
import {Router} from '@angular/router';
import { PageComponentBase } from "../Common/PageComponentBase.js";

@Component({
    selector: "finances-new-person",
    templateUrl: "/Templates/FinancesNewPerson"
})
export class FinancesNewPersonComponent extends PageComponentBase implements OnInit {
    constructor(
        private financesService: FinancesService,
        private router: Router
    ) { 
        super();
    }

    ngOnInit(): void {
        this.addLoadingProcess();
        this.financesService.users.subscribe(x => { 
            this.users = x;
            this.user = x.length > 0 ? x[0].id : null; 
            this.removeLoadingProcess();
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
        this.financesService.addPerson(this.personName, this.user);
        let pvm = new PersonViewModel(-1, this.personName);
        this.close.emit(pvm);
    }

    cancel(): void{
        this.close.emit();
    }
}