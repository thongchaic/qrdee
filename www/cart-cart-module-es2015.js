(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/@ionic-native/call-number/ngx/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic-native/call-number/ngx/index.js ***!
  \*************************************************************/
/*! exports provided: CallNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallNumber", function() { return CallNumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var CallNumber = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CallNumber, _super);
    function CallNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallNumber.prototype.callNumber = function (numberToCall, bypassAppChooser) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "callNumber", { "callbackOrder": "reverse" }, arguments); };
    CallNumber.prototype.isCallSupported = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "isCallSupported", {}, arguments); };
    CallNumber.pluginName = "CallNumber";
    CallNumber.plugin = "call-number";
    CallNumber.pluginRef = "plugins.CallNumber";
    CallNumber.repo = "https://github.com/Rohfosho/CordovaCallNumberPlugin";
    CallNumber.platforms = ["Android", "iOS"];
    CallNumber = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CallNumber);
    return CallNumber;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbGwtbnVtYmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQStCeEMsOEJBQWlCOzs7O0lBVS9DLCtCQUFVLGFBQUMsWUFBb0IsRUFBRSxnQkFBeUI7SUFTMUQsb0NBQWU7Ozs7OztJQW5CSixVQUFVO1FBRHRCLFVBQVUsRUFBRTtPQUNBLFVBQVU7cUJBaEN2QjtFQWdDZ0MsaUJBQWlCO1NBQXBDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBDYWxsIE51bWJlclxuICogQGRlc2NyaXB0aW9uXG4gKiBDYWxsIGEgbnVtYmVyIGRpcmVjdGx5IGZyb20geW91ciBDb3Jkb3ZhL0lvbmljIGFwcGxpY2F0aW9uLlxuICogKipOT1RFKio6IFRoZSBpT1MgU2ltdWxhdG9yIChhbmQgbWF5YmUgQW5kcm9pZCBTaW11bGF0b3JzKSBkbyBub3QgcHJvdmlkZSBhY2Nlc3MgdG8gdGhlIHBob25lIHN1YnN5c3RlbS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbGxOdW1iZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbGwtbnVtYmVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYWxsTnVtYmVyOiBDYWxsTnVtYmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5jYWxsTnVtYmVyLmNhbGxOdW1iZXIoXCIxODAwMTAxMDEwMVwiLCB0cnVlKVxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2coJ0xhdW5jaGVkIGRpYWxlciEnLCByZXMpKVxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciBsYXVuY2hpbmcgZGlhbGVyJywgZXJyKSk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FsbE51bWJlcicsXG4gIHBsdWdpbjogJ2NhbGwtbnVtYmVyJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5DYWxsTnVtYmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Sb2hmb3Noby9Db3Jkb3ZhQ2FsbE51bWJlclBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhbGxOdW1iZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDYWxscyBhIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbnVtYmVyVG9DYWxsIFRoZSBwaG9uZSBudW1iZXIgdG8gY2FsbCBhcyBhIHN0cmluZ1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJ5cGFzc0FwcENob29zZXIgU2V0IHRvIHRydWUgdG8gYnlwYXNzIHRoZSBhcHAgY2hvb3NlciBhbmQgZ28gZGlyZWN0bHkgdG8gZGlhbGVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgY2FsbE51bWJlcihudW1iZXJUb0NhbGw6IHN0cmluZywgYnlwYXNzQXBwQ2hvb3NlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGNhbGwgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpc0NhbGxTdXBwb3J0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js ***!
  \*********************************************************************/
/*! exports provided: QRCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeModule", function() { return QRCodeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./node_modules/angularx-qrcode/dist/components/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let QRCodeModule = class QRCodeModule {
};
QRCodeModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        providers: [],
        declarations: [
            _components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"],
        ],
        exports: [
            _components__WEBPACK_IMPORTED_MODULE_1__["QRCodeComponent"],
        ]
    })
], QRCodeModule);

//# sourceMappingURL=angularx-qrcode.module.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js ***!
  \***************************************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return QRCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let QRCode;
let QRCodeComponent = class QRCodeComponent {
    constructor(el, platformId) {
        this.el = el;
        this.platformId = platformId;
        /** @internal */
        this.allowEmptyString = false;
        this.colordark = '#000000';
        this.colorlight = '#ffffff';
        this.level = 'M';
        this.hidetitle = false;
        this.qrdata = '';
        this.size = 256;
        this.usesvg = false;
        this.isValidQrCodeText = (data) => {
            if (this.allowEmptyString === false) {
                return !(typeof data === 'undefined' || data === '');
            }
            return !(typeof data === 'undefined');
        };
    }
    ngAfterViewInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId)) {
            return;
        }
        if (!QRCode) {
            QRCode = __webpack_require__(/*! qrcodejs2 */ "./node_modules/qrcodejs2/qrcode.js");
        }
        try {
            if (!this.isValidQrCodeText(this.qrdata)) {
                throw new Error('Empty QR Code data');
            }
            this.qrcode = new QRCode(this.el.nativeElement, {
                colorDark: this.colordark,
                colorLight: this.colorlight,
                correctLevel: QRCode.CorrectLevel[this.level.toString()],
                height: this.size,
                text: this.qrdata || ' ',
                useSVG: this.usesvg,
                width: this.size,
            });
        }
        catch (e) {
            console.error('Error generating QR Code: ' + e.message);
        }
    }
    ngOnChanges(changes) {
        if (!this.qrcode) {
            return;
        }
        const qrData = changes['qrdata'];
        if (qrData && this.isValidQrCodeText(qrData.currentValue)) {
            this.qrcode.clear();
            this.qrcode.makeCode(qrData.currentValue);
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], QRCodeComponent.prototype, "allowEmptyString", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], QRCodeComponent.prototype, "colordark", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], QRCodeComponent.prototype, "colorlight", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], QRCodeComponent.prototype, "level", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], QRCodeComponent.prototype, "hidetitle", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], QRCodeComponent.prototype, "qrdata", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], QRCodeComponent.prototype, "size", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], QRCodeComponent.prototype, "usesvg", void 0);
QRCodeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'qrcode',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        template: ''
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Object])
], QRCodeComponent);

//# sourceMappingURL=angularx-qrcode.component.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js ***!
  \*******************************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularx_qrcode_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularx-qrcode.component */ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/angularx-qrcode.component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _angularx_qrcode_component__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/components/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/components/index.js ***!
  \***************************************************************/
/*! exports provided: QRCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angularx_qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angularx-qrcode */ "./node_modules/angularx-qrcode/dist/components/angularx-qrcode/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _angularx_qrcode__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angularx-qrcode/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/angularx-qrcode/dist/index.js ***!
  \****************************************************/
