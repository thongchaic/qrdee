import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ToastService } from '../../../shared/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { LogisticService } from '../../shared/logistic.service';
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
__decorate([
    ViewChild('mapElement', { static: false }),
    __metadata("design:type", ElementRef)
], DeliverysComponent.prototype, "mapNativeElement", void 0);
DeliverysComponent = __decorate([
    Component({
        selector: 'app-deliverys',
        templateUrl: './deliverys.component.html',
        styleUrls: ['./deliverys.component.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        ToastService,
        Geolocation,
        FormBuilder,
        HttpClient,
        LogisticService])
], DeliverysComponent);
export { DeliverysComponent };
//# sourceMappingURL=deliverys.component.js.map