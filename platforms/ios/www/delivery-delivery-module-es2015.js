(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-delivery-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delivery/delivery.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delivery/delivery.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>delivery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/delivery/delivery-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/delivery/delivery-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DeliveryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPageRoutingModule", function() { return DeliveryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delivery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery.page */ "./src/app/delivery/delivery.page.ts");




const routes = [
    {
        path: '',
        component: _delivery_page__WEBPACK_IMPORTED_MODULE_3__["DeliveryPage"]
    }
];
let DeliveryPageRoutingModule = class DeliveryPageRoutingModule {
};
DeliveryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeliveryPageRoutingModule);



/***/ }),

/***/ "./src/app/delivery/delivery.module.ts":
/*!*********************************************!*\
  !*** ./src/app/delivery/delivery.module.ts ***!
  \*********************************************/
/*! exports provided: DeliveryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPageModule", function() { return DeliveryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _delivery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-routing.module */ "./src/app/delivery/delivery-routing.module.ts");
/* harmony import */ var _delivery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery.page */ "./src/app/delivery/delivery.page.ts");







let DeliveryPageModule = class DeliveryPageModule {
};
DeliveryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _delivery_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliveryPageRoutingModule"]
        ],
        declarations: [_delivery_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryPage"]]
    })
], DeliveryPageModule);



/***/ }),

/***/ "./src/app/delivery/delivery.page.scss":
/*!*********************************************!*\
  !*** ./src/app/delivery/delivery.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5L2RlbGl2ZXJ5LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/delivery/delivery.page.ts":
/*!*******************************************!*\
  !*** ./src/app/delivery/delivery.page.ts ***!
  \*******************************************/
/*! exports provided: DeliveryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPage", function() { return DeliveryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DeliveryPage = class DeliveryPage {
    constructor() { }
    ngOnInit() {
    }
};
DeliveryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery',
        template: __webpack_require__(/*! raw-loader!./delivery.page.html */ "./node_modules/raw-loader/index.js!./src/app/delivery/delivery.page.html"),
        styles: [__webpack_require__(/*! ./delivery.page.scss */ "./src/app/delivery/delivery.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DeliveryPage);



/***/ })

}]);
//# sourceMappingURL=delivery-delivery-module-es2015.js.map