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
var http_1 = require("@angular/http");
var DataContainer_js_1 = require("../../Shared/DataContainer.js");
var Observable_1 = require("rxjs/Observable");
var FinancesAuthenticationService = (function () {
    function FinancesAuthenticationService(http) {
        this.http = http;
    }
    FinancesAuthenticationService.prototype.getToken = function (userName, password) {
        var _this = this;
        var url = "/api/Finances/GetToken";
        var obj = {
            userName: userName,
            password: password,
        };
        var data = new DataContainer_js_1.DataContainer(obj);
        var postData = JSON.stringify(data);
        console.log(postData);
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        var options = new http_1.RequestOptions({ headers: headers });
        return Observable_1.Observable.create(function (observer) {
            _this.http.post(url, postData, options).subscribe(function (response) {
                var token = response.json().data;
                observer.next(token);
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    return FinancesAuthenticationService;
}());
FinancesAuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FinancesAuthenticationService);
exports.FinancesAuthenticationService = FinancesAuthenticationService;
