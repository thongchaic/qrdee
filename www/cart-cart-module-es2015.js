(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{tab_titles[tab]}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"tab == 0\">\n\n  <ion-list>\n\n    <ion-list-header >\n      <ion-label>คำสั่งซื้อ : ค่าส่ง {{store.delivery_price}} ฿ (ขั้นต่ำ {{store.free_delivery_price}} ส่งฟรี)</ion-label>\n    </ion-list-header>\n\n\n    <ion-item-sliding *ngFor=\"let order of orders\">\n\n      <ion-item>\n\n        <ion-label>\n          <h5>\n            <ion-text color=\"dark\">{{order.member.firstname}} </ion-text>\n            <ion-badge color=\"danger\"> {{ order.price >= store.free_delivery_price? order.price : order.price+store.delivery_price }} </ion-badge> <ion-text color=\"dark\"> บาท </ion-text>\n          </h5>\n        </ion-label>\n        <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"deleteOrder(order.member.id);\">\n          <ion-icon name=\"ios-trash\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" size=\"small\" color=\"primary\" slot=\"end\" (click)=\"makeClall(order.member.mobile_number);\">\n          <ion-icon name=\"ios-call\"></ion-icon>\n        </ion-button>\n        <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"delivery(order);\">\n          <ion-icon name=\"md-bicycle\"></ion-icon>\n        </ion-button>\n\n      </ion-item>\n\n      <ion-item *ngFor=\"let item of order.orders\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n            <img *ngIf=\"item.product.thumbnail\" [src]=\"'https://qrdee.co/app/'+item.product.thumbnail\">\n            <img *ngIf=\"!item.product.thumbnail\" src=\"/assets/noimg.png\">\n        </ion-avatar>\n        <ion-label>\n          <h5><ion-text color=\"dark\">{{item.product.product_th}} : {{item.product.price}} บาท x {{ item.qty }} ชิ้น</ion-text></h5>\n        </ion-label>\n      </ion-item>\n\n    </ion-item-sliding>\n\n\n  </ion-list>\n</ion-content>\n\n<ion-content *ngIf=\"tab == 1\">\n  <!-- <ion-searchbar placeholder=\"ชื่อ/รหัสสินค้า\" color=\"primary\" animated debounce=\"500\" (ionChange)=\"search($event.target.value)\">\n  </ion-searchbar> -->\n  <ion-item-divider style=\"background:#f2f2f2;\">\n    <div slot=\"start\">\n      <h3>จำนวนเงิน</h3>\n    </div>\n    <div slot=\"end\">\n      <ion-input style=\"text-align: right;font-size: 20px\" type=\"number\" [(ngModel)]=\"price\" (keyup)=\"onKeyUp($event)\" clearInput></ion-input>\n    </div>\n  </ion-item-divider>\n\n  <app-list\n    [cart]=\"cart\"\n    (removeFromCartChange)=\"removeFromCart($event)\"\n    (addItemChange)=\"addItem($event)\">\n  </app-list>\n\n  <ion-list>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-button  slot=\"end\" (click)=\"newTransaction();\" color=\"primary\">\n          <ion-icon  name=\"md-qr-scanner\"></ion-icon>\n          สร้าง QR\n        </ion-button>\n      </ion-item>\n      <!-- <ion-item-options side=\"end\">\n        <ion-item-option onClick=\"unread(item)\">Unread</ion-item-option>\n      </ion-item-options> -->\n    </ion-item-sliding>\n\n    <ion-list-header >\n      <ion-label>รายการสินค้า</ion-label>\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor=\"let product of products\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"product.thumbnail\" [src]=\"'https://qrdee.co/app/'+product.thumbnail\">\n          <img *ngIf=\"!product.thumbnail\" src=\"/assets/noimg.png\">\n        </ion-avatar>\n        <ion-label>\n          <h5><ion-text color=\"dark\">{{ product.product_th }} </ion-text> <ion-badge color=\"danger\"> {{ product.price }} </ion-badge> <ion-text color=\"dark\">  บาท </ion-text> </h5>\n        </ion-label>\n\n        <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"addToCart(product);\">\n          <ion-icon slot=\"icon-only\" name=\"basket\"></ion-icon>\n        </ion-button>\n\n      </ion-item>\n    </ion-item-sliding>\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer style=\"background:#FFFFFF;\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col no-padding>\n        <center>\n          <button ion-button  block clear color=\"primary-alt\" (click)=\"changeTab(0)\">\n            <ion-icon size=\"large\" name=\"ios-cart\"></ion-icon><br>\n            <ion-label>คำสั่งซื้อ</ion-label>\n          </button>\n        </center>\n      </ion-col>\n      <ion-col no-padding>\n        <center>\n          <button ion-button block clear color=\"primary-alt\" (click)=\"changeTab(1)\">\n            <ion-icon size=\"large\" name=\"ios-cash\"></ion-icon><br>\n              <ion-label>รับชำระเงินด้วย QR</ion-label>\n          </button>\n        </center>\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-footer>\n\n\n<!-- <ion-footer style=\"background:#FFFFFF;\">\n  <ion-toolbar>\n          <ion-tabs>\n              <ion-tab-bar slot=\"bottom\">\n                <ion-tab-button color=\"primary\" (click)=\"changeTab(0)\" >\n                    <ion-icon name=\"ios-cart\"></ion-icon>\n                    <ion-label>คำสั่งซื้อสินค้า</ion-label>\n                </ion-tab-button>\n                <ion-tab-button color=\"primary\" (click)=\"changeTab(1)\" >\n                    <ion-icon name=\"ios-cash\"></ion-icon>\n                    <ion-label>รับชำระเงินด้วย QR</ion-label>\n                </ion-tab-button>\n              </ion-tab-bar>\n            </ion-tabs>\n   </ion-toolbar>\n</ion-footer> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/dvrmodal/dvrmodal.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/dvrmodal/dvrmodal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-title>คำสั่งซื้อ</ion-title>\n    <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"forceDissmiss(0);\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>กลับ\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-label position=\"floating\">ตำแหน่งผู้รับ</ion-label>\n  <div #map id=\"map\" style=\"height:250px;\"></div>\n\n  <ion-card style=\"background:#FFFFFF;\">\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col size=\"3\">\n          ผู้รับ\n        </ion-col>\n        <ion-col size=\"9\">\n          {{order.member.firstname}} {{order.member.lastname}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\">\n          เบอร์โทร์\n        </ion-col>\n        <ion-col size=\"9\">\n          {{order.member.mobile_number}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\">\n          สินค้า\n        </ion-col>\n        <ion-col size=\"9\">\n          <h2 *ngFor=\"let ord of order.orders\"> {{ ord.product.product_th }} {{ord.price}} บาท x {{ord.qty}} ชิ้น </h2>\n          <p *ngIf=\"order.orders.length>0\">{{order.orders[0].notes}}</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\">\n          ค่าขนส่ง\n        </ion-col>\n        <ion-col size=\"9\">\n          {{ order.price >= store.free_delivery_price? 0 : store.delivery_price}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\">\n          รวม\n        </ion-col>\n        <ion-col size=\"3\">\n          {{ order.price >= store.free_delivery_price? order.price : order.price+store.delivery_price }}\n        </ion-col>\n        <ion-col size=\"6\">\n            <ion-button shape=\"round\" size=\"small\" color=\"danger\" (click)=\"openQR( order.price >= store.free_delivery_price? order.price : order.price+store.delivery_price )\">รับชำระเงิน</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <br>\n      <ion-row>\n\n        <ion-col size=\"6\">\n          <ion-button expand=\"full\"  color=\"primary\"  (click)=\"forceDissmiss(1)\">ส่งสินค้าสำเร็จ</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button expand=\"full\"  color=\"primary\"   (click)=\"callRider()\">เรียกคนส่งสินค้า</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/list/list.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/list/list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list *ngIf=\"cart?.length > 0\">\n  <ion-list-header>\n    <ion-label>ตะกร้าสินค้า</ion-label>\n  </ion-list-header>\n\n  <ng-container *ngFor=\"let product of cart\">\n    <ion-item *ngIf=\"product.qty != 0\">\n      <ion-avatar slot=\"start\">\n        <img *ngIf=\"product.thumbnail\" [src]=\"'https://qrdee.co/app/'+product.thumbnail\">\n        <img *ngIf=\"!product.thumbnail\" src=\"/assets/noimg.png\">\n      </ion-avatar>\n      {{ product.product_th }}&nbsp;\n      <!-- <ion-badge color=\"danger\" *ngIf=\"product.instock == 0\">หมดสต๊อค</ion-badge> -->\n      <ion-badge color=\"primary\" slot=\"end\">{{ product.qty }}</ion-badge>\n      <ion-button slot=\"end\" size=\"large\" fill=\"clear\" color=\"success\" [disabled]=\"product.instock == 0\" (click)=\"addItem(product)\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\" size=\"large\" fill=\"clear\" color=\"danger\" *ngIf=\"product.qty > 0\" (click)=\"removeFromCart(product)\">\n        <ion-icon name=\"close\" *ngIf=\"product.qty == 1\"></ion-icon>\n        <ion-icon name=\"remove\" *ngIf=\"product.qty > 1\"></ion-icon>\n      </ion-button>\n\n    </ion-item>\n  </ng-container>\n\n</ion-list>\n"

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->\n    <ion-title>ชำระเงินด้วยQR</ion-title>\n    <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"forceDissmiss(0);\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>Back\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n\n  <ion-card style=\"background:#FFFFFF;\">\n    <qrcode [qrdata]=\"prompt_payload\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n    <ion-card-content>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        ราคารวม\n        <ion-badge color=\"danger\">\n        <h2>{{ price | number }}</h2>\n      </ion-badge> บาท\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button expand=\"full\" shape=\"round\" color=\"success\" (click)=\"forceDissmiss(1)\">สำเร็จ</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button expand=\"full\" shape=\"round\" color=\"primary\"  (click)=\"forceDissmiss(0)\">ยกเลิก</ion-button>\n      </ion-col>\n    </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n</ion-footer>\n"

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
/* harmony import */ var _dvrmodal_dvrmodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dvrmodal/dvrmodal.component */ "./src/app/cart/dvrmodal/dvrmodal.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../products/shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _shared_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/cart.service */ "./src/app/cart/shared/cart.service.ts");
/* harmony import */ var _price_price_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./price/price.component */ "./src/app/cart/price/price.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list/list.component */ "./src/app/cart/list/list.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add/add.component */ "./src/app/cart/add/add.component.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/badge/ngx */ "./node_modules/@ionic-native/badge/ngx/index.js");



















const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_9__["CartPage"]
    },
    {
        path: 'qrmodal',
        component: _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_5__["QrmodalComponent"]
    },
    {
        path: 'dvrmodal',
        component: _dvrmodal_dvrmodal_component__WEBPACK_IMPORTED_MODULE_6__["DvrmodalComponent"]
    }
];
let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_16__["QRCodeModule"],
            // QRScanner,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _cart_page__WEBPACK_IMPORTED_MODULE_9__["CartPage"],
            _price_price_component__WEBPACK_IMPORTED_MODULE_12__["PriceComponent"],
            _list_list_component__WEBPACK_IMPORTED_MODULE_13__["ListComponent"],
            _add_add_component__WEBPACK_IMPORTED_MODULE_14__["AddComponent"],
            _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_5__["QrmodalComponent"],
            _dvrmodal_dvrmodal_component__WEBPACK_IMPORTED_MODULE_6__["DvrmodalComponent"]
        ],
        entryComponents: [
            _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_5__["QrmodalComponent"]
        ],
        providers: [
            _shared_cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"],
            _products_shared_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_15__["BarcodeScanner"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__["CallNumber"],
            _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_18__["Badge"]
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

module.exports = ".ios ion-footer .toolbar:last-child {\n  padding-bottom: calc(constant(safe-area-inset-bottom) + 4px);\n  padding-bottom: calc(env(safe-area-inset-bottom) + 4px);\n  min-height: calc(44px + constant(safe-area-inset-bottom));\n  min-height: calc(44px + env(safe-area-inset-bottom)); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQTREO0VBQzVELHVEQUF1RDtFQUN2RCx5REFBeUQ7RUFDekQsb0RBQW9ELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvcyBpb24tZm9vdGVyIC50b29sYmFyOmxhc3QtY2hpbGQge1xyXG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgNHB4KTtcclxuICBwYWRkaW5nLWJvdHRvbTogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyA0cHgpO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoNDRweCArIGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pKTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDQ0cHggKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _dvrmodal_dvrmodal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dvrmodal/dvrmodal.component */ "./src/app/cart/dvrmodal/dvrmodal.component.ts");
/* harmony import */ var _shared_services_qr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/qr.service */ "./src/app/shared/services/qr.service.ts");
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../products/shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/badge/ngx */ "./node_modules/@ionic-native/badge/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
















// import { CallNumber } from '@ionic-native/call-number';

//import { CallNumber } from '@ionic-native/call-number';




let CartPage = class CartPage {
    constructor(cartService, transactionService, productService, toastService, alertService, qrService, modalController, http, router, route, geolocation, barcodeScanner, builder, _loading, callNumber, badge, event) {
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
        this._loading = _loading;
        this.callNumber = callNumber;
        this.badge = badge;
        this.event = event;
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
        this.event.subscribe('store:orders', trn => {
            this.getOrders();
        });
    }
    ionViewWillEnter() {
        // this.getOrders();
        // this.getProducts();
    }
    ionViewDidEnter() {
        this.store = JSON.parse(localStorage.getItem('store'));
        this.getOrders();
        this.getProducts();
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
    changeTab(tab) {
        this.tab = tab;
        if (this.tab == 0) {
            this.getOrders();
        }
        else {
            this.getProducts();
        }
    }
    getOrders() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this._loading.create();
            yield loading.present();
            this.cartService.getOrders(this.store.id).subscribe((data) => {
                this.orders = data;
                console.log(this.orders);
                loading.dismiss();
                this.badge.clear();
            }, err => {
                loading.dismiss();
            });
        });
    }
    getProducts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this._loading.create();
            yield loading.present();
            this.cartService.getProducts(this.store.id).subscribe((data) => {
                this.products = data;
                loading.dismiss();
            }, err => {
                loading.dismiss();
            });
        });
    }
    addToCart(product) {
        this.cartService.addToCart(product);
        this.getCart();
    }
    getCart() {
        this.cartService.getCart().subscribe(data => this.cart = data);
        this.price = this.cartService.getPrice();
        console.log(this.price);
    }
    addItem(product) {
        this.cartService.addItem(product);
        this.getCart();
    }
    removeFromCart(product) {
        this.cartService.removeProduct(product);
        this.getCart();
    }
    onKeyUp(event) {
        this.cartService.clearCart();
        this.getCart();
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
    QRModal(price, promptpay, prompt_payload) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_7__["QrmodalComponent"],
                componentProps: {
                    'price': price,
                    'promptpay': promptpay,
                    'prompt_payload': prompt_payload
                }
            });
            modal.onDidDismiss()
                .then(status => {
                if (status.data == 1) {
                    this.transactionService.insertTransaction(this.products, this.prompt_payload, this.price, this.store.id).subscribe((data) => {
                        this.cartService.clearCart();
                        this.getCart();
                    });
                }
                else {
                    this.getCart();
                }
            });
            return yield modal.present();
        });
    }
    delivery(order) {
        this.dvrModal(order);
    }
    dvrModal(order) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _dvrmodal_dvrmodal_component__WEBPACK_IMPORTED_MODULE_8__["DvrmodalComponent"],
                componentProps: {
                    'order': order
                }
            });
            modal.onDidDismiss().then(status => {
                if (status.data == 1) {
                    this.cartService.completeOrder(this.store.id, order.member_id).subscribe((data) => {
                        this.getOrders();
                    });
                }
                if (status.data == 2) {
                    console.log("Find riders.....");
                    setTimeout(() => {
                        this.cartService.getOrders(this.store.id).subscribe((data) => {
                            console.log(data);
                            data.forEach(e => {
                                e.orders.forEach(oo => {
                                    if (oo.requested_at && !oo.accepted_at) {
                                        console.log("incompleted !! ", oo.id);
                                        this.cancelRequest(oo.id);
                                        // alert(`สินค้า ${oo.product.product_th} ไม่มีผู้รับส่งสินค้า ลองใหม่อีกครั้ง `);//
                                        this.toastService.showLongToast(`${oo.product.product_th} ไม่มีการตอบรับส่งสินค้า`, 'top');
                                    }
                                });
                            });
                        }, err => {
                        });
                    }, 240000); //
                }
            });
            return yield modal.present();
        });
    }
    cancelRequest(id) {
        this.cartService.cancelRequest(id).subscribe((data) => {
            console.log(data);
        });
    }
    newTransaction() {
        this.transactionService.genQR(this.store.promptpay, this.price).subscribe((data) => {
            this.prompt_payload = data.prompt_payload;
            this.QRModal(data.price, data.promptpay, data.prompt_payload);
        });
        // this.alertService.showAlert({
        //   header: `สร้าง QR หมายเลข ${this.store.promptpay} จำนวน ${this.price} บาท?`,
        //   sub_header: '',
        //   message: '',
        //   buttons: [
        //     {
        //       text: 'ยกเลิก',
        //        handler: () => {
        //           this.cartService.clearCart();
        //           this.getCart();
        //         },
        //       role: 'cancel',
        //     },
        //     {
        //       text: 'ตกลง',
        //       handler: () => {
        //
        //         this.transactionService.genQR(this.store.promptpay, this.price).subscribe((data:any)=>{
        //           this.prompt_payload = data.prompt_payload;
        //           this.QRModal(data.price, data.promptpay, data.prompt_payload);
        //         });
        //
        //       }
        //     }
        //   ]
        // });
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
    { type: _products_shared_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _shared_services_qr_service__WEBPACK_IMPORTED_MODULE_9__["QrService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__["Geolocation"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__["BarcodeScanner"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_15__["CallNumber"] },
    { type: _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_16__["Badge"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"] }
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
        _products_shared_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _shared_services_qr_service__WEBPACK_IMPORTED_MODULE_9__["QrService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__["Geolocation"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_14__["BarcodeScanner"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_15__["CallNumber"],
        _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_16__["Badge"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"]])
], CartPage);



/***/ }),

/***/ "./src/app/cart/dvrmodal/dvrmodal.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/cart/dvrmodal/dvrmodal.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvZHZybW9kYWwvZHZybW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/cart/dvrmodal/dvrmodal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/cart/dvrmodal/dvrmodal.component.ts ***!
  \*****************************************************/
/*! exports provided: DvrmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DvrmodalComponent", function() { return DvrmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../qrmodal/qrmodal.component */ "./src/app/cart/qrmodal/qrmodal.component.ts");
/* harmony import */ var src_app_shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/transaction.service */ "./src/app/shared/services/transaction.service.ts");
/* harmony import */ var _shared_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/cart.service */ "./src/app/cart/shared/cart.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");











