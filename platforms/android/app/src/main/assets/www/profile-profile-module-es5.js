(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/form/form.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/form/form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>แก้ไขข้อมูล</ion-title>\n     <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n  <form [formGroup]=\"profileForm\">\n    <ion-card style=\"background:#FFFFFF;\">\n      <ion-card-content>\n      <ion-item-group>\n        <ion-item lines=\"none\">\n          <ion-img [src]=\"imageSrc || '/assets/noimg.png'\"></ion-img>\n        </ion-item>\n        <ion-grid>\n          <ion-row justify-content-center>\n            <ion-button size=\"small\" color=\"primary\" (click)=\"takePhoto()\">ถ่ายรูปสินค้า</ion-button>\n            <ion-button size=\"small\" color=\"secondary\" (click)=\"selectPhoto()\">เลือกจากอัลบั้ม</ion-button>\n          </ion-row>\n        </ion-grid>        \n      </ion-item-group>\n        <ion-item>\n          <b slot=\"start\"> ร้าน</b>\n          <ion-input  type=\"text\" formControlName=\"store_name\"></ion-input>\n        </ion-item> \n        <ion-item>\n          <b slot=\"start\">พร้อมเพย์</b>\n          <ion-input  type=\"text\" formControlName=\"promptpay\"></ion-input>\n        </ion-item> \n         <ion-item>\n          <b slot=\"start\">ชื่อ</b>\n          <ion-input  type=\"text\" formControlName=\"firstname\"></ion-input>\n        </ion-item> \n        <ion-item>\n          <b slot=\"start\"> นามสกุล</b>\n          <ion-input  type=\"text\" formControlName=\"lastname\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <b slot=\"start\">เบอร์โทร</b>\n          <ion-input  type=\"text\" formControlName=\"mobile_number\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\"><b slot=\"start\">ประเภทร้าน</b></ion-label>\n          <ion-select formControlName=\"store_type_id\">\n            <ion-select-option \n              *ngFor=\"let store_type of store_types\" \n              [value]=\"store_type.id\" \n              [selected]=\"store_type.id === profileForm.get('store_type_id').value\">\n              {{ store_type.store_type_th }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-card-content>\n      <ion-button type=\"submit\" expand=\"full\" color=\"success\" (click)=\"submit()\">\n       <ion-icon name=\"logo-buffer\"></ion-icon>\n      &nbsp;บันทึก</ion-button>\n    </ion-card>  \n  </form>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>ข้อมูลร้าน</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n  <ion-card style=\"background:#FFFFFF;\">\n    <ion-card-content *ngIf=\"store\">\n       <ion-list>\n        <ion-item> \n          <ion-avatar slot=\"start\">\n            <ion-img [src]=\"url+store.store_pic || 'assets/noimg.png'\" ></ion-img> \n          <!-- <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\"> -->\n          </ion-avatar>\n            <h2 slot=\"end\"> ร้าน {{store.store_name}} </h2>\n        </ion-item>\n        <ion-item>\n          <b slot=\"start\">พร้อมเพย์</b><h2 slot=\"end\"> {{store.promptpay}} </h2>\n        </ion-item> \n        <ion-item>\n          <b slot=\"start\">ชื่อ</b><h2 slot=\"end\" >  {{store.firstname}}</h2>\n        </ion-item> \n        <ion-item>\n          <b slot=\"start\">นามสกุล</b><h2 slot=\"end\">{{store.lastname}}</h2>\n        </ion-item> \n        <ion-item>\n          <b slot=\"start\">เบอร์โทร:</b><h2 slot=\"end\" >{{store.mobile_number}}</h2>\n        </ion-item> \n        <ion-item>\n          <b slot=\"start\">ประเภทร้านค้า</b><h2 slot=\"end\" >{{store.store_type.store_type_th}}</h2>\n        </ion-item>\n        \n      </ion-list><br>\n        <ion-button type=\"submit\" expand=\"full\" color=\"success\" routerDirection=\"forward\" routerLink=\"/profile/{{ store.id }}\">\n           <ion-icon name=\"create\"></ion-icon>\n           &nbsp;ปรับปรุงข้อมูล\n        </ion-button>\n    </ion-card-content>\n  </ion-card>  \n</ion-content>  "

/***/ }),

