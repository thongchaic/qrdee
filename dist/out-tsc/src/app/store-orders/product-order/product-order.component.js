import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { ActivatedRoute } from '@angular/router';
let ProductOrderComponent = class ProductOrderComponent {
    constructor(orderService, route) {
        this.orderService = orderService;
        this.route = route;
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params && params.special) {
                this.code_randoms = JSON.parse(params.special);
                console.log('code_randoms: ', this.code_randoms);
            }
        });
    }
    ionViewWillEnter() {
        this.loadProduct();
    }
    loadProduct() {
        this.orderService.OrderStore(this.code_randoms).subscribe(data => {
            this.product_orders = data.data;
            console.log('ออเดอร์', this.product_orders);
        });
    }
    ngOnInit() { }
};
ProductOrderComponent = __decorate([
    Component({
        selector: 'app-product-order',
        templateUrl: './product-order.component.html',
        styleUrls: ['./product-order.component.scss'],
    }),
    __metadata("design:paramtypes", [OrderService,
        ActivatedRoute])
], ProductOrderComponent);
export { ProductOrderComponent };
//# sourceMappingURL=product-order.component.js.map