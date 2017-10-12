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

module.exports = "<div id='header'>\n    <a routerLink='/' title='Home'><i class='material-icons icon'>home</i></a>\n    <a routerLink='/About' title='Info / About'><i class='material-icons icon'>info_outline</i></a>\n</div>\n\n<div id='routing-content' #paneContainer>\n    <router-outlet></router-outlet>\n    <div class=\"routing-section-scroll-buttons\" *ngIf='usesRoutingSections'>\n        <a (click)='scrollDownToNextRoutingSection()'><i class=\"material-icons icon\">keyboard_arrow_down</i></a><a (click)='scrollUpToNextRoutingSection()'><i class=\"material-icons icon\">keyboard_arrow_up</i></a>\n    </div>\n</div>\n\n<loading-indicator *ngIf='isLoading'>Loading...</loading-indicator>"

/***/ }),

/***/ "../../../../../src/App/Scaffold/Components/App.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font-text {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 12pt;\n  font-weight: 400;\n}\n.font-bold {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 12pt;\n  font-weight: 400;\n  font-weight: 700;\n}\n.font-input {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 12pt;\n  font-weight: 400;\n}\n.routing-section-scroll-buttons {\n  position: fixed;\n  right: inherit;\n  top: inherit;\n  margin-right: 8px;\n  margin-top: 8px;\n}\n.routing-section-scroll-buttons a {\n  color: #C0C0C0 !important;\n  cursor: pointer;\n  margin: 0;\n}\n.routing-section-scroll-buttons a:hover {\n  color: #909090 !important;\n}\n.routing-section-scroll-buttons a .icon {\n  font-size: 36pt !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Scaffold/Components/App.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shared_Services_NavigationService__ = __webpack_require__("../../../../../src/App/Shared/Services/NavigationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Shared_Services_RoutingSectionService__ = __webpack_require__("../../../../../src/App/Shared/Services/RoutingSectionService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Shared_Models_Size__ = __webpack_require__("../../../../../src/App/Shared/Models/Size.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Shared_Models_VerticalDirection__ = __webpack_require__("../../../../../src/App/Shared/Models/VerticalDirection.ts");
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
    function AppComponent(_navigationService, _router, _routingSectionService) {
        var _this = this;
        this._navigationService = _navigationService;
        this._router = _router;
        this._routingSectionService = _routingSectionService;
        this.isLoading = true;
        this.usesRoutingSections = true;
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
        this._routingSectionService.requestScroll.subscribe(function (pos) {
            _this.paneContainer.nativeElement.scrollTop = pos.position;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.updatePaneSize();
    };
    AppComponent.prototype.updatePaneSize = function () {
        var size = new __WEBPACK_IMPORTED_MODULE_4__Shared_Models_Size__["a" /* Size */](this.paneContainer.nativeElement.offsetWidth, this.paneContainer.nativeElement.offsetHeight);
        this._routingSectionService.setSize(size);
    };
    AppComponent.prototype.scrollDownToNextRoutingSection = function () {
        var sPos = this._routingSectionService.getNextScrollPosition(this.paneContainer.nativeElement.scrollTop, __WEBPACK_IMPORTED_MODULE_5__Shared_Models_VerticalDirection__["a" /* VerticalDirection */].Down);
        if (sPos) {
            this.paneContainer.nativeElement.scrollTop = sPos;
        }
    };
    AppComponent.prototype.scrollUpToNextRoutingSection = function () {
        var sPos = this._routingSectionService.getNextScrollPosition(this.paneContainer.nativeElement.scrollTop, __WEBPACK_IMPORTED_MODULE_5__Shared_Models_VerticalDirection__["a" /* VerticalDirection */].Up);
        if (sPos) {
            this.paneContainer.nativeElement.scrollTop = sPos;
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "updatePaneSize", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("paneContainer"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], AppComponent.prototype, "paneContainer", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app",
        template: __webpack_require__("../../../../../src/App/Scaffold/Components/App.html"),
        styles: [__webpack_require__("../../../../../src/App/Scaffold/Components/App.less")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Shared_Services_NavigationService__["a" /* NavigationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Shared_Services_NavigationService__["a" /* NavigationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__Shared_Services_RoutingSectionService__["a" /* RoutingSectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Shared_Services_RoutingSectionService__["a" /* RoutingSectionService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
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

/***/ "../../../../../src/App/Shared/Components/RoutingSection.html":
/***/ (function(module, exports) {

module.exports = "<section class='section'>\n\n    <span class='header' #headerElement>{{header}}</span>\n\n    <div class='content-scroll'>\n\n        <div class='content'>\n\n            <ng-content></ng-content>\n\n        </div>\n\n    </div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/App/Shared/Components/RoutingSection.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".font-text {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 12pt;\n  font-weight: 400;\n}\n.font-bold {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 12pt;\n  font-weight: 400;\n  font-weight: 700;\n}\n.font-input {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 12pt;\n  font-weight: 400;\n}\n.section {\n  margin-bottom: 2px;\n  max-height: 100%;\n}\n.section .header {\n  display: block;\n  background-color: #064375;\n  color: #F0F0F0;\n  padding: 8px;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 24pt;\n  font-weight: 300;\n}\n.section .header code {\n  font-family: 'Courier New', monospace;\n  font-size: 22pt;\n}\n@media screen and (max-width: 500px) {\n  .section .header {\n    font-size: 17.33333333pt;\n    font-weight: 400;\n  }\n  .section .header code {\n    font-family: 'Courier New', monospace;\n    font-size: 15.88888889pt;\n  }\n}\n.section .content-scroll {\n  overflow: auto;\n}\n.section .content-scroll .content {\n  display: block;\n  background-color: #202020;\n  color: #F0F0F0;\n  padding: 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Shared/Components/RoutingSection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_RoutingSectionService__ = __webpack_require__("../../../../../src/App/Shared/Services/RoutingSectionService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_ScrollPosition__ = __webpack_require__("../../../../../src/App/Shared/Models/ScrollPosition.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoutingSectionComponent = (function () {
    function RoutingSectionComponent(_service) {
        this._service = _service;
    }
    RoutingSectionComponent.prototype.ngOnInit = function () {
        this._id = this._service.getUniqueId();
        this._service.addScrollPositionAndRequestScroll(new __WEBPACK_IMPORTED_MODULE_2__Models_ScrollPosition__["a" /* ScrollPosition */](this._id, this.header, this.headerElement));
    };
    RoutingSectionComponent.prototype.ngOnDestroy = function () {
        this._service.removeScrollPosition(this._id);
    };
    return RoutingSectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("headerElement"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], RoutingSectionComponent.prototype, "headerElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], RoutingSectionComponent.prototype, "header", void 0);
RoutingSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "routing-section",
        template: __webpack_require__("../../../../../src/App/Shared/Components/RoutingSection.html"),
        styles: [__webpack_require__("../../../../../src/App/Shared/Components/RoutingSection.less")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_RoutingSectionService__["a" /* RoutingSectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_RoutingSectionService__["a" /* RoutingSectionService */]) === "function" && _b || Object])
], RoutingSectionComponent);

var _a, _b;
//# sourceMappingURL=RoutingSection.js.map

/***/ }),

/***/ "../../../../../src/App/Shared/Models/ScrollPosition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollPosition; });
var ScrollPosition = (function () {
    function ScrollPosition(id, header, element) {
        this.id = id;
        this.header = header;
        this.element = element;
    }
    Object.defineProperty(ScrollPosition.prototype, "position", {
        get: function () {
            return this.element.nativeElement.offsetTop;
        },
        enumerable: true,
        configurable: true
    });
    return ScrollPosition;
}());

//# sourceMappingURL=ScrollPosition.js.map

/***/ }),

/***/ "../../../../../src/App/Shared/Models/Size.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Size; });
var Size = (function () {
    function Size(width, height) {
        this.width = width;
        this.height = height;
    }
    Size.prototype.toString = function () {
        return "width = " + this.width + ", height = " + this.height;
    };
    return Size;
}());

//# sourceMappingURL=Size.js.map

/***/ }),

