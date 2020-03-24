import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let RegisterLogisticService = class RegisterLogisticService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}`;
    }
    registerlogistic(password, firstname, lastname, mobile_number, email, car_number) {
        const body = {
            // username : username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            car_number: car_number,
            mobile_number: mobile_number,
            // store_name:store_name,
            email: email,
        };
        console.log(body);
        return this.http.post(`https://qrdee.co/api/v1/delivery_register`, body);
    }
};
RegisterLogisticService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], RegisterLogisticService);
export { RegisterLogisticService };
//# sourceMappingURL=register-logistic.service.js.map