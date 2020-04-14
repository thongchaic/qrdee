(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./node_modules/ionic-rating/fesm2015/ionic-rating.js":
/*!************************************************************!*\
  !*** ./node_modules/ionic-rating/fesm2015/ionic-rating.js ***!
  \************************************************************/
/*! exports provided: IonRatingComponent, IonicRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRatingComponent", function() { return IonRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicRatingModule", function() { return IonicRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonRatingComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.rate) {
            this.update(this.rate);
        }
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} internalChange
     * @return {?}
     */
    update(value, internalChange = true) {
        if (!(this.readonly || this.disabled || this.rate === value)) {
            this.rate = value;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            if (this.onChange) {
                this.onChange(this.rate);
            }
            if (this.onTouched) {
                this.onTouched();
            }
        }
    }
    /**
     * @param {?} rate
     * @return {?}
     */
    onClick(rate) {
        this.update(this.resettable && this.rate === rate ? 0 : rate);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onMouseEnter(value) {
        if (!(this.disabled || this.readonly)) {
            this.hoverRate = value;
        }
        this.hover.emit(value);
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.leave.emit(this.hoverRate);
        this.hoverRate = 0;
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.update(value, false);
        this.cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
IonRatingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ion-rating',
                template: "<ion-button *ngFor=\"let i of [1, 2, 3, 4, 5]\" type=\"button\" fill=\"clear\" [disabled]=\"disabled || readonly\"\n  (mouseenter)=\"onMouseEnter(i)\" (click)=\"onClick(i)\" [class.filled]=\"i <= hoverRate || (!hoverRate && i <= rate)\"\n  [class.readonly]=\"readonly\">\n  <ion-icon slot=\"icon-only\" name=\"star\" [size]=\"size\">\n  </ion-icon>\n</ion-button>",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        () => IonRatingComponent)),
                        multi: true
                    }
                ],
                styles: [":host{--star-color:gray;--star-color-filled:orange;display:inline-block}ion-button{--padding-start:0;--padding-end:0;--color:var(--star-color);--color-focused:var(--star-color);--color-activated:var(--star-color)}ion-button.filled{--color:var(--star-color-filled);--color-focused:var(--star-color-filled);--color-activated:var(--star-color-filled)}ion-button.readonly{--opacity:1}"]
            }] }
];
/** @nocollapse */
IonRatingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
IonRatingComponent.propDecorators = {
    rate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resettable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    leave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave', [],] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur', [],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonicRatingModule {
}
IonicRatingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
                exports: [IonRatingComponent],
                declarations: [IonRatingComponent]
            },] }
];


