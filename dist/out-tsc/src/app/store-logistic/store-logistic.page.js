import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { StoreLogisticService } from './shared/store-logistic.service';
import { HttpClient } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
let StoreLogisticPage = class StoreLogisticPage {
    constructor(route, router, http, storeLogisticService) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.storeLogisticService = storeLogisticService;
    }
    ionViewWillEnter() {
        this.loadLogistic();
    }
    loadLogistic() {
        console.log(this.product_logistics);
        this.storeLogisticService.getProductLogistic().subscribe((data) => this.product_logistics = data.data);
    }
};
StoreLogisticPage = __decorate([
    Component({
        selector: 'app-store-logistic',
        templateUrl: './store-logistic.page.html',
        styleUrls: ['./store-logistic.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        HttpClient,
        StoreLogisticService])
], StoreLogisticPage);
export { StoreLogisticPage };
//# sourceMappingURL=store-logistic.page.js.map