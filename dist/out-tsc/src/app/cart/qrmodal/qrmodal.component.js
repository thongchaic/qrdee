import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { Router } from '@angular/router';
// import { environment } from 'src/environments/environment';
import { AlertService } from '../../shared/services/alert.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';
import { LoadingController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../shared/cart.service';
let QrmodalComponent = class QrmodalComponent {
    constructor(transactionService, modalController, router, alertService, geolocation, route, builder, toastService, loadingController, navCtrl, http, cartService) {
        this.transactionService = transactionService;
        this.modalController = modalController;
        this.router = router;
        this.alertService = alertService;
        this.geolocation = geolocation;
        this.route = route;
        this.builder = builder;
        this.toastService = toastService;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.http = http;
        this.cartService = cartService;
        this.store_id = 0;
        this.id = 0;
        this.price = 0;
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.store_id = JSON.parse(params.special);
                console.log(params);
                console.log('store_id: ', this.store_id);
            }
        });
    }
    // ionViewWillEnter() {
    // }
    ngAfterViewInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log(resp);
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
                center: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                zoom: 6,
            });
            var icon = {
                // https://www.clipartmax.com/png/middle/127-1273790_features-last-mile-delivery-icon.png
                url: 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png',
                scaledSize: new google.maps.Size(50, 50),
            };
            //var image = 'https://cdn0.iconfinder.com/data/icons/maps-and-navigation-3-1/52/150-512.png';
            var marker = new google.maps.Marker({
                position: { lat: resp.coords.latitude, lng: resp.coords.longitude },
                map: map,
                icon: icon
            });
            const infoWindow = new google.maps.InfoWindow;
            const pos = {
                lat: this.latitude,
                lng: this.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('ตำแหน่งของคุณ.');
            infoWindow.open(map);
            map.setCenter(pos);
        }).catch((error) => {
            console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error);
        });
    }
    // latitude , longitude
    verifyTransaction(longitude, latitude, latitude_store, longitude_store, store_id) {
        if (this.store_id) {
            this.cartService.getStorePromptpay(this.store_id).subscribe(res => {
                this.promptpay = res.data[0].promptpay;
                console.log(res);
                console.log(this.promptpay);
                this.transactionService.getUser().subscribe(res => {
                    console.log('user_map', this.latitude, this.longitude);
                    this.firstname = res.data.firstname;
                    this.lastname = res.data.lastname;
                    this.mobile_number = res.data.mobile_number;
                    this.transaction.latitude = this.latitude;
                    this.transaction.longitude = this.longitude;
                    this.transaction.firstname = this.firstname;
                    this.transaction.lastname = this.lastname;
                    this.transaction.mobile_number = this.mobile_number;
                    this.transaction.latitude_store = this.latitude_store;
                    this.transaction.longitude_store = this.longitude_store;
                    this.transaction.promptpay = this.promptpay;
                    this.transaction.store_id = this.store_id;
                    this.transactionService.verifyTransaction(this.transaction).subscribe(res => {
                        this.closeModal(1);
                        console.log(this.transaction);
                    });
                });
            });
            this.cartService.getStoreMaps(this.store_id).subscribe(res => {
                this.latitude_store = res.data[0].latitude;
                this.longitude_store = res.data[0].longitude;
                console.log('store_map', this.latitude_store, this.longitude_store);
            });
        }
        else {
            this.transactionService.verifyTransaction(this.transaction).subscribe(res => {
                this.closeModal(1);
                // this.router.navigateByUrl('/cart/order-qr');
                console.log(this.transaction);
            });
        }
        this.alertService.showAlert({
            header: 'กดตกลงเพื่อยืนยันการจัดส่งสินค้า',
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
                        // if(this.store_id){ this.cartService.getStorePromptpay(this.store_id).subscribe(res => {
                        // this.transactionService.orderProducts().subscribe(res => {
                        // this.verifieds = res.data.verified;
                        // console.log(this.verifieds);
                        //  });
                        this.transactionService.orderProducts().subscribe(res => {
                            console.log(res);
                            this.code_randoms = res.data.code_randoms;
                            console.log(this.code_randoms);
                            this.store_id = res.data.store_id;
                            console.log(this.store_id);
                            this.transactionService.getUser().subscribe(res => {
                                this.firstname = res.data.firstname;
                                this.lastname = res.data.lastname;
                                this.mobile_number = res.data.mobile_number;
                                this.transactionService.newTransactionOrder(this.firstname, this.lastname, this.mobile_number, this.store_id, this.code_randoms).subscribe(trn => {
                                });
                            });
                        });
                    }
                    // }
                }
            ]
        });
    }
    closeModal(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(status);
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], QrmodalComponent.prototype, "transaction", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], QrmodalComponent.prototype, "qr", void 0);
__decorate([
    ViewChild('mapElement', { static: false }),
    __metadata("design:type", ElementRef)
], QrmodalComponent.prototype, "mapNativeElement", void 0);
QrmodalComponent = __decorate([
    Component({
        selector: 'app-qrmodal',
        templateUrl: './qrmodal.component.html',
        styleUrls: ['./qrmodal.component.scss'],
    }),
    __metadata("design:paramtypes", [TransactionService,
        ModalController,
        Router,
        AlertService,
        Geolocation,
        ActivatedRoute,
        FormBuilder,
        ToastService,
        LoadingController,
        NavController,
        HttpClient,
        CartService])
], QrmodalComponent);
export { QrmodalComponent };
//# sourceMappingURL=qrmodal.component.js.map