//# sourceMappingURL=ionic-rating.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/cartmodal/cartmodal.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/cartmodal/cartmodal.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header padding=\"true\">\n  <ion-toolbar  *ngIf=\"store\">\n\n    <ion-avatar no-margin no-padding slot=\"start\">\n      <img *ngIf=\"store.store_pic\" [src]=\"'https://qrdee.co/app/'+store.store_pic\">\n      <img *ngIf=\"!store.store_pic\" src=\"/assets/noimg.png\">\n    </ion-avatar>\n\n\n\n\n    <ion-text>\n      <BR><BR>\n      <B>ร้าน {{ store.store_name }}</B>\n      <ion-rating class=\"store-ion-rating\" no-margin no-padding [rate]=\"rate\"\n      readonly=\"false\"\n      size=\"small\"\n      (rateChange)=\"onRateChange($event)\">\n      </ion-rating>\n    </ion-text>\n\n    <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"forceDissmiss(0);\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>Back\n    </ion-button>\n  </ion-toolbar>\n\n  <!-- <ion-toolbar>\n    <ion-rating no-margin no-padding [rate]=\"rate\"\n    readonly=\"false\"\n    size=\"small\"\n    (ngModelChange)=\"rateStore($event);\">\n  </ion-rating>\n  </ion-toolbar> -->\n\n\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-grid *ngIf=\"products\">\n  <ion-item>\n    <ion-text slot=\"start\">\n      <small>เลือกไว้แล้ว {{pick_count}} ชิ้น</small><br>\n      <small> (ขั้นต่ำ {{store.free_delivery_price}} ส่งฟรี)</small>\n    </ion-text>\n    <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"startPayment();\">\n      <ion-icon slot=\"icon-only\" name=\"ios-cash\"></ion-icon> สั่งซื้อ\n    </ion-button>\n  </ion-item>\n    <ion-row responsive-sm wrap no-margin no-padding>\n      <ion-col   *ngFor=\"let product of products\">\n\n        <ion-card  no-margin no-padding >\n          <ion-item>\n            <ion-text>{{ product.product_th }}</ion-text>\n            <ion-badge  color=\"danger\"> {{product.price | number }} บาท </ion-badge>\n            <ion-button fill=\"outline\" slot=\"end\"  (click)=\"selectItem(product);\">เลือก</ion-button>\n          </ion-item>\n          <ion-card-content  no-margin no-padding *ngIf=\"store.store_pic\">\n            <ion-img   style=\"height:200px;\" [src]=\"'https://qrdee.co/app/'+product.thumbnail\"></ion-img>\n            <ion-text *ngIf=\"product.details_th\"><small> {{ product.details_th }} </small></ion-text>\n          </ion-card-content>\n\n          <ion-row no-margin no-padding>\n            <ion-col no-margin no-padding>\n            <!-- <button ion-button icon-start clear small>\n            <ion-icon name=\"thumbs-up\"></ion-icon>\n            <div>12 Likes</div>\n            </button> -->\n            <ion-rating no-margin no-padding [rate]=\"rate\"\n              readonly=\"false\"\n              size=\"small\"\n              (rateChange)=\"onRateChange($event)\">\n            </ion-rating>\n            </ion-col>\n            <!-- <ion-col>\n            <button ion-button icon-start clear small>\n            <ion-icon name=\"text\"></ion-icon>\n            <div>4 Comments</div>\n            </button>\n            </ion-col> -->\n            <ion-col align-self-center text-center (click)=\"commentPrompt();\">\n            <ion-note color=\"primary\"><ion-icon name=\"text\"></ion-icon>\n              4\n            </ion-note>\n            </ion-col>\n          </ion-row>\n\n\n        </ion-card>\n\n\n        <!-- <ion-card>\n            <ion-col col-12 no-margin no-padding><img src=\"{{product.product_th}}\"/></ion-col>\n            <ion-col col-12 no-margin no-padding>\n              <ion-card-content>\n                <ion-card-title>\n                  {{ product.product_th }} <ion-badge item-end>{{ product.product_th }} km</ion-badge>\n                </ion-card-title>\n                <p>\n                  <small><rating [score]=\"5\" [max]=\"5\"></rating> ({{ product.product_th }})</small>\n                </p>\n              </ion-card-content>\n            </ion-col>\n        </ion-card> -->\n      </ion-col>\n    </ion-row>\n</ion-grid>\n\n<!-- <ion-list *ngIf=\"products\">\n    <ion-item >\n\n      <ion-text slot=\"start\">\n        <small>เลือกไว้แล้ว {{pick_count}} ชิ้น</small>\n        <small> (ขั้นต่ำ {{store.free_delivery_price}} ส่งฟรี)</small>\n      </ion-text>\n      <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"startPayment();\">\n        <ion-icon slot=\"icon-only\" name=\"ios-cash\"></ion-icon> ชำระเงิน\n      </ion-button>\n    </ion-item>\n\n    <ion-item  *ngFor=\"let product of products\">\n      <ion-avatar slot=\"start\">\n        <img *ngIf=\"store.store_pic\" [src]=\"'https://qrdee.co/app/'+product.thumbnail\">\n        <img *ngIf=\"!store.store_pic\" src=\"/assets/noimg.png\">\n      </ion-avatar>\n      <ion-text>\n        <small *ngIf=\"product.product_th\"><b>{{product.product_th}}</b></small><br>\n      </ion-text>\n      <ion-text slot=\"end\">\n        <small *ngIf=\"product.price\">ราคา {{product.price | number }} บาท</small><br>\n      </ion-text>\n      <ion-button fill=\"clear\" color=\"secondary\" slot=\"end\" (click)=\"selectItem(product);\">\n        <ion-icon slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n</ion-list> -->\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/customer.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/customer.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ซื้อสินค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen *ngIf=\"tab1\">\n  <ion-searchbar placeholder=\"ค้นหา\" color=\"primary\" (ionChange)=\"searchStores($event.target.value)\">\n  </ion-searchbar>\n\n  <ion-list *ngIf=\"stores\">\n      <ion-list-header >\n        <ion-label>ร้านค้าใกล้เคียง</ion-label>\n      </ion-list-header>\n      <ion-item *ngIf=\"stores && stores.length <=0 \">\n        <ion-text>\n            ไม่พบร้านบริเวณใกล้ ๆ นี้\n        </ion-text>\n      </ion-item>\n\n      <ion-card *ngFor=\"let store of stores\" (click)=\"viewStore(store);\">\n\n        <ion-row style=\"height: 100%;\">\n          <ion-col size=\"4\">\n            <ion-thumbnail style=\"height: 100%; width: 100%; border-radius: 2px;\">\n              <img *ngIf=\"store.store_pic\" [src]=\"'https://qrdee.co/app/'+store.store_pic\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n              <img *ngIf=\"!store.store_pic\" src=\"/assets/noimg.png\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n            </ion-thumbnail>\n          </ion-col>\n\n          <ion-col size=\"8\" style=\"line-height: 10px;\">\n            <p no-padding>{{ store.store_name }} <ion-badge color=\"primary\">{{store.distance | number }} กม.</ion-badge></p>\n            <small no-padding>{{ store.store_type.store_type_th }}</small><br>\n            <small no-padding>ค่าส่ง {{store.delivery_price}} ฿</small><br>\n            <ion-rating no-margin no-padding [rate]=\"rate\"\n              readonly=\"true\"\n              size=\"small\">\n            </ion-rating>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n      <!-- <ion-item  *ngFor=\"let store of stores\">\n          <ion-avatar slot=\"start\" (click)=\"viewStore(store);\">\n            <img *ngIf=\"store.store_pic\" [src]=\"'https://qrdee.co/app/'+store.store_pic\">\n            <img *ngIf=\"!store.store_pic\" src=\"/assets/noimg.png\">\n          </ion-avatar>\n          <ion-text (click)=\"viewStore(store);\">\n            <small *ngIf=\"store.store_name\"><b>{{store.store_name}}</b></small><br>\n            <small *ngIf=\"store.store_type\">{{store.store_type.store_type_th}}</small>\n          </ion-text>\n          <ion-text slot=\"end\" (click)=\"viewStore(store);\">\n            <small *ngIf=\"store.delivery_price\">ระยะ {{store.distance | number }} km</small><br>\n            <small *ngIf=\"store.delivery_price\">ค่าส่ง {{store.delivery_price}} ฿</small>\n          </ion-text>\n          <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"viewStore(store);\">\n            <ion-icon slot=\"icon-only\" name=\"md-eye\"></ion-icon>\n          </ion-button>\n\n\n        </ion-item> -->\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)=\"infinitStores($event.target)\" style=\"height: 5px;opacity: .01;\">\n     <ion-infinite-scroll-content>\n     </ion-infinite-scroll-content>\n   </ion-infinite-scroll>\n\n</ion-content>\n<ion-content *ngIf=\"tab2\">\n\n  <ion-list  *ngFor=\"let cart of member_cart\">\n      <ion-item >\n        <ion-avatar slot=\"start\">\n        </ion-avatar>\n        <ion-text>\n          <small *ngIf=\"cart.store_name\"><b>ร้าน {{cart.store_name}}</b></small><br>\n        </ion-text>\n        <ion-text slot=\"end\">\n          <small *ngIf=\"cart.delivery_price\">ค่าส่ง {{cart.delivery_price}} ฿</small><br>\n          <small *ngIf=\"cart.free_delivery_price\">(ขั้นต่ำ {{cart.free_delivery_price}} ส่งฟรี)</small>\n        </ion-text>\n        <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"callStore(cart.mobile_number);\">\n          <ion-icon slot=\"icon-only\" name=\"ios-call\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <ion-item *ngFor=\"let prod of cart.products\">\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"prod.thumbnail\" [src]=\"'https://qrdee.co/app/'+prod.thumbnail\">\n          <img *ngIf=\"!prod.thumbnail\" src=\"/assets/noimg.png\">\n        </ion-avatar>\n        <ion-text>\n          <small *ngIf=\"prod.product_th\"><b>{{prod.product_th}}</b></small><br>\n        </ion-text>\n        <ion-text slot=\"end\">\n          <small *ngIf=\"prod.price\">{{prod.price}} ฿</small>\n        </ion-text>\n        <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"removeItem(cart.id, prod.id);\">\n          <ion-icon slot=\"icon-only\" name=\"md-remove-circle\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n  </ion-list>\n\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-text slot=\"start\">\n        <b *ngIf=\"total_price\">รวม {{total_price}} ฿</b>\n      </ion-text>\n      <ion-text slot=\"end\">\n        <small>**ชำระเงินปลายทางผ่าน QRCode</small>\n      </ion-text>\n    </ion-item>\n  </ion-list>\n\n  <ion-label position=\"floating\">โปรดระบุจุดรับสินค้า</ion-label>\n    <div #map id=\"map\" style=\"height:250px;\" ></div>\n  <br>\n\n  <ion-list lines=\"none\">\n\n    <ion-item>\n      <ion-label position=\"stacked\">ชื่อผู้รับ</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"firstname\" style=\"background-color:#ded9d9;\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">เบอร์โทรศัพท์</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"mobile_number\" style=\"background-color:#ded9d9;\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">รายละเอียดเพิ่มเติมสำหรับผู้ส่งของ</ion-label>\n      <ion-textarea [(ngModel)]=\"notes\" style=\"background-color:#ded9d9;\" rows=\"4\" placeholder=\"ตัวอย่าง. หน้าอาคาร 3 สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏสุรินทร์\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-button size=\"default\" slot=\"end\" (click)=\"placeOrder();\" color=\"tertiary\">\n        ส่งคำสั่งซื้อ\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-content *ngIf=\"tab3\">\n  <ion-list *ngIf=\"carts\">\n\n      <ion-list-header >\n        <ion-label>รายการซื้อสินค้า</ion-label>\n      </ion-list-header>\n\n      <ion-item  *ngFor=\"let cart of carts\">\n          <ion-avatar slot=\"start\">\n            <img *ngIf=\"cart.product.thumbnail\" [src]=\"'https://qrdee.co/app/'+cart.product.thumbnail\">\n            <img *ngIf=\"!cart.product.thumbnail\" src=\"/assets/noimg.png\">\n          </ion-avatar>\n          <ion-text slot=\"end\">\n            <small *ngIf=\"cart.product.product_th && cart.store.store_name\">{{cart.product.product_th}} จาก {{cart.store.store_name}}</small><br>\n            <small *ngIf=\"cart.created_at\">เมื่อ {{cart.created_at }}</small>\n          </ion-text>\n          <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"callStore(cart.store.mobile_number);\">\n            <ion-icon slot=\"icon-only\" name=\"ios-call\"></ion-icon>\n          </ion-button>\n        </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<ion-footer style=\"background:#FFFFFF;\">\n  <ion-toolbar>\n    <ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button color=\"primary\" (click)=\"changeTab(0)\" >\n              <ion-icon name=\"md-locate\"></ion-icon>\n              <ion-label>ร้านค้าใกล้ๆ</ion-label>\n          </ion-tab-button>\n          <ion-tab-button color=\"primary\" (click)=\"changeTab(1)\" >\n              <ion-icon name=\"md-cart\"></ion-icon>\n              <ion-label>คำสั่งซื้อ</ion-label>\n          </ion-tab-button>\n          <ion-tab-button color=\"primary\" (click)=\"changeTab(2)\" >\n              <ion-icon name=\"md-list-box\"></ion-icon>\n              <ion-label>รายการซื้อ</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar>\n      </ion-tabs>\n   </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/mapmodal/mapmodal.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/mapmodal/mapmodal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n\n    <ion-title>ระบุตำแหน่ง</ion-title>\n    <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"dismissModal();\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>Back\n    </ion-button>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div #map id=\"map\" style=\"height: 100%;\"></div>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\"  shape=\"round\" color=\"primary\"   (click)=\"accept();\">ค้นหาร้าน</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/customer/cartmodal/cartmodal.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/customer/cartmodal/cartmodal.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "store-ion-rating {\n  --star-color: gray;\n  --star-color-filled: green; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jdXN0b21lci9jYXJ0bW9kYWwvY2FydG1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWE7RUFDYiwwQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2NhcnRtb2RhbC9jYXJ0bW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzdG9yZS1pb24tcmF0aW5nIHtcbiAgLS1zdGFyLWNvbG9yOiBncmF5O1xuICAtLXN0YXItY29sb3ItZmlsbGVkOiBncmVlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/customer/cartmodal/cartmodal.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/customer/cartmodal/cartmodal.component.ts ***!
  \***********************************************************/
