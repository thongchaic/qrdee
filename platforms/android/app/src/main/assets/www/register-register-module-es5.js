(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button></ion-menu-button>  -->\n    </ion-buttons>    \n    <ion-title>ร้านค้า</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n <ion-content  class=\"app-background\">\n  <ion-card style=\"background:#FFFFFF;\">\n    <ion-card-content> \n       <ion-list>\n       <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"store_name\" placeholder=\"ชื่อร้าน\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"firstname\" placeholder=\"ชื่อ\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n         <ion-input type=\"text\"  [(ngModel)]=\"lastname\" placeholder=\"นามสกุล\"></ion-input>\n      </ion-item>\n       <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"promptpay\" placeholder=\"พร้อมเพย์\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\"  [(ngModel)]=\"mobile_number\" placeholder=\"เบอร์โทร\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\" placeholder=\"อีเมล์\"></ion-input>\n      </ion-item>\n        <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n        <ion-input type=\"password\"  [(ngModel)]=\"password\" placeholder=\"รหัสผ่าน\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"password\"  [(ngModel)]=\"repassword\" placeholder=\"รหัสผ่านยืนยัน\"></ion-input>\n      </ion-item>\n    <!--  <p> ตำแหน่งปัจจุบันของร้านค้า</p>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\"  [(ngModel)]=\"latitude\"></ion-input>\n      </ion-item>\n       <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\"  [(ngModel)]=\"longitude\"></ion-input>\n      </ion-item> -->\n      <div #mapElements id=\"mapElements\"></div>\n     <ion-button type=\"submit\" expand=\"full\" color=\"success\" (click)=\"Register_store()\">ลงทะเบียน</ion-button>\n </ion-list>\n</ion-card-content>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url(\"/assets/bg1.jpg\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRTpcXHByb2plY3RcXHFyZGVlcy9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcxLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59IiwiLmFwcC1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JnMS5qcGdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_register_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/register-store.service */ "./src/app/register/shared/register-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");


// import { RegisterStoreService } from './shared/register-store.service';



// import { ViewChild } from '@angular/core';

var RegisterPage = /** @class */ (function () {
    function RegisterPage(
    // public navCtrl: NavController, 
    router, registerService, geolocation, toastService) {
        this.router = router;
        this.registerService = registerService;
        this.geolocation = geolocation;
        this.toastService = toastService;
        this.password = '';
        this.repassword = '';
        this.firstname = '';
        this.lastname = '';
        this.promptpay = '';
        this.mobile_number = '';
        this.store_name = '';
        this.email = '';
        this.latitude = '';
        this.longitude = '';
    }
    RegisterPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            console.log(resp);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            var map = new google.maps.Map(_this.mapNativeElement.nativeElement, {
                center: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                zoom: 6,
            });
            var icon = {
                // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
                url: 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
                scaledSize: new google.maps.Size(50, 50),
            };
            //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
            var marker = new google.maps.Marker({
                position: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                map: map,
                icon: icon
            });
            var infoWindow = new google.maps.InfoWindow;
            var pos = {
                lat: _this.latitude,
                lng: _this.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('ตำแหน่งของคุณ.');
            infoWindow.open(map);
            map.setCenter(pos);
            // this.Register_store(this.latitude,this.longitude);
        }).catch(function (error) {
            console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error);
        });
    };
    RegisterPage.prototype.Register_store = function (latitude, longitude) {
        var _this = this;
        this.registerService.registerstore(this.password, this.firstname, this.lastname, this.promptpay, this.mobile_number, this.store_name, this.email, this.latitude, this.longitude).subscribe(function (trn) {
            console.log(trn);
            _this.latitude;
            _this.longitude;
            console.log(_this.latitude, _this.longitude);
            _this.toastService.showToast('ลงทะเบียนสำเร็จแล้ว กรุณาล็อคอิน', 'top');
            _this.router.navigateByUrl('/login');
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_register_store_service__WEBPACK_IMPORTED_MODULE_2__["RegisterStoreService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElements', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RegisterPage.prototype, "mapNativeElement", void 0);
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_register_store_service__WEBPACK_IMPORTED_MODULE_2__["RegisterStoreService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ }),

/***/ "./src/app/register/shared/register-store.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/register/shared/register-store.service.ts ***!
  \***********************************************************/
/*! exports provided: RegisterStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStoreService", function() { return RegisterStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var RegisterStoreService = /** @class */ (function () {
    function RegisterStoreService(http) {
        this.http = http;
        this.baseUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
    }
    RegisterStoreService.prototype.registerstore = function (password, firstname, lastname, promptpay, mobile_number, store_name, email, latitude, longitude) {
        var body = {
            // username : username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            promptpay: promptpay,
            mobile_number: mobile_number,
            store_name: store_name,
            email: email,
            latitude: latitude,
            longitude: longitude,
        };
        console.log(body);
        return this.http.post("https://qrdee.co/api/v1/register", body);
    };
    RegisterStoreService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RegisterStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterStoreService);
    return RegisterStoreService;
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



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map