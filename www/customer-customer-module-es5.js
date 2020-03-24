(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/customer.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/customer.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>เลือกร้านค้า</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-back-button></ion-back-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"bg\"> \n\n  <!-- <ion-button class=\"bk\" expand=\"full\" color=\"success\"  (click)=\"hide()\" >\n    <ion-icon name=\"arrow-dropright\"></ion-icon>\n    &nbsp;เลือกร้านค้า</ion-button>\n    <p> ตำแหน่ง</p>\n      {{ latitude}}   *ngIf=\"hideMe\"\n      {{ longitude}} -->\n  <ion-grid >\n      <div #mapElement>   </div>\n      <ion-row>\n        <ion-col size=\"12\"  >\n          <div class=\"btn2\" *ngFor=\"let store_distances of store_distance;\">\n              <ion-item (click)=\"store_product(store_distances.id)\">\n                 <img slot=\"start\" [src]=\"url+store_distances.store_pic || '/assets/noimg.png'\" \n                  class=\"img_store\" >\n                  <p style=\"font-weight: bold; font-size: 13px;\">\n                  {{store_distances.store_name}}<br> <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>ระยะทาง{{store_distances.distance}} กม.\n                </p>\n              </ion-item> \n            </div> <br><br><br><br><br><br> <br> \n        </ion-col> \n      </ion-row>\n  </ion-grid> \n\n\n\n\n  <!-- <ion-grid >\n    <div #mapElement ></div>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"btn2\" expand=\"block\"  *ngFor=\"let store_distances of store_distance;\">\n            <ion-item (click)=\"store_product(store_distances.id)\">\n               <img slot=\"start\" [src]=\"url+store_distances.store_pic || '/assets/noimg.png'\" \n                class=\"img_store\" >\n                <p style=\"font-weight: bold; font-size: 13px;\">\n                {{store_distances.store_name}}<br> <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>ระยะทาง{{store_distances.distance}} กม.\n              </p>\n            </ion-item> \n           </div> <br><br><br><br><br><br> <br> \n      </ion-col> \n    </ion-row>\n</ion-grid>  -->\n\n\n\n<!-- </ion-card> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer.page */ "./src/app/customer/customer.page.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/customer/shared/user.service.ts");
/* harmony import */ var _products_shared_forms_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../products/shared/forms.service */ "./src/app/products/shared/forms.service.ts");










var routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_7__["CustomerPage"]
    },
    {
        path: ':id',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_7__["CustomerPage"],
        data: { title: 'แก้ไขข้อมูล', formType: 'update' }
    },
];
var CustomerPageModule = /** @class */ (function () {
    function CustomerPageModule() {
    }
    CustomerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_7__["CustomerPage"]],
            providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _products_shared_forms_service__WEBPACK_IMPORTED_MODULE_9__["FormsService"]],
        })
    ], CustomerPageModule);
    return CustomerPageModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.page.scss":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn1 {\n  height: 100px;\n  --background: #33FFCC ;\n}\n\n.btn2 {\n  height: 100px;\n  --background: #66CCFF ;\n}\n\n.img_store {\n  width: 80px;\n  height: 80px;\n}\n\n.bk {\n  width: 100px;\n  height: 60px;\n  position: absolute;\n  top: 65%;\n  left: 65%;\n  margin-top: -100px;\n  margin-left: -100px;\n}\n\n.bg {\n  --background: url(\"https://image.freepik.com/free-vector/city-background-design_1300-380.jpg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9jdXN0b21lci9jdXN0b21lci5wYWdlLnNjc3MiLCJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQWEsWUFBQTtBQ0VkOztBREFBO0VBQ0MsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0dEOztBREFBO0VBQ0UsOEZBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4xIHtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdC0tYmFja2dyb3VuZDogIzMzRkZDQyA7IFxyXG5cdFxyXG59XHJcbi5idG4yIHtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdC0tYmFja2dyb3VuZDogIzY2Q0NGRiA7IFxyXG5cclxufVxyXG4uaW1nX3N0b3Jle1xyXG5cdHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuLmJrIHtcclxuXHR3aWR0aDoxMDBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNjUlO1xyXG5cdGxlZnQ6NjUlO1xyXG5cdG1hcmdpbi10b3A6IC0xMDBweDtcclxuXHRtYXJnaW4tbGVmdDogLTEwMHB4O1xyXG5cdC8vIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAxMHB4IHJnYmEoNTAsNTAsNTAsLjQpO1xyXG5cdH1cclxuLmJnIHtcclxuXHRcdC0tYmFja2dyb3VuZDogdXJsKCdodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2NpdHktYmFja2dyb3VuZC1kZXNpZ25fMTMwMC0zODAuanBnJyk7XHJcblx0ICAvLyAtLWJhY2tncm91bmQgOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzM0NDRkYgNTAlLCAjQ0NGRkZGIDUwJSk7IFxyXG4gICBcclxuICAgfSAiLCIuYnRuMSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIC0tYmFja2dyb3VuZDogIzMzRkZDQyA7XG59XG5cbi5idG4yIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjNjZDQ0ZGIDtcbn1cblxuLmltZ19zdG9yZSB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5iayB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjUlO1xuICBsZWZ0OiA2NSU7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbn1cblxuLmJnIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtdmVjdG9yL2NpdHktYmFja2dyb3VuZC1kZXNpZ25fMTMwMC0zODAuanBnXCIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/customer/customer.page.ts":