/*! exports provided: CartmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartmodalComponent", function() { return CartmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");






let CartmodalComponent = class CartmodalComponent {
    constructor(productService, toastService, event, modalController, alertController) {
        this.productService = productService;
        this.toastService = toastService;
        this.event = event;
        this.modalController = modalController;
        this.alertController = alertController;
        this.products = [];
        this.member_cart = [];
        this.pick_count = 0;
        this.rate = 3;
        console.log(this.store);
        this.member_cart = JSON.parse(localStorage.getItem('member_cart'));
        this.calcPickCount();
    }
    ngOnInit() {
        //console.log(this.store);
    }
    ngAfterViewInit() {
        this.loadProducts();
    }
    selectItem(product) {
        let store = null;
        this.member_cart.forEach(e => {
            if (e.id == this.store.id) {
                store = e;
            }
        });
        if (store) {
            store.products.push(product);
        }
        else {
            store = this.store;
            store.products = [product];
            this.member_cart.push(this.store);
        }
        console.log(this.member_cart);
        localStorage.setItem('member_cart', JSON.stringify(this.member_cart));
        this.toastService.showToast('เก็บสินค้าลงตะกร้าแล้ว', 'top');
        this.calcPickCount();
    }
    calcPickCount() {
        this.pick_count = 0;
        this.member_cart.forEach(e => {
            this.pick_count += e.products.length;
        });
    }
    loadProducts() {
        //https://qrdee.co/api/v2/products/294
        this.productService.getProducts(this.store.id).subscribe((data) => {
            console.log(data);
            this.products = data;
            //console.log(this.member_cart);
        });
    }
    commentPrompt() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // const alert = await this.alertController.create({
            //   header: 'ความเห็น',
            //   inputs: [
            //     {
            //       // name: 'name1',
            //       type: 'text',
            //       placeholder: 'Placeholder 1'
            //     },
            //     {
            //       // name: 'name2',
            //       type: 'text',
            //       id: 'name2-id',
            //       value: 'hello',
            //       placeholder: 'Placeholder 2'
            //     },
            //     // multiline input.
            //     {
            //       // name: 'paragraph',
            //       id: 'paragraph',
            //       type: 'textarea',
            //       placeholder: 'Placeholder 3'
            //     },
            //     {
            //       name: 'name3',
            //       value: 'http://ionicframework.com',
            //       type: 'url',
            //       placeholder: 'Favorite site ever'
            //     },
            //     // input date with min & max
            //     {
            //       // name: 'name4',
            //       type: 'date',
            //       min: '2017-03-01',
            //       max: '2018-01-12'
            //     },
            //     // input date without min nor max
            //     {
            //       // name: 'name5',
            //       type: 'date'
            //     },
            //     {
            //       // name: 'name6',
            //       type: 'number',
            //       min: -5,
            //       max: 10
            //     },
            //     {
            //       // name: 'name7',
            //       type: 'text'
            //     }
            //   ],
            //   buttons: [
            //     {
            //       text: 'ยกเลิก',
            //       role: 'cancel',
            //       cssClass: 'secondary',
            //       handler: () => {
            //         console.log('Confirm Cancel');
            //       }
            //     }, {
            //       text: 'ส่งความเห็น',
            //       handler: () => {
            //         console.log('Confirm Ok');
            //       }
            //     }
            //   ]
            // });
            //
            // await alert.present();
        });
    }
    startPayment() {
        // process &
        this.closeModal(3);
    }
    addProductStar(event) {
        console.log(event);
    }
    onRateChange(event) {
        console.log(event);
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
CartmodalComponent.ctorParameters = () => [
    { type: _products_shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CartmodalComponent.prototype, "store", void 0);
CartmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cartmodal',
        template: __webpack_require__(/*! raw-loader!./cartmodal.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/cartmodal/cartmodal.component.html"),
        styles: [__webpack_require__(/*! ./cartmodal.component.scss */ "./src/app/customer/cartmodal/cartmodal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], CartmodalComponent);



