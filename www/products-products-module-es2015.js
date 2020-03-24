(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/products/form/form.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/form/form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [formGroup]=\"productForm\" class=\"app-background\">\n  <ion-card style=\"background:#FFFFFF;\">\n    <ion-card-header>\n      <ion-card-title>{{ title }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content >\n      <ion-item-group >\n        <ion-item lines=\"none\">\n          <!-- <ion-img [src]=\"imageData || '/assets/noimg.png'\" *ngIf=\"imageData\" ></ion-img> -->\n          <ion-img [src]=\"imageData || '/assets/noimg.png'\" *ngIf=\"imageData\"></ion-img>\n        </ion-item>\n        <ion-grid>\n          <ion-row justify-content-center>\n            <ion-button size=\"small\" color=\"primary\" (click)=\"getPicture(1)\">ถ่ายรูปสินค้า</ion-button>\n            <ion-button size=\"small\" color=\"secondary\" (click)=\"getPicture(0)\">เลือกจากอัลบั้ม</ion-button>\n          </ion-row>\n        </ion-grid>  \n        <!-- <p *ngIf=\"useURI\">\n          Your URI is {{ imageData }}\n        </p> -->\n       \n      </ion-item-group> \n\n      <ion-item>\n        <ion-label position=\"floating\">รหัสสินค้า</ion-label>\n        <ion-input type=\"text\" formControlName=\"code_product\" (ionFocus)=\"letScan()\" [value]=\"show_code_product\"></ion-input>\n      <!-- <ion-button slot=\"end\" size=\"small\" color=\"success\" *ngIf=\"scan\" (click)=\"letScan()\">สแกน</ion-button>         -->\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">ประเภทสินค้า</ion-label>\n        <ion-select formControlName=\"product_type_id\">\n          <ion-select-option \n            *ngFor=\"let cat of product_types\" \n            [value]=\"cat.id\" \n            [selected]=\"cat.id === productForm.get('product_type_id').value\">\n            {{ cat.cat_th }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">ชื่อสินค้า</ion-label>\n        <ion-input type=\"text\" formControlName=\"product_th\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">รายละเอียดสินค้า</ion-label>\n        <ion-textarea autofocus=\"true\" formControlName=\"details_th\"></ion-textarea>\n      </ion-item>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">ราคาขาย</ion-label>\n              <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">ราคาต้นทุน</ion-label>\n              <ion-input type=\"number\" formControlName=\"cost\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-item>\n        <ion-label position=\"floating\">จำนวนในสต๊อค</ion-label>\n        <ion-input type=\"number\" formControlName=\"instock\"></ion-input>\n      </ion-item>\n      \n    </ion-card-content>\n    <ion-button type=\"submit\" expand=\"full\" color=\"success\" (click)=\"submit()\">\n     <ion-icon name=\"logo-buffer\"></ion-icon>\n    &nbsp;บันทึก</ion-button>\n  </ion-card>  \n</ion-content>\n\n\n\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic 4 Camera\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <ion-grid>\n      <ion-row class=\"center\">\n        <ion-col size-sm-6>\n          <ion-button size=\"small\" (click)=\"getPicture(1)\">Show Camera</ion-button>\n        </ion-col>\n        <ion-col size-sm-6>\n          <ion-button size=\"small\" (click)=\"getPicture(0)\">Show Album</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-item lines=\"none\">\n      <ion-label>Return image file URI</ion-label>\n      <ion-toggle energized [(ngModel)]=\"useURI\"></ion-toggle>\n    </ion-item>\n\n    <ion-card>\n      <ion-card-content>\n        <img [src]=\"imageData\" *ngIf=\"imageData\"/>\n      </ion-card-content>\n      <ion-card-header>\n        <ion-card-title>\n          <div *ngIf=\"useURI\">\n            Using URI\n          </div>\n          <div *ngIf=\"!useURI\">\n            Using Base64\n          </div>\n          <p *ngIf=\"useURI\">\n            Your URI is {{ imageData }}\n          </p>\n          <p *ngIf=\"!useURI\">\n            Your Base64 image has {{ (imageData + '').length }} bytes\n          </p>\n        </ion-card-title>\n      </ion-card-header>\n    </ion-card>\n  </div>\n</ion-content> -->\n\n"

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

module.exports = "<ion-content>\n  <ion-searchbar placeholder=\"ชื่อ/รหัสสินค้า\" color=\"primary\" animated debounce=\"500\" (ionChange)=\"search($event.target.value)\">\n  </ion-searchbar>\n  <ion-list>\n    <!-- <ion-card> -->\n    <ion-list-header >\n      <ion-label>สินค้า</ion-label>\n    </ion-list-header>\n\n    <ion-list>\n\n  <!-- Sliding item with icon start options on end side -->\n  <ion-item-sliding *ngFor=\"let product of products\">\n      <ion-item>\n        <!--  store -->\n          <ion-avatar slot=\"start\" *ngIf=\"usertype == 1\">\n            <a routerLink=\"/products/{{ product.id }}\">\n              <img [src]=\"url+product.thumbnail || '/assets/noimg.png'\">\n            </a>\n          </ion-avatar>\n      <!-- customer -->\n          <ion-avatar slot=\"start\" *ngIf=\"usertype == 3\" (click)=\"user_customer(product.id)\">\n            <a routerLink=\"/products/{{ product.id }}\">\n              <img [src]=\"url+product.thumbnail || '/assets/noimg.png'\">\n            </a>\n          </ion-avatar>\n\n        <ion-label>\n          \n          <h5><ion-text color=\"dark\">รหัส: {{ product.code_product ? product.code_product : '-' }}</ion-text></h5>\n          <h5><ion-text color=\"dark\">ชื่อ: {{ product.product_th }}</ion-text></h5>\n        </ion-label>\n        <ion-badge slot=\"end\" color=\"success\" *ngIf=\"product.incart == 1\">เพิ่มลงในตะกร้าแล้ว</ion-badge>\n        <ion-badge color=\"danger\" slot=\"end\" *ngIf=\"product.instock == 0 && product.allowAdd == 0\">หมดสต๊อค</ion-badge>\n        <ion-button fill=\"clear\" color=\"primary\" slot=\"end\" *ngIf=\"product.incart == 0 && product.allowAdd == 1\" (click)=\"addToCart(product);\">\n          <ion-icon slot=\"icon-only\" name=\"basket\"></ion-icon>\n        </ion-button>\n        \n      </ion-item>\n\n    <ion-item-options *ngIf=\"usertype == 1\">\n      <ion-item-option color=\"light\">\n         <ion-button fill=\"clear\" size=\"large\" color=\"secondary\" routerDirection=\"forward\" routerLink=\"/products/{{ product.id }}/edit\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-button>\n          <ion-button fill=\"clear\" size=\"large\" color=\"danger\" (click)=\"deleteProduct(product.id);\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n\n   <ion-infinite-scroll threshold=\"10%\" (ionInfinite)=\"loadData($event.target)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n</ion-list>\n\n\n\n      <!-- <ion-item-options side=\"end\" *ngIf=\"usertype == 1\">\n        <ion-item-option color=\"light\">\n          <ion-button fill=\"clear\" size=\"large\" color=\"secondary\" routerDirection=\"forward\" routerLink=\"/products/{{ product.id }}/edit\">\n            <ion-icon name=\"create\"></ion-icon>\n          </ion-button>\n          <ion-button fill=\"clear\" size=\"large\" color=\"danger\" (click)=\"deleteProduct(product.id);\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-infinite-scroll threshold=\"10%\" (ionInfinite)=\"loadData($event.target)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll> -->\n  \n\n\n\n\n</ion-list> \n</ion-content>\n\n<ion-footer>\n  <ion-button  routerLink=\"/cart\" type=\"submit\" (click)=\"submit()\" expand=\"full\" color=\"success\">\n        <ion-icon ios=\"ios-cart\" md=\"md-cart\"></ion-icon>\n    &nbsp;ตะกร้าสินค้า\n  </ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>สินค้า</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-router-outlet></ion-router-outlet>\n</ion-content>\n\n<ion-footer>\n  <!-- <ion-button expand=\"full\" [routerDirection]=\"'backward'\" [routerLink]=\"'/cart'\" color=\"danger\">เสร็จสิ้น</ion-button> -->\n</ion-footer>"

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

module.exports = ".app-background {\n  --background: url(\"/assets/bg1.jpg\") 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9wcm9kdWN0cy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDREQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWJhY2tncm91bmR7XHJcblx0IC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnMS5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufSIsIi5hcHAtYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iZzEuanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufSJdfQ== */"

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
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");



// import { Product } from '../shared/product';




// import { ImagePicker } from '@ionic-native/image-picker/ngx';





let FormComponent = class FormComponent {
    constructor(route, router, productService, barcodeScanner, builder, camera, 
    // private imagePicker: ImagePicker,
    file, webView, toastService, loadingController, navCtrl) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.barcodeScanner = barcodeScanner;
        this.builder = builder;
        this.camera = camera;
        this.file = file;
        this.webView = webView;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.useURI = true;
        this.productForm = this.builder.group({
            code_product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            product_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            product_th: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            details_th: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            cost: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            instock: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            imageData: null
        });
        this.formType = 'CREATE' || false;
        this.imageSrc = '';
        this.scan = false;
        this.show_code_product = '';
        this.title = '';
    }
    // getPicture
    getPicture(srcType, imageFileUri, file) {
        const options = {
            quality: 100,
            destinationType: this.useURI ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: srcType,
            targetWidth: 800,
            targetHeight: 800,
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            if (this.useURI) {
                // const temp = imageData.split('?');
                // this.imageData = temp[0];
                this.imageData = window.Ionic.WebView.convertFileSrc(imageData);
                // this.loadPhoto(imageData); 
            }
            else {
                this.imageData = 'data:image/jpeg;base64,' + imageData;
                // this.loadPhoto(imageData);
                // this.file.resolveLocalFilesystemUrl(imageFileUri).then(entry => {
                //   entry['file'](file => {
                //     // this.readFile(file);
                //     const reader = new FileReader();
                //     reader.onloadend = () => {
                //       const imgBlob = new Blob([reader.result], { type: file.type });
                //       this.productForm.controls['imageData'].setValue(imgBlob);
                //     }
                //     reader.readAsArrayBuffer(file);
                //   })
                // })  
            }
        }, (err) => {
            console.log(err);
        });
    }
    loadPhoto(imageFileUri) {
        // this.file.resolveLocalFilesystemUrl(imageFileUri).then(entry => {
        //   entry['file'](file => {
        //     this.readFile(file);
        //   })
        // })
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgBlob = new Blob([reader.result], { type: file.type });
            this.productForm.controls['imageData'].setValue(imgBlob);
        };
        reader.readAsArrayBuffer(file);
    }
    ionViewWillEnter() {
        this.productService.getProductCategory().subscribe((data) => this.product_types = data.data);
        if (this.route.snapshot.data.formType === 'CREATE') {
            this.formType = 'CREATE';
            this.title = 'เพิ่มสินค้า';
        }
        else {
            this.title = 'แก้ไขสินค้า';
            this.formType = 'EDIT';
            // console.log(this.route.snapshot.params['id']);
            this.productService.get(this.route.snapshot.params['id']).subscribe(data => {
                this.productForm.setValue({
                    code_product: data.code_product,
                    product_type_id: data.product_type_id,
                    product_th: data.product_th,
                    details_th: data.details_th,
                    price: data.price,
                    cost: data.cost,
                    instock: data.instock,
                    imageData: null
                });
                this.imageSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].url + data.thumbnail;
                console.log(this.imageSrc);
            });
        }
    }
    submit() {
        // console.log(this.productForm.value)
        if (this.formType === 'CREATE') {
            this.productService.createProduct(this.productForm.value).subscribe(res => {
                this.toastService.showToast('เพิ่มสินค้าเรียบร้อยแล้ว', 'top');
                this.router.navigateByUrl('/products');
            }, err => console.log(this.toastService.showToast('รหัสสินค้านี้มีอยู่แล้ว', 'top')));
        }
        else {
            this.productService.updateProduct(this.productForm.value, this.route.snapshot.params['id']).subscribe(res => {
                this.toastService.showToast('แก้ไขสินค้าเรียบร้อยแล้ว', 'top');
                this.router.navigateByUrl('/products');
            }, err => console.log(err));
        }
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
    // takePhoto() {
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.FILE_URI,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE
    //   }
    //   this.camera.getPicture(options).then((imageData) => {
    //     this.imageSrc = this.webView.convertFileSrc(imageData);
    //     this.base64Image = "data:image/jpeg;base64," + imageData;
    //     this.base64Image = this.imageSrc;
    //   }, (err) => {
    //     this.toastService.showToasts(this.base64Image, 'top');
    //   });
    // this.camera.getPicture({
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   sourceType: this.camera.PictureSourceType.CAMERA,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   cameraDirection: this.camera.Direction.FRONT,
    //   mediaType: this.camera.MediaType.PICTURE
    // }).then(
    //   imageData => {
    //     this.imageSrc = this.webView.convertFileSrc(imageData);
    //     // this.loadPhoto(imageData);   
    //     this.base64Image = "data:image/jpeg;base64," + imageData;
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
    // const options: CameraOptions = {
    //   quality: 40,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
    //   allowEdit :true
    // }
    // this.camera.getPicture(options).then((ImageData) => {
    //   this.imageSrc = this.webView.convertFileSrc(ImageData);
    //   let base64Image = ImageData.replace(/(\r\n|\n|\r)/gm,"");
    //   this.imageSrc  = "data:image/jpeg;base64," + base64Image;
    // },(err) => {
    //   this.imageSrc = this.imageSrc+'/images/products/default.jpg';
    //   this.toastService.showToast('img err', 'top');
    //   console.log(JSON.stringify(err));
    // })
    // }
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
};
FormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],] }] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],] }] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],] }] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] }
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _shared_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__["WebView"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"]])
], FormComponent);



