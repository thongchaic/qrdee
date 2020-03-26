(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~products-products-module"],{

/***/ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/barcode-scanner/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: BarcodeScanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScanner", function() { return BarcodeScanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var BarcodeScanner = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE'
        };
        return _this;
    }
    BarcodeScanner.prototype.scan = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.prototype.encode = function (type, data) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "encode", {}, arguments); };
    BarcodeScanner.pluginName = "BarcodeScanner";
    BarcodeScanner.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/phonegap/phonegap-plugin-barcodescanner";
    BarcodeScanner.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
    BarcodeScanner = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BarcodeScanner);
    return BarcodeScanner;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhcmNvZGUtc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUE4R3BDLGtDQUFpQjs7O1FBQ25ELFlBQU0sR0FLRjtZQUNGLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7OztJQVVGLDZCQUFJLGFBQUMsT0FBK0I7SUFZcEMsK0JBQU0sYUFBQyxJQUFZLEVBQUUsSUFBUzs7Ozs7O0lBakNuQixjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBL0czQjtFQStHb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU2Nhbm5lck9wdGlvbnMge1xuICAvKipcbiAgICogUHJlZmVyIGZyb250IGNhbWVyYS4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAgICovXG4gIHByZWZlckZyb250Q2FtZXJhPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBmbGlwIGNhbWVyYSBidXR0b24uIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gICAqL1xuICBzaG93RmxpcENhbWVyYUJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgdG9yY2ggYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxuICAgKi9cbiAgc2hvd1RvcmNoQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzYWJsZSBhbmltYXRpb25zLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlQW5pbWF0aW9ucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3VjY2VzcyBiZWVwLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlU3VjY2Vzc0JlZXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm9tcHQgdGV4dC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHByb21wdD86IHN0cmluZztcblxuICAvKipcbiAgICogRm9ybWF0cyBzZXBhcmF0ZWQgYnkgY29tbWFzLiBEZWZhdWx0cyB0byBhbGwgZm9ybWF0cyBleGNlcHQgYFBERl80MTdgIGFuZCBgUlNTX0VYUEFOREVEYC5cbiAgICovXG4gIGZvcm1hdHM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9yaWVudGF0aW9uLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LiBDYW4gYmUgc2V0IHRvIGBwb3J0cmFpdGAgb3IgYGxhbmRzY2FwZWAuIERlZmF1bHRzIHRvIG5vbmUgc28gdGhlIHVzZXIgY2FuIHJvdGF0ZSB0aGUgcGhvbmUgYW5kIHBpY2sgYW4gb3JpZW50YXRpb24uXG4gICAqL1xuICBvcmllbnRhdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTGF1bmNoIHdpdGggdGhlIHRvcmNoIHN3aXRjaGVkIG9uIChpZiBhdmFpbGFibGUpLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgdG9yY2hPbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgc2Nhbm5lZCB0ZXh0IGZvciBYIG1zLiAwIHN1cHByZXNzZXMgaXQgZW50aXJlbHksIGRlZmF1bHQgMTUwMC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHJlc3VsdERpc3BsYXlEdXJhdGlvbj86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU2NhblJlc3VsdCB7XG4gIGZvcm1hdDpcbiAgICB8ICdRUl9DT0RFJ1xuICAgIHwgJ0RBVEFfTUFUUklYJ1xuICAgIHwgJ1VQQ19FJ1xuICAgIHwgJ1VQQ19BJ1xuICAgIHwgJ0VBTl84J1xuICAgIHwgJ0VBTl8xMydcbiAgICB8ICdDT0RFXzEyOCdcbiAgICB8ICdDT0RFXzM5J1xuICAgIHwgJ0NPREVfOTMnXG4gICAgfCAnQ09EQUJBUidcbiAgICB8ICdJVEYnXG4gICAgfCAnUlNTMTQnXG4gICAgfCAnUlNTX0VYUEFOREVEJ1xuICAgIHwgJ1BERl80MTcnXG4gICAgfCAnQVpURUMnXG4gICAgfCAnTVNJJztcbiAgY2FuY2VsbGVkOiBib29sZWFuO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQG5hbWUgQmFyY29kZSBTY2FubmVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBCYXJjb2RlIFNjYW5uZXIgUGx1Z2luIG9wZW5zIGEgY2FtZXJhIHZpZXcgYW5kIGF1dG9tYXRpY2FsbHkgc2NhbnMgYSBiYXJjb2RlLCByZXR1cm5pbmcgdGhlIGRhdGEgYmFjayB0byB5b3UuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBwaG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQmFyY29kZVNjYW5uZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9waG9uZWdhcC9waG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXIpLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2JhcmNvZGUtc2Nhbm5lci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5iYXJjb2RlU2Nhbm5lci5zY2FuKCkudGhlbihiYXJjb2RlRGF0YSA9PiB7XG4gKiAgY29uc29sZS5sb2coJ0JhcmNvZGUgZGF0YScsIGJhcmNvZGVEYXRhKTtcbiAqIH0pLmNhdGNoKGVyciA9PiB7XG4gKiBcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycik7XG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEJhcmNvZGVTY2FubmVyT3B0aW9uc1xuICogQmFyY29kZVNjYW5SZXN1bHRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdCYXJjb2RlU2Nhbm5lcicsXG4gIHBsdWdpbjogJ3Bob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5iYXJjb2RlU2Nhbm5lcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQmxhY2tCZXJyeSAxMCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFyY29kZVNjYW5uZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEVuY29kZToge1xuICAgIFRFWFRfVFlQRTogc3RyaW5nO1xuICAgIEVNQUlMX1RZUEU6IHN0cmluZztcbiAgICBQSE9ORV9UWVBFOiBzdHJpbmc7XG4gICAgU01TX1RZUEU6IHN0cmluZztcbiAgfSA9IHtcbiAgICBURVhUX1RZUEU6ICdURVhUX1RZUEUnLFxuICAgIEVNQUlMX1RZUEU6ICdFTUFJTF9UWVBFJyxcbiAgICBQSE9ORV9UWVBFOiAnUEhPTkVfVFlQRScsXG4gICAgU01TX1RZUEU6ICdTTVNfVFlQRSdcbiAgfTtcblxuICAvKipcbiAgICogT3BlbiB0aGUgYmFyY29kZSBzY2FubmVyLlxuICAgKiBAcGFyYW0ge0JhcmNvZGVTY2FubmVyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc2Nhbm5lclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc2Nhbm5lciBkYXRhLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIHNjYW4ob3B0aW9ucz86IEJhcmNvZGVTY2FubmVyT3B0aW9ucyk6IFByb21pc2U8QmFyY29kZVNjYW5SZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlcyBkYXRhIGludG8gYSBiYXJjb2RlLlxuICAgKiBOT1RFOiBub3Qgd2VsbCBzdXBwb3J0ZWQgb24gQW5kcm9pZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG9mIGVuY29kaW5nXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIERhdGEgdG8gZW5jb2RlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuY29kZSh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/cart/shared/cart.service.ts":
