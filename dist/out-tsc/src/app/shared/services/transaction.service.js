import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
let TransactionService = class TransactionService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${environment.api_url}`;
    }
    get(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    // latitude,longitude
    orderProduct() {
        console.log(`https://qrdee.co/api/v1/order`);
        return this.http.get(`https://qrdee.co/api/v1/order`);
    }
    orderProducts() {
        console.log(`https://qrdee.co/api/v1/orders`);
        return this.http.get(`https://qrdee.co/api/v1/orders`);
    }
    getUser() {
        return this.http.get(`https://qrdee.co/api/v1/users`);
        // console.log('https://qrdee.co/api/v1/users');
    }
    getCodeRandoms() {
        return this.http.get(`https://qrdee.co/api/v1/code_randomss`);
        // console.log('https://qrdee.co/api/v1/users');      store_id
    }
    newTransaction(products, total_price, latitude, longitude, firstname, lastname, mobile_number, latitude_store, longitude_store, store_id, promptpay, verified) {
        const body = {
            total_price: total_price,
            products: products,
            latitude: latitude,
            longitude: longitude,
            firstname: firstname,
            lastname: lastname,
            mobile_number: mobile_number,
            latitude_store: latitude_store,
            longitude_store: longitude_store,
            store_id: store_id,
            promptpay: promptpay,
            verified: verified,
        };
        console.log(body);
        return this.http.post(`${this.baseUrl}/new_transaction`, body);
    }
    newTransactionStore(products, total_price, verified) {
        const bodystore = {
            total_price: total_price,
            products: products,
            verified: verified,
        };
        console.log(bodystore);
        return this.http.post(`https://qrdee.co/api/v1/new_transactionstore`, bodystore);
    }
    getverifiedcart(id) {
        return this.http.get(`https://qrdee.co/api/v1/verified_transactionstore/${id}`);
    }
    verifiedcart(verified) {
        const bodystoreverified = {
            verified: verified,
        };
        console.log('verified', bodystoreverified);
        return this.http.post(`https://qrdee.co/api/v1/verified_transactionstores`, bodystoreverified);
    }
    newTransactionOrder(firstname, lastname, mobile_number, store_id, code_randoms) {
        const bodystorder = {
            firstname: firstname,
            lastname: lastname,
            mobile_number: mobile_number,
            store_id: store_id,
            code_randoms: code_randoms,
        };
        console.log(bodystorder);
        return this.http.post(`https://qrdee.co/api/v1/transaction_order_input`, bodystorder);
    }
    verifyTransaction(transaction) {
        // console.log(transaction);
        return this.http.post(`${this.baseUrl}/verify_transaction`, transaction);
    }
    verifyTransactions(transaction) {
        // console.log(transaction);
        return this.http.post(`${this.baseUrl}/verify_transactions`, transaction);
    }
};
TransactionService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], TransactionService);
export { TransactionService };
//# sourceMappingURL=transaction.service.js.map