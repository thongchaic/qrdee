(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logistic-logistic-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/logistic/delivery/delivery.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logistic/delivery/delivery.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>ขนส่ง</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"bg\">\n\n <div #mapElement ></div>\n <form [formGroup]=\"directionForm\">\n   <ion-item class=\"inputs\"> \n        <ion-input type=\"text\"  placeholder=\"ใส่รหัสส่งสินค้า\" class=\"input\"\n        (ionChange)=\"search($event.target.value)\">\n        </ion-input> \n \n\n  <ion-button type=\"submit\"  color=\"success\" (click)=\"search_code(code_randoms)\">\n    <ion-icon name=\"arrow-dropright\"></ion-icon>\n  </ion-button>\n\n\n  </ion-item>\n\n\n\n <div *ngFor=\"let searchcode of searchcodes\">\n      <ion-item>\n       <!--  <ion-avatar slot=\"start\" routerDirection=\"forward\" routerLink=\"/products/{{ product.id  }}\">\n          <img [src]=\"url+product.thumbnail || '/assets/noimg.png'\">\n        </ion-avatar> -->\n        <ion-label text-wrap>\n          \n          <h5><ion-text color=\"dark\">รหัส: {{ searchcode.firstname  }}</ion-text></h5>\n        </ion-label>\n      </ion-item>\n </div>\n\n\n\n\n \n\n  <br><br><br>\n</form>\n<!-- \n <div #mapElement style=\"width: 100%;height: 60%;\"></div>\n  <form [formGroup]=\"directionForm\" (ngSubmit)=\"calculateAndDisplayRoute(directionForm.value)\">\n     <ion-item>\n      <ion-label position=\"floating\" >ใส่รหัสส่งสินค้า</ion-label>\n      <ion-input formControlName=\"destination\"></ion-input>\n      <br><br>\n    </ion-item><br><br><br>\n\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!directionForm.valid\">Get Direction</ion-button>\n  </form>\n\n  <div #mapElement class=\"map\"></div> -->\n   \n  <!--   <ion-item>\n      <ion-label position=\"floating\">Destination</ion-label>\n      <ion-input formControlName=\"destination\"></ion-input>\n    </ion-item> -->\n\n\n\n  <!-- <div  id=\"mapElement\" style=\"width: 100%;height: 60%;\"></div> -->\n   <!--  <ion-item>\n      <ion-label><b><h6>ที่อยู่ในการจัดส่ง</h6></b></ion-label>\n    </ion-item> -->\n    <!-- <ion-list>\n    <ion-item>\n      <b slot=\"start\">\n          <ion-label><b><h6>สรุปยอดรวมทั้งสิ้น</h6></b></ion-label>\n      </b>\n      <h6 slot=\"end\">1,200  บาท</h6>\n    </ion-item>\n    <ion-item>\n      <b slot=\"start\">\n       <ion-label><b><h6>ค่าจัดส่ง</h6></b></ion-label>\n      </b>\n      <h6 slot=\"end\">  45 บาท </h6>\n    </ion-item> \n    <ion-item>\n      <ion-label><b><h6>ค่าจัดส่งระยะทางใกล้เคียง 5 กิโล ราคา 45 บ.  </h6></b></ion-label>\n    </ion-item> \n    <ion-item>\n      <b slot=\"start\">\n        <ion-label><b><h6>วันที่ 16/6/2562 </h6></b></ion-label>\n      </b>\n      <h6 slot=\"end\">  เวลา 16:30 น.</h6>\n    </ion-item>\n    </ion-list> -->\n\n     <!--  <br><br><br><br><br><br><br> -->\n\n      <!-- <ion-button type=\"submit\" expand=\"full\" color=\"success\">\n        <ion-icon name=\"logo-buffer\"></ion-icon>\n        &nbsp;บันทึก\n      </ion-button> -->\n\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logistic/delivery/deliverys/deliverys.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logistic/delivery/deliverys/deliverys.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>ข้อมูลส่งสินค้า</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <div #mapElement id=\"map\" style=\"width: 100%;height: 60%;\"></div>\n<!--  <ion-list-header >\n      <ion-label>สินค้า</ion-label>\n    </ion-list-header> -->\n    <ion-item-sliding *ngFor=\"let searchcoed of searchcoeds\">\n\n    <ion-list>\n    <ion-item>\n      <b slot=\"start\">\n        <!-- <h6 slot=\"end\"> {{code_randoms}} </h6> -->\n       <ion-label><b><h6>\n       <ion-icon name=\"person\"></ion-icon>\n       ชื่อลูกค้า</h6></b></ion-label>\n      </b>\n      <h6 slot=\"end\">คุณ {{searchcoed.firstname}} {{searchcoed.lastname}} </h6>\n       <!-- <h6 slot=\"end\">   </h6> -->\n    </ion-item> \n    <ion-item >\n      <b slot=\"start\">\n        <ion-label ><b><h6>\n        <ion-icon name=\"call\"></ion-icon>\n        เบอร์โทร</h6></b></ion-label>\n      </b>\n      <h6 slot=\"end\"> {{searchcoed.mobile_number}}</h6>\n      \n    </ion-item>\n    </ion-list> <br>\n      <ion-button type=\"submit\" expand=\"full\" (click)=\"submit()\" color=\"success\">\n        <ion-icon name=\"cloud-download\"></ion-icon>\n        &nbsp;บันทึกการส่งสินค้า\n      </ion-button>\n    </ion-item-sliding>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logistic/form/form.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logistic/form/form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>แก้ไขข้อมูล</ion-title>\n     <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  class=\"app-background\">\n  <form [formGroup]=\"logisticForm\">\n  <ion-card style=\"background:#FFFFFF;\">\n    <!-- <ion-card-header>\n      <ion-card-title>{{ title }}</ion-card-title>\n    </ion-card-header> -->\n\n    <ion-card-content>\n      <ion-item-group>\n        <ion-item lines=\"none\">\n          <ion-img [src]=\"imageSrc || '/assets/noimg.png'\"></ion-img>\n        </ion-item>\n        <ion-grid>\n          <ion-row justify-content-center>\n            <ion-button size=\"small\" color=\"primary\" (click)=\"takePhoto()\">ถ่ายรูปสินค้า</ion-button>\n            <ion-button size=\"small\" color=\"secondary\" (click)=\"selectPhoto()\">เลือกจากอัลบั้ม</ion-button>\n          </ion-row>\n        </ion-grid>        \n      </ion-item-group>\n      <ion-item>\n        <b slot=\"start\">\n          ชื่อ \n        </b>\n        <ion-input  type=\"text\" formControlName=\"firstname\"></ion-input>\n      </ion-item> \n      <ion-item>\n        <b slot=\"start\">\n          นามสกุล \n        </b>\n        <ion-input  type=\"text\" formControlName=\"lastname\"></ion-input>\n      </ion-item> \n     <!--  <ion-item>\n        <b slot=\"start\">\n          อายุ  \n        </b>\n        <ion-input  type=\"text\" formControlName=\"age\"></ion-input>\n      </ion-item> --> \n       <ion-item>\n        <b slot=\"start\">\n          เบอร์โทรศัทพ์  \n        </b>\n        <ion-input  type=\"text\" formControlName=\"mobile_number\"></ion-input>\n      </ion-item> \n     <!--  <ion-item>\n        <b slot=\"start\">\n          ที่อยู่  \n        </b>\n        <ion-input  type=\"text\" formControlName=\"address\"></ion-input>\n      </ion-item> -->\n      <ion-item>\n        <ion-label position=\"floating\"><b slot=\"start\">ประเภทรถขนส่ง</b></ion-label>\n        <ion-select formControlName=\"delivery_type_id\">\n          <ion-select-option\n            *ngFor=\"let delivery_type of delivery_types\"\n            [value]=\"delivery_type.id\"\n            [selected]=\"delivery_type.id === logisticForm.get('delivery_type_id').value\">\n            {{ delivery_type.delivery_type_th }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <b slot=\"start\">\n          เลขทะเบียนรถ  \n        </b>\n        <ion-input  type=\"text\" formControlName=\"car_number\"></ion-input>\n      </ion-item>\n       <ion-item>\n        <ion-label position=\"floating\"><b slot=\"start\">เลือกสถานะส่งสินค้า</b></ion-label>\n          <ion-select formControlName=\"delivery_status_id\">\n            <ion-select-option \n                *ngFor=\"let delivery_statu of delivery_status\" \n                [value]=\"delivery_statu.id\" \n                [selected]=\"delivery_statu.id === logisticForm.get('delivery_status_id').value\">\n                {{ delivery_statu.delivery_status_th }}\n            </ion-select-option>\n          </ion-select>\n      </ion-item>\n\n     <!--  <ion-item>\n        <b slot=\"start\">\n          latitude \n        </b>\n        <ion-input  type=\"text\" formControlName=\"latitude\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <b slot=\"start\">\n          longitude \n        </b>\n        <ion-input  type=\"text\" formControlName=\"longitude\"></ion-input>\n      </ion-item> -->\n    </ion-card-content>\n    <ion-button type=\"submit\" expand=\"full\" color=\"success\" (click)=\"submit()\">\n     <ion-icon name=\"logo-buffer\"></ion-icon>\n    &nbsp;บันทึก</ion-button>\n  </ion-card>  \n</form>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logistic/history/history.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logistic/history/history.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>ข้อมูลผู้ขนส่ง</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n  <ion-card style=\"background:#FFFFFF;\">\n    <ion-card-content *ngIf=\"delivery\">\n       <!-- <ion-list> -->\n      <ion-item> <br>\n        <ion-avatar slot=\"start\">\n          <img [src]=\"url+delivery.delivery_pic || '/assets/noimg.png'\">\n        </ion-avatar>\n          <h2 slot=\"end\">คุณ {{delivery.firstname}} {{delivery.lastname}}  </h2>\n      </ion-item>\n     <!--  <ion-item>\n        <b class=\"text\" slot=\"start\">\n          อายุ  \n        </b>\n          <h2 slot=\"end\">  {{delivery.age}} ปี </h2> \n      </ion-item>  -->\n      <ion-item>\n        <b class=\"text\" slot=\"start\">\n          เบอร์โทร: \n        </b>\n          <h2 slot=\"end\">  {{delivery.mobile_number}} </h2>\n      </ion-item> \n     <!--  <ion-item>\n        <b class=\"text\" slot=\"start\">\n          ที่อยู่  \n        </b>\n          <h2 slot=\"end\">  {{delivery.address}}</h2>\n      </ion-item>  -->\n            <ion-item>\n        <b  class=\"text\" slot=\"start\">\n          ประเภทรถ  \n        </b>\n          <h2 slot=\"end\"> {{delivery.delivery_type.delivery_type_th}}</h2>\n      </ion-item> \n      <ion-item>\n        <b class=\"text\" slot=\"start\">\n          เลขทะเบียนรถ  \n        </b>\n          <h2 slot=\"end\"> {{delivery.car_number}}</h2>\n      </ion-item>\n       <ion-item>\n        <b slot=\"start\" style=\"color: red; font-size: 16px;\">\n          สถานะขนส่ง  \n        </b>\n          <h2 slot=\"end\"> {{delivery.delivery_status.delivery_status_th}}</h2>\n      </ion-item> <br>\n    <!-- </ion-list> -->\n\n\n    <ion-button type=\"submit\" expand=\"full\" color=\"success\" routerDirection=\"forward\" routerLink=\"/logistic/history{{ delivery.id }}\">\n        <ion-icon name=\"logo-buffer\"></ion-icon>\n       &nbsp;ปรับปรุงข้อมูล\n    </ion-button>\n  </ion-card-content>\n  </ion-card>  \n</ion-content>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logistic/logistic.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logistic/logistic.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n    <ion-title>ขนส่ง</ion-title>\n    <ion-buttons slot=\"end\">\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-button class=\"btn2\" expand=\"block\" routerLink=\"/logistic/delivery/codedelivery\">\n       <div class=\"ion-text-center\" >\n          <img src=\"https://cdn0.iconfinder.com/data/icons/map-and-navigation-1/65/7-512.png\" class=\"img_logistic\">\n             <br><b>ส่งสินค้า</b> \n        </div>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n   <ion-row>\n    <ion-col size=\"6\">\n     <ion-button class=\"btn2\" expand=\"block\" routerLink=\"/logistic/delivery/show\">\n       <div class=\"ion-text-center\" >\n          <img src=\"https://www.openghong.com/wp-content/uploads/2018/06/delive-300x300.png\" class=\"img_logistic\">\n             <br><b>ประวัติขนส่งสินค้า</b> \n        </div>\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n     <ion-button class=\"btn2\" expand=\"block\" routerLink=\"/logistic/history\">\n       <div class=\"ion-text-center\" >\n          <img src=\"https://freesvg.org/img/Faceless-Man-Avatar.png\" class=\"img_logistic\">\n             <br><b>ข้อมูลผู้ขนส่ง</b> \n        </div>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logistic/show/show.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logistic/show/show.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>    \n      <ion-title>ขนส่ง</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"app-background\">\n    <ion-item>\n    <ion-label><b>ประวัติการขนส่งสินค้า</b></ion-label>\n  </ion-item>\n\n<ion-grid >\n      <ion-row>\n        <ion-col size=\"12\" >\n           <ion-item-sliding *ngFor=\"let deliveryshow of deliveryshows\">\n          <div expand=\"block\" >\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                  <img src=\"https://www.openghong.com/wp-content/uploads/2018/06/delive-300x300.png\">\n                </ion-avatar>\n                <ion-label text-wrap>\n                  <b>ส่งถึง</b>&nbsp;คุณ {{deliveryshow.firstname}} {{deliveryshow.lastname}}<br>\n                  <b>เมื่อ</b> {{deliveryshow.updated_at}}\n                \n             </ion-label>\n            </ion-item> \n              \n             <ion-item-options side=\"end\">\n              <ion-item-option color=\"light\">\n                <ion-button fill=\"clear\" size=\"large\" color=\"danger\" (click)=\"deleteLogistic(deliveryshow.id);\">\n                  <ion-icon name=\"close\"></ion-icon>\n                </ion-button>\n              </ion-item-option>\n            </ion-item-options>\n          </div>\n        </ion-item-sliding> \n          <br><br><br><br><br><br>\n        </ion-col> \n      </ion-row>\n  </ion-grid> \n</ion-content>\n\n\n\n\n\n\n<!-- \n<ion-content class=\"app-background\"> \n  <ion-card-content>\n  <ion-item>\n    <ion-label><b>ประวัติการขนส่งสินค้า</b></ion-label>\n  </ion-item>\n  <ion-item-sliding *ngFor=\"let deliveryshow of deliveryshows\">\n         <ion-item>\n          <ion-avatar slot=\"start\">\n            <img src=\"https://www.openghong.com/wp-content/uploads/2018/06/delive-300x300.png\">\n          </ion-avatar>\n          <ion-label text-wrap>\n            <b>ส่งถึง</b>&nbsp;คุณ {{deliveryshow.firstname}} {{deliveryshow.lastname}}<br>\n            <b>เมื่อ</b> {{deliveryshow.updated_at}}\n          </ion-label>\n         </ion-item>\n         <ion-item-options side=\"end\">\n              <ion-item-option color=\"light\">\n                <ion-button fill=\"clear\" size=\"large\" color=\"danger\" (click)=\"deleteLogistic(deliveryshow.id);\">\n                  <ion-icon name=\"close\"></ion-icon>\n                </ion-button>\n              </ion-item-option>\n            </ion-item-options>\n         </ion-item-sliding> \n</ion-card-content>\n</ion-content>\n -->\n\n"

/***/ }),

