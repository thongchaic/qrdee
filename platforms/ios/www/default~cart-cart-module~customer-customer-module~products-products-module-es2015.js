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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}/products`;
    }
    getAll() {
        return this.http.get(`${this.baseUrl}`);
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    getUser() {
        return this.http.get(`https://qrdee.co/api/v1/users`);
    }
    getProduct(product_id) {
        return this.http.get(`https://qrdee.co/api/v2/products?id=${product_id}`);
    }
    getProducts(store_id, limit = 0, offset = 0) {
        console.log(`https://qrdee.co/api/v2/products/${store_id}?limit=${limit}&offset=${offset}`);
        return this.http.get(`https://qrdee.co/api/v2/products/${store_id}?limit=${limit}&offset=${offset}`);
    }
    getAllproduct(id) {
        // console.log('https://qrdee.co/api/v1/transaction_code/${code_randoms}');
        return this.http.get(`https://qrdee.co/api/v1/allproduct/${id}`);
    }
    createProduct(data, store_id) {
        return this.http.post(`https://qrdee.co/api/v2/products/${store_id}`, data);
    }
    updateProduct(data, id) {
        console.log(`https://qrdee.co/api/v2/products/${id}`);
        return this.http.put(`https://qrdee.co/api/v2/products/${id}`, data);
    }
    deleteProduct(product_id) {
        return this.http.delete(`https://qrdee.co/api/v2/products/${product_id}`);
    }
    getByProductCode(product_code) {
        return this.http.get(`${this.baseUrl}?t=product_code&code=${product_code}`);
    }
    getProductTypes() {
        return this.http.get(`https://qrdee.co/api/v2/refs?t=product_types`);
    }
    search(term, page) {
        console.log(term);
        //return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
        return this.http.get(`${this.baseUrl}?t=search&query=${term}&page=${page}`);
    }
    searchs(id, term, page) {
        // console.log(id);
        console.log(term);
        // return this.http.get<any>(`https://qrdee.co/api/v1/search_products?f=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
        // return this.http.get<any>(`https://qrdee.co/api/v1/search_products/${id}?query=${term}&page=${page}`);
        return this.http.get(`https://qrdee.co/api/v1/search_products/${id}/?=search&query=${term}&page=${page}`);
        // https://qrdee.co/api/v1/search_products/25/?=search&query=สมุด&page=1
        // https://qrdee.co/api/v1/search_products/25?&query=รองเท้าแก้ว
    }
    getProductStore_id(id) {
        // console.log(`https://qrdee.co/api/v1/store_id/${id}`);
        return this.http.get(`https://qrdee.co/api/v1/store_id/${id}`);
    }
    getStoredistances(latitude, longitude) {
        console.log(`http://qrdee.co/api/v1/diss?latitude=${latitude}&longitude=${longitude}`);
        return this.http.get(`http://qrdee.co/api/v1/diss?latitude=${latitude}&longitude=${longitude}`);
    }
    getAllS(id) {
        return this.http.get(`https://qrdee.co/api/v1/product_store/${id}`);
    }
    // searchEntries(term, page) {
    //   // let queryString = isNaN(term) ? `t=search_code&query=${term == '' ? true : term}&page=${page}` ? `?t=search&query=${term == '' ? true : term}&page=${page}`:
    //   // console.log(isNaN(term));
    //   return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
    // }
    createFormData(data) {
        const fd = new FormData();
        // if(data.image) fd.append('thumbnail', data.image);
        // if(data.thumbnail) fd.append('thumbnail', data.thumbnail);
        // if(data.imageData) fd.append('thumbnail', data.imageData);
        fd.append('product_type_id', data.product_type_id);
        fd.append('product_th', data.product_th);
        fd.append('details_th', data.details_th);
        fd.append('price', data.price);
        fd.append('cost', data.cost);
        return fd;
    }
    addProductRate(product_id, rating) {
        return this.http.post(`https://qrdee.co/api/v2/rating/product/${product_id}`, { star: rating });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProductService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let HttpClientInterceptor = class HttpClientInterceptor {
    constructor(storage) {
        this.storage = storage;
        this.access_token = '';
        localStorage.getItem('access_token');
        console.log(localStorage.getItem('access_token'));
    }
    intercept(request, next) {
        // const token: string = 'Bearer YkVNRDBITDc2TTBFMDFzZldiT2xMa09DQ1BYYUQxMjFjZzVWR3poZ3JWTlVyR2lkNERqbnR6blRXdFFHaVp5SlR6blFVdFZjaTRqTDQ1UnhyMHRjeEs1VnVrdzM3cDFLSUw1bWZtd1J0d1ZPODV5V0hlb3FvZWQxSWJSaGowZEg=';
        const token = 'Bearer ' + localStorage.getItem('access_token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': token
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
            }
            return event;
        }));
    }
};
HttpClientInterceptor.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
HttpClientInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], HttpClientInterceptor);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    showAlert(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: options.header,
                subHeader: options.sub_header,
                message: options.message,
                buttons: options.buttons
            });
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlertService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let QrService = class QrService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}/promptpayQRs`;
    }
    generatePromptPayQRs(transaction) {
        return this.http.post(this.baseUrl, transaction);
    }
};
QrService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], QrService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    showToast(message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: position,
                duration: 1000,
                color: 'dark'
            });
            toast.present();
        });
    }
    showLongToast(message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'ไม่มีผู้ตอบรับส่งสินค้า',
                message: message,
                color: 'dark',
                position: 'top',
                buttons: [
                    {
                        text: 'ปิด',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            toast.present();
            // const toast = await this.toastController.create({
            //   message: message,
            //   position: position,
            //   duration: 30000,
            //   color: 'dark'
            // });
            // toast.present();
        });
    }
    showToasts(message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: position,
                duration: 1000,
                color: '#FFFFFF'
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ToastService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TransactionService = class TransactionService {
    constructor(http) {
        this.http = http;
    }
    ////////////////// v2 ///////////////////
    genQR(promptpay, price) {
        return this.http.get(`https://qrdee.co/api/v2/qr?promptpay=${promptpay}&price=${price}`);
    }
    insertTransaction(products, prompt_payload, price, store_id) {
        const body = {
            price: price,
            prompt_payload: prompt_payload,
            products: products
        };
        return this.http.post(`https://qrdee.co/api/v2/trnqr/${store_id}`, body);
    }
    getOrders(store_id) {
        return this.http.get(`https://qrdee.co/api/v2/orders/${store_id}`);
    }
};
TransactionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TransactionService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/httpclient.interceptor */ "./src/app/shared/interceptors/httpclient.interceptor.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/transaction.service */ "./src/app/shared/services/transaction.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _services_qr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/qr.service */ "./src/app/shared/services/qr.service.ts");





// import { QRCodeModule } from 'angularx-qrcode';





let SharedModule = class SharedModule {
};
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



/***/ })

}]);
//# sourceMappingURL=default~cart-cart-module~customer-customer-module~products-products-module-es2015.js.map