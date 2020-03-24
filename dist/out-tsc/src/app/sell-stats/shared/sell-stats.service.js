import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let SellStatsService = class SellStatsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}`;
    }
    orders() {
        // console.log(`${this.baseUrl}/sell_statss`);
        // return this.http.get<any>(`${this.baseUrl}/sell_statss`);
        return this.http.get(`${this.baseUrl}/sell_statss`);
    }
    orderss() {
        return this.http.get(`${this.baseUrl}/sell_statss_order`);
    }
};
SellStatsService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], SellStatsService);
export { SellStatsService };
//# sourceMappingURL=sell-stats.service.js.map