/*! exports provided: QRCodeComponent, QRCodeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./node_modules/angularx-qrcode/dist/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["QRCodeComponent"]; });

/* harmony import */ var _angularx_qrcode_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angularx-qrcode.module */ "./node_modules/angularx-qrcode/dist/angularx-qrcode.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QRCodeModule", function() { return _angularx_qrcode_module__WEBPACK_IMPORTED_MODULE_1__["QRCodeModule"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/qrcodejs2/qrcode.js":
/*!******************************************!*\
  !*** ./node_modules/qrcodejs2/qrcode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @author davidshimjs
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 */
var QRCode;

(function (root, factory) {

	/* CommonJS */
  if (true) module.exports = factory()

  /* AMD module */
  else {}

}(this, function () {	//---------------------------------------------------------------------
	// QRCode for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//   http://www.opensource.org/licenses/mit-license.php
	//
	// The word "QR Code" is registered trademark of
	// DENSO WAVE INCORPORATED
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	function QR8bitByte(data) {
		this.mode = QRMode.MODE_8BIT_BYTE;
		this.data = data;
		this.parsedData = [];

		// Added to support UTF-8 Characters
		for (var i = 0, l = this.data.length; i < l; i++) {
			var byteArray = [];
			var code = this.data.charCodeAt(i);

			if (code > 0x10000) {
				byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);
				byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);
				byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[3] = 0x80 | (code & 0x3F);
			} else if (code > 0x800) {
				byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);
				byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);
				byteArray[2] = 0x80 | (code & 0x3F);
			} else if (code > 0x80) {
				byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);
				byteArray[1] = 0x80 | (code & 0x3F);
			} else {
				byteArray[0] = code;
			}

			this.parsedData.push(byteArray);
		}

		this.parsedData = Array.prototype.concat.apply([], this.parsedData);

		if (this.parsedData.length != this.data.length) {
			this.parsedData.unshift(191);
			this.parsedData.unshift(187);
			this.parsedData.unshift(239);
		}
	}

	QR8bitByte.prototype = {
		getLength: function (buffer) {
			return this.parsedData.length;
		},
		write: function (buffer) {
			for (var i = 0, l = this.parsedData.length; i < l; i++) {
				buffer.put(this.parsedData[i], 8);
			}
		}
	};

	function QRCodeModel(typeNumber, errorCorrectLevel) {
		this.typeNumber = typeNumber;
		this.errorCorrectLevel = errorCorrectLevel;
		this.modules = null;
		this.moduleCount = 0;
		this.dataCache = null;
		this.dataList = [];
	}

	QRCodeModel.prototype={addData:function(data){var newData=new QR8bitByte(data);this.dataList.push(newData);this.dataCache=null;},isDark:function(row,col){if(row<0||this.moduleCount<=row||col<0||this.moduleCount<=col){throw new Error(row+","+col);}
	return this.modules[row][col];},getModuleCount:function(){return this.moduleCount;},make:function(){this.makeImpl(false,this.getBestMaskPattern());},makeImpl:function(test,maskPattern){this.moduleCount=this.typeNumber*4+17;this.modules=new Array(this.moduleCount);for(var row=0;row<this.moduleCount;row++){this.modules[row]=new Array(this.moduleCount);for(var col=0;col<this.moduleCount;col++){this.modules[row][col]=null;}}
	this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(test,maskPattern);if(this.typeNumber>=7){this.setupTypeNumber(test);}
	if(this.dataCache==null){this.dataCache=QRCodeModel.createData(this.typeNumber,this.errorCorrectLevel,this.dataList);}
	this.mapData(this.dataCache,maskPattern);},setupPositionProbePattern:function(row,col){for(var r=-1;r<=7;r++){if(row+r<=-1||this.moduleCount<=row+r)continue;for(var c=-1;c<=7;c++){if(col+c<=-1||this.moduleCount<=col+c)continue;if((0<=r&&r<=6&&(c==0||c==6))||(0<=c&&c<=6&&(r==0||r==6))||(2<=r&&r<=4&&2<=c&&c<=4)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}},getBestMaskPattern:function(){var minLostPoint=0;var pattern=0;for(var i=0;i<8;i++){this.makeImpl(true,i);var lostPoint=QRUtil.getLostPoint(this);if(i==0||minLostPoint>lostPoint){minLostPoint=lostPoint;pattern=i;}}
	return pattern;},createMovieClip:function(target_mc,instance_name,depth){var qr_mc=target_mc.createEmptyMovieClip(instance_name,depth);var cs=1;this.make();for(var row=0;row<this.modules.length;row++){var y=row*cs;for(var col=0;col<this.modules[row].length;col++){var x=col*cs;var dark=this.modules[row][col];if(dark){qr_mc.beginFill(0,100);qr_mc.moveTo(x,y);qr_mc.lineTo(x+cs,y);qr_mc.lineTo(x+cs,y+cs);qr_mc.lineTo(x,y+cs);qr_mc.endFill();}}}
	return qr_mc;},setupTimingPattern:function(){for(var r=8;r<this.moduleCount-8;r++){if(this.modules[r][6]!=null){continue;}
	this.modules[r][6]=(r%2==0);}
	for(var c=8;c<this.moduleCount-8;c++){if(this.modules[6][c]!=null){continue;}
	this.modules[6][c]=(c%2==0);}},setupPositionAdjustPattern:function(){var pos=QRUtil.getPatternPosition(this.typeNumber);for(var i=0;i<pos.length;i++){for(var j=0;j<pos.length;j++){var row=pos[i];var col=pos[j];if(this.modules[row][col]!=null){continue;}
	for(var r=-2;r<=2;r++){for(var c=-2;c<=2;c++){if(r==-2||r==2||c==-2||c==2||(r==0&&c==0)){this.modules[row+r][col+c]=true;}else{this.modules[row+r][col+c]=false;}}}}}},setupTypeNumber:function(test){var bits=QRUtil.getBCHTypeNumber(this.typeNumber);for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[Math.floor(i/3)][i%3+this.moduleCount-8-3]=mod;}
	for(var i=0;i<18;i++){var mod=(!test&&((bits>>i)&1)==1);this.modules[i%3+this.moduleCount-8-3][Math.floor(i/3)]=mod;}},setupTypeInfo:function(test,maskPattern){var data=(this.errorCorrectLevel<<3)|maskPattern;var bits=QRUtil.getBCHTypeInfo(data);for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<6){this.modules[i][8]=mod;}else if(i<8){this.modules[i+1][8]=mod;}else{this.modules[this.moduleCount-15+i][8]=mod;}}
	for(var i=0;i<15;i++){var mod=(!test&&((bits>>i)&1)==1);if(i<8){this.modules[8][this.moduleCount-i-1]=mod;}else if(i<9){this.modules[8][15-i-1+1]=mod;}else{this.modules[8][15-i-1]=mod;}}
	this.modules[this.moduleCount-8][8]=(!test);},mapData:function(data,maskPattern){var inc=-1;var row=this.moduleCount-1;var bitIndex=7;var byteIndex=0;for(var col=this.moduleCount-1;col>0;col-=2){if(col==6)col--;while(true){for(var c=0;c<2;c++){if(this.modules[row][col-c]==null){var dark=false;if(byteIndex<data.length){dark=(((data[byteIndex]>>>bitIndex)&1)==1);}
	var mask=QRUtil.getMask(maskPattern,row,col-c);if(mask){dark=!dark;}
	this.modules[row][col-c]=dark;bitIndex--;if(bitIndex==-1){byteIndex++;bitIndex=7;}}}
	row+=inc;if(row<0||this.moduleCount<=row){row-=inc;inc=-inc;break;}}}}};QRCodeModel.PAD0=0xEC;QRCodeModel.PAD1=0x11;QRCodeModel.createData=function(typeNumber,errorCorrectLevel,dataList){var rsBlocks=QRRSBlock.getRSBlocks(typeNumber,errorCorrectLevel);var buffer=new QRBitBuffer();for(var i=0;i<dataList.length;i++){var data=dataList[i];buffer.put(data.mode,4);buffer.put(data.getLength(),QRUtil.getLengthInBits(data.mode,typeNumber));data.write(buffer);}
	var totalDataCount=0;for(var i=0;i<rsBlocks.length;i++){totalDataCount+=rsBlocks[i].dataCount;}
	if(buffer.getLengthInBits()>totalDataCount*8){throw new Error("code length overflow. ("
	+buffer.getLengthInBits()
	+">"
	+totalDataCount*8
	+")");}
	if(buffer.getLengthInBits()+4<=totalDataCount*8){buffer.put(0,4);}
	while(buffer.getLengthInBits()%8!=0){buffer.putBit(false);}
	while(true){if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD0,8);if(buffer.getLengthInBits()>=totalDataCount*8){break;}
	buffer.put(QRCodeModel.PAD1,8);}
	return QRCodeModel.createBytes(buffer,rsBlocks);};QRCodeModel.createBytes=function(buffer,rsBlocks){var offset=0;var maxDcCount=0;var maxEcCount=0;var dcdata=new Array(rsBlocks.length);var ecdata=new Array(rsBlocks.length);for(var r=0;r<rsBlocks.length;r++){var dcCount=rsBlocks[r].dataCount;var ecCount=rsBlocks[r].totalCount-dcCount;maxDcCount=Math.max(maxDcCount,dcCount);maxEcCount=Math.max(maxEcCount,ecCount);dcdata[r]=new Array(dcCount);for(var i=0;i<dcdata[r].length;i++){dcdata[r][i]=0xff&buffer.buffer[i+offset];}
	offset+=dcCount;var rsPoly=QRUtil.getErrorCorrectPolynomial(ecCount);var rawPoly=new QRPolynomial(dcdata[r],rsPoly.getLength()-1);var modPoly=rawPoly.mod(rsPoly);ecdata[r]=new Array(rsPoly.getLength()-1);for(var i=0;i<ecdata[r].length;i++){var modIndex=i+modPoly.getLength()-ecdata[r].length;ecdata[r][i]=(modIndex>=0)?modPoly.get(modIndex):0;}}
	var totalCodeCount=0;for(var i=0;i<rsBlocks.length;i++){totalCodeCount+=rsBlocks[i].totalCount;}
	var data=new Array(totalCodeCount);var index=0;for(var i=0;i<maxDcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<dcdata[r].length){data[index++]=dcdata[r][i];}}}
	for(var i=0;i<maxEcCount;i++){for(var r=0;r<rsBlocks.length;r++){if(i<ecdata[r].length){data[index++]=ecdata[r][i];}}}
	return data;};var QRMode={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3};var QRErrorCorrectLevel={L:1,M:0,Q:3,H:2};var QRMaskPattern={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var QRUtil={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:(1<<10)|(1<<8)|(1<<5)|(1<<4)|(1<<2)|(1<<1)|(1<<0),G18:(1<<12)|(1<<11)|(1<<10)|(1<<9)|(1<<8)|(1<<5)|(1<<2)|(1<<0),G15_MASK:(1<<14)|(1<<12)|(1<<10)|(1<<4)|(1<<1),getBCHTypeInfo:function(data){var d=data<<10;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)>=0){d^=(QRUtil.G15<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G15)));}
	return((data<<10)|d)^QRUtil.G15_MASK;},getBCHTypeNumber:function(data){var d=data<<12;while(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)>=0){d^=(QRUtil.G18<<(QRUtil.getBCHDigit(d)-QRUtil.getBCHDigit(QRUtil.G18)));}
	return(data<<12)|d;},getBCHDigit:function(data){var digit=0;while(data!=0){digit++;data>>>=1;}
	return digit;},getPatternPosition:function(typeNumber){return QRUtil.PATTERN_POSITION_TABLE[typeNumber-1];},getMask:function(maskPattern,i,j){switch(maskPattern){case QRMaskPattern.PATTERN000:return(i+j)%2==0;case QRMaskPattern.PATTERN001:return i%2==0;case QRMaskPattern.PATTERN010:return j%3==0;case QRMaskPattern.PATTERN011:return(i+j)%3==0;case QRMaskPattern.PATTERN100:return(Math.floor(i/2)+Math.floor(j/3))%2==0;case QRMaskPattern.PATTERN101:return(i*j)%2+(i*j)%3==0;case QRMaskPattern.PATTERN110:return((i*j)%2+(i*j)%3)%2==0;case QRMaskPattern.PATTERN111:return((i*j)%3+(i+j)%2)%2==0;default:throw new Error("bad maskPattern:"+maskPattern);}},getErrorCorrectPolynomial:function(errorCorrectLength){var a=new QRPolynomial([1],0);for(var i=0;i<errorCorrectLength;i++){a=a.multiply(new QRPolynomial([1,QRMath.gexp(i)],0));}
	return a;},getLengthInBits:function(mode,type){if(1<=type&&type<10){switch(mode){case QRMode.MODE_NUMBER:return 10;case QRMode.MODE_ALPHA_NUM:return 9;case QRMode.MODE_8BIT_BYTE:return 8;case QRMode.MODE_KANJI:return 8;default:throw new Error("mode:"+mode);}}else if(type<27){switch(mode){case QRMode.MODE_NUMBER:return 12;case QRMode.MODE_ALPHA_NUM:return 11;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 10;default:throw new Error("mode:"+mode);}}else if(type<41){switch(mode){case QRMode.MODE_NUMBER:return 14;case QRMode.MODE_ALPHA_NUM:return 13;case QRMode.MODE_8BIT_BYTE:return 16;case QRMode.MODE_KANJI:return 12;default:throw new Error("mode:"+mode);}}else{throw new Error("type:"+type);}},getLostPoint:function(qrCode){var moduleCount=qrCode.getModuleCount();var lostPoint=0;for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount;col++){var sameCount=0;var dark=qrCode.isDark(row,col);for(var r=-1;r<=1;r++){if(row+r<0||moduleCount<=row+r){continue;}
	for(var c=-1;c<=1;c++){if(col+c<0||moduleCount<=col+c){continue;}
	if(r==0&&c==0){continue;}
	if(dark==qrCode.isDark(row+r,col+c)){sameCount++;}}}
	if(sameCount>5){lostPoint+=(3+sameCount-5);}}}
	for(var row=0;row<moduleCount-1;row++){for(var col=0;col<moduleCount-1;col++){var count=0;if(qrCode.isDark(row,col))count++;if(qrCode.isDark(row+1,col))count++;if(qrCode.isDark(row,col+1))count++;if(qrCode.isDark(row+1,col+1))count++;if(count==0||count==4){lostPoint+=3;}}}
	for(var row=0;row<moduleCount;row++){for(var col=0;col<moduleCount-6;col++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row,col+1)&&qrCode.isDark(row,col+2)&&qrCode.isDark(row,col+3)&&qrCode.isDark(row,col+4)&&!qrCode.isDark(row,col+5)&&qrCode.isDark(row,col+6)){lostPoint+=40;}}}
	for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount-6;row++){if(qrCode.isDark(row,col)&&!qrCode.isDark(row+1,col)&&qrCode.isDark(row+2,col)&&qrCode.isDark(row+3,col)&&qrCode.isDark(row+4,col)&&!qrCode.isDark(row+5,col)&&qrCode.isDark(row+6,col)){lostPoint+=40;}}}
	var darkCount=0;for(var col=0;col<moduleCount;col++){for(var row=0;row<moduleCount;row++){if(qrCode.isDark(row,col)){darkCount++;}}}
	var ratio=Math.abs(100*darkCount/moduleCount/moduleCount-50)/5;lostPoint+=ratio*10;return lostPoint;}};var QRMath={glog:function(n){if(n<1){throw new Error("glog("+n+")");}
	return QRMath.LOG_TABLE[n];},gexp:function(n){while(n<0){n+=255;}
	while(n>=256){n-=255;}
	return QRMath.EXP_TABLE[n];},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var i=0;i<8;i++){QRMath.EXP_TABLE[i]=1<<i;}
	for(var i=8;i<256;i++){QRMath.EXP_TABLE[i]=QRMath.EXP_TABLE[i-4]^QRMath.EXP_TABLE[i-5]^QRMath.EXP_TABLE[i-6]^QRMath.EXP_TABLE[i-8];}
	for(var i=0;i<255;i++){QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]]=i;}
	function QRPolynomial(num,shift){if(num.length==undefined){throw new Error(num.length+"/"+shift);}
	var offset=0;while(offset<num.length&&num[offset]==0){offset++;}
	this.num=new Array(num.length-offset+shift);for(var i=0;i<num.length-offset;i++){this.num[i]=num[i+offset];}}
	QRPolynomial.prototype={get:function(index){return this.num[index];},getLength:function(){return this.num.length;},multiply:function(e){var num=new Array(this.getLength()+e.getLength()-1);for(var i=0;i<this.getLength();i++){for(var j=0;j<e.getLength();j++){num[i+j]^=QRMath.gexp(QRMath.glog(this.get(i))+QRMath.glog(e.get(j)));}}
	return new QRPolynomial(num,0);},mod:function(e){if(this.getLength()-e.getLength()<0){return this;}
	var ratio=QRMath.glog(this.get(0))-QRMath.glog(e.get(0));var num=new Array(this.getLength());for(var i=0;i<this.getLength();i++){num[i]=this.get(i);}
	for(var i=0;i<e.getLength();i++){num[i]^=QRMath.gexp(QRMath.glog(e.get(i))+ratio);}
	return new QRPolynomial(num,0).mod(e);}};function QRRSBlock(totalCount,dataCount){this.totalCount=totalCount;this.dataCount=dataCount;}
	QRRSBlock.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];QRRSBlock.getRSBlocks=function(typeNumber,errorCorrectLevel){var rsBlock=QRRSBlock.getRsBlockTable(typeNumber,errorCorrectLevel);if(rsBlock==undefined){throw new Error("bad rs block @ typeNumber:"+typeNumber+"/errorCorrectLevel:"+errorCorrectLevel);}
	var length=rsBlock.length/3;var list=[];for(var i=0;i<length;i++){var count=rsBlock[i*3+0];var totalCount=rsBlock[i*3+1];var dataCount=rsBlock[i*3+2];for(var j=0;j<count;j++){list.push(new QRRSBlock(totalCount,dataCount));}}
	return list;};QRRSBlock.getRsBlockTable=function(typeNumber,errorCorrectLevel){switch(errorCorrectLevel){case QRErrorCorrectLevel.L:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+0];case QRErrorCorrectLevel.M:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+1];case QRErrorCorrectLevel.Q:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+2];case QRErrorCorrectLevel.H:return QRRSBlock.RS_BLOCK_TABLE[(typeNumber-1)*4+3];default:return undefined;}};function QRBitBuffer(){this.buffer=[];this.length=0;}
	QRBitBuffer.prototype={get:function(index){var bufIndex=Math.floor(index/8);return((this.buffer[bufIndex]>>>(7-index%8))&1)==1;},put:function(num,length){for(var i=0;i<length;i++){this.putBit(((num>>>(length-i-1))&1)==1);}},getLengthInBits:function(){return this.length;},putBit:function(bit){var bufIndex=Math.floor(this.length/8);if(this.buffer.length<=bufIndex){this.buffer.push(0);}
	if(bit){this.buffer[bufIndex]|=(0x80>>>(this.length%8));}
	this.length++;}};var QRCodeLimitLength=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];

	function _isSupportCanvas() {
		return typeof CanvasRenderingContext2D != "undefined";
	}

	// android 2.x doesn't support Data-URI spec
	function _getAndroid() {
		var android = false;
		var sAgent = navigator.userAgent;

		if (/android/i.test(sAgent)) { // android
			android = true;
			var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);

			if (aMat && aMat[1]) {
				android = parseFloat(aMat[1]);
			}
		}

		return android;
	}

	var svgDrawer = (function() {

		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		Drawing.prototype.draw = function (oQRCode) {
			var _htOption = this._htOption;
			var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);

			this.clear();

			function makeSVG(tag, attrs) {
				var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
				for (var k in attrs)
					if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);
				return el;
			}

			var svg = makeSVG("svg" , {'viewBox': '0 0 ' + String(nCount) + " " + String(nCount), 'width': '100%', 'height': '100%', 'fill': _htOption.colorLight});
			svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
			_el.appendChild(svg);

			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorLight, "width": "100%", "height": "100%"}));
			svg.appendChild(makeSVG("rect", {"fill": _htOption.colorDark, "width": "1", "height": "1", "id": "template"}));

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					if (oQRCode.isDark(row, col)) {
						var child = makeSVG("use", {"x": String(col), "y": String(row)});
						child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template")
						svg.appendChild(child);
					}
				}
			}
		};
		Drawing.prototype.clear = function () {
			while (this._el.hasChildNodes())
				this._el.removeChild(this._el.lastChild);
		};
		return Drawing;
	})();

	var useSVG = document.documentElement.tagName.toLowerCase() === "svg";

	// Drawing in DOM by using Table tag
	var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? (function () {
		var Drawing = function (el, htOption) {
			this._el = el;
			this._htOption = htOption;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _htOption = this._htOption;
            var _el = this._el;
			var nCount = oQRCode.getModuleCount();
			var nWidth = Math.floor(_htOption.width / nCount);
			var nHeight = Math.floor(_htOption.height / nCount);
			var aHTML = ['<table style="border:0;border-collapse:collapse;">'];

			for (var row = 0; row < nCount; row++) {
				aHTML.push('<tr>');

				for (var col = 0; col < nCount; col++) {
					aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
				}

				aHTML.push('</tr>');
			}

			aHTML.push('</table>');
			_el.innerHTML = aHTML.join('');

			// Fix the margin values as real size.
			var elTable = _el.childNodes[0];
			var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
			var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;

			if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
				elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";
			}
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._el.innerHTML = '';
		};

		return Drawing;
	})() : (function () { // Drawing in Canvas
		function _onMakeImage() {
			this._elImage.src = this._elCanvas.toDataURL("image/png");
			this._elImage.style.display = "block";
			this._elCanvas.style.display = "none";
		}

		// Android 2.1 bug workaround
		// http://code.google.com/p/android/issues/detail?id=5141
		if (this._android && this._android <= 2.1) {
	    	var factor = 1 / window.devicePixelRatio;
	        var drawImage = CanvasRenderingContext2D.prototype.drawImage;
	    	CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {
	    		if (("nodeName" in image) && /img/i.test(image.nodeName)) {
		        	for (var i = arguments.length - 1; i >= 1; i--) {
		            	arguments[i] = arguments[i] * factor;
		        	}
	    		} else if (typeof dw == "undefined") {
	    			arguments[1] *= factor;
	    			arguments[2] *= factor;
	    			arguments[3] *= factor;
	    			arguments[4] *= factor;
	    		}

	        	drawImage.apply(this, arguments);
	    	};
		}

		/**
		 * Check whether the user's browser supports Data URI or not
		 *
		 * @private
		 * @param {Function} fSuccess Occurs if it supports Data URI
		 * @param {Function} fFail Occurs if it doesn't support Data URI
		 */
		function _safeSetDataURI(fSuccess, fFail) {
            var self = this;
            self._fFail = fFail;
            self._fSuccess = fSuccess;

            // Check it just once
            if (self._bSupportDataURI === null) {
                var el = document.createElement("img");
                var fOnError = function() {
                    self._bSupportDataURI = false;

                    if (self._fFail) {
                        self._fFail.call(self);
                    }
                };
                var fOnSuccess = function() {
                    self._bSupportDataURI = true;

                    if (self._fSuccess) {
                        self._fSuccess.call(self);
                    }
                };

                el.onabort = fOnError;
                el.onerror = fOnError;
                el.onload = fOnSuccess;
                el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
                return;
            } else if (self._bSupportDataURI === true && self._fSuccess) {
                self._fSuccess.call(self);
            } else if (self._bSupportDataURI === false && self._fFail) {
                self._fFail.call(self);
            }
		};

		/**
		 * Drawing QRCode by using canvas
		 *
		 * @constructor
		 * @param {HTMLElement} el
		 * @param {Object} htOption QRCode Options
		 */
		var Drawing = function (el, htOption) {
    		this._bIsPainted = false;
    		this._android = _getAndroid();

			this._htOption = htOption;
			this._elCanvas = document.createElement("canvas");
			this._elCanvas.width = htOption.width;
			this._elCanvas.height = htOption.height;
			el.appendChild(this._elCanvas);
			this._el = el;
			this._oContext = this._elCanvas.getContext("2d");
			this._bIsPainted = false;
			this._elImage = document.createElement("img");
			this._elImage.alt = "Scan me!";
			this._elImage.style.display = "none";
			this._el.appendChild(this._elImage);
			this._bSupportDataURI = null;
		};

		/**
		 * Draw the QRCode
		 *
		 * @param {QRCode} oQRCode
		 */
		Drawing.prototype.draw = function (oQRCode) {
            var _elImage = this._elImage;
            var _oContext = this._oContext;
            var _htOption = this._htOption;

			var nCount = oQRCode.getModuleCount();
			var nWidth = _htOption.width / nCount;
			var nHeight = _htOption.height / nCount;
			var nRoundedWidth = Math.round(nWidth);
			var nRoundedHeight = Math.round(nHeight);

			_elImage.style.display = "none";
			this.clear();

			for (var row = 0; row < nCount; row++) {
				for (var col = 0; col < nCount; col++) {
					var bIsDark = oQRCode.isDark(row, col);
					var nLeft = col * nWidth;
					var nTop = row * nHeight;
					_oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.lineWidth = 1;
					_oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
					_oContext.fillRect(nLeft, nTop, nWidth, nHeight);

					// 안티 앨리어싱 방지 처리
					_oContext.strokeRect(
						Math.floor(nLeft) + 0.5,
						Math.floor(nTop) + 0.5,
						nRoundedWidth,
						nRoundedHeight
					);

					_oContext.strokeRect(
						Math.ceil(nLeft) - 0.5,
						Math.ceil(nTop) - 0.5,
						nRoundedWidth,
						nRoundedHeight
					);
				}
			}

			this._bIsPainted = true;
		};

		/**
		 * Make the image from Canvas if the browser supports Data URI.
		 */
		Drawing.prototype.makeImage = function () {
			if (this._bIsPainted) {
				_safeSetDataURI.call(this, _onMakeImage);
			}
		};

		/**
		 * Return whether the QRCode is painted or not
		 *
		 * @return {Boolean}
		 */
		Drawing.prototype.isPainted = function () {
			return this._bIsPainted;
		};

		/**
		 * Clear the QRCode
		 */
		Drawing.prototype.clear = function () {
			this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
			this._bIsPainted = false;
		};

		/**
		 * @private
		 * @param {Number} nNumber
		 */
		Drawing.prototype.round = function (nNumber) {
			if (!nNumber) {
				return nNumber;
			}

			return Math.floor(nNumber * 1000) / 1000;
		};

		return Drawing;
	})();

	/**
	 * Get the type by string length
	 *
	 * @private
	 * @param {String} sText
	 * @param {Number} nCorrectLevel
	 * @return {Number} type
	 */
	function _getTypeNumber(sText, nCorrectLevel) {
		var nType = 1;
		var length = _getUTF8Length(sText);

		for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
			var nLimit = 0;

			switch (nCorrectLevel) {
				case QRErrorCorrectLevel.L :
					nLimit = QRCodeLimitLength[i][0];
					break;
				case QRErrorCorrectLevel.M :
					nLimit = QRCodeLimitLength[i][1];
					break;
				case QRErrorCorrectLevel.Q :
					nLimit = QRCodeLimitLength[i][2];
					break;
				case QRErrorCorrectLevel.H :
					nLimit = QRCodeLimitLength[i][3];
					break;
			}

			if (length <= nLimit) {
				break;
			} else {
				nType++;
			}
		}

		if (nType > QRCodeLimitLength.length) {
			throw new Error("Too long data");
		}

		return nType;
	}

	function _getUTF8Length(sText) {
		var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
		return replacedText.length + (replacedText.length != sText ? 3 : 0);
	}

	/**
	 * @class QRCode
	 * @constructor
	 * @example
	 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
	 *
	 * @example
	 * var oQRCode = new QRCode("test", {
	 *    text : "http://naver.com",
	 *    width : 128,
	 *    height : 128
	 * });
	 *
	 * oQRCode.clear(); // Clear the QRCode.
	 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
	 *
	 * @param {HTMLElement|String} el target element or 'id' attribute of element.
	 * @param {Object|String} vOption
	 * @param {String} vOption.text QRCode link data
	 * @param {Number} [vOption.width=256]
	 * @param {Number} [vOption.height=256]
	 * @param {String} [vOption.colorDark="#000000"]
	 * @param {String} [vOption.colorLight="#ffffff"]
	 * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]
	 */
	QRCode = function (el, vOption) {
		this._htOption = {
			width : 256,
			height : 256,
			typeNumber : 4,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRErrorCorrectLevel.H
		};

		if (typeof vOption === 'string') {
			vOption	= {
				text : vOption
			};
		}

		// Overwrites options
		if (vOption) {
			for (var i in vOption) {
				this._htOption[i] = vOption[i];
			}
		}

		if (typeof el == "string") {
			el = document.getElementById(el);
		}

		if (this._htOption.useSVG) {
			Drawing = svgDrawer;
		}

		this._android = _getAndroid();
		this._el = el;
		this._oQRCode = null;
		this._oDrawing = new Drawing(this._el, this._htOption);

		if (this._htOption.text) {
			this.makeCode(this._htOption.text);
		}
	};

	/**
	 * Make the QRCode
	 *
	 * @param {String} sText link data
	 */
	QRCode.prototype.makeCode = function (sText) {
		this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
		this._oQRCode.addData(sText);
		this._oQRCode.make();
		this._el.title = sText;
		this._oDrawing.draw(this._oQRCode);
		this.makeImage();
	};

	/**
	 * Make the Image from Canvas element
	 * - It occurs automatically
	 * - Android below 3 doesn't support Data-URI spec.
	 *
	 * @private
	 */
	QRCode.prototype.makeImage = function () {
		if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {
			this._oDrawing.makeImage();
		}
	};

	/**
	 * Clear the QRCode
	 */
	QRCode.prototype.clear = function () {
		this._oDrawing.clear();
	};

	/**
	 * @name QRCode.CorrectLevel
	 */
	QRCode.CorrectLevel = QRErrorCorrectLevel;
	
	return QRCode;
	
}));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/add/add.component.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/add/add.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-row >\n <ion-col size=\"12\" *ngIf=\"usertype == 3\">\n    <ion-button expand=\"block\" (click)=\"store_customers(store_id)\" color=\"success\">\n      <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      ซื้อสินค้าเพิ่ม \n    </ion-button>\n  </ion-col>\n  <ion-col size=\"12\" *ngIf=\"usertype == 1\" >\n    <ion-button expand=\"block\" color=\"secondary\" (click)=\"letScan()\">\n      <ion-icon slot=\"end\" name=\"qr-scanner\"></ion-icon>\n      สแกนสินค้า\n    </ion-button>\n  </ion-col>  \n</ion-row> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{tab_titles[tab]}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"tab == 0\">\n\n\n  <ion-list>\n\n    <ion-list-header >\n      <ion-label>รายการคำสั่งซื้อ</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let order of orders\">\n      <ion-item>\n        <!-- <ion-avatar slot=\"start\">\n            <img src=\"/assets/noimg.png\">\n        </ion-avatar> -->\n        <ion-label>\n          <h5><ion-text color=\"dark\">{{order.member.firstname}} {{order.member.lastname }} </ion-text> <ion-badge color=\"danger\"> {{ order.price }} </ion-badge> <ion-text color=\"dark\">  บาท </ion-text> </h5>\n        </ion-label>\n        <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"deleteOrder(order.member.id);\">\n          <ion-icon slot=\"icon-only\" name=\"ios-trash\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"makeClall(order.member.mobile_number);\">\n          <ion-icon slot=\"icon-only\" name=\"ios-call\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"delivery(order);\">\n          <ion-icon slot=\"icon-only\" name=\"md-bicycle\"></ion-icon>\n        </ion-button>\n\n\n\n      </ion-item>\n\n      <ion-item *ngFor=\"let item of order.orders\">\n        <ion-avatar slot=\"start\">\n            <img src=\"/assets/noimg.png\">\n        </ion-avatar>\n        <ion-label>\n          <h5><ion-text color=\"dark\">{{item.product.product_th}} : {{item.product.price}} บาท x {{ item.qty }} ชิ้น</ion-text></h5>\n        </ion-label>\n      </ion-item>\n\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n\n</ion-content>\n\n<ion-content *ngIf=\"tab == 1\">\n  <!-- <ion-searchbar placeholder=\"ชื่อ/รหัสสินค้า\" color=\"primary\" animated debounce=\"500\" (ionChange)=\"search($event.target.value)\">\n  </ion-searchbar> -->\n\n  <ion-item-divider style=\"background:#f2f2f2;\">\n    <div slot=\"start\">\n      <h3>จำนวนเงิน</h3>\n    </div>\n    <div slot=\"end\">\n      <ion-input style=\"text-align: right;font-size: 20px\" type=\"number\" [(ngModel)]=\"price\" (keyup)=\"onKeyUp($event)\" clearInput></ion-input>\n    </div>\n  </ion-item-divider>\n\n  <app-list\n    [cart]=\"cart\"\n    (removeFromCartChange)=\"removeFromCart($event)\"\n    (addItemChange)=\"addItem($event)\">\n  </app-list>\n\n  <ion-list>\n\n    <ion-list-header >\n      <ion-label>รายการสินค้า</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let product of products\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n            <img src=\"/assets/noimg.png\">\n        </ion-avatar>\n        <ion-label>\n          <h5><ion-text color=\"dark\">{{ product.product_th }} </ion-text> <ion-badge color=\"danger\"> {{ product.price }} </ion-badge> <ion-text color=\"dark\">  บาท </ion-text> </h5>\n        </ion-label>\n\n        <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"addToCart(product);\">\n          <ion-icon slot=\"icon-only\" name=\"basket\"></ion-icon>\n        </ion-button>\n\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-button slot=\"end\" size=6 (click)=\"newTransaction();\" color=\"primary\">\n          <ion-icon  name=\"add\"></ion-icon>\n          สร้าง QR\n        </ion-button>\n      </ion-item>\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer style=\"background:#FFFFFF;\">\n  <ion-row>\n   <ion-col size=\"6\">\n      <ion-button expand=\"block\" (click)=\"changeTab(0)\" color=\"danger\">\n        <ion-icon name=\"add\"></ion-icon>\n        คำสั่งซื้อสินค้า\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n       <ion-button expand=\"block\" (click)=\"changeTab(1)\" color=\"primary\">\n         <ion-icon  name=\"add\"></ion-icon>\n         รับชำระเงินด้วย QR\n       </ion-button>\n     </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/list/list.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/list/list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list *ngIf=\"cart?.length > 0\">\n  <ion-list-header>\n    <ion-label>ตะกร้าสินค้า</ion-label>\n  </ion-list-header>\n\n  <ng-container *ngFor=\"let product of cart\">\n    <ion-item *ngIf=\"product.qty != 0\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"url+product.thumbnail || '/assets/no-product-image.jpg'\">\n      </ion-avatar>\n      {{ product.product_th }}&nbsp;\n      <!-- <ion-badge color=\"danger\" *ngIf=\"product.instock == 0\">หมดสต๊อค</ion-badge> -->\n      <ion-badge color=\"primary\" slot=\"end\">{{ product.qty }}</ion-badge>\n      <ion-button slot=\"end\" size=\"large\" fill=\"clear\" color=\"success\" [disabled]=\"product.instock == 0\" (click)=\"addItem(product)\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\" size=\"large\" fill=\"clear\" color=\"danger\" *ngIf=\"product.qty > 0\" (click)=\"removeFromCart(product)\">\n        <ion-icon name=\"close\" *ngIf=\"product.qty == 1\"></ion-icon>\n        <ion-icon name=\"remove\" *ngIf=\"product.qty > 1\"></ion-icon>\n      </ion-button>\n\n    </ion-item>\n  </ng-container>\n\n</ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/price/price.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/price/price.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item-divider style=\"background:#f2f2f2;\">\n  <div slot=\"start\">\n    <h3>ราคารวม</h3>\n  </div>\n  <div slot=\"end\">\n    <h2>{{ price | number }} ฿</h2>\n  </div>\n</ion-item-divider> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/qrmodal/qrmodal.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/qrmodal/qrmodal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ชำระเงินด้วยQR</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n\n  <ion-card style=\"background:#FFFFFF;\">\n    <qrcode [qrdata]=\"qr\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n    <ion-card-content>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        ราคารวม\n        <ion-badge color=\"danger\">\n        <h2>{{ trn.price | number }}</h2>\n      </ion-badge> บาท\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button expand=\"full\" shape=\"round\" color=\"primary\" type=\"submit\"  (click)=\"forceDissmiss()\">สำเร็จ</ion-button>\n      </ion-col>\n    </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/cart/add/add.component.scss":
/*!*********************************************!*\
  !*** ./src/app/cart/add/add.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cart/add/add.component.ts":
/*!*******************************************!*\
  !*** ./src/app/cart/add/add.component.ts ***!
  \*******************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddComponent = class AddComponent {
    constructor() { }
    ngOnInit() { }
};
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/add/add.component.html"),
        styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/cart/add/add.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddComponent);



/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qrmodal/qrmodal.component */ "./src/app/cart/qrmodal/qrmodal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../products/shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _shared_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/cart.service */ "./src/app/cart/shared/cart.service.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./price/price.component */ "./src/app/cart/price/price.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list/list.component */ "./src/app/cart/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./add/add.component */ "./src/app/cart/add/add.component.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");

