/***/ "./src/app/logistic/delivery/delivery.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/logistic/delivery/delivery.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn1 {\n  height: 150px;\n  --background: #33FFCC ; }\n\n.input {\n  --background:  #FFFFFF; }\n\n.inputs {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -100px; }\n\n.bg {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9sb2dpc3RpYy9kZWxpdmVyeS9kZWxpdmVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQWE7RUFDYixzQkFBYSxFQUFBOztBQUlkO0VBQ0Usc0JBQWEsRUFBQTs7QUFJZjtFQUNBLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUluQjtFQUNFLDREQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpc3RpYy9kZWxpdmVyeS9kZWxpdmVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4xIHtcclxuXHRoZWlnaHQ6IDE1MHB4O1xyXG5cdC0tYmFja2dyb3VuZDogIzMzRkZDQyA7IFxyXG5cdFxyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIC0tYmFja2dyb3VuZDogICNGRkZGRkY7XHJcbiAgLy8gYm9yZGVyOjNweCBzb2xpZCAjMDBCRkZGO1xyXG59XHJcblxyXG4uaW5wdXRzIHtcclxud2lkdGg6IDIwMHB4O1xyXG5oZWlnaHQ6IDIwMHB4O1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogNjAlO1xyXG5sZWZ0OiA1MCU7XHJcbm1hcmdpbi10b3A6IC0xMDBweDtcclxubWFyZ2luLWxlZnQ6IC0xMDBweDtcclxuLy8gYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IDEwcHggcmdiYSg1MCw1MCw1MCwuNCk7XHJcbn1cclxuXHJcbi5iZyB7XHJcblx0IC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2JnMS5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICAgLy8gLS1iYWNrZ3JvdW5kIDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMzNDQ0ZGIDUwJSwgI0NDRkZGRiA1MCUpOyBcclxuXHJcbn0gXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/logistic/delivery/delivery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/logistic/delivery/delivery.component.ts ***!
  \*********************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_logistic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/logistic.service */ "./src/app/logistic/shared/logistic.service.ts");








