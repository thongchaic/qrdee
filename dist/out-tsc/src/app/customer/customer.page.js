import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { UserService } from './shared/user.service';
import { HttpClient } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { ToastService } from '../shared/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
let CustomerPage = class CustomerPage {
    constructor(geolocation, userservice, toastService, route, router, http, builder, loadingController, navCtrl) {
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
        this.url = environment.url;
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
        // console.log(id);
        console.log(navigationExtras);
    }
    ngOnInit() { }
    loadStoreDistance() {
        this.userservice.getStoreDistance(this.latitude, this.longitude).subscribe((data) => {
            this.store_distance = data.data;
        });
    }
    submit() {
        this.toastService.showToast('ติดตามสินค้าของคุณ', 'top');
        this.router.navigateByUrl('/customer/order-store');
    }
};
__decorate([
    ViewChild('mapElement', { static: false }),
    __metadata("design:type", ElementRef)
], CustomerPage.prototype, "mapNativeElement", void 0);
CustomerPage = __decorate([
    Component({
        selector: 'app-customer',
        templateUrl: './customer.page.html',
        styleUrls: ['./customer.page.scss'],
    }),
    __metadata("design:paramtypes", [Geolocation,
        UserService,
        ToastService,
        ActivatedRoute,
        Router,
        HttpClient,
        FormBuilder,
        LoadingController,
        NavController])
], CustomerPage);
export { CustomerPage };
//# sourceMappingURL=customer.page.js.map