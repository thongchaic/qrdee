(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["riders-riders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/riders/riders.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/riders/riders.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>คำขอให้ส่งสินค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-item lines=\"none\">\n    <ion-button size=\"small\" slot=\"end\" icon-only expand=\"block\" (click)=\"loadRiderOrders()\">\n      <ion-icon  color=\"success\"  name=\"refresh\" ></ion-icon>\n    </ion-button>\n  </ion-item>\n\n\n\n\n  <ion-card  no-margin no-padding *ngFor=\"let order of orders\"  >\n    <ion-row>\n      <ion-col size=\"2\" (click)=\"viewOrder(order);\">\n        <ion-thumbnail style=\"height: 100%; width: 100%; border-radius: 2px;\">\n          <img *ngIf=\"order.store.store_pic\" [src]=\"'https://qrdee.co/app/'+order.store.store_pic\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n          <img *ngIf=\"!order.store.store_pic\" src=\"/assets/noimg.png\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n        </ion-thumbnail>\n      </ion-col>\n  \n      <ion-col size=\"6\" style=\"line-height: 10px;\" (click)=\"viewOrder(product);\">\n        <p no-padding>ร้าน {{ order.store.store_name }} </p>\n        <small no-padding>ค่าส่ง <ion-badge color=\"danger\">{{ order.store.delivery_price | number }} บาท</ion-badge></small><br>\n        <small no-padding>ระยะทาง {{ order.distance | number }} กม. </small><br>\n        <small *ngIf=\"order.items.length>0\" no-padding>เมื่อ {{ order.items[0].requested_at }}</small><br>\n\n      </ion-col>\n      <ion-col size=\"4\"><br>\n        <ion-button icon-only (click)=\"acceptOrder(order)\">\n          <ion-icon slot=\"icon-only\" size=\"small\" clear expand=\"block\" name=\"bicycle\"></ion-icon>\n        </ion-button>\n        <ion-button  (click)=\"viewOrder(order)\">\n          <ion-icon slot=\"icon-only\" size=\"small\" color=\"success\" expand=\"block\" name=\"eye\" ></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/riders/routes/routes.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/riders/routes/routes.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>เส้นทางส่งสินค้า</ion-title>\n    <ion-button *ngIf=\"type == 0\" fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"forceDissmiss(0);\">\n      <ion-icon name=\"ios-arrow-back\"></ion-icon>กลับ\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-label position=\"floating\">เส้นทางส่งสินค้า</ion-label>\n  <div #map id=\"map\" style=\"height:250px;\"></div>\n\n\n  <ion-card  no-margin no-padding >\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-thumbnail style=\"height: 100%; width: 100%; border-radius: 2px;\">\n          <img *ngIf=\"order.store.store_pic\" [src]=\"'https://qrdee.co/app/'+order.store.store_pic\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n          <img *ngIf=\"!order.store.store_pic\" src=\"/assets/noimg.png\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n        </ion-thumbnail>\n      </ion-col>\n  \n      <ion-col size=\"8\" style=\"line-height: 10px;\" >\n        <p no-padding>ร้าน {{ order.store.store_name }} </p>\n        <small no-padding>ค่าส่ง <ion-badge color=\"danger\">{{ order.store.delivery_price | number }} บาท</ion-badge></small><br>\n        <small no-padding>โทรศัพท์ {{ order.store.mobile_number }}</small><br>\n      </ion-col>\n      <ion-col size=\"2\"><br>\n        <ion-button icon-only (click)=\"startCall(order.store.mobile_number)\">\n          <ion-icon slot=\"icon-only\" size=\"small\" clear expand=\"block\" name=\"call\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card  no-margin no-padding >\n    <ion-row>\n      <ion-col size=\"2\" >\n        <ion-thumbnail style=\"height: 100%; width: 100%; border-radius: 2px;\">\n          <img src=\"/assets/noimg.png\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n        </ion-thumbnail>\n      </ion-col>\n  \n      <ion-col size=\"8\" style=\"line-height: 10px;\" >\n        <p no-padding>ผู้รับ {{ order.member.firstname }} {{ order.member.lastname }}</p>\n        <small no-padding>โทรศัพท์ {{ order.member.mobile_number }}</small><br>\n        <!-- <small no-padding>ระยะทาง {{ order.distance | number }} กม. </small><br> -->\n      </ion-col>\n      <ion-col size=\"2\"><br>\n        <ion-button icon-only (click)=\"startCall(order.member.mobile_number)\">\n          <ion-icon slot=\"icon-only\" size=\"small\" clear expand=\"block\" name=\"call\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-label *ngIf=\"prompt_payload != ''\" position=\"floating\">QRCode รับชำระเงิน</ion-label>\n  <ion-card>\n    <qrcode  *ngIf=\"prompt_payload != ''\" [qrdata]=\"prompt_payload\" [size]=\"256\" [level]=\"'M'\"></qrcode>\n  </ion-card>\n<br><br><br>\n\n</ion-content>\n\n\n<ion-footer *ngIf=\"type != 0\" style=\"background:#FFFFFF;\">\n  <ion-toolbar>\n    <ion-button  expand=\"block\" color=\"primary\" (click)=\"finishedDelivery();\">ส่งสินค้าสำเร็จ</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/riders/rider.service.ts":
/*!*****************************************!*\
  !*** ./src/app/riders/rider.service.ts ***!
  \*****************************************/
/*! exports provided: RiderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiderService", function() { return RiderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RiderService = class RiderService {
    constructor(http) {
        this.http = http;
    }
    loadRideOrders() {
        return this.http.get(`https://qrdee.co/api/v2/rider`);
    }
    acceptToRide(items, type) {
        let body = {
            'ids': items.map(i => i.id),
            'type': type
        };
        console.log(body);
        return this.http.put(`https://qrdee.co/api/v2/rider`, body);
    }
};
RiderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RiderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RiderService);



/***/ }),