let DeliveryComponent = class DeliveryComponent {
    constructor(fb, geolocation, route, router, toastService, http, logistic) {
        this.fb = fb;
        this.geolocation = geolocation;
        this.route = route;
        this.router = router;
        this.toastService = toastService;
        this.http = http;
        this.logistic = logistic;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.searchcodes = [];
        this.page = 1;
        this.code_randoms = '';
        this.query = '';
        this.currentLocation = {
            lat: 0,
            lng: 0
        };
        this.createDirectionForm();
    }
    ngOnInit() {
    }
    search_code(code_randoms) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(this.code_randoms)
            }
        };
        this.router.navigate(['/logistic/delivery/deliverys'], navigationExtras);
        console.log(navigationExtras);
    }
    // "HhFDVy2E"
    search(query) {
        if (query) {
            console.log(query);
            this.code_randoms = query;
        }
        // else{
        //    // console.log(query);
        //   this.code_randoms = query;
        //    this.toastService.showToast('รหัสไม่ถูกต้อง', 'top');
        // } 
    }
    createDirectionForm() {
        this.directionForm = this.fb.group({
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngAfterViewInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp);
            this.currentLocation.lat = resp.coords.latitude;
            this.currentLocation.lng = resp.coords.longitude;
        });
        const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
            zoom: 7,
            center: { lat: 14.87386661912914, lng: 103.5601327971068 }
        });
        var icon = {
            // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
            url: 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
            scaledSize: new google.maps.Size(50, 50),
        };
        //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
        var marker = new google.maps.Marker({
            position: { lat: 14.87386661912914, lng: 103.5601327971068 },
            map: map,
            icon: icon
        });
        this.directionsDisplay.setMap(map);
    }
    calculateAndDisplayRoute(formValues) {
        const that = this;
        this.directionsService.route({
            origin: this.currentLocation,
            destination: formValues.destination,
            travelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
                that.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('คำขอเส้นทางล้มเหลวเนื่องจาก' + status);
            }
        });
    }
    submit() {
        this.toastService.showToast('กำลังตรวจสอบข้อมูล', 'top');
        this.router.navigateByUrl('/logistic/delivery/deliverys');
    }
};
DeliveryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _shared_logistic_service__WEBPACK_IMPORTED_MODULE_7__["LogisticService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DeliveryComponent.prototype, "mapNativeElement", void 0);
DeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery',
        template: __webpack_require__(/*! raw-loader!./delivery.component.html */ "./node_modules/raw-loader/index.js!./src/app/logistic/delivery/delivery.component.html"),
        styles: [__webpack_require__(/*! ./delivery.component.scss */ "./src/app/logistic/delivery/delivery.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _shared_logistic_service__WEBPACK_IMPORTED_MODULE_7__["LogisticService"]])
], DeliveryComponent);



/***/ }),

