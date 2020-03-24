(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-logistic-store-logistic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/store-logistic/store-logistic.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store-logistic/store-logistic.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>เรียกคนส่งสินค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n<ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n            <ion-item *ngFor=\"let product_logistic of product_logistics\">\n                <img src=\"assets/images/map_logistic.png\" class=\"img_store_logistic\">\n                  <p class=\"font_size\">\n                  {{product_logistic.firstname}}\n                  <br> \n                  <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>\n                  {{product_logistic.delivery_status.delivery_status_th}}<br>\n                  {{product_logistic.delivery_type.delivery_type_th}} <br>\n                  โทร: {{product_logistic.mobile_number}}<br>\n                </p>\n              </ion-item> \n          <br><br><br><br><br><br>\n        </ion-col> \n      </ion-row>\n  </ion-grid>  \n</ion-content>\n"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let TransactionService = class TransactionService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}`;
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    // latitude,longitude
    orderProduct() {
        console.log(`https://qrdee.co/api/v1/order`);
        return this.http.get(`https://qrdee.co/api/v1/order`);
    }
    orderProducts() {
        console.log(`https://qrdee.co/api/v1/orders`);
        return this.http.get(`https://qrdee.co/api/v1/orders`);
    }
    getUser() {
        return this.http.get(`https://qrdee.co/api/v1/users`);
        // console.log('https://qrdee.co/api/v1/users');
    }
    getCodeRandoms() {
        return this.http.get(`https://qrdee.co/api/v1/code_randomss`);
        // console.log('https://qrdee.co/api/v1/users');      store_id
    }
    newTransaction(products, total_price, latitude, longitude, firstname, lastname, mobile_number, latitude_store, longitude_store, store_id, promptpay, verified) {
        const body = {
            total_price: total_price,
            products: products,
            latitude: latitude,
            longitude: longitude,
            firstname: firstname,
            lastname: lastname,
            mobile_number: mobile_number,
            latitude_store: latitude_store,
            longitude_store: longitude_store,
            store_id: store_id,
            promptpay: promptpay,
            verified: verified,
        };
        console.log(body);
        return this.http.post(`${this.baseUrl}/new_transaction`, body);
    }
    newTransactionStore(products, total_price, verified) {
        const bodystore = {
            total_price: total_price,
            products: products,
            verified: verified,
        };
        console.log(bodystore);
        return this.http.post(`https://qrdee.co/api/v1/new_transactionstore`, bodystore);
    }
    getverifiedcart(id) {
        return this.http.get(`https://qrdee.co/api/v1/verified_transactionstore/${id}`);
    }
    verifiedcart(verified) {
        const bodystoreverified = {
            verified: verified,
        };
        console.log('verified', bodystoreverified);
        return this.http.post(`https://qrdee.co/api/v1/verified_transactionstores`, bodystoreverified);
    }
    newTransactionOrder(firstname, lastname, mobile_number, store_id, code_randoms) {
        const bodystorder = {
            firstname: firstname,
            lastname: lastname,
            mobile_number: mobile_number,
            store_id: store_id,
            code_randoms: code_randoms,
        };
        console.log(bodystorder);
        return this.http.post(`https://qrdee.co/api/v1/transaction_order_input`, bodystorder);
    }
    verifyTransaction(transaction) {
        // console.log(transaction);
        return this.http.post(`${this.baseUrl}/verify_transaction`, transaction);
    }
    verifyTransactions(transaction) {
        // console.log(transaction);
        return this.http.post(`${this.baseUrl}/verify_transactions`, transaction);
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



/***/ }),

/***/ "./src/app/store-logistic/shared/store-logistic.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/store-logistic/shared/store-logistic.service.ts ***!
  \*****************************************************************/
/*! exports provided: StoreLogisticService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreLogisticService", function() { return StoreLogisticService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let StoreLogisticService = class StoreLogisticService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}/store_id`;
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    gets(id) {
        return this.http.get(`http://qrdee.co/api/v1/product_logistic`);
    }
    // getStoreProductDistance(latitude,longitude) {
    //   console.log(`http://qrdee.co/api/v1/map_delivery?latitude=${latitude}&longitude=${longitude}`);
    //     return this.http.get(`http://qrdee.co/api/v1/map_delivery?latitude=${latitude}&longitude=${longitude}`);
    //   }
    getProductLogistic() {
        return this.http.get(`http://qrdee.co/api/v1/product_logistic`);
    }
};
StoreLogisticService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
StoreLogisticService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], StoreLogisticService);



/***/ }),

