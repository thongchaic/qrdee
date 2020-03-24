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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/profile/shared/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");












// import { ImagePicker } from '@ionic-native/image-picker/ngx';
let FormComponent = class FormComponent {
    constructor(profileService, route, router, http, builder, toastService, alertService, camera, 
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
    ionViewWillEnter() {
        this.profileService.getStoreTypes().subscribe((data) => this.store_types = data.data);
        if (this.route.snapshot.data.formType === 'EDIT') {
            this.title = 'แก้ไขข้อมูล';
            this.formType = 'EDIT';
            this.profileService.getProfile().subscribe(data => {
                this.profileForm.setValue({
                    username: data.data.username,
                    promptpay: data.data.promptpay,
                    mobile_number: data.data.mobile_number,
                    firstname: data.data.firstname,
                    lastname: data.data.lastname,
                    store_name: data.data.store_name,
                    store_type_id: data.data.store_type_id,
                    image: null
                });
                this.imageSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + data.data.store_pic;
                // console.log(this.imageSrc);
            });
        }
    }
    takePhoto() {
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            cameraDirection: this.camera.Direction.FRONT,
            mediaType: this.camera.MediaType.PICTURE
        }).then(imageData => {
            this.imageSrc = this.webView.convertFileSrc(imageData);
            this.loadPhoto(imageData);
        }, err => {
            console.log(err);
        });
    }
    selectPhoto() {
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        }).then(imageData => {
            this.imageSrc = this.webView.convertFileSrc(imageData);
            this.loadPhoto(imageData);
        }, err => {
            console.log(err);
        });
    }
    loadPhoto(imageFileUri) {
        this.file.resolveLocalFilesystemUrl(imageFileUri).then(entry => {
            entry['file'](file => {
                this.readFile(file);
            });
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgBlob = new Blob([reader.result], { type: file.type });
            this.profileForm.controls['image'].setValue(imgBlob);
        };
        reader.readAsArrayBuffer(file);
    }
    submit() {
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
                    handler: () => {
                    }
                }
            ]
        });
        if (this.formType === 'EDIT') {
            this.profileService.updateProfile(this.profileForm.value, this.route.snapshot.params['id']).subscribe(res => {
                this.toastService.showToast('แก้ไขเรียบร้อยแล้ว', 'top');
                this.router.navigateByUrl('/profile');
            }, err => console.log(err));
        }
    }
};
FormComponent.ctorParameters = () => [
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
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/profile.service */ "./src/app/profile/shared/profile.service.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/form.component */ "./src/app/profile/form/form.component.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");












// import { ImagePicker } from '@ionic-native/image-picker/ngx';

const routes = [
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
let ProfilePageModule = class ProfilePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/profile.service */ "./src/app/profile/shared/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let ProfilePage = class ProfilePage {
    constructor(profileservice, route, http) {
        this.profileservice = profileservice;
        this.route = route;
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
    }
    ionViewWillEnter() {
        this.loadProfile();
    }
    loadProfile() {
        // this.http.get<any>(`http://qrdee.co/api/v1/store`).subscribe(console.log);
        this.profileservice.getProfiles().subscribe(res => {
            this.store = res.data;
            console.log(this.store);
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}/store`;
    }
    getProfile() {
        return this.http.get(`${this.baseUrl}`);
    }
    getStoreDistance(latitude, longitude) {
        console.log(`http://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
        return this.http.get(`http://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
    }
    getProfiles() {
        return this.http.get(`https://qrdee.co/api/v1/stores`);
        // console.log('https://qrdee.co/api/v1/stores');
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    getStoreTypes() {
        return this.http.get(`https://qrdee.co/api/v1/ref?type=store_types`);
    }
    updateProfile(data, id) {
        console.log(data);
        return this.http.post(`https://qrdee.co/api/v1/update_store/${id}`, this.createFormData(data));
    }
    createFormData(data) {
        const fd = new FormData();
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
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ProfileService);



/***/ }),

/***/ "./src/app/shared/interceptors/httpclient.interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/interceptors/httpclient.interceptor.ts ***!
  \***************************************************************/
/*! exports provided: HttpClientInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientInterceptor", function() { return HttpClientInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let HttpClientInterceptor = class HttpClientInterceptor {
    constructor(storage) {
        this.storage = storage;
        this.access_token = '';
        localStorage.getItem('access_token');
        console.log(localStorage.getItem('access_token'));
    }
    intercept(request, next) {
        // const token: string = 'Bearer YkVNRDBITDc2TTBFMDFzZldiT2xMa09DQ1BYYUQxMjFjZzVWR3poZ3JWTlVyR2lkNERqbnR6blRXdFFHaVp5SlR6blFVdFZjaTRqTDQ1UnhyMHRjeEs1VnVrdzM3cDFLSUw1bWZtd1J0d1ZPODV5V0hlb3FvZWQxSWJSaGowZEg=';
        const token = 'Bearer ' + localStorage.getItem('access_token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': token
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
            }
            return event;
        }));
    }
};
HttpClientInterceptor.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
HttpClientInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], HttpClientInterceptor);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    showAlert(options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: options.header,
                subHeader: options.sub_header,
                message: options.message,
                buttons: options.buttons
            });
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlertService);



/***/ }),

/***/ "./src/app/shared/services/qr.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/qr.service.ts ***!
  \***********************************************/
/*! exports provided: QrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QrService", function() { return QrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let QrService = class QrService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}/promptpayQRs`;
    }
    generatePromptPayQRs(transaction) {
        return this.http.post(this.baseUrl, transaction);
    }
};
QrService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
QrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], QrService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let TransactionService = class TransactionService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}`;
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    // latitude,longitude
    orderProduct() {
        console.log(`https://qrdee.co/api/v1/order`);
        return this.http.get(`https://qrdee.co/api/v1/order`);
    }
    orderProducts() {
        console.log(`https://qrdee.co/api/v1/orders`);
        return this.http.get(`https://qrdee.co/api/v1/orders`);
    }
    getUser() {
        return this.http.get(`https://qrdee.co/api/v1/users`);
        // console.log('https://qrdee.co/api/v1/users');
    }
    getCodeRandoms() {
        return this.http.get(`https://qrdee.co/api/v1/code_randomss`);
        // console.log('https://qrdee.co/api/v1/users');      store_id
    }
    newTransaction(products, total_price, latitude, longitude, firstname, lastname, mobile_number, latitude_store, longitude_store, store_id, promptpay, verified) {
        const body = {
            total_price: total_price,
            products: products,
            latitude: latitude,
            longitude: longitude,
            firstname: firstname,
            lastname: lastname,
            mobile_number: mobile_number,
            latitude_store: latitude_store,
            longitude_store: longitude_store,
            store_id: store_id,
            promptpay: promptpay,
            verified: verified,
        };
        console.log(body);
        return this.http.post(`${this.baseUrl}/new_transaction`, body);
    }
    newTransactionStore(products, total_price, verified) {
        const bodystore = {
            total_price: total_price,
            products: products,
            verified: verified,
        };
        console.log(bodystore);
        return this.http.post(`https://qrdee.co/api/v1/new_transactionstore`, bodystore);
    }
    getverifiedcart(id) {
        return this.http.get(`https://qrdee.co/api/v1/verified_transactionstore/${id}`);
    }
    verifiedcart(verified) {
        const bodystoreverified = {
            verified: verified,
        };
        console.log('verified', bodystoreverified);
        return this.http.post(`https://qrdee.co/api/v1/verified_transactionstores`, bodystoreverified);
    }
    newTransactionOrder(firstname, lastname, mobile_number, store_id, code_randoms) {
        const bodystorder = {
            firstname: firstname,
            lastname: lastname,
            mobile_number: mobile_number,
            store_id: store_id,
            code_randoms: code_randoms,
        };
        console.log(bodystorder);
        return this.http.post(`https://qrdee.co/api/v1/transaction_order_input`, bodystorder);
    }
    verifyTransaction(transaction) {
        // console.log(transaction);
        return this.http.post(`${this.baseUrl}/verify_transaction`, transaction);
    }
    verifyTransactions(transaction) {
        // console.log(transaction);
        return this.http.post(`${this.baseUrl}/verify_transactions`, transaction);
    }
};
TransactionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TransactionService);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/httpclient.interceptor */ "./src/app/shared/interceptors/httpclient.interceptor.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/transaction.service */ "./src/app/shared/services/transaction.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _services_qr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/qr.service */ "./src/app/shared/services/qr.service.ts");





// import { QRCodeModule } from 'angularx-qrcode';





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            // QRCodeModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
        ],
        providers: [
            _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _services_transaction_service__WEBPACK_IMPORTED_MODULE_7__["TransactionService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _services_qr_service__WEBPACK_IMPORTED_MODULE_9__["QrService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_5__["HttpClientInterceptor"], multi: true }
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map