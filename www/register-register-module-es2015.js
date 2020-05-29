(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>เปิดร้านออนไลน์</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- <div id=\"map_canvas\" style=\"height:250px;\">\n</div> -->\n\n <ion-content>\n\n   <div #map id=\"map\" style=\"height:250px;\" ></div>\n\n\n\n  <ion-card style=\"background:#FFFFFF;\">\n    <ion-card-content>\n      <ion-label position=\"floating\">ตำแหน่งร้าน</ion-label>\n\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"floating\"></ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"store_name\" placeholder=\"ชื่อร้าน\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\"></ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"promptpay\" placeholder=\"เบอร์โทรศัพท์\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\"></ion-label>\n          <ion-input type=\"text\"  [(ngModel)]=\"password\" placeholder=\"รหัสผ่าน\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\" ></ion-label>\n          <ion-input type=\"text\"  [(ngModel)]=\"repassword\" placeholder=\"ยืนยันรหัสผ่าน\"></ion-input>\n        </ion-item>\n\n        <ion-button type=\"submit\"  expand=\"block\" color=\"primary\" (click)=\"registStore()\">ลงทะเบียน</ion-button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mapElements {\n  width: 100%;\n  height: 100%; }\n\n#centerMarkerImage {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 32px;\n  height: 24px;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDQyxXQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudHtcclxuLy8gXHQgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcxLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4vLyB9XHJcbi5tYXBFbGVtZW50c3tcclxuXHR3aWR0aDoxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG4jY2VudGVyTWFya2VySW1hZ2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206MDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDMycHg7IC8vIGltYWdlIHdpZHRoXHJcbiAgaGVpZ2h0OiAyNHB4OyAvLyBpbWFnZSBoZWlnaHRcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_register_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/register-store.service */ "./src/app/register/shared/register-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");








// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   ILatLng,
//   Circle,
//   Marker,
//   Spherical
// } from '@ionic-native/google-maps';

let RegisterPage = class RegisterPage {
    constructor(
    // public navCtrl: NavController,
    router, registerService, geolocation, toastService, event, platform, _loading) {
        this.router = router;
        this.registerService = registerService;
        this.geolocation = geolocation;
        this.toastService = toastService;
        this.event = event;
        this.platform = platform;
        this._loading = _loading;
        this.password = '';
        this.repassword = '';
        this.promptpay = '';
        this.store_name = '';
        this.latitude = '';
        this.longitude = '';
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Since ngOnInit() is executed before `deviceready` event,
            // you have to wait the event.
            this.latitude = 14.8718084;
            this.longitude = 103.4962797;
            yield this.platform.ready();
            //this.loadGPS();
        });
    }
    ngAfterViewInit() {
        // this.latitude = 14.8718084;
        // this.longitude = 103.4962797;
        // this.loadGPS();
    }
    ionViewDidEnter() {
        this.latitude = 14.8718084;
        this.longitude = 103.4962797;
        this.loadGPS();
        // this.dummyMarker = document.getElementById("centerMarkerImg");
    }
    loadGPS() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("Loading GPS....");
            const loading = yield this._loading.create();
            yield loading.present();
            this.geolocation.getCurrentPosition().then((resp) => {
                console.log(resp);
                loading.dismiss();
                this.latitude = resp.coords.latitude;
                this.longitude = resp.coords.longitude;
                this.loadMap();
            }, err => {
                console.log("GPS error dismiss....");
                loading.dismiss();
                this.loadMap();
            });
        });
    }
    loadMap() {
        //
        //   if(!this.map){
        //     this.map = GoogleMaps.create('map_canvas', {
        //      camera: {
        //         target: {
        //           lat: this.latitude,
        //           lng: this.longitude
        //         },
        //         zoom: 12
        //       },
        //      gestures: {
        //         scroll: true,
        //         tilt: true,
        //         rotate: true,
        //         zoom: true
        //     }
        //    });
        //
        //    console.log("create new map .....");
        //
        //  }else{
        //    console.log("map already exists....");
        //  }
        //
        //
        //
        // this.marker = this.map.addMarkerSync({
        //   position: {
        //     lat: this.latitude,
        //     lng: this.longitude
        //   }
        // });
        // console.log(this.marker);
        //
        // this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe((params: any[]) => {
        //    const cameraPosition: any = params[0];
        //    this.latitude = cameraPosition.target.lat;
        //    this.longitude = cameraPosition.target.lng;
        //    this.marker.setPosition(cameraPosition.target);
        //    //this.marker.position = cameraPosition.target;
        //    console.log(this.latitude+" / "+this.longitude);
        //  });
        //
        //
        localStorage.setItem("regis_lat", this.latitude);
        localStorage.setItem("regis_lng", this.longitude);
        let latLng = new google.maps.LatLng(this.latitude, this.longitude);
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
            localStorage.setItem("regis_lat", marker.getPosition().lat());
            localStorage.setItem("regis_lng", marker.getPosition().lng());
            this.map.setCenter(marker.getPosition());
        });
    }
    registStore() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if ((this.password != this.repassword) || this.password.trim() == "") {
                alert("รหัสผ่านไม่ตรงกัน/โปรดระบุรหัสผ่าน");
                return;
            }
            else if (this.promptpay == "") {
                alert("กรุณาระบุ promptpay");
                return;
            }
            else if (this.store_name == "") {
                alert("กรุณาระบุ ชื่อร้าน");
                return;
            }
            //alert("Register");
            const loading = yield this._loading.create();
            yield loading.present();
            this.latitude = localStorage.getItem('regis_lat');
            this.longitude = localStorage.getItem('regis_lng');
            console.log("Register with =>> " + this.latitude + " / " + this.longitude);
            this.registerService.registerstore(this.password, this.promptpay, this.store_name, this.latitude, this.longitude, 5).subscribe(trn => {
                loading.dismiss();
                localStorage.setItem('store', JSON.stringify(trn));
                this.event.publish('store:changed', trn);
                this.router.navigateByUrl('/cart');
            }, err => {
                loading.dismiss();
                alert("สมัครไม่สำเร็จ โปรดลองอีกครั้ง");
                this.router.navigateByUrl('/login');
            });
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_register_store_service__WEBPACK_IMPORTED_MODULE_3__["RegisterStoreService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], RegisterPage.prototype, "mapElement", void 0);
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _shared_register_store_service__WEBPACK_IMPORTED_MODULE_3__["RegisterStoreService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], RegisterPage);



/***/ }),

/***/ "./src/app/register/shared/register-store.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/register/shared/register-store.service.ts ***!
  \***********************************************************/
/*! exports provided: RegisterStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterStoreService", function() { return RegisterStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let RegisterStoreService = class RegisterStoreService {
    constructor(http) {
        this.http = http;
    }
    registerstore(password, promptpay, store_name, latitude, longitude, store_type_id) {
        const body = {
            password: password,
            promptpay: promptpay,
            store_name: store_name,
            latitude: latitude,
            longitude: longitude,
            store_type_id: store_type_id
        };
        return this.http.post(`https://qrdee.co/api/v2/register`, body);
    }
};
RegisterStoreService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RegisterStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RegisterStoreService);



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
//# sourceMappingURL=register-register-module-es2015.js.map