/***/ }),

/***/ "./src/app/products/forms/forms.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/products/forms/forms.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_store {\n  width: 80px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9wcm9kdWN0cy9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQWEsWUFBQTtBQ0VkIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nX3N0b3Jle1xyXG5cdHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7XHJcbn0iLCIuaW1nX3N0b3JlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn0iXX0= */"

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

module.exports = "ion-input {\n  --padding-left: 10px;\n  --padding-right: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9wcm9kdWN0cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQge1xyXG4gIC0tcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIC0tcGFkZGluZy1yaWdodDogMTBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxufVxyXG4iLCJpb24taW5wdXQge1xuICAtLXBhZGRpbmctbGVmdDogMTBweDtcbiAgLS1wYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG59Il19 */"

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
    constructor(productService, cartService, toastService, alertController, router, route) {
        this.productService = productService;
        this.cartService = cartService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this.products = [];
        this.page = 1;
        this.store_id = 0;
        this.usertype = '';
        this.searchTerm = '';
        this.query = '';
        this.usertype = localStorage.getItem('usertype');
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params && params.special) {
                this.store_id = JSON.parse(params.special);
                console.log('store_id: ', this.store_id);
            }
        });
    }
    ionViewWillEnter() {
        this.loadProducts();
    }
    loadProducts() {
        if (this.store_id) {
            this.productService.getAllS(this.store_id).subscribe(res => {
                console.log(res);
                this.products = res.products.data;
                this.checkProducts(this.products);
                this.page = 1;
            });
        }
        else {
            this.productService.getAll().subscribe(res => {
                console.log(res);
                this.products = res.products.data;
                this.checkProducts(this.products);
                this.page = 1;
            });
        }
        // this.productService.getAll().subscribe(res => {
        // console.log(res);
        // this.products = res.products.data;
        // // this.checkProducts(this.products);
        // this.page = 1;
        // });
    }
    user_customer(id) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(id)
            }
        };
        this.router.navigate(['/products/show/customer'], navigationExtras);
        // console.log(id);
        console.log(navigationExtras);
    }
    search(query) {
        if (this.store_id) {
            console.log(query);
            // console.log(store_id);
            this.searchTerm = query;
            this.productService.searchs(this.store_id, query, 1).subscribe(res => {
                console.log(this.products);
                this.products = res.data;
                this.checkProducts(this.products);
                this.page = 1;
            });
        }
        else {
            console.log(query);
            // console.log(store_id);
            this.searchTerm = query;
            this.productService.search(query, 1).subscribe(res => {
                console.log(this.products);
                this.products = res.data;
                this.checkProducts(this.products);
                this.page = 1;
            });
        }
    }
    addToCart(product) {
        this.cartService.addToCart(product);
        this.toastService.showToast(`เพิ่ม ${product.product_th} ลงในตะกร้า`, 'top');
    }
    loadData(infiniteScroll) {
        if (this.store_id) {
            this.page++;
            this.productService.searchs(this.store_id, this.searchTerm, this.page).subscribe(res => {
                if (Object.keys(res).length === 0 && res.constructor === Object) {
                    infiniteScroll.disabled = true;
                }
                setTimeout(() => {
                    this.products = this.products.concat(res.data);
                    this.checkProducts(this.products);
                    infiniteScroll.complete();
                    if (this.page >= res['last_page']) {
                        infiniteScroll.disabled = true;
                    }
                }, 500);
            });
        }
        else {
            this.page++;
            this.productService.search(this.searchTerm, this.page).subscribe(res => {
                if (Object.keys(res).length === 0 && res.constructor === Object) {
                    infiniteScroll.disabled = true;
                }
                setTimeout(() => {
                    this.products = this.products.concat(res.data);
                    this.checkProducts(this.products);
                    infiniteScroll.complete();
                    if (this.page >= res['last_page']) {
                        infiniteScroll.disabled = true;
                    }
                }, 500);
            });
        }
    }
    checkProducts(products) {
        if (this.products) {
            this.store_id;
            products.forEach(product => {
                if (this.cartService.checkInCart(product)) {
                    console.log(this.store_id);
                    product.incart = 1;
                }
                else {
                    product.incart = 0;
                }
                if (product.instock == 0) {
                    product.allowAdd = 0;
                }
                else {
                    product.allowAdd = 1;
                }
            });
        }
    }
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
    submit(store_id) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(this.store_id)
            }
        };
        this.router.navigate(['/cart'], navigationExtras);
        console.log(navigationExtras);
        // this.router.navigateByUrl('/cart');
    }
};
ListComponent.ctorParameters = () => [
    { type: _shared_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: src_app_cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
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
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
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
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/products/forms/forms.component.ts");
/* harmony import */ var _shared_forms_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/forms.service */ "./src/app/products/shared/forms.service.ts");




















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
                component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_18__["FormsComponent"],
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
            },
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
            _forms_forms_component__WEBPACK_IMPORTED_MODULE_18__["FormsComponent"],
        ],
        providers: [
            _shared_product_service__WEBPACK_IMPORTED_MODULE_10__["ProductService"],
            _shared_forms_service__WEBPACK_IMPORTED_MODULE_19__["FormsService"],
            _cart_shared_cart_service__WEBPACK_IMPORTED_MODULE_11__["CartService"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_12__["BarcodeScanner"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__["File"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_16__["Camera"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_17__["WebView"]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJ9 */"

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