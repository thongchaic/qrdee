import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { Http, Headers, RequestOptions } from '@angular/http';
let ListComponent = class ListComponent {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.removeFromCartChange = new EventEmitter;
        this.addItemChange = new EventEmitter;
        this.url = environment.url;
    }
    ngOnInit() {
        // console.log(this.cart);
    }
    addItem(product) {
        this.addItemChange.emit(product);
    }
    removeFromCart(product) {
        this.removeFromCartChange.emit(product);
    }
};
__decorate([
    Input('cart'),
    __metadata("design:type", Object)
], ListComponent.prototype, "cart", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ListComponent.prototype, "removeFromCartChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ListComponent.prototype, "addItemChange", void 0);
ListComponent = __decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        HttpClient])
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map