import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let QrService = class QrService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}/promptpayQRs`;
    }
    generatePromptPayQRs(transaction) {
        return this.http.post(this.baseUrl, transaction);
    }
};
QrService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], QrService);
export { QrService };
//# sourceMappingURL=qr.service.js.map