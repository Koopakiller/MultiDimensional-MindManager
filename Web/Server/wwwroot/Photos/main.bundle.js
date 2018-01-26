webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/App/Components/App.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class='main'>\n    <div class='menu'>\n        <menu>\n            <li>\n                <a routerLink='/'>Alle Bibliotheken</a>\n            </li>\n        </menu>\n    </div>\n</div> -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/App/Components/App.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  background-color: #303030;\n  color: #E0E0E0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-family: \"Quicksand\";\n  overflow-y: auto;\n}\n.main .menu menu {\n  margin: 0;\n  padding: 0;\n}\n.main .menu menu li {\n  display: inline-block;\n}\n.main .menu menu li a {\n  display: inline-block;\n  padding: 12px;\n  text-decoration: none;\n  color: #E0E0E0;\n}\n.main .menu menu li a:hover {\n  color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/App.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "app",
            template: __webpack_require__("../../../../../src/App/Components/App.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/App.less")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=App.js.map

/***/ }),

/***/ "../../../../../src/App/Components/Library.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-grid' *ngIf='library'>\n\n    <div [ngStyle]=' { \"background-image\": \"url(\" + selectedPhotoPath + \")\" } ' class='photo-background photo'></div>\n    <div [ngStyle]=' { \"background-image\": \"url(\" + selectedPhotoPath + \")\" } ' class='photo-foreground photo'></div>\n\n    <a *ngIf='previousPath' [routerLink]='[previousPath]' class='previous-photo navigation-button'>&lt;</a>\n    <a *ngIf='nextPath' [routerLink]='[nextPath]' class='next-photo navigation-button'>&gt;</a>\n\n    <div class='photo-list' *ngIf='showPhotoList'>\n        <ng-template ngFor let-photo [ngForOf]=\"photos\">\n            <a [routerLink]='[\"/Library\", library.path, \"Photo\", photo]' *ngIf='photo === selectedPhoto' class='selected' scrollTo>\n                <img alt='Photo {{photo}}' src='/Photos/Data/{{library.path}}/x150/{{photo}}' style='max-height: 150px;' />\n            </a>\n            <a [routerLink]='[\"/Library\", library.path, \"Photo\", photo]' *ngIf='photo !== selectedPhoto'>\n                <img alt='Photo {{photo}}' src='/Photos/Data/{{library.path}}/x150/{{photo}}' style='max-height: 150px;' />\n            </a>\n        </ng-template>\n    </div>\n\n    <a class='photo-list-button' (click)='showPhotoList=!showPhotoList'>\n        <span class='shadow'>\n            <span class='shadow'>\n                <span *ngIf='showPhotoList'>Bildband ausblenden</span>\n                <span *ngIf='!showPhotoList'>Bildband einblenden</span>\n            </span>\n        </span>\n    </a>\n\n    <a routerLink='/' class='back-to-libraries'>\n        <span class='shadow'>\n            <span class='shadow'>Zu den Bibliotheken</span>\n        </span>\n    </a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/App/Components/Library.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-grid {\n  display: grid;\n  width: 100vw;\n  height: 100vh;\n  grid-template-rows: 12px 1fr auto 1fr auto;\n  grid-template-columns: 12px auto 1fr auto 12px;\n  font-family: \"Quicksand\";\n  background-color: #202020;\n}\n.main-grid .photo-background {\n  background-size: 100%;\n  -webkit-filter: blur(10px) grayscale(80%);\n          filter: blur(10px) grayscale(80%);\n  z-index: 101;\n}\n.main-grid .photo-foreground {\n  background-size: contain;\n  z-index: 102;\n}\n.main-grid .photo {\n  background-repeat: no-repeat;\n  background-position-x: 50%;\n  background-position-y: 50%;\n  grid-column-start: 1;\n  grid-column-end: 6;\n  grid-row-start: 2;\n  grid-row-end: 5;\n}\n.main-grid .navigation-button {\n  font-size: 100px;\n  text-decoration: none;\n  color: #E0E0E0;\n  grid-row-start: 3;\n  grid-row-end: 4;\n  z-index: 150;\n  display: block;\n  text-shadow: 0 0 12px black;\n}\n.main-grid .previous-photo {\n  grid-column-start: 2;\n  grid-column-end: 3;\n}\n.main-grid .next-photo {\n  grid-column-start: 4;\n  grid-column-end: 5;\n}\n.main-grid .photo-list {\n  white-space: nowrap;\n  grid-column-start: 1;\n  grid-column-end: 6;\n  grid-row-start: 5;\n  grid-row-end: 6;\n  -ms-flex-item-align: end;\n      align-self: end;\n  z-index: 150;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding: 6px;\n  display: block;\n}\n.main-grid .photo-list a {\n  padding: 6px;\n  display: inline-block;\n}\n.main-grid .photo-list a.selected {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  background-color: #E0E0E0;\n}\n.main-grid .photo-list-button {\n  grid-column-start: 3;\n  grid-column-end: 4;\n  grid-row-start: 4;\n  grid-row-end: 5;\n  -ms-flex-item-align: end;\n      align-self: end;\n}\n.main-grid .back-to-libraries {\n  grid-column-start: 3;\n  grid-column-end: 4;\n  grid-row-start: 2;\n  grid-row-end: 3;\n  -ms-flex-item-align: start;\n      align-self: start;\n}\n.main-grid a {\n  margin: 12px;\n  cursor: pointer;\n  z-index: 160;\n  text-align: center;\n  font-size: 20px;\n  text-decoration: none;\n  color: #E0E0E0;\n}\n.main-grid a:hover {\n  color: #fff;\n}\n.main-grid a,\n.main-grid .shadow {\n  text-shadow: 0 0 12px black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/Library.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_PhotoService__ = __webpack_require__("../../../../../src/App/Services/PhotoService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LibraryComponent = (function () {
    function LibraryComponent(_photoService, _activatedRoute, _router) {
        this._photoService = _photoService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.showPhotoList = true;
    }
    LibraryComponent.prototype.ngOnDestroy = function () {
        this._parameterSubscription.unsubscribe();
    };
    LibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._parameterSubscription = this._activatedRoute.params.subscribe(function (params) {
            var libraryPath = params['library'];
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].zip(_this._photoService.getPhotos(libraryPath), _this._photoService.getLibraryInfo(libraryPath))
                .subscribe(function (_a) {
                var photos = _a[0], info = _a[1];
                _this.photos = photos;
                _this.library = info;
                if (params['photo']) {
                    _this.setSelectedPhoto(params['photo']);
                }
                else {
                    _this.setSelectedPhoto(_this.photos[0]);
                }
            });
        });
    };
    LibraryComponent.prototype.setSelectedPhoto = function (photo) {
        this.selectedPhoto = photo;
        this.selectedPhotoPath = "/Photos/Data/" + this.library.path + "/1280x1280/" + this.selectedPhoto;
        if (!this.photos) {
            return;
        }
        var index = this.photos.indexOf(this.selectedPhoto);
        if (index - 1 < 0) {
            this.previousPath = null;
        }
        else {
            this.previousPath = "/Library/" + this.library.path + "/Photo/" + this.photos[index - 1];
        }
        if (index + 1 >= this.photos.length) {
            this.nextPath = null;
        }
        else {
            this.nextPath = "/Library/" + this.library.path + "/Photo/" + this.photos[index + 1];
        }
    };
    LibraryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/Library.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/Library.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_PhotoService__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_PhotoService__["a" /* PhotoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
    ], LibraryComponent);
    return LibraryComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=Library.js.map

/***/ }),

