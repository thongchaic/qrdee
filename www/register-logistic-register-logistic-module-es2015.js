(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-logistic-register-logistic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register-logistic/register-logistic.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-logistic/register-logistic.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>สมัครเป็นผู้ส่งสินค้า</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <ion-card style=\"background:#FFFFFF;\">\n    <ion-card-content >\n       <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"firstname\" placeholder=\"ชื่อ\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n         <ion-input type=\"text\"  [(ngModel)]=\"lastname\" placeholder=\"นามสกุล\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\"  [(ngModel)]=\"car_number\" placeholder=\"เลขทะเบียนรถ\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\"  [(ngModel)]=\"mobile_number\" placeholder=\"เบอร์โทร\"></ion-input>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\" placeholder=\"อีเมล์\"></ion-input>\n      </ion-item> -->\n        <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n        <ion-input type=\"text\"  [(ngModel)]=\"password\" placeholder=\"รหัสผ่าน\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\"  [(ngModel)]=\"repassword\" placeholder=\"รหัสผ่านยืนยัน\"></ion-input>\n      </ion-item>\n      <br>\n      <ion-button type=\"submit\" expand=\"block\" color=\"primary\" (click)=\"RegisterLlogistic()\">ลงทะเบียน</ion-button>\n </ion-list>\n</ion-card-content>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register-logistic/register-logistic.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/register-logistic/register-logistic.module.ts ***!
  \***************************************************************/
/*! exports provided: RegisterLogisticPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLogisticPageModule", function() { return RegisterLogisticPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_register_logistic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/register-logistic.service */ "./src/app/register-logistic/shared/register-logistic.service.ts");
/* harmony import */ var _register_logistic_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-logistic.page */ "./src/app/register-logistic/register-logistic.page.ts");








const routes = [
    {
        path: '',
        component: _register_logistic_page__WEBPACK_IMPORTED_MODULE_7__["RegisterLogisticPage"]
    }
];
let RegisterLogisticPageModule = class RegisterLogisticPageModule {
};
RegisterLogisticPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_logistic_page__WEBPACK_IMPORTED_MODULE_7__["RegisterLogisticPage"]],
        providers: [_shared_register_logistic_service__WEBPACK_IMPORTED_MODULE_6__["RegisterLogisticService"]],
    })
], RegisterLogisticPageModule);



/***/ }),

/***/ "./src/app/register-logistic/register-logistic.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/register-logistic/register-logistic.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLWxvZ2lzdGljL3JlZ2lzdGVyLWxvZ2lzdGljLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register-logistic/register-logistic.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/register-logistic/register-logistic.page.ts ***!
  \*************************************************************/
/*! exports provided: RegisterLogisticPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLogisticPage", function() { return RegisterLogisticPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_register_logistic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/register-logistic.service */ "./src/app/register-logistic/shared/register-logistic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");






let RegisterLogisticPage = class RegisterLogisticPage {
    //email:string='';
    constructor(router, registerService, toastService, user) {
        this.router = router;
        this.registerService = registerService;
        this.toastService = toastService;
        this.user = user;
        this.password = '';
        this.repassword = '';
        this.firstname = '';
        this.lastname = '';
        this.car_number = '';
        this.mobile_number = '';
    }
    RegisterLlogistic() {
        console.log(this.password, this.repassword, this.firstname, this.lastname, this.car_number, this.mobile_number);
        if (this.password != this.repassword) {
            this.toastService.showToast("รหัสผ่านไม่ตรงกัน", 'top');
            return;
        }
        this.registerService.registerlogistic(this.password, this.firstname, this.lastname, this.mobile_number, this.car_number).subscribe(rider => {
            console.log(rider);
            this.user.storeUser(rider, 2);
            let member = this.user.getMember(); //JSON.parse(localStorage.getItem('member'));
            if (!member) {
                const member = {
                    id: null,
                    mobile_number: rider.mobile_number,
                    latitude: 14.8718084,
                    longitude: 103.4962797,
                    firstname: rider.firstname,
                    lastname: rider.lastname
                };
                this.user.storeMember(member);
            }
            //  this.toastService.showToast('ลงทะเบียนสำเร็จแล้ว กรุณาล็อคอิน', 'top');
            this.router.navigateByUrl('/riders');
        });
    }
};
RegisterLogisticPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_register_logistic_service__WEBPACK_IMPORTED_MODULE_2__["RegisterLogisticService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
RegisterLogisticPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register-logistic',
        template: __webpack_require__(/*! raw-loader!./register-logistic.page.html */ "./node_modules/raw-loader/index.js!./src/app/register-logistic/register-logistic.page.html"),
        styles: [__webpack_require__(/*! ./register-logistic.page.scss */ "./src/app/register-logistic/register-logistic.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_register_logistic_service__WEBPACK_IMPORTED_MODULE_2__["RegisterLogisticService"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], RegisterLogisticPage);



/***/ }),

/***/ "./src/app/register-logistic/shared/register-logistic.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/register-logistic/shared/register-logistic.service.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterLogisticService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterLogisticService", function() { return RegisterLogisticService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let RegisterLogisticService = class RegisterLogisticService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}`;
    }
    registerlogistic(password, firstname, lastname, mobile_number, car_number) {
        const body = {
            // username : username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            car_number: car_number,
            mobile_number: mobile_number
        };
        console.log(body);
        return this.http.post(`https://qrdee.co/api/v2/rider`, body);
    }
};
RegisterLogisticService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterLogisticService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RegisterLogisticService);



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
//# sourceMappingURL=register-logistic-register-logistic-module-es2015.js.map