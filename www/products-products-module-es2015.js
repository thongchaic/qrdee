(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/form/form.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/form/form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n -->\n    <ion-title>แก้ไขข้อมูล</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button  color=\"danger\"  defaultHref=\"products\"></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [formGroup]=\"productForm\" >\n  <ion-card style=\"background:#FFFFFF;\">\n    <ion-card-header>\n      <h3>{{ title }}</h3>\n    </ion-card-header>\n\n    <ion-card-content >\n      <ion-item-group >\n        <ion-item lines=\"none\">\n          <ion-img *ngIf=\"thumbnail\" [src]=\"thumbnail\"></ion-img>\n          <ion-img *ngIf=\"!thumbnail\" src=\"/assets/noimg.png\"></ion-img>\n        </ion-item>\n        <ion-grid>\n          <ion-row justify-content-center>\n            <ion-button size=\"small\" color=\"primary\" (click)=\"getPicture()\">ถ่ายรูปสินค้า</ion-button>\n            <ion-button size=\"small\" color=\"secondary\" (click)=\"selectPictures();\">เลือกจากอัลบั้ม</ion-button>\n          </ion-row>\n        </ion-grid>\n      </ion-item-group>\n\n      <ion-item>\n        <ion-label color=\"primary\" position=\"stacked\">ชื่อสินค้า</ion-label>\n        <ion-input type=\"text\"  formControlName=\"product_th\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color=\"primary\" position=\"stacked\">รายละเอียดสินค้า</ion-label>\n        <ion-textarea  formControlName=\"details_th\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color=\"primary\" position=\"stacked\">หมวดหมู่สินค้า</ion-label>\n        <ion-select formControlName=\"product_type_id\">\n          <ion-select-option\n            *ngFor=\"let cat of product_types\"\n            [value]=\"cat.id\"\n            [selected]=\"cat.id == productForm.get('product_type_id').value\">\n            {{ cat.cat_th }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color=\"danger\" position=\"stacked\">ราคา</ion-label>\n              <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color=\"danger\" position=\"stacked\">ต้นทุน</ion-label>\n              <ion-input type=\"number\" formControlName=\"cost\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- <ion-item>\n        <ion-label position=\"floating\">สต๊อค</ion-label>\n        <ion-input type=\"number\" formControlName=\"instock\"></ion-input>\n      </ion-item> -->\n\n    </ion-card-content>\n    <ion-button type=\"submit\" shape=\"round\" expand=\"full\" color=\"primary\" (click)=\"submit()\">\n     <ion-icon name=\"logo-buffer\"></ion-icon>\n    &nbsp;บันทึก</ion-button>\n  </ion-card>\n</ion-content>\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic 4 Camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-grid>\n      <ion-row class=\"center\">\n        <ion-col size-sm-6>\n          <ion-button size=\"small\" (click)=\"getPicture(1)\">Show Camera</ion-button>\n        </ion-col>\n        <ion-col size-sm-6>\n          <ion-button size=\"small\" (click)=\"getPicture(0)\">Show Album</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item lines=\"none\">\n      <ion-label>Return image file URI</ion-label>\n      <ion-toggle energized [(ngModel)]=\"useURI\"></ion-toggle>\n    </ion-item>\n\n    <ion-card>\n      <ion-card-content>\n        <img [src]=\"imageData\" *ngIf=\"imageData\"/>\n      </ion-card-content>\n      <ion-card-header>\n        <ion-card-title>\n          <div *ngIf=\"useURI\">\n            Using URI\n          </div>\n          <div *ngIf=\"!useURI\">\n            Using Base64\n          </div>\n          <p *ngIf=\"useURI\">\n            Your URI is {{ imageData }}\n          </p>\n          <p *ngIf=\"!useURI\">\n            Your Base64 image has {{ (imageData + '').length }} bytes\n          </p>\n        </ion-card-title>\n      </ion-card-header>\n    </ion-card>\n  </div>\n</ion-content> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/forms/forms.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/forms/forms.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"bg\">\n\n    <p> ตำแหน่ง</p>\n{{ latitude}}\n{{ longitude}}\n\n\n  <ion-grid >\n     \n      <ion-row>\n        <ion-col size=\"12\" >\n           <div #mapElement ></div>\n          <div class=\"btn2\" expand=\"block\"  *ngFor=\"let store_distance of store_distancess;\">\n              <ion-item (click)=\"store_product(store_distance.id)\">\n                 <img slot=\"start\" [src]=\"url+store_distance.store_pic || '/assets/noimg.png'\" \n                  class=\"img_store\" >\n                  <p style=\"font-weight: bold; font-size: 13px;\">\n                  {{store_distance.store_name}}<br> <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>ระยะทาง{{store_distance.distance}} กม.\n                </p>\n              </ion-item> \n             </div> <br><br><br><br><br><br> <br> \n        </ion-col> \n      </ion-row>\n  </ion-grid> \n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/list/list.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/list/list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>สินค้าของฉัน</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- <ion-searchbar placeholder=\"ชื่อ/รหัสสินค้า\" color=\"primary\" animated debounce=\"500\" (ionChange)=\"search($event.target.value)\">\n  </ion-searchbar> -->\n\n    <!-- <ion-list-header >\n      <ion-label>สินค้า</ion-label>\n    </ion-list-header> -->\n  <ion-list>\n  <ion-item-sliding *ngFor=\"let product of products\">\n      <ion-item>\n\n        <ion-avatar slot=\"start\">\n          <img *ngIf=\"product.thumbnail\" [src]=\"'https://qrdee.co/app/'+product.thumbnail\">\n          <img *ngIf=\"!product.thumbnail\" src=\"/assets/noimg.png\">\n        </ion-avatar>\n\n        <ion-label>\n          <h5><ion-text color=\"dark\">{{ product.product_th }}</ion-text></h5>\n        </ion-label>\n        <ion-label>\n          <h5><ion-text color=\"dark\">{{ product.price }}฿</ion-text></h5>\n        </ion-label>\n\n        <ion-button fill=\"clear\"  slot=\"end\" color=\"secondary\" routerLink=\"/products/{{ product.id }}/edit\">\n           <ion-icon name=\"create\"></ion-icon>\n         </ion-button>\n\n      </ion-item>\n\n    <ion-item-options>\n      <ion-item-option color=\"light\">\n          <ion-button fill=\"clear\" color=\"danger\" (click)=\"deleteProduct(product.id);\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-item-option>\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  <ion-item>\n    <ion-label slot=\"end\">\n      <ion-text color=\"dark\"> เพิ่มสินค้า </ion-text>\n    </ion-label>\n    <ion-button fill=\"clear\" size=\"large\" slot=\"end\" color=\"primary\" routerLink=\"/products/create\">\n       <ion-icon name=\"md-add-circle\"></ion-icon>\n     </ion-button>\n  </ion-item>\n\n   <ion-infinite-scroll threshold=\"10%\" (ionInfinite)=\"loadData($event.target)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-list>\n\n    <!-- <ion-item-options side=\"end\" *ngIf=\"usertype == 1\">\n    <ion-item-option color=\"light\">\n    <ion-button fill=\"clear\" size=\"large\" color=\"secondary\" routerDirection=\"forward\" routerLink=\"/products/{{ product.id }}/edit\">\n    <ion-icon name=\"create\"></ion-icon>\n    </ion-button>\n    <ion-button fill=\"clear\" size=\"large\" color=\"danger\" (click)=\"deleteProduct(product.id);\">\n    <ion-icon name=\"close\"></ion-icon>\n    </ion-button>\n    </ion-item-option>\n    </ion-item-options>\n    </ion-item-sliding>\n    <ion-infinite-scroll threshold=\"10%\" (ionInfinite)=\"loadData($event.target)\">\n    <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n    </ion-infinite-scroll> -->\n\n\n</ion-content>\n\n<ion-footer>\n  <!-- <ion-button  routerLink=\"/cart\" type=\"submit\" (click)=\"submit()\" expand=\"full\" color=\"success\">\n        <ion-icon ios=\"ios-cart\" md=\"md-cart\"></ion-icon>\n    &nbsp;ตะกร้าสินค้า\n  </ion-button> -->\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n  <ion-router-outlet></ion-router-outlet>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/show-customer/show-customer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/show-customer/show-customer.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-card *ngIf=\"customers\">\n    <ion-img [src]=\"url+customers.thumbnail || 'assets/noimg.png'\"></ion-img>\n    <ion-card-header>\n      <!-- <ion-card-subtitle>รหัสสินค้า {{ customer.code_product }}</ion-card-subtitle> -->\n      <ion-card-title>\n        {{ customers.product_th }}\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <h4><strong>ราคา: </strong>{{ customers.price }}</h4>\n      <h4><strong>รายละเอียด: </strong><br> {{ customers.details_th }}</h4>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"store_customer(customers.store_id)\" routerDirection=\"backward\">กลับ</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/show/show.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/show/show.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-card *ngIf=\"product\">\n    <ion-img [src]=\"url+product.thumbnail || 'assets/noimg.png'\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>รหัสสินค้า {{ product.code_product ? product.code_product : '-'}}</ion-card-subtitle>\n      <ion-card-title>\n        {{ product.product_th }}\n        <!-- <ion-badge color=\"success\" *ngIf=\"product.incart == 1\">เพิ่มลงในตะกร้าแล้ว</ion-badge>\n        <ion-button size=\"small\" fill=\"clear\" color=\"primary\" *ngIf=\"product.incart == 0 && product.allowAdd == 1\" (click)=\"addToCart(product);\">\n          <ion-icon slot=\"icon-only\" name=\"basket\"></ion-icon>\n        </ion-button> -->\n      </ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <p><strong>ราคาขาย: </strong>{{ product.price }}</p>\n      <p><strong>ราคาต้นทุน: </strong>{{ product.cost }}</p>\n      <p><strong>จำนวนที่เหลืออยู่ในสต๊อค: </strong>{{ product.instock }}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"full\" color=\"primary\" routerLink=\"/products\" routerDirection=\"backward\">กลับ</ion-button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/products/form/form.component.scss":
/*!***************************************************!*\
  !*** ./src/app/products/form/form.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9wcm9kdWN0cy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/products/form/form.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/form/form.component.ts ***!
  \*************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







// import { WebView } from '@ionic-native/ionic-webview/ngx';



let FormComponent = class FormComponent {
    constructor(route, router, productService, barcodeScanner, builder, camera, file, 
    // @Inject(WebView)  private webView: WebView,
    toastService, _loading, navCtrl) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.barcodeScanner = barcodeScanner;
        this.builder = builder;
        this.camera = camera;
        this.file = file;
        this.toastService = toastService;
        this._loading = _loading;
        this.navCtrl = navCtrl;
        // getPicture
        this.useURI = true;
        this.productForm = this.builder.group({
            product_type_id: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            product_th: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            details_th: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cost: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            thumbnail: null
        });
        this.thumbnail = null;
        this.formType = 'CREATE' || false;
        this.imageSrc = '';
        this.scan = false;
        this.show_code_product = '';
        this.title = '';
        this.store = JSON.parse(localStorage.getItem('store'));
    }
    // getPicture
    // getPicture(srcType: number) {
    //  const options: CameraOptions = {
    //    quality: 100,
    //    destinationType: this.useURI ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,
    //    encodingType: this.camera.EncodingType.JPEG,
    //    mediaType: this.camera.MediaType.PICTURE,
    //    sourceType: srcType,
    //    targetWidth: 800,
    //    targetHeight: 800,
    //  };
    //
    //  this.camera.getPicture(options).then((imageData) => {
    //    this.imageData = (window as any).Ionic.WebView.convertFileSrc(imageData);
    //    alert(this.imageData);
    //  }, (err) => {
    //    alert("Camera error!!!");
    //  });
    // }
    // private readFile(file: any) {
    //  const reader = new FileReader();
    //  reader.onloadend = () => {
    //    const imgBlob = new Blob([reader.result], { type: file.type });
    //    this.productForm.controls['imageData'].setValue(imgBlob);
    //  }
    //  reader.readAsArrayBuffer(file);
    // }
    ionViewWillEnter() {
        this.productService.getProductTypes().subscribe((data) => this.product_types = data);
        if (this.route.snapshot.data.formType === 'CREATE') {
            this.formType = 'CREATE';
            this.title = 'เพิ่มสินค้า';
        }
        else {
            this.title = 'แก้ไขสินค้า';
            this.formType = 'EDIT';
            // console.log(this.route.snapshot.params['id']);
            this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data => {
                this.productForm.setValue({
                    product_type_id: data.product_type_id,
                    product_th: data.product_th,
                    details_th: data.details_th,
                    price: data.price,
                    cost: data.cost,
                    thumbnail: null
                });
                if (data.thumbnail) {
                    this.thumbnail = 'https://qrdee.co/app/' + data.thumbnail;
                }
            }, err => {
            });
        }
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
            this.thumbnail = 'data:image/jpeg;base64,' + imageData;
            this.productForm.get('thumbnail').patchValue(this.thumbnail);
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
        }).then((image) => {
            this.thumbnail = 'data:image/jpeg;base64,' + image;
            this.productForm.get('thumbnail').patchValue(this.thumbnail);
        }, (err) => {
            console.log(err);
        });
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this._loading.create();
            yield loading.present();
            if (this.formType === 'CREATE') {
                this.productService.createProduct(this.productForm.value, this.store.id).subscribe(res => {
                    console.log(res);
                    loading.dismiss();
                    this.toastService.showToast('เพิ่มสินค้าเรียบร้อยแล้ว', 'top');
                    this.router.navigateByUrl('/products');
                }, err => {
                    loading.dismiss();
                    this.toastService.showToast('เพิ่มสินค้าไม่สำเร็จ โปรดลองอีกครั้ง', 'top');
                    this.router.navigateByUrl('/products');
                });
            }
            else {
                //console.log(this.productForm.value);
                console.log("UPDATE =>" + this.route.snapshot.params['id']);
                this.productService.updateProduct(this.productForm.value, this.route.snapshot.params['id']).subscribe(res => {
                    //alert(JSON.stringify(res));
                    console.log("UPDATE RES=>");
                    console.log(res);
                    //alert(JSON.stringify(res));
                    loading.dismiss();
                    this.toastService.showToast('แก้ไขสินค้าเรียบร้อยแล้ว', 'top');
                    this.router.navigateByUrl('/products');
                }, err => {
                    loading.dismiss();
                    console.log("ERROR update product=>");
                    console.log(err);
                    //alert(JSON.stringify(err));
                });
            }
        });
    }
    letScan() {
        const barcodeScannerOptions = {
            formats: "QR_CODE,EAN_13"
        };
        this.barcodeScanner.scan(barcodeScannerOptions).then((result) => {
            this.productForm.controls['code_product'].setValue(result.text);
            this.show_code_product = result.text;
        }).catch(err => {
            console.log('Error', err);
        });
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],] }] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],] }] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormComponent.prototype, "useURI", void 0);
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/products/form/form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]])
], FormComponent);



/***/ }),

