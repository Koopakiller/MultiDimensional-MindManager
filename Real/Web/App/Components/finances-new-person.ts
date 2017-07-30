import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FinancesService } from "../Services/FinancesService.js";
import { LocationService } from "../Services/LocationService.js";
import { PersonViewModel, CurrencyAccountViewModel, UserViewModel } from "../ViewModels/FinancesViewModels.js";
import {Router} from '@angular/router';

@Component({
    selector: "finances-new-person",
    templateUrl: "/Templates/FinancesNewPerson"
})
export class FinancesNewPersonComponent implements OnInit {
    constructor(
        private financesService: FinancesService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.financesService.persons.subscribe(x => { this.persons = x; });
    }

    persons: PersonViewModel[];

    @Input() 
    personName: string;

    @Output()
    close = new EventEmitter(); 

    submit(): void{
        this.financesService.addPerson(this.personName);
        let pvm = new PersonViewModel(-1, this.personName);
        this.close.emit(pvm);
    }

    cancel(): void{
        this.close.emit();
    }
}