/***/ "./src/app/riders/riders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/riders/riders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RidersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidersPageRoutingModule", function() { return RidersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _riders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riders.page */ "./src/app/riders/riders.page.ts");




const routes = [
    {
        path: '',
        component: _riders_page__WEBPACK_IMPORTED_MODULE_3__["RidersPage"]
    }
];
let RidersPageRoutingModule = class RidersPageRoutingModule {
};
RidersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RidersPageRoutingModule);



/***/ }),

/***/ "./src/app/riders/riders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/riders/riders.module.ts ***!
  \*****************************************/
/*! exports provided: RidersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidersPageModule", function() { return RidersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _riders_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./riders-routing.module */ "./src/app/riders/riders-routing.module.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _riders_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./riders.page */ "./src/app/riders/riders.page.ts");
/* harmony import */ var _routes_routes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/routes.component */ "./src/app/riders/routes/routes.component.ts");










let RidersPageModule = class RidersPageModule {
};
RidersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _riders_routing_module__WEBPACK_IMPORTED_MODULE_6__["RidersPageRoutingModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"]
        ],
        declarations: [
            _riders_page__WEBPACK_IMPORTED_MODULE_8__["RidersPage"],
            _routes_routes_component__WEBPACK_IMPORTED_MODULE_9__["RoutesComponent"]
        ],
        entryComponents: [
            _routes_routes_component__WEBPACK_IMPORTED_MODULE_9__["RoutesComponent"]
        ],
        providers: [
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]
        ]
    })
], RidersPageModule);



/***/ }),

/***/ "./src/app/riders/riders.page.scss":
/*!*****************************************!*\
  !*** ./src/app/riders/riders.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card, card-ios, card-md {\n  margin-top: 2px  !important;\n  margin-bottom: 2px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9yaWRlcnMvcmlkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDJCQUEyQjtFQUMzQiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JpZGVycy9yaWRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsIGNhcmQtaW9zLCBjYXJkLW1kIHtcblx0bWFyZ2luLXRvcDogMnB4ICAhaW1wb3J0YW50O1xuXHRtYXJnaW4tYm90dG9tOiAycHggIWltcG9ydGFudDtcblx0Ly9tYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG5cdC8vbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/riders/riders.page.ts":
/*!***************************************!*\
  !*** ./src/app/riders/riders.page.ts ***!
  \***************************************/