/***/ "./src/app/logistic/delivery/deliverys/deliverys.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/logistic/delivery/deliverys/deliverys.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2lzdGljL2RlbGl2ZXJ5L2RlbGl2ZXJ5cy9kZWxpdmVyeXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/logistic/delivery/deliverys/deliverys.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/logistic/delivery/deliverys/deliverys.component.ts ***!
  \********************************************************************/
/*! exports provided: DeliverysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliverysComponent", function() { return DeliverysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_logistic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/logistic.service */ "./src/app/logistic/shared/logistic.service.ts");








let DeliverysComponent = class DeliverysComponent {
    constructor(route, router, toastService, geolocation, fb, http, logistic) {
        this.route = route;
        this.router = router;
        this.toastService = toastService;
        this.geolocation = geolocation;
        this.fb = fb;
        this.http = http;
        this.logistic = logistic;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.code_randoms = 0;
        this.store_id = 0;
        this.searchcoeds = [];
        this.page = 1;
        this.searchTerm = '';
        this.query = '';
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params && params.special) {
                this.code_randoms = JSON.parse(params.special);
                console.log('code_randoms: ', this.code_randoms);
            }
        });
    }
    // ร้านค้า
    // currentLocation: any = {
    //     lat: 14.891540, 
    //     lng: 103.493884,
    //   };
    // ลูกค้า
    // destination: any = {
    //     lat: 14.888054, 
    //     lng: 103.488836,
    //   };
    // ลูกค้า
    // destination: any = {
    //     lat: this.latitude, 
    //     lng: this.longitude,
    //   };
    ngAfterViewInit() {
        const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
            zoom: 7,
            center: { lat: 13.759058, lng: 100.492632 }
        });
        var icon = {
            // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
            url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|00D900',
            scaledSize: new google.maps.Size(50, 50),
        };
        //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
        var marker = new google.maps.Marker({
            position: { lat: this.latitude, lng: this.longitude },
            map: map,
            icon: icon
        });
        const infoWindow = new google.maps.InfoWindow;
        const user = {
            lat: this.latitude,
            lng: this.longitude
        };
        infoWindow.setPosition(user);
        infoWindow.setContent('ลูกค้า');
        infoWindow.open(map);
        map.setCenter(user);
        const infoWindows = new google.maps.InfoWindow;
        const store = {
            lat: this.latitude_store,
            lng: this.longitude_store
        };
        infoWindows.setPosition(store);
        infoWindows.setContent('ร้านค้า');
        infoWindows.open(map);
        map.setCenter(store);
        this.directionsDisplay.setMap(map);
        this.calculateAndDisplayRoute();
    }
    calculateAndDisplayRoute() {
        // const that = this;
        this.logistic.getAlls(this.code_randoms).subscribe(res => {
            this.code_randoms;
            this.latitude = res.products.data[0].latitude;
            this.longitude = res.products.data[0].longitude;
            this.latitude_store = res.products.data[0].latitude_store;
            this.longitude_store = res.products.data[0].longitude_store;
            console.log('ลูกค้า', this.latitude, this.longitude, 'ร้านค้า', this.latitude_store, this.longitude_store);
            this.directionsService.route({
                //ร้านค้า
                origin: { lat: this.latitude_store, lng: this.longitude_store },
                // ลูกค้า
                destination: { lat: this.latitude, lng: this.longitude },
                travelMode: 'DRIVING',
            }, (response, status) => {
                if (status === 'OK') {
                    this.directionsDisplay.setDirections(response);
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        });
    }
    ionViewWillEnter() {
        this.loadCode();
    }
    loadCode() {
        if (this.code_randoms) {
            this.logistic.getAlls(this.code_randoms).subscribe(res => {
                this.code_randoms;
                console.log(res);
                this.searchcoeds = res.products.data;
                this.firstname = res.products.data[0].firstname;
                this.lastname = res.products.data[0].lastname;
                this.page = 1;
                console.log(this.searchcoeds);
                console.log(this.firstname, this.lastname);
            });
        }
    }
    submit() {
        this.toastService.showToast('กำลังบันทึกข้อมูล', 'top');
        this.logistic.Show(this.firstname, this.lastname).subscribe(trn => {
            console.log(this.firstname, this.lastname);
        });
        this.router.navigateByUrl('/logistic/delivery/show');
    }
};
DeliverysComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _shared_logistic_service__WEBPACK_IMPORTED_MODULE_7__["LogisticService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DeliverysComponent.prototype, "mapNativeElement", void 0);
DeliverysComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deliverys',
        template: __webpack_require__(/*! raw-loader!./deliverys.component.html */ "./node_modules/raw-loader/index.js!./src/app/logistic/delivery/deliverys/deliverys.component.html"),
        styles: [__webpack_require__(/*! ./deliverys.component.scss */ "./src/app/logistic/delivery/deliverys/deliverys.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _shared_logistic_service__WEBPACK_IMPORTED_MODULE_7__["LogisticService"]])
], DeliverysComponent);



/***/ }),

/***/ "./src/app/logistic/form/form.component.scss":
/*!***************************************************!*\
  !*** ./src/app/logistic/form/form.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9sb2dpc3RpYy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naXN0aWMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/logistic/form/form.component.ts":
/*!*************************************************!*\
  !*** ./src/app/logistic/form/form.component.ts ***!
  \*************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_logistic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/logistic.service */ "./src/app/logistic/shared/logistic.service.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









// import { WebView } from '@ionic-native/ionic-webview/ngx';


let FormComponent = class FormComponent {
    constructor(builder, logisticService, toastService, route, router, http, loadingController, navCtrl, camera, file) {
        this.builder = builder;
        this.logisticService = logisticService;
        this.toastService = toastService;
        this.route = route;
        this.router = router;
        this.http = http;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.file = file;
        this.logisticForm = this.builder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // age: ['', Validators.required],
            mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            // address: ['', Validators.required],
            car_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            delivery_type_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            delivery_status_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: null
        });
        this.formType = 'EDIT';
        this.title = '';
        this.imageSrc = '';
    }
    ionViewWillEnter() {
        this.logisticService.getDeliveryType().subscribe((data) => this.delivery_types = data.data);
        this.logisticService.getDeliveryStatu().subscribe((data) => this.delivery_status = data.data);
        if (this.route.snapshot.data.formType === 'EDIT') {
            this.title = 'แก้ไขข้อมูล';
            this.formType = 'EDIT';
            // console.log(this.route.snapshot.params['id']);
            // console.log(this.profileForm.value);
            // this.http.get<any>(`http://qrdee.co/api/v1/profile`).subscribe(console.log);
            this.logisticService.getProfile().subscribe(data => {
                this.logisticForm.setValue({
                    firstname: data.data.firstname,
                    lastname: data.data.lastname,
                    // age: data.data.age,
                    mobile_number: data.data.mobile_number,
                    // address: data.data.address,
                    car_number: data.data.car_number,
                    delivery_type_id: data.data.delivery_type_id,
                    delivery_status_id: data.data.delivery_status_id,
                    image: null
                });
                this.imageSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].url + data.data.delivery_pic;
                console.log(this.imageSrc);
            });
        }
    }
    submit() {
        console.log(this.logisticForm.value);
        if (this.formType === 'EDIT') {
            this.logisticService.updateLogistic(this.logisticForm.value, this.route.snapshot.params['id']).subscribe(res => {
                this.toastService.showToast('แก้ไขเรียบร้อยแล้ว', 'top');
                this.router.navigateByUrl('/logistic/history');
            }, err => console.log(err));
        }
    }
    takePhoto() {
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
        //     this.loadPhoto(imageData);
        //   },
        //   err => {
        //     console.log(err);
        //   }
        // );
    }
    selectPhoto() {
        // this.camera.getPicture({
        //   destinationType: this.camera.DestinationType.FILE_URI,
        //   sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        // }).then(
        //   imageData => {
        //     this.imageSrc = this.webView.convertFileSrc(imageData);
        //     this.loadPhoto(imageData);
        //   },
        //   err => {
        //     console.log(err);
        //   }
        // );
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
            this.logisticForm.controls['image'].setValue(imgBlob);
        };
        reader.readAsArrayBuffer(file);
    }
};
FormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_logistic_service__WEBPACK_IMPORTED_MODULE_7__["LogisticService"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],] }] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"],] }] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/logistic/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/logistic/form/form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](9, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_logistic_service__WEBPACK_IMPORTED_MODULE_7__["LogisticService"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]])
], FormComponent);



