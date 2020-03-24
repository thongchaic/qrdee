import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Product } from '../shared/product';
import { environment } from 'src/environments/environment';
let ShowCustomerComponent = class ShowCustomerComponent {
    constructor(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.url = environment.url;
        this.id = 0;
        this.usertype = '';
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params && params.special) {
                this.id = JSON.parse(params.special);
                console.log('id: ', this.id);
            }
        });
        this.usertype = localStorage.getItem('usertype');
    }
    ionViewWillEnter() {
        this.loadProductcustomer();
        this.loadProduct();
    }
    loadProductcustomer() {
        this.productService.getAllproduct(this.id).subscribe(data => {
            this.customers = data.products[0];
            // console.log(data);
            console.log(this.customers);
        });
    }
    loadProduct() {
        this.productService.get(this.route.snapshot.paramMap.get('id')).subscribe(data => {
            // this.product = data;
            console.log(data);
        });
    }
    store_customer(id) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(id)
            }
        };
        this.router.navigate(['products'], navigationExtras);
        // console.log(id);
        console.log(navigationExtras);
    }
};
ShowCustomerComponent = __decorate([
    Component({
        selector: 'app-show-customer',
        templateUrl: './show-customer.component.html',
        styleUrls: ['./show-customer.component.scss'],
    }),
    __metadata("design:paramtypes", [ProductService,
        ActivatedRoute,
        Router])
], ShowCustomerComponent);
export { ShowCustomerComponent };
//# sourceMappingURL=show-customer.component.js.map