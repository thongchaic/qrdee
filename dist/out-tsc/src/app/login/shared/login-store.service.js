import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let LoginStoreService = class LoginStoreService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}`;
    }
    logintore(email, password) {
        const body = {
            email: email,
            password: password,
        };
        console.log(body);
        return this.http.post(`https://qrdee.co/api/v1/login`, body);
    }
};
LoginStoreService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], LoginStoreService);
export { LoginStoreService };
//# sourceMappingURL=login-store.service.js.map