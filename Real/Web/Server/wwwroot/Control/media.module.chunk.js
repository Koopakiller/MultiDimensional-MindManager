webpackJsonp(["media.module"],{

/***/ "../../../../../src/App/Media/Components/Index.html":
/***/ (function(module, exports) {

module.exports = "\n<section class='section'>\n   \n    <span class='section-header'>Media</span>\n\n    <div class='section-content'>\n\n        <p>This is the Media Applet.</p>\n\n    </div>\n    \n</section>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/App/Media/Components/Index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/App/Media/Components/Index.html")
    })
], IndexComponent);

//# sourceMappingURL=Index.js.map

/***/ }),

/***/ "../../../../../src/App/Media/media.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModule", function() { return MediaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_Index__ = __webpack_require__("../../../../../src/App/Media/Components/Index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Shared_Services_GlobalLoadingIndicatorService__ = __webpack_require__("../../../../../src/App/Shared/Services/GlobalLoadingIndicatorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Shared_Services_NavigationService__ = __webpack_require__("../../../../../src/App/Shared/Services/NavigationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Shared_shared_module__ = __webpack_require__("../../../../../src/App/Shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var mediaRoutes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_5__Components_Index__["a" /* IndexComponent */]
    },
];
var MediaModule = (function () {
    function MediaModule() {
    }
    return MediaModule;
}());
MediaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(mediaRoutes),
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__Shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__Components_Index__["a" /* IndexComponent */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__Components_Index__["a" /* IndexComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__Shared_Services_GlobalLoadingIndicatorService__["a" /* GlobalLoadingIndicatorService */],
            __WEBPACK_IMPORTED_MODULE_7__Shared_Services_NavigationService__["a" /* NavigationService */]
        ],
    })
], MediaModule);

//# sourceMappingURL=media.module.js.map

/***/ })

});
//# sourceMappingURL=media.module.chunk.js.map