/***/ "./src/app/products/forms/forms.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/products/forms/forms.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_store {\n  width: 80px;\n  height: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9wcm9kdWN0cy9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFdBQVc7RUFBRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdfc3RvcmV7XHJcblx0d2lkdGg6IDgwcHg7IGhlaWdodDogODBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/products/forms/forms.component.ts":
/*!***************************************************!*\
  !*** ./src/app/products/forms/forms.component.ts ***!
  \***************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _shared_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/forms.service */ "./src/app/products/shared/forms.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





// import { Http, Headers, RequestOptions } from '@angular/http';





let FormsComponent = class FormsComponent {
    constructor(geolocation, productServices, toastService, route, router, http, builder, loadingController, navCtrl) {
        this.geolocation = geolocation;
        this.productServices = productServices;
        this.toastService = toastService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.builder = builder;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        // ตัวแปร
        this.title = '';
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].url;
    }
    ngAfterViewInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp);
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
                center: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                zoom: 6,
            });
            const infoWindow = new google.maps.InfoWindow;
            const pos = { lat: this.latitude, lng: this.longitude };
            infoWindow.setPosition(pos);
            infoWindow.setContent('ตำแหน่งของคุณ.');
            infoWindow.open(map);
            map.setCenter(pos);
            this.loadStoreDistance();
        }).catch((error) => {
            console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error);
        });
    }
    // store_id = 0 ;
    store_product(id) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(id)
            }
        };
        this.router.navigate(['products'], navigationExtras);
        console.log('id', id);
        console.log('navigationExtras', navigationExtras);
    }
    loadStoreDistance() {
        this.productServices.getStoredistances(this.latitude, this.longitude).subscribe((data) => {
            this.store_distancess = data.data;
            //  console.log('tesssst',this.latitude,this.longitude);
            console.log('รายชื่อร้านค้า', this.store_distancess);
            console.log('ตำแหน่งลูกค้า', this.latitude, this.longitude);
        });
    }
};
FormsComponent.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _shared_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FormsComponent.prototype, "mapNativeElement", void 0);
FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms',
        template: __webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/forms/forms.component.html"),
        styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/products/forms/forms.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
        _shared_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]])
], FormsComponent);



