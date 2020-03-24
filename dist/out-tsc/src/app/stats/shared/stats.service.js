import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let StatsService = class StatsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}/stats`;
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    getStats() {
        return this.http.get(`${this.baseUrl}`);
    }
};
StatsService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], StatsService);
export { StatsService };
//# sourceMappingURL=stats.service.js.map