/***/ "../../../../../src/App/Components/LibraryIndex.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n    <a *ngFor='let library of libraries' [routerLink]='[\"Library\", library.path]'>\n        <img src='/Photos/Data/{{library.path}}/x150/{{library.thumbnail}}' />\n        <div class='label'>\n            <span class='name'>{{library.name}}</span>\n            <span class='description'>{{library.description}}</span>\n        </div>\n    </a>\n</div>"

/***/ }),

/***/ "../../../../../src/App/Components/LibraryIndex.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 6px;\n}\n.container a {\n  margin: 6px;\n  color: #E0E0E0;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n}\n.container a img {\n  height: 150px;\n}\n.container a .label {\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 12px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.container a .label .name {\n  font-weight: 500;\n  display: block;\n  margin: 0;\n}\n.container a .label .description {\n  display: block;\n  margin: 0;\n}\n.container a:hover .description {\n  height: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/LibraryIndex.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_PhotoService__ = __webpack_require__("../../../../../src/App/Services/PhotoService.ts");
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



var LibraryIndexComponent = (function () {
    function LibraryIndexComponent(_photoService, _activatedRoute) {
        this._photoService = _photoService;
        this._activatedRoute = _activatedRoute;
    }
    LibraryIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._photoService.getLibraries().subscribe(function (x) {
            _this.libraries = x;
        });
    };
    LibraryIndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/LibraryIndex.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/LibraryIndex.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_PhotoService__["a" /* PhotoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_PhotoService__["a" /* PhotoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], LibraryIndexComponent);
    return LibraryIndexComponent;
    var _a, _b;
}());

//# sourceMappingURL=LibraryIndex.js.map

/***/ }),

