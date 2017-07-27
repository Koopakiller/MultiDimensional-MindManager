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
        let currencyNames = this.currencyNames.map(x => x.symbol).join(", ");
        let cavm = new CurrencyAccountViewModel(this.currencyAccountId, this.accountName + " (" + currencyNames + ")");
        cavm.currencySymbols = this.currencyNames.map(x => x.symbol);
        cavm.accountName = this.accountName;    
        return cavm;
    }

    public accountId: number;
    public accountName: string;
    public currencyAccountId: number;
    public currencyId: number;
    public currencyNames: CurrencySymbolServerModel[];
}

export class CurrencySymbolServerModel{
    public id: number;
    public symbol: string;
}