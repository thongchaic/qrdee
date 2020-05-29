(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["riders-riders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/riders/riders.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/riders/riders.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>คำขอให้ส่งสินค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-item lines=\"none\">\n    <ion-button size=\"small\" slot=\"end\" icon-only expand=\"block\" (click)=\"loadRiderOrders()\">\n      <ion-icon  color=\"success\"  name=\"refresh\" ></ion-icon>\n    </ion-button>\n  </ion-item>\n\n\n\n\n  <ion-card  no-margin no-padding *ngFor=\"let order of orders\"  >\n    <ion-row>\n      <ion-col size=\"2\" (click)=\"viewOrder(order);\">\n        <ion-thumbnail style=\"height: 100%; width: 100%; border-radius: 2px;\">\n          <img *ngIf=\"order.store.store_pic\" [src]=\"'https://qrdee.co/app/'+order.store.store_pic\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n          <img *ngIf=\"!order.store.store_pic\" src=\"/assets/noimg.png\" style=\"height: 100%; width: 100%; border-radius: 4px;\">\n        </ion-thumbnail>\n      </ion-col>\n  \n      <ion-col size=\"6\" style=\"line-height: 10px;\" (click)=\"viewOrder(order);\">\n        <p no-padding>ร้าน {{ order.store.store_name }} </p>\n        <small no-padding>ค่าส่ง <ion-badge color=\"danger\">{{ order.store.delivery_price | number }} บาท</ion-badge></small><br>\n        <small no-padding>ระยะทาง {{ order.distance | number }} กม. </small><br>\n        <small *ngIf=\"order.items.length>0\" no-padding>เมื่อ {{ order.items[0].requested_at }}</small><br>\n\n      </ion-col>\n      <ion-col size=\"4\"><br>\n        <ion-button icon-only (click)=\"acceptOrder(order)\">\n          <ion-icon slot=\"icon-only\" size=\"small\" clear expand=\"block\" name=\"bicycle\"></ion-icon>\n        </ion-button>\n        <ion-button  (click)=\"viewOrder(order)\">\n          <ion-icon slot=\"icon-only\" size=\"small\" color=\"success\" expand=\"block\" name=\"eye\" ></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n\n\n\n\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RiderService = /** @class */ (function () {
    function RiderService(http) {
        this.http = http;
    }
    RiderService.prototype.loadRideOrders = function () {
        return this.http.get("https://qrdee.co/api/v2/rider");
    };
    RiderService.prototype.acceptToRide = function (items, type) {
        var body = {
            'ids': items.map(function (i) { return i.id; }),
            'type': type
        };
        console.log(body);
        return this.http.put("https://qrdee.co/api/v2/rider", body);
    };
    RiderService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RiderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RiderService);
    return RiderService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _riders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riders.page */ "./src/app/riders/riders.page.ts");




var routes = [
    {
        path: '',
        component: _riders_page__WEBPACK_IMPORTED_MODULE_3__["RidersPage"]
    }
];
var RidersPageRoutingModule = /** @class */ (function () {
    function RidersPageRoutingModule() {
    }
    RidersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RidersPageRoutingModule);
    return RidersPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _riders_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./riders-routing.module */ "./src/app/riders/riders-routing.module.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var ionic_mqtt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-mqtt */ "./node_modules/ionic-mqtt/dist/index.js");
/* harmony import */ var _riders_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./riders.page */ "./src/app/riders/riders.page.ts");
/* harmony import */ var _routes_routes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/routes.component */ "./src/app/riders/routes/routes.component.ts");











var RidersPageModule = /** @class */ (function () {
    function RidersPageModule() {
    }
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
                _riders_page__WEBPACK_IMPORTED_MODULE_9__["RidersPage"],
                _routes_routes_component__WEBPACK_IMPORTED_MODULE_10__["RoutesComponent"]
            ],
            entryComponents: [
                _routes_routes_component__WEBPACK_IMPORTED_MODULE_10__["RoutesComponent"]
            ],
            providers: [
                ionic_mqtt__WEBPACK_IMPORTED_MODULE_8__["MQTTService"],
                _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"]
            ]
        })
    ], RidersPageModule);
    return RidersPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rider.service */ "./src/app/riders/rider.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _routes_routes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/routes.component */ "./src/app/riders/routes/routes.component.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var ionic_mqtt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-mqtt */ "./node_modules/ionic-mqtt/dist/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");










