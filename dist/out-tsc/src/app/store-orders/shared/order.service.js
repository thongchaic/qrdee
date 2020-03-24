import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}`;
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/orders/${id}`);
    }
    order() {
        // console.log(`${this.baseUrl}/order`);
        return this.http.get(`${this.baseUrl}/order`);
    }
    deleteOrder(id) {
        // console.log(`${this.baseUrl}/deleteorder/${id}`);
        return this.http.delete(`${this.baseUrl}/delete_order/${id}`);
    }
    OrderStore(code_randoms) {
        // console.log(`${this.baseUrl}/order`);
        return this.http.get(`${this.baseUrl}/order_store/${code_randoms}`);
    }
};
OrderService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map