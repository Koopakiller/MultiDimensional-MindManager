import { PersonViewModel, UserViewModel, CurrencyViewModel } from "../ViewModels/FinancesViewModels.js";

export class FinanceEntry {
    public name: string;
    public value: number;
    public person: string;
    public existingPersonId: number; //nullable
    public userId: number;
    public currencyId: number;
    public timeStamp: Date;
}

export class StaticFinanceData{
    public persons: PersonServerModel[];
    public users: UserServerModel[];
    public currencies: CurrencyServerModel[];
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