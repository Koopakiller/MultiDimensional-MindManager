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

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/App/Components/App.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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

/***/ "../../../../../src/App/Components/Dimensions.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div *ngFor='let dim of dimensions'>\n        <label>\n            <input type='checkbox' \n                   (change)='changed(dim.name);dim.isChecked = !dim.isChecked'\n                   [disabled]='!dim.isChecked && disableUncheckedDimensions'\n                   [checked]='dim.isChecked'/>\n                   {{dim.name}}\n        </label>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/App/Components/Dimensions.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/Dimensions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DimensionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_DataService__ = __webpack_require__("../../../../../src/App/Services/DataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DimensionsComponent = (function () {
    function DimensionsComponent(_dataService) {
        this._dataService = _dataService;
    }
    DimensionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getDynamicModelData(this.path).subscribe(function (x) { return _this.dimensions = x.dimensions; });
    };
    DimensionsComponent.prototype.changed = function (name) {
        var _this = this;
        this._dataService.toggleDimension(name, this.path);
        return this._dataService.getEnabledDimensions(this.path).subscribe(function (x) {
            _this._disableUncheckedDimensions = x.length == 3;
        });
    };
    Object.defineProperty(DimensionsComponent.prototype, "disableUncheckedDimensions", {
        get: function () {
            return this._disableUncheckedDimensions;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], DimensionsComponent.prototype, "path", void 0);
    DimensionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "dimensions",
            template: __webpack_require__("../../../../../src/App/Components/Dimensions.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/Dimensions.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_DataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_DataService__["a" /* DataService */]) === "function" && _a || Object])
    ], DimensionsComponent);
    return DimensionsComponent;
    var _a;
}());

//# sourceMappingURL=Dimensions.js.map

/***/ }),

/***/ "../../../../../src/App/Components/DynamicModel.html":
/***/ (function(module, exports) {

module.exports = "<div #canvas></div>\n<dimensions [path]='path'></dimensions>"

/***/ }),

