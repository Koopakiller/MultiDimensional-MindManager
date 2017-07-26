export class UserViewModel{
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
}

export class TransactionViewModel{
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

export class KeyValuePair<TKey, TValue>{
    constructor(
        private _key: TKey,
        private _value: TValue
    ) { }

    get key(): TKey {
        return this._key;
    }
    get value(): TValue {
        return this._value;
    }
}