webpackJsonp(["test.module"],{

/***/ "../../../../../src/App/Test/Components/Index.html":
/***/ (function(module, exports) {

module.exports = "<section class='section'>\n\n    <span class='section-header'>Test</span>\n\n    <div class='section-content'>\n        <a routerLink='Style'>Style</a>\n    </div>\n\n</section>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/App/Test/Components/Index.ts":
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
        selector: "home",
        template: __webpack_require__("../../../../../src/App/Test/Components/Index.html")
    })
], IndexComponent);

//# sourceMappingURL=Index.js.map

/***/ }),

/***/ "../../../../../src/App/Test/Components/Style/FormSection.html":
/***/ (function(module, exports) {

module.exports = "<section class='section form'>\n\n    <span class='section-header'><code>.section + .form</code>-class - Style Test</span>\n\n    <div class='section-content'>\n\n        <h1>1 Tile</h1>\n\n        <div class='tiles'>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 1</div>\n                <div class='description'><p>Description 1 with a too long text to fit into this tile always.</p></div>\n            </a>\n        </div>\n        \n        <h1>2 Tiles</h1>\n\n        <div class='tiles'>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 1</div>\n                <div class='description'><p>Description 1 with a too long text to fit into this tile always.</p></div>\n            </a>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 2</div>\n                <div class='description'><p>Description 2 with a too long text to fit into this tile always.</p></div>\n            </a>\n        </div>\n        \n        <h1>3 Tiles</h1>\n\n        <div class='tiles'>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 1</div>\n                <div class='description'><p>Description 1 with a too long text to fit into this tile always.</p></div>\n            </a>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 2</div>\n                <div class='description'><p>Description 2 with a too long text to fit into this tile always.</p></div>\n            </a>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 3</div>\n                <div class='description'><p>Description 3 with a too long text to fit into this tile always.</p></div>\n            </a>\n        </div>\n        \n        <h1>4 Tiles</h1>\n\n        <div class='tiles'>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 1</div>\n                <div class='description'><p>Description 1 with a too long text to fit into this tile always.</p></div>\n            </a>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 2</div>\n                <div class='description'><p>Description 2 with a too long text to fit into this tile always.</p></div>\n            </a>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 3</div>\n                <div class='description'><p>Description 3 with a too long text to fit into this tile always.</p></div>\n            </a>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 4</div>\n                <div class='description'><p>Description 4 with a too long text to fit into this tile always.</p></div>\n            </a>\n        </div>\n        \n        <h1>5 Tiles</h1>\n\n        <div class='tiles'>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 1</div>\n                <div class='description'><p>Description 1 with a too long text to fit into this tile always.</p></div>\n            </a>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 2</div>\n                <div class='description'><p>Description 2 with a too long text to fit into this tile always.</p></div>\n            </a>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 3</div>\n                <div class='description'><p>Description 3 with a too long text to fit into this tile always.</p></div>\n            </a>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 4</div>\n                <div class='description'><p>Description 4 with a too long text to fit into this tile always.</p></div>\n            </a>\n            <a class='tile'>\n                <i class='material-icons icon'>settings</i>\n                <div class='header'>Tile 5</div>\n                <div class='description'><p>Description 5 with a too long text to fit into this tile always.</p></div>\n            </a>\n        </div>\n        \n    </div>\n\n</section>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/App/Test/Components/Style/FormSection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormSectionComponent = (function () {
    function FormSectionComponent() {
    }
    return FormSectionComponent;
}());
FormSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/App/Test/Components/Style/FormSection.html")
    })
], FormSectionComponent);

//# sourceMappingURL=FormSection.js.map

/***/ }),

/***/ "../../../../../src/App/Test/Components/Style/Index.html":
/***/ (function(module, exports) {

module.exports = "<section class='section'>\n\n    <span class='section-header'>Style Tests</span>\n\n    <div class='section-content'>\n        <a routerLink='Section/Form'><code>.section + .form</code>-class</a><br/>\n        <a routerLink='Section/Text'><code>.section + .text</code>-class</a>\n    </div>\n\n</section>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/App/Test/Components/Style/Index.ts":
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
        template: __webpack_require__("../../../../../src/App/Test/Components/Style/Index.html")
    })
], IndexComponent);

//# sourceMappingURL=Index.js.map

/***/ }),

