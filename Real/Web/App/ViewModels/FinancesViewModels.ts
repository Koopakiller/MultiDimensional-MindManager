import { KeyValuePair } from "../Common/KeyValuePair.js";
import { TransactionServerModel } from "../ServerModels/FinancesServerModels.js";

export class UserViewModel {
    constructor(
        private _id?: number,
        private _header?: string
    ) { }

    get id(){
        return this._id;        
    }

    get header(){
        return this._header;        
    }
}

export class PersonViewModel{
    constructor(
        private _id?: number,
        private _header?: string
    ) { } 

    get id(){
        return this._id;        
    }

    get header(){
        return this._header;        
    }
}

export class CurrencyAccountViewModel{
    constructor(
        private _id?: number,
        private _header?: string
    ) { }

    get id(){
        return this._id;        
    }

    get header(){
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

    showDetails: boolean;
    suggestedPersonName: string;
}