/***/ "../../../../../src/App/Components/DynamicModel.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/DynamicModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicModelComponent; });
/* unused harmony export MouseControl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__("../../../../three/build/three.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_DataService__ = __webpack_require__("../../../../../src/App/Services/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DynamicModelComponent = (function () {
    function DynamicModelComponent(canvas, _dataService, _activatedRoute) {
        var _this = this;
        this.canvas = canvas;
        this._dataService = _dataService;
        this._activatedRoute = _activatedRoute;
        this.path = "ABCM";
        this._textElements = [];
        this.zero = new __WEBPACK_IMPORTED_MODULE_1_three__["m" /* Vector3 */](0, 0, 0);
        this._dataService.displayModelChanged.subscribe(function () {
            _this.init();
        });
    }
    DynamicModelComponent.prototype.ngOnDestroy = function () {
        this._parameterSubscription.unsubscribe();
    };
    DynamicModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._parameterSubscription = this._activatedRoute.params.subscribe(function (params) {
            _this.path = params['path'];
            _this._dataService.getDynamicModelData(_this.path).subscribe(function (data) {
                _this._data = data;
                _this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["j" /* Scene */]();
                _this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["i" /* PerspectiveCamera */](70, window.innerWidth / window.innerHeight, 0.01, 10);
                _this.camera.position.z = 5;
                _this.light = new __WEBPACK_IMPORTED_MODULE_1_three__["d" /* HemisphereLight */](0xffffbb, 0x080820, 1);
                _this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["n" /* WebGLRenderer */]({ antialias: true });
                _this.renderer.setSize(window.innerWidth, window.innerHeight);
                _this.canvas.nativeElement.appendChild(_this.renderer.domElement);
                _this.mc = new MouseControl(_this.canvas.nativeElement);
                _this.mc.rotateChanged.subscribe(function (_a) {
                    var cx = _a[0], cy = _a[1], cz = _a[2];
                    _this.scene.rotation.x += cx;
                    _this.scene.rotation.y += cy;
                    _this.scene.rotation.z += cz;
                    _this.renderer.render(_this.scene, _this.camera);
                    // for(let el of this._textElements){
                    //     el.rotation.x -= cx; 
                    //     el.rotation.y -= cy;
                    //     el.rotation.z -= cz;
                    // }
                });
                _this.mc.zoomChanged.subscribe(function (cz) {
                    var z = _this.camera.position.z + cz;
                    if (z < 0.5) {
                        z = 0.5;
                    }
                    if (z > 10) {
                        z = 10;
                    }
                    ;
                    _this.camera.position.z = z;
                    _this.renderer.render(_this.scene, _this.camera);
                });
                var loader = new __WEBPACK_IMPORTED_MODULE_1_three__["b" /* FontLoader */]();
                loader.load('Assets/Fonts/helvetiker_regular.typeface.json', function (font) {
                    _this._font = font;
                    _this.init();
                });
            });
        });
    };
    DynamicModelComponent.prototype.init = function () {
        var _this = this;
        while (this.scene.children.length > 0) {
            this.scene.remove(this.scene.children[0]);
        }
        this._textElements = [];
        this.scene.add(this.light);
        var geometry;
        var material;
        var mesh;
        //draw the zero-sphere
        this.scene.add(this.createSphere(this.zero, 0.02, this._data.common.orientationColor));
        //draw the speres for each enabled dimension
        var dimPoints = [];
        this._dataService.getEnabledDimensions(this.path).subscribe(function (dims) {
            for (var index = 0; index < dims.length; ++index) {
                var pos = new __WEBPACK_IMPORTED_MODULE_1_three__["m" /* Vector3 */](index == 0 ? 1 : 0, index == 1 ? 1 : 0, index == 2 ? 1 : 0);
                var sphere = _this.drawDimensionSphere(pos, dims[index].name, dims[index].color);
                dimPoints.push(pos);
            }
            _this.renderer.render(_this.scene, _this.camera);
        });
    };
    DynamicModelComponent.prototype.distance = function (p1, p2) {
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2) + Math.pow(p1.z - p2.z, 2));
    };
    DynamicModelComponent.prototype.drawDimensionSphere = function (pos, name, color) {
        var radiusSize = 0.05;
        var sphere = this.createSphere(pos, radiusSize, color, 0.6);
        this.scene.add(sphere);
        var text = this.createText(name, pos, 0xffffff, this._font);
        var box = new __WEBPACK_IMPORTED_MODULE_1_three__["a" /* Box3 */]().setFromObject(text);
        var txtSize = box.getSize();
        var scale = Math.min(radiusSize / txtSize.x, radiusSize / txtSize.y, radiusSize / txtSize.z);
        text.scale.set(scale, scale, scale);
        text.position.x -= txtSize.x * scale / 2;
        text.position.y -= txtSize.y * scale / 2;
        text.position.z -= txtSize.z * scale / 2;
        this.scene.add(text);
        this._textElements.push(text);
        var lineMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["f" /* LineBasicMaterial */]({ color: color });
        var lineGeo = new __WEBPACK_IMPORTED_MODULE_1_three__["c" /* Geometry */]();
        lineGeo.vertices.push(this.zero);
        var posLength = this.distance(pos, this.zero);
        var posLength2 = posLength - radiusSize;
        lineGeo.vertices.push(new __WEBPACK_IMPORTED_MODULE_1_three__["m" /* Vector3 */](pos.x / posLength * posLength2, pos.y / posLength * posLength2, pos.z / posLength * posLength2));
        var line = new __WEBPACK_IMPORTED_MODULE_1_three__["e" /* Line */](lineGeo, lineMaterial);
        this.scene.add(line);
    };
    DynamicModelComponent.prototype.createSphere = function (pos, radius, color, opacity) {
        var geometry = new __WEBPACK_IMPORTED_MODULE_1_three__["k" /* SphereGeometry */](radius, 32, 32);
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["h" /* MeshLambertMaterial */]({ color: color });
        material.transparent = true;
        material.opacity = opacity ? opacity : 1;
        var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* Mesh */](geometry, material);
        mesh.position.x = pos.x;
        mesh.position.y = pos.y;
        mesh.position.z = pos.z;
        return mesh;
    };
    DynamicModelComponent.prototype.createText = function (str, pos, color, font) {
        var text = new __WEBPACK_IMPORTED_MODULE_1_three__["l" /* TextGeometry */](str, {
            font: font,
            size: 1,
            height: 0.02
        });
        var material = new __WEBPACK_IMPORTED_MODULE_1_three__["h" /* MeshLambertMaterial */]({ color: color });
        var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["g" /* Mesh */](text, material);
        mesh.position.x = pos.x;
        mesh.position.y = pos.y;
        mesh.position.z = pos.z;
        return mesh;
    };
    DynamicModelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/DynamicModel.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/DynamicModel.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_DataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_DataService__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
    ], DynamicModelComponent);
    return DynamicModelComponent;
    var _a, _b, _c;
}());

