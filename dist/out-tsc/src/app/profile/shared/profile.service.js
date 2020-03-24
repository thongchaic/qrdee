import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}/store`;
    }
    getProfile() {
        return this.http.get(`${this.baseUrl}`);
    }
    getProfiles() {
        return this.http.get(`https://qrdee.co/api/v1/stores`);
        // console.log('https://qrdee.co/api/v1/stores');
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    getStoreTypes() {
        return this.http.get(`https://qrdee.co/api/v1/ref?type=store_types`);
    }
    updateProfile(data, id) {
        console.log(data);
        return this.http.post(`https://qrdee.co/api/v1/update_store/${id}`, this.createFormData(data));
    }
    createFormData(data) {
        const fd = new FormData();
        if (data.image)
            fd.append('store_pic', data.image);
        fd.append('username', data.username);
        fd.append('store_name', data.store_name);
        fd.append('mobile_number', data.mobile_number);
        fd.append('firstname', data.firstname);
        fd.append('lastname', data.lastname);
        fd.append('promptpay', data.promptpay);
        // fd.append('latitude', data.latitude);
        // fd.append('longitude', data.longitude);
        fd.append('store_type_id', data.store_type_id);
        return fd;
    }
};
ProfileService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], ProfileService);
export { ProfileService };
//# sourceMappingURL=profile.service.js.map