(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/cartmodal/cartmodal.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/cartmodal/cartmodal.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header padding=\"true\">\n  <ion-toolbar  *ngIf=\"store\">\n\n    <ion-avatar no-margin no-padding slot=\"start\">\n      <img *ngIf=\"store.store_pic\" [src]=\"'https://qrdee.co/app/'+store.store_pic\">\n      <img *ngIf=\"!store.store_pic\" src=\"/assets/noimg.png\">\n    </ion-avatar>\n\n    <div no-margin no-padding>\n      <ion-row no-margin no-padding>\n        <ion-col no-margin no-padding>\n          {{ store.store_name }}\n        </ion-col>\n      </ion-row>\n\n      <ion-row no-margin no-padding>\n        <ion-col size=\"12\" no-margin no-padding>\n          <ul no-margin no-padding class=\"rating-container\" style=\"display: inline; list-style: none;\">\n            <li no-margin no-padding >\n              <ion-button no-margin no-padding fill size=\"small\" *ngFor=\"let star of [0,1,2,3,4]\" (click)=\"addStoreStar(store.id, star+1)\">\n                <ion-icon no-margin no-padding [name]=\"store.star > star ? 'star' : 'star-outline'\"></ion-icon>\n              </ion-button>\n            </li>\n          </ul>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-button fill=\"clear\" size=\"small\" color=\"danger\" slot=\"end\" (click)=\"forceDissmiss(0);\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>กลับ\n    </ion-button>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n<ion-grid *ngIf=\"products\">\n  <ion-item>\n    <ion-text slot=\"start\">\n      <small>เลือกไว้แล้ว {{pick_count}} ชิ้น</small><br>\n      <small> (ขั้นต่ำ {{store.free_delivery_price}} ส่งฟรี)</small>\n    </ion-text>\n    <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"startPayment();\">\n      <ion-icon slot=\"icon-only\" name=\"ios-cash\"></ion-icon> สั่งซื้อ\n    </ion-button>\n  </ion-item>\n    <ion-row responsive-sm wrap no-margin no-padding>\n      <ion-col size=\"12\"  *ngFor=\"let product of products\">\n\n        <ion-card  no-margin no-padding >\n          <ion-item>\n            <ion-text>{{ product.product_th }}</ion-text>\n            <ion-badge  color=\"danger\"> {{product.price | number }} บาท </ion-badge>\n            <ion-button fill=\"outline\" slot=\"end\"  (click)=\"selectItem(product);\">เลือก</ion-button>\n          </ion-item>\n          <ion-card-content  no-margin no-padding *ngIf=\"product.thumbnail\">\n            <ion-img   style=\"height:200px;\" [src]=\"'https://qrdee.co/app/'+product.thumbnail\"></ion-img>\n            <ion-text *ngIf=\"product.details_th\"><small> {{ product.details_th }} </small></ion-text>\n          </ion-card-content>\n\n          <ion-row no-margin no-padding>\n            <ion-col size=\"10\">\n            <!-- <button ion-button icon-start clear small>\n            <ion-icon name=\"thumbs-up\"></ion-icon>\n            <div>12 Likes</div>\n            </button> -->\n\n              <div class=\"rating-container\">\n                <ul style=\"display: inline;\">\n                  <li>\n                    <ion-button fill size=\"small\" *ngFor=\"let star of [0,1,2,3,4]\" (click)=\"addProductStar(product.id, star+1)\">\n                      <ion-icon [name]=\"product.star > star ? 'star' : 'star-outline'\"></ion-icon>\n                    </ion-button>\n                  </li>\n                </ul>\n              </div>\n            <!-- <rating no-margin no-padding [rate]=\"rate\"\n              readonly=\"false\"\n              size=\"small\"\n              (rateChange)=\"addProductStar($event)\">\n            </rating> -->\n            </ion-col>\n            <!-- <ion-col>\n            <button ion-button icon-start clear small>\n            <ion-icon name=\"text\"></ion-icon>\n            <div>4 Comments</div>\n            </button>\n            </ion-col> -->\n            <ion-col size=\"2\" align-self-center text-center (click)=\"commentPrompt(product.id, product.comments);\">\n              <ion-note color=\"primary\"><ion-icon name=\"text\"></ion-icon>\n                {{ product.comments.length }}\n              </ion-note>\n            </ion-col>\n          </ion-row>\n\n\n        </ion-card>\n\n\n        <!-- <ion-card>\n            <ion-col col-12 no-margin no-padding><img src=\"{{product.product_th}}\"/></ion-col>\n            <ion-col col-12 no-margin no-padding>\n              <ion-card-content>\n                <ion-card-title>\n                  {{ product.product_th }} <ion-badge item-end>{{ product.product_th }} km</ion-badge>\n                </ion-card-title>\n                <p>\n                  <small><rating [score]=\"5\" [max]=\"5\"></rating> ({{ product.product_th }})</small>\n                </p>\n              </ion-card-content>\n            </ion-col>\n        </ion-card> -->\n      </ion-col>\n    </ion-row>\n</ion-grid>\n\n<!-- <ion-list *ngIf=\"products\">\n    <ion-item >\n\n      <ion-text slot=\"start\">\n        <small>เลือกไว้แล้ว {{pick_count}} ชิ้น</small>\n        <small> (ขั้นต่ำ {{store.free_delivery_price}} ส่งฟรี)</small>\n      </ion-text>\n      <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"startPayment();\">\n        <ion-icon slot=\"icon-only\" name=\"ios-cash\"></ion-icon> ชำระเงิน\n      </ion-button>\n    </ion-item>\n\n    <ion-item  *ngFor=\"let product of products\">\n      <ion-avatar slot=\"start\">\n        <img *ngIf=\"store.store_pic\" [src]=\"'https://qrdee.co/app/'+product.thumbnail\">\n        <img *ngIf=\"!store.store_pic\" src=\"/assets/noimg.png\">\n      </ion-avatar>\n      <ion-text>\n        <small *ngIf=\"product.product_th\"><b>{{product.product_th}}</b></small><br>\n      </ion-text>\n      <ion-text slot=\"end\">\n        <small *ngIf=\"product.price\">ราคา {{product.price | number }} บาท</small><br>\n      </ion-text>\n      <ion-button fill=\"clear\" color=\"secondary\" slot=\"end\" (click)=\"selectItem(product);\">\n        <ion-icon slot=\"icon-only\" name=\"ios-cart\"></ion-icon>\n      </ion-button>\n    </ion-item>\n\n</ion-list> -->\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/customer.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/customer.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ซื้อสินค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen *ngIf=\"tab1\">\n  <ion-searchbar placeholder=\"ค้นหา\" color=\"primary\" (ionChange)=\"searchStores($event.target.value)\">\n  </ion-searchbar>\n\n  <ion-list *ngIf=\"stores\">\n      <ion-list-header >\n        <ion-label>ร้านค้าใกล้เคียง</ion-label>\n      </ion-list-header>\n      <ion-item *ngIf=\"stores && stores.length <=0 \">\n        <ion-text>\n            ไม่พบร้านบริเวณใกล้ ๆ นี้\n        </ion-text>\n      </ion-item>\n\n      <ion-card *ngFor=\"let store of stores\" (click)=\"viewStore(store);\">\n\n        <ion-row style=\"height: 100%;\">\n          <ion-col size=\"4\">\n            <ion-thumbnail style=\"height: 100%; width: 100%; border-radius: 2px;\">\n              <img *ngIf=\"store.store_pic\" [src]=\"'https://qrdee.co/app/'+store.store_pic\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n              <img *ngIf=\"!store.store_pic\" src=\"/assets/noimg.png\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n            </ion-thumbnail>\n          </ion-col>\n\n          <ion-col size=\"8\" style=\"line-height: 10px;\">\n            <p no-padding>{{ store.store_name }} <ion-badge color=\"primary\">{{store.distance | number }} กม.</ion-badge></p>\n            <small no-padding>{{ store.store_type.store_type_th }}</small><br>\n            <small no-padding>ค่าส่ง {{store.delivery_price}} ฿</small><br>\n            <ul class=\"rating-container\" style=\"display: inline; list-style: none;\">\n              <li>\n                <ion-button fill size=\"small\" *ngFor=\"let star of [0,1,2,3,4]\">\n                  <ion-icon [name]=\"store.star > star ? 'star' : 'star-outline'\"></ion-icon>\n                </ion-button>\n              </li>\n            </ul>\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n      <!-- <ion-item  *ngFor=\"let store of stores\">\n          <ion-avatar slot=\"start\" (click)=\"viewStore(store);\">\n            <img *ngIf=\"store.store_pic\" [src]=\"'https://qrdee.co/app/'+store.store_pic\">\n            <img *ngIf=\"!store.store_pic\" src=\"/assets/noimg.png\">\n          </ion-avatar>\n          <ion-text (click)=\"viewStore(store);\">\n            <small *ngIf=\"store.store_name\"><b>{{store.store_name}}</b></small><br>\n            <small *ngIf=\"store.store_type\">{{store.store_type.store_type_th}}</small>\n          </ion-text>\n          <ion-text slot=\"end\" (click)=\"viewStore(store);\">\n            <small *ngIf=\"store.delivery_price\">ระยะ {{store.distance | number }} km</small><br>\n            <small *ngIf=\"store.delivery_price\">ค่าส่ง {{store.delivery_price}} ฿</small>\n          </ion-text>\n          <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"viewStore(store);\">\n            <ion-icon slot=\"icon-only\" name=\"md-eye\"></ion-icon>\n          </ion-button>\n\n\n        </ion-item> -->\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)=\"infinitStores($event.target)\" style=\"height: 5px;opacity: .01;\">\n     <ion-infinite-scroll-content>\n     </ion-infinite-scroll-content>\n   </ion-infinite-scroll>\n\n</ion-content>\n<ion-content *ngIf=\"tab2\">\n\n  <ion-list  *ngFor=\"let cart of member_cart\">\n      <ion-item >\n        <ion-avatar slot=\"start\">\n        </ion-avatar>\n        <ion-text>\n          <small *ngIf=\"cart.store_name\"><b>ร้าน {{cart.store_name}}</b></small><br>\n        </ion-text>\n        <ion-text slot=\"end\">\n          <small *ngIf=\"cart.delivery_price\">ค่าส่ง {{cart.delivery_price}} ฿</small><br>\n          <small *ngIf=\"cart.free_delivery_price\">(ขั้นต่ำ {{cart.free_delivery_price}} ส่งฟรี)</small>\n        </ion-text>\n        <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"callStore(cart.mobile_number);\">\n          <ion-icon slot=\"icon-only\" name=\"ios-call\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n      <ion-item *ngFor=\"let prod of cart.products\">\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"prod.thumbnail\" [src]=\"'https://qrdee.co/app/'+prod.thumbnail\">\n          <img *ngIf=\"!prod.thumbnail\" src=\"/assets/noimg.png\">\n        </ion-avatar>\n        <ion-text>\n          <small *ngIf=\"prod.product_th\"><b>{{prod.product_th}}</b></small><br>\n        </ion-text>\n        <ion-text slot=\"end\">\n          <small *ngIf=\"prod.price\">{{prod.price}} ฿</small>\n        </ion-text>\n        <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"removeItem(cart.id, prod.id);\">\n          <ion-icon slot=\"icon-only\" name=\"md-remove-circle\"></ion-icon>\n        </ion-button>\n      </ion-item>\n\n  </ion-list>\n\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-text slot=\"start\">\n        <b *ngIf=\"total_price\">รวม {{total_price}} ฿</b>\n      </ion-text>\n      <ion-text slot=\"end\">\n        <small>**ชำระเงินปลายทางผ่าน QRCode</small>\n      </ion-text>\n    </ion-item>\n  </ion-list>\n\n  <ion-label position=\"floating\">โปรดระบุจุดรับสินค้า</ion-label>\n    <div #map id=\"map\" style=\"height:250px;\" ></div>\n  <br>\n\n\n\n  <ion-list lines=\"none\">\n\n    <ion-item>\n      <ion-label position=\"stacked\">ชื่อผู้รับ</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"firstname\" style=\"background-color:#ded9d9;\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">เบอร์โทรศัพท์</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"mobile_number\" style=\"background-color:#ded9d9;\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">รายละเอียดเพิ่มเติมสำหรับผู้ส่งของ</ion-label>\n      <ion-textarea [(ngModel)]=\"notes\" style=\"background-color:#ded9d9;\" rows=\"4\" placeholder=\"ตัวอย่าง. หน้าอาคาร 3 สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยราชภัฏสุรินทร์\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-button size=\"default\" slot=\"end\" (click)=\"placeOrder();\" color=\"tertiary\">\n        ส่งคำสั่งซื้อ\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-content *ngIf=\"tab3\">\n  <ion-list *ngIf=\"carts\">\n\n      <ion-list-header >\n        <ion-label>รายการซื้อสินค้า</ion-label>\n      </ion-list-header>\n\n      <ion-item  *ngFor=\"let cart of carts\">\n          <ion-avatar slot=\"start\">\n            <img *ngIf=\"cart.product.thumbnail\" [src]=\"'https://qrdee.co/app/'+cart.product.thumbnail\">\n            <img *ngIf=\"!cart.product.thumbnail\" src=\"/assets/noimg.png\">\n          </ion-avatar>\n          <ion-text slot=\"end\">\n            <small *ngIf=\"cart.product.product_th && cart.store.store_name\">{{cart.product.product_th}} จาก {{cart.store.store_name}}</small><br>\n            <small *ngIf=\"cart.created_at\">เมื่อ {{cart.created_at }}</small>\n          </ion-text>\n          <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" (click)=\"callStore(cart.store.mobile_number);\">\n            <ion-icon slot=\"icon-only\" name=\"ios-call\"></ion-icon>\n          </ion-button>\n        </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<ion-footer style=\"background:#FFFFFF;\">\n  <ion-toolbar>\n    <ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n          <ion-tab-button color=\"primary\" (click)=\"changeTab(0)\" >\n              <ion-icon name=\"md-locate\"></ion-icon>\n              <ion-label>ร้านค้าใกล้ๆ</ion-label>\n          </ion-tab-button>\n          <ion-tab-button color=\"primary\" (click)=\"changeTab(1)\" >\n              <ion-icon name=\"md-cart\"></ion-icon>\n              <ion-label>คำสั่งซื้อ</ion-label>\n          </ion-tab-button>\n          <ion-tab-button color=\"primary\" (click)=\"changeTab(2)\" >\n              <ion-icon name=\"md-list-box\"></ion-icon>\n              <ion-label>รายการซื้อ</ion-label>\n          </ion-tab-button>\n        </ion-tab-bar>\n      </ion-tabs>\n   </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/mapmodal/mapmodal.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/mapmodal/mapmodal.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n\n    <ion-title>ระบุตำแหน่ง</ion-title>\n    <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"dismissModal();\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>กลับ\n    </ion-button>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div #map id=\"map\" style=\"height: 100%;\"></div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col size=\"10\">\n      <ion-button expand=\"full\"  color=\"primary\"   (click)=\"accept();\">ค้นหาร้าน</ion-button>\n    </ion-col>\n    <ion-col size=\"2\">\n        <ion-button expand=\"full\" color=\"secondary\"   (click)=\"useGps();\">\n          <ion-icon name=\"md-locate\"></ion-icon>\n        </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/customer/cartmodal/cartmodal.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/customer/cartmodal/cartmodal.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "store-ion-rating {\n  --star-color: gray;\n  --star-color-filled: green; }\n\n#store-rating ion-buttons ion-button {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  --box-shadow: none;\n  height: 20px;\n  font-size: 10px; }\n\n.rating-container ion-button {\n  --padding-start: 4px;\n  --padding-end: 4px; }\n\n.rating-container ion-button ion-icon {\n    color: gray; }\n\n.rating-container ion-button ion-icon[ng-reflect-name=\"star\"] {\n    color: #ffb400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jdXN0b21lci9jYXJ0bW9kYWwvY2FydG1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWE7RUFDYiwwQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxnQkFBYztFQUNkLG1CQUFpQjtFQUNqQixvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxrQkFBYTtFQUNiLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUE7O0FBRmhCO0lBS0UsV0FBVyxFQUFBOztBQUxiO0lBU0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXIvY2FydG1vZGFsL2NhcnRtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN0b3JlLWlvbi1yYXRpbmcge1xuICAtLXN0YXItY29sb3I6IGdyYXk7XG4gIC0tc3Rhci1jb2xvci1maWxsZWQ6IGdyZWVuO1xufVxuXG4jc3RvcmUtcmF0aW5nIGlvbi1idXR0b25zIGlvbi1idXR0b24ge1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucmF0aW5nLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDRweDtcblxuICBpb24taWNvbiB7XG5cdFx0Y29sb3I6IGdyYXk7XG4gIH1cbiAgXG4gIGlvbi1pY29uW25nLXJlZmxlY3QtbmFtZT1cInN0YXJcIl0ge1xuICAgIGNvbG9yOiAjZmZiNDAwO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_shared_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../products/shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _shared_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/customer.service */ "./src/app/customer/shared/customer.service.ts");







var CartmodalComponent = /** @class */ (function () {
    function CartmodalComponent(productService, customerService, toastService, event, modalController, alertController) {
        this.productService = productService;
        this.customerService = customerService;
        this.toastService = toastService;
        this.event = event;
        this.modalController = modalController;
        this.alertController = alertController;
        this.products = [];
        this.member_cart = [];
        this.pick_count = 0;
        this.product_rate = 3;
        this.store_rate = 0;
        console.log(this.store);
        this.member_cart = JSON.parse(localStorage.getItem('member_cart'));
        this.calcPickCount();
    }
    CartmodalComponent.prototype.ngOnInit = function () {
        //console.log(this.store);
    };
    CartmodalComponent.prototype.ngAfterViewInit = function () {
        this.loadProducts();
    };
    CartmodalComponent.prototype.selectItem = function (product) {
        var _this = this;
        var store = null;
        this.member_cart.forEach(function (e) {
            if (e.id == _this.store.id) {
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
    };
    CartmodalComponent.prototype.calcPickCount = function () {
        var _this = this;
        this.pick_count = 0;
        this.member_cart.forEach(function (e) {
            _this.pick_count += e.products.length;
        });
    };
    CartmodalComponent.prototype.loadProducts = function () {
        var _this = this;
        //https://qrdee.co/api/v2/products/294
        this.productService.getProducts(this.store.id).subscribe(function (data) {
            console.log(data);
            _this.products = data;
            //console.log(this.member_cart);
        });
    };
    CartmodalComponent.prototype.commentPrompt = function (pid, comments) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'ความเห็น',
                            inputs: [
                                {
                                    name: 'comment',
                                    type: 'text',
                                    placeholder: 'เพิ่มข้อคิดเห็น'
                                }
                            ],
                            message: "<ion-list no-margin no-padding>" + comments.map(function (comment) { return "<ion-item no-margin no-padding><small>" + comment.comment + "<sub> เมื่อ:" + (new Date(comment.created_at.replace(/-/g, '/')).toISOString().slice(0, 10)) + "</sub></small></ion-item>"; }).join(" ") + "</ion-list>",
                            buttons: [
                                {
                                    text: 'ยกเลิก',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'ส่ง',
                                    handler: function (e) {
                                        if (e.comment != "") {
                                            console.log(pid);
                                            _this.customerService.addProductComment(pid, e.comment).subscribe(function () {
                                                _this.toastService.showToast('เราได้รับข้อคิดเห็นของท่านแล้ว', 'top');
                                                _this.loadProducts();
                                            });
                                        }
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
    CartmodalComponent.prototype.startPayment = function () {
        // process &
        this.closeModal(3);
    };
    CartmodalComponent.prototype.addProductStar = function (id, star) {
        var _this = this;
        this.productService.addProductRate(id, star).subscribe(function () {
            _this.toastService.showToast('เราได้รับดาวจากท่านแล้ว', 'top');
            //this.loadProducts();
        });
    };
    CartmodalComponent.prototype.addStoreStar = function (id, star) {
        var _this = this;
        this.customerService.addStoreStar(id, star).subscribe(function () {
            _this.toastService.showToast('เราได้รับดาวจากท่านแล้ว', 'top');
        });
    };
    CartmodalComponent.prototype.forceDissmiss = function (val) {
        this.closeModal(val);
    };
    CartmodalComponent.prototype.closeModal = function (status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss(status)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartmodalComponent.ctorParameters = function () { return [
        { type: _products_shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _shared_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CartmodalComponent.prototype, "store", void 0);
    CartmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cartmodal',
            template: __webpack_require__(/*! raw-loader!./cartmodal.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/cartmodal/cartmodal.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./cartmodal.component.scss */ "./src/app/customer/cartmodal/cartmodal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_products_shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _shared_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], CartmodalComponent);
    return CartmodalComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer.page */ "./src/app/customer/customer.page.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/customer/shared/user.service.ts");
/* harmony import */ var _products_shared_forms_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../products/shared/forms.service */ "./src/app/products/shared/forms.service.ts");
/* harmony import */ var _cartmodal_cartmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cartmodal/cartmodal.component */ "./src/app/customer/cartmodal/cartmodal.component.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _mapmodal_mapmodal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mapmodal/mapmodal.component */ "./src/app/customer/mapmodal/mapmodal.component.ts");













var routes = [
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
var CustomerPageModule = /** @class */ (function () {
    function CustomerPageModule() {
    }
    CustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _customer_page__WEBPACK_IMPORTED_MODULE_7__["CustomerPage"],
                _cartmodal_cartmodal_component__WEBPACK_IMPORTED_MODULE_10__["CartmodalComponent"],
                _mapmodal_mapmodal_component__WEBPACK_IMPORTED_MODULE_12__["MapmodalComponent"]
            ],
            entryComponents: [_mapmodal_mapmodal_component__WEBPACK_IMPORTED_MODULE_12__["MapmodalComponent"], _cartmodal_cartmodal_component__WEBPACK_IMPORTED_MODULE_10__["CartmodalComponent"]],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _products_shared_forms_service__WEBPACK_IMPORTED_MODULE_9__["FormsService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_11__["CallNumber"]],
        })
    ], CustomerPageModule);
    return CustomerPageModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn1 {\n  height: 100px;\n  --background: #33FFCC ; }\n\n.btn2 {\n  height: 100px;\n  --background: #66CCFF ; }\n\n.img_store {\n  width: 80px;\n  height: 80px; }\n\n.bk {\n  width: 100px;\n  height: 60px;\n  position: absolute;\n  top: 65%;\n  left: 65%;\n  margin-top: -100px;\n  margin-left: -100px; }\n\n.bg {\n  --background: url('https://image.freepik.com/free-vector/city-background-design_1300-380.jpg'); }\n\n.rating-container ion-button {\n  --padding-start: 4px;\n  --padding-end: 4px; }\n\n.rating-container ion-button ion-icon {\n    color: gray; }\n\n.rating-container ion-button ion-icon[ng-reflect-name=\"star\"] {\n    color: #ffb400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jdXN0b21lci9jdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0VBQ2Isc0JBQWEsRUFBQTs7QUFHZDtFQUNDLGFBQWE7RUFDYixzQkFBYSxFQUFBOztBQUdkO0VBQ0MsV0FBVztFQUFFLFlBQVksRUFBQTs7QUFFMUI7RUFDQyxZQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUTtFQUNSLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHcEI7RUFDRSw4RkFBYSxFQUFBOztBQUtiO0VBQ0Esb0JBQWdCO0VBQ2hCLGtCQUFjLEVBQUE7O0FBRmQ7SUFLQyxXQUFXLEVBQUE7O0FBTFo7SUFTQyxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuMSB7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHQtLWJhY2tncm91bmQ6ICMzM0ZGQ0MgO1xyXG5cclxufVxyXG4uYnRuMiB7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHQtLWJhY2tncm91bmQ6ICM2NkNDRkYgO1xyXG5cclxufVxyXG4uaW1nX3N0b3Jle1xyXG5cdHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLmJrIHtcclxuXHR3aWR0aDoxMDBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNjUlO1xyXG5cdGxlZnQ6NjUlO1xyXG5cdG1hcmdpbi10b3A6IC0xMDBweDtcclxuXHRtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG5cdC8vIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAxMHB4IHJnYmEoNTAsNTAsNTAsLjQpO1xyXG5cdH1cclxuLmJnIHtcclxuXHRcdC0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2NpdHktYmFja2dyb3VuZC1kZXNpZ25fMTMwMC0zODAuanBnJyk7XHJcblx0ICAvLyAtLWJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzM0NDRkYgNTAlLCAjQ0NGRkZGIDUwJSk7XHJcblxyXG4gICB9XHJcblxyXG5cdCAucmF0aW5nLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogNHB4O1xyXG5cdFx0LS1wYWRkaW5nLWVuZDogNHB4O1xyXG5cdFxyXG5cdFx0aW9uLWljb24ge1xyXG5cdFx0XHRjb2xvcjogZ3JheTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aW9uLWljb25bbmctcmVmbGVjdC1uYW1lPVwic3RhclwiXSB7XHJcblx0XHRcdGNvbG9yOiAjZmZiNDAwO1xyXG5cdFx0fVxyXG5cdH0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/customer/shared/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _cartmodal_cartmodal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cartmodal/cartmodal.component */ "./src/app/customer/cartmodal/cartmodal.component.ts");
/* harmony import */ var _mapmodal_mapmodal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mapmodal/mapmodal.component */ "./src/app/customer/mapmodal/mapmodal.component.ts");















var CustomerPage = /** @class */ (function () {
    function CustomerPage(geolocation, userservice, toastService, route, router, http, builder, navCtrl, modalController, _loading, platform, callNumber) {
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
    CustomerPage.prototype.ionViewDidEnter = function () {
        console.log("customer did enter....");
    };
    CustomerPage.prototype.ionViewWillEnter = function () {
    };
    CustomerPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        this.loadStores();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.ngAfterViewInit = function () {
        //this.getCurrentPos();
    };
    CustomerPage.prototype.rateStore = function (e) {
        console.log(e);
    };
    CustomerPage.prototype.getCurrentPos = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            _this.loadStores();
        }).catch(function (error) {
            alert("รับตำแหน่งปัจจุบันไม่ได้ ใช้ตำแหน่งล่าสุด");
            _this.loadStores();
        });
    };
    CustomerPage.prototype.loadMyOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.member);
                        if (!this.member.id) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._loading.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.userservice.myOrder(this.member.id).subscribe(function (data) {
                                loading.dismiss();
                                console.log(data);
                                _this.carts = data;
                            }, function (err) {
                                loading.dismiss();
                                console.log(err);
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.loadStores = function (scrolled) {
        if (scrolled === void 0) { scrolled = false; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.latitude == null || this.longitude == null) {
                            this.loadMapModal();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._loading.create()];
                    case 1:
                        loading = _b.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.stores.length];
                    case 3:
                        _a.offset = _b.sent();
                        console.log(this.offset + ", " + this.latitude + ", " + this.longitude);
                        return [4 /*yield*/, this.userservice.getStores(this.offset, this.latitude, this.longitude).subscribe(function (data) {
                                //this.loading.dismissLoading();
                                data.forEach(function (e) {
                                    var f = _this.stores.find(function (t) { return t.id == e.id; });
                                    if (!f) {
                                        _this.stores.push(e);
                                    }
                                });
                                loading.dismiss();
                                if (scrolled) {
                                    _this.infiniteScroll.complete();
                                }
                            }, function (err) {
                                loading.dismiss();
                                if (scrolled) {
                                    _this.infiniteScroll.complete();
                                }
                            })];
                    case 4:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.searchStores = function (q) {
        var _this = this;
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
        this.userservice.searchStores(q, this.offset, this.latitude, this.longitude).subscribe(function (data) {
            console.log(data);
            _this.stores = data;
        }, function (err) {
            console.log(err);
        });
    };
    CustomerPage.prototype.infinitStores = function (event) {
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
    };
    CustomerPage.prototype.calcTotalPrice = function () {
        var _this = this;
        this.total_price = 0;
        this.member_cart.forEach(function (e) {
            console.log(e);
            //this.total_price += e.delivery_price;
            var store_price = 0;
            e.products.forEach(function (p) {
                store_price += p.price;
            });
            if (store_price >= e.free_delivery_price) {
                _this.total_price += store_price;
            }
            else {
                _this.total_price += store_price + e.delivery_price;
            }
        });
    };
    CustomerPage.prototype.processPayment = function (c) {
        var _this = this;
        console.log("C=" + c);
        var x = document.getElementById('map');
        if (!x && c < 100) {
            setTimeout(function () {
                console.log("Not ready");
                var k = c + 1;
                _this.processPayment(k);
            }, 100);
            return;
        }
        if (!x) {
            alert("กดปุ่มคำสั่งซื้ออีกครั้ง");
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
    };
    CustomerPage.prototype.loadMap = function () {
        localStorage.setItem("member_lat", this.latitude);
        localStorage.setItem("member_lng", this.longitude);
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var marker = new google.maps.Marker({
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
    };
    CustomerPage.prototype.placeOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.member_cart = JSON.parse(localStorage.getItem('member_cart'));
                        this.latitude = localStorage.getItem('member_lat');
                        this.longitude = localStorage.getItem('member_lng');
                        //this.member = JSON.parse(localStorage.getItem('member'));
                        this.member.mobile_number = this.mobile_number;
                        this.member.firstname = this.firstname;
                        console.log(this.member);
                        localStorage.setItem('member', JSON.stringify(this.member));
                        return [4 /*yield*/, this._loading.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.userservice.placeOrder(this.member, this.member_cart, this.notes, this.latitude, this.longitude).subscribe(function (data) {
                                loading.dismiss();
                                console.log("res =====> ");
                                console.log(data);
                                _this.member = data.member;
                                localStorage.setItem('member', JSON.stringify(_this.member));
                                localStorage.setItem('member_cart', JSON.stringify([]));
                                _this.member_cart = [];
                                _this.total_price = 0;
                                _this.toastService.showToast('ส่งคำสั่งซื้อเรียบร้อยแล้ว', 'top');
                                _this.changeTab(2);
                            }, function (err) {
                                _this.toastService.showToast('คำสั่งซื้อผิดพลาด โปรดลองอีกครั้ง', 'top');
                                console.log(err);
                                loading.dismiss();
                                _this.changeTab(0);
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.prototype.removeItem = function (store_id, product_id) {
        var _this = this;
        var i = 0;
        this.member_cart.forEach(function (e) {
            if (e.id == store_id) {
                var j_1 = 0;
                e.products.forEach(function (p) {
                    if (p.id == product_id) {
                        e.products.splice(j_1, 1);
                        console.log(store_id + " => " + e.products.length);
                        if (e.products.length <= 0) {
                            _this.member_cart.splice(i, 1);
                        }
                    }
                    j_1++;
                });
            }
            i++;
        });
        this.calcTotalPrice();
        localStorage.setItem('member_cart', JSON.stringify(this.member_cart));
    };
    CustomerPage.prototype.callStore = function (mobile_number) {
        console.log("call= >" + mobile_number);
        this.callNumber.callNumber("" + mobile_number, true)
            .then(function (res) { })
            .catch(function (err) { alert(JSON.stringify(err)); });
    };
    CustomerPage.prototype.viewStore = function (store) {
        //console.log(store);
        this.cartModal(store);
    };
    CustomerPage.prototype.cartModal = function (store) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _cartmodal_cartmodal_component__WEBPACK_IMPORTED_MODULE_10__["CartmodalComponent"],
                            componentProps: {
                                'store': store
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (status) {
                            console.log("dismis => ");
                            console.log(status);
                            if (status.data == 3) {
                                _this.changeTab(1);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomerPage.prototype.changeTab = function (t) {
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
    };
    CustomerPage.prototype.loadMapModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data, _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _mapmodal_mapmodal_component__WEBPACK_IMPORTED_MODULE_11__["MapmodalComponent"]
                        })];
                    case 1:
                        modal = _c.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        data = (_c.sent()).data;
                        console.log(data);
                        _a = this;
                        return [4 /*yield*/, data.latitude];
                    case 4:
                        _a.latitude = _c.sent();
                        _b = this;
                        return [4 /*yield*/, data.longitude];
                    case 5:
                        _b.longitude = _c.sent();
                        return [4 /*yield*/, (this.loadStores())];
                    case 6:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerPage.ctorParameters = function () { return [
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
    ]; };
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
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
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
    return CustomerPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");





var MapmodalComponent = /** @class */ (function () {
    function MapmodalComponent(_modalCtrl, _geolocation, _loading, toastService) {
        this._modalCtrl = _modalCtrl;
        this._geolocation = _geolocation;
        this._loading = _loading;
        this.toastService = toastService;
        this.latitude = 14.8718084;
        this.longitude = 103.4962797;
    }
    MapmodalComponent.prototype.ngOnInit = function () {
    };
    MapmodalComponent.prototype.ionViewDidEnter = function () {
        this.getLocation();
    };
    MapmodalComponent.prototype.ngAfterViewInit = function () {
        //this.getCurrentPos();
    };
    MapmodalComponent.prototype.getLocation = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _loading_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.member = JSON.parse(localStorage.getItem('member'));
                        if (!(this.member.latitude == null || this.member.longitude == null)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._loading.create()];
                    case 1:
                        _loading_1 = _a.sent();
                        return [4 /*yield*/, _loading_1.present()];
                    case 2:
                        _a.sent();
                        this._geolocation.getCurrentPosition().then(function (resp) {
                            _loading_1.dismiss();
                            _this.latitude = resp.coords.latitude;
                            _this.longitude = resp.coords.longitude;
                            _this.member.longitude = _this.longitude;
                            _this.member.latitude = _this.latitude;
                            localStorage.setItem('member', JSON.stringify(_this.member));
                            _this.loadMap();
                        }).catch(function (error) {
                            _loading_1.dismiss();
                            _this.loadMap();
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        this.latitude = this.member.latitude;
                        this.longitude = this.member.longitude;
                        this.loadMap();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MapmodalComponent.prototype.useGps = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._loading.create()];
                    case 1:
                        _loading = _a.sent();
                        return [4 /*yield*/, _loading.present()];
                    case 2:
                        _a.sent();
                        this._geolocation.getCurrentPosition().then(function (resp) {
                            _loading.dismiss();
                            _this.latitude = resp.coords.latitude;
                            _this.longitude = resp.coords.longitude;
                            _this.member.longitude = _this.longitude;
                            _this.member.latitude = _this.latitude;
                            localStorage.setItem('member', JSON.stringify(_this.member));
                            _this.loadMap();
                        }).catch(function (error) {
                            _loading.dismiss();
                            _this.toastService.showToast('เข้าถึงตำแหน่งปัจจุบันไม่ได้', 'top');
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MapmodalComponent.prototype.dismissModal = function () {
        this.latitude = localStorage.getItem('select_lat');
        this.longitude = localStorage.getItem('select_lng');
        console.log("Dismiss => " + this.latitude + " / " + this.longitude);
        this.member.longitude = this.longitude;
        this.member.latitude = this.latitude;
        localStorage.setItem('member', JSON.stringify(this.member));
        this._modalCtrl.dismiss({ latitude: this.latitude, longitude: this.longitude });
    };
    MapmodalComponent.prototype.accept = function () {
        this.latitude = localStorage.getItem('select_lat');
        this.longitude = localStorage.getItem('select_lng');
        this.member.longitude = this.longitude;
        this.member.latitude = this.latitude;
        localStorage.setItem('member', JSON.stringify(this.member));
        console.log("Accept => " + this.latitude + " / " + this.longitude);
        this._modalCtrl.dismiss({ latitude: this.latitude, longitude: this.longitude });
    };
    MapmodalComponent.prototype.loadMap = function () {
        localStorage.setItem("select_lat", this.latitude);
        localStorage.setItem("select_lng", this.longitude);
        var latLng = new google.maps.LatLng(this.latitude, this.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var marker = new google.maps.Marker({
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
    };
    MapmodalComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
    ]; };
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], MapmodalComponent);
    return MapmodalComponent;
}());



/***/ }),

/***/ "./src/app/customer/shared/customer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/shared/customer.service.ts ***!
  \*****************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
    }
    CustomerService.prototype.addStoreStar = function (id, rating) {
        return this.http.post("https://qrdee.co/api/v2/rating/store/" + id, { star: rating });
    };
    CustomerService.prototype.addProductComment = function (id, comment) {
        return this.http.post("https://qrdee.co/api/v2/rating/product/" + id, { comment: comment });
    };
    CustomerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.myOrder = function (mem_id) {
        console.log("https://qrdee.co/api/v2/myorders/" + mem_id);
        return this.http.get("https://qrdee.co/api/v2/myorders/" + mem_id);
    };
    UserService.prototype.placeOrder = function (mem, member_cart, notes, latitude, longitude) {
        console.log(mem);
        // console.log(member_cart);
        // console.log(notes);
        // console.log(latitude);
        // console.log(longitude);
        var items = [];
        member_cart.forEach(function (e) {
            e.products.forEach(function (p) {
                items.push({
                    store_id: e.id,
                    product_id: p.id,
                    price: p.price,
                    qty: 1
                });
            });
        });
        var body = {
            member: mem,
            latitude: latitude,
            longitude: longitude,
            notes: notes,
            items: items
        };
        console.log(body);
        return this.http.post("https://qrdee.co/api/v2/orders", body);
    };
    UserService.prototype.searchStores = function (q, offset, latitude, longitude) {
        console.log("https://qrdee.co/api/v2/stores?q=" + q + "&offset=" + offset + "&latitude=" + latitude + "&longitude=" + longitude);
        return this.http.get("https://qrdee.co/api/v2/stores?q=" + q + "&offset=" + offset + "&latitude=" + latitude + "&longitude=" + longitude);
    };
    UserService.prototype.getStores = function (offset, latitude, longitude) {
        console.log("https://qrdee.co/api/v2/stores?offset=" + offset + "&latitude=" + latitude + "&longitude=" + longitude);
        return this.http.get("https://qrdee.co/api/v2/stores?offset=" + offset + "&latitude=" + latitude + "&longitude=" + longitude);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module-es5.js.map