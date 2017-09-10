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
var Index_js_1 = require("./Components/Transactions/Index.js");
var Add_js_1 = require("./Components/Transactions/Add.js");
var Overview_js_1 = require("./Components/Transactions/Overview.js");
var Index_js_2 = require("./Components/Import/Index.js");
var Index_js_3 = require("./Components/Persons/Index.js");
var Add_js_2 = require("./Components/Persons/Add.js");
var Index_js_4 = require("./Components/UserGroups/Index.js");
var Index_js_5 = require("./Components/Users/Index.js");
var Index_js_6 = require("./Components/Index.js");
var FinancesService_js_1 = require("./Services/FinancesService.js");
var LocationService_js_1 = require("../Shared/Services/LocationService.js");
var GlobalLoadingIndicatorService_js_1 = require("../Shared/Services/GlobalLoadingIndicatorService.js");
var NavigationService_js_1 = require("../Shared/Services/NavigationService.js");
var shared_module_js_1 = require("../Shared/shared.module.js");
var financesRoutes = [
    {
        path: '',
        component: Index_js_6.IndexComponent,
        children: [
            {
                path: 'Transactions',
                component: Index_js_1.IndexComponent,
                children: [
                    { path: 'Add', component: Add_js_1.AddComponent },
                    { path: 'Overview', component: Overview_js_1.OverviewComponent },
                ]
            },
            {
                path: 'Import',
                component: Index_js_2.IndexComponent,
                children: []
            },
            {
                path: 'Persons',
                component: Index_js_3.IndexComponent,
                children: [
                    { path: 'Add', component: Add_js_2.AddComponent },
                ]
            },
            {
                path: 'UserGroups',
                component: Index_js_4.IndexComponent,
                children: []
            },
            {
                path: 'Users',
                component: Index_js_5.IndexComponent,
                children: []
            }
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
            shared_module_js_1.SharedModule,
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            Index_js_6.IndexComponent,
            Index_js_1.IndexComponent,
            Add_js_1.AddComponent,
            Overview_js_1.OverviewComponent,
            Index_js_2.IndexComponent,
            Index_js_3.IndexComponent,
            Add_js_2.AddComponent,
            Index_js_4.IndexComponent,
            Index_js_5.IndexComponent
        ],
        bootstrap: [
            Index_js_6.IndexComponent
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
