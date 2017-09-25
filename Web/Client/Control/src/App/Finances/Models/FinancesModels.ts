import { KeyValuePair } from "../../Shared/KeyValuePair";

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

export class UserGroupServerModel implements IViewModelConvert<UserGroupViewModel>{

    toViewModel(): UserGroupViewModel{
        return new UserGroupViewModel(this.id, this.name);
    }

    public id: number;
    public name: number;
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

export class CurrencySymbolServerModel {
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
        tvm.timeStampDate = this.timeStampDate;
        tvm.timeStampTime = new Date(this.timeStampTime);
        tvm.userId = this.userId;
        tvm.value = this.value;
        return tvm;
    }

    id: number;
    note: string;
    timeStampDate: Date;
    timeStampTime: string;
    includeTimeStampTime: boolean;
    userId: number;
    personId: number;
    currencyAccountId: number;
    value: number;

    rawData: KeyValuePair<string, string>[] = [];
}

export class TransactionOverviewServerModel implements IViewModelConvert<TransactionOverviewViewModel>{
    toViewModel() {
        let tovm = new TransactionOverviewViewModel();
        tovm.accountName = this.accountName;
        tovm.currencyId = this.currencyId;
        tovm.currencyAccountId = this.currencyAccountId;
        tovm.value = this.value;
        return tovm;
    }
    accountName: string;
    currencyId: number;
    currencyAccountId: number;
    value: number;
}

export class UserViewModel {
    constructor(
        private _id?: number,
        private _header?: string
    ) { }

    get id() {
        return this._id;
    }

    get header() {
        return this._header; 
    }
}

export class UserGroupViewModel{
    constructor(
        public id: number,
        public name: number
    ) { }
}

export class PersonViewModel {
    constructor(
        private _id?: number,
        private _header?: string
    ) { }

    get id() {
        return this._id;
    }

    get header() {
        return this._header;
    }
}

export class CurrencyAccountViewModel {
    constructor(
        private _id?: number,
        private _header?: string
    ) { }

    get id() {
        return this._id;
    }

    get header() {
        return this._header;
    }

    currencySymbols: string[];
    accountName: string;
}

export class TransactionViewModel implements IServerModelConvert<TransactionServerModel>{
    toServerModel(): TransactionServerModel {
        let tvm = new TransactionServerModel();
        tvm.currencyAccountId = this.currencyAccountId;
        tvm.id = this.id;
        tvm.note = this.note;
        tvm.personId = this.personId;
        tvm.rawData = this.rawData;
        tvm.timeStampDate = this.timeStampDate;
        if (this.includeTimeStampTime) {
            console.warn(this.timeStampTime);
            tvm.timeStampTime = `${this.timeStampTime.getHours()}:${this.timeStampTime.getMinutes()}:${this.timeStampTime.getSeconds()}.${this.timeStampTime.getMilliseconds()}`
        }
        else {
            tvm.timeStampTime = null;
        }
        tvm.includeTimeStampTime = this.includeTimeStampTime;
        tvm.userId = this.userId;
        tvm.value = this.value;
        return tvm;
    }

    id: number;
    note: string;
    timeStampDate: Date;
    includeTimeStampTime: boolean = false;
    timeStampTime: Date;
    userId: number;
    personId: number;
    currencyAccountId: number;
    value: number;

    rawData: KeyValuePair<string, string>[] = [];

    showDetails: boolean;
    suggestedPersonName: string;
}


export class TransactionOverviewViewModel implements IViewModelConvert<TransactionOverviewServerModel>{
    toViewModel() {
        let tosm = new TransactionOverviewServerModel();
        tosm.accountName = this.accountName;
        tosm.currencyId = this.currencyId;
        tosm.currencyAccountId = this.currencyAccountId;
        tosm.value = this.value;
        return tosm;
    }
    accountName: string;
    currencyId: number;
    currencyAccountId: number;
    currencyAccountName: string;
    value: number;
}