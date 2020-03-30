(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>เข้าสู่ระบบ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"ion-text-center\" >\n    <img src=\"assets/images/mapapi.png\" class=\"img_logistic\">\n  </div> -->\n  <ion-img class=\"center\" src=\"assets/images/qrdee.png\"></ion-img>\n\n\n<form (ngSubmit)=\"loginForm()\">\n    <ion-grid>\n      <ion-row padding color=\"primary\" justify-content-center>\n        <!-- <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\"> -->\n            <ion-item>\n              <ion-input [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"promptpay\"\n               type=\"text\" placeholder=\"เบอร์โทรศัพท์\" ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input  [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"password\"\n               type=\"password\" placeholder=\"รหัสผ่าน\"></ion-input>\n            </ion-item>\n            <ion-button type=\"submit\" expand=\"full\"color=\"primary\" shape=\"round\"><b>เข้าสู่ระบบ</b></ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n   <p text-center>ยังไม่มีบัญชี ลงทะเบียน</p>\n  <ion-grid>\n   <ion-row>\n    <ion-col size=\"6\">\n        <ion-button class=\"btn2\" expand=\"block\" (click)=\"goRegister_store()\">\n          <div class=\"ion-text-center\"  >\n            <ion-icon name=\"home\"></ion-icon><br/>\n            <b>ร้านค้า</b>\n          </div>\n        </ion-button>\n    </ion-col>\n    <!-- <ion-col size=\"4\">\n      <ion-button class=\"btn2\" expand=\"block\" (click)=\"goRegister_logistic()\">\n       <div class=\"ion-text-center\">\n         <ion-icon name=\"pin\"></ion-icon><br/>\n          <b>ผู้ส่งสินค้า</b>\n        </div>\n      </ion-button>\n    </ion-col> -->\n      <ion-col size=\"6\">\n          <ion-button class=\"btn2\" expand=\"block\" (click)=\"goRegister_customer()\">\n            <div class=\"ion-text-center\">\n              <ion-icon name=\"cart\"></ion-icon><br/>\n              <b>ซื้อสินค้า</b>\n            </div>\n          </ion-button>\n    </ion-col>\n\n\n  </ion-row>\n</ion-grid>\n</ion-content>\n"

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

module.exports = ".btn1 {\n  height: 100px;\n  --background: #33FFCC ; }\n\n.btn2 {\n  height: 50px;\n  --background: #E03A3A ; }\n\n.img_logistic {\n  width: 100px;\n  height: 100px; }\n\n.app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n.center {\n  display: block;\n  margin: auto;\n  width: 40%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0VBQ2Isc0JBQWEsRUFBQTs7QUFHZDtFQUNDLFlBQVk7RUFDWixzQkFBYSxFQUFBOztBQUdkO0VBQ0MsWUFBWTtFQUFFLGFBQWEsRUFBQTs7QUFFNUI7RUFDRSw0REFBYSxFQUFBOztBQUVmO0VBQ0csY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuMSB7XHJcblx0aGVpZ2h0OiAxMDBweDtcclxuXHQtLWJhY2tncm91bmQ6ICMzM0ZGQ0MgO1xyXG5cclxufVxyXG4uYnRuMiB7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdC0tYmFja2dyb3VuZDogI0UwM0EzQSA7XHJcblxyXG59XHJcbi5pbWdfbG9naXN0aWN7XHJcblx0d2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5hcHAtYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcxLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59XHJcbi5jZW50ZXIge1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luOiBhdXRvO1xyXG4gICB3aWR0aDogNDAlO1xyXG4gIH1cclxuIl19 */"

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
    function LoginPage(loginService, router, navCtrl, http, modalController, event, toastService, storage, _loading) {
        this.loginService = loginService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalController = modalController;
        this.event = event;
        this.toastService = toastService;
        this.storage = storage;
        this._loading = _loading;
        this.token = '';
        this.login = {};
        this.promptpay = '';
        this.password = '';
        // is_disabled:boolean = false;
        this.usertype = '';
        var store = JSON.parse(localStorage.getItem('store'));
        if (store) {
            console.log("already store =>");
            console.log(store);
            this.event.publish('store:changed', store);
            this.router.navigateByUrl('/cart');
        }
    }
    LoginPage.prototype.ionViewDidEnter = function () {
    };
    LoginPage.prototype.loginForm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._loading.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loginService.logintore(this.promptpay, this.password).subscribe(function (trn) {
                                loading.dismiss();
                                //alert(JSON.stringify(trn));
                                // console.log(trn);
                                //this.router.navigateByUrl('/cart');
                                _this.event.publish('store:changed', trn);
                                _this.router.navigateByUrl('/cart');
                            }, function (err) {
                                loading.dismiss();
                                alert("เบอร์โทร์ หรือรหัสผ่านไม่ถูกต้อง");
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.goRegister_store = function () {
        this.router.navigateByUrl('/register');
    };
    LoginPage.prototype.goRegister_logistic = function () {
        this.router.navigateByUrl('/register-logistic');
    };
    LoginPage.prototype.goRegister_customer = function () {
        console.log("Register customer");
        var member = JSON.parse(localStorage.getItem('member'));
        if (!member) {
            console.log("member not set....");
            var member_1 = {
                id: null,
                mobile_number: null,
                latitude: null,
                longitude: null,
                firstname: null,
                lastname: null
            };
            localStorage.setItem('member', JSON.stringify(member_1));
            console.log(member_1);
            this.router.navigateByUrl('/customer');
        }
        else {
            console.log("member already set....");
            this.router.navigateByUrl('/customer');
        }
    };
    LoginPage.ctorParameters = function () { return [
        { type: _shared_login_store_service__WEBPACK_IMPORTED_MODULE_2__["LoginStoreService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
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
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], LoginPage);
    return LoginPage;
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