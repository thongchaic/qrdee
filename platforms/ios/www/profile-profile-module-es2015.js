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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>จัดการร้านค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-label position=\"floating\">จัดการตำแหน่งร้าน</ion-label>\n  <div id=\"map\" #map style=\"height:250px;\"></div>\n\n\n  <ion-list [formGroup]=\"form\">\n    <ion-item>\n        <b>แก้ไขข้อมูลร้านค้า</b>\n    </ion-item>\n    <ion-item-group >\n      <ion-item lines=\"none\">\n        <ion-img class=\"center\" style=\"width: 250px; height: 180px;\"  *ngIf=\"store_pic\" [src]=\"store_pic\"></ion-img>\n        <!-- <ion-img  *ngIf=\"!store_pic\" src=\"/assets/noimg.png\"></ion-img> -->\n      </ion-item>\n      <ion-grid>\n        <ion-row justify-content-center>\n          <ion-button size=\"small\" color=\"primary\" (click)=\"getPicture()\">ถ่ายรูปร้านค้า</ion-button>\n          <ion-button size=\"small\" color=\"secondary\" (click)=\"selectPictures();\">เลือกจากอัลบั้ม</ion-button>\n        </ion-row>\n      </ion-grid>\n    </ion-item-group>\n     <ion-item>\n        <b slot=\"start\">ชื่อร้าน</b>\n        <ion-input slot=\"end\" color=\"primary\" type=\"text\" formControlName=\"store_name\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">พร้อมเพย์</b>\n         <ion-input slot=\"end\"  color=\"primary\" type=\"text\" formControlName=\"promptpay\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">โทรศัพท์</b>\n         <ion-input slot=\"end\" color=\"primary\" type=\"text\" formControlName=\"mobile_number\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">ค่าขนส่ง</b>\n         <ion-input slot=\"end\" color=\"primary\" type=\"number\" formControlName=\"delivery_price\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">ขั้นต่ำ ฟรีค่าขนส่ง</b>\n         <ion-input slot=\"end\" color=\"primary\" type=\"number\" formControlName=\"free_delivery_price\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">ชื่อ</b>\n         <ion-input slot=\"end\" color=\"primary\" type=\"text\" formControlName=\"firstname\" ></ion-input>\n     </ion-item>\n     <ion-item>\n         <b slot=\"start\">นามสกุล</b>\n         <ion-input slot=\"end\" color=\"primary\" type=\"text\" formControlName=\"lastname\" ></ion-input>\n     </ion-item>\n\n     <ion-item>\n       <ion-label color=\"primary\" position=\"stacked\">ประเภทร้านค้า</ion-label>\n       <ion-select formControlName=\"store_type_id\">\n         <ion-select-option\n           *ngFor=\"let type of store_types\"\n           [value]=\"type.id\"\n           [selected]=\"type.id === store.store_type_id\">\n           {{ type.store_type_th }}\n         </ion-select-option>\n       </ion-select>\n     </ion-item>\n </ion-list>\n\n  <ion-card style=\"background:#FFFFF0;\">\n    <ion-card-content *ngIf=\"store\">\n      <ion-button type=\"submit\" shape=\"round\" expand=\"full\" color=\"primary\" (click)=\"submit()\">\n          <ion-icon name=\"create\"></ion-icon>\n          &nbsp;ปรับปรุงข้อมูล\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/profile/shared/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");










