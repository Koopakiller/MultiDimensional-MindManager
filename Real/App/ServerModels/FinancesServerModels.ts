import { PersonViewModel, UserViewModel, CurrencyViewModel } from "../ViewModels/FinancesViewModels.js";

export class FinanceEntry {
    public name: string;
    public value: number;
    public personId: number;
    public userId: number;
    public currencyId: number;
    public timeStamp: Date;
    public coordinates: Coordinates;
}

export class PersonServerModel implements IViewModelConvert<PersonViewModel>{

    toViewModel(): PersonViewModel {
        return new PersonViewModel(this.id, this.name);
    }

    public id: number;
    public name: string;
}

export class UserServerModel implements IViewModelConvert<UserViewModel>{

    toViewModel(): UserViewModel {
        return new UserViewModel(this.id, this.name);
    }
    
    public id: number;
    public name: string;
}

export class CurrencyServerModel implements IViewModelConvert<CurrencyViewModel>{

    toViewModel(): CurrencyViewModel {
        return new CurrencyViewModel(this.id, this.names.join(", "));
    }

    public id: number;
    public names: string[];
}