/***/ "../../../../../src/App/Test/Components/Style/TextSection.html":
/***/ (function(module, exports) {

module.exports = "<section class='section'>\n    <span class='section-header'><code>.section + .text</code>-class - Style Test</span>\n    <div class='section-content'>\n        <h1>Header 1 <code>sample-code</code></h1>\n        <h2>Header 2 <code>sample-code</code></h2>\n        <h3>Header 3 <code>sample-code</code></h3>\n        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore\n            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing\n            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At\n            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est\n            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores\n            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>\n        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat\n            nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit\n            augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam\n            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>\n        <h2>Justified Text</h2>\n        <p class='justify'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat\n            nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit\n            augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam\n            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>\n        <section>\n            <h2>Formatted Text</h2>\n            <h3>Links</h3>\n            <ol start='8'>\n                <li><a>Anchor without <code>href</code></a></li>\n                <li><a href='#'>Anchor with <code>href='#'</code></a></li>\n                <li><a href='/'>Anchor with <code>href='/'</code></a></li>\n                <li><a href='http://microsoft.com/'>Anchor with <code>href='http://microsoft.com/'</code></a></li>\n                <li><a href='https://google.com/'>Anchor with <code>href='https://google.com/'</code></a></li>\n            </ol>\n            <h3>Others</h3>\n            <ul>\n                <li><b>Bold text</b></li>\n                <li><i>Italic text</i></li>\n                <li><em>Emphasized text</em></li>\n                <li><strong>Strong text</strong></li>\n                <li>\n                    <u>Underlined text</u>\n                </li>\n                <li>\n                    <s>No longer correct, accurate or relevant text</s>\n                </li>\n                <li>\n                    <del>Deleted text</del>\n                    <ins>inserted text</ins>\n                </li>\n                <li><code>some.Code();</code></li>\n            </ul>\n        </section>\n        <h2>Tables</h2>\n        <h3>Table with all features</h3>\n        <table>\n            <tr>\n                <th>Header a</th>\n                <th>Header b</th>\n                <th>Header c<br/>Line 2</th>\n                <th>Header d</th>\n                <th class='action-column'>Actions</th>\n            </tr>\n            <tr>\n                <td>Value 1.a<br/>Line 2</td>\n                <td>Value 1.b</td>\n                <td rowspan='2'>Value 1.c (rowspan='2')</td>\n                <td>Value 1.d</td>\n                <td class='action-column'><a>Sample</a></td>\n            </tr>\n            <tr>\n                <td colspan='2'>Value 2.a (colspan='2')</td>\n                <td>Value 2.d</td>\n                <td class='action-column'><a>Sample</a></td>\n            </tr>\n            <tr>\n                <td colspan='2' rowspan='2'>Value 3.a (colspan='2', rowspan='2')<br/>Line 2</td>\n                <td>Value 1.c</td>\n                <td>Value 1.d<br/>Line 2</td>\n                <td class='action-column'><a><img src='http://placehold.it/16x16' alt='IMG'/></a> <a><img src='http://placehold.it/16x16' alt='IMG'/></a>                    <a><img src='http://placehold.it/16x16' alt='IMG'/></a></td>\n            </tr>\n            <tr>\n                <td colspan='2'>Value 4.c (colspan='2')</td>\n                <td class='action-column'><a><img src='http://placehold.it/16x16' alt='IMG'/></a> <a><img src='http://placehold.it/16x16' alt='IMG'/></a></td>\n            </tr>\n            <tbody>\n                <tr>\n                    <td>Value 100.a</td>\n                    <td>Value 100.b</td>\n                    <td>Value 100.c</td>\n                    <td>Value 100.d</td>\n                    <td class='action-column'><a>Details</a></td>\n                </tr>\n                <tr class='details-row'>\n                    <td colspan='5'>\n                        <span class='header'>Details:</span>\n                        <table>\n                            <tr>\n                                <th>Key</th>\n                                <th>Value</th>\n                            </tr>\n                            <tr>\n                                <td>A</td>\n                                <td>1.1</td>\n                            </tr>\n                            <tr>\n                                <td>B</td>\n                                <td>2.1</td>\n                            </tr>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n            <tbody>\n                <tr>\n                    <td>Value 101.a</td>\n                    <td>Value 101.b</td>\n                    <td>Value 101.c</td>\n                    <td>Value 101.d</td>\n                    <td class='action-column'><a>Details</a></td>\n                </tr>\n                <tr class='details-row'>\n                    <td colspan='5'>\n                        <span class='header'>Details:</span>\n                        <table>\n                            <tr>\n                                <th>Key</th>\n                                <th>Value</th>\n                            </tr>\n                            <tr>\n                                <td>A</td>\n                                <td>1.2</td>\n                            </tr>\n                            <tr>\n                                <td>B</td>\n                                <td>2.2</td>\n                            </tr>\n                        </table>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <h3>Simple table without <code>tbody</code></h3>\n        <table>\n            <tr>\n                <th>Header a</th>\n                <th>Header b</th>\n                <th>Header c<br/>Line 2</th>\n                <th>Header d</th>\n                <th class='action-column'>Actions</th>\n            </tr>\n            <tr>\n                <td>Value 5.a</td>\n                <td>Value 5.b</td>\n                <td>Value 5.c</td>\n                <td>Value 5.d</td>\n                <td class='action-column'><a>Sample</a></td>\n            </tr>\n            <tr>\n                <td>Value 6.a</td>\n                <td>Value 6.b</td>\n                <td>Value 6.c</td>\n                <td>Value 6.d</td>\n                <td class='action-column'><a>Sample</a></td>\n            </tr>\n        </table>\n        <table>\n            <tr>\n                <th>Second a</th>\n                <th>Second b</th>\n                <th>Second c</th>\n                <th>Second d</th>\n                <th class='action-column'>Actions</th>\n            </tr>\n            <tr>\n                <td>Value 7.a</td>\n                <td>Value 7.b</td>\n                <td>Value 7.c</td>\n                <td>Value 7.d</td>\n                <td class='action-column'><a>Sample</a></td>\n            </tr>\n            <tr>\n                <td>Value 8.a</td>\n                <td>Value 8.b</td>\n                <td>Value 8.c</td>\n                <td>Value 8.d</td>\n                <td class='action-column'><a>Sample</a></td>\n            </tr>\n        </table>\n        <h3>Simple table with <code>tbody</code></h3>\n        <table>\n            <tr>\n                <th>Header a<br/>Line 2</th>\n                <th>Header b<br/>Line 2</th>\n                <th>Header c</th>\n                <th>Header d</th>\n                <th class='action-column'>Actions</th>\n            </tr>\n            <tbody>\n                <tr>\n                    <td>Value 9.a</td>\n                    <td>Value 9.b</td>\n                    <td>Value 9.c</td>\n                    <td>Value 9.d</td>\n                    <td class='action-column'><a>Sample</a></td>\n                </tr>\n                <tr class='details-row'>\n                    <td colspan='5'>\n                        Details...\n                    </td>\n                </tr>\n            </tbody>\n            <tbody>\n                <tr>\n                    <td>Value 10.a</td>\n                    <td>Value 10.b</td>\n                    <td>Value 10.c</td>\n                    <td>Value 10.d</td>\n                    <td class='action-column'><a>Sample</a></td>\n                </tr>\n                <tr class='details-row'>\n                    <td colspan='5'>\n                        Details...\n                    </td>\n                </tr>\n            </tbody>\n            <tbody>\n                <tr>\n                    <td>Value 11.a</td>\n                    <td>Value 11.b</td>\n                    <td>Value 11.c</td>\n                    <td>Value 11.d</td>\n                    <td class='action-column'><a>Sample</a></td>\n                </tr>\n                <tr class='details-row'>\n                    <td colspan='5'>\n                        Details...\n                    </td>\n                </tr>\n            </tbody>\n            <tbody>\n                <tr>\n                    <td>Value 12.a</td>\n                    <td>Value 12.b</td>\n                    <td>Value 12.c</td>\n                    <td>Value 12.d</td>\n                    <td class='action-column'><a>Sample</a></td>\n                </tr>\n                <tr class='details-row'>\n                    <td colspan='5'>\n                        Details...\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <h3><code>.form-table</code></h3>\n        <table class='form-table'>\n            <tr>\n                <td class=''>Cell without class</td>\n                <td class='good-cell'>good-cell</td>\n                <td class='danger-cell'>danger-cell</td>\n                <td class='error-cell'>error-cell</td>\n            </tr>\n        </table>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/App/Test/Components/Style/TextSection.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TextSectionComponent = (function () {
    function TextSectionComponent() {
    }
    return TextSectionComponent;
}());
TextSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/App/Test/Components/Style/TextSection.html")
    })
], TextSectionComponent);