/*!*******************************************!*\
  !*** ./src/app/customer/customer.page.ts ***!
  \*******************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/customer/shared/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





// import { Http, Headers, RequestOptions } from '@angular/http';





var CustomerPage = /** @class */ (function () {
    function CustomerPage(geolocation, userservice, toastService, route, router, http, builder, loadingController, navCtrl) {
        this.geolocation = geolocation;
        this.userservice = userservice;
        this.toastService = toastService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.builder = builder;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.formType = 'update';
        this.title = '';
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].url;
        this.hideMe = false;
    }
    CustomerPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // console.log(resp);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            var map = new google.maps.Map(_this.mapNativeElement.nativeElement, {
                center: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                zoom: 6,
            });
            var icon = { url: 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
                scaledSize: new google.maps.Size(50, 50),
            };
            var marker = new google.maps.Marker({
                position: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                map: map,
                icon: icon
            });
            var infoWindow = new google.maps.InfoWindow;
            var pos = { lat: _this.latitude, lng: _this.longitude };
            infoWindow.setPosition(pos);
            infoWindow.setContent('ตำแหน่งของคุณ.');
            infoWindow.open(map);
            map.setCenter(pos);
            // this.loadStoreDistance();
            _this.userservice.getStoreDistance(_this.latitude, _this.longitude).subscribe(function (data) {
                _this.store_distance = data.data;
                console.log('รายชื่อร้านค้า', _this.store_distance);
                console.log('ตำแหน่งลูกค้า', _this.latitude, _this.longitude);
            });
            //    console.log(this.latitude,this.longitude);
        }).catch(function (error) {
            console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error);
        });
    };
    CustomerPage.prototype.hide = function () {
        // this.hideMe = true;
        this.hideMe = !this.hideMe;
    };
    // store_id = 0 ;
    CustomerPage.prototype.store_product = function (id) {
        var navigationExtras = {
            queryParams: {
                special: JSON.stringify(id)
            }
        };
        this.router.navigate(['products'], navigationExtras);
        // console.log(id);
        console.log(navigationExtras);
    };
    CustomerPage.ctorParameters = function () { return [
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
        { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CustomerPage.prototype, "mapNativeElement", void 0);
    CustomerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! raw-loader!./customer.page.html */ "./node_modules/raw-loader/index.js!./src/app/customer/customer.page.html"),
            styles: [__webpack_require__(/*! ./customer.page.scss */ "./src/app/customer/customer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]])
    ], CustomerPage);
    return CustomerPage;
}());



/***/ }),

/***/ "./src/app/customer/shared/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/customer/shared/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + "/user";
    }
    UserService.prototype.get = function (id) {
        return this.http.get(this.baseUrl + "/" + id);
    };
    UserService.prototype.getUser = function () {
        return this.http.get("" + this.baseUrl);
    };
    UserService.prototype.getStoreDistance = function (latitude, longitude) {
        console.log("https://qrdee.co/api/v1/dis?latitude=" + latitude + "&longitude=" + longitude);
        return this.http.get("https://qrdee.co/api/v1/dis?latitude=" + latitude + "&longitude=" + longitude);
    };
    UserService.prototype.updateUser = function (data, id) {
        return this.http.post("https://qrdee.co/api/v1/update_user/" + id, this.createFormData(data));
    };
    UserService.prototype.createFormData = function (data) {
        var fd = new FormData();
        fd.append('latitude', data.latitude);
        fd.append('longitude', data.longitude);
        return fd;
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=customer-customer-module-es5.js.map