/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer.page */ "./src/app/customer/customer.page.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/customer/shared/user.service.ts");
/* harmony import */ var _products_shared_forms_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../products/shared/forms.service */ "./src/app/products/shared/forms.service.ts");
/* harmony import */ var _cartmodal_cartmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cartmodal/cartmodal.component */ "./src/app/customer/cartmodal/cartmodal.component.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _mapmodal_mapmodal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mapmodal/mapmodal.component */ "./src/app/customer/mapmodal/mapmodal.component.ts");
/* harmony import */ var ionic_rating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ionic-rating */ "./node_modules/ionic-rating/fesm2015/ionic-rating.js");














const routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_7__["CustomerPage"]
    },
    {
        path: 'cartmodal',
        component: _cartmodal_cartmodal_component__WEBPACK_IMPORTED_MODULE_10__["CartmodalComponent"]
    }
    // ,
    //  {
    //   path: ':id',
    //       component: CustomerPage,
    //       data: { title: 'แก้ไขข้อมูล', formType: 'update' }
    // },
];
let CustomerPageModule = class CustomerPageModule {
};
CustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ionic_rating__WEBPACK_IMPORTED_MODULE_13__["IonicRatingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _customer_page__WEBPACK_IMPORTED_MODULE_7__["CustomerPage"],
            _cartmodal_cartmodal_component__WEBPACK_IMPORTED_MODULE_10__["CartmodalComponent"],
            _mapmodal_mapmodal_component__WEBPACK_IMPORTED_MODULE_12__["MapmodalComponent"]
        ],
        entryComponents: [_mapmodal_mapmodal_component__WEBPACK_IMPORTED_MODULE_12__["MapmodalComponent"]],
        providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _products_shared_forms_service__WEBPACK_IMPORTED_MODULE_9__["FormsService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__["CallNumber"]],
    })
], CustomerPageModule);



