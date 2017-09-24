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

module.exports = "<section id='section-data-input'>\n    <header i18n=\"@@app-section-DataInput-header\">Data Input</header>\n    <router-outlet name=\"data-input\"></router-outlet>\n</section>\n\n<section id=\"section-common-input\">\n    <header i18n=\"@@app-section-CommonSettings-header\">Common Settings</header>\n    <settings-input></settings-input>\n</section>\n\n<section id=\"section-preview\">\n    <header i18n=\"@@app-section-Preview-header\">Preview</header>\n    <code-preview></code-preview>\n</section>\n\n<router-outlet id=\"message-outlet\" name=\"popup\"></router-outlet>"

/***/ }),

/***/ "../../../../../src/App/Components/App.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section > header {\n  font-size: x-large;\n  padding-left: 12px;\n  padding-right: 12px;\n  margin: 0;\n  border-top: 1px solid #777777;\n  padding-top: 6px;\n}\nsection:first-of-type > header {\n  border-top: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/App.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
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

/***/ "../../../../../src/App/Components/CodePreview.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preview\">\n\n    <div>\n        <input type=\"button\" \n               (click)=\"insertIntoDocument()\" \n               value=\"Insert Code into your Document\" \n               i18n-value=\"@@CodePreview-InsertButtonText\"\n               *ngIf=\"isHostedInOffice && imageUrl\" />\n    </div>\n\n    <img *ngIf=\"imageUrl\" src=\"{{imageUrl}}\" alt=\"QR Code\" />\n    <span *ngIf=\"!imageUrl\" i18n=\"@@CodePreview-NoDataInfoText\">Please set some data to generate a QR code.</span>\n\n</div>"

/***/ }),

/***/ "../../../../../src/App/Components/CodePreview.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview {\n  text-align: center;\n}\n.preview img {\n  max-width: 100%;\n  max-height: 320px;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/CodePreview.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_QRCodeService__ = __webpack_require__("../../../../../src/App/Services/QRCodeService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_InputService__ = __webpack_require__("../../../../../src/App/Services/InputService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_OfficeService__ = __webpack_require__("../../../../../src/App/Services/OfficeService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_QRCodeFileFormat__ = __webpack_require__("../../../../../src/App/Model/QRCodeFileFormat.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CodePreviewComponent = (function () {
    function CodePreviewComponent(_inputService, _qrCodeService, _officeService) {
        var _this = this;
        this._inputService = _inputService;
        this._qrCodeService = _qrCodeService;
        this._officeService = _officeService;
        this.isHostedInOffice = false;
        this._inputService.dataSourceObservable.debounceTime(500).subscribe(function (data) {
            setTimeout(function () {
                _this.config = data;
                _this.updateCode();
            });
        });
    }
    CodePreviewComponent.prototype.updateCode = function () {
        if (this.config && this.config.dataString && this.config.dataString.length > 0) {
            this.imageUrl = this._qrCodeService.getCodeUrl(this.config, __WEBPACK_IMPORTED_MODULE_4__Model_QRCodeFileFormat__["a" /* QRCodeFileFormat */].svg);
        }
        else {
            this.imageUrl = null;
        }
        this.isHostedInOffice = this._officeService.isHostedInOffice;
    };
    CodePreviewComponent.prototype.insertIntoDocument = function () {
        var url = this._qrCodeService.getCodeUrl(this.config, __WEBPACK_IMPORTED_MODULE_4__Model_QRCodeFileFormat__["a" /* QRCodeFileFormat */].png);
        this._officeService.insertQRCode(url);
    };
    CodePreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "code-preview",
            template: __webpack_require__("../../../../../src/App/Components/CodePreview.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/CodePreview.less"), __webpack_require__("../../../../../src/App/Styles/Form.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_InputService__["a" /* InputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_InputService__["a" /* InputService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_QRCodeService__["a" /* QRCodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_QRCodeService__["a" /* QRCodeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_OfficeService__["a" /* OfficeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_OfficeService__["a" /* OfficeService */]) === "function" && _c || Object])
    ], CodePreviewComponent);
    return CodePreviewComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=CodePreview.js.map

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/ComponentBase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return InputRoutingComponentBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataInputComponentBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GenericDataInputComponentBase; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Base class for components with navigation feature */
var InputRoutingComponentBase = (function () {
    function InputRoutingComponentBase(_router, _activatedRoute, _inputService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._inputService = _inputService;
    }
    InputRoutingComponentBase.prototype.goTo = function (name) {
        this._router.navigate([{ outlets: { "data-input": name } }], { relativeTo: this._activatedRoute.parent });
    };
    return InputRoutingComponentBase;
}());

/** Base class for components which can modify the stored data in InputService */
var DataInputComponentBase = (function (_super) {
    __extends(DataInputComponentBase, _super);
    function DataInputComponentBase(router, activatedRoute, inputService) {
        return _super.call(this, router, activatedRoute, inputService) || this;
    }
    DataInputComponentBase.prototype.ngOnInit = function () {
        this._inputService.resetDataString();
    };
    /** Populates the data-object into the InputService */
    DataInputComponentBase.prototype.updateInputService = function (data, key) {
        this._inputService.provideDataString(data.generateDataString());
        this._inputService.setDataObject(key, data);
    };
    return DataInputComponentBase;
}(InputRoutingComponentBase));

/** Base class for components which store data in InputService and can restore the data */
var GenericDataInputComponentBase = (function (_super) {
    __extends(GenericDataInputComponentBase, _super);
    function GenericDataInputComponentBase(router, activatedRoute, inputService, _key) {
        var _this = _super.call(this, router, activatedRoute, inputService) || this;
        _this._key = _key;
        return _this;
    }
    /** Updates data-property from existing data in InputService.
     * Initializes data-property if no data exists in InputService */
    GenericDataInputComponentBase.prototype.tryGetDataFromInputService = function () {
        this.data = this._inputService.getDataObject(this._key);
        if (!this.data) {
            this.initializeData();
        }
        this.updateInputService(this.data, this._key);
    };
    /** Should be called from View if any part of the DataContainer changed. */
    GenericDataInputComponentBase.prototype.dataChanged = function () {
        this.updateInputService(this.data, this._key);
    };
    GenericDataInputComponentBase.prototype.ngOnInit = function () {
        this.tryGetDataFromInputService();
    };
    return GenericDataInputComponentBase;
}(DataInputComponentBase));

//# sourceMappingURL=ComponentBase.js.map

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Email.html":
/***/ (function(module, exports) {

module.exports = "<a (click)='goTo(\"Index\")' class=\"back-link\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\">\n        <g id=\"surface1\">\n            <path d=\"M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15.28125 9.59375 L 8.875 16 L 15.28125 22.40625 L 16.71875 21 L 12.71875 17 L 23 17 L 23 15 L 12.71875 15 L 16.71875 11 Z \"></path>\n        </g>\n    </svg>\n    <span>Back</span>\n</a>\n<form>\n\n    <div class=\"form-group\">\n        <div class=\"control-container\">\n            <input [(ngModel)]=\"data.email\" type=\"email\" name=\"email\" required \n                   placeholder=\"Email\" i18n-placeholder=\"@@Input-Email-Email-Placeholder\"\n                   (input)=\"dataChanged()\"/>\n        </div>\n    </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Email.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
/* unused harmony export EmailDataContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ComponentBase__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/ComponentBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_InputService__ = __webpack_require__("../../../../../src/App/Services/InputService.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailComponent = (function (_super) {
    __extends(EmailComponent, _super);
    function EmailComponent(router, activatedRoute, inputService) {
        return _super.call(this, router, activatedRoute, inputService, EmailComponent_1.DataObjectKey) || this;
    }
    EmailComponent_1 = EmailComponent;
    EmailComponent.prototype.initializeData = function () {
        this.data = new EmailDataContainer();
    };
    EmailComponent.DataObjectKey = "email";
    EmailComponent.PathPart = "Email";
    EmailComponent = EmailComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/DataInputComponents/Email.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/DataInputComponents/Shared.less"), __webpack_require__("../../../../../src/App/Styles/Form.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */]) === "function" && _c || Object])
    ], EmailComponent);
    return EmailComponent;
    var EmailComponent_1, _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__ComponentBase__["b" /* GenericDataInputComponentBase */]));

