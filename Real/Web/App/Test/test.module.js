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
var GlobalLoadingIndicatorService_js_1 = require("../Scaffold/Services/GlobalLoadingIndicatorService.js");
var NavigationService_js_1 = require("../Scaffold/Services/NavigationService.js");
var UtcPipe_js_1 = require("../Shared/Pipes/UtcPipe.js");
var Index_js_1 = require("./Components/Index.js");
var Index_js_2 = require("./Components/Style/Index.js");
var financesRoutes = [
    {
        path: '',
        component: Index_js_1.IndexComponent,
        children: [
            {
                path: 'Style',
                children: [
                    { path: '', component: Index_js_2.IndexComponent },
                ]
            }
        ]
    },
];
var TestModule = (function () {
    function TestModule() {
    }
    return TestModule;
}());
TestModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(financesRoutes),
            http_1.HttpModule,
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            Index_js_1.IndexComponent,
            Index_js_2.IndexComponent,
            UtcPipe_js_1.UtcPipe
        ],
        bootstrap: [
            Index_js_1.IndexComponent
        ],
        providers: [
            GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService,
            NavigationService_js_1.NavigationService
        ],
    })
], TestModule);
exports.TestModule = TestModule;