// import { QRScanner } from '@ionic-native/qr-scanner/ngx';
//import { CallNumber } from '@ionic-native/call-number';
const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_8__["CartPage"]
    },
    {
        path: 'qrmodal',
        component: _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_5__["QrmodalComponent"]
    },
];
let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_15__["QRCodeModule"],
            // QRScanner,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _cart_page__WEBPACK_IMPORTED_MODULE_8__["CartPage"],
            _price_price_component__WEBPACK_IMPORTED_MODULE_11__["PriceComponent"],
            _list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
            _add_add_component__WEBPACK_IMPORTED_MODULE_13__["AddComponent"],
            _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_5__["QrmodalComponent"],
        ],
        entryComponents: [
            _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_5__["QrmodalComponent"]
        ],
        providers: [
            _shared_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"],
            _products_shared_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__["BarcodeScanner"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__["CallNumber"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
        ]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnMS5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/cart.service */ "./src/app/cart/shared/cart.service.ts");
/* harmony import */ var _shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/transaction.service */ "./src/app/shared/services/transaction.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qrmodal/qrmodal.component */ "./src/app/cart/qrmodal/qrmodal.component.ts");
/* harmony import */ var _shared_services_qr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/qr.service */ "./src/app/shared/services/qr.service.ts");
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../products/shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");