var EmailDataContainer = (function () {
    function EmailDataContainer() {
    }
    EmailDataContainer.prototype.generateDataString = function () {
        if (this.email) {
            return "mailto:" + this.email;
        }
        return null;
    };
    return EmailDataContainer;
}());

//# sourceMappingURL=Email.js.map

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/File.html":
/***/ (function(module, exports) {

module.exports = "<a (click)='goTo(\"Index\")' class=\"back-link\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\">\n        <g id=\"surface1\">\n            <path d=\"M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15.28125 9.59375 L 8.875 16 L 15.28125 22.40625 L 16.71875 21 L 12.71875 17 L 23 17 L 23 15 L 12.71875 15 L 16.71875 11 Z \"></path>\n        </g>\n    </svg>\n    <span>Back</span>\n</a>\n<form>\n\n    <div class=\"form-group\">\n        <label for=\"file\" i18n=\"@@Input-File-File-Label\">File:</label>\n        <div class=\"control-container\">\n            <input type=\"file\" name=\"file\" required (change)=\"selectFile($event)\" />\n        </div>\n    </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/File.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ComponentBase__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/ComponentBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_InputService__ = __webpack_require__("../../../../../src/App/Services/InputService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Text__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/Text.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileComponent = (function (_super) {
    __extends(FileComponent, _super);
    function FileComponent(router, activatedRoute, inputService) {
        return _super.call(this, router, activatedRoute, inputService) || this;
    }
    FileComponent.prototype.selectFile = function ($event) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsText($event.target.files[0]);
        reader.onloadend = function (e) {
            var data = new __WEBPACK_IMPORTED_MODULE_4__Text__["b" /* TextDataContainer */]();
            data.text = reader.result;
            _this.updateInputService(data, __WEBPACK_IMPORTED_MODULE_4__Text__["a" /* TextComponent */].DataObjectKey);
            _this.goTo(__WEBPACK_IMPORTED_MODULE_4__Text__["a" /* TextComponent */].PathPart);
        };
    };
    FileComponent.PathPart = "File";
    FileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/DataInputComponents/File.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/DataInputComponents/Shared.less"), __webpack_require__("../../../../../src/App/Styles/Form.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */]) === "function" && _c || Object])
    ], FileComponent);
    return FileComponent;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__ComponentBase__["a" /* DataInputComponentBase */]));