/***/ }),

/***/ "./src/app/logistic/history/history.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/logistic/history/history.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn1 {\n  height: 150px; }\n\n.text {\n  font-size: 16px; }\n\n.app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9sb2dpc3RpYy9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhLEVBQUE7O0FBR2Q7RUFDQyxlQUFlLEVBQUE7O0FBRWhCO0VBQ0UsNERBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2lzdGljL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4xIHtcclxuXHRoZWlnaHQ6IDE1MHB4OyBcclxuXHRcclxufVxyXG4udGV4dCB7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5hcHAtYmFja2dyb3VuZHtcclxuXHQgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvYmcxLmpwZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/logistic/history/history.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/logistic/history/history.component.ts ***!
  \*******************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_logistic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/logistic.service */ "./src/app/logistic/shared/logistic.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let HistoryComponent = class HistoryComponent {
    constructor(http, logistic) {
        this.http = http;
        this.logistic = logistic;
        // delivery_pic = '';
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
        console.log('history');
    }
    ionViewWillEnter() {
        this.loadProfile();
        // this.historyservice.getHistory().subscribe(console.log)
    }
    loadProfile() {
        this.logistic.getProfile().subscribe(res => {
            this.delivery = res.data;
            console.log(this.delivery = res.data);
        });
    }
};
HistoryComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _shared_logistic_service__WEBPACK_IMPORTED_MODULE_2__["LogisticService"] }
];
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/logistic/history/history.component.html"),
        styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/logistic/history/history.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _shared_logistic_service__WEBPACK_IMPORTED_MODULE_2__["LogisticService"]])
], HistoryComponent);



