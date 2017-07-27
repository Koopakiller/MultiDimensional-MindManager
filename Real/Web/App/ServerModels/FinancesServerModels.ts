import { PersonViewModel, UserViewModel, CurrencyAccountViewModel } from "../ViewModels/FinancesViewModels.js";

export class FinanceEntryServerModel {
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

export class CurrencyAccountServerModel implements IViewModelConvert<CurrencyAccountViewModel>{

    toViewModel(): CurrencyAccountViewModel {
        return new CurrencyAccountViewModel(this.currencyAccountId, this.accountName + " (" + this.currencyName + ")");
    }

    public accountId: number;
    public accountName: string;
    public currencyAccountId: number;
    public currencyName: string;
}