var MouseControl = (function () {
    function MouseControl(_canvas) {
        var _this = this;
        this._canvas = _canvas;
        this.rotateChangedSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        this.rotateChanged = this.rotateChangedSubject.asObservable();
        this.zoomChangedSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
        this.zoomChanged = this.zoomChangedSubject.asObservable();
        this.mouseDown = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this._canvas.addEventListener('mousemove', function (e) { return _this.onMouseMove(e); }, false);
        this._canvas.addEventListener('mousedown', function (e) { return _this.onMouseDown(e); }, false);
        this._canvas.addEventListener('mouseup', function (e) { return _this.onMouseUp(e); }, false);
        this._canvas.addEventListener('wheel', function (e) { return _this.onScroll(e); }, false);
    }
    MouseControl.prototype.onMouseDown = function (evt) {
        evt.preventDefault();
        this.mouseDown = true;
        this.mouseX = evt.clientX;
        this.mouseY = evt.clientY;
    };
    MouseControl.prototype.onMouseUp = function (evt) {
        evt.preventDefault();
        this.mouseDown = false;
    };
    MouseControl.prototype.onScroll = function (evt) {
        evt.preventDefault();
        this.zoomChangedSubject.next(evt.deltaY / 100);
    };
    MouseControl.prototype.rotateScene = function (deltaX, deltaY) {
        this.rotateChangedSubject.next([
            deltaY / 100,
            deltaX / 100,
            0
        ]);
    };
    MouseControl.prototype.onMouseMove = function (evt) {
        if (!this.mouseDown) {
            return;
        }
        evt.preventDefault();
        var deltaX = evt.clientX - this.mouseX, deltaY = evt.clientY - this.mouseY;
        this.mouseX = evt.clientX;
        this.mouseY = evt.clientY;
        this.rotateScene(deltaX, deltaY);
    };
    return MouseControl;
}());

//# sourceMappingURL=DynamicModel.js.map

/***/ }),

/***/ "../../../../../src/App/Components/ImageModel.html":
/***/ (function(module, exports) {

module.exports = "<img src='{{imagePath}}' alt='Model Image'/>"

/***/ }),

/***/ "../../../../../src/App/Components/ImageModel.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/ImageModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_DataService__ = __webpack_require__("../../../../../src/App/Services/DataService.ts");
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



var ImageModelComponent = (function () {
    function ImageModelComponent(_dataService, _activatedRoute) {
        this._dataService = _dataService;
        this._activatedRoute = _activatedRoute;
    }
    ImageModelComponent.prototype.ngOnDestroy = function () {
        this._parameterSubscription.unsubscribe();
    };
    ImageModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._parameterSubscription = this._activatedRoute.params.subscribe(function (params) {
            _this.path = params['path'];
            _this._dataService.getImageModelData(_this.path).subscribe(function (x) {
                _this.imagePath = "/Model/Data/" + _this.path + "/" + x.fileName;
                console.log(x);
            });
        });
    };
    ImageModelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/ImageModel.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/ImageModel.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_DataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_DataService__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], ImageModelComponent);
    return ImageModelComponent;
    var _a, _b;
}());

//# sourceMappingURL=ImageModel.js.map

/***/ }),

/***/ "../../../../../src/App/Components/Index.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor='let model of models' [ngSwitch]='model.type'>\n    <a *ngSwitchCase='\"dynamic\"' [routerLink]='[\"/Dynamic\", model.path]'>{{model.path}}</a>\n    <a *ngSwitchCase='\"image\"' [routerLink]='[\"/Image\", model.path]'>{{model.path}}</a>\n</div>"

/***/ }),

/***/ "../../../../../src/App/Components/Index.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/Index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_DataService__ = __webpack_require__("../../../../../src/App/Services/DataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = (function () {
    function IndexComponent(_dataService) {
        this._dataService = _dataService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getAvailableModels().subscribe(function (x) { return _this.models = x; });
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/Index.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/Index.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_DataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_DataService__["a" /* DataService */]) === "function" && _a || Object])
    ], IndexComponent);
    return IndexComponent;
    var _a;
}());

//# sourceMappingURL=Index.js.map

/***/ }),

