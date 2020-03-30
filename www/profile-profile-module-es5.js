(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/form/form.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/form/form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>แก้ไขข้อมูล</ion-title>\n     <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n  <form [formGroup]=\"profileForm\">\n    <ion-card style=\"background:#FFFFFF;\">\n      <ion-card-content>\n      <ion-item-group>\n        <ion-item lines=\"none\">\n          <ion-img *ngIf=\"store_pic\" [src]=\"store_pic\"></ion-img>\n          <ion-img *ngIf=\"!store_pic\" src=\"/assets/noimg.png\"></ion-img>\n        </ion-item>\n        <ion-grid>\n          <ion-row justify-content-center>\n            <ion-button size=\"small\" color=\"primary\" (click)=\"getPicture()\">ถ่ายรูปสินค้า</ion-button>\n            <ion-button size=\"small\" color=\"secondary\" (click)=\"selectPictures()\">เลือกจากอัลบั้ม</ion-button>\n          </ion-row>\n        </ion-grid>\n      </ion-item-group>\n        <ion-item>\n          <b slot=\"start\"> ร้าน</b>\n          <ion-input  type=\"text\" formControlName=\"store_name\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <b slot=\"start\">พร้อมเพย์</b>\n          <ion-input  type=\"text\" formControlName=\"promptpay\"></ion-input>\n        </ion-item>\n         <ion-item>\n          <b slot=\"start\">ชื่อ</b>\n          <ion-input  type=\"text\" formControlName=\"firstname\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <b slot=\"start\"> นามสกุล</b>\n          <ion-input  type=\"text\" formControlName=\"lastname\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <b slot=\"start\">เบอร์โทร</b>\n          <ion-input  type=\"text\" formControlName=\"mobile_number\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\"><b slot=\"start\">ประเภทร้าน</b></ion-label>\n          <ion-select formControlName=\"store_type_id\">\n            <ion-select-option\n              *ngFor=\"let store_type of store_types\"\n              [value]=\"store_type.id\"\n              [selected]=\"store_type.id === profileForm.get('store_type_id').value\">\n              {{ store_type.store_type_th }}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-card-content>\n      <ion-button type=\"submit\" expand=\"full\" color=\"success\" (click)=\"submit()\">\n       <ion-icon name=\"logo-buffer\"></ion-icon>\n      &nbsp;บันทึก</ion-button>\n    </ion-card>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>จัดการร้านค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-label position=\"floating\">ตำแหน่งร้าน</ion-label>\n  <div #map id=\"map\" style=\"height:250px;\"></div>\n\n  <ion-list [formGroup]=\"form\">\n    <ion-item>\n        <b>แก้ไขข้อมูลร้านค้า</b>\n    </ion-item>\n    <ion-item-group >\n      <ion-item lines=\"none\">\n        <ion-img *ngIf=\"store_pic\" [src]=\"store_pic\"></ion-img>\n        <ion-img  *ngIf=\"!store_pic\" src=\"/assets/noimg.png\"></ion-img>\n      </ion-item>\n      <ion-grid>\n        <ion-row justify-content-center>\n          <ion-button size=\"small\" color=\"primary\" (click)=\"getPicture()\">ถ่ายรูปร้านค้า</ion-button>\n          <ion-button size=\"small\" color=\"secondary\" (click)=\"selectPictures();\">เลือกจากอัลบั้ม</ion-button>\n        </ion-row>\n      </ion-grid>\n    </ion-item-group>\n     <ion-item>\n        <b slot=\"start\">ชื่อร้าน</b>\n        <ion-input slot=\"end\" color=\"primary\" type=\"text\" formControlName=\"store_name\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">พร้อมเพย์</b>\n         <ion-input slot=\"end\"  color=\"primary\" type=\"text\" formControlName=\"promptpay\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">โทรศัพท์</b>\n         <ion-input slot=\"end\" color=\"primary\" type=\"text\" formControlName=\"mobile_number\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">ค่าขนส่ง</b>\n         <ion-input slot=\"end\" color=\"primary\" type=\"number\" formControlName=\"delivery_price\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">ชื่อ</b>\n         <ion-input slot=\"end\" color=\"primary\" type=\"text\" formControlName=\"firstname\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">นามสกุล</b>\n         <ion-input slot=\"end\" color=\"primary\" type=\"text\" formControlName=\"lastname\" ></ion-input>\n     </ion-item>\n\n     <ion-item>\n       <ion-label color=\"primary\" position=\"stacked\">ประเภทร้านค้า</ion-label>\n       <ion-select formControlName=\"store_type_id\">\n         <ion-select-option\n           *ngFor=\"let type of store_types\"\n           [value]=\"type.id\"\n           [selected]=\"type.id === store.store_type_id\">\n           {{ type.store_type_th }}\n         </ion-select-option>\n       </ion-select>\n     </ion-item>\n </ion-list>\n\n  <ion-card style=\"background:#FFFFF0;\">\n    <ion-card-content *ngIf=\"store\">\n      <ion-button type=\"submit\" shape=\"round\" expand=\"full\" color=\"primary\" (click)=\"submit()\">\n          <ion-icon name=\"create\"></ion-icon>\n          &nbsp;ปรับปรุงข้อมูล\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/form/form.component.scss":
/*!**************************************************!*\
  !*** ./src/app/profile/form/form.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9wcm9maWxlL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDREQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcxLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59Il19 */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");











// import { ImagePicker } from '@ionic-native/image-picker/ngx';
var FormComponent = /** @class */ (function () {
    function FormComponent(profileService, route, router, http, builder, toastService, alertService, camera, file, webView) {
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
        this.store_pic = null;
        this.profileForm = this.builder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            promptpay: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            store_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            store_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            store_pic: null
        });
        this.formType = 'EDIT';
        this.title = '';
    }
    FormComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.profileService.getStoreTypes().subscribe(function (data) { return _this.store_types = data.data; });
        // if(this.route.snapshot.data.formType === 'EDIT') {
        //
        //   this.title = 'แก้ไขข้อมูล';
        //   this.formType = 'EDIT';
        //   this.profileService.getProfile().subscribe(data => {
        //     console.log(data);
        //   this.profileForm.setValue({
        //       username: data.data.username,
        //       promptpay: data.data.promptpay,
        //       mobile_number: data.data.mobile_number,
        //       firstname: data.data.firstname,
        //       lastname: data.data.lastname,
        //       store_name: data.data.store_name,
        //       store_type_id: data.data.store_type_id,
        //       store_pic: null
        //   });
        //
        //   if(data.data.store_pic){
        //     this.store_pic = 'https://qrdee.co/app/'+data.data.store_pic;
        //   }
        //
        //   });
        // }
    };
    FormComponent.prototype.selectPictures = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then(function (imageData) {
            console.log("Image Selected => ");
            _this.store_pic = 'data:image/jpeg;base64,' + imageData;
            _this.profileForm.get('store_pic').patchValue(_this.store_pic);
        }, function (err) {
            console.log("Image Error=>");
            console.log(err);
        });
    };
    FormComponent.prototype.getPicture = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then(function (imageData) {
            _this.store_pic = 'data:image/jpeg;base64,' + imageData;
            _this.profileForm.get('store_pic').patchValue(_this.store_pic);
        }, function (err) {
            console.log(err);
        });
    };
    // private loadPhoto(imageFileUri: any) {
    //   this.file.resolveLocalFilesystemUrl(imageFileUri).then(entry => {
    //     entry['file'](file => {
    //       this.readFile(file);
    //     })
    //   })
    // }
    //
    // private readFile(file: any) {
    //   const reader = new FileReader();
    //
    //   reader.onloadend = () => {
    //     const imgBlob = new Blob([reader.result], { type: file.type });
    //     this.profileForm.controls['image'].setValue(imgBlob);
    //   }
    //
    //   reader.readAsArrayBuffer(file);
    // }
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
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],] }] },
        { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],] }] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"],] }] }
    ]; };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/profile/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
            _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"]])
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

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\nion-input {\n  text-align: right;\n  font-size: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQWEsRUFBQTs7QUFFZjtFQUNDLGlCQUFpQjtFQUFDLGVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnMS5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5pb24taW5wdXQge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O2ZvbnQtc2l6ZToxNnB4O1xyXG5cdC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var ProfilePage = /** @class */ (function () {
    function ProfilePage(profileservice, geolocation, toastService, route, camera, _formBuilder, event, _loading) {
        this.profileservice = profileservice;
        this.geolocation = geolocation;
        this.toastService = toastService;
        this.route = route;
        this.camera = camera;
        this._formBuilder = _formBuilder;
        this.event = event;
        this._loading = _loading;
        this.store_pic = '';
        //alert(JSON.stringify(this.store));
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.store = JSON.parse(localStorage.getItem('store'));
        console.log(this.store);
        this.store_pic = this.store.store_pic;
        if (this.store_pic) {
            this.store_pic = 'https://qrdee.co/app/' + this.store_pic;
        }
        localStorage.setItem("store_lat", this.store.latitude);
        localStorage.setItem("store_lng", this.store.longitude);
        this.loadStoreTypes();
        this.buildForm();
        // this.latitude.patchValue( this.store.latitude );
        // this.longitude.patchValue( this.store.longitude );
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
    };
    // ionViewWillEnter() {
    //this.loadProfile();
    //  this.loadStoreTypes();
    // }
    ProfilePage.prototype.ngAfterViewInit = function () {
        // this.geolocation.getCurrentPosition().then((resp) => {
        //     this.store.latitude = resp.coords.latitude;
        //     this.store.longitude = resp.coords.longitude;
        //     this.loadMap();
        // });
        this.loadMap();
    };
    ProfilePage.prototype.submit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.latitude.patchValue(localStorage.getItem('store_lat'));
                        this.longitude.patchValue(localStorage.getItem('store_lng'));
                        return [4 /*yield*/, this._loading.create()];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.profileservice.updateProfile(this.form.value, this.store.id)
                                .subscribe(function (data) {
                                console.log("Profile Resp0nse===>");
                                console.log(data);
                                //
                                // localStorage.setItem('store', JSON.stringify({
                                //   id: data.id,
                                //   store_name: data.store_name,
                                //   promptpay: data.promptpay,
                                //   access_token: data.access_token,
                                //   mobile_number: data.mobile_number,
                                //   delivery_price: data.delivery_price,
                                //   firstname: data.firstname,
                                //   lastname: data.lastname,
                                //   store_type_id: data.store_type_id,
                                //   latitude: data.latitude,
                                //   longitude: data.longitude,
                                //   store_pic: data.store_pic
                                // }));
                                _this.event.publish('store:changed', data);
                                loading.dismiss();
                                _this.toastService.showToast("\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E49\u0E27", 'top');
                            }, function (err) {
                                console.log(err);
                                _this.toastService.showToast(JSON.stringify(err), 'top');
                                loading.dismiss();
                            })
                            // this.store.latitude = localStorage.getItem('store_lat');
                            // this.store.longitude = localStorage.getItem('store_lng');
                            // localStorage.setItem('store', JSON.stringify(this.store));
                            // console.log(this.store);
                            // this.profileservice.updateProfile(this.store,this.store.id).subscribe((data:any)=>{
                            //   console.log(data);
                            //   const member = {
                            //     mobile_number:this.store.mobile_number,
                            //     latitude:this.store.latitude,
                            //     longitude:this.store.longitude,
                            //     firstname:this.store.firstname,
                            //     lastname:this.store.lastname
                            //   }
                            //   localStorage.setItem('member', JSON.stringify(member));
                            //   console.log(member);
                            //   localStorage.removeItem('store_lat');
                            //   localStorage.removeItem('store_lng');
                            //   this.toastService.showToast(`ปรับปรุงข้อมูลเรียบร้อยแล้ว`, 'top');
                            // });
                        ];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilePage.prototype.loadStoreTypes = function () {
        var _this = this;
        this.profileservice.getStoreTypes().subscribe(function (data) {
            _this.store_types = data;
        });
    };
    ProfilePage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(this.latitude.value, this.longitude.value);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var marker = new google.maps.Marker({
            map: this.map,
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: latLng
        });
        marker.addListener('dragend', function () {
            //this.form.get('latitude').patchValue( marker.getPosition().lat() );
            // this.longitude.patchValue(marker.getPosition().lng());
            localStorage.setItem("store_lat", marker.getPosition().lat());
            localStorage.setItem("store_lng", marker.getPosition().lng());
            this.map.setCenter(marker.getPosition());
        });
    };
    ProfilePage.prototype.selectPictures = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then(function (image) {
            console.log("store_pic selected..... =>");
            _this.store_pic = 'data:image/jpeg;base64,' + image;
            _this.form.get('store_pic').patchValue(_this.store_pic);
            // console.log(base64Image);
            // this.preview = base64Image;
            // this.form.get('photo').patchValue(base64Image);
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.getPicture = function () {
        var _this = this;
        this.camera.getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then(function (image) {
            _this.store_pic = 'data:image/jpeg;base64,' + image;
            _this.form.get('store_pic').patchValue(_this.store_pic);
            // console.log(base64Image);
            // this.preview = base64Image;
            // this.form.get('photo').patchValue(base64Image);
        }, function (err) {
            console.log(err);
        });
    };
    ProfilePage.prototype.buildForm = function () {
        this.form = this._formBuilder.group({
            store_name: this.store.store_name,
            promptpay: this.store.promptpay,
            mobile_number: this.store.mobile_number,
            delivery_price: this.store.delivery_price,
            firstname: this.store.firstname,
            lastname: this.store.lastname,
            store_type_id: this.store.store_type_id,
            latitude: this.store.latitude,
            longitude: this.store.longitude,
            store_pic: null
        });
    };
    Object.defineProperty(ProfilePage.prototype, "latitude", {
        get: function () { return this.form.get('latitude'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfilePage.prototype, "longitude", {
        get: function () { return this.form.get('longitude'); },
        enumerable: true,
        configurable: true
    });
    ProfilePage.ctorParameters = function () { return [
        { type: _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfilePage.prototype, "mapElement", void 0);
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]])
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
        console.log("" + this.baseUrl);
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
    ProfileService.prototype.updateProfile = function (data, store_id) {
        // console.log(data);
        // console.log(store_id);
        return this.http.put("https://qrdee.co/api/v2/stores/" + store_id, data);
    };
    ProfileService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + "/" + id);
    };
    ProfileService.prototype.getStoreTypes = function () {
        return this.http.get("https://qrdee.co/api/v2/refs?t=store_types");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var HttpClientInterceptor = /** @class */ (function () {
    function HttpClientInterceptor(storage) {
        this.storage = storage;
        this.access_token = '';
        localStorage.getItem('access_token');
        console.log(localStorage.getItem('access_token'));
    }
    HttpClientInterceptor.prototype.intercept = function (request, next) {
        // const token: string = 'Bearer YkVNRDBITDc2TTBFMDFzZldiT2xMa09DQ1BYYUQxMjFjZzVWR3poZ3JWTlVyR2lkNERqbnR6blRXdFFHaVp5SlR6blFVdFZjaTRqTDQ1UnhyMHRjeEs1VnVrdzM3cDFLSUw1bWZtd1J0d1ZPODV5V0hlb3FvZWQxSWJSaGowZEg=';
        var token = 'Bearer ' + localStorage.getItem('access_token');
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': token
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
            }
            return event;
        }));
    };
    HttpClientInterceptor.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
    ]; };
    HttpClientInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], HttpClientInterceptor);
    return HttpClientInterceptor;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertService = /** @class */ (function () {
    function AlertService(alertController) {
        this.alertController = alertController;
    }
    AlertService.prototype.showAlert = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: options.header,
                            subHeader: options.sub_header,
                            message: options.message,
                            buttons: options.buttons
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AlertService);
    return AlertService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var QrService = /** @class */ (function () {
    function QrService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/promptpayQRs";
    }
    QrService.prototype.generatePromptPayQRs = function (transaction) {
        return this.http.post(this.baseUrl, transaction);
    };
    QrService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    QrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QrService);
    return QrService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TransactionService = /** @class */ (function () {
    function TransactionService(http) {
        this.http = http;
    }
    ////////////////// v2 ///////////////////
    TransactionService.prototype.genQR = function (promptpay, price) {
        return this.http.get("https://qrdee.co/api/v2/qr?promptpay=" + promptpay + "&price=" + price);
    };
    TransactionService.prototype.insertTransaction = function (products, prompt_payload, price, store_id) {
        var body = {
            price: price,
            prompt_payload: prompt_payload,
            products: products
        };
        return this.http.post("https://qrdee.co/api/v2/trnqr/" + store_id, body);
    };
    TransactionService.prototype.getOrders = function (store_id) {
        return this.http.get("https://qrdee.co/api/v2/orders/" + store_id);
    };
    TransactionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TransactionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TransactionService);
    return TransactionService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_httpclient_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/httpclient.interceptor */ "./src/app/shared/interceptors/httpclient.interceptor.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/transaction.service */ "./src/app/shared/services/transaction.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _services_qr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/qr.service */ "./src/app/shared/services/qr.service.ts");





// import { QRCodeModule } from 'angularx-qrcode';





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
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
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es5.js.map