/***/ }),

/***/ "./src/app/logistic/logistic.module.ts":
/*!*********************************************!*\
  !*** ./src/app/logistic/logistic.module.ts ***!
  \*********************************************/
/*! exports provided: LogisticPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticPageModule", function() { return LogisticPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history/history.component */ "./src/app/logistic/history/history.component.ts");
/* harmony import */ var _logistic_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logistic.page */ "./src/app/logistic/logistic.page.ts");
/* harmony import */ var _shared_logistic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/logistic.service */ "./src/app/logistic/shared/logistic.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/form.component */ "./src/app/logistic/form/form.component.ts");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show/show.component */ "./src/app/logistic/show/show.component.ts");
/* harmony import */ var _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delivery/delivery.component */ "./src/app/logistic/delivery/delivery.component.ts");
/* harmony import */ var _delivery_deliverys_deliverys_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./delivery/deliverys/deliverys.component */ "./src/app/logistic/delivery/deliverys/deliverys.component.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
















// import { WebView } from '@ionic-native/ionic-webview/ngx';
const routes = [
    {
        path: '',
        component: _logistic_page__WEBPACK_IMPORTED_MODULE_7__["LogisticPage"]
    },
    {
        path: 'history',
        component: _history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"],
        data: { title: 'ประวัติการส่งสินค้า' }
    },
    {
        path: ':id',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"],
        data: { title: 'แก้ไขข้อมูล', formType: 'EDIT' }
    },
    {
        path: 'delivery/show',
        component: _show_show_component__WEBPACK_IMPORTED_MODULE_11__["ShowComponent"],
        data: { title: 'ประวัติ' }
    },
    {
        path: 'delivery/codedelivery',
        component: _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_12__["DeliveryComponent"],
        data: { title: 'ขนส่ง' }
    },
    {
        path: 'delivery/deliverys',
        component: _delivery_deliverys_deliverys_component__WEBPACK_IMPORTED_MODULE_13__["DeliverysComponent"],
        data: { title: 'ขนส่ง' }
    },
];
let LogisticPageModule = class LogisticPageModule {
};
LogisticPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _logistic_page__WEBPACK_IMPORTED_MODULE_7__["LogisticPage"],
            _history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"],
            _form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"],
            _show_show_component__WEBPACK_IMPORTED_MODULE_11__["ShowComponent"],
            _delivery_delivery_component__WEBPACK_IMPORTED_MODULE_12__["DeliveryComponent"],
            _delivery_deliverys_deliverys_component__WEBPACK_IMPORTED_MODULE_13__["DeliverysComponent"],
        ],
        providers: [
            _shared_logistic_service__WEBPACK_IMPORTED_MODULE_8__["LogisticService"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"],
        ],
    })
], LogisticPageModule);



