(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-orders-store-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/store-orders/product-order/product-order.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store-orders/product-order/product-order.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>ออเดอร์สินค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n<div class=\"ion-text-center backgrounds height\">\n    <p> <b>รายการสินค้าที่ต้องจัดส่ง</b></p>\n</div>\n\n<ion-content class=\"app-background\">\n\t<ion-card style=\"background:#FFFFFF;\">\n       \n\t\t<ion-grid>\n\t\t\t  <ion-row class=\"ion-justify-content-between\" style=\"background:#FFDAB9\">\n\t\t\t  \t <ion-col size=\"4\">\n\t\t\t      <b style=\"font-size: 14px;\">\n\t\t\t       รหัสสินค้า\n\t\t\t      </b>\n\t\t\t    </ion-col>\n\t\t\t    <ion-col size=\"5\">\n\t\t\t      <b style=\"font-size: 14px;\">\n\t\t\t       ชื่อสินค้า\n\t\t\t      </b>\n\t\t\t    </ion-col>\n\t\t\t    <ion-col size=\"3\">\n\t\t\t      <b style=\"font-size: 14px;\">\n\t\t\t       จำนวน\n\t\t\t      </b>\n\t\t\t    </ion-col>\n\t\t\t  </ion-row>\n\t\t\t</ion-grid>\n\t    <div *ngFor=\"let product_order of product_orders\">\n\t    \t  <!-- <b slot=\"start\">{{ product_order.product_th }}</b><b slot=\"end\" >{{ product_order.amount }}</b> -->\n\t\t\t<ion-grid>\n\t\t\t  <ion-row class=\"ion-justify-content-between\">\n\t\t\t  \t <ion-col size=\"4\">\n\t\t\t      <div>\n\t\t\t      {{ product_order.code_product }}\n\t\t\t      </div>\n\t\t\t    </ion-col>\n\t\t\t    <ion-col size=\"5\">\n\t\t\t      <div>\n\t\t\t       {{ product_order.product_th }}\n\t\t\t      </div>\n\t\t\t    </ion-col>\n\t\t\t    <ion-col size=\"2\">\n\t\t\t    <div>\n\t\t\t      <ion-badge> \n\t\t\t      {{ product_order.amount }}\n\t\t\t      </ion-badge>\n\t\t\t    </div>\n\t\t\t    </ion-col>\n\t\t\t  </ion-row>\n\t\t\t</ion-grid>\n\t\t\t\t\n\t\t        <!-- <ion-list>\n\t\t\t\t  <ion-item>\n\t\t\t\t    <p>{{ product_order.product_th }}</p>\n\t\t\t\t    <button ion-button clear item-end>{{ product_order.amount }}</button>\n\t\t\t\t  </ion-item>\n\t\t\t\t</ion-list -->\n\t       \n\t    </div>\n  </ion-card>\n</ion-content>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/store-orders/store-orders.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store-orders/store-orders.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>ออเดอร์สินค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-button expand=\"full\" color=\"success\"  (click)=\"hide()\">\n    <ion-icon name=\"arrow-dropright\"></ion-icon>\n    &nbsp;เรียกคนส่งของ</ion-button>\n<!-- \n    <ion-button expand=\"full\" color=\"success\"  (click)=\"!hide()\">\n      <ion-icon name=\"arrow-down\"></ion-icon>\n      &nbsp;ออเดอร์สินค้า</ion-button> -->\n    \n<br>\n<div *ngIf=\"hideMe\" > \n  \n  <ion-row >\n    <ion-col size=\"12\" >\n      <ion-item *ngFor=\"let product_logistic of product_logistics\">\n        <img src=\"assets/images/map_logistic.png\" class=\"img_store_logistic\">\n        <p class=\"font_size\">\n        {{product_logistic.firstname}}\n        <br> \n        <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>\n        {{product_logistic.delivery_status.delivery_status_th}}<br>\n        {{product_logistic.delivery_type.delivery_type_th}} <br>\n        โทร: {{product_logistic.mobile_number}}<br>\n        </p>\n      </ion-item> \n    </ion-col> \n  </ion-row>\n\n</div>\n\n\n\n<ion-grid *ngIf=\"!hideMe\" >\n      <ion-row>\n        <ion-col size=\"12\" >\n           <ion-item-sliding *ngFor=\"let order of orders\">\n          <div expand=\"block\" >\n            <ion-item (click)=\"order_store_product(order.code_randoms)\">\n                 <img slot=\"start\" src=\"https://www.tmbfoundation.or.th/img/icon/shop/img-cart-empty@2x.png?1545205815\"class=\"img_store\" >\n                 <p style=\"font-weight: bold; font-size: 14px;\">\n                  คุณ{{order.firstname}}  {{order.lastname}} <br> \n                  {{ order.updated_at}}<br> \n                  รหัสส่งสินค้า {{ order.code_randoms}}\n                </p> \n                 <ion-icon ios=\"ios-arrow-dropright\" md=\"md-arrow-dropright\"></ion-icon>\n              </ion-item> \n              \n             <ion-item-options side=\"end\">\n              <ion-item-option color=\"light\">\n                <ion-button fill=\"clear\" size=\"large\" color=\"danger\" (click)=\"deleteOrder(order.id);\">\n                  <ion-icon name=\"close\"></ion-icon>\n                </ion-button>\n              </ion-item-option>\n            </ion-item-options>\n          </div>\n        </ion-item-sliding> \n          <br><br><br><br><br><br>\n        </ion-col> \n      </ion-row>\n  </ion-grid>  \n\n\n\n</ion-content>\n"

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
    ToastService.prototype.showLongToast = function (message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            position: position,
                            duration: 30000,
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

/***/ "./src/app/store-orders/product-order/product-order.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/store-orders/product-order/product-order.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  --background:  #FFFFFF; }\n\n.inputs {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -100px; }\n\n.backgrounds {\n  background: #FFFFFF; }\n\n.height {\n  height: 50px;\n  font-size: 16px; }\n\n.app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9zdG9yZS1vcmRlcnMvcHJvZHVjdC1vcmRlci9wcm9kdWN0LW9yZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQWEsRUFBQTs7QUFJZjtFQUNBLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUduQjtFQUNDLG1CQUFrQixFQUFBOztBQUVuQjtFQUNFLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsNERBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0b3JlLW9yZGVycy9wcm9kdWN0LW9yZGVyL3Byb2R1Y3Qtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xyXG4gIC0tYmFja2dyb3VuZDogICNGRkZGRkY7XHJcbiAgLy8gYm9yZGVyOjNweCBzb2xpZCAjMDBCRkZGO1xyXG59XHJcblxyXG4uaW5wdXRzIHtcclxud2lkdGg6IDIwMHB4O1xyXG5oZWlnaHQ6IDIwMHB4O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogNjAlO1xyXG5sZWZ0OiA1MCU7XHJcbm1hcmdpbi10b3A6IC0xMDBweDtcclxubWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuLy8gYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDEwcHggcmdiYSg1MCw1MCw1MCwuNCk7XHJcbn1cclxuLmJhY2tncm91bmRze1xyXG5cdGJhY2tncm91bmQ6I0ZGRkZGRjtcclxufVxyXG4uaGVpZ2h0e1xyXG5cdCBoZWlnaHQ6IDUwcHg7XHJcblx0IGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uYXBwLWJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnMS5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/store-orders/product-order/product-order.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/store-orders/product-order/product-order.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrderComponent", function() { return ProductOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/order.service */ "./src/app/store-orders/shared/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductOrderComponent = /** @class */ (function () {
    function ProductOrderComponent(orderService, route) {
        var _this = this;
        this.orderService = orderService;
        this.route = route;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            if (params && params.special) {
                _this.code_randoms = JSON.parse(params.special);
                console.log('code_randoms: ', _this.code_randoms);
            }
        });
    }
    ProductOrderComponent.prototype.ionViewWillEnter = function () {
        this.loadProduct();
    };
    ProductOrderComponent.prototype.loadProduct = function () {
        var _this = this;
        this.orderService.OrderStore(this.code_randoms).subscribe(function (data) {
            _this.product_orders = data.data;
            console.log('ออเดอร์', _this.product_orders);
        });
    };
    ProductOrderComponent.prototype.ngOnInit = function () { };
    ProductOrderComponent.ctorParameters = function () { return [
        { type: _shared_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    ProductOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-order',
            template: __webpack_require__(/*! raw-loader!./product-order.component.html */ "./node_modules/raw-loader/index.js!./src/app/store-orders/product-order/product-order.component.html"),
            styles: [__webpack_require__(/*! ./product-order.component.scss */ "./src/app/store-orders/product-order/product-order.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductOrderComponent);
    return ProductOrderComponent;
}());



/***/ }),

/***/ "./src/app/store-orders/shared/order.service.ts":
/*!******************************************************!*\
  !*** ./src/app/store-orders/shared/order.service.ts ***!
  \******************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.baseUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
    }
    OrderService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + "/orders/" + id);
    };
    OrderService.prototype.order = function () {
        // console.log(`${this.baseUrl}/order`);
        return this.http.get(this.baseUrl + "/order");
    };
    OrderService.prototype.getProductLogistic = function () {
        // console.log(`${this.baseUrl}/order`);
        //  return this.http.get<any>(`${this.baseUrl}/order`);
        return this.http.get(this.baseUrl + "/product_logistic");
    };
    OrderService.prototype.deleteOrder = function (id) {
        // console.log(`${this.baseUrl}/deleteorder/${id}`);
        return this.http.delete(this.baseUrl + "/delete_order/" + id);
    };
    OrderService.prototype.OrderStore = function (code_randoms) {
        // console.log(`${this.baseUrl}/order`);
        return this.http.get(this.baseUrl + "/order_store/" + code_randoms);
    };
    OrderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/store-orders/store-orders.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/store-orders/store-orders.module.ts ***!
  \*****************************************************/
/*! exports provided: StoreOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreOrdersPageModule", function() { return StoreOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/interceptors/httpclient.interceptor */ "./src/app/shared/interceptors/httpclient.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _product_order_product_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-order/product-order.component */ "./src/app/store-orders/product-order/product-order.component.ts");
/* harmony import */ var _store_orders_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store-orders.page */ "./src/app/store-orders/store-orders.page.ts");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/order.service */ "./src/app/store-orders/shared/order.service.ts");