/***/ "../../../../../src/App/Directives/ScrollTo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollToDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollToDirective = (function () {
    function ScrollToDirective(_elementRef) {
        this._elementRef = _elementRef;
    }
    ScrollToDirective.prototype.ngAfterViewInit = function () {
        this._elementRef.nativeElement.scrollIntoView({ block: "end", behavior: "smooth" });
    };
    ScrollToDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
            selector: '[scrollTo]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
    ], ScrollToDirective);
    return ScrollToDirective;
    var _a;
}());

//# sourceMappingURL=ScrollTo.js.map

/***/ }),

/***/ "../../../../../src/App/Services/PhotoService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
/* unused harmony export Library */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoService = (function () {
    function PhotoService(http) {
        this.http = http;
    }
    PhotoService.prototype.getWithOptions = function (url) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        return this.http.get(url);
    };
    PhotoService.prototype.getLibraries = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].create(function (observer) {
            if (_this._libraryCache) {
                observer.next(_this._libraryCache);
                observer.complete();
            }
            else {
                _this.getWithOptions("/Photos/Data/libraries.json").subscribe(function (x) {
                    var res = x.json();
                    _this._libraryCache = res.data;
                    observer.next(_this._libraryCache);
                    observer.complete();
                }, function (error) {
                    observer.error(error);
                    observer.complete();
                });
            }
        });
    };
    PhotoService.prototype.getLibraryInfo = function (libraryPath) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].create(function (observer) {
            _this.getLibraries().subscribe(function (libs) {
                for (var _i = 0, libs_1 = libs; _i < libs_1.length; _i++) {
                    var lib = libs_1[_i];
                    if (lib.path === libraryPath) {
                        observer.next(lib);
                        observer.complete();
                        break;
                    }
                }
            });
        });
    };
    PhotoService.prototype.getPhotos = function (libraryPath) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].create(function (observer) {
            _this.getWithOptions("/Photos/Data/" + libraryPath + "/files.txt").subscribe(function (x) {
                var res = x.text().trim().split("\n");
                observer.next(res);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    PhotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], PhotoService);
    return PhotoService;
    var _a;
}());

var Library = (function () {
    function Library() {
    }
    return Library;
}());

//# sourceMappingURL=PhotoService.js.map

/***/ }),

/***/ "../../../../../src/App/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_App__ = __webpack_require__("../../../../../src/App/Components/App.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_PhotoService__ = __webpack_require__("../../../../../src/App/Services/PhotoService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_LibraryIndex__ = __webpack_require__("../../../../../src/App/Components/LibraryIndex.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_Library__ = __webpack_require__("../../../../../src/App/Components/Library.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Directives_ScrollTo__ = __webpack_require__("../../../../../src/App/Directives/ScrollTo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_7__Components_LibraryIndex__["a" /* LibraryIndexComponent */] },
    { path: "Library/:library/Photo/:photo", component: __WEBPACK_IMPORTED_MODULE_8__Components_Library__["a" /* LibraryComponent */] },
    { path: "Library/:library", component: __WEBPACK_IMPORTED_MODULE_8__Components_Library__["a" /* LibraryComponent */] },
    { path: "**", redirectTo: "/" }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__Components_App__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Components_LibraryIndex__["a" /* LibraryIndexComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Components_Library__["a" /* LibraryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Directives_ScrollTo__["a" /* ScrollToDirective */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__Components_App__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__Services_PhotoService__["a" /* PhotoService */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/Environments/Environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Environment; });
var Environment = (function () {
    function Environment() {
    }
    Environment.IsProduction = true;
    Environment.ApiUrl = "https://picosmos.azurewebsites.net/api/";
    return Environment;
}());

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