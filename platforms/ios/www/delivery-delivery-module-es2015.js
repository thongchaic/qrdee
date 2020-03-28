(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-delivery-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/delivery/delivery.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/delivery/delivery.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>delivery</ion-title>\n    <ion-buttons>\n      <ion-back-button defaultHref=\"cart\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card style=\"background:#FFFFFF;\">\n    <ion-card-content>\n      <ion-label position=\"floating\">ตำแหน่งผู้รับ</ion-label>\n      <div #mapElement style=\"height:250px;\"></div>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");




let DeliveryPage = class DeliveryPage {
    constructor(route, router, geolocation) {
        this.route = route;
        this.router = router;
        this.geolocation = geolocation;
        this.latitude = 14.8718084;
        this.longitude = 103.4962797;
        this.mylatitude = 14.8718084;
        this.mylongitude = 103.4962797;
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.order = JSON.parse(params.special);
                alert(JSON.stringify(this.order));
                this.latitude = this.order.member.latitude;
                this.longitude = this.order.member.longitude;
            }
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.mylatitude = resp.coords.latitude;
            this.mylongitude = resp.coords.longitude;
        });
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
        marker.addListener('dragend', function () {
            this.latitude = marker.getPosition().lat();
            this.longitude = marker.getPosition().lng();
            this.map.setCenter(marker.getPosition());
        });
        let mymarker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(this.mylatitude, this.mylongitude),
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }
        });
    }
};
DeliveryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DeliveryPage.prototype, "mapElement", void 0);
DeliveryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery',
        template: __webpack_require__(/*! raw-loader!./delivery.page.html */ "./node_modules/raw-loader/index.js!./src/app/delivery/delivery.page.html"),
        styles: [__webpack_require__(/*! ./delivery.page.scss */ "./src/app/delivery/delivery.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]])
], DeliveryPage);



/***/ })

}]);
//# sourceMappingURL=delivery-delivery-module-es2015.js.map