var routes = [
    {
        path: '',
        component: _store_orders_page__WEBPACK_IMPORTED_MODULE_9__["StoreOrdersPage"]
    },
    {
        path: 'storeorder',
        component: _product_order_product_order_component__WEBPACK_IMPORTED_MODULE_8__["ProductOrderComponent"]
    },
    {
        path: 'storeorder/code_randoms',
        component: _product_order_product_order_component__WEBPACK_IMPORTED_MODULE_8__["ProductOrderComponent"]
    }
];
var StoreOrdersPageModule = /** @class */ (function () {
    function StoreOrdersPageModule() {
    }
    StoreOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _store_orders_page__WEBPACK_IMPORTED_MODULE_9__["StoreOrdersPage"],
                _product_order_product_order_component__WEBPACK_IMPORTED_MODULE_8__["ProductOrderComponent"]
            ],
            providers: [_shared_order_service__WEBPACK_IMPORTED_MODULE_10__["OrderService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _shared_interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_6__["HttpClientInterceptor"], multi: true }],
        })
    ], StoreOrdersPageModule);
    return StoreOrdersPageModule;
}());



/***/ }),

/***/ "./src/app/store-orders/store-orders.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/store-orders/store-orders.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_store {\n  width: 45px;\n  height: 45px; }\n\n.app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n.img_store_logistic {\n  width: 50px;\n  height: 50px; }\n\ninput#show, input#hide {\n  display: none; }\n\ndiv#content {\n  display: none; }\n\ninput#show:checked ~ div#content {\n  display: block; }\n\ninput#hide:checked ~ span#content {\n  display: none; }\n\n.app-background {\n  --background: url('/assets/bg1.jpg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9zdG9yZS1vcmRlcnMvc3RvcmUtb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQVc7RUFBRSxZQUFZLEVBQUE7O0FBRTFCO0VBQ0UsNERBQWEsRUFBQTs7QUFFZjtFQUNDLFdBQVc7RUFBRSxZQUFZLEVBQUE7O0FBRTFCO0VBQ0ksYUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQVksRUFBQTs7QUFFaEI7RUFDRSxjQUFhLEVBQUE7O0FBR2Y7RUFDSSxhQUFZLEVBQUE7O0FBRWhCO0VBQ0Msb0NBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0b3JlLW9yZGVycy9zdG9yZS1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ19zdG9yZXtcclxuXHR3aWR0aDogNDVweDsgaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi5hcHAtYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcxLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcbi5pbWdfc3RvcmVfbG9naXN0aWN7XHJcblx0d2lkdGg6IDUwcHg7IGhlaWdodDogNTBweDtcclxufVxyXG5pbnB1dCNzaG93LCBpbnB1dCNoaWRlIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuZGl2I2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbmlucHV0I3Nob3c6Y2hlY2tlZCB+IGRpdiNjb250ZW50IHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG5pbnB1dCNoaWRlOmNoZWNrZWQgfiBzcGFuI2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbi5hcHAtYmFja2dyb3VuZHtcclxuXHQtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJyk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/store-orders/store-orders.page.ts":
/*!***************************************************!*\
  !*** ./src/app/store-orders/store-orders.page.ts ***!
  \***************************************************/
