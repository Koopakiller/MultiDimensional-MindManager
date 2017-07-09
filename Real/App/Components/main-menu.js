"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MainMenuComponent = (function () {
    function MainMenuComponent() {
        this._menu = [
            new MenuItem("Home"),
            new MenuItem("Network", [
                new MenuItem("Devices"),
                new MenuItem("Light"),
            ]),
            new MenuItem("Data", [
                new MenuItem("Finances")
            ]),
            new MenuItem("Settings")
        ];
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(MainMenuComponent.prototype, "menuItems", {
        get: function () {
            return this._menu;
        },
        enumerable: true,
        configurable: true
    });
    MainMenuComponent.prototype.menuItemClick = function (item) {
        if (!item.showItems) {
            item.showItems = true;
        }
        if (this.lastShownItem) {
            this.lastShownItem.showItems = false;
        }
        this.lastShownItem = item;
    };
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    core_1.Component({
        selector: "main-menu",
        templateUrl: "/Templates/MainMenu"
    })
], MainMenuComponent);
exports.MainMenuComponent = MainMenuComponent;
var MenuItem = (function () {
    function MenuItem(header, items) {
        this.header = header;
        this.items = items;
        this.showItems = false;
    }
    return MenuItem;
}());
exports.MenuItem = MenuItem;
var MenuItemViewModel = (function () {
    function MenuItemViewModel(header, key, parentKey) {
        this.header = header;
        this.key = key;
        this.parentKey = parentKey;
    }
    return MenuItemViewModel;
}());
exports.MenuItemViewModel = MenuItemViewModel;
