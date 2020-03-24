import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let StoreLogisticService = class StoreLogisticService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}/store_id`;
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    gets(id) {
        return this.http.get(`http://qrdee.co/api/v1/product_logistic`);
    }
    // getStoreProductDistance(latitude,longitude) {
    //   console.log(`http://qrdee.co/api/v1/map_delivery?latitude=${latitude}&longitude=${longitude}`);
    //     return this.http.get(`http://qrdee.co/api/v1/map_delivery?latitude=${latitude}&longitude=${longitude}`);
    //   }
    getProductLogistic() {
        // console.log(`https://qrdee.co/api/v1/product_logistic`);
        return this.http.get(`http://qrdee.co/api/v1/product_logistic`);
    }
};
StoreLogisticService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], StoreLogisticService);
export { StoreLogisticService };
//# sourceMappingURL=store-logistic.service.js.map