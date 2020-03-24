import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}/user`;
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    getUser() {
        return this.http.get(`${this.baseUrl}`);
    }
    updateUser(data, id) {
        return this.http.post(`https://qrdee.co/api/v1/update_user/${id}`, this.createFormData(data));
    }
    getStoreDistance(latitude, longitude) {
        console.log(`http://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
        return this.http.get(`http://qrdee.co/api/v1/dis?latitude=${latitude}&longitude=${longitude}`);
    }
    createFormData(data) {
        const fd = new FormData();
        fd.append('latitude', data.latitude);
        fd.append('longitude', data.longitude);
        return fd;
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map