// import { CallNumber } from '@ionic-native/call-number';


let CartPage = class CartPage {
    constructor(cartService, transactionService, productService, toastService, alertService, qrService, modalController, http, router, route, geolocation, barcodeScanner, builder, callNumber) {
        // this.productService.getAll().subscribe(resp => {
        //   this.product_all = resp.products.data;
        //   alert(this.product_all);
        //    //console.log('product_all',this.product_all);
        // });
        this.cartService = cartService;
        this.transactionService = transactionService;
        this.productService = productService;
        this.toastService = toastService;
        this.alertService = alertService;
        this.qrService = qrService;
        this.modalController = modalController;
        this.http = http;
        this.router = router;
        this.route = route;
        this.geolocation = geolocation;
        this.barcodeScanner = barcodeScanner;
        this.builder = builder;
        this.callNumber = callNumber;
        this.scanChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.product_code = '';
        this.productFound = false;
        this.searchTerm = '';
        this.query = '';
        this.page = 1;
        this.tab = 0;
        this.tab_titles = ["คำสั่งซื้อ", "รับชำระเงิน"];
        this.barcodeScannerOptions = {
            formats: "QR_CODE,EAN_13"
        };
        this.usertype = '';
        this.price = 0;
        this.store_id = 0;
        this.products = [];
        this.orders = [];
        this.store = JSON.parse(localStorage.getItem('store'));
        //alert(JSON.stringify(this.store));
        //alert(JSON.stringify(this.store));
        //
        // this.usertype = localStorage.getItem('usertype');
        //
        // this.route.queryParams.subscribe(params => {
        //   console.log(params);
        //   if (params && params.special) {
        //     this.store_id = JSON.parse(params.special);
        //     //console.log('store_id: ',this.store_id);
        //
        //   }
        // });
    }
    ionViewWillEnter() {
        this.getOrders();
        this.getProducts();
        // this.http.get<any>(`http://qrdee.co/api/v1/store`).subscribe(console.log);
        // this.test = localStorage.getItem('test');
    }
    ngAfterViewInit() {
        // this.geolocation.getCurrentPosition().then((resp) => {
        //
        // this.latitude = resp.coords.latitude;
        // this.longitude = resp.coords.longitude;
        //
        //     const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        //       center: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        //       zoom: 6,
        //     });
        //
        //
        //     var icon = {
        //      // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
        //         url:'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
        //         scaledSize: new google.maps.Size(50, 50), // scaled size
        //     };
        //     //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
        //     //code
        //     var marker = new google.maps.Marker({
        //         position: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        //         map: map,
        //         icon: icon
        //     });
        //
        //     const infoWindow = new google.maps.InfoWindow;
        //     const pos = {
        //       lat: this.latitude,
        //       lng: this.longitude
        //     };
        //     infoWindow.setPosition(pos);
        //     infoWindow.setContent('ตำแหน่งของคุณ.');
        //     infoWindow.open(map);
        //     map.setCenter(pos);
        //
        //     }).catch((error) => {
        //       //alert('เกิดข้อผิดพลาดในการรับตำแหน่ง');
        // });
    }
    delivery(order) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(order)
            }
        };
        this.router.navigate(['delivery'], navigationExtras);
    }
    changeTab(tab) {
        this.tab = tab;
        if (this.tab == 0) {
            this.getOrders();
            //this.store_customers(this.store.id);
        }
        else {
            this.getProducts();
        }
    }
    getOrders() {
        this.cartService.getOrders(this.store.id).subscribe((data) => {
            this.orders = data;
        });
    }
    getProducts() {
        this.cartService.getProducts(this.store.id).subscribe((data) => {
            //alert(JSON.stringify(data));
            this.products = data;
        });
    }
    addToCart(product) {
        this.cartService.addToCart(product);
        //this.toastService.showToast(`เพิ่ม ${product.product_th} ใส่ตะกร้าแล้ว`, 'top');
        this.getCart();
    }
    getCart() {
        this.cartService.getCart().subscribe(data => this.cart = data);
        this.price = this.cartService.getPrice();
        console.log(this.price);
    }
    addItem(product) {
        this.cartService.addItem(product);
        //this.toastService.showToast(`เพิ่ม ${product.product_th} 1 ชิ้น`, 'top')
        this.getCart();
    }
    removeFromCart(product) {
        this.cartService.removeProduct(product);
        this.getCart();
    }
    onKeyUp(event) {
        this.cartService.clearCart();
        this.getCart();
        //alert(event);
        this.price = event.target.value;
    }
    makeClall(mnumber) {
        this.callNumber.callNumber(`${mnumber}`, true)
            .then(res => { })
            .catch(err => { alert(JSON.stringify(err)); });
    }
    deleteOrder(member_id) {
        this.alertService.showAlert({
            header: `ท่านต้องการลบคำสั่งซื้อนี้จริงหรือไม่?`,
            sub_header: '',
            message: '',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: () => {
                        this.getOrders();
                    },
                    role: 'cancel',
                },
                {
                    text: 'ตกลง',
                    handler: () => {
                        this.cartService.deleteOrder(this.store.id, member_id).subscribe((data) => {
                            this.getOrders();
                        }, err => {
                            //alert(JSON.stringify(err));
                        });
                    }
                }
            ]
        });
    }
    newTransaction() {
        this.alertService.showAlert({
            header: `สร้าง QR หมายเลข ${this.store.promptpay} จำนวน ${this.price} บาท?`,
            sub_header: '',
            message: '',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: () => {
                        // if(this.store_id){
                        //     this.transactionService.newTransaction(this.cart, this.price, this.latitude, this.longitude, this.firstname, this.lastname,this.mobile_number,this.latitude_store,this.longitude_store, this.store_id,this.promptpay, this.verified = 0).subscribe(trn => {
                        //       console.log(trn);
                        //        this.toastService.showToast('ยกเลิกการซื้อสินค้าแล้ว', 'top');
                        //     });
                        // }else{
                        //       this.transactionService.newTransactionStore(this.cart, this.price,this.verified = 0).subscribe(trn => {
                        //       this.toastService.showToast('ยกเลิกการซื้อสินค้าแล้ว', 'top');
                        //     });
                        // }
                        this.cartService.clearCart();
                        this.getCart();
                    },
                    role: 'cancel',
                },
                {
                    text: 'ตกลง',
                    handler: () => {
                        this.transactionService.transactionToQR(this.cart, this.price, this.store.id).subscribe((data) => {
                            this.QRModal(data.prompt_payload, data);
                        }, err => {
                            alert("Network Error!");
                        });
                        // this.transactionService.newTransactionStore(this.cart, this.price,this.verified = 1).subscribe(trn => {
                        //     this.qrService.generatePromptPayQRs(trn.data).subscribe(qr => {
                        //       this.QRModal(qr, trn);
                        //    });
                        //  });
                        // if(this.store_id){
                        //
                        //    this.cartService.getStorePromptpay(this.store_id).subscribe(res => {
                        //     this.promptpay =  res.data[0].promptpay;
                        //      console.log(res);
                        //      console.log(this.promptpay);
                        //   this.cartService.getStoreMaps(this.store_id).subscribe(res => {
                        //     this.latitude_store = res.data[0].latitude;
                        //     this.longitude_store = res.data[0].longitude;
                        //     console.log('store_map',this.latitude_store,this.longitude_store );
                        //
                        //   this.transactionService.getUser().subscribe(res => {
                        //       this.firstname = res.data.firstname;
                        //       this.lastname = res.data.lastname;
                        //       this.mobile_number = res.data.mobile_number;
                        //       this.store_id;
                        //
                        //
                        //       this.transactionService.newTransaction(this.cart, this.price, this.latitude, this.longitude, this.firstname, this.lastname,this.mobile_number,this.latitude_store,this.longitude_store, this.store_id,this.promptpay, this.verified = 1).subscribe(trn => {
                        //     console.log('user_map',this.latitude,this.longitude);
                        //         this.qrService.generatePromptPayQRs(trn.data).subscribe(qr => {
                        //            this.QRModal(qr, trn);
                        //            // console.log(22);
                        //            // console.log(qr);
                        //         });
                        //
                        //       });
                        //      });
                        //    });
                        //   });
                        // }else{
                        //
                        //   this.transactionService.newTransactionStore(this.cart, this.price,this.verified = 1).subscribe(trn => {
                        //    console.log(this.cart, this.price,this.verified);
                        //       this.qrService.generatePromptPayQRs(trn.data).subscribe(qr => {
                        //         this.QRModal(qr, trn);
                        //      });
                        //    });
                        // }
                    }
                }
            ]
        });
    }
    // test
    search(product_code) {
        this.productService.getAll().subscribe(resp => {
            this.product_all = resp.products.data;
            console.log('product_all', this.product_all);
        });
        console.log("product_code", product_code);
        this.productService.getByProductCode(product_code).subscribe(product => {
            if (product.instock === 0) {
                this.toastService.showToast(`สินค้า ${product.product_th} ไม่มีในสต๊อคสินค้า`, 'top');
            }
            else {
                this.cartService.addToCart(product);
                this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
                this.getCart();
            }
        });
    }
    // search(product_code) {
    //     const barcodeScannerOptions: BarcodeScannerOptions = {
    //       formats : "QR_CODE,EAN_13"
    //     };
    //  this.productService.getByProductCode(this.product_code).subscribe(product => {
    //     this.barcodeScanner.scan(barcodeScannerOptions).then((result: BarcodeScanResult) => {
    //       this.product_code = result.text;
    //  this.cartService.addToCart(product);
    //           this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
    //           this.getCart();
    //     });
    //       });
    // }
    // letScan(product_code) {
    //    this.barcodeScanner.scan(this.barcodeScannerOptions).then((result: BarcodeScanResult) => {
    //      console.log(result);
    //      this.scanChange.emit(result.text);
    //      // this.product_all = this.product_code;
    //       this.product_code = this.scanChange.emit(result.text);
    //       this.productService.getByProductCode(this.product_code).subscribe(product => {
    //        if(product.instock === 0) {
    //          this.toastService.showToast(`สินค้า ${product.product_th} ไม่มีในสต๊อคสินค้า`, 'top')
    //        } else {
    //          this.cartService.addToCart(product);
    //          this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
    //          this.getCart();
    //      }
    //    });
    //      // this.scan;
    //      // this.presentAlert(result.text);
    //    }).catch(err => {
    //      console.log('Error', err);
    //    });
    //  }
    getProduc() {
        this.productService.getAll().subscribe(resp => {
            this.product_all = resp.products.data;
            console.log('product_all', this.product_all);
        });
    }
    // letScan(product_code){
    //     this.barcodeScanner.scan().then(barcodeData =>{
    //       this.scanChange = barcodeData.text;
    //       this.product_all = this.product_code;
    //         this.productService.getByProductCode(product_code).subscribe(product => {
    //         if(product.instock === 0) {
    //           this.toastService.showToast(`สินค้า ${product.product_th} ไม่มีในสต๊อคสินค้า`, 'top')
    //         } else {
    //           this.cartService.addToCart(product);
    //           this.toastService.showToast(`เพิ่ม ${product.product_th} 1ชิ้น`, 'top');
    //           this.getCart();
    //       }
    //     });
    //     })
    //   }
    QRModal(qr, trn) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_7__["QrmodalComponent"],
                componentProps: {
                    'trn': trn,
                    'qr': qr
                }
            });
            modal.onDidDismiss()
                .then(status => {
                if (status.data == 1) {
                    this.cartService.clearCart();
                    this.getCart();
                    //this.toastService.showToast(`ชำระเงินเรียบร้อยแล้ว`, 'top');
                }
            });
            return yield modal.present();
        });
    }
    submit() {
        this.toastService.showToast('กำลังตรวจสอบข้อมูล', 'top');
        this.router.navigateByUrl('/customer');
    }
    store_customers(store_id) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(this.store_id)
            }
        };
        this.router.navigate(['products'], navigationExtras);
    }
};
CartPage.ctorParameters = () => [
    { type: _shared_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"] },
    { type: _products_shared_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _shared_services_qr_service__WEBPACK_IMPORTED_MODULE_8__["QrService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__["BarcodeScanner"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_14__["CallNumber"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CartPage.prototype, "scanChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CartPage.prototype, "mapNativeElement", void 0);
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html"),
        styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
        _shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"],
        _products_shared_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _shared_services_qr_service__WEBPACK_IMPORTED_MODULE_8__["QrService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_12__["Geolocation"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_13__["BarcodeScanner"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_14__["CallNumber"]])
], CartPage);



/***/ }),