/***/ "../../../../../src/App/Services/DataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* unused harmony export ModelType */
/* unused harmony export ModelData */
/* unused harmony export DynamicModelData */
/* unused harmony export DynamicModelDimension */
/* unused harmony export ImageModelData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
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



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this._displayModelChangedSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["ReplaySubject"](1);
        this.displayModelChanged = this._displayModelChangedSubject.asObservable();
        this._enabledDimensions = {};
    }
    DataService.prototype.toggleDimension = function (name, path) {
        if (this._enabledDimensions[path].indexOf(name) >= 0) {
            this._enabledDimensions[path].splice(this._enabledDimensions[path].indexOf(name), 1);
            this._displayModelChangedSubject.next(null);
        }
        else {
            if (this._enabledDimensions[path].length <= 3) {
                this._enabledDimensions[path].push(name);
                this._displayModelChangedSubject.next(null);
            }
        }
    };
    DataService.prototype.getAllDimensions = function (path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            _this.getData(path).subscribe(function (data) {
                _this._enabledDimensions[path] = data.dimensions.filter(function (x) { return x.isChecked; }).map(function (x) { return x.name; });
                observer.next(data.dimensions);
                observer.complete();
            });
        });
    };
    DataService.prototype.getEnabledDimensions = function (path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            _this.getAllDimensions(path).subscribe(function (_) {
                _this.getData(path).subscribe(function (data) {
                    observer.next(data.dimensions.filter(function (x) { return _this._enabledDimensions[path].indexOf(x.name) >= 0; }));
                    observer.complete();
                });
            });
        });
    };
    DataService.prototype.getDynamicModelData = function (path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            _this.getData(path).subscribe(function (data) {
                observer.next(data);
                observer.complete();
            });
        });
    };
    DataService.prototype.getImageModelData = function (path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            _this.getWithOptions("/Model/Data/" + path + "/index.json").subscribe(function (x) {
                var res = x.json();
                observer.next(res);
                observer.complete();
            }, function (error) {
                observer.error(error);
                observer.complete();
            });
        });
    };
    DataService.prototype.getWithOptions = function (url) {
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]();
        return this.http.get(url);
    };
    DataService.prototype.getData = function (path) {
        var _this = this;
        // if (this.data[path]) {
        //     return Observable.create((observer: Observer<DynamicModelData>) => {
        //         observer.next(this.data[path]);
        //         observer.complete();
        //     });
        // }
        // else {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
            _this.getAvailableModels().subscribe(function (l) {
                var item = l.filter(function (x) { return x.path == path; })[0];
                if (!item) {
                    observer.complete();
                }
                else {
                    switch (item.type) {
                        case ModelType.dynamic:
                            _this.getWithOptions("/Model/Data/" + path + "/index.json").subscribe(function (x) {
                                var res = x.json();
                                observer.next(res);
                                observer.complete();
                            }, function (error) {
                                observer.error(error);
                                observer.complete();
                            });
                            break;
                        default:
                            observer.error("unknown model type");
                            break;
                    }
                }
            });
        });
        //}
    };
    DataService.prototype.getAvailableModels = function () {
        var _this = this;
        if (this.availableModels) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
                observer.next(_this.availableModels);
                observer.complete();
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (observer) {
                _this.getWithOptions("/Model/Data/index.json").subscribe(function (x) {
                    var res = x.json();
                    observer.next(res);
                    observer.complete();
                }, function (error) {
                    observer.error(error);
                    observer.complete();
                });
            });
        }
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], DataService);
    return DataService;
    var _a;
}());

var ModelType;
(function (ModelType) {
    ModelType["dynamic"] = "dynamic";
    ModelType["image"] = "image";
})(ModelType || (ModelType = {}));
var ModelData = (function () {
    function ModelData() {
    }
    return ModelData;
}());

var DynamicModelData = (function () {
    function DynamicModelData() {
    }
    return DynamicModelData;
}());

var DynamicModelDimension = (function () {
    function DynamicModelDimension() {
    }
    return DynamicModelDimension;
}());

var ImageModelData = (function () {
    function ImageModelData() {
    }
    return ImageModelData;
}());

//# sourceMappingURL=DataService.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_DataService__ = __webpack_require__("../../../../../src/App/Services/DataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_Dimensions__ = __webpack_require__("../../../../../src/App/Components/Dimensions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_DynamicModel__ = __webpack_require__("../../../../../src/App/Components/DynamicModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_Index__ = __webpack_require__("../../../../../src/App/Components/Index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_ImageModel__ = __webpack_require__("../../../../../src/App/Components/ImageModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: "", pathMatch: "full", redirectTo: "/Index" },
    { path: "Index", component: __WEBPACK_IMPORTED_MODULE_9__Components_Index__["a" /* IndexComponent */] },
    { path: "Image/:path", component: __WEBPACK_IMPORTED_MODULE_10__Components_ImageModel__["a" /* ImageModelComponent */] },
    { path: "Dynamic/:path", component: __WEBPACK_IMPORTED_MODULE_8__Components_DynamicModel__["a" /* DynamicModelComponent */] },
    { path: "**", redirectTo: "/Index" }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__Components_App__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Components_Dimensions__["a" /* DimensionsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Components_DynamicModel__["a" /* DynamicModelComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Components_ImageModel__["a" /* ImageModelComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Components_Index__["a" /* IndexComponent */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__Components_App__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__Services_DataService__["a" /* DataService */]
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