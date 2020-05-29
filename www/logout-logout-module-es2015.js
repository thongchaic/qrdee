(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logout-logout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/logout/logout.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logout/logout.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>  -->   \n    <ion-title>ออกจากระบบ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding  class=\"app-background\">\n\t<br><br><br><br><br>\n\t <ion-card style=\"background:#FFFFFF;\">\n\t\t<ion-grid >\n\t\t      <ion-row >\n\t\t        <ion-col size=\"12\">\n\t\t             <h6>ยืนยันออกจากระบบ</h6><br/>\n\t\t            <ion-button  expand=\"full\" color=\"primary\" (click)=\"save()\">ตกลง</ion-button>\n\t\t        </ion-col> \n\t\t      </ion-row>\n\t\t  </ion-grid> \n\t\t</ion-card >\n</ion-content>\n<!-- <ion-footer>\n  <ion-button expand=\"full\" color=\"primary\" routerLink=\"/products\" routerDirection=\"backward\">กลับ</ion-button>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/logout/logout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/logout/logout.module.ts ***!
  \*****************************************/
/*! exports provided: LogoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function() { return LogoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout.page */ "./src/app/logout/logout.page.ts");







const routes = [
    {
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"]
    }
];
let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"]]
    })
], LogoutPageModule);



/***/ }),

/***/ "./src/app/logout/logout.page.scss":
/*!*****************************************!*\
  !*** ./src/app/logout/logout.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n.padding {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9sb2dvdXQvbG9nb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLDREQUFhLEVBQUE7O0FBRWhCO0VBQ1Esa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dvdXQvbG9nb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYmFja2dyb3VuZHtcclxuICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcxLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcbi5wYWRkaW5ne1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/logout/logout.page.ts":
/*!***************************************!*\
  !*** ./src/app/logout/logout.page.ts ***!
  \***************************************/
/*! exports provided: LogoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutPage", function() { return LogoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_logout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/logout.service */ "./src/app/logout/shared/logout.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let LogoutPage = class LogoutPage {
    constructor(toastController, http, logoutservice, router, storage, toastService) {
        this.toastController = toastController;
        this.http = http;
        this.logoutservice = logoutservice;
        this.router = router;
        this.storage = storage;
        this.toastService = toastService;
    }
    save() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('usertype');
        this.toastService.showToast('คุณได้ออกจากระบบแล้ว', 'top');
        this.router.navigateByUrl('/login');
    }
};
LogoutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _shared_logout_service__WEBPACK_IMPORTED_MODULE_3__["LogoutService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
LogoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: __webpack_require__(/*! raw-loader!./logout.page.html */ "./node_modules/raw-loader/index.js!./src/app/logout/logout.page.html"),
        styles: [__webpack_require__(/*! ./logout.page.scss */ "./src/app/logout/logout.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _shared_logout_service__WEBPACK_IMPORTED_MODULE_3__["LogoutService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]])
], LogoutPage);



/***/ }),

/***/ "./src/app/logout/shared/logout.service.ts":
/*!*************************************************!*\
  !*** ./src/app/logout/shared/logout.service.ts ***!
  \*************************************************/
/*! exports provided: LogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutService", function() { return LogoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoutService = class LogoutService {
    constructor() { }
};
LogoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogoutService);



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
                header: 'ไม่มีผู้ตอบรับส่งสินค้า',
                message: message,
                color: 'dark',
                position: 'top',
                buttons: [
                    {
                        text: 'ปิด',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }
                ]
            });
            toast.present();
            // const toast = await this.toastController.create({
            //   message: message,
            //   position: position,
            //   duration: 30000,
            //   color: 'dark'
            // });
            // toast.present();
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



/***/ })

}]);
//# sourceMappingURL=logout-logout-module-es2015.js.map