/***/ "./src/app/cart/list/list.component.scss":
/*!***********************************************!*\
  !*** ./src/app/cart/list/list.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  --padding-start: 0;\n  --padding-end: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jYXJ0L2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFnQjtFQUNoQixnQkFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FydC9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/cart/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





// import { Http, Headers, RequestOptions } from '@angular/http';
let ListComponent = class ListComponent {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.removeFromCartChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.addItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
    }
    ngOnInit() {
        // console.log(this.cart);
    }
    addItem(product) {
        this.addItemChange.emit(product);
    }
    removeFromCart(product) {
        this.removeFromCartChange.emit(product);
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListComponent.prototype, "cart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListComponent.prototype, "removeFromCartChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ListComponent.prototype, "addItemChange", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/list/list.component.html"),
        styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/cart/list/list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], ListComponent);



/***/ }),

/***/ "./src/app/cart/price/price.component.scss":
/*!*************************************************!*\
  !*** ./src/app/cart/price/price.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-divider {\n  --padding-top: 10px;\n  --padding-bottom: 10px; }\n\nion-badge {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --padding-start: 30px;\n  --padding-end: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jYXJ0L3ByaWNlL3ByaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWM7RUFDZCxzQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtQkFBYztFQUNkLHNCQUFpQjtFQUNqQixxQkFBZ0I7RUFDaEIsbUJBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnQvcHJpY2UvcHJpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1kaXZpZGVyIHtcclxuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1iYWRnZSB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMzBweDtcclxuICAtLXBhZGRpbmctZW5kOiAzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/cart/price/price.component.ts":
/*!***********************************************!*\
  !*** ./src/app/cart/price/price.component.ts ***!
  \***********************************************/