//# sourceMappingURL=TextSection.js.map

/***/ }),

/***/ "../../../../../src/App/Test/test.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Shared_Services_GlobalLoadingIndicatorService__ = __webpack_require__("../../../../../src/App/Shared/Services/GlobalLoadingIndicatorService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Shared_Services_NavigationService__ = __webpack_require__("../../../../../src/App/Shared/Services/NavigationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_Index__ = __webpack_require__("../../../../../src/App/Test/Components/Index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_Style_Index__ = __webpack_require__("../../../../../src/App/Test/Components/Style/Index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Shared_shared_module__ = __webpack_require__("../../../../../src/App/Shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_Style_FormSection__ = __webpack_require__("../../../../../src/App/Test/Components/Style/FormSection.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Components_Style_TextSection__ = __webpack_require__("../../../../../src/App/Test/Components/Style/TextSection.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var financesRoutes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_7__Components_Index__["a" /* IndexComponent */],
        children: [
            {
                path: "Style",
                component: __WEBPACK_IMPORTED_MODULE_8__Components_Style_Index__["a" /* IndexComponent */],
                children: [
                    { path: "Section/Form", component: __WEBPACK_IMPORTED_MODULE_10__Components_Style_FormSection__["a" /* FormSectionComponent */] },
                    { path: "Section/Text", component: __WEBPACK_IMPORTED_MODULE_11__Components_Style_TextSection__["a" /* TextSectionComponent */] }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* RouterModule */].forChild(financesRoutes),
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__Shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__Components_Index__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Components_Style_Index__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Components_Style_FormSection__["a" /* FormSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_11__Components_Style_TextSection__["a" /* TextSectionComponent */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_7__Components_Index__["a" /* IndexComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__Shared_Services_GlobalLoadingIndicatorService__["a" /* GlobalLoadingIndicatorService */],
            __WEBPACK_IMPORTED_MODULE_6__Shared_Services_NavigationService__["a" /* NavigationService */]
        ],
    })
], TestModule);

//# sourceMappingURL=test.module.js.map

/***/ })

});
//# sourceMappingURL=test.module.chunk.js.map