/*!*********************************************!*\
  !*** ./src/app/cart/shared/cart.service.ts ***!
  \*********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](localStorage.getItem('cart') ? this.getItem() : []);
    }
    CartService.prototype.getOrders = function (store_id) {
        return this.http.get("https://qrdee.co/api/v2/orders/" + store_id);
    };
    CartService.prototype.deleteOrder = function (store_id, member_id) {
        return this.http.delete("https://qrdee.co/api/v2/orders/" + store_id + "/" + member_id);
    };
    CartService.prototype.getProducts = function (store_id) {
        //alert(`https://qrdee.co/api/v2/products/${store_id}`);
        return this.http.get("https://qrdee.co/api/v2/products/" + store_id);
    };
    CartService.prototype.getStoreMaps = function (store_id) {
        return this.http.get("https://qrdee.co/api/v1/transaction_store_maps/" + store_id);
    };
    CartService.prototype.getStorePromptpay = function (store_id) {
        return this.http.get("https://qrdee.co/api/v1/store_promptpay/" + store_id);
    };
    CartService.prototype.getCart = function () {
        this.cart.next(this.getItem());
        return this.cart;
    };
    CartService.prototype.getPrice = function () {
        var cartArray = new Array();
        var price = 0;
        cartArray = this.cart.getValue() ? this.cart.getValue() : [];
        // console.log(cartArray);
        cartArray.forEach(function (product) {
            price += product['price'] * product['qty'];
        });
        return price;
    };
    CartService.prototype.addToCart = function (product) {
        if (this.checkInCart(product))
            return;
        var cartArr = this.getItem() ? this.getItem() : [];
        product.incart = 1;
        product.qty = 1;
        cartArr.push(product);
        var distinctCartArr = cartArr.filter(function (value, index, self) {
            return cartArr.map(function (item) { return item.id; }).indexOf(value.id) === index;
        });
        localStorage.setItem('cart', JSON.stringify(distinctCartArr));
    };
    CartService.prototype.addItem = function (product) {
        var cartArr = this.getItem();
        var idx = cartArr.map(function (e) { return e.id; }).indexOf(product.id);
        cartArr[idx].qty += 1;
        cartArr[idx].instock -= 1;
        localStorage.setItem('cart', JSON.stringify(cartArr));
        this.cart.next(cartArr);
    };
    CartService.prototype.removeProduct = function (product) {
        var cartArr = this.getItem();
        var idx = cartArr.map(function (e) { return e.id; }).indexOf(product.id);
        cartArr[idx].qty -= 1;
        cartArr[idx].instock += 1;
        if (cartArr[idx].qty == 0)
            cartArr.splice(idx, 1);
        localStorage.setItem('cart', JSON.stringify(cartArr));
        this.cart.next(cartArr);
        // console.log('remove');
    };
    CartService.prototype.checkInCart = function (product) {
        var cartArr = this.getItem() ? this.getItem() : [];
        var idx = cartArr.map(function (e) { return e.id; }).indexOf(product.id);
        if (idx == -1)
            return false;
        return true;
    };
    CartService.prototype.getItem = function () {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
    };
    CartService.prototype.clearCart = function () {
        localStorage.removeItem('cart');
        this.cart.next(null);
    };
    CartService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CartService);
    return CartService;
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




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/products";
    }
    ProductService.prototype.getAll = function () {
        return this.http.get("" + this.baseUrl);
    };
    ProductService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + "/" + id);
    };
    ProductService.prototype.getUser = function () {
        return this.http.get("https://qrdee.co/api/v1/users");
    };
    ProductService.prototype.getAllproduct = function (id) {
        // console.log('https://qrdee.co/api/v1/transaction_code/${code_randoms}');
        return this.http.get("https://qrdee.co/api/v1/allproduct/" + id);
    };
    ProductService.prototype.createProduct = function (data) {
        return this.http.post("" + this.baseUrl, this.createFormData(data));
    };
    ProductService.prototype.updateProduct = function (data, id) {
        return this.http.post(this.baseUrl + "/update_product/" + id, this.createFormData(data));
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.baseUrl + "/" + id);
    };
    ProductService.prototype.getByProductCode = function (product_code) {
        return this.http.get(this.baseUrl + "?t=product_code&code=" + product_code);
    };
    ProductService.prototype.getProductCategory = function () {
        return this.http.get("https://qrdee.co/api/v1/ref?type=produtc_types");
    };
    ProductService.prototype.search = function (term, page) {
        console.log(term);
        //return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
        return this.http.get(this.baseUrl + "?t=search&query=" + term + "&page=" + page);
    };
    ProductService.prototype.searchs = function (id, term, page) {
        // console.log(id);
        console.log(term);
        // return this.http.get<any>(`https://qrdee.co/api/v1/search_products?f=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
        // return this.http.get<any>(`https://qrdee.co/api/v1/search_products/${id}?query=${term}&page=${page}`);
        return this.http.get("https://qrdee.co/api/v1/search_products/" + id + "/?=search&query=" + term + "&page=" + page);
        // https://qrdee.co/api/v1/search_products/25/?=search&query=สมุด&page=1
        // https://qrdee.co/api/v1/search_products/25?&query=รองเท้าแก้ว
    };
    ProductService.prototype.getProductStore_id = function (id) {
        // console.log(`https://qrdee.co/api/v1/store_id/${id}`); 
        return this.http.get("https://qrdee.co/api/v1/store_id/" + id);
    };
    ProductService.prototype.getStoredistances = function (latitude, longitude) {
        console.log("http://qrdee.co/api/v1/diss?latitude=" + latitude + "&longitude=" + longitude);
        return this.http.get("http://qrdee.co/api/v1/diss?latitude=" + latitude + "&longitude=" + longitude);
    };
    ProductService.prototype.getAllS = function (id) {
        return this.http.get("https://qrdee.co/api/v1/product_store/" + id);
    };
    // searchEntries(term, page) {
    //   // let queryString = isNaN(term) ? `t=search_code&query=${term == '' ? true : term}&page=${page}` ? `?t=search&query=${term == '' ? true : term}&page=${page}`: 
    //   // console.log(isNaN(term));
    //   return this.http.get<any>(`${this.baseUrl}?t=search&query=${term == '' || term == 'null' ? true : term}&page=${page}`);
    // }
    ProductService.prototype.createFormData = function (data) {
        var fd = new FormData();
        // if(data.image) fd.append('thumbnail', data.image);
        // if(data.thumbnail) fd.append('thumbnail', data.thumbnail);
        if (data.imageData)
            fd.append('thumbnail', data.imageData);
        fd.append('code_product', data.code_product);
        fd.append('product_type_id', data.product_type_id);
        fd.append('product_th', data.product_th);
        fd.append('details_th', data.details_th);
        fd.append('price', data.price);
        fd.append('cost', data.cost);
        fd.append('instock', data.instock);
        return fd;
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
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
//# sourceMappingURL=default~cart-cart-module~products-products-module-es5.js.map