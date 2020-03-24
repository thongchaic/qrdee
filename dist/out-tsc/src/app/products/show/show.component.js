import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
// import { Product } from '../shared/product';
import { environment } from 'src/environments/environment';
let ShowComponent = class ShowComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.url = environment.url;
    }
    ionViewWillEnter() {
        this.loadProduct();
    }
    loadProduct() {
        this.productService.get(this.route.snapshot.paramMap.get('id')).subscribe(data => {
            this.product = data;
            console.log(data);
        });
    }
};
ShowComponent = __decorate([
    Component({
        selector: 'app-show',
        templateUrl: './show.component.html',
        styleUrls: ['./show.component.scss'],
    }),
    __metadata("design:paramtypes", [ProductService,
        ActivatedRoute])
], ShowComponent);
export { ShowComponent };
//# sourceMappingURL=show.component.js.map