/*! exports provided: RidersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RidersPage", function() { return RidersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rider.service */ "./src/app/riders/rider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _routes_routes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/routes.component */ "./src/app/riders/routes/routes.component.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");








let RidersPage = class RidersPage {
    constructor(rider, _loading, _modal, _alert, _toast) {
        this.rider = rider;
        this._loading = _loading;
        this._modal = _modal;
        this._alert = _alert;
        this._toast = _toast;
        this.orders = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.loadRiderOrders();
    }
    loadRiderOrders() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this._loading.create();
            yield loading.present();
            this.rider.loadRideOrders().subscribe((data) => {
                loading.dismiss();
                console.log(data);
                this.orders = data;
            }, err => {
                loading.dismiss();
                console.log(err);
            });
        });
    }
    acceptOrder(order) {
        console.log("accept...");
        this._alert.showAlert({
            header: `ยืนยันรับส่งสินค้า`,
            sub_header: 'ถ้ายืนยันจะไม่สามารถยกเลิกหน้าที่ส่งสินค้าได้',
            message: '',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: () => {
                        this._toast.showToast('ยกเลิกการส่ง', 'top');
                        this.loadRiderOrders();
                    },
                    role: 'cancel',
                },
                {
                    text: 'ตกลง',
                    handler: () => {
                        this.rider.acceptToRide(order.items, 1).subscribe((data) => {
                            console.log(data);
                            if (data.code < 0) {
                                alert("รายการส่งสินค้านี้ถูกจองไปแล้ว");
                                this.loadRiderOrders();
                            }
                            else {
                                this.dispRouth(order, 1);
                            }
                        }, err => {
                            console.log(err);
                        });
                    }
                }
            ]
        });
    }
    viewOrder(order) {
        console.log("view...");
        this.dispRouth(order, 0);
    }
    dispRouth(order, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this._modal.create({
                component: _routes_routes_component__WEBPACK_IMPORTED_MODULE_4__["RoutesComponent"],
                componentProps: {
                    'order': order,
                    'type': type
                }
            });
            modal.onDidDismiss()
                .then(status => {
                this.loadRiderOrders();
            });
            return yield modal.present();
        });
    }
};
RidersPage.ctorParameters = () => [
    { type: _rider_service__WEBPACK_IMPORTED_MODULE_2__["RiderService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
RidersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-riders',
        template: __webpack_require__(/*! raw-loader!./riders.page.html */ "./node_modules/raw-loader/index.js!./src/app/riders/riders.page.html"),
        styles: [__webpack_require__(/*! ./riders.page.scss */ "./src/app/riders/riders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rider_service__WEBPACK_IMPORTED_MODULE_2__["RiderService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]])
], RidersPage);



/***/ }),

/***/ "./src/app/riders/routes/routes.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/riders/routes/routes.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card, card-ios, card-md {\n  margin-top: 2px  !important;\n  margin-bottom: 2px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9yaWRlcnMvcm91dGVzL3JvdXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDJCQUEyQjtFQUMzQiw2QkFBNkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JpZGVycy9yb3V0ZXMvcm91dGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQsIGNhcmQtaW9zLCBjYXJkLW1kIHtcblx0bWFyZ2luLXRvcDogMnB4ICAhaW1wb3J0YW50O1xuXHRtYXJnaW4tYm90dG9tOiAycHggIWltcG9ydGFudDtcblx0Ly9tYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG5cdC8vbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/riders/routes/routes.component.ts":
/*!***************************************************!*\
  !*** ./src/app/riders/routes/routes.component.ts ***!
  \***************************************************/
/*! exports provided: RoutesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesComponent", function() { return RoutesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/transaction.service */ "./src/app/shared/services/transaction.service.ts");
/* harmony import */ var _rider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rider.service */ "./src/app/riders/rider.service.ts");