// import { WebView } from '@ionic-native/ionic-webview/ngx';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
let FormComponent = class FormComponent {
    constructor(profileService, route, router, http, builder, toastService, alertService, camera, file
    // @Inject(WebView)  private webView: WebView
    ) {
        this.profileService = profileService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.builder = builder;
        this.toastService = toastService;
        this.alertService = alertService;
        this.camera = camera;
        this.file = file;
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
    ionViewWillEnter() {
        this.profileService.getStoreTypes().subscribe((data) => this.store_types = data.data);
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
    }
    selectPictures() {
        this.camera.getPicture({
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then((imageData) => {
            console.log("Image Selected => ");
            this.store_pic = 'data:image/jpeg;base64,' + imageData;
            this.profileForm.get('store_pic').patchValue(this.store_pic);
        }, (err) => {
            console.log("Image Error=>");
            console.log(err);
        });
    }
    getPicture() {
        this.camera.getPicture({
            quality: 40,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then((imageData) => {
            this.store_pic = 'data:image/jpeg;base64,' + imageData;
            this.profileForm.get('store_pic').patchValue(this.store_pic);
        }, (err) => {
            console.log(err);
        });
    }
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],] }] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"],] }] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/profile/form/form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"]
        // @Inject(WebView)  private webView: WebView
    ])
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