/***/ "./src/app/store-logistic/store-logistic.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/store-logistic/store-logistic.module.ts ***!
  \*********************************************************/
/*! exports provided: StoreLogisticPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreLogisticPageModule", function() { return StoreLogisticPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_store_logistic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/store-logistic.service */ "./src/app/store-logistic/shared/store-logistic.service.ts");
/* harmony import */ var _store_logistic_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store-logistic.page */ "./src/app/store-logistic/store-logistic.page.ts");









const routes = [
    {
        path: '',
        component: _store_logistic_page__WEBPACK_IMPORTED_MODULE_8__["StoreLogisticPage"]
    }
];
let StoreLogisticPageModule = class StoreLogisticPageModule {
};
StoreLogisticPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_store_logistic_page__WEBPACK_IMPORTED_MODULE_8__["StoreLogisticPage"]],
        providers: [_shared_store_logistic_service__WEBPACK_IMPORTED_MODULE_7__["StoreLogisticService"]],
    })
], StoreLogisticPageModule);



/***/ }),

/***/ "./src/app/store-logistic/store-logistic.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/store-logistic/store-logistic.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_store_logistic {\n  width: 50px;\n  height: 50px;\n}\n\n.font_size {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.app-background {\n  --background: url(\"/assets/bg1.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUtbG9naXN0aWMvRTpcXHByb2plY3RcXHFyZGVlcy9zcmNcXGFwcFxcc3RvcmUtbG9naXN0aWNcXHN0b3JlLWxvZ2lzdGljLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3RvcmUtbG9naXN0aWMvc3RvcmUtbG9naXN0aWMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUFhLFlBQUE7QUNFZDs7QURBQTtFQUNDLGlCQUFBO0VBQW1CLGVBQUE7QUNJcEI7O0FERkE7RUFDRSxvQ0FBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUtbG9naXN0aWMvc3RvcmUtbG9naXN0aWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ19zdG9yZV9sb2dpc3RpY3tcclxuXHR3aWR0aDogNTBweDsgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5mb250X3NpemV7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYXBwLWJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnMS5qcGcnKTtcclxufSIsIi5pbWdfc3RvcmVfbG9naXN0aWMge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZm9udF9zaXplIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmFwcC1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMS5qcGdcIik7XG59Il19 */"

/***/ }),

/***/ "./src/app/store-logistic/store-logistic.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/store-logistic/store-logistic.page.ts ***!
  \*******************************************************/
/*! exports provided: StoreLogisticPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreLogisticPage", function() { return StoreLogisticPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_store_logistic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/store-logistic.service */ "./src/app/store-logistic/shared/store-logistic.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




// import { Http, Headers, RequestOptions } from '@angular/http';

let StoreLogisticPage = class StoreLogisticPage {
    constructor(route, router, http, storeLogisticService) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.storeLogisticService = storeLogisticService;
    }
    ionViewWillEnter() {
        this.loadData();
    }
    loadData() {
        this.storeLogisticService.getProductLogistic().subscribe((res) => {
            // console.log(res);
            this.product_logistics = res.data;
            // this.delivery_types = res.data[0].delivery_type.delivery_type_th;
            // this.delivery_statuss = res.delivery_status.delivery_status_th;
            // this.mobile_numbers = res.mobile_number;
            // console.log('ชื่อผู้ขนส่ง',this.firstnames);
            // console.log('สถานะขนส่ง',this.delivery_statuss);
            // console.log('ประเภทขนส่ง',this.delivery_types);
            // console.log('เบอร์โทร',this.firstna
            console.log(this.product_logistics);
        });
        // this.storeLogisticService.getProductLogistic().subscribe((data:any) => this.product_logistics = data.data); 
        // console.log(this.product_logistics);
    }
};
StoreLogisticPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _shared_store_logistic_service__WEBPACK_IMPORTED_MODULE_2__["StoreLogisticService"] }
];
StoreLogisticPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store-logistic',
        template: __webpack_require__(/*! raw-loader!./store-logistic.page.html */ "./node_modules/raw-loader/index.js!./src/app/store-logistic/store-logistic.page.html"),
        styles: [__webpack_require__(/*! ./store-logistic.page.scss */ "./src/app/store-logistic/store-logistic.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _shared_store_logistic_service__WEBPACK_IMPORTED_MODULE_2__["StoreLogisticService"]])
], StoreLogisticPage);



/***/ })

}]);
//# sourceMappingURL=store-logistic-store-logistic-module-es2015.js.map