/***/ "./src/app/profile/form/form.component.scss":
/*!**************************************************!*\
  !*** ./src/app/profile/form/form.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url(\"/assets/bg1.jpg\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9mb3JtL0U6XFxwcm9qZWN0XFxxcmRlZXMvc3JjXFxhcHBcXHByb2ZpbGVcXGZvcm1cXGZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iLCIuYXBwLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmcxLmpwZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/form/form.component.ts":
/*!************************************************!*\
  !*** ./src/app/profile/form/form.component.ts ***!
  \************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/profile/shared/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");












// import { ImagePicker } from '@ionic-native/image-picker/ngx';
var FormComponent = /** @class */ (function () {
    function FormComponent(profileService, route, router, http, builder, toastService, alertService, camera, 
    // private imagePicker: ImagePicker,
    file, webView) {
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.builder = builder;
        this.toastService = toastService;
        this.alertService = alertService;
        this.camera = camera;
        this.file = file;
        this.webView = webView;
        this.imageSrc = '';
        this.profileForm = this.builder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            promptpay: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            store_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            store_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            image: null
        });
        this.formType = 'EDIT';
        this.title = '';
    }
    FormComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.profileService.getStoreTypes().subscribe(function (data) { return _this.store_types = data.data; });
        if (this.route.snapshot.data.formType === 'EDIT') {
            this.title = 'แก้ไขข้อมูล';
            this.formType = 'EDIT';
            this.profileService.getProfile().subscribe(function (data) {
                _this.profileForm.setValue({
                    username: data.data.username,
                    promptpay: data.data.promptpay,
                    mobile_number: data.data.mobile_number,
                    firstname: data.data.firstname,
                    lastname: data.data.lastname,
                    store_name: data.data.store_name,
                    store_type_id: data.data.store_type_id,
                    image: null
                });
                _this.imageSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + data.data.store_pic;
                // console.log(this.imageSrc);
            });
        }
    };
    FormComponent.prototype.takePhoto = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            cameraDirection: this.camera.Direction.FRONT,
            mediaType: this.camera.MediaType.PICTURE
        }).then(function (imageData) {
            _this.imageSrc = _this.webView.convertFileSrc(imageData);
            _this.loadPhoto(imageData);
        }, function (err) {
            console.log(err);
        });
    };
    FormComponent.prototype.selectPhoto = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        }).then(function (imageData) {
            _this.imageSrc = _this.webView.convertFileSrc(imageData);
            _this.loadPhoto(imageData);
        }, function (err) {
            console.log(err);
        });
    };
    FormComponent.prototype.loadPhoto = function (imageFileUri) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(imageFileUri).then(function (entry) {
            entry['file'](function (file) {
                _this.readFile(file);
            });
        });
    };
    FormComponent.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var imgBlob = new Blob([reader.result], { type: file.type });
            _this.profileForm.controls['image'].setValue(imgBlob);
        };
        reader.readAsArrayBuffer(file);
    };
    FormComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.profileForm.value);
        this.alertService.showAlert({
            header: 'กำลังปรับปรุงข้อมูล',
            sub_header: '',
            message: '',
            buttons: [
                {
                    text: 'ยกเลิก',
                    role: 'cancel'
                },
                {
                    text: 'ตกลง',
                    handler: function () {
                    }
                }
            ]
        });
        if (this.formType === 'EDIT') {
            this.profileService.updateProfile(this.profileForm.value, this.route.snapshot.params['id']).subscribe(function (res) {
                _this.toastService.showToast('แก้ไขเรียบร้อยแล้ว', 'top');
                _this.router.navigateByUrl('/profile');
            }, function (err) { return console.log(err); });
        }
    };
    FormComponent.ctorParameters = function () { return [
        { type: _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
        { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],] }] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"],] }] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"],] }] }
    ]; };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/profile/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
            _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/profile.service */ "./src/app/profile/shared/profile.service.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/form.component */ "./src/app/profile/form/form.component.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");












// import { ImagePicker } from '@ionic-native/image-picker/ngx';

var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_8__["ProfilePage"]
    },
    {
        path: ':id',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
        data: { title: 'แก้ไขข้อมูล', formType: 'EDIT' }
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_8__["ProfilePage"], _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"]],
            providers: [
                _shared_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
                _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__["File"],
                _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"],
                // ImagePicker,
                _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_12__["WebView"]
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url(\"/assets/bg1.jpg\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9FOlxccHJvamVjdFxccXJkZWVzL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDREQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iLCIuYXBwLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvYmcxLmpwZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/profile.service */ "./src/app/profile/shared/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var ProfilePage = /** @class */ (function () {
    function ProfilePage(profileservice, route, http) {
        this.profileservice = profileservice;
        this.route = route;
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.loadProfile();
    };
    ProfilePage.prototype.loadProfile = function () {
        var _this = this;
        // this.http.get<any>(`http://qrdee.co/api/v1/store`).subscribe(console.log);
        this.profileservice.getProfiles().subscribe(function (res) {
            _this.store = res.data;
            console.log(_this.store);
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ }),

/***/ "./src/app/profile/shared/profile.service.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/shared/profile.service.ts ***!
  \***************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/store";
    }
    ProfileService.prototype.getProfile = function () {
        return this.http.get("" + this.baseUrl);
    };
    ProfileService.prototype.getStoreDistance = function (latitude, longitude) {
        console.log("http://qrdee.co/api/v1/dis?latitude=" + latitude + "&longitude=" + longitude);
        return this.http.get("http://qrdee.co/api/v1/dis?latitude=" + latitude + "&longitude=" + longitude);
    };
    ProfileService.prototype.getProfiles = function () {
        return this.http.get("https://qrdee.co/api/v1/stores");
        // console.log('https://qrdee.co/api/v1/stores');
    };
    ProfileService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + "/" + id);
    };
    ProfileService.prototype.getStoreTypes = function () {
        return this.http.get("https://qrdee.co/api/v1/ref?type=store_types");
    };
    ProfileService.prototype.updateProfile = function (data, id) {
        console.log(data);
        return this.http.post("https://qrdee.co/api/v1/update_store/" + id, this.createFormData(data));
    };
    ProfileService.prototype.createFormData = function (data) {
        var fd = new FormData();
        if (data.image)
            fd.append('store_pic', data.image);
        fd.append('username', data.username);
        fd.append('store_name', data.store_name);
        fd.append('mobile_number', data.mobile_number);
        fd.append('firstname', data.firstname);
        fd.append('lastname', data.lastname);
        fd.append('promptpay', data.promptpay);
        // fd.append('latitude', data.latitude);
        // fd.append('longitude', data.longitude);
        fd.append('store_type_id', data.store_type_id);
        return fd;
    };
    ProfileService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map