/***/ }),

/***/ "./src/app/products/list/list.component.scss":
/*!***************************************************!*\
  !*** ./src/app/products/list/list.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  --padding-left: 10px;\n  --padding-right: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9wcm9kdWN0cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBZTtFQUNmLHFCQUFnQjtFQUNoQixxQkFBZ0I7RUFDaEIsbUJBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XHJcbiAgLS1wYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/products/list/list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/list/list.component.ts ***!
  \*************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var src_app_cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cart/shared/cart.service */ "./src/app/cart/shared/cart.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let ListComponent = class ListComponent {
    constructor(productService, cartService, toastService, alertController, router, route, _loading) {
        this.productService = productService;
        this.cartService = cartService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this._loading = _loading;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this.page = 1;
        this.store_id = 0;
        this.usertype = '';
        this.searchTerm = '';
        this.query = '';
        this.products = [];
        this.store = JSON.parse(localStorage.getItem('store'));
        // this.route.queryParams.subscribe(params => {
        //   console.log(params);
        //   if (params && params.special) {
        //     this.store_id = JSON.parse(params.special);
        //     console.log('store_id: ',this.store_id);
        //
        //   }
        // });
    }
    ionViewWillEnter() {
        this.loadProducts();
    }
    loadProducts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.store) {
                return;
            }
            const loading = yield this._loading.create();
            yield loading.present();
            //alert(JSON.stringify(this.store));
            this.productService.getProducts(this.store.id).subscribe((data) => {
                //alert(JSON.stringify(data));
                console.log(data);
                loading.dismiss();
                this.products = data;
            }, err => {
                loading.dismiss();
            });
            // if(this.store_id) {
            //   this.productService.getAllS(this.store_id).subscribe(res => {
            //   console.log(res);
            //   this.products = res.products.data;
            //   this.checkProducts(this.products);
            //   this.page = 1;
            //   });
            // }else {
            //   this.productService.getAll().subscribe(res => {
            //   console.log(res);
            //   this.products = res.products.data;
            //   this.checkProducts(this.products);
            //   this.page = 1;
            //   });
            // }
        });
    }
    // user_customer(id) {
    //   let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     special: JSON.stringify(id)
    //   }
    //   };
    //   this.router.navigate(['/products/show/customer'], navigationExtras);
    //   console.log(navigationExtras);
    //
    // }
    // search(query) {
    //
    //   if(this.store){
    //     this.searchTerm = query;
    //     this.productService.searchs(this.store.id,query, 1).subscribe(res => {
    //         console.log(this.products);
    //         this.products =  res.data;
    //         this.checkProducts(this.products);
    //         this.page = 1;
    //     });
    //
    //   }else{
    //     this.searchTerm = query;
    //     this.productService.search(query, 1).subscribe(res => {
    //        console.log(this.products)
    //       this.products = res.data;
    //       this.checkProducts(this.products);
    //       this.page = 1;
    //     });
    //   }
    // }
    // addToCart(product) {
    //   this.cartService.addToCart(product);
    //   this.toastService.showToast(`เพิ่ม ${product.product_th} ลงในตะกร้า`, 'top');
    // }
    loadData(infiniteScroll) {
        this.loadProducts();
        infiniteScroll.disabled = true;
        // if(this.store_id){
        // this.page++;
        // this.productService.searchs(this.store_id,this.searchTerm, this.page).subscribe(res => {
        // if(Object.keys(res).length === 0 && res.constructor === Object) {
        // infiniteScroll.disabled = true;
        // }
        // setTimeout(() => {
        // this.products = this.products.concat(res.data);
        // this.checkProducts(this.products);
        // infiniteScroll.complete();
        //
        // if(this.page >= res['last_page']) {
        //   infiniteScroll.disabled = true;
        // }
        // }, 500);
        // });
        //
        //
        // }else{
        //
        // this.page++;
        // this.productService.search(this.searchTerm, this.page).subscribe(res => {
        // if(Object.keys(res).length === 0 && res.constructor === Object) {
        // infiniteScroll.disabled = true;
        // }
        // setTimeout(() => {
        // this.products = this.products.concat(res.data);
        // this.checkProducts(this.products);
        // infiniteScroll.complete();
        //
        // if(this.page >= res['last_page']) {
        //   infiniteScroll.disabled = true;
        // }
        // }, 500);
        // });
        // }
    }
    // checkProducts(products) {
    //   if(this.products){
    //     this.store_id;
    //     products.forEach(product => {
    //       if(this.cartService.checkInCart(product)) {
    //         console.log(this.store_id);
    //         product.incart = 1;
    //       } else {
    //         product.incart = 0;
    //       }
    //
    //       if(product.instock == 0) {
    //         product.allowAdd = 0;
    //       } else {
    //         product.allowAdd = 1;
    //       }
    //     });
    //   }
    // }
    deleteProduct(id) {
        this.presentAlertConfirmDelete(id);
    }
    presentAlertConfirmDelete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'คุณต้องการลบสินค้าชิ้นนี้ใช่หรือไม่',
                buttons: [
                    {
                        text: 'ยกเลิก',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'ตกลง',
                        handler: () => {
                            this.productService.deleteProduct(id).subscribe(() => {
                                this.toastService.showToast(`ลบสินค้าเรียบร้อยแล้ว`, 'top');
                                this.loadProducts();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: src_app_cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/list/list.component.html"),
        styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/products/list/list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
        src_app_cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]])
], ListComponent);



