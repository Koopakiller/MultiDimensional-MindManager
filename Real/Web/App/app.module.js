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
var platform_browser_1 = require("@angular/platform-browser");
var app_js_1 = require("./Scaffold/Components/app.js");
var finances_js_1 = require("./Finances/Components/finances.js");
var transaction_add_js_1 = require("./Finances/Components/transaction-add.js");
var FinancesService_js_1 = require("./Finances/Services/FinancesService.js");
var LocationService_js_1 = require("./Common/Services/LocationService.js");
var router_1 = require("@angular/router");
var style_test_js_1 = require("./Components/style-test.js");
var home_js_1 = require("./Components/home.js");
var MediaApplet_js_1 = require("./Components/MediaApplet.js");
var import_js_1 = require("./Finances/Components/import.js");
var person_add_js_1 = require("./Finances/Components/person-add.js");
var overview_js_1 = require("./Finances/Components/overview.js");
var loading_indicator_js_1 = require("./Components/loading-indicator.js");
var GlobalLoadingIndicatorService_js_1 = require("./Scaffold/Services/GlobalLoadingIndicatorService.js");
var UtcPipe_js_1 = require("./Common/Pipes/UtcPipe.js");
var users_js_1 = require("./Finances/Components/users.js");
var usergroups_js_1 = require("./Finances/Components/usergroups.js");
var error_js_1 = require("./Scaffold/Components/error.js");
var users_list_js_1 = require("./Finances/Components/users-list.js");
var appRoutes = [
    { path: 'Home', component: home_js_1.HomeComponent },
    {
        path: 'Finances', component: finances_js_1.FinancesComponent,
        children: [
            { path: 'Transactions/Add', component: transaction_add_js_1.FinancesNewTransactionComponent },
            { path: 'Import', component: import_js_1.FinancesImportComponent },
            { path: 'Transactions/Overview', component: overview_js_1.FinancesOverviewComponent },
            { path: 'Users', component: users_js_1.FinancesUsersComponent },
            { path: 'UserGroups', component: usergroups_js_1.FinancesUserGroupsComponent },
        ]
    },
    { path: 'StyleTest', component: style_test_js_1.StyleTestComponent },
    { path: 'Media', component: MediaApplet_js_1.MediaAppletComponent },
    { path: 'Error/:errorId', component: error_js_1.ErrorComponent },
    { path: '', pathMatch: 'full', redirectTo: '/Home' },
    { path: '**', redirectTo: '/Error/http404' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes
            //,{ enableTracing: true } // <-- debugging purposes only
            ),
            http_1.HttpModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_js_1.AppComponent,
            error_js_1.ErrorComponent,
            loading_indicator_js_1.LoadingIndicatorComponent,
            usergroups_js_1.FinancesUserGroupsComponent,
            transaction_add_js_1.FinancesNewTransactionComponent,
            import_js_1.FinancesImportComponent,
            person_add_js_1.FinancesPersonAddComponent,
            overview_js_1.FinancesOverviewComponent,
            finances_js_1.FinancesComponent,
            users_js_1.FinancesUsersComponent,
            users_list_js_1.FinancesUsersListComponent,
            home_js_1.HomeComponent,
            MediaApplet_js_1.MediaAppletComponent,
            style_test_js_1.StyleTestComponent,
            UtcPipe_js_1.UtcPipe
        ],
        bootstrap: [
            app_js_1.AppComponent
        ],
        providers: [
            FinancesService_js_1.FinancesService,
            LocationService_js_1.LocationService,
            GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
