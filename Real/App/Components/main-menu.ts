import { Component } from "@angular/core";
import * as _ from "lodash";

@Component({
    selector: "main-menu",
    templateUrl: "/Templates/MainMenu"
})
export class MainMenuComponent {
    _menu = [
        new MenuItem("Home"),
        new MenuItem("Network", [
            new MenuItem("Devices"),
            new MenuItem("Light"),
        ]),
        new MenuItem("Data", [
            new MenuItem("Finances")
        ]),
        new MenuItem("Settings")
    ]

    public ngOnInit() {
    }

    get menuItems() {
        return this._menu;
    }

    public menuItemClick(item: MenuItem) {
        if(!item.showItems){
            item.showItems = true;
        }
        if(this.lastShownItem){
            this.lastShownItem.showItems = false;
        }
        this.lastShownItem = item;
    }

    lastShownItem : MenuItem;
}

export class MenuItem {
    constructor(
        public header: string,
        public items?: MenuItem[]
    ) { }
    showItems: boolean = false;
}

export class MenuItemViewModel {
    constructor(
        public header: string,
        public key: number,
        public parentKey: number
    ) { }
}
