(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./price/price.component */ "./src/app/cart/price/price.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/cart/list/list.component.ts");
/* harmony import */ var _shared_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/cart.service */ "./src/app/cart/shared/cart.service.ts");
/* harmony import */ var _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./qrmodal/qrmodal.component */ "./src/app/cart/qrmodal/qrmodal.component.ts");





// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'






var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"],
                _price_price_component__WEBPACK_IMPORTED_MODULE_7__["PriceComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
                _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_10__["QrmodalComponent"]
            ],
            entryComponents: [
                _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_10__["QrmodalComponent"]
            ],
            providers: [
                _shared_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"],
            ]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>รับชำระเงิน</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-price\r\n    [price]=\"price\">\r\n  </app-price>\r\n  <app-list \r\n    [cart]=\"cart\" \r\n    (removeFromCartChange)=\"removeFromCart($event)\">\r\n  </app-list>  \r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"newTransaction()\">ชำระเงินด้วย QR Code</ion-button>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer {\n  background: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxcRGV2XFxxcmRlZS9zcmNcXGFwcFxcY2FydFxcY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/cart.service */ "./src/app/cart/shared/cart.service.ts");
/* harmony import */ var _shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/transaction.service */ "./src/app/shared/services/transaction.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./qrmodal/qrmodal.component */ "./src/app/cart/qrmodal/qrmodal.component.ts");
/* harmony import */ var _shared_services_qr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/qr.service */ "./src/app/shared/services/qr.service.ts");









var CartPage = /** @class */ (function () {
    function CartPage(cartService, transactionService, toastService, alertService, qrService, modalController) {
        this.cartService = cartService;
        this.transactionService = transactionService;
        this.toastService = toastService;
        this.alertService = alertService;
        this.qrService = qrService;
        this.modalController = modalController;
        this.price = 0;
    }
    CartPage.prototype.ionViewWillEnter = function () {
        this.getCart();
    };
    CartPage.prototype.newTransaction = function () {
        var _this = this;
        this.alertService.showAlert({
            header: 'คุณต้องการชำระเงินด้วย QR Code ใช่หรือไม่',
            sub_header: '',
            message: '',
            buttons: [
                {
                    text: 'ยกเลิก',
                    role: 'cancel'
                },
                {
                    text: 'ตกลง',
                    handler: function () {
                        _this.qrService.generateQRCode().then(function (success) {
                            this.QRModal(success.file);
                        });
                        // this.transactionService.newTransaction(this.cart, this.price).subscribe(trn => {
                        //   this.qrService.generatePromptPayQR(trn.data).subscribe(qr => {
                        //     this.QRModal(qr);
                        //   });              
                        // });
                    }
                }
            ]
        });
    };
    CartPage.prototype.getCart = function () {
        var _this = this;
        this.cartService.getCart().subscribe(function (data) { return _this.cart = data; });
        this.price = this.cartService.getPrice();
    };
    CartPage.prototype.removeFromCart = function (product) {
        this.cartService.removeProduct(product);
        this.toastService.showToast("\u0E25\u0E1A " + product.product_th, 'bottom');
        this.getCart();
    };
    CartPage.prototype.QRModal = function (response) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_7__["QrmodalComponent"],
                            componentProps: {
                                'transaction': response.data
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _shared_services_qr_service__WEBPACK_IMPORTED_MODULE_8__["QrService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]])
    ], CartPage);
    return CartPage;
}());



/***/ }),

/***/ "./src/app/cart/list/list.component.html":
/*!***********************************************!*\
  !*** ./src/app/cart/list/list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list *ngIf=\"cart?.length > 0\">\r\n  <ion-list-header>\r\n    <ion-label>ตะกร้าสินค้า</ion-label>\r\n  </ion-list-header>\r\n\r\n  <ng-container *ngFor=\"let product of cart\">\r\n    <ion-item *ngIf=\"product.qty != 0\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"\">\r\n      </ion-avatar>\r\n      {{ product.product_th }}\r\n      <ion-badge color=\"primary\" slot=\"end\" *ngIf=\"product.qty > 0\">{{ product.qty }}</ion-badge>\r\n      <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" *ngIf=\"product.qty > 0\" (click)=\"removeFromCart(product)\">\r\n        <ion-icon slot=\"icon-only\" name=\"close\" *ngIf=\"product.qty == 1\"></ion-icon>\r\n        <ion-icon slot=\"icon-only\" name=\"remove\" *ngIf=\"product.qty > 1\"></ion-icon>\r\n      </ion-button>\r\n      \r\n    </ion-item>\r\n  </ng-container>\r\n  \r\n</ion-list>"

/***/ }),