// import { ImagePicker } from '@ionic-native/image-picker/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';
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
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"]
            // ImagePicker,
            // WebView
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

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\nion-input {\n  text-align: right;\n  font-size: 16px; }\n\n.center {\n  display: block;\n  margin: auto;\n  width: 40%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNERBQWEsRUFBQTs7QUFFZjtFQUNDLGlCQUFpQjtFQUFDLGVBQWMsRUFBQTs7QUFHakM7RUFDRyxjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnMS5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5pb24taW5wdXQge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O2ZvbnQtc2l6ZToxNnB4O1xyXG5cdC8vLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxufVxyXG4uY2VudGVyIHtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIG1hcmdpbjogYXV0bztcclxuICAgd2lkdGg6IDQwJTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   ILatLng,
//   Marker
// } from '@ionic-native/google-maps';

let ProfilePage = class ProfilePage {
    constructor(profileservice, geolocation, toastService, route, camera, _formBuilder, event, platform, _loading) {
        this.profileservice = profileservice;
        this.geolocation = geolocation;
        this.toastService = toastService;
        this.route = route;
        this.camera = camera;
        this._formBuilder = _formBuilder;
        this.event = event;
        this.platform = platform;
        this._loading = _loading;
        this.store_pic = '';
        //alert(JSON.stringify(this.store));
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.store = JSON.parse(localStorage.getItem('store'));
            console.log(this.store);
            this.store_pic = this.store.store_pic;
            if (this.store_pic) {
                this.store_pic = 'https://qrdee.co/app/' + this.store_pic;
            }
            // localStorage.setItem("store_lat",this.store.latitude);
            // localStorage.setItem("store_lng",this.store.longitude);
            //
            //await this.platform.ready();
            this.buildForm();
            yield this.loadStoreTypes();
            // this.latitude.patchValue( this.store.latitude );
            // this.longitude.patchValue( this.store.longitude );
        });
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadStoreTypes();
            this.loadMap();
        });
    }
    // ionViewWillEnter() {
    //this.loadProfile();
    //  this.loadStoreTypes();
    // }
    ngAfterViewInit() {
        // this.geolocation.getCurrentPosition().then((resp) => {
        //     this.store.latitude = resp.coords.latitude;
        //     this.store.longitude = resp.coords.longitude;
        //     this.loadMap();
        // });
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.latitude.patchValue(localStorage.getItem('store_lat'));
            this.longitude.patchValue(localStorage.getItem('store_lng'));
            //console.log(this.form.value);
            const loading = yield this._loading.create();
            yield loading.present();
            yield this.profileservice.updateProfile(this.form.value, this.store.id)
                .subscribe((data) => {
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
                this.event.publish('store:changed', data);
                loading.dismiss();
                this.toastService.showToast(`ปรับปรุงข้อมูลเรียบร้อยแล้ว`, 'top');
            }, (err) => {
                console.log(err);
                this.toastService.showToast(JSON.stringify(err), 'top');
                loading.dismiss();
            });
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
        });
    }
    loadStoreTypes() {
        this.profileservice.getStoreTypes().subscribe((data) => {
            this.store_types = data;
            console.log(this.store_types);
        });
    }
    loadMap() {
        //    this.map = GoogleMaps.create('map_canvas2', {
        //     camera: {
        //        target: {
        //          lat: this.store.latitude,
        //          lng: this.store.longitude
        //        },
        //        zoom: 12
        //      },
        //     gestures: {
        //        scroll: true,
        //        tilt: true,
        //        rotate: true,
        //        zoom: true
        //    }
        //   });
        //
        //
        //
        //
        // this.marker = this.map.addMarkerSync({
        //   position: {
        //     lat: this.store.latitude,
        //     lng: this.store.longitude
        //   }
        // });
        // console.log(this.marker);
        //
        // this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe((params: any[]) => {
        //    const cameraPosition: any = params[0];
        //    this.store.latitude = cameraPosition.target.lat;
        //    this.store.longitude = cameraPosition.target.lng;
        //
        //    //this.marker.position = cameraPosition.target;
        //    this.latitude.patchValue( this.store.latitude );
        //    this.longitude.patchValue( this.store.longitude );
        //
        //    console.log(this.store.latitude+" / "+this.store.longitude);
        //    this.marker.setPosition(cameraPosition.target);
        //  });
        localStorage.setItem("store_lat", this.latitude.value);
        localStorage.setItem("store_lng", this.longitude.value);
        let latLng = new google.maps.LatLng(this.latitude.value, this.longitude.value);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 15,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        let marker = new google.maps.Marker({
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
    }
    selectPictures() {
        this.camera.getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then((image) => {
            console.log("store_pic selected..... =>");
            this.store_pic = 'data:image/jpeg;base64,' + image;
            this.form.get('store_pic').patchValue(this.store_pic);
            // console.log(base64Image);
            // this.preview = base64Image;
            // this.form.get('photo').patchValue(base64Image);
        }, (err) => {
            console.log(err);
        });
    }
    getPicture() {
        this.camera.getPicture({
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }).then((image) => {
            this.store_pic = 'data:image/jpeg;base64,' + image;
            this.form.get('store_pic').patchValue(this.store_pic);
            // console.log(base64Image);
            // this.preview = base64Image;
            // this.form.get('photo').patchValue(base64Image);
        }, (err) => {
            console.log(err);
        });
    }
    buildForm() {
        if (!this.store.free_delivery_price) {
            this.store.free_delivery_price = 300;
        }
        this.form = this._formBuilder.group({
            store_name: this.store.store_name,
            promptpay: this.store.promptpay,
            mobile_number: this.store.mobile_number,
            delivery_price: this.store.delivery_price,
            free_delivery_price: this.store.free_delivery_price,
            firstname: this.store.firstname,
            lastname: this.store.lastname,
            store_type_id: this.store.store_type_id,
            latitude: this.store.latitude,
            longitude: this.store.longitude,
            store_pic: null
        });
    }
    get latitude() { return this.form.get('latitude'); }
    get longitude() { return this.form.get('longitude'); }
};
ProfilePage.ctorParameters = () => [
    { type: _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] }
];
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]])
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
        console.log(`${this.baseUrl}`);
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
    updateProfile(data, store_id) {
        // console.log(data);
        // console.log(store_id);
        return this.http.put(`https://qrdee.co/api/v2/stores/${store_id}`, data);
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    getStoreTypes() {
        return this.http.get(`https://qrdee.co/api/v2/refs?t=store_types`);
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
    showLongToast(message, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: position,
                duration: 30000,
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



let TransactionService = class TransactionService {
    constructor(http) {
        this.http = http;
    }
    ////////////////// v2 ///////////////////
    genQR(promptpay, price) {
        return this.http.get(`https://qrdee.co/api/v2/qr?promptpay=${promptpay}&price=${price}`);
    }
    insertTransaction(products, prompt_payload, price, store_id) {
        const body = {
            price: price,
            prompt_payload: prompt_payload,
            products: products
        };
        return this.http.post(`https://qrdee.co/api/v2/trnqr/${store_id}`, body);
    }
    getOrders(store_id) {
        return this.http.get(`https://qrdee.co/api/v2/orders/${store_id}`);
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