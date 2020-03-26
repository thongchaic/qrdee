(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>เข้าสู่ระบบ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"app-background\">\n  <div class=\"\" >\n  <div class=\"ion-text-center\" >\n    <img src=\"assets/images/mapapi.png\" class=\"img_logistic\">\n  </div>\n<form (ngSubmit)=\"loginForm()\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <!-- <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\"> -->\n          <div padding>\n            <ion-item>\n              <ion-input  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"mobile\"\n               type=\"text\" placeholder=\"เบอร์โทรศัพท์/พร้อมเพย์\" ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"password\"\n               type=\"password\" placeholder=\"รหัสผ่าน\"></ion-input>\n            </ion-item>\n            <ion-button type=\"submit\" expand=\"full\"color=\"success\"><b>เข้าสู่ระบบ</b></ion-button>\n          </div>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n   <p text-center>ยังไม่มีบัญชี ลงทะเบียน</p>\n  <ion-grid>\n   <ion-row>\n    <ion-col size=\"4\">\n     <ion-button class=\"btn2\" expand=\"block\" (click)=\"goRegister_store()\">\n       <div class=\"ion-text-center\"  >\n          <ion-icon name=\"home\"></ion-icon><br/>\n          <b>ร้านค้า</b>\n        </div>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button class=\"btn2\" expand=\"block\" (click)=\"goRegister_logistic()\">\n       <div class=\"ion-text-center\">\n         <ion-icon name=\"pin\"></ion-icon><br/>\n          <b>ผู้ส่งสินค้า</b>\n        </div>\n      </ion-button>\n    </ion-col>\n      <ion-col size=\"4\">\n          <ion-button class=\"btn2\" expand=\"block\" (click)=\"goRegister_customer()\">\n       <div class=\"ion-text-center\">\n         <ion-icon name=\"cart\"></ion-icon><br/>\n          <b>ซื้อสินค้า</b>\n        </div>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn1 {\n  height: 100px;\n  --background: #33FFCC ; }\n\n.btn2 {\n  height: 50px;\n  --background: #E03A3A ; }\n\n.img_logistic {\n  width: 100px;\n  height: 100px; }\n\n.app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0VBQ2Isc0JBQWEsRUFBQTs7QUFHZDtFQUNDLFlBQVk7RUFDWixzQkFBYSxFQUFBOztBQUdkO0VBQ0MsWUFBWTtFQUFFLGFBQWEsRUFBQTs7QUFFNUI7RUFDRSw0REFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjEge1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0LS1iYWNrZ3JvdW5kOiAjMzNGRkNDIDsgXHJcblx0XHJcbn1cclxuLmJ0bjIge1xyXG5cdGhlaWdodDogNTBweDtcclxuXHQtLWJhY2tncm91bmQ6ICNFMDNBM0EgOyBcclxuXHJcbn1cclxuLmltZ19sb2dpc3RpY3tcclxuXHR3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmFwcC1iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_login_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/login-store.service */ "./src/app/login/shared/login-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");









var LoginPage = /** @class */ (function () {
    function LoginPage(loginService, router, navCtrl, http, modalController, event, toastService, storage) {
        this.loginService = loginService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalController = modalController;
        this.event = event;
        this.toastService = toastService;
        this.storage = storage;
        this.token = '';
        this.login = {};
        this.email = '';
        this.password = '';
        // is_disabled:boolean = false;
        this.usertype = '';
    }
    LoginPage.prototype.loginForm = function () {
        var _this = this;
        this.loginService.logintore(this.email, this.password).subscribe(function (trn) {
            console.log(trn);
            _this.email = trn.data;
            _this.token = trn.access_token;
            // console.log("test",this.token);
            // console.log('access_token ' + this.token);
            localStorage.setItem('access_token', _this.token);
            localStorage.setItem('usertype', trn.usertype);
            // console.log('usertype' + trn.usertype);
            if (trn.usertype == 1) {
                _this.router.navigateByUrl('/cart');
            }
            if (trn.usertype == 2) {
                _this.router.navigateByUrl('/logistic');
            }
            if (trn.usertype == 3) {
                _this.router.navigateByUrl('/customer');
            }
            _this.event.publish('user:changed', trn.usertype);
        });
    };
    LoginPage.prototype.goRegister_store = function () {
        this.router.navigateByUrl('/register');
    };
    LoginPage.prototype.goRegister_logistic = function () {
        this.router.navigateByUrl('/register-logistic');
    };
    LoginPage.prototype.goRegister_customer = function () {
        this.router.navigateByUrl('/register-customer');
    };
    LoginPage.ctorParameters = function () { return [
        { type: _shared_login_store_service__WEBPACK_IMPORTED_MODULE_2__["LoginStoreService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_login_store_service__WEBPACK_IMPORTED_MODULE_2__["LoginStoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/login/shared/login-store.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/login/shared/login-store.service.ts ***!
  \*****************************************************/
/*! exports provided: LoginStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStoreService", function() { return LoginStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var LoginStoreService = /** @class */ (function () {
    function LoginStoreService(http) {
        this.http = http;
        this.baseUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
    }
    LoginStoreService.prototype.logintore = function (email, password) {
        var body = {
            email: email,
            password: password,
        };
        console.log(body);
        return this.http.post("https://qrdee.co/api/v1/login", body);
    };
    LoginStoreService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginStoreService);
    return LoginStoreService;
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
//# sourceMappingURL=login-login-module-es5.js.map