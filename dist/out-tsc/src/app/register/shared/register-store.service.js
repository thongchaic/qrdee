import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let RegisterStoreService = class RegisterStoreService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}`;
    }
    registerstore(password, firstname, lastname, promptpay, mobile_number, store_name, email, latitude, longitude) {
        const body = {
            // username : username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            promptpay: promptpay,
            mobile_number: mobile_number,
            store_name: store_name,
            email: email,
            latitude: latitude,
            longitude: longitude,
        };
        console.log(body);
        return this.http.post(`https://qrdee.co/api/v1/register`, body);
    }
};
RegisterStoreService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], RegisterStoreService);
export { RegisterStoreService };
//# sourceMappingURL=register-store.service.js.map