//# sourceMappingURL=File.js.map

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Index.html":
/***/ (function(module, exports) {

module.exports = "<a (click)='goTo(\"Url\")'>\n        <img src=\"Assets/Icons/officeqr1/black/url.png\" class=\"icon\"/>\n    <span class='header' i18n=\"@@Input-Index-Link-Url-Header\">Web Address (Url)</span>\n    <span class='description' i18n=\"@@Input-Index-Link-Url-Description\">To call a specific web page.</span>\n    <span class=\"clear\"></span>\n</a>\n<a (click)='goTo(\"Email\")'>\n        <img src=\"Assets/Icons/officeqr1/black/email.png\" class=\"icon\"/>\n    <span class='header' i18n=\"@@Input-Index-Link-Email-Header\">Email</span>\n    <span class='description' i18n=\"@@Input-Index-Link-Email-Description\">To open the default e-mail program and set default values.</span>\n    <span class=\"clear\"></span>\n</a>\n<a (click)='goTo(\"Phone\")'>\n        <img src=\"Assets/Icons/officeqr1/black/phone.png\" class=\"icon\"/>\n    <span class='header' i18n=\"@@Input-Index-Link-Phone-Header\">Phone</span>\n    <span class='description' i18n=\"@@Input-Index-Link-Phone-Description\">To call a phone number.</span>\n    <span class=\"clear\"></span>\n</a>\n<a (click)='goTo(\"Text\")'>\n        <img src=\"Assets/Icons/officeqr1/black/text.png\" class=\"icon\"/>\n    <span class='header' i18n=\"@@Input-Index-Link-Text-Header\">Text</span>\n    <span class='description' i18n=\"@@Input-Index-Link-Text-Description\">Define your own text.</span>\n    <span class=\"clear\"></span>\n</a>\n<a (click)='goTo(\"VCard\")'>\n        <img src=\"Assets/Icons/officeqr1/black/vcard.png\" class=\"icon\"/>\n    <span class='header' i18n=\"@@Input-Index-Link-VCard-Header\">vCard</span>\n    <span class='description' i18n=\"@@Input-Index-Link-VCard-Description\">Create a vCard with a formular.</span>\n    <span class=\"clear\"></span>\n</a>\n<a (click)='goTo(\"File\")'>\n    <img src=\"Assets/Icons/officeqr1/black/file.png\" class=\"icon\"/>\n    <span class='header' i18n=\"@@Input-Index-Link-File-Header\">File</span>\n    <span class='description' i18n=\"@@Input-Index-Link-File-Description\">Import the content of a file (text, vCard, ...).</span>\n    <span class=\"clear\"></span>\n</a>"

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Index.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  padding-left: 12px;\n  padding-right: 12px;\n}\nform header {\n  font-size: large;\n}\nform .form-group {\n  margin-top: 6px;\n}\nform .form-group label {\n  margin-top: 6px;\n  display: block;\n}\nform .form-group textarea {\n  height: 4em;\n}\nform .form-group textarea,\nform .form-group input,\nform .form-group select {\n  width: 100%;\n  max-width: 320px;\n  padding: 6px;\n  box-sizing: border-box;\n}\nform .form-group input[type=color] {\n  padding: 0;\n}\nbutton,\ninput[type=button] {\n  border: 2px solid #5E11AA;\n  background-color: #FFFFFF;\n  color: #1f1f1f;\n  padding: 6px 12px 6px 12px;\n  margin-bottom: 6px;\n}\nbutton:hover,\ninput[type=button]:hover {\n  background-color: #BC87F1;\n}\nbutton:active,\ninput[type=button]:active {\n  background-color: #5E11AA;\n  color: #FFFFFF;\n}\na {\n  display: block;\n  background: #E0E0E0;\n  color: #1f1f1f;\n  padding: 12px;\n  text-decoration: none;\n  cursor: default;\n}\na:hover {\n  background-color: #BC87F1;\n  color: #1f1f1f;\n  text-decoration: none;\n}\na .header {\n  font-weight: 800;\n  display: block;\n}\na .description {\n  display: block;\n}\na .icon {\n  float: left;\n  height: 46px;\n  width: 46px;\n  margin-right: 6px;\n  margin-bottom: 12px;\n  display: block;\n  font-size: 40px;\n}\na .clear {\n  clear: both;\n  display: block;\n  font-size: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComponentBase__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/ComponentBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_InputService__ = __webpack_require__("../../../../../src/App/Services/InputService.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndexComponent = (function (_super) {
    __extends(IndexComponent, _super);
    function IndexComponent(router, activatedRoute, inputService) {
        return _super.call(this, router, activatedRoute, inputService) || this;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this._inputService.resetDataString();
    };
    IndexComponent.PathPart = "Index";
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/DataInputComponents/Index.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/DataInputComponents/Shared.less"), __webpack_require__("../../../../../src/App/Components/DataInputComponents/Index.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */]) === "function" && _c || Object])
    ], IndexComponent);
    return IndexComponent;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_2__ComponentBase__["c" /* InputRoutingComponentBase */]));

//# sourceMappingURL=Index.js.map

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Phone.html":
/***/ (function(module, exports) {

module.exports = "<a (click)='goTo(\"Index\")' class=\"back-link\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\">\n        <g id=\"surface1\">\n            <path d=\"M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15.28125 9.59375 L 8.875 16 L 15.28125 22.40625 L 16.71875 21 L 12.71875 17 L 23 17 L 23 15 L 12.71875 15 L 16.71875 11 Z \"></path>\n        </g>\n    </svg>\n    <span>Back</span>\n</a>\n<form>\n\n    <div class=\"form-group\">\n        <div class=\"control-container\">\n            <input [(ngModel)]=\"data.phone\" type=\"tel\" name=\"phone\" required \n                   placeholder=\"Phone\" i18n-placeholder=\"@@Input-Phone-Phone-Placeholder\"\n                   (input)=\"dataChanged()\"/>\n        </div>\n    </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Phone.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneComponent; });
/* unused harmony export PhoneDataContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ComponentBase__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/ComponentBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_InputService__ = __webpack_require__("../../../../../src/App/Services/InputService.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneComponent = (function (_super) {
    __extends(PhoneComponent, _super);
    function PhoneComponent(router, activatedRoute, inputService) {
        return _super.call(this, router, activatedRoute, inputService, PhoneComponent_1.DataObjectKey) || this;
    }
    PhoneComponent_1 = PhoneComponent;
    PhoneComponent.prototype.initializeData = function () {
        this.data = new PhoneDataContainer();
    };
    PhoneComponent.DataObjectKey = "phone";
    PhoneComponent.PathPart = "Phone";
    PhoneComponent = PhoneComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/DataInputComponents/Phone.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/DataInputComponents/Shared.less"), __webpack_require__("../../../../../src/App/Styles/Form.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */]) === "function" && _c || Object])
    ], PhoneComponent);
    return PhoneComponent;
    var PhoneComponent_1, _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__ComponentBase__["b" /* GenericDataInputComponentBase */]));

var PhoneDataContainer = (function () {
    function PhoneDataContainer() {
    }
    PhoneDataContainer.prototype.generateDataString = function () {
        if (this.phone) {
            return "tel:" + this.phone;
        }
        return null;
    };
    return PhoneDataContainer;
}());