/***/ "../../../../../src/App/Shared/Models/VerticalDirection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalDirection; });
var VerticalDirection;
(function (VerticalDirection) {
    VerticalDirection[VerticalDirection["Up"] = 0] = "Up";
    VerticalDirection[VerticalDirection["Down"] = 1] = "Down";
})(VerticalDirection || (VerticalDirection = {}));
//# sourceMappingURL=VerticalDirection.js.map

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

/***/ "../../../../../src/App/Shared/Services/CookieService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CookieService = (function () {
    function CookieService() {
    }
    CookieService.prototype.getCookie = function (name) {
        var cookieName = name + "=";
        for (var _i = 0, _a = document.cookie.split(/;\s*/); _i < _a.length; _i++) {
            var cookie = _a[_i];
            if (cookie.indexOf(cookieName) == 0) {
                return cookie.substring(cookieName.length);
            }
        }
        return null;
    };
    CookieService.prototype.deleteCookie = function (name) {
        this.setCookie(name, "", -1);
    };
    CookieService.prototype.setCookie = function (name, value, expireSeconds, path) {
        if (path === void 0) { path = ""; }
        var expiration = new Date();
        expiration.setTime(expiration.getTime() + expireSeconds * 1000);
        var expires = "expires=" + expiration.toUTCString();
        var cpath = path ? "; path=" + path : '';
        document.cookie = name + "=" + value + "; " + expires + cpath;
    };
    return CookieService;
}());
CookieService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], CookieService);

