(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~customer-customer-module~products-products-module"],{

/***/ "./src/app/products/shared/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/products/shared/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/products";
    }
    ProductService.prototype.getAll = function () {
        return this.http.get("" + this.baseUrl);
    };
    ProductService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + "/" + id);
    };
    ProductService.prototype.getUser = function () {
        return this.http.get("https://qrdee.co/api/v1/users");
    };
    ProductService.prototype.getProduct = function (product_id) {
        return this.http.get("https://qrdee.co/api/v2/products?id=" + product_id);
    };
    ProductService.prototype.getProducts = function (store_id, limit, offset) {
        if (limit === void 0) { limit = 0; }
        if (offset === void 0) { offset = 0; }
        console.log("https://qrdee.co/api/v2/products/" + store_id + "?limit=" + limit + "&offset=" + offset);
        return this.http.get("https://qrdee.co/api/v2/products/" + store_id + "?limit=" + limit + "&offset=" + offset);
    };
    ProductService.prototype.getAllproduct = function (id) {
        // console.log('https://qrdee.co/api/v1/transaction_code/${code_randoms}');
        return this.http.get("https://qrdee.co/api/v1/allproduct/" + id);
    };
    ProductService.prototype.createProduct = function (data, store_id) {
        return this.http.post("https://qrdee.co/api/v2/products/" + store_id, data);
    };
    ProductService.prototype.updateProduct = function (data, id) {
        console.log("https://qrdee.co/api/v2/products/" + id);
        return this.http.put("https://qrdee.co/api/v2/products/" + id, data);
    };
    ProductService.prototype.deleteProduct = function (product_id) {
        return this.http.delete("https://qrdee.co/api/v2/products/" + product_id);
    };
    ProductService.prototype.getByProductCode = function (product_code) {
        return this.http.get(this.baseUrl + "?t=product_code&code=" + product_code);
    };
    ProductService.prototype.getProductTypes = function () {
        return this.http.get("https://qrdee.co/api/v2/refs?t=product_types");
    };
    ProductService.prototype.search = function (term, page) {
        console.log(term);
        //return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
        return this.http.get(this.baseUrl + "?t=search&query=" + term + "&page=" + page);
    };
    ProductService.prototype.searchs = function (id, term, page) {
        // console.log(id);
        console.log(term);
        // return this.http.get<any>(`https://qrdee.co/api/v1/search_products?f=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
        // return this.http.get<any>(`https://qrdee.co/api/v1/search_products/${id}?query=${term}&page=${page}`);
        return this.http.get("https://qrdee.co/api/v1/search_products/" + id + "/?=search&query=" + term + "&page=" + page);
        // https://qrdee.co/api/v1/search_products/25/?=search&query=สมุด&page=1
        // https://qrdee.co/api/v1/search_products/25?&query=รองเท้าแก้ว
    };
    ProductService.prototype.getProductStore_id = function (id) {
        // console.log(`https://qrdee.co/api/v1/store_id/${id}`);
        return this.http.get("https://qrdee.co/api/v1/store_id/" + id);
    };
    ProductService.prototype.getStoredistances = function (latitude, longitude) {
        console.log("http://qrdee.co/api/v1/diss?latitude=" + latitude + "&longitude=" + longitude);
        return this.http.get("http://qrdee.co/api/v1/diss?latitude=" + latitude + "&longitude=" + longitude);
    };
    ProductService.prototype.getAllS = function (id) {
        return this.http.get("https://qrdee.co/api/v1/product_store/" + id);
    };
    // searchEntries(term, page) {
    //   // let queryString = isNaN(term) ? `t=search_code&query=${term == '' ? true : term}&page=${page}` ? `?t=search&query=${term == '' ? true : term}&page=${page}`:
    //   // console.log(isNaN(term));
    //   return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
    // }
    ProductService.prototype.createFormData = function (data) {
        var fd = new FormData();
        // if(data.image) fd.append('thumbnail', data.image);
        // if(data.thumbnail) fd.append('thumbnail', data.thumbnail);
        // if(data.imageData) fd.append('thumbnail', data.imageData);
        fd.append('product_type_id', data.product_type_id);
        fd.append('product_th', data.product_th);
        fd.append('details_th', data.details_th);
        fd.append('price', data.price);
        fd.append('cost', data.cost);
        return fd;
    };
    ProductService.prototype.addProductRate = function (product_id, rating) {
        return this.http.post("https://qrdee.co/api/v2/rating/product/" + product_id, { star: rating });
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/interceptors/httpclient.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/interceptors/httpclient.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: HttpClientInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientInterceptor", function() { return HttpClientInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var HttpClientInterceptor = /** @class */ (function () {
    function HttpClientInterceptor(storage) {
        this.storage = storage;
        this.access_token = '';
        localStorage.getItem('access_token');
        console.log(localStorage.getItem('access_token'));
    }
    HttpClientInterceptor.prototype.intercept = function (request, next) {
        // const token: string = 'Bearer YkVNRDBITDc2TTBFMDFzZldiT2xMa09DQ1BYYUQxMjFjZzVWR3poZ3JWTlVyR2lkNERqbnR6blRXdFFHaVp5SlR6blFVdFZjaTRqTDQ1UnhyMHRjeEs1VnVrdzM3cDFLSUw1bWZtd1J0d1ZPODV5V0hlb3FvZWQxSWJSaGowZEg=';
        var token = 'Bearer ' + localStorage.getItem('access_token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': token
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
            }
            return event;
        }));
    };
    HttpClientInterceptor.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    HttpClientInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], HttpClientInterceptor);
    return HttpClientInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/services/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertService = /** @class */ (function () {
    function AlertService(alertController) {
        this.alertController = alertController;
    }
    AlertService.prototype.showAlert = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: options.header,
                            subHeader: options.sub_header,
                            message: options.message,
                            buttons: options.buttons
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/shared/services/qr.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/qr.service.ts ***!
  \***********************************************/
/*! exports provided: QrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrService", function() { return QrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var QrService = /** @class */ (function () {
    function QrService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/promptpayQRs";
    }
    QrService.prototype.generatePromptPayQRs = function (transaction) {
        return this.http.post(this.baseUrl, transaction);
    };
    QrService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    QrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QrService);
    return QrService;
}());



