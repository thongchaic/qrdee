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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout.page */ "./src/app/logout/logout.page.ts");







var routes = [
    {
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"]
    }
];
var LogoutPageModule = /** @class */ (function () {
    function LogoutPageModule() {
    }
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
    return LogoutPageModule;
}());



/***/ }),

/***/ "./src/app/logout/logout.page.scss":
/*!*****************************************!*\
  !*** ./src/app/logout/logout.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url(\"/assets/bg1.jpg\") 0 0/100% 100% no-repeat;\n}\n\n.padding {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9sb2dvdXQvbG9nb3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9nb3V0L2xvZ291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyw0REFBQTtBQ0NIOztBRENBO0VBQ1Esa0JBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xyXG4gICAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuLnBhZGRpbmd7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5hcHAtYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzEuanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4ucGFkZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_logout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/logout.service */ "./src/app/logout/shared/logout.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var LogoutPage = /** @class */ (function () {
    function LogoutPage(toastController, http, logoutservice, router, storage, toastService) {
        this.toastController = toastController;
        this.http = http;
        this.logoutservice = logoutservice;
        this.router = router;
        this.storage = storage;
        this.toastService = toastService;
    }
    LogoutPage.prototype.save = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('usertype');
        this.toastService.showToast('คุณได้ออกจากระบบแล้ว', 'top');
        this.router.navigateByUrl('/login');
    };
    LogoutPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _shared_logout_service__WEBPACK_IMPORTED_MODULE_3__["LogoutService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
    ]; };
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
    return LogoutPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoutService = /** @class */ (function () {
    function LogoutService() {
    }
    LogoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoutService);
    return LogoutService;
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
//# sourceMappingURL=logout-logout-module-es5.js.map