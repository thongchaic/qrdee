import { __decorate, __metadata } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from '../../shared/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LogisticService } from '../shared/logistic.service';
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
            destination: ['', Validators.required]
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
__decorate([
    ViewChild('mapElement', { static: false }),
    __metadata("design:type", ElementRef)
], DeliveryComponent.prototype, "mapNativeElement", void 0);
DeliveryComponent = __decorate([
    Component({
        selector: 'app-delivery',
        templateUrl: './delivery.component.html',
        styleUrls: ['./delivery.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder,
        Geolocation,
        ActivatedRoute,
        Router,
        ToastService,
        HttpClient,
        LogisticService])
], DeliveryComponent);
export { DeliveryComponent };
//# sourceMappingURL=delivery.component.js.map