let RoutesComponent = class RoutesComponent {
    constructor(_modal, _call, _transaction, _rider) {
        this._modal = _modal;
        this._call = _call;
        this._transaction = _transaction;
        this._rider = _rider;
        this.prompt_payload = '';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log(this.type);
        console.log(this.order);
        let total_price = this.calPrice();
        if (total_price < this.order.store.free_delivery_price) {
            total_price += this.order.store.delivery_price;
        }
        console.log("GenQR=>", this.order.store.promptpay, " : ", total_price);
        this._transaction.genQR(this.order.store.promptpay, total_price).subscribe((data) => {
            console.log(data);
            this.prompt_payload = data.prompt_payload;
        }, err => {
        });
        this.loadMap();
    }
    calPrice() {
        let total_price = 0;
        this.order.items.forEach(e => {
            total_price += (e.price * e.qty);
        });
        return total_price;
    }
    loadMap() {
        let latLng = new google.maps.LatLng(this.order.store.latitude, this.order.store.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 12,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        let store_marker = new google.maps.Marker({
            map: this.map,
            label: "ร้าน",
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        let rider_marker = new google.maps.Marker({
            map: this.map,
            label: "ผู้รับ",
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(this.order.member.latitude, this.order.member.longitude)
        });
    }
    startCall(mobile_number) {
        this._call.callNumber(`${mobile_number}`, true)
            .then(res => { })
            .catch(err => { alert(JSON.stringify(err)); });
    }
    finishedDelivery() {
        this._rider.acceptToRide(this.order.items, 2).subscribe((data) => {
            this.forceDissmiss(0);
        }, err => {
            alert("บันทึกข้อมูลไม่ได้ โปรดลองอีกครั้ง!");
            //this.forceDissmiss(-1);
        });
    }
    forceDissmiss(status) {
        this._modal.dismiss(status);
    }
};
RoutesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"] },
    { type: _shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"] },
    { type: _rider_service__WEBPACK_IMPORTED_MODULE_5__["RiderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], RoutesComponent.prototype, "mapElement", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('type'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RoutesComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('order'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RoutesComponent.prototype, "order", void 0);
RoutesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-routes',
        template: __webpack_require__(/*! raw-loader!./routes.component.html */ "./node_modules/raw-loader/index.js!./src/app/riders/routes/routes.component.html"),
        styles: [__webpack_require__(/*! ./routes.component.scss */ "./src/app/riders/routes/routes.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"],
        _shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"],
        _rider_service__WEBPACK_IMPORTED_MODULE_5__["RiderService"]])
], RoutesComponent);



/***/ }),

/***/ "./src/app/shared/services/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/alert.service.ts ***!
  \**************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    showAlert(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: options.header,
                subHeader: options.sub_header,
                message: options.message,
                buttons: options.buttons
            });
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlertService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    showToast(message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: position,
                duration: 1000,
                color: 'dark'
            });
            toast.present();
        });
    }
    showLongToast(message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: position,
                duration: 30000,
                color: 'dark'
            });
            toast.present();
        });
    }
    showToasts(message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: position,
                duration: 1000,
                color: '#FFFFFF'
            });
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ToastService);



/***/ }),

/***/ "./src/app/shared/services/transaction.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/transaction.service.ts ***!
  \********************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TransactionService = class TransactionService {
    constructor(http) {
        this.http = http;
    }
    ////////////////// v2 ///////////////////
    genQR(promptpay, price) {
        return this.http.get(`https://qrdee.co/api/v2/qr?promptpay=${promptpay}&price=${price}`);
    }
    insertTransaction(products, prompt_payload, price, store_id) {
        const body = {
            price: price,
            prompt_payload: prompt_payload,
            products: products
        };
        return this.http.post(`https://qrdee.co/api/v2/trnqr/${store_id}`, body);
    }
    getOrders(store_id) {
        return this.http.get(`https://qrdee.co/api/v2/orders/${store_id}`);
    }
};
TransactionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TransactionService);



/***/ })

}]);
//# sourceMappingURL=riders-riders-module-es2015.js.map