/***/ }),

/***/ "./src/app/logistic/logistic.page.scss":
/*!*********************************************!*\
  !*** ./src/app/logistic/logistic.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn1 {\n  height: 100px;\n  --background: #33FFCC ; }\n\n.btn2 {\n  height: 100px;\n  --background: #66CCFF ; }\n\n.img_logistic {\n  width: 80px;\n  height: 80px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9sb2dpc3RpYy9sb2dpc3RpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0VBQ2Isc0JBQWEsRUFBQTs7QUFHZDtFQUNDLGFBQWE7RUFDYixzQkFBYSxFQUFBOztBQUdkO0VBQ0MsV0FBVztFQUFFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2lzdGljL2xvZ2lzdGljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4xIHtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdC0tYmFja2dyb3VuZDogIzMzRkZDQyA7IFxyXG5cdFxyXG59XHJcbi5idG4yIHtcclxuXHRoZWlnaHQ6IDEwMHB4O1xyXG5cdC0tYmFja2dyb3VuZDogIzY2Q0NGRiA7IFxyXG5cclxufVxyXG4uaW1nX2xvZ2lzdGlje1xyXG5cdHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/logistic/logistic.page.ts":
/*!*******************************************!*\
  !*** ./src/app/logistic/logistic.page.ts ***!
  \*******************************************/
/*! exports provided: LogisticPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticPage", function() { return LogisticPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogisticPage = class LogisticPage {
    constructor() { }
    ngOnInit() {
    }
};
LogisticPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logistic',
        template: __webpack_require__(/*! raw-loader!./logistic.page.html */ "./node_modules/raw-loader/index.js!./src/app/logistic/logistic.page.html"),
        styles: [__webpack_require__(/*! ./logistic.page.scss */ "./src/app/logistic/logistic.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogisticPage);



/***/ }),

/***/ "./src/app/logistic/shared/logistic.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/logistic/shared/logistic.service.ts ***!
  \*****************************************************/