//# sourceMappingURL=Phone.js.map

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Shared.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back-link {\n  color: #5E11AA;\n  margin-left: 12px;\n  margin-top: 6px;\n  display: inline-block;\n}\n.back-link svg {\n  fill: #5E11AA;\n  height: 12pt;\n  width: 12pt;\n  vertical-align: top;\n}\n.back-link:hover {\n  color: #BC87F1;\n}\n.back-link:hover svg {\n  fill: #BC87F1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Text.html":
/***/ (function(module, exports) {

module.exports = "<a (click)='goTo(\"Index\")' class=\"back-link\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\">\n        <g id=\"surface1\">\n            <path d=\"M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15.28125 9.59375 L 8.875 16 L 15.28125 22.40625 L 16.71875 21 L 12.71875 17 L 23 17 L 23 15 L 12.71875 15 L 16.71875 11 Z \"></path>\n        </g>\n    </svg>\n    <span>Back</span>\n</a>\n<form>\n\n    <div class='form-group'>\n        <div class='control-container'>\n            <textarea [(ngModel)]='data.text' name='text' \n                      placeholder='Text' i18n-placeholder=\"@@Input-Text-Text-Placeholder\"\n                      (input)='dataChanged()'></textarea>\n        </div>\n    </div>\n    <div>\n        <span>{{textLength}} <span i18n=\"@@Input-Text-LengthMessage-Characters\">{textLength, plural, =1 {Character} other {Characters}}</span> - </span>\n        <span [ngSwitch]='messageKey' [style.color]='messageColor'>\n            <span *ngSwitchCase='\"empty\"' i18n=\"@@Input-Text-LengthMessage-Empty\">Empty</span>\n            <span *ngSwitchCase='\"good\"' i18n=\"@@Input-Text-LengthMessage-Good\">Good Length</span>\n            <span *ngSwitchCase='\"ok\"' i18n=\"@@Input-Text-LengthMessage-Ok\">Length should be no problem</span>\n            <span *ngSwitchCase='\"warning\"' i18n=\"@@Input-Text-LengthMessage-Warning\">Pretty long text</span>\n            <span *ngSwitchCase='\"problem\"' i18n=\"@@Input-Text-LengthMessage-Problem\">Text could be too long for some scanner</span>\n        </span>\n    </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Text.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TextDataContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ComponentBase__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/ComponentBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_InputService__ = __webpack_require__("../../../../../src/App/Services/InputService.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextComponent = (function (_super) {
    __extends(TextComponent, _super);
    function TextComponent(router, activatedRoute, inputService) {
        var _this = _super.call(this, router, activatedRoute, inputService, TextComponent_1.DataObjectKey) || this;
        _this.messageKey = "empty";
        _this.messageColor = "#C00000";
        return _this;
    }
    TextComponent_1 = TextComponent;
    TextComponent.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        this.updateMessage();
    };
    Object.defineProperty(TextComponent.prototype, "textLength", {
        get: function () {
            return (this.data.text ? this.data.text : "").length;
        },
        enumerable: true,
        configurable: true
    });
    TextComponent.prototype.updateMessage = function () {
        if (this.data.text.length == 0) {
            this.messageKey = "empty";
            this.messageColor = "#C00000";
            return;
        }
        if (this.data.text.length <= 64) {
            this.messageKey = "good";
            this.messageColor = "#009020";
            return;
        }
        if (this.data.text.length <= 128) {
            this.messageKey = "ok";
            this.messageColor = "#808000";
            return;
        }
        if (this.data.text.length < 256) {
            this.messageKey = "warning";
            this.messageColor = "#C00000";
            return;
        }
        this.messageKey = "problem";
    };
    TextComponent.prototype.initializeData = function () {
        this.data = new TextDataContainer();
    };
    TextComponent.DataObjectKey = "text";
    TextComponent.PathPart = "Text";
    TextComponent = TextComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/DataInputComponents/Text.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/DataInputComponents/Shared.less"), __webpack_require__("../../../../../src/App/Styles/Form.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */]) === "function" && _c || Object])
    ], TextComponent);
    return TextComponent;
    var TextComponent_1, _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__ComponentBase__["b" /* GenericDataInputComponentBase */]));

var TextDataContainer = (function () {
    function TextDataContainer() {
    }
    TextDataContainer.prototype.generateDataString = function () {
        return this.text;
    };
    return TextDataContainer;
}());

//# sourceMappingURL=Text.js.map

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Url.html":
/***/ (function(module, exports) {

module.exports = "<a (click)='goTo(\"Index\")' class=\"back-link\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\">\n        <g id=\"surface1\">\n            <path d=\"M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15.28125 9.59375 L 8.875 16 L 15.28125 22.40625 L 16.71875 21 L 12.71875 17 L 23 17 L 23 15 L 12.71875 15 L 16.71875 11 Z \"></path>\n        </g>\n    </svg>\n    <span>Back</span>\n</a>\n<form>\n\n    <div class=\"form-group\">\n        <div class=\"control-container\">\n            <input [(ngModel)]=\"data.url\" type=\"url\" name=\"url\" required \n                   placeholder=\"Url\" i18n-placeholder=\"@@Input-Url-Url-Placeholder\"\n                   (input)=\"dataChanged()\"/>\n        </div>\n    </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/Url.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlComponent; });
/* unused harmony export UrlDataContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ComponentBase__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/ComponentBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_InputService__ = __webpack_require__("../../../../../src/App/Services/InputService.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UrlComponent = (function (_super) {
    __extends(UrlComponent, _super);
    function UrlComponent(router, activatedRoute, inputService) {
        return _super.call(this, router, activatedRoute, inputService, UrlComponent_1.DataObjectKey) || this;
    }
    UrlComponent_1 = UrlComponent;
    UrlComponent.prototype.initializeData = function () {
        this.data = new UrlDataContainer();
    };
    UrlComponent.DataObjectKey = "url";
    UrlComponent.PathPart = "Url";
    UrlComponent = UrlComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/DataInputComponents/Url.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/DataInputComponents/Shared.less"), __webpack_require__("../../../../../src/App/Styles/Form.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */]) === "function" && _c || Object])
    ], UrlComponent);
    return UrlComponent;
    var UrlComponent_1, _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__ComponentBase__["b" /* GenericDataInputComponentBase */]));

