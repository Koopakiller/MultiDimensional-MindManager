"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var index_js_1 = require("./Components/Transactions/index.js");
var add_js_1 = require("./Components/Transactions/add.js");
var overview_js_1 = require("./Components/Transactions/overview.js");
var index_js_2 = require("./Components/Import/index.js");
var index_js_3 = require("./Components/Persons/index.js");
var add_js_2 = require("./Components/Persons/add.js");
var index_js_4 = require("./Components/UserGroups/index.js");
var index_js_5 = require("./Components/Users/index.js");
var finances_js_1 = require("./Components/finances.js");
var FinancesService_js_1 = require("./Services/FinancesService.js");
var LocationService_js_1 = require("../Shared/Services/LocationService.js");
var GlobalLoadingIndicatorService_js_1 = require("../Scaffold/Services/GlobalLoadingIndicatorService.js");
var NavigationService_js_1 = require("../Scaffold/Services/NavigationService.js");
var UtcPipe_js_1 = require("../Shared/Pipes/UtcPipe.js");
var financesRoutes = [
    {
        path: 'Transactions',
        children: [
            { path: '', component: index_js_1.IndexComponent },
            { path: 'Add', component: add_js_1.AddComponent },
            { path: 'Overview', component: overview_js_1.OverviewComponent },
        ]
    },
    {
        path: 'Import',
        children: [
            { path: '', component: index_js_2.IndexComponent },
        ]
    },
    {
        path: 'Persons',
        children: [
            { path: '', component: index_js_3.IndexComponent },
            { path: 'add', component: add_js_2.AddComponent },
        ]
    },
    {
        path: 'UserGroups',
        children: [
            { path: '', component: index_js_4.IndexComponent },
        ]
    },
    {
        path: 'Users',
        children: [
            { path: '', component: index_js_5.IndexComponent },
        ]
    }
];
var FinancesModule = (function () {
    function FinancesModule() {
    }
    return FinancesModule;
}());
FinancesModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(financesRoutes),
            http_1.HttpModule,
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            finances_js_1.FinancesComponent,
            index_js_1.IndexComponent,
            add_js_1.AddComponent,
            overview_js_1.OverviewComponent,
            index_js_2.IndexComponent,
            index_js_3.IndexComponent,
            add_js_2.AddComponent,
            index_js_4.IndexComponent,
            index_js_5.IndexComponent,
            UtcPipe_js_1.UtcPipe
        ],
        bootstrap: [
            finances_js_1.FinancesComponent
        ],
        providers: [
            FinancesService_js_1.FinancesService,
            LocationService_js_1.LocationService,
            GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService,
            NavigationService_js_1.NavigationService
        ],
    })
], FinancesModule);
exports.FinancesModule = FinancesModule;