/***/ }),

/***/ "./src/app/customer/customer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn1 {\n  height: 100px;\n  --background: #33FFCC ; }\n\n.btn2 {\n  height: 100px;\n  --background: #66CCFF ; }\n\n.img_store {\n  width: 80px;\n  height: 80px; }\n\n.bk {\n  width: 100px;\n  height: 60px;\n  position: absolute;\n  top: 65%;\n  left: 65%;\n  margin-top: -100px;\n  margin-left: -100px; }\n\n.bg {\n  --background: url('https://image.freepik.com/free-vector/city-background-design_1300-380.jpg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jdXN0b21lci9jdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0VBQ2Isc0JBQWEsRUFBQTs7QUFHZDtFQUNDLGFBQWE7RUFDYixzQkFBYSxFQUFBOztBQUdkO0VBQ0MsV0FBVztFQUFFLFlBQVksRUFBQTs7QUFFMUI7RUFDQyxZQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUTtFQUNSLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHcEI7RUFDRSw4RkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjEge1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0LS1iYWNrZ3JvdW5kOiAjMzNGRkNDIDtcclxuXHJcbn1cclxuLmJ0bjIge1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0LS1iYWNrZ3JvdW5kOiAjNjZDQ0ZGIDtcclxuXHJcbn1cclxuLmltZ19zdG9yZXtcclxuXHR3aWR0aDogODBweDsgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbi5iayB7XHJcblx0d2lkdGg6MTAwcHg7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDY1JTtcclxuXHRsZWZ0OjY1JTtcclxuXHRtYXJnaW4tdG9wOiAtMTAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuXHQvLyBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggMTBweCByZ2JhKDUwLDUwLDUwLC40KTtcclxuXHR9XHJcbi5iZyB7XHJcblx0XHQtLWJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXZlY3Rvci9jaXR5LWJhY2tncm91bmQtZGVzaWduXzEzMDAtMzgwLmpwZycpO1xyXG5cdCAgLy8gLS1iYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMzNDQ0ZGIDUwJSwgI0NDRkZGRiA1MCUpO1xyXG5cclxuICAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/customer/customer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/customer/customer.page.ts ***!
  \*******************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/customer/shared/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _cartmodal_cartmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cartmodal/cartmodal.component */ "./src/app/customer/cartmodal/cartmodal.component.ts");