var UrlDataContainer = (function () {
    function UrlDataContainer() {
    }
    UrlDataContainer.prototype.generateDataString = function () {
        return this.url;
    };
    return UrlDataContainer;
}());

//# sourceMappingURL=Url.js.map

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/VCard.html":
/***/ (function(module, exports) {

module.exports = "<a (click)='goTo(\"Index\")' class=\"back-link\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 32 32\" version=\"1.1\">\n        <g id=\"surface1\">\n            <path d=\"M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15.28125 9.59375 L 8.875 16 L 15.28125 22.40625 L 16.71875 21 L 12.71875 17 L 23 17 L 23 15 L 12.71875 15 L 16.71875 11 Z \"></path>\n        </g>\n    </svg>\n    <span>Back</span>\n</a>\n<form>\n    <section>\n        <header i18n=\"@@Input-VCard-PersonName-Header\">Person Name</header>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.title\" type=\"text\" name=\"title\" placeholder=\"Title\" i18n-placeholder=\"@@Input-VCard-PersonName-Title-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.firstName\" type=\"text\" name=\"firstName\" placeholder=\"First Name\" i18n-placeholder=\"@@Input-VCard-PersonName-FirstName-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.middleName\" type=\"text\" name=\"middleName\" placeholder=\"Middle Name\" i18n-placeholder=\"@@Input-VCard-PersonName-MiddleName-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.lastName\" type=\"text\" name=\"lastName\" placeholder=\"Last Name\" i18n-placeholder=\"@@Input-VCard-PersonName-LastName-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n    </section>\n    <section>\n        <header i18n=\"@@Input-VCard-Company-Header\">Company</header>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.company\" type=\"text\" name=\"company\" placeholder=\"Company\" i18n-placeholder=\"@@Input-VCard-Company-Company-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.jobRole\" type=\"text\" name=\"jobRole\" placeholder=\"Job Role\" i18n-placeholder=\"@@Input-VCard-Company-JobRole-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.jobTitle\" type=\"text\" name=\"jobTitle\" placeholder=\"Job Title\" i18n-placeholder=\"@@Input-VCard-Company-JobTitle-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n    </section>\n    <section>\n        <header i18n=\"@@Input-VCard-Phone-Header\">Phone</header>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.phoneNumberWork\" type=\"tel\" name=\"phoneNumberWork\" placeholder=\"Phone (Work)\" i18n-placeholder=\"@@Input-VCard-Phone-Work-Placeholder\" (input)=\"dataChanged()\"\n                />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.phoneNumberHome\" type=\"tel\" name=\"phoneNumberHome\" placeholder=\"Phone (Home)\" i18n-placeholder=\"@@Input-VCard-Phone-Home-Placeholder\" (input)=\"dataChanged()\"\n                />\n            </div>\n        </div>\n    </section>\n    <section>\n        <header i18n=\"@@Input-VCard-Address-Header\">Address</header>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.addressStreetAndNumber\" type=\"text\" name=\"addressStreetAndNumber\" placeholder=\"Street Name and Number\" i18n-placeholder=\"@@Input-VCard-Address-StreetNameAndNumber-Placeholder\" (input)=\"dataChanged()\"\n                />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.addressZip\" type=\"text\" name=\"addressZip\" placeholder=\"ZIP\" i18n-placeholder=\"@@Input-VCard-Address-ZIP-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.addressCity\" type=\"text\" name=\"addressCity\" placeholder=\"City\" i18n-placeholder=\"@@Input-VCard-Address-City-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.addressCountry\" type=\"text\" name=\"addressCountry\" placeholder=\"Country\" i18n-placeholder=\"@@Input-VCard-Address-Country-Placeholder\" (input)=\"dataChanged()\"\n                />\n            </div>\n        </div>\n    </section>\n    <section>\n        <header i18n=\"@@Input-VCard-Internet-Header\">Internet</header>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.email\" type=\"email\" name=\"email\" placeholder=\"Email\" i18n-placeholder=\"@@Input-VCard-Internet-Email-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <div class=\"control-container\">\n                <input [(ngModel)]=\"data.url\" type=\"url\" name=\"url\" required placeholder=\"Url\" i18n-placeholder=\"@@Input-VCard-Internet-Url-Placeholder\" (input)=\"dataChanged()\" />\n            </div>\n        </div>\n    </section>\n\n</form>"

/***/ }),

/***/ "../../../../../src/App/Components/DataInputComponents/VCard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardComponent; });
/* unused harmony export VCardDataContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ComponentBase__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/ComponentBase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_InputService__ = __webpack_require__("../../../../../src/App/Services/InputService.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VCardComponent = (function (_super) {
    __extends(VCardComponent, _super);
    function VCardComponent(router, activatedRoute, inputService) {
        return _super.call(this, router, activatedRoute, inputService, VCardComponent_1.DataObjectKey) || this;
    }
    VCardComponent_1 = VCardComponent;
    VCardComponent.prototype.initializeData = function () {
        this.data = new VCardDataContainer();
    };
    VCardComponent.DataObjectKey = "vcard";
    VCardComponent.PathPart = "VCard";
    VCardComponent = VCardComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/DataInputComponents/VCard.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/DataInputComponents/Shared.less"), __webpack_require__("../../../../../src/App/Styles/Form.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_InputService__["a" /* InputService */]) === "function" && _c || Object])
    ], VCardComponent);
    return VCardComponent;
    var VCardComponent_1, _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__ComponentBase__["b" /* GenericDataInputComponentBase */]));

