import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let RegisterCustomerService = class RegisterCustomerService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}`;
    }
    registercustomer(password, firstname, lastname, mobile_number, email) {
        const body = {
            // username : username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            // promptpay : promptpay,
            mobile_number: mobile_number,
            // store_name:store_name,
            email: email,
        };
        console.log(body);
        return this.http.post(`https://qrdee.co/api/v1/register_user`, body);
    }
};
RegisterCustomerService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], RegisterCustomerService);
export { RegisterCustomerService };
//# sourceMappingURL=register-customer.service.js.map