/* harmony import */ var _mapmodal_mapmodal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mapmodal/mapmodal.component */ "./src/app/customer/mapmodal/mapmodal.component.ts");















let CustomerPage = class CustomerPage {
    constructor(geolocation, userservice, toastService, route, router, http, builder, navCtrl, modalController, _loading, platform, callNumber) {
        this.geolocation = geolocation;
        this.userservice = userservice;
        this.toastService = toastService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this._loading = _loading;
        this.platform = platform;
        this.callNumber = callNumber;
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
        this.latitude = 14.883043;
        this.longitude = 103.4928108;
        this.stores = [];
        this.carts = [];
        this.offset = 0;
        this.q = '';
        this.member_cart = [];
        this.total_price = 0;
        this.notes = '';
        this.rate = 3;
        localStorage.setItem('member_cart', JSON.stringify(this.member_cart));
        this.member = JSON.parse(localStorage.getItem('member'));
        if (this.member) {
            this.latitude = this.member.latitude;
            this.longitude = this.member.longitude;
            this.mobile_number = this.member.mobile_number;
            this.firstname = this.member.firstname;
            console.log("list component called!!!");
            console.log(this.member);
        }
    }
    ionViewDidEnter() {
        console.log("customer did enter....");
    }
    ionViewWillEnter() {
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.platform.ready();
            this.loadStores();
            //this.loadMap();
            //this.changeTab(0);
        });
    }
    ngAfterViewInit() {
        //this.getCurrentPos();
    }
    rateStore(e) {
        console.log(e);
    }
    getCurrentPos() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            this.loadStores();
        }).catch((error) => {
            alert("รับตำแหน่งปัจจุบันไม่ได้ ใช้ตำแหน่งล่าสุด");
            this.loadStores();
        });
    }
    loadMyOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.member);
            if (!this.member.id) {
                return;
            }
            const loading = yield this._loading.create();
            yield loading.present();
            yield this.userservice.myOrder(this.member.id).subscribe((data) => {
                loading.dismiss();
                console.log(data);
                this.carts = data;
            }, err => {
                loading.dismiss();
                console.log(err);
            });
        });
    }
    loadStores(scrolled = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.latitude == null || this.longitude == null) {
                this.loadMapModal();
                return;
            }
            const loading = yield this._loading.create();
            yield loading.present();
            this.offset = yield this.stores.length;
            console.log(this.offset + ", " + this.latitude + ", " + this.longitude);
            yield this.userservice.getStores(this.offset, this.latitude, this.longitude).subscribe((data) => {
                //this.loading.dismissLoading();
                data.forEach(e => {
                    let f = this.stores.find(t => t.id == e.id);
                    if (!f) {
                        this.stores.push(e);
                    }
                });
                loading.dismiss();
                if (scrolled) {
                    this.infiniteScroll.complete();
                }
            }, err => {
                loading.dismiss();
                if (scrolled) {
                    this.infiniteScroll.complete();
                }
            });
        });
    }
    searchStores(q) {
        if (q == "") {
            this.loadStores();
            this.q = q;
        }
        if (this.q == q) {
        }
        else {
            this.stores = [];
        }
        this.q = q;
        this.offset = this.stores.length;
        this.userservice.searchStores(q, this.offset, this.latitude, this.longitude).subscribe((data) => {
            console.log(data);
            this.stores = data;
        }, err => {
            console.log(err);
        });
    }
    infinitStores(event) {
        if (this.q == "") {
            console.log("Load Stores....");
            this.loadStores(true);
        }
        else {
            this.searchStores(this.q);
        }
        //
        // setTimeout(() => {
        // console.log('Done');
        // this.infiniteScroll.complete();
        //
        //
        // }, 500);
    }
    calcTotalPrice() {
        this.total_price = 0;
        this.member_cart.forEach(e => {
            console.log(e);
            //this.total_price += e.delivery_price;
            let store_price = 0;
            e.products.forEach(p => {
                store_price += p.price;
            });
            if (store_price >= e.free_delivery_price) {
                this.total_price += store_price;
            }
            else {
                this.total_price += store_price + e.delivery_price;
            }
        });
    }
    processPayment(c) {
        if (c < 5) {
            let x = document.getElementById('map');
            if (!x) {
                setTimeout(() => {
                    console.log("Not ready");
                    let k = c + 1;
                    this.processPayment(k);
                }, 1000);
            }
        }
        this.member_cart = JSON.parse(localStorage.getItem('member_cart'));
        console.log(this.member_cart);
        this.calcTotalPrice();
        if (this.mapElement) {
            console.log("Element active");
            this.loadMap();
        }
        else {
            console.log("Element not active");
        }
    }
    loadMap() {
        localStorage.setItem("member_lat", this.latitude);
        localStorage.setItem("member_lng", this.longitude);
        let latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        let marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        marker.addListener('dragend', function () {
            localStorage.setItem("member_lat", marker.getPosition().lat());
            localStorage.setItem("member_lng", marker.getPosition().lng());
            this.map.setCenter(marker.getPosition());
        });
        this.map.setCenter(latLng);
        //console.log(this.map);
        //  google.maps.event.addListener(this.map, "idle", function(){
        //   google.maps.event.trigger(this.map, 'resize');
        // });
        // google.maps.event.trigger(this.map, 'resize');
        // this.map.setZoom( this.map.getZoom() );
        // this.map.resize();
    }
    placeOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.member_cart = JSON.parse(localStorage.getItem('member_cart'));
            this.latitude = localStorage.getItem('member_lat');
            this.longitude = localStorage.getItem('member_lng');
            //this.member = JSON.parse(localStorage.getItem('member'));
            this.member.mobile_number = this.mobile_number;
            this.member.firstname = this.firstname;
            console.log(this.member);
            localStorage.setItem('member', JSON.stringify(this.member));
            const loading = yield this._loading.create();
            yield loading.present();
            yield this.userservice.placeOrder(this.member, this.member_cart, this.notes, this.latitude, this.longitude).subscribe((data) => {
                loading.dismiss();
                console.log("res =====> ");
                console.log(data);
                this.member = data.member;
                localStorage.setItem('member', JSON.stringify(this.member));
                localStorage.setItem('member_cart', JSON.stringify([]));
                this.member_cart = [];
                this.total_price = 0;
                this.toastService.showToast('ส่งคำสั่งซื้อเรียบร้อยแล้ว', 'top');
                this.changeTab(2);
            }, err => {
                this.toastService.showToast('คำสั่งซื้อผิดพลาด โปรดลองอีกครั้ง', 'top');
                console.log(err);
                loading.dismiss();
                this.changeTab(0);
            });
        });
    }
    removeItem(store_id, product_id) {
        let i = 0;
        this.member_cart.forEach(e => {
            if (e.id == store_id) {
                let j = 0;
                e.products.forEach(p => {
                    if (p.id == product_id) {
                        e.products.splice(j, 1);
                        console.log(store_id + " => " + e.products.length);
                        if (e.products.length <= 0) {
                            this.member_cart.splice(i, 1);
                        }
                    }
                    j++;
                });
            }
            i++;
        });
        this.calcTotalPrice();
        localStorage.setItem('member_cart', JSON.stringify(this.member_cart));
    }
    callStore(mobile_number) {
        console.log("call= >" + mobile_number);
        this.callNumber.callNumber(`${mobile_number}`, true)
            .then(res => { })
            .catch(err => { alert(JSON.stringify(err)); });
    }
    viewStore(store) {
        //console.log(store);
        this.cartModal(store);
    }
    cartModal(store) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _cartmodal_cartmodal_component__WEBPACK_IMPORTED_MODULE_10__["CartmodalComponent"],
                componentProps: {
                    'store': store
                }
            });
            modal.onDidDismiss()
                .then(status => {
                console.log("dismis => ");
                console.log(status);
                if (status.data == 3) {
                    this.changeTab(1);
                }
            });
            return yield modal.present();
        });
    }
    changeTab(t) {
        if (t == 0) {
            this.tab1 = true;
            this.tab2 = false;
            this.tab3 = false;
            this.stores = [];
            this.loadMapModal();
        }
        else if (t == 1) {
            this.tab1 = false;
            this.tab2 = true;
            this.tab3 = false;
            this.processPayment(0);
        }
        else {
            this.tab1 = false;
            this.tab2 = false;
            this.tab3 = true;
            this.loadMyOrder();
        }
    }
    loadMapModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _mapmodal_mapmodal_component__WEBPACK_IMPORTED_MODULE_11__["MapmodalComponent"]
            });
            yield modal.present();
            const { data } = yield modal.onWillDismiss();
            console.log(data);
            this.latitude = yield data.latitude;
            this.longitude = yield data.longitude;
            yield (this.loadStores());
        });
    }
};
CustomerPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonInfiniteScroll"])
], CustomerPage.prototype, "infiniteScroll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CustomerPage.prototype, "mapElement", void 0);
CustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: __webpack_require__(/*! raw-loader!./customer.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer/customer.page.html"),
        styles: [__webpack_require__(/*! ./customer.page.scss */ "./src/app/customer/customer.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
        _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__["CallNumber"]])
], CustomerPage);



