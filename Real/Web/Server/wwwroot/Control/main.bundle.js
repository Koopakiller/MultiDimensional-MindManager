webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Finances/finances.module": [
		"../../../../../src/App/Finances/finances.module.ts",
		"finances.module"
	],
	"./Media/media.module": [
		"../../../../../src/App/Media/media.module.ts",
		"media.module"
	],
	"./Test/test.module": [
		"../../../../../src/App/Test/test.module.ts",
		"test.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/App/Scaffold/Components/App.html":
/***/ (function(module, exports) {

module.exports = "<div id='header'>\n    <a routerLink='/' title='Home'><i class='material-icons icon'>home</i></a>\n    <a routerLink='/About' title='Info / About'><i class='material-icons icon'>info_outline</i></a>\n</div>\n\n<div id='routing-content'>\n    <router-outlet></router-outlet>\n</div>\n\n<loading-indicator *ngIf='isLoading'>Loading...</loading-indicator>"

/***/ }),

/***/ "../../../../../src/App/Scaffold/Components/App.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shared_Services_NavigationService__ = __webpack_require__("../../../../../src/App/Shared/Services/NavigationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_navigationService, _router) {
        var _this = this;
        this._navigationService = _navigationService;
        this._router = _router;
        this.isLoading = true;
        this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]) {
                _this.isLoading = true;
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */] ||
                event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationCancel */] ||
                event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationError */]) {
                _this.isLoading = false;
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app",
        template: __webpack_require__("../../../../../src/App/Scaffold/Components/App.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Shared_Services_NavigationService__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Shared_Services_NavigationService__["a" /* NavigationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=App.js.map

/***/ }),

/***/ "../../../../../src/App/Scaffold/Components/Dashboard.html":
/***/ (function(module, exports) {

module.exports = "<div id='dashboard'>\n\n    <a routerLink='/Finances' class='text link-tile'>\n        <i class='material-icons tile-image'>account_balance</i> \n        <span class='tile-header'>Finances</span><br/>\n        <span class='tile-description'>Finances v5</span>\n    </a><a routerLink='/Media' class='text link-tile'>\n        <i class='material-icons tile-image'>weekend</i>\n        <span class='tile-header'>Media</span><br/>\n        <span class='tile-description'>Play Music or Videos</span>\n    </a><a routerLink='/Test' class='text link-tile'>\n        <i class='material-icons tile-image'>bug_report</i>\n        <span class='tile-header'>Test</span><br/>\n        <span class='tile-description'>Test pages</span>\n    </a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/App/Scaffold/Components/Dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app",
        template: __webpack_require__("../../../../../src/App/Scaffold/Components/Dashboard.html")
    })
], DashboardComponent);

//# sourceMappingURL=Dashboard.js.map

/***/ }),

/***/ "../../../../../src/App/Scaffold/Components/Error.html":
/***/ (function(module, exports) {

module.exports = "\n<div class='tile text' [innerHTML]='html'></div>"

/***/ }),

/***/ "../../../../../src/App/Scaffold/Components/Error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
    }
    Object.defineProperty(ErrorComponent.prototype, "html", {
        get: function () {
            return this._html;
        },
        enumerable: true,
        configurable: true
    });
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this._activatedRoute.params.subscribe(function (params) {
            _this.errorId = params["errorId"];
            _this.updateDisplay();
        });
    };
    ErrorComponent.prototype.updateDisplay = function () {
        if (this.errorId === "http404") {
            this._html = "Page not found";
        }
        else {
            this._html = "An unknown error occurred.";
        }
    };
    ErrorComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return ErrorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ErrorComponent.prototype, "errorId", void 0);
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "error",
        template: __webpack_require__("../../../../../src/App/Scaffold/Components/Error.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=Error.js.map

/***/ }),

/***/ "../../../../../src/App/Scaffold/Components/LoadingIndicator.html":
/***/ (function(module, exports) {

module.exports = "<div class='loading-indicator'><div class='loading-indicator-background'></div><img class='loading-indicator-animation' src='/Control/Assets/loading.gif' alt='Loading...'/></div>"

/***/ }),

/***/ "../../../../../src/App/Scaffold/Components/LoadingIndicator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoadingIndicatorComponent = (function () {
    function LoadingIndicatorComponent() {
    }
    return LoadingIndicatorComponent;
}());
LoadingIndicatorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "loading-indicator",
        template: __webpack_require__("../../../../../src/App/Scaffold/Components/LoadingIndicator.html")
    })
], LoadingIndicatorComponent);

//# sourceMappingURL=LoadingIndicator.js.map

