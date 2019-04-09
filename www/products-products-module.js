(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/list/list.component.html":
/*!***************************************************!*\
  !*** ./src/app/products/list/list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-input type=\"search\" inputmode=\"text\" placeholder=\"ค้นหาสินค้า\" (keyup)=\"search($event.target.value)\"></ion-input>\r\n<ion-list *ngIf=\"products?.length > 0\">\r\n  <ion-list-header>\r\n    <ion-label>รายการค้นหา</ion-label>\r\n  </ion-list-header>\r\n  <ion-item *ngFor=\"let product of products\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"\">\r\n    </ion-avatar>\r\n    {{ product.product_th }}\r\n    <ion-badge color=\"primary\" slot=\"end\" *ngIf=\"product.instock > 0\">{{ product.instock }}</ion-badge>\r\n    <ion-badge color=\"danger\" slot=\"end\" *ngIf=\"product.instock == 0\">หมดสต๊อค</ion-badge>\r\n    <ion-button fill=\"clear\" color=\"success\" slot=\"end\" *ngIf=\"product.instock > 0\" (click)=\"addToCart(product);\">\r\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n    </ion-button>\r\n    \r\n  </ion-item>\r\n\r\n  <ion-infinite-scroll threshold=\"10%\" (ionInfinite)=\"loadData($event.target)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-list>"

/***/ }),

/***/ "./src/app/products/list/list.component.scss":
/*!***************************************************!*\
  !*** ./src/app/products/list/list.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  --padding-left: 10px;\n  --padding-right: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvbGlzdC9DOlxcRGV2XFxxcmRlZS9zcmNcXGFwcFxccHJvZHVjdHNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBZTtFQUNmLHFCQUFnQjtFQUNoQixxQkFBZ0I7RUFDaEIsbUJBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/products/list/list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/list/list.component.ts ***!
  \*************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.searchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addToCartChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loadDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent.prototype.search = function (query) {
        this.searchChange.emit(query);
    };
    ListComponent.prototype.addToCart = function (product) {
        this.addToCartChange.emit(product);
    };
    ListComponent.prototype.loadData = function (infiniteScroll) {
        this.loadDataChange.emit(infiniteScroll);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('products'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "products", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "searchChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "addToCartChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListComponent.prototype, "loadDataChange", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/products/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/products/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list/list.component */ "./src/app/products/list/list.component.ts");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cart/shared/cart.service */ "./src/app/cart/shared/cart.service.ts");










var routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }
];
var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"]
            ],
            providers: [
                _shared_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
                _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_9__["CartService"]
            ]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());



/***/ }),

/***/ "./src/app/products/products.page.html":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>สินค้า</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-list \r\n    [products]=\"products\" \r\n    (searchChange)=\"search($event)\" \r\n    (addToCartChange)=\"addToCart($event)\" \r\n    (loadDataChange)=\"loadData($event)\"></app-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart/shared/cart.service */ "./src/app/cart/shared/cart.service.ts");






var ProductsPage = /** @class */ (function () {
    function ProductsPage(productService, cartService, toastService) {
        var _this = this;
        this.productService = productService;
        this.cartService = cartService;
        this.toastService = toastService;
        this.products = [];
        this.page = 1;
        this.$searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]('');
        this.productService.search(this.$searchTerm, this.page).subscribe(function (res) {
            _this.products = res.data;
            _this.page = 1;
        });
    }
    ProductsPage.prototype.ngOnInit = function () {
    };
    ProductsPage.prototype.search = function (query) {
        this.$searchTerm.next(query);
    };
    ProductsPage.prototype.addToCart = function (product) {
        this.cartService.addToCart(product);
        this.toastService.showToast("\u0E40\u0E1E\u0E34\u0E48\u0E21 " + product.product_th + " \u0E25\u0E07\u0E43\u0E19\u0E15\u0E30\u0E01\u0E23\u0E49\u0E32", 'bottom');
    };
    ProductsPage.prototype.loadData = function (infiniteScroll) {
        var _this = this;
        this.page++;
        this.productService.search(this.$searchTerm, this.page).subscribe(function (res) {
            if (Object.keys(res).length === 0 && res.constructor === Object) {
                infiniteScroll.disabled = true;
                return;
            }
            setTimeout(function () {
                _this.products = _this.products.concat(res.data);
                infiniteScroll.complete();
                if (_this.page >= res['last_page']) {
                    infiniteScroll.disabled = true;
                }
            }, 500);
        });
    };
    ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.page.html */ "./src/app/products/products.page.html"),
            styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
    ], ProductsPage);
    return ProductsPage;
}());



/***/ }),

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/products";
    }
    ProductService.prototype.getAll = function () {
        return this.http.get("" + this.baseUrl);
    };
    ProductService.prototype.get = function (id) {
    };
    ProductService.prototype.search = function (terms, page) {
        var _this = this;
        return terms.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.searchEntries(term, page); }));
    };
    ProductService.prototype.searchEntries = function (term, page) {
        return this.http.get(this.baseUrl + "?t=search&query=" + term + "&page=" + page);
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map