/***/ }),

/***/ "./src/app/customer/mapmodal/mapmodal.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/customer/mapmodal/mapmodal.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jdXN0b21lci9tYXBtb2RhbC9tYXBtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9tYXBtb2RhbC9tYXBtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/customer/mapmodal/mapmodal.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/customer/mapmodal/mapmodal.component.ts ***!
  \*********************************************************/
/*! exports provided: MapmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapmodalComponent", function() { return MapmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");




let MapmodalComponent = class MapmodalComponent {
    constructor(_modalCtrl, _geolocation, _loading) {
        this._modalCtrl = _modalCtrl;
        this._geolocation = _geolocation;
        this._loading = _loading;
        this.latitude = 14.8718084;
        this.longitude = 103.4962797;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getLocation();
    }
    ngAfterViewInit() {
        //this.getCurrentPos();
    }
    getLocation() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.member = JSON.parse(localStorage.getItem('member'));
            if (this.member.latitude == null || this.member.longitude == null) {
                const _loading = yield this._loading.create();
                yield _loading.present();
                this._geolocation.getCurrentPosition().then((resp) => {
                    _loading.dismiss();
                    this.latitude = resp.coords.latitude;
                    this.longitude = resp.coords.longitude;
                    this.member.longitude = this.longitude;
                    this.member.latitude = this.latitude;
                    localStorage.setItem('member', JSON.stringify(this.member));
                    this.loadMap();
                }).catch((error) => {
                    _loading.dismiss();
                    this.loadMap();
                });
            }
            else {
                this.latitude = this.member.latitude;
                this.longitude = this.member.longitude;
                this.loadMap();
            }
        });
    }
    dismissModal() {
        this.latitude = localStorage.getItem('select_lat');
        this.longitude = localStorage.getItem('select_lng');
        console.log("Dismiss => " + this.latitude + " / " + this.longitude);
        this.member.longitude = this.longitude;
        this.member.latitude = this.latitude;
        localStorage.setItem('member', JSON.stringify(this.member));
        this._modalCtrl.dismiss({ latitude: this.latitude, longitude: this.longitude });
    }
    accept() {
        this.latitude = localStorage.getItem('select_lat');
        this.longitude = localStorage.getItem('select_lng');
        this.member.longitude = this.longitude;
        this.member.latitude = this.latitude;
        localStorage.setItem('member', JSON.stringify(this.member));
        console.log("Accept => " + this.latitude + " / " + this.longitude);
        this._modalCtrl.dismiss({ latitude: this.latitude, longitude: this.longitude });
    }
    loadMap() {
        localStorage.setItem("select_lat", this.latitude);
        localStorage.setItem("select_lng", this.longitude);
        let latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        let marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        marker.addListener('dragend', function () {
            localStorage.setItem("select_lat", marker.getPosition().lat());
            localStorage.setItem("select_lng", marker.getPosition().lng());
            this.map.setCenter(marker.getPosition());
        });
    }
};
MapmodalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MapmodalComponent.prototype, "mapElement", void 0);
MapmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapmodal',
        template: __webpack_require__(/*! raw-loader!./mapmodal.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/mapmodal/mapmodal.component.html"),
        styles: [__webpack_require__(/*! ./mapmodal.component.scss */ "./src/app/customer/mapmodal/mapmodal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], MapmodalComponent);