/*! exports provided: PriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceComponent", function() { return PriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PriceComponent = class PriceComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('price'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PriceComponent.prototype, "price", void 0);
PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-price',
        template: __webpack_require__(/*! raw-loader!./price.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/price/price.component.html"),
        styles: [__webpack_require__(/*! ./price.component.scss */ "./src/app/cart/price/price.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PriceComponent);



/***/ }),

/***/ "./src/app/cart/qrmodal/qrmodal.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/cart/qrmodal/qrmodal.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jYXJ0L3FybW9kYWwvcXJtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDREQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L3FybW9kYWwvcXJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcxLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/cart/qrmodal/qrmodal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/cart/qrmodal/qrmodal.component.ts ***!
  \***************************************************/
/*! exports provided: QrmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrmodalComponent", function() { return QrmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/transaction.service */ "./src/app/shared/services/transaction.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/cart.service */ "./src/app/cart/shared/cart.service.ts");





// import { environment } from 'src/environments/environment';








let QrmodalComponent = class QrmodalComponent {
    constructor(transactionService, modalController, router, alertService, geolocation, route, builder, toastService, loadingController, navCtrl, http, cartService) {
        this.transactionService = transactionService;
        this.modalController = modalController;
        this.router = router;
        this.alertService = alertService;
        this.geolocation = geolocation;
        this.route = route;
        this.builder = builder;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.http = http;
        this.cartService = cartService;
        this.store_id = 0;
        this.id = 0;
        this.price = 0;
        // this.route.queryParams.subscribe(params => {
        //   if (params && params.special) {
        //     this.store_id = JSON.parse(params.special);
        //     // console.log(params);
        //     // console.log('store_id: ',this.store_id);
        //
        //   }
        // });
        this.store = JSON.parse(localStorage.getItem('store'));
    }
    // ionViewWillEnter() {
    // }
    ngAfterViewInit() {
        //     this.geolocation.getCurrentPosition().then((resp) => {
        //     console.log(resp);
        //
        //     this.latitude = resp.coords.latitude;
        //     this.longitude = resp.coords.longitude;
        //
        //     const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        //       center: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        //       zoom: 6,
        //     });
        //
        //     var icon = {
        //      // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
        //         url:'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
        //         scaledSize: new google.maps.Size(50, 50), // scaled size
        //     };
        //     //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
        //
        //     var marker = new google.maps.Marker({
        //         position: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        //         map: map,
        //         icon: icon
        //     });
        //
        //     const infoWindow = new google.maps.InfoWindow;
        //     const pos = {
        //       lat: this.latitude,
        //       lng: this.longitude
        //     };
        //     infoWindow.setPosition(pos);
        //     infoWindow.setContent('ตำแหน่งของคุณ.');
        //     infoWindow.open(map);
        //     map.setCenter(pos);
        //
        //     }).catch((error) => {
        //   console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error);
        // });
    }
    // latitude , longitude
    forceDissmiss() {
        this.closeModal(1);
    }
    verifyTransaction(longitude, latitude, latitude_store, longitude_store, store_id) {
        if (this.store_id) {
            this.cartService.getStorePromptpay(this.store.id).subscribe(res => {
                this.promptpay = res.data[0].promptpay;
                console.log(res);
                console.log(this.promptpay);
                this.transactionService.getUser().subscribe(res => {
                    console.log('user_map', this.latitude, this.longitude);
                    this.firstname = res.data.firstname;
                    this.lastname = res.data.lastname;
                    this.mobile_number = res.data.mobile_number;
                    this.transaction.latitude = this.latitude;
                    this.transaction.longitude = this.longitude;
                    this.transaction.firstname = this.firstname;
                    this.transaction.lastname = this.lastname;
                    this.transaction.mobile_number = this.mobile_number;
                    this.transaction.latitude_store = this.latitude_store;
                    this.transaction.longitude_store = this.longitude_store;
                    this.transaction.promptpay = this.promptpay;
                    this.transaction.store_id = this.store_id;
                    this.transactionService.verifyTransaction(this.transaction).subscribe(res => {
                        this.closeModal(1);
                        console.log(this.transaction);
                    });
                });
            });
            this.cartService.getStoreMaps(this.store_id).subscribe(res => {
                this.latitude_store = res.data[0].latitude;
                this.longitude_store = res.data[0].longitude;
                console.log('store_map', this.latitude_store, this.longitude_store);
            });
        }
        else {
            this.transactionService.verifyTransaction(this.transaction).subscribe(res => {
                this.closeModal(1);
                // this.router.navigateByUrl('/cart/order-qr');
                console.log(this.transaction);
            });
        }
        this.alertService.showAlert({
            header: 'กดตกลงเพื่อยืนยันการจัดส่งสินค้า',
            sub_header: '',
            message: '',
            buttons: [
                {
                    text: 'ยกเลิก',
                    role: 'cancel'
                },
                {
                    text: 'ตกลง',
                    handler: () => {
                        // if(this.store_id){ this.cartService.getStorePromptpay(this.store_id).subscribe(res => {
                        // this.transactionService.orderProducts().subscribe(res => {
                        // this.verifieds = res.data.verified;
                        // console.log(this.verifieds);
                        //  });
                        this.transactionService.orderProducts().subscribe(res => {
                            console.log(res);
                            this.code_randoms = res.data.code_randoms;
                            console.log(this.code_randoms);
                            this.store_id = res.data.store_id;
                            console.log(this.store_id);
                            this.transactionService.getUser().subscribe(res => {
                                this.firstname = res.data.firstname;
                                this.lastname = res.data.lastname;
                                this.mobile_number = res.data.mobile_number;
                                this.transactionService.newTransactionOrder(this.firstname, this.lastname, this.mobile_number, this.store_id, this.code_randoms).subscribe(trn => {
                                });
                            });
                        });
                    }
                    // }
                }
            ]
        });
    }
    closeModal(status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modalController.dismiss(status);
        });
    }
};
QrmodalComponent.ctorParameters = () => [
    { type: src_app_shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"] },
    { type: _shared_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QrmodalComponent.prototype, "transaction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QrmodalComponent.prototype, "qr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], QrmodalComponent.prototype, "mapNativeElement", void 0);
QrmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qrmodal',
        template: __webpack_require__(/*! raw-loader!./qrmodal.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/qrmodal/qrmodal.component.html"),
        styles: [__webpack_require__(/*! ./qrmodal.component.scss */ "./src/app/cart/qrmodal/qrmodal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
        _shared_cart_service__WEBPACK_IMPORTED_MODULE_10__["CartService"]])
], QrmodalComponent);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map