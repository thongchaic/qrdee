(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-logistic-store-logistic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/store-logistic/store-logistic.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store-logistic/store-logistic.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>เรียกคนส่งสินค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n<ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n            <ion-item *ngFor=\"let product_logistic of product_logistics\">\n                <img src=\"assets/images/map_logistic.png\" class=\"img_store_logistic\">\n                  <p class=\"font_size\">\n                  {{product_logistic.firstname}}\n                  <br> \n                  <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>\n                  {{product_logistic.delivery_status.delivery_status_th}}<br>\n                  {{product_logistic.delivery_type.delivery_type_th}} <br>\n                  โทร: {{product_logistic.mobile_number}}<br>\n                </p>\n              </ion-item> \n          <br><br><br><br><br><br>\n        </ion-col> \n      </ion-row>\n  </ion-grid>  \n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var StoreLogisticService = /** @class */ (function () {
    function StoreLogisticService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/store_id";
    }
    StoreLogisticService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + "/" + id);
    };
    StoreLogisticService.prototype.gets = function (id) {
        return this.http.get("http://qrdee.co/api/v1/product_logistic");
    };
    // getStoreProductDistance(latitude,longitude) {
    //   console.log(`http://qrdee.co/api/v1/map_delivery?latitude=${latitude}&longitude=${longitude}`);
    //     return this.http.get(`http://qrdee.co/api/v1/map_delivery?latitude=${latitude}&longitude=${longitude}`);
    //   }
    StoreLogisticService.prototype.getProductLogistic = function () {
        return this.http.get("http://qrdee.co/api/v1/product_logistic");
    };
    StoreLogisticService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    StoreLogisticService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StoreLogisticService);
    return StoreLogisticService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_store_logistic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/store-logistic.service */ "./src/app/store-logistic/shared/store-logistic.service.ts");
/* harmony import */ var _store_logistic_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store-logistic.page */ "./src/app/store-logistic/store-logistic.page.ts");









var routes = [
    {
        path: '',
        component: _store_logistic_page__WEBPACK_IMPORTED_MODULE_8__["StoreLogisticPage"]
    }
];
var StoreLogisticPageModule = /** @class */ (function () {
    function StoreLogisticPageModule() {
    }
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
    return StoreLogisticPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_store_logistic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/store-logistic.service */ "./src/app/store-logistic/shared/store-logistic.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import { Http, Headers, RequestOptions } from '@angular/http';

var StoreLogisticPage = /** @class */ (function () {
    function StoreLogisticPage(route, router, http, storeLogisticService) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.storeLogisticService = storeLogisticService;
    }
    StoreLogisticPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    StoreLogisticPage.prototype.loadData = function () {
        var _this = this;
        this.storeLogisticService.getProductLogistic().subscribe(function (res) {
            // console.log(res);
            _this.product_logistics = res.data;
            // this.delivery_types = res.data[0].delivery_type.delivery_type_th;
            // this.delivery_statuss = res.delivery_status.delivery_status_th;
            // this.mobile_numbers = res.mobile_number;
            // console.log('ชื่อผู้ขนส่ง',this.firstnames);
            // console.log('สถานะขนส่ง',this.delivery_statuss);
            // console.log('ประเภทขนส่ง',this.delivery_types);
            // console.log('เบอร์โทร',this.firstna
            console.log(_this.product_logistics);
        });
        // this.storeLogisticService.getProductLogistic().subscribe((data:any) => this.product_logistics = data.data); 
        // console.log(this.product_logistics);
    };
    StoreLogisticPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _shared_store_logistic_service__WEBPACK_IMPORTED_MODULE_2__["StoreLogisticService"] }
    ]; };
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
    return StoreLogisticPage;
}());



/***/ })

}]);
//# sourceMappingURL=store-logistic-store-logistic-module-es5.js.map