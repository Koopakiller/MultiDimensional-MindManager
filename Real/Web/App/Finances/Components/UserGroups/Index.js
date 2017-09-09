"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FinancesService_js_1 = require("../../Services/FinancesService.js");
var router_1 = require("@angular/router");
var GlobalLoadingIndicatorService_js_1 = require("../../../Scaffold/Services/GlobalLoadingIndicatorService.js");
var IndexComponent = (function () {
    function IndexComponent(_financesService, _router, _globalLoadingIndicatorService) {
        this._financesService = _financesService;
        this._router = _router;
        this._globalLoadingIndicatorService = _globalLoadingIndicatorService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.getUserGroups().subscribe(function (x) {
            _this.userGroups = x;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        }, function (error) {
            alert(error);
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    };
    IndexComponent.prototype.toggleManageUsers = function (index) {
        var _this = this;
        if (this.selectedUserGroup || !index) {
            this.selectedUserGroup = null;
        }
        else {
            this.selectedUserGroup = this.userGroups[index];
            this._globalLoadingIndicatorService.addLoadingProcess();
            this._financesService.getUsersFromUserGroup(this.selectedUserGroup.id).subscribe(function (x) {
                _this.usersInSelectedGroup = x;
                _this._globalLoadingIndicatorService.removeLoadingProcess();
            }, function (error) {
                alert(error);
                _this.toggleManageUsers();
                _this._globalLoadingIndicatorService.removeLoadingProcess();
            });
        }
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: "finances-usergroups",
        templateUrl: "/App/Finances/Templates/Index.html"
    }),
    __metadata("design:paramtypes", [FinancesService_js_1.FinancesService,
        router_1.Router,
        GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService])
], IndexComponent);
exports.IndexComponent = IndexComponent;
