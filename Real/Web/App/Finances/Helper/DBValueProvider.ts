import { PersonViewModel, CurrencyAccountViewModel } from "../ViewModels/FinancesViewModels.js";

export class DBValueProvider {
    constructor(
        private _persons: PersonViewModel[],
        private _currencyAccounts: CurrencyAccountViewModel[]
    ) {

        this._currencyAccounts = this._currencyAccounts.slice();
        this._currencyAccounts.sort((a, b) => this.compareByLengthAndThenAlphabetically(a.accountName, b.accountName));

        this._persons = this._persons.slice();
        this._persons.sort((a, b) => this.compareByLengthAndThenAlphabetically(a.header, b.header));
    }

    private compareByLengthAndThenAlphabetically(a: string, b: string) {
        return a.length - b.length
            || a.localeCompare(b);
    }

    public getPersonIdFromName(name: string): number {

        for (let person of this._persons) {
            if (person.header.toUpperCase() === name.toUpperCase()) {
                return person.id;
            }
        }
        for (let person of this._persons) {
            if (name.indexOf(person.header) >= 0) {
                return person.id; // in case the person name is in another text like a description or similar
            }
        }
        return null;
    }

    public getCurrencyAccountIdFromName(name: string, currency: string): number {

        for (let ca of this._currencyAccounts) {
            if (ca.accountName.toUpperCase() === name.toUpperCase()
                && ca.currencySymbols.indexOf(currency) >= 0) {
                return ca.id;
            }
        }
        for (let ca of this._currencyAccounts) {
            if (ca.accountName.toUpperCase().indexOf(name.toUpperCase()) >= 0
                && ca.currencySymbols.indexOf(currency) >= 0) {
                return ca.id;
            }
        }
        return null;
    }
}