var VCardDataContainer = (function () {
    function VCardDataContainer() {
    }
    VCardDataContainer.prototype.generateDataString = function () {
        var data = "";
        data += "BEGIN:VCARD\n";
        data += "VERSION:4.0\n";
        data += "N:" + this.lastName + ";" + this.firstName + ";" + this.middleName + ";" + this.title + "\n";
        data += "FN:" + this.concat([this.title, this.firstName, this.middleName, this.lastName], " ") + "\n";
        if (this.company) {
            data += "ORG:" + this.company + "\n";
        }
        if (this.jobRole) {
            data += "ROLE:" + this.jobRole + "\n";
        }
        if (this.jobTitle) {
            data += "TITLE:" + this.jobTitle + "\n";
        }
        if (this.phoneNumberWork) {
            data += "TEL;TYPE=work,voice;VALUE=uri:tel:" + this.phoneNumberWork + "\n";
        }
        if (this.phoneNumberHome) {
            data += "TEL;TYPE=home,voice;VALUE=uri:tel:" + this.phoneNumberHome + "\n";
        }
        if (this.addressStreetAndNumber || this.addressZip || this.addressCity || this.addressCountry) {
            data += "ADR;TYPE=home;LABEL=\"" + this.concat([this.addressStreetAndNumber, this.addressZip + " " + this.addressCity, this.addressCountry], "\n") + "\"\n";
            data += ":;;" + this.addressStreetAndNumber + ";" + this.addressCity + ";;" + this.addressZip + ";" + this.addressCountry + "\n";
        }
        if (this.email) {
            data += "EMAIL:" + this.email + "\n";
        }
        if (this.url) {
            data += "URL:" + this.url + "\n";
        }
        data += "REV:" + this.getTimeStamp(new Date()) + "\n";
        data += "END:VCARD";
        return data;
    };
    VCardDataContainer.prototype.concat = function (parts, seperator) {
        var result = "";
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part && part != "") {
                result = result + seperator + part;
            }
        }
        return result.length > 0 ? result.substr(seperator.length) : "";
    };
    VCardDataContainer.prototype.getTimeStamp = function (date) {
        return "" + date.getUTCFullYear() + date.getUTCMonth() + date.getUTCDate() + "T"
            + ("" + date.getUTCHours() + date.getUTCMinutes() + date.getUTCSeconds() + "Z");
    };
    return VCardDataContainer;
}());

//# sourceMappingURL=VCard.js.map

/***/ }),

/***/ "../../../../../src/App/Components/Message.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isVisible\">\n\n    <div class=\"background\">\n        <div class=\"outer-container\">\n\n            <div class=\"container\">\n\n                <div class=\"header\" *ngIf=\"header\">{{header}}</div>\n\n                <div class=\"text\" *ngIf=\"text\">{{text}}</div>\n\n                <div class=\"links\">\n                    <a (click)=\"close()\">Close</a>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "../../../../../src/App/Components/Message.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  background-color: rgba(224, 224, 224, 0.7);\n  padding: 12px;\n  max-height: 250px;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  background-color: #5E11AA;\n  color: #E0E0E0;\n}\n.background .container .header {\n  margin-bottom: 12px;\n  padding: 12px;\n  font-size: x-large;\n}\n.background .container .text {\n  padding-left: 12px;\n  padding-right: 12px;\n  display: block;\n}\n.background .container .links {\n  padding: 12px;\n  text-align: right;\n}\n.background .container .links a {\n  color: #BC87F1;\n}\n.background .container .links a:hover {\n  color: #E0E0E0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/App/Components/Message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
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


var MessageComponent = (function () {
    function MessageComponent(_router) {
        this._router = _router;
        this.text = "Lorem Ipsum dolor sit amet";
        this.header = "Info";
        this.isVisible = true;
    }
    MessageComponent.prototype.close = function () {
        this._router.navigate([{ outlets: { popup: null } }]);
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/App/Components/Message.html"),
            styles: [__webpack_require__("../../../../../src/App/Components/Message.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], MessageComponent);
    return MessageComponent;
    var _a;
}());

//# sourceMappingURL=Message.js.map

/***/ }),

/***/ "../../../../../src/App/Components/SettingsInput.html":
/***/ (function(module, exports) {

module.exports = "<form>\n\n    <div class=\"form-group\">\n        <label for=\"color\" i18n=\"@@CommonSettings-Color-Label\">Color:</label>\n        <div class=\"control-container\">\n            <input [(ngModel)]=\"data.color\" type=\"color\" name=\"color\" required \n                   (input)=\"dataChanged()\"/>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"bgcolor\" i18n=\"@@CommonSettings-BackgroundColor-Label\">Background color:</label>\n        <div class=\"control-container\">\n            <input [(ngModel)]=\"data.bgcolor\" type=\"color\" name=\"bgcolor\" required \n                   (input)=\"dataChanged()\"/>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"ecc\" i18n=\"@@CommonSettings-ECC-Label\">Error Correction Code:</label>\n        <div class=\"control-container\">\n            <select [(ngModel)]=\"data.ecc\" name=\"ecc\" (input)=\"dataChanged()\">\n                <option value=\"L\" [selected]=\"1==1\" i18n=\"@@CommonSettings-ECC-Option-Low\">Low</option>\n                <option value=\"M\" i18n=\"@@CommonSettings-ECC-Option-Middle\">Middle</option>\n                <option value=\"Q\" i18n=\"@@CommonSettings-ECC-Option-Quality\">Quality</option>\n                <option value=\"H\" i18n=\"@@CommonSettings-ECC-Option-High\">High</option>\n            </select>\n        </div>\n    </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/App/Components/SettingsInput.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_InputService__ = __webpack_require__("../../../../../src/App/Services/InputService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_QRCodeSettings__ = __webpack_require__("../../../../../src/App/Model/QRCodeSettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsInputComponent = (function () {
    function SettingsInputComponent(_inputService) {
        this._inputService = _inputService;
        this.data = __WEBPACK_IMPORTED_MODULE_2__Model_QRCodeSettings__["a" /* QRCodeSettings */].Default();
    }
    SettingsInputComponent.prototype.dataChanged = function () {
        this._inputService.provideSettings(this.data);
    };
    SettingsInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: "settings-input",
            template: __webpack_require__("../../../../../src/App/Components/SettingsInput.html"),
            styles: [__webpack_require__("../../../../../src/App/Styles/Form.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_InputService__["a" /* InputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_InputService__["a" /* InputService */]) === "function" && _a || Object])
    ], SettingsInputComponent);
    return SettingsInputComponent;
    var _a;
}());

//# sourceMappingURL=SettingsInput.js.map

/***/ }),

