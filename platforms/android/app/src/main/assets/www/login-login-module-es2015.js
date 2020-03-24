(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->    \n    <ion-title>เข้าระบบ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"app-background\">\n  <div class=\"\" >\n  <div class=\"ion-text-center\" >\n    <img src=\"assets/images/mapapi.png\" class=\"img_logistic\">\n  </div>\n<form (ngSubmit)=\"loginForm()\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <!-- <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\"> -->\n          <div padding>\n            <ion-item>\n              <ion-input  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"email\" \n               type=\"email\" placeholder=\"your@email.com\" ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"password\" \n               type=\"password\" placeholder=\"Password\"></ion-input>\n            </ion-item>\n          </div>\n          <div>\n           <ion-button type=\"submit\" expand=\"full\" \n           color=\"success\"><b>เข้าสู่ระบบ</b></ion-button>\n          </div>\n        <!-- </ion-col> -->\n      </ion-row>\n      \n    </ion-grid>\n  </form>\n\n   <p text-center>ยังไม่มีบัญชีใช่ไหม ลงทะเบียน</p>\n  <ion-grid>\n   <ion-row>\n    <ion-col size=\"4\">\n     <ion-button class=\"btn2\" expand=\"block\" (click)=\"goRegister_store()\">\n       <div class=\"ion-text-center\"  >\n          <ion-icon name=\"home\"></ion-icon><br/>\n          <b>ร้านค้า</b> \n        </div>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button class=\"btn2\" expand=\"block\" (click)=\"goRegister_logistic()\">\n       <div class=\"ion-text-center\">\n         <ion-icon name=\"pin\"></ion-icon><br/>\n          <b>ส่งสินค้า</b> \n        </div>\n      </ion-button>\n    </ion-col>\n      <ion-col size=\"4\">\n          <ion-button class=\"btn2\" expand=\"block\" (click)=\"goRegister_customer()\">\n       <div class=\"ion-text-center\">\n         <ion-icon name=\"cart\"></ion-icon><br/>\n          <b>ซื้อสินค้า</b> \n        </div>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</div>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
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



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn1 {\n  height: 100px;\n  --background: #33FFCC ;\n}\n\n.btn2 {\n  height: 50px;\n  --background: #E03A3A ;\n}\n\n.img_logistic {\n  width: 100px;\n  height: 100px;\n}\n\n.app-background {\n  --background: url(\"/assets/bg1.jpg\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXHByb2plY3RcXHFyZGVlcy9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0FDQ0Q7O0FERUE7RUFDQyxZQUFBO0VBQ0Esc0JBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFBYyxhQUFBO0FDRWY7O0FEQUE7RUFDRSw0REFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjEge1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0LS1iYWNrZ3JvdW5kOiAjMzNGRkNDIDsgXHJcblx0XHJcbn1cclxuLmJ0bjIge1xyXG5cdGhlaWdodDogNTBweDtcclxuXHQtLWJhY2tncm91bmQ6ICNFMDNBM0EgOyBcclxuXHJcbn1cclxuLmltZ19sb2dpc3RpY3tcclxuXHR3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmFwcC1iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iLCIuYnRuMSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzMzRkZDQyA7XG59XG5cbi5idG4yIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICAtLWJhY2tncm91bmQ6ICNFMDNBM0EgO1xufVxuXG4uaW1nX2xvZ2lzdGljIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYXBwLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmcxLmpwZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_login_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/login-store.service */ "./src/app/login/shared/login-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");









let LoginPage = class LoginPage {
    constructor(loginService, router, navCtrl, http, modalController, event, toastService, storage) {
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
    loginForm() {
        this.loginService.logintore(this.email, this.password).subscribe(trn => {
            console.log(trn);
            this.email = trn.data;
            this.token = trn.access_token;
            console.log("test", this.token);
            console.log('access_token ' + this.token);
            localStorage.setItem('access_token', this.token);
            localStorage.setItem('usertype', trn.usertype);
            console.log('usertype' + trn.usertype);
            if (trn.usertype == 1) {
                this.router.navigateByUrl('/cart');
            }
            if (trn.usertype == 2) {
                this.router.navigateByUrl('/logistic');
            }
            if (trn.usertype == 3) {
                this.router.navigateByUrl('/customer');
            }
            this.event.publish('user:changed', trn.usertype);
        });
    }
    goRegister_store() {
        this.router.navigateByUrl('/register');
    }
    goRegister_logistic() {
        this.router.navigateByUrl('/register-logistic');
    }
    goRegister_customer() {
        this.router.navigateByUrl('/register-customer');
    }
};
LoginPage.ctorParameters = () => [
    { type: _shared_login_store_service__WEBPACK_IMPORTED_MODULE_2__["LoginStoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let LoginStoreService = class LoginStoreService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}`;
    }
    logintore(email, password) {
        const body = {
            email: email,
            password: password,
        };
        console.log(body);
        return this.http.post(`https://qrdee.co/api/v1/login`, body);
    }
};
LoginStoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LoginStoreService);



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
//# sourceMappingURL=login-login-module-es2015.js.map