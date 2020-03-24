import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let LogisticService = class LogisticService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}/delivery`;
    }
    getProfile() {
        return this.http.get(`https://qrdee.co/api/v1/delivery`);
    }
    getAll() {
        return this.http.get(`https://qrdee.co/api/v1/transaction`);
    }
    getAlls(code_randoms) {
        // console.log('https://qrdee.co/api/v1/transaction_code/${code_randoms}');
        return this.http.get(`https://qrdee.co/api/v1/transaction_code/${code_randoms}`);
    }
    deleteLogistic(id) {
        // console.log(`${this.baseUrl}/deleteorder/${id}`);
        return this.http.delete(`https://qrdee.co/api/v1/delete_logistic/${id}`);
    }
    transaction_code_t(code_randoms) {
        // console.log('https://qrdee.co/api/v1/transaction_code/${code_randoms}');
        return this.http.get(`https://qrdee.co/api/v1/transaction_code_t/${code_randoms}`);
    }
    Show(firstname, lastname) {
        const body = {
            firstname: firstname,
            lastname: lastname,
        };
        console.log(body);
        return this.http.post(`https://qrdee.co/api/v1/transaction_delivery_show`, body);
    }
    getDeliveryShow() {
        return this.http.get(`https://qrdee.co/api/v1/transaction_delivery_shows`);
        console.log(`https://qrdee.co/api/v1/transaction_delivery_shows`);
    }
    transaction_codes() {
        // console.log(code_randoms);
        return this.http.get(`https://qrdee.co/api/v1/transaction_codes`);
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    getDeliveryType() {
        return this.http.get(`https://qrdee.co/api/v1/ref?type=delivery_types`);
    }
    getDeliveryStatu() {
        console.log('https://qrdee.co/api/v1/ref?type=delivery_status');
        return this.http.get(`https://qrdee.co/api/v1/ref?type=delivery_status`);
    }
    updateLogistic(data, id) {
        console.log('https://qrdee.co/api/v1/update_delivery/${id}');
        return this.http.post(`https://qrdee.co/api/v1/update_delivery/${id}`, this.createFormData(data));
    }
    Search(id, term, page) {
        console.log(term);
        return this.http.get(`https://qrdee.co/api/v1/search_code_random/${id}/?=search&query=${term}&page=${page}`);
    }
    createFormData(data) {
        const fd = new FormData();
        if (data.image)
            fd.append('delivery_pic', data.image);
        fd.append('firstname', data.firstname);
        fd.append('lastname', data.lastname);
        // fd.append('age', data.age);
        fd.append('mobile_number', data.mobile_number);
        // fd.append('address', data.address);
        fd.append('car_number', data.car_number);
        fd.append('delivery_type_id', data.delivery_type_id);
        fd.append('delivery_status_id', data.delivery_status_id);
        // fd.append('longitude', data.longitude);
        return fd;
    }
};
LogisticService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], LogisticService);
export { LogisticService };
//# sourceMappingURL=logistic.service.js.map