/***/ }),

/***/ "../../../../../src/App/Shared/Pipes/UtcPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtcPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// creates a new Date object with the utc values of the given Date
var UtcPipe = (function () {
    function UtcPipe() {
    }
    UtcPipe.prototype.transform = function (value) {
        return new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
    };
    return UtcPipe;
}());
UtcPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: "utc" })
], UtcPipe);

//# sourceMappingURL=UtcPipe.js.map

/***/ }),

/***/ "../../../../../src/App/Shared/Services/GlobalLoadingIndicatorService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalLoadingIndicatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GlobalLoadingIndicatorService = (function () {
    function GlobalLoadingIndicatorService() {
        this._isLoadingSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.isLoadingObservable = this._isLoadingSource.asObservable();
        this._loadingProcessCount = 0;
    }
    Object.defineProperty(GlobalLoadingIndicatorService.prototype, "isLoading", {
        get: function () {
            return this._loadingProcessCount > 0;
        },
        enumerable: true,
        configurable: true
    });
    GlobalLoadingIndicatorService.prototype.addLoadingProcess = function () {
        this._loadingProcessCount += 1;
        this._isLoadingSource.next(this.isLoading);
    };
    GlobalLoadingIndicatorService.prototype.removeLoadingProcess = function () {
        this._loadingProcessCount -= 1;
        if (this._loadingProcessCount < 0) {
            throw "Negative _loadingProcessCount is not possible.";
        }
        this._isLoadingSource.next(this.isLoading);
    };
    return GlobalLoadingIndicatorService;
}());
GlobalLoadingIndicatorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], GlobalLoadingIndicatorService);

//# sourceMappingURL=GlobalLoadingIndicatorService.js.map

/***/ }),

/***/ "../../../../../src/App/Shared/Services/NavigationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavigationService = (function () {
    function NavigationService() {
    }
    return NavigationService;
}());
NavigationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], NavigationService);

//# sourceMappingURL=NavigationService.js.map

/***/ }),

/***/ "../../../../../src/App/Shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shared_Pipes_UtcPipe__ = __webpack_require__("../../../../../src/App/Shared/Pipes/UtcPipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__Shared_Pipes_UtcPipe__["a" /* UtcPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__Shared_Pipes_UtcPipe__["a" /* UtcPipe */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/App/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Scaffold_Components_App__ = __webpack_require__("../../../../../src/App/Scaffold/Components/App.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Scaffold_Components_LoadingIndicator__ = __webpack_require__("../../../../../src/App/Scaffold/Components/LoadingIndicator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Shared_Services_GlobalLoadingIndicatorService__ = __webpack_require__("../../../../../src/App/Shared/Services/GlobalLoadingIndicatorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Scaffold_Components_Error__ = __webpack_require__("../../../../../src/App/Scaffold/Components/Error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Shared_Services_NavigationService__ = __webpack_require__("../../../../../src/App/Shared/Services/NavigationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Scaffold_Components_Dashboard__ = __webpack_require__("../../../../../src/App/Scaffold/Components/Dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Shared_shared_module__ = __webpack_require__("../../../../../src/App/Shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: "Finances", loadChildren: "./Finances/finances.module#FinancesModule" },
    { path: "Test", loadChildren: "./Test/test.module#TestModule" },
    { path: "Media", loadChildren: "./Media/media.module#MediaModule" },
    { path: "Dashboard", component: __WEBPACK_IMPORTED_MODULE_10__Scaffold_Components_Dashboard__["a" /* DashboardComponent */] },
    { path: "Error/:errorId", component: __WEBPACK_IMPORTED_MODULE_8__Scaffold_Components_Error__["a" /* ErrorComponent */] },
    { path: "", pathMatch: "full", redirectTo: "Dashboard" },
    { path: "**", redirectTo: "/Error/http404" }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["g" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__Shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__Scaffold_Components_App__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Scaffold_Components_Error__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_6__Scaffold_Components_LoadingIndicator__["a" /* LoadingIndicatorComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Scaffold_Components_Dashboard__["a" /* DashboardComponent */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__Scaffold_Components_App__["a" /* AppComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__Shared_Services_GlobalLoadingIndicatorService__["a" /* GlobalLoadingIndicatorService */],
            __WEBPACK_IMPORTED_MODULE_9__Shared_Services_NavigationService__["a" /* NavigationService */]
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_app_module__ = __webpack_require__("../../../../../src/App/app.module.ts");


// import { environment } from './Environments/environment';
// if (environment.production) {
//   enableProdMode();
// }
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__App_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map