/***/ }),

/***/ "./src/app/customer/shared/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/customer/shared/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    myOrder(mem_id) {
        console.log(`https://qrdee.co/api/v2/myorders/${mem_id}`);
        return this.http.get(`https://qrdee.co/api/v2/myorders/${mem_id}`);
    }
    placeOrder(mem, member_cart, notes, latitude, longitude) {
        console.log(mem);
        // console.log(member_cart);
        // console.log(notes);
        // console.log(latitude);
        // console.log(longitude);
        let items = [];
        member_cart.forEach(e => {
            e.products.forEach(p => {
                items.push({
                    store_id: e.id,
                    product_id: p.id,
                    price: p.price,
                    qty: 1
                });
            });
        });
        const body = {
            member: mem,
            latitude: latitude,
            longitude: longitude,
            notes: notes,
            items: items
        };
        console.log(body);
        return this.http.post(`https://qrdee.co/api/v2/orders`, body);
    }
    searchStores(q, offset, latitude, longitude) {
        console.log(`https://qrdee.co/api/v2/stores?q=${q}&offset=${offset}&latitude=${latitude}&longitude=${longitude}`);
        return this.http.get(`https://qrdee.co/api/v2/stores?q=${q}&offset=${offset}&latitude=${latitude}&longitude=${longitude}`);
    }
    getStores(offset, latitude, longitude) {
        console.log(`https://qrdee.co/api/v2/stores?offset=${offset}&latitude=${latitude}&longitude=${longitude}`);
        return this.http.get(`https://qrdee.co/api/v2/stores?offset=${offset}&latitude=${latitude}&longitude=${longitude}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ })

}]);
//# sourceMappingURL=customer-customer-module-es2015.js.map