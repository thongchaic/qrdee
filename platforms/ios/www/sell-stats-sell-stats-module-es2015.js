(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell-stats-sell-stats-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sell-stats/sell-stats.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sell-stats/sell-stats.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>สรุปการขาย</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n\t <ion-card *ngFor=\"let sellstats of sellstatss\" style=\"background:#FFFFFF;\">\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://coffeeprincesurat.files.wordpress.com/2009/01/logo_final4.jpg?w=300&h=300\">\n    </ion-avatar>\n    <ion-label text-wrap>\n      <b>{{ sellstats.product_th}}</b><br>\n      ล่าสุด {{ sellstats.updated_at}}<br><br>\n      ขาย/บริการ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{{ sellstats.amount}}</b> ชั้น/ครั้ง\n    </ion-label>\n  </ion-item>\n</ion-card>\n   <ion-infinite-scroll threshold=\"10%\" (ionInfinite)=\"loadData($event.target)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  <!--  <ion-button (click)=\"toggleInfiniteScroll()\" expand=\"block\">\n    Toggle Infinite Scroll\n  </ion-button>\n  <ion-list></ion-list>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\">\n\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sell-stats/sell-stats.module.ts":
/*!*************************************************!*\
  !*** ./src/app/sell-stats/sell-stats.module.ts ***!
  \*************************************************/
/*! exports provided: SellStatsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellStatsPageModule", function() { return SellStatsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sell_stats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sell-stats.page */ "./src/app/sell-stats/sell-stats.page.ts");
/* harmony import */ var _shared_sell_stats_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/sell-stats.service */ "./src/app/sell-stats/shared/sell-stats.service.ts");
/* harmony import */ var _shared_interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/interceptors/httpclient.interceptor */ "./src/app/shared/interceptors/httpclient.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");











const routes = [
    {
        path: '',
        component: _sell_stats_page__WEBPACK_IMPORTED_MODULE_6__["SellStatsPage"]
    }
];
let SellStatsPageModule = class SellStatsPageModule {
};
SellStatsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_sell_stats_page__WEBPACK_IMPORTED_MODULE_6__["SellStatsPage"]],
        providers: [_shared_sell_stats_service__WEBPACK_IMPORTED_MODULE_7__["SellStatsService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_8__["HttpClientInterceptor"], multi: true }],
    })
], SellStatsPageModule);



/***/ }),

/***/ "./src/app/sell-stats/sell-stats.page.scss":
/*!*************************************************!*\
  !*** ./src/app/sell-stats/sell-stats.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9zZWxsLXN0YXRzL3NlbGwtc3RhdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NlbGwtc3RhdHMvc2VsbC1zdGF0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnMS5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sell-stats/sell-stats.page.ts":
/*!***********************************************!*\
  !*** ./src/app/sell-stats/sell-stats.page.ts ***!
  \***********************************************/
/*! exports provided: SellStatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellStatsPage", function() { return SellStatsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_sell_stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/sell-stats.service */ "./src/app/sell-stats/shared/sell-stats.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");







let SellStatsPage = class SellStatsPage {
    constructor(sellstats, route, alertController, toastService, router) {
        this.sellstats = sellstats;
        this.route = route;
        this.alertController = alertController;
        this.toastService = toastService;
        this.router = router;
        this.page = 1;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loadsell();
    }
    loadsell() {
        this.sellstats.orders().subscribe((data) => {
            this.sellstatss = data.products;
            // this.page = 1;
            console.log(data);
            console.log(this.sellstatss);
        });
    }
    loadData(infiniteScroll) {
        this.sellstats.orders().subscribe((data) => {
            this.sellstatss = data.products;
            this.page++;
            // this.sellstats.orders(this.page).subscribe(res => {
            if (Object.keys(data).length === 0 && data.constructor === Object) {
                infiniteScroll.disabled = true;
            }
            setTimeout(() => {
                this.sellstatss = this.sellstatss.concat(data.products);
                infiniteScroll.complete();
                if (this.page >= data['last_page']) {
                    infiniteScroll.disabled = true;
                }
            }, 500);
        });
        // });
    }
};
SellStatsPage.ctorParameters = () => [
    { type: _shared_sell_stats_service__WEBPACK_IMPORTED_MODULE_4__["SellStatsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SellStatsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sell-stats',
        template: __webpack_require__(/*! raw-loader!./sell-stats.page.html */ "./node_modules/raw-loader/index.js!./src/app/sell-stats/sell-stats.page.html"),
        styles: [__webpack_require__(/*! ./sell-stats.page.scss */ "./src/app/sell-stats/sell-stats.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_sell_stats_service__WEBPACK_IMPORTED_MODULE_4__["SellStatsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SellStatsPage);



/***/ }),

/***/ "./src/app/sell-stats/shared/sell-stats.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/sell-stats/shared/sell-stats.service.ts ***!
  \*********************************************************/
/*! exports provided: SellStatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellStatsService", function() { return SellStatsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let SellStatsService = class SellStatsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}`;
    }
    orders() {
        // console.log(`${this.baseUrl}/sell_statss`);
        // return this.http.get<any>(`${this.baseUrl}/sell_statss`);
        return this.http.get(`https://qrdee.co/api/v2/sell_stats`);
    }
    orderss() {
        return this.http.get(`https://qrdee.co/api/v2/sell_statss_order`);
    }
};
SellStatsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SellStatsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SellStatsService);



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
//# sourceMappingURL=sell-stats-sell-stats-module-es2015.js.map