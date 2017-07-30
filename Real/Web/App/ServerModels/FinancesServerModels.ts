import { PersonViewModel, UserViewModel, CurrencyAccountViewModel, TransactionViewModel } from "../ViewModels/FinancesViewModels.js";
import { KeyValuePair } from "../Common/KeyValuePair.js";

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

export class TransactionServerModel implements IViewModelConvert<TransactionViewModel>{
    toViewModel(): TransactionViewModel {
        let tvm = new TransactionViewModel();
        tvm.currencyAccountId = this.currencyAccountId;
        tvm.id = this.id;
        tvm.note = this.note;
        tvm.personId = this.personId;
        tvm.rawData = this.rawData;
        tvm.timeStamp = this.timeStamp;
        tvm.userId = this.userId;
        tvm.value = this.value;
        return tvm;
    }
    
    id: number;
    note: string;
    timeStamp: Date;
    userId: number;
    personId: number;
    currencyAccountId: number;
    value: number;

    rawData: KeyValuePair<string, string>[] = [];
}