//# sourceMappingURL=CookieService.js.map

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

/***/ "../../../../../src/App/Shared/Services/RoutingSectionService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingSectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_VerticalDirection__ = __webpack_require__("../../../../../src/App/Shared/Models/VerticalDirection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RoutingSectionService = (function () {
    function RoutingSectionService() {
        this.sizeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"](1);
        this.size = this.sizeSource.asObservable();
        this._idCounter = 0;
        this._requestScrollSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"](1);
        this.requestScroll = this._requestScrollSubject.asObservable();
        this._scrollPositions = [];
    }
    RoutingSectionService.prototype.setSize = function (size) {
        this.sizeSource.next(size);
    };
    RoutingSectionService.prototype.getUniqueId = function () {
        this._idCounter += 1;
        return this._idCounter;
    };
    RoutingSectionService.prototype.addScrollPositionAndRequestScroll = function (pos) {
        this._scrollPositions.push(pos);
        this._requestScrollSubject.next(pos);
    };
    RoutingSectionService.prototype.removeScrollPosition = function (id) {
        for (var index = 0; index < this._scrollPositions.length; ++index) {
            if (this._scrollPositions[index].id = id) {
                this._scrollPositions.splice(index, 1);
                break;
            }
        }
    };
    RoutingSectionService.prototype.getNextScrollPosition = function (pos, direction) {
        if (this._scrollPositions.length == 0) {
            return null;
        }
        var resultPosition = direction == __WEBPACK_IMPORTED_MODULE_2__Models_VerticalDirection__["a" /* VerticalDirection */].Up ? -1 : Number.MAX_VALUE;
        var resultIndex = -1;
        for (var index = 0; index < this._scrollPositions.length; ++index) {
            if (direction == __WEBPACK_IMPORTED_MODULE_2__Models_VerticalDirection__["a" /* VerticalDirection */].Down &&
                this._scrollPositions[index].position > pos &&
                this._scrollPositions[index].position < resultPosition) {
                resultIndex = index;
                resultPosition = this._scrollPositions[resultIndex].position;
            }
            if (direction == __WEBPACK_IMPORTED_MODULE_2__Models_VerticalDirection__["a" /* VerticalDirection */].Up &&
                this._scrollPositions[index].position < pos &&
                this._scrollPositions[index].position > resultPosition) {
                resultIndex = index;
                resultPosition = this._scrollPositions[resultIndex].position;
            }
        }
        if (resultIndex == -1) {
            return null;
        }
        return this._scrollPositions[resultIndex].position;
    };
    return RoutingSectionService;
}());
RoutingSectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], RoutingSectionService);

//# sourceMappingURL=RoutingSectionService.js.map

/***/ }),

/***/ "../../../../../src/App/Shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Shared_Pipes_UtcPipe__ = __webpack_require__("../../../../../src/App/Shared/Pipes/UtcPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_CookieService__ = __webpack_require__("../../../../../src/App/Shared/Services/CookieService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_RoutingSection__ = __webpack_require__("../../../../../src/App/Shared/Components/RoutingSection.ts");
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
            __WEBPACK_IMPORTED_MODULE_1__Shared_Pipes_UtcPipe__["a" /* UtcPipe */],
            __WEBPACK_IMPORTED_MODULE_3__Components_RoutingSection__["a" /* RoutingSectionComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__Services_CookieService__["a" /* CookieService */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__Shared_Pipes_UtcPipe__["a" /* UtcPipe */],
            __WEBPACK_IMPORTED_MODULE_3__Components_RoutingSection__["a" /* RoutingSectionComponent */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Shared_Services_RoutingSectionService__ = __webpack_require__("../../../../../src/App/Shared/Services/RoutingSectionService.ts");
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
            __WEBPACK_IMPORTED_MODULE_9__Shared_Services_NavigationService__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_12__Shared_Services_RoutingSectionService__["a" /* RoutingSectionService */]
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/Environments/Environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Environment; });
var Environment = (function () {
    function Environment() {
    }
    return Environment;
}());

Environment.IsProduction = true;
Environment.ApiUrl = "https://picosmos.azurewebsites.net/api/";
;
//# sourceMappingURL=Environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_app_module__ = __webpack_require__("../../../../../src/App/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Environments_Environment__ = __webpack_require__("../../../../../src/Environments/Environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__Environments_Environment__["a" /* Environment */].IsProduction) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__App_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map