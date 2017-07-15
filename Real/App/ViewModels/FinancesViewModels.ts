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

export class CurrencyViewModel{
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