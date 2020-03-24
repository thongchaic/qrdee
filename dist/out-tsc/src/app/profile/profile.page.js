import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ProfileService } from './shared/profile.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
let ProfilePage = class ProfilePage {
    constructor(profileservice, route, http) {
        this.profileservice = profileservice;
        this.route = route;
        this.http = http;
        this.url = environment.url;
    }
    ionViewWillEnter() {
        this.loadProfile();
    }
    loadProfile() {
        // this.http.get<any>(`http://qrdee.co/api/v1/store`).subscribe(console.log);
        this.profileservice.getProfiles().subscribe(res => {
            this.store = res.data;
            console.log(this.store);
        });
    }
};
ProfilePage = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.page.html',
        styleUrls: ['./profile.page.scss'],
    }),
    __metadata("design:paramtypes", [ProfileService,
        ActivatedRoute,
        HttpClient])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map