/*! exports provided: StoreOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreOrdersPage", function() { return StoreOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/order.service */ "./src/app/store-orders/shared/order.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");








var StoreOrdersPage = /** @class */ (function () {
    function StoreOrdersPage(storeorderService, route, alertController, toastService, router, 
    // private storeLogisticService: StoreLogisticService,
    modalCtrl) {
        this.storeorderService = storeorderService;
        this.route = route;
        this.alertController = alertController;
        this.toastService = toastService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.hideMe = false;
        this.flag = false;
    }
    StoreOrdersPage.prototype.hide = function () {
        // this.hideMe = true;
        this.hideMe = !this.hideMe;
    };
    StoreOrdersPage.prototype.ionViewWillEnter = function () {
        this.loadOrder();
        this.storeLogistic();
    };
    StoreOrdersPage.prototype.cancelPopover = function (e) {
        this.flag = true;
    };
    StoreOrdersPage.prototype.loadOrder = function () {
        var _this = this;
        this.storeorderService.order().subscribe(function (data) {
            _this.orders = data.products;
            console.log('orders', _this.orders);
        });
    };
    StoreOrdersPage.prototype.storeLogistic = function () {
        var _this = this;
        this.storeorderService.getProductLogistic().subscribe(function (data) {
            _this.product_logistics = data.data;
            console.log(_this.product_logistics);
        });
    };
    StoreOrdersPage.prototype.deleteOrder = function (id) {
        this.presentAlertConfirmDelete(id);
    };
    StoreOrdersPage.prototype.presentAlertConfirmDelete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'คุณต้องการลบออเดอร์สินค้านี้หรือไม่',
                            buttons: [
                                {
                                    text: 'ยกเลิก',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }, {
                                    text: 'ตกลง',
                                    handler: function () {
                                        _this.storeorderService.deleteOrder(id).subscribe(function () {
                                            _this.toastService.showToast("\u0E25\u0E1A\u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27", 'top');
                                            _this.loadOrder();
                                        });
                                    }
                                }
                            ]
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
    StoreOrdersPage.prototype.order_store_product = function (code_randoms) {
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(code_randoms)
            }
        };
        this.router.navigate(['store-orders/storeorder/code_randoms'], navigationExtras);
        // console.log(code_randoms);
        console.log(navigationExtras);
    };
    StoreOrdersPage.ctorParameters = function () { return [
        { type: _shared_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    StoreOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-orders',
            template: __webpack_require__(/*! raw-loader!./store-orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/store-orders/store-orders.page.html"),
            styles: [__webpack_require__(/*! ./store-orders.page.scss */ "./src/app/store-orders/store-orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], StoreOrdersPage);
    return StoreOrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=store-orders-store-orders-module-es5.js.map