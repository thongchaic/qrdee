import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
// import { RegisterStoreService } from './shared/register-store.service';
import { RegisterStoreService } from './shared/register-store.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { ViewChild } from '@angular/core';
import { ToastService } from '../shared/services/toast.service';
let RegisterPage = class RegisterPage {
    constructor(
    // public navCtrl: NavController, 
    router, registerService, geolocation, toastService) {
        this.router = router;
        this.registerService = registerService;
        this.geolocation = geolocation;
        this.toastService = toastService;
        this.password = '';
        this.repassword = '';
        this.firstname = '';
        this.lastname = '';
        this.promptpay = '';
        this.mobile_number = '';
        this.store_name = '';
        this.email = '';
        this.latitude = '';
        this.longitude = '';
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
            // this.Register_store(this.latitude,this.longitude);
        }).catch((error) => {
            console.log('เกิดข้อผิดพลาดในการรับตำแหน่ง', error);
        });
    }
    Register_store(latitude, longitude) {
        this.registerService.registerstore(this.password, this.firstname, this.lastname, this.promptpay, this.mobile_number, this.store_name, this.email, this.latitude, this.longitude).subscribe(trn => {
            console.log(trn);
            this.latitude;
            this.longitude;
            console.log(this.latitude, this.longitude);
            this.toastService.showToast('ลงทะเบียนสำเร็จแล้ว กรุณาล็อคอิน', 'top');
            this.router.navigateByUrl('/login');
        });
    }
};
__decorate([
    ViewChild('mapElements', { static: false }),
    __metadata("design:type", ElementRef)
], RegisterPage.prototype, "mapNativeElement", void 0);
RegisterPage = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        RegisterStoreService,
        Geolocation,
        ToastService])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map