let DvrmodalComponent = class DvrmodalComponent {
    constructor(router, alertService, geolocation, modalController, cartService, transactionService, route, _toast) {
        this.router = router;
        this.alertService = alertService;
        this.geolocation = geolocation;
        this.modalController = modalController;
        this.cartService = cartService;
        this.transactionService = transactionService;
        this.route = route;
        this._toast = _toast;
        this.latitude = 14.8718084;
        this.longitude = 103.4962797;
        this.mylatitude = 14.8718084;
        this.mylongitude = 103.4962797;
        this.store = JSON.parse(localStorage.getItem('store'));
    }
    openQR(price) {
        console.log(this.order);
        this.transactionService.genQR(this.store.promptpay, price).subscribe((data) => {
            this.payload = data;
            this.QRModal(data.price, data.promptpay, data.prompt_payload);
        });
    }
    QRModal(price, promptpay, prompt_payload) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _qrmodal_qrmodal_component__WEBPACK_IMPORTED_MODULE_6__["QrmodalComponent"],
                componentProps: {
                    'price': price,
                    'promptpay': promptpay,
                    'prompt_payload': prompt_payload
                }
            });
            modal.onDidDismiss()
                .then(status => {
                if (status.data == 1) {
                    //ok
                    //alert("ToTRN");
                    this.transactionService.insertTransaction([], this.payload.prompt_payload, this.payload.price, this.store.id).subscribe((data) => {
                        //alert(JSON.stringify(data));
                    });
                }
                else {
                }
            });
            return yield modal.present();
        });
    }
    ngAfterViewInit() {
    }
    ionViewDidEnter() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.mylatitude = resp.coords.latitude;
            this.mylongitude = resp.coords.longitude;
        });
        try {
            if (this.order.length > 0) {
                this.latitude = this.order[0].latitude;
                this.longitude = this.order[0].longitude;
            }
            else {
                this.latitude = this.order.member.latitude;
                this.longitude = this.order.member.longitude;
            }
        }
        catch (e) {
            this.latitude = this.order.member.latitude;
            this.longitude = this.order.member.longitude;
        }
        this.loadMap();
    }
    loadMap() {
        let latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        marker.addListener('click', function () {
            //alert("clicked");
            window.open(`geo://${this.latitude},${this.longitude}`, `_system`);
        });
        // let mymarker = new google.maps.Marker({
        //   map: this.map,
        //   animation: google.maps.Animation.DROP,
        //   position: new google.maps.LatLng(this.mylatitude, this.mylongitude),
        //   icon: {
        //     url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        //   }
        // });
    }
    callRider() {
        this.cartService.callRider(this.store.id, this.order.member_id).subscribe((data) => {
            console.log(data);
            this._toast.showToast("เรียกคนส่งสินค้าแล้ว", 'top');
            this.closeModal(2);
        }, err => {
        });
    }
    forceDissmiss(val) {
        this.closeModal(val);
    }
    closeModal(status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modalController.dismiss(status);
        });
    }
};
DvrmodalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _shared_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] },
    { type: src_app_shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_7__["TransactionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DvrmodalComponent.prototype, "mapElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DvrmodalComponent.prototype, "order", void 0);
DvrmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dvrmodal',
        template: __webpack_require__(/*! raw-loader!./dvrmodal.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/dvrmodal/dvrmodal.component.html"),
        styles: [__webpack_require__(/*! ./dvrmodal.component.scss */ "./src/app/cart/dvrmodal/dvrmodal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _shared_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"],
        src_app_shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_7__["TransactionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]])
], DvrmodalComponent);



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




let QrmodalComponent = class QrmodalComponent {
    constructor(transactionService, modalController) {
        this.transactionService = transactionService;
        this.modalController = modalController;
        //this.store = JSON.parse(localStorage.getItem('store'));
    }
    ionViewWillEnter() {
    }
    ngAfterViewInit() {
    }
    forceDissmiss(status) {
        this.closeModal(status);
    }
    closeModal(status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modalController.dismiss(status);
        });
    }
};
QrmodalComponent.ctorParameters = () => [
    { type: src_app_shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QrmodalComponent.prototype, "prompt_payload", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QrmodalComponent.prototype, "promptpay", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], QrmodalComponent.prototype, "price", void 0);
QrmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qrmodal',
        template: __webpack_require__(/*! raw-loader!./qrmodal.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/qrmodal/qrmodal.component.html"),
        styles: [__webpack_require__(/*! ./qrmodal.component.scss */ "./src/app/cart/qrmodal/qrmodal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_3__["TransactionService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], QrmodalComponent);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map