(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell-stats-sell-stats-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/sell-stats/sell-stats.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sell-stats/sell-stats.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>สรุปการขาย</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\"> \n\t <ion-card *ngFor=\"let sellstats of sellstatss\" style=\"background:#FFFFFF;\">\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"https://coffeeprincesurat.files.wordpress.com/2009/01/logo_final4.jpg?w=300&h=300\">\n    </ion-avatar>\n    <ion-label text-wrap>\n      <b>{{ sellstats.product_th}}</b><br>\n      ล่าสุด {{ sellstats.updated_at}}<br><br>\n      ขาย/บริการ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{{ sellstats.amount}}</b> ชั้น/ครั้ง\n    </ion-label>\n  </ion-item>\n</ion-card>\n   <ion-infinite-scroll threshold=\"10%\" (ionInfinite)=\"loadData($event.target)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  <!--  <ion-button (click)=\"toggleInfiniteScroll()\" expand=\"block\">\n    Toggle Infinite Scroll\n  </ion-button>\n  <ion-list></ion-list>\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\">\n  \n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sell_stats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sell-stats.page */ "./src/app/sell-stats/sell-stats.page.ts");
/* harmony import */ var _shared_sell_stats_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/sell-stats.service */ "./src/app/sell-stats/shared/sell-stats.service.ts");
/* harmony import */ var _shared_interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/interceptors/httpclient.interceptor */ "./src/app/shared/interceptors/httpclient.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");











var routes = [
    {
        path: '',
        component: _sell_stats_page__WEBPACK_IMPORTED_MODULE_6__["SellStatsPage"]
    }
];
var SellStatsPageModule = /** @class */ (function () {
    function SellStatsPageModule() {
    }
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
    return SellStatsPageModule;
}());



/***/ }),

/***/ "./src/app/sell-stats/sell-stats.page.scss":
/*!*************************************************!*\
  !*** ./src/app/sell-stats/sell-stats.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url(\"/assets/bg1.jpg\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsbC1zdGF0cy9FOlxccHJvamVjdFxccXJkZWVzL3NyY1xcYXBwXFxzZWxsLXN0YXRzXFxzZWxsLXN0YXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VsbC1zdGF0cy9zZWxsLXN0YXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDREQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZWxsLXN0YXRzL3NlbGwtc3RhdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iLCIuYXBwLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmcxLmpwZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_sell_stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/sell-stats.service */ "./src/app/sell-stats/shared/sell-stats.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");







var SellStatsPage = /** @class */ (function () {
    function SellStatsPage(sellstats, route, alertController, toastService, router) {
        this.sellstats = sellstats;
        this.route = route;
        this.alertController = alertController;
        this.toastService = toastService;
        this.router = router;
        this.page = 1;
    }
    SellStatsPage.prototype.ngOnInit = function () {
    };
    SellStatsPage.prototype.ionViewWillEnter = function () {
        this.loadsell();
    };
    SellStatsPage.prototype.loadsell = function () {
        var _this = this;
        this.sellstats.orders().subscribe(function (data) {
            _this.sellstatss = data.products;
            // this.page = 1;
            console.log(data);
            console.log(_this.sellstatss);
        });
    };
    SellStatsPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.sellstats.orders().subscribe(function (data) {
            _this.sellstatss = data.products;
            _this.page++;
            // this.sellstats.orders(this.page).subscribe(res => {
            if (Object.keys(data).length === 0 && data.constructor === Object) {
                infiniteScroll.disabled = true;
            }
            setTimeout(function () {
                _this.sellstatss = _this.sellstatss.concat(data.products);
                infiniteScroll.complete();
                if (_this.page >= data['last_page']) {
                    infiniteScroll.disabled = true;
                }
            }, 500);
        });
        // });
    };
    SellStatsPage.ctorParameters = function () { return [
        { type: _shared_sell_stats_service__WEBPACK_IMPORTED_MODULE_4__["SellStatsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
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
    return SellStatsPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var SellStatsService = /** @class */ (function () {
    function SellStatsService(http) {
        this.http = http;
        this.baseUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
    }
    SellStatsService.prototype.orders = function () {
        // console.log(`${this.baseUrl}/sell_statss`);
        // return this.http.get<any>(`${this.baseUrl}/sell_statss`);
        return this.http.get(this.baseUrl + "/sell_statss");
    };
    SellStatsService.prototype.orderss = function () {
        return this.http.get(this.baseUrl + "/sell_statss_order");
    };
    SellStatsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SellStatsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SellStatsService);
    return SellStatsService;
}());



/***/ })

}]);
//# sourceMappingURL=sell-stats-sell-stats-module-es5.js.map