/***/ "./src/app/cart/list/list.component.scss":
/*!***********************************************!*\
  !*** ./src/app/cart/list/list.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.removeFromCartChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
    }
    ListComponent.prototype.ngOnInit = function () {
        // console.log(this.cart);
    };
    ListComponent.prototype.removeFromCart = function (product) {
        this.removeFromCartChange.emit(product);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "cart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "removeFromCartChange", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/cart/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/cart/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/cart/price/price.component.html":
/*!*************************************************!*\
  !*** ./src/app/cart/price/price.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item-divider>\r\n  <div slot=\"start\">\r\n    <h3>ราคารวม</h3>\r\n  </div>\r\n  <div slot=\"end\">\r\n    <h2>{{ price | number }} ฿</h2>\r\n  </div>\r\n</ion-item-divider>"

/***/ }),

/***/ "./src/app/cart/price/price.component.scss":
/*!*************************************************!*\
  !*** ./src/app/cart/price/price.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-divider {\n  --padding-top: 10px;\n  --padding-bottom: 10px; }\n\nion-badge {\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --padding-start: 30px;\n  --padding-end: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9wcmljZS9DOlxcRGV2XFxxcmRlZS9zcmNcXGFwcFxcY2FydFxccHJpY2VcXHByaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWM7RUFDZCxzQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtQkFBYztFQUNkLHNCQUFpQjtFQUNqQixxQkFBZ0I7RUFDaEIsbUJBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnQvcHJpY2UvcHJpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1kaXZpZGVyIHtcclxuICAtLXBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1iYWRnZSB7XHJcbiAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMzBweDtcclxuICAtLXBhZGRpbmctZW5kOiAzMHB4O1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PriceComponent = /** @class */ (function () {
    function PriceComponent() {
    }
    PriceComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('price'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PriceComponent.prototype, "price", void 0);
    PriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-price',
            template: __webpack_require__(/*! ./price.component.html */ "./src/app/cart/price/price.component.html"),
            styles: [__webpack_require__(/*! ./price.component.scss */ "./src/app/cart/price/price.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PriceComponent);
    return PriceComponent;
}());



/***/ }),

/***/ "./src/app/cart/qrmodal/qrmodal.component.html":
/*!*****************************************************!*\
  !*** ./src/app/cart/qrmodal/qrmodal.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ชำระเงินด้วย QR</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <img src=\"{{qrcode}}\">\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" color=\"primary\">เสร็จสิ้น</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button expand=\"full\" color=\"danger\" (click)=\"closeModal()\">ยกเลิก</ion-button>\n    </ion-col>\n  </ion-row>  \n</ion-footer>"

/***/ }),

/***/ "./src/app/cart/qrmodal/qrmodal.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/cart/qrmodal/qrmodal.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvcXJtb2RhbC9xcm1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var QrmodalComponent = /** @class */ (function () {
    function QrmodalComponent(modalController) {
        this.modalController = modalController;
    }
    QrmodalComponent.prototype.ionViewWillEnter = function () {
        console.log(this.testQR);
        this.qrcode = this.testQR;
    };
    QrmodalComponent.prototype.closeModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QrmodalComponent.prototype, "testQR", void 0);
    QrmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qrmodal',
            template: __webpack_require__(/*! ./qrmodal.component.html */ "./src/app/cart/qrmodal/qrmodal.component.html"),
            styles: [__webpack_require__(/*! ./qrmodal.component.scss */ "./src/app/cart/qrmodal/qrmodal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], QrmodalComponent);
    return QrmodalComponent;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map