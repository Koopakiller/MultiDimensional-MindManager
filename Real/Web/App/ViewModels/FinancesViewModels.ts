import { KeyValuePair } from "../Common/KeyValuePair.js";
import { TransactionServerModel, TransactionOverviewServerModel } from "../ServerModels/FinancesServerModels.js";

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