/*! exports provided: LogisticService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticService", function() { return LogisticService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




let LogisticService = class LogisticService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url}/delivery`;
    }
    getProfile() {
        return this.http.get(`https://qrdee.co/api/v1/delivery`);
    }
    getAll() {
        return this.http.get(`https://qrdee.co/api/v1/transaction`);
    }
    getAlls(code_randoms) {
        // console.log('https://qrdee.co/api/v1/transaction_code/${code_randoms}');
        return this.http.get(`https://qrdee.co/api/v1/transaction_code/${code_randoms}`);
    }
    deleteLogistic(id) {
        // console.log(`${this.baseUrl}/deleteorder/${id}`);
        return this.http.delete(`https://qrdee.co/api/v1/delete_logistic/${id}`);
    }
    transaction_code_t(code_randoms) {
        // console.log('https://qrdee.co/api/v1/transaction_code/${code_randoms}');
        return this.http.get(`https://qrdee.co/api/v1/transaction_code_t/${code_randoms}`);
    }
    Show(firstname, lastname) {
        const body = {
            firstname: firstname,
            lastname: lastname,
        };
        console.log(body);
        return this.http.post(`https://qrdee.co/api/v1/transaction_delivery_show`, body);
    }
    getDeliveryShow() {
        return this.http.get(`https://qrdee.co/api/v1/transaction_delivery_shows`);
        console.log(`https://qrdee.co/api/v1/transaction_delivery_shows`);
    }
    transaction_codes() {
        // console.log(code_randoms);
        return this.http.get(`https://qrdee.co/api/v1/transaction_codes`);
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    getDeliveryType() {
        return this.http.get(`https://qrdee.co/api/v1/ref?type=delivery_types`);
    }
    getDeliveryStatu() {
        console.log('https://qrdee.co/api/v1/ref?type=delivery_status');
        return this.http.get(`https://qrdee.co/api/v1/ref?type=delivery_status`);
    }
    updateLogistic(data, id) {
        console.log('https://qrdee.co/api/v1/update_delivery/${id}');
        return this.http.post(`https://qrdee.co/api/v1/update_delivery/${id}`, this.createFormData(data));
    }
    Search(id, term, page) {
        console.log(term);
        return this.http.get(`https://qrdee.co/api/v1/search_code_random/${id}/?=search&query=${term}&page=${page}`);
    }
    createFormData(data) {
        const fd = new FormData();
        if (data.image)
            fd.append('delivery_pic', data.image);
        fd.append('firstname', data.firstname);
        fd.append('lastname', data.lastname);
        // fd.append('age', data.age);
        fd.append('mobile_number', data.mobile_number);
        // fd.append('address', data.address);
        fd.append('car_number', data.car_number);
        fd.append('delivery_type_id', data.delivery_type_id);
        fd.append('delivery_status_id', data.delivery_status_id);
        // fd.append('longitude', data.longitude);
        return fd;
    }
};
LogisticService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LogisticService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LogisticService);



/***/ }),

/***/ "./src/app/logistic/show/show.component.scss":
/*!***************************************************!*\
  !*** ./src/app/logistic/show/show.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-background {\n  --background: url('/assets/bg1.jpg') 0 0/100% 100% no-repeat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aG9uZ2NoYWkvUHJvamVjdHMvcXJkZWUvc3JjL2FwcC9sb2dpc3RpYy9zaG93L3Nob3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0REFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naXN0aWMvc2hvdy9zaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1iYWNrZ3JvdW5ke1xyXG5cdCAtLWJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9iZzEuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/logistic/show/show.component.ts":
/*!*************************************************!*\
  !*** ./src/app/logistic/show/show.component.ts ***!
  \*************************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_logistic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/logistic.service */ "./src/app/logistic/shared/logistic.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");






let ShowComponent = class ShowComponent {
    constructor(http, logistic, alertController, toastService) {
        this.http = http;
        this.logistic = logistic;
        this.alertController = alertController;
        this.toastService = toastService;
        this.deliveryshows = [];
    }
    ionViewWillEnter() {
        this.loadLogistic();
    }
    loadLogistic() {
        this.logistic.getDeliveryShow().subscribe(res => {
            this.deliveryshows = res.products;
            console.log(res);
        });
    }
    // ionViewWillEnter(){
    // 	 this.logistic.getDeliveryShow().subscribe(res => {
    // 	 	     this.deliveryshows = res.products;
    //                 // this.firstname = res.products[0].firstname;
    //                 // this.lastname = res.products[0].lastname;
    //                 // this.updated_at = res.products[0].updated_at;
    //               console.log(res); 
    //             });
    //   }
    deleteLogistic(id) {
        this.presentAlertConfirmDelete(id);
    }
    presentAlertConfirmDelete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'คุณต้องการลบประวัติการส่งสินค้าหรือไม่',
                buttons: [
                    {
                        text: 'ยกเลิก',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'ตกลง',
                        handler: () => {
                            this.logistic.deleteLogistic(id).subscribe(() => {
                                this.toastService.showToast(`ลบประวัติการส่งสินค้าเรียบร้อยแล้ว`, 'top');
                                this.loadLogistic();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ShowComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_logistic_service__WEBPACK_IMPORTED_MODULE_3__["LogisticService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
ShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-show',
        template: __webpack_require__(/*! raw-loader!./show.component.html */ "./node_modules/raw-loader/index.js!./src/app/logistic/show/show.component.html"),
        styles: [__webpack_require__(/*! ./show.component.scss */ "./src/app/logistic/show/show.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _shared_logistic_service__WEBPACK_IMPORTED_MODULE_3__["LogisticService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], ShowComponent);



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
//# sourceMappingURL=logistic-logistic-module-es2015.js.map