/***/ }),

/***/ "./src/app/shared/services/toast.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ToastService = /** @class */ (function () {
    function ToastService(toastController) {
        this.toastController = toastController;
    }
    ToastService.prototype.showToast = function (message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            position: position,
                            duration: 1000,
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.prototype.showToasts = function (message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            position: position,
                            duration: 1000,
                            color: '#FFFFFF'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/shared/services/transaction.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/transaction.service.ts ***!
  \********************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TransactionService = /** @class */ (function () {
    function TransactionService(http) {
        this.http = http;
    }
    ////////////////// v2 ///////////////////
    TransactionService.prototype.genQR = function (promptpay, price) {
        return this.http.get("https://qrdee.co/api/v2/qr?promptpay=" + promptpay + "&price=" + price);
    };
    TransactionService.prototype.insertTransaction = function (products, prompt_payload, price, store_id) {
        var body = {
            price: price,
            prompt_payload: prompt_payload,
            products: products
        };
        return this.http.post("https://qrdee.co/api/v2/trnqr/" + store_id, body);
    };
    TransactionService.prototype.getOrders = function (store_id) {
        return this.http.get("https://qrdee.co/api/v2/orders/" + store_id);
    };
    TransactionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TransactionService);
    return TransactionService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/httpclient.interceptor */ "./src/app/shared/interceptors/httpclient.interceptor.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/transaction.service */ "./src/app/shared/services/transaction.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _services_qr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/qr.service */ "./src/app/shared/services/qr.service.ts");





// import { QRCodeModule } from 'angularx-qrcode';





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // QRCodeModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
                _services_transaction_service__WEBPACK_IMPORTED_MODULE_7__["TransactionService"],
                _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
                _services_qr_service__WEBPACK_IMPORTED_MODULE_9__["QrService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_5__["HttpClientInterceptor"], multi: true }
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~cart-cart-module~customer-customer-module~products-products-module-es5.js.map