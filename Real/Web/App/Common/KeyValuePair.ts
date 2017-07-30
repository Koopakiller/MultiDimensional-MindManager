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