/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products.page */ "./src/app/products/products.page.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./src/app/products/form/form.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/list.component */ "./src/app/products/list/list.component.ts");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cart/shared/cart.service */ "./src/app/cart/shared/cart.service.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./show/show.component */ "./src/app/products/show/show.component.ts");
/* harmony import */ var _show_customer_show_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./show-customer/show-customer.component */ "./src/app/products/show-customer/show-customer.component.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/products/forms/forms.component.ts");
/* harmony import */ var _shared_forms_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/forms.service */ "./src/app/products/shared/forms.service.ts");

















// import { WebView } from '@ionic-native/ionic-webview/ngx';


const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_7__["ProductsPage"],
        children: [
            {
                path: '',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                data: { title: 'รายการสินค้า' }
            },
            {
                path: 'imgs',
                component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_17__["FormsComponent"],
                data: { title: 'เพิ่มรูป', formType: 'IMGS' }
            },
            {
                path: 'create',
                component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                data: { title: 'นำเข้าสินค้า', formType: 'CREATE' }
            },
            {
                path: ':id/edit',
                component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                data: { title: 'แก้ไขสินค้า', formType: 'EDIT' }
            },
            {
                path: ':id',
                component: _show_show_component__WEBPACK_IMPORTED_MODULE_13__["ShowComponent"],
                data: { title: 'รายละเอียดสินค้า' }
            },
            {
                path: 'show/customer',
                component: _show_customer_show_customer_component__WEBPACK_IMPORTED_MODULE_14__["ShowCustomerComponent"],
                data: { title: 'ขนส่ง' }
            }
        ]
    }
];
let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _products_page__WEBPACK_IMPORTED_MODULE_7__["ProductsPage"],
            _list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
            _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
            _show_show_component__WEBPACK_IMPORTED_MODULE_13__["ShowComponent"],
            _show_customer_show_customer_component__WEBPACK_IMPORTED_MODULE_14__["ShowCustomerComponent"],
            _forms_forms_component__WEBPACK_IMPORTED_MODULE_17__["FormsComponent"],
        ],
        providers: [
            _shared_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"],
            _shared_forms_service__WEBPACK_IMPORTED_MODULE_18__["FormsService"],
            _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_12__["BarcodeScanner"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__["Camera"]
            // WebView
        ]
    })
], ProductsPageModule);