/***/ "../../../../../src/App/Model/QRCodeErrorCorrectionCodes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeErrorCorrectionCodes; });
var QRCodeErrorCorrectionCodes;
(function (QRCodeErrorCorrectionCodes) {
    QRCodeErrorCorrectionCodes["L"] = "L";
    QRCodeErrorCorrectionCodes["M"] = "M";
    QRCodeErrorCorrectionCodes["Q"] = "Q";
    QRCodeErrorCorrectionCodes["H"] = "H";
})(QRCodeErrorCorrectionCodes || (QRCodeErrorCorrectionCodes = {}));
//# sourceMappingURL=QRCodeErrorCorrectionCodes.js.map

/***/ }),

/***/ "../../../../../src/App/Model/QRCodeFileFormat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeFileFormat; });
var QRCodeFileFormat;
(function (QRCodeFileFormat) {
    QRCodeFileFormat[QRCodeFileFormat["eps"] = 0] = "eps";
    QRCodeFileFormat[QRCodeFileFormat["svg"] = 1] = "svg";
    QRCodeFileFormat[QRCodeFileFormat["jpeg"] = 2] = "jpeg";
    QRCodeFileFormat[QRCodeFileFormat["jpg"] = 3] = "jpg";
    QRCodeFileFormat[QRCodeFileFormat["png"] = 4] = "png";
    QRCodeFileFormat[QRCodeFileFormat["gif"] = 5] = "gif";
})(QRCodeFileFormat || (QRCodeFileFormat = {}));
//# sourceMappingURL=QRCodeFileFormat.js.map

/***/ }),

/***/ "../../../../../src/App/Model/QRCodeSettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__QRCodeErrorCorrectionCodes__ = __webpack_require__("../../../../../src/App/Model/QRCodeErrorCorrectionCodes.ts");

var QRCodeSettings = (function () {
    function QRCodeSettings() {
    }
    QRCodeSettings.Default = function () {
        var result = new QRCodeSettings();
        result.color = "#000000";
        result.bgcolor = "#FFFFFF";
        result.ecc = __WEBPACK_IMPORTED_MODULE_0__QRCodeErrorCorrectionCodes__["a" /* QRCodeErrorCorrectionCodes */].L;
        return result;
    };
    ;
    return QRCodeSettings;
}());

//# sourceMappingURL=QRCodeSettings.js.map

/***/ }),

/***/ "../../../../../src/App/Services/InputService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputService; });
/* unused harmony export QRCodeConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_QRCodeSettings__ = __webpack_require__("../../../../../src/App/Model/QRCodeSettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputService = (function () {
    function InputService() {
        this._lastDataString = null;
        this._lastSettings = __WEBPACK_IMPORTED_MODULE_2__Model_QRCodeSettings__["a" /* QRCodeSettings */].Default();
        this._dataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.dataSourceObservable = this._dataSource.asObservable();
        this._dataObjectStore = {};
    }
    InputService.prototype.provideDataString = function (data) {
        this._lastDataString = data;
        this.push();
    };
    InputService.prototype.provideSettings = function (settings) {
        this._lastSettings = settings;
        this.push();
    };
    InputService.prototype.resetDataString = function () {
        this._lastDataString = null;
        this.push();
    };
    InputService.prototype.push = function () {
        var obj = new QRCodeConfig();
        obj.settings = this._lastSettings;
        obj.dataString = this._lastDataString;
        this._dataSource.next(obj);
    };
    InputService.prototype.getDataObject = function (key) {
        return this._dataObjectStore[key];
    };
    InputService.prototype.setDataObject = function (key, obj) {
        this._dataObjectStore[key] = obj;
    };
    InputService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], InputService);
    return InputService;
}());

var QRCodeConfig = (function () {
    function QRCodeConfig() {
    }
    return QRCodeConfig;
}());

//# sourceMappingURL=InputService.js.map

/***/ }),

/***/ "../../../../../src/App/Services/OfficeService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/// <reference path="../../../dev/typings/office-js/index.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OfficeService = (function () {
    function OfficeService() {
    }
    OfficeService.prototype.insertQRCode = function (url) {
        console.log("Inserting code...");
        if (Office.CoercionType.Ooxml) {
            Office.context.document.setSelectedDataAsync("<img src='" + url + "' alt='QR Code' width='200' height='200' />", { coercionType: "html" }, function (asyncResult) {
                if (asyncResult.status.toString() == "failed") {
                    console.log("please copy manual to your document.");
                }
                else {
                    console.log("inserted QR code.");
                }
            });
        }
        else {
            console.log("Your office does not support inserting images bei this app. copy it manual.");
        }
    };
    Object.defineProperty(OfficeService.prototype, "isHostedInOffice", {
        get: function () {
            return window.hasOwnProperty("Word") || window.hasOwnProperty("Excel") || window.hasOwnProperty("PowerPoint");
        },
        enumerable: true,
        configurable: true
    });
    OfficeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], OfficeService);
    return OfficeService;
}());

//# sourceMappingURL=OfficeService.js.map

/***/ }),

/***/ "../../../../../src/App/Services/QRCodeService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_QRCodeFileFormat__ = __webpack_require__("../../../../../src/App/Model/QRCodeFileFormat.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QRCodeService = (function () {
    function QRCodeService(_http) {
        this._http = _http;
    }
    QRCodeService.prototype.getCodeUrl = function (config, format) {
        var size = 1000;
        var margin = 0;
        var qzone = 0;
        var fileFormat = __WEBPACK_IMPORTED_MODULE_2__Model_QRCodeFileFormat__["a" /* QRCodeFileFormat */].svg;
        var url = "https://api.qrserver.com/v1/create-qr-code/";
        url += "?size=" + size + "x" + size;
        url += "&data=" + encodeURI(config.dataString ? config.dataString : "");
        url += "&ecc=" + config.settings.ecc;
        url += "&color=" + config.settings.color.replace("#", "");
        url += "&bgcolor=" + config.settings.bgcolor.replace("#", "");
        url += "&margin=" + margin;
        url += "&qzone=" + qzone;
        url += "&fileFormat=" + fileFormat;
        return url;
    };
    QRCodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], QRCodeService);
    return QRCodeService;
    var _a;
}());

