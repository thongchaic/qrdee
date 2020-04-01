(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-logistic-register-logistic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register-logistic/register-logistic.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-logistic/register-logistic.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- <ion-menu-button></ion-menu-button> -->\n    </ion-buttons>\n    <ion-title>ส่งสินค้า</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n  <ion-card style=\"background:#FFFFFF;\">\n    <ion-card-content >\n       <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"firstname\" placeholder=\"ชื่อ\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n         <ion-input type=\"text\"  [(ngModel)]=\"lastname\" placeholder=\"นามสกุล\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\"  [(ngModel)]=\"car_number\" placeholder=\"เลขทะเบียนรถ\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"text\"  [(ngModel)]=\"mobile_number\" placeholder=\"เบอร์โทร\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n        <ion-input type=\"text\" [(ngModel)]=\"email\" placeholder=\"อีเมล์\"></ion-input>\n      </ion-item>\n        <ion-item>\n        <ion-label position=\"floating\"></ion-label>\n        <ion-input type=\"password\"  [(ngModel)]=\"password\" placeholder=\"รหัสผ่าน\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\" ></ion-label>\n        <ion-input type=\"password\"  [(ngModel)]=\"repassword\" placeholder=\"รหัสผ่านยืนยัน\"></ion-input>\n      </ion-item>\n     <ion-button type=\"submit\" expand=\"full\" color=\"success\" (click)=\"RegisterLlogistic()\">ลงทะเบียน</ion-button>\n </ion-list>\n</ion-card-content>\n</ion-card>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_register_logistic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/register-logistic.service */ "./src/app/register-logistic/shared/register-logistic.service.ts");
/* harmony import */ var _register_logistic_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-logistic.page */ "./src/app/register-logistic/register-logistic.page.ts");








var routes = [
    {
        path: '',
        component: _register_logistic_page__WEBPACK_IMPORTED_MODULE_7__["RegisterLogisticPage"]
    }
];
var RegisterLogisticPageModule = /** @class */ (function () {
    function RegisterLogisticPageModule() {
    }
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
    return RegisterLogisticPageModule;
}());



/***/ }),

/***/ "./src/app/register-logistic/register-logistic.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/register-logistic/register-logistic.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9yZWdpc3Rlci1sb2dpc3RpYy9yZWdpc3Rlci1sb2dpc3RpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXItbG9naXN0aWMvcmVnaXN0ZXItbG9naXN0aWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_register_logistic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/register-logistic.service */ "./src/app/register-logistic/shared/register-logistic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");





var RegisterLogisticPage = /** @class */ (function () {
    function RegisterLogisticPage(router, registerService, toastService) {
        this.router = router;
        this.registerService = registerService;
        this.toastService = toastService;
        this.password = '';
        this.repassword = '';
        this.firstname = '';
        this.lastname = '';
        this.car_number = '';
        this.mobile_number = '';
        // store_name :string='';
        this.email = '';
    }
    RegisterLogisticPage.prototype.RegisterLlogistic = function () {
        var _this = this;
        this.registerService.registerlogistic(this.password, this.firstname, this.lastname, this.mobile_number, this.email, this.car_number).subscribe(function (trn) {
            console.log(trn);
            _this.toastService.showToast('ลงทะเบียนสำเร็จแล้ว กรุณาล็อคอิน', 'top');
            _this.router.navigateByUrl('/login');
        });
    };
    RegisterLogisticPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _shared_register_logistic_service__WEBPACK_IMPORTED_MODULE_2__["RegisterLogisticService"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
    ]; };
    RegisterLogisticPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-logistic',
            template: __webpack_require__(/*! raw-loader!./register-logistic.page.html */ "./node_modules/raw-loader/index.js!./src/app/register-logistic/register-logistic.page.html"),
            styles: [__webpack_require__(/*! ./register-logistic.page.scss */ "./src/app/register-logistic/register-logistic.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_register_logistic_service__WEBPACK_IMPORTED_MODULE_2__["RegisterLogisticService"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], RegisterLogisticPage);
    return RegisterLogisticPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var RegisterLogisticService = /** @class */ (function () {
    function RegisterLogisticService(http) {
        this.http = http;
        this.baseUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
    }
    RegisterLogisticService.prototype.registerlogistic = function (password, firstname, lastname, mobile_number, email, car_number) {
        var body = {
            // username : username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            car_number: car_number,
            mobile_number: mobile_number,
            // store_name:store_name,
            email: email,
        };
        console.log(body);
        return this.http.post("https://qrdee.co/api/v1/delivery_register", body);
    };
    RegisterLogisticService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RegisterLogisticService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterLogisticService);
    return RegisterLogisticService;
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
//# sourceMappingURL=register-logistic-register-logistic-module-es5.js.map