/***/ }),

/***/ "./src/app/products/products.page.scss":
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xuXHQgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcxLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/products/products.page.ts":
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductsPage = class ProductsPage {
    constructor() { }
    ngOnInit() {
    }
};
ProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html"),
        styles: [__webpack_require__(/*! ./products.page.scss */ "./src/app/products/products.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ProductsPage);



/***/ }),

/***/ "./src/app/products/show-customer/show-customer.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/products/show-customer/show-customer.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Nob3ctY3VzdG9tZXIvc2hvdy1jdXN0b21lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/products/show-customer/show-customer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/products/show-customer/show-customer.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShowCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowCustomerComponent", function() { return ShowCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




// import { Product } from '../shared/product';

let ShowCustomerComponent = class ShowCustomerComponent {
    constructor(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        this.id = 0;
        this.usertype = '';
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params && params.special) {
                this.id = JSON.parse(params.special);
                console.log('id: ', this.id);
            }
        });
        this.usertype = localStorage.getItem('usertype');
    }
    ionViewWillEnter() {
        this.loadProductcustomer();
        this.loadProduct();
    }
    loadProductcustomer() {
        this.productService.getAllproduct(this.id).subscribe(data => {
            this.customers = data.products[0];
            // console.log(data);
            console.log(this.customers);
        });
    }
    loadProduct() {
        this.productService.get(this.route.snapshot.paramMap.get('id')).subscribe(data => {
            // this.product = data;
            console.log(data);
        });
    }
    store_customer(id) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(id)
            }
        };
        this.router.navigate(['products'], navigationExtras);
        // console.log(id);
        console.log(navigationExtras);
    }
};
ShowCustomerComponent.ctorParameters = () => [
    { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ShowCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show-customer',
        template: __webpack_require__(/*! raw-loader!./show-customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/show-customer/show-customer.component.html"),
        styles: [__webpack_require__(/*! ./show-customer.component.scss */ "./src/app/products/show-customer/show-customer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ShowCustomerComponent);



/***/ }),

/***/ "./src/app/products/show/show.component.scss":
/*!***************************************************!*\
  !*** ./src/app/products/show/show.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Nob3cvc2hvdy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/products/show/show.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/show/show.component.ts ***!
  \*************************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/products/shared/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




// import { Product } from '../shared/product';

let ShowComponent = class ShowComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
    }
    ionViewWillEnter() {
        this.loadProduct();
    }
    loadProduct() {
        this.productService.get(this.route.snapshot.paramMap.get('id')).subscribe(data => {
            this.product = data;
            console.log(data);
        });
    }
};
ShowComponent.ctorParameters = () => [
    { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show',
        template: __webpack_require__(/*! raw-loader!./show.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/show/show.component.html"),
        styles: [__webpack_require__(/*! ./show.component.scss */ "./src/app/products/show/show.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ShowComponent);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map