//# sourceMappingURL=QRCodeService.js.map

/***/ }),

/***/ "../../../../../src/App/Styles/Form.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n  padding-left: 12px;\n  padding-right: 12px;\n}\nform header {\n  font-size: large;\n}\nform .form-group {\n  margin-top: 6px;\n}\nform .form-group label {\n  margin-top: 6px;\n  display: block;\n}\nform .form-group textarea {\n  height: 4em;\n}\nform .form-group textarea,\nform .form-group input,\nform .form-group select {\n  width: 100%;\n  max-width: 320px;\n  padding: 6px;\n  box-sizing: border-box;\n}\nform .form-group input[type=color] {\n  padding: 0;\n}\nbutton,\ninput[type=button] {\n  border: 2px solid #5E11AA;\n  background-color: #FFFFFF;\n  color: #1f1f1f;\n  padding: 6px 12px 6px 12px;\n  margin-bottom: 6px;\n}\nbutton:hover,\ninput[type=button]:hover {\n  background-color: #BC87F1;\n}\nbutton:active,\ninput[type=button]:active {\n  background-color: #5E11AA;\n  color: #FFFFFF;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_QRCodeService__ = __webpack_require__("../../../../../src/App/Services/QRCodeService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_App__ = __webpack_require__("../../../../../src/App/Components/App.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_DataInputComponents_Index__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/Index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_DataInputComponents_Url__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/Url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_DataInputComponents_Email__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/Email.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_DataInputComponents_Text__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/Text.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Components_DataInputComponents_VCard__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/VCard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Components_DataInputComponents_File__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/File.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Components_DataInputComponents_Phone__ = __webpack_require__("../../../../../src/App/Components/DataInputComponents/Phone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Services_InputService__ = __webpack_require__("../../../../../src/App/Services/InputService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Services_OfficeService__ = __webpack_require__("../../../../../src/App/Services/OfficeService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Components_CodePreview__ = __webpack_require__("../../../../../src/App/Components/CodePreview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Components_SettingsInput__ = __webpack_require__("../../../../../src/App/Components/SettingsInput.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Components_Message__ = __webpack_require__("../../../../../src/App/Components/Message.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    //Input Components:
    { path: __WEBPACK_IMPORTED_MODULE_7__Components_DataInputComponents_Index__["a" /* IndexComponent */].PathPart, outlet: "data-input", component: __WEBPACK_IMPORTED_MODULE_7__Components_DataInputComponents_Index__["a" /* IndexComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_8__Components_DataInputComponents_Url__["a" /* UrlComponent */].PathPart, outlet: "data-input", component: __WEBPACK_IMPORTED_MODULE_8__Components_DataInputComponents_Url__["a" /* UrlComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_9__Components_DataInputComponents_Email__["a" /* EmailComponent */].PathPart, outlet: "data-input", component: __WEBPACK_IMPORTED_MODULE_9__Components_DataInputComponents_Email__["a" /* EmailComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_10__Components_DataInputComponents_Text__["a" /* TextComponent */].PathPart, outlet: "data-input", component: __WEBPACK_IMPORTED_MODULE_10__Components_DataInputComponents_Text__["a" /* TextComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_11__Components_DataInputComponents_VCard__["a" /* VCardComponent */].PathPart, outlet: "data-input", component: __WEBPACK_IMPORTED_MODULE_11__Components_DataInputComponents_VCard__["a" /* VCardComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_12__Components_DataInputComponents_File__["a" /* FileComponent */].PathPart, outlet: "data-input", component: __WEBPACK_IMPORTED_MODULE_12__Components_DataInputComponents_File__["a" /* FileComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_13__Components_DataInputComponents_Phone__["a" /* PhoneComponent */].PathPart, outlet: "data-input", component: __WEBPACK_IMPORTED_MODULE_13__Components_DataInputComponents_Phone__["a" /* PhoneComponent */] },
    { path: "Message", outlet: "popup", component: __WEBPACK_IMPORTED_MODULE_18__Components_Message__["a" /* MessageComponent */] },
    {
        path: "",
        redirectTo: "/(data-input:Index)",
        pathMatch: "full"
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__Components_App__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__Components_SettingsInput__["a" /* SettingsInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Components_DataInputComponents_Index__["a" /* IndexComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Components_DataInputComponents_Url__["a" /* UrlComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Components_DataInputComponents_Email__["a" /* EmailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Components_DataInputComponents_Text__["a" /* TextComponent */],
                __WEBPACK_IMPORTED_MODULE_11__Components_DataInputComponents_VCard__["a" /* VCardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__Components_DataInputComponents_File__["a" /* FileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__Components_DataInputComponents_Phone__["a" /* PhoneComponent */],
                __WEBPACK_IMPORTED_MODULE_18__Components_Message__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__Components_CodePreview__["a" /* CodePreviewComponent */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_6__Components_App__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__Services_QRCodeService__["a" /* QRCodeService */],
                __WEBPACK_IMPORTED_MODULE_14__Services_InputService__["a" /* InputService */],
                __WEBPACK_IMPORTED_MODULE_15__Services_OfficeService__["a" /* OfficeService */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/Environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_app_module__ = __webpack_require__("../../../../../src/App/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Environments_environment__ = __webpack_require__("../../../../../src/Environments/environment.ts");
/// <reference path="../dev/typings/office-js/index.d.ts"/>




if (__WEBPACK_IMPORTED_MODULE_3__Environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
function launch() {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__App_app_module__["a" /* AppModule */])
        .catch(function (err) { return console.log(err); });
}
if (window.hasOwnProperty("Office") && (window.hasOwnProperty("Word") || window.hasOwnProperty("Excel") || window.hasOwnProperty("PowerPoint"))) {
    Office.initialize = function (reason) {
        launch();
    };
}
else {
    launch();
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map