var RidersPage = /** @class */ (function () {
    function RidersPage(rider, _loading, _modal, _alert, _toast, mqttService) {
        this.rider = rider;
        this._loading = _loading;
        this._modal = _modal;
        this._alert = _alert;
        this._toast = _toast;
        this.mqttService = mqttService;
        this.orders = [];
        this.isView = false;
    }
    RidersPage.prototype.ngOnInit = function () {
        //'/qrdee/riders/broadcast'
    };
    RidersPage.prototype.ionViewDidEnter = function () {
        this.mqttConnect();
        this.loadRiderOrders();
    };
    RidersPage.prototype.mqttConnect = function () {
        var _this = this;
        if (this._mqttClient == null) {
            var TOPIC = [];
            var MQTT_CONFIG = {
                host: "qrdee.co",
                port: 9001,
                username: "miot",
                password: "SrruMIoT@2019",
                protocol: "ws",
                path: "/ws",
                clientId: Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])()
            };
            TOPIC = ["/qrdee/riders/broadcast"];
            console.log("Connecting to mqtt....", TOPIC);
            console.log(MQTT_CONFIG);
            try {
                this._mqttClient = this.mqttService.loadingMqtt(function (lost) {
                    _this._onConnectionLost(lost);
                }, function (arrived) {
                    _this._onMessageArrived(arrived);
                }, TOPIC, MQTT_CONFIG);
            }
            catch (ee) {
                console.log("MQTT connect errr....");
                this._mqttClient = null;
            }
        }
    };
    RidersPage.prototype._onMessageArrived = function (message) {
        console.log(message);
        if (!this.isView) {
            this.loadRiderOrders();
        }
    };
    RidersPage.prototype._onConnectionLost = function (resp) {
        this._mqttClient == null;
    };
    RidersPage.prototype.loadRiderOrders = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mqttConnect();
                        return [4 /*yield*/, this._loading.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.rider.loadRideOrders().subscribe(function (data) {
                            loading.dismiss();
                            console.log(data);
                            _this.orders = data;
                        }, function (err) {
                            loading.dismiss();
                            console.log(err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RidersPage.prototype.acceptOrder = function (order) {
        var _this = this;
        console.log("accept...");
        this._alert.showAlert({
            header: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E23\u0E31\u0E1A\u0E2A\u0E48\u0E07\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",
            sub_header: 'ถ้ายืนยันจะไม่สามารถยกเลิกหน้าที่ส่งสินค้าได้',
            message: '',
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: function () {
                        _this._toast.showToast('ยกเลิกการส่ง', 'top');
                        _this.loadRiderOrders();
                    },
                    role: 'cancel',
                },
                {
                    text: 'ตกลง',
                    handler: function () {
                        _this.rider.acceptToRide(order.items, 1).subscribe(function (data) {
                            console.log(data);
                            if (data.code < 0) {
                                alert("รายการส่งสินค้านี้ถูกจองไปแล้ว");
                                _this.loadRiderOrders();
                            }
                            else {
                                _this.dispRouth(order, 1);
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            ]
        });
    };
    RidersPage.prototype.viewOrder = function (order) {
        console.log("view...");
        this.dispRouth(order, 0);
    };
    RidersPage.prototype.dispRouth = function (order, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isView = true;
                        return [4 /*yield*/, this._modal.create({
                                component: _routes_routes_component__WEBPACK_IMPORTED_MODULE_4__["RoutesComponent"],
                                componentProps: {
                                    'order': order,
                                    'type': type
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (status) {
                            _this.isView = false;
                            _this.loadRiderOrders();
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RidersPage.ctorParameters = function () { return [
        { type: _rider_service__WEBPACK_IMPORTED_MODULE_2__["RiderService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: ionic_mqtt__WEBPACK_IMPORTED_MODULE_7__["MQTTService"] }
    ]; };
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
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            ionic_mqtt__WEBPACK_IMPORTED_MODULE_7__["MQTTService"]])
    ], RidersPage);
    return RidersPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/transaction.service */ "./src/app/shared/services/transaction.service.ts");
/* harmony import */ var _rider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rider.service */ "./src/app/riders/rider.service.ts");






var RoutesComponent = /** @class */ (function () {
    function RoutesComponent(_modal, _call, _transaction, _rider) {
        this._modal = _modal;
        this._call = _call;
        this._transaction = _transaction;
        this._rider = _rider;
        this.prompt_payload = '';
    }
    RoutesComponent.prototype.ngOnInit = function () {
    };
    RoutesComponent.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log(this.type);
        console.log(this.order);
        var total_price = this.calPrice();
        if (total_price < this.order.store.free_delivery_price) {
            total_price += this.order.store.delivery_price;
        }
        console.log("GenQR=>", this.order.store.promptpay, " : ", total_price);
        this._transaction.genQR(this.order.store.promptpay, total_price).subscribe(function (data) {
            console.log(data);
            _this.prompt_payload = data.prompt_payload;
        }, function (err) {
        });
        this.loadMap();
    };
    RoutesComponent.prototype.calPrice = function () {
        var total_price = 0;
        this.order.items.forEach(function (e) {
            total_price += (e.price * e.qty);
        });
        return total_price;
    };
    RoutesComponent.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(this.order.store.latitude, this.order.store.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 12,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var store_marker = new google.maps.Marker({
            map: this.map,
            label: "ร้าน",
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        var rider_marker = new google.maps.Marker({
            map: this.map,
            label: "ผู้รับ",
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(this.order.member.latitude, this.order.member.longitude)
        });
    };
    RoutesComponent.prototype.startCall = function (mobile_number) {
        this._call.callNumber("" + mobile_number, true)
            .then(function (res) { })
            .catch(function (err) { alert(JSON.stringify(err)); });
    };
    RoutesComponent.prototype.finishedDelivery = function () {
        var _this = this;
        this._rider.acceptToRide(this.order.items, 2).subscribe(function (data) {
            _this.forceDissmiss(0);
        }, function (err) {
            alert("บันทึกข้อมูลไม่ได้ โปรดลองอีกครั้ง!");
            //this.forceDissmiss(-1);
        });
    };
    RoutesComponent.prototype.forceDissmiss = function (status) {
        this._modal.dismiss(status);
    };
    RoutesComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"] },
        { type: _shared_services_transaction_service__WEBPACK_IMPORTED_MODULE_4__["TransactionService"] },
        { type: _rider_service__WEBPACK_IMPORTED_MODULE_5__["RiderService"] }
    ]; };
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
    return RoutesComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertService = /** @class */ (function () {
    function AlertService(alertController) {
        this.alertController = alertController;
    }
    AlertService.prototype.showAlert = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: options.header,
                            subHeader: options.sub_header,
                            message: options.message,
                            buttons: options.buttons
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
    AlertService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertService);
    return AlertService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ToastService = /** @class */ (function () {
    function ToastService(toastController) {
        this.toastController = toastController;
    }
    ToastService.prototype.showToast = function (message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            position: position,
                            duration: 1000,
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.prototype.showLongToast = function (message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            header: 'ไม่มีผู้ตอบรับส่งสินค้า',
                            message: message,
                            color: 'dark',
                            position: 'top',
                            buttons: [
                                {
                                    text: 'ปิด',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.prototype.showToasts = function (message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            position: position,
                            duration: 1000,
                            color: '#FFFFFF'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], ToastService);
    return ToastService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TransactionService = /** @class */ (function () {
    function TransactionService(http) {
        this.http = http;
    }
    ////////////////// v2 ///////////////////
    TransactionService.prototype.genQR = function (promptpay, price) {
        return this.http.get("https://qrdee.co/api/v2/qr?promptpay=" + promptpay + "&price=" + price);
    };
    TransactionService.prototype.insertTransaction = function (products, prompt_payload, price, store_id) {
        var body = {
            price: price,
            prompt_payload: prompt_payload,
            products: products
        };
        return this.http.post("https://qrdee.co/api/v2/trnqr/" + store_id, body);
    };
    TransactionService.prototype.getOrders = function (store_id) {
        return this.http.get("https://qrdee.co/api/v2/orders/" + store_id);
    };
    TransactionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TransactionService);
    return TransactionService;
}());



/***/ })

}]);
//# sourceMappingURL=riders-riders-module-es5.js.map