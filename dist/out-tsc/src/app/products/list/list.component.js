import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ToastService } from '../../shared/services/toast.service';
import { CartService } from 'src/app/cart/shared/cart.service';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
let ListComponent = class ListComponent {
    constructor(productService, cartService, toastService, alertController, router, route) {
        this.productService = productService;
        this.cartService = cartService;
        this.toastService = toastService;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.url = environment.url;
        this.products = [];
        this.page = 1;
        this.store_id = 0;
        this.usertype = '';
        this.searchTerm = '';
        this.query = '';
        this.usertype = localStorage.getItem('usertype');
        this.route.queryParams.subscribe(params => {
            console.log(params);
            if (params && params.special) {
                this.store_id = JSON.parse(params.special);
                console.log('store_id: ', this.store_id);
            }
        });
    }
    ionViewWillEnter() {
        this.loadProducts();
    }
    loadProducts() {
        if (this.store_id) {
            this.productService.getAllS(this.store_id).subscribe(res => {
                console.log(res);
                this.products = res.products.data;
                this.checkProducts(this.products);
                this.page = 1;
            });
        }
        else {
            this.productService.getAll().subscribe(res => {
                console.log(res);
                this.products = res.products.data;
                this.checkProducts(this.products);
                this.page = 1;
            });
        }
        // this.productService.getAll().subscribe(res => {
        // console.log(res);
        // this.products = res.products.data;
        // // this.checkProducts(this.products);
        // this.page = 1;
        // });
    }
    user_customer(id) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(id)
            }
        };
        this.router.navigate(['/products/show/customer'], navigationExtras);
        // console.log(id);
        console.log(navigationExtras);
    }
    search(query) {
        if (this.store_id) {
            console.log(query);
            // console.log(store_id);
            this.searchTerm = query;
            this.productService.searchs(this.store_id, query, 1).subscribe(res => {
                console.log(this.products);
                this.products = res.data;
                this.checkProducts(this.products);
                this.page = 1;
            });
        }
        else {
            console.log(query);
            // console.log(store_id);
            this.searchTerm = query;
            this.productService.search(query, 1).subscribe(res => {
                console.log(this.products);
                this.products = res.data;
                this.checkProducts(this.products);
                this.page = 1;
            });
        }
    }
    addToCart(product) {
        this.cartService.addToCart(product);
        this.toastService.showToast(`เพิ่ม ${product.product_th} ลงในตะกร้า`, 'top');
    }
    loadData(infiniteScroll) {
        if (this.store_id) {
            this.page++;
            this.productService.searchs(this.store_id, this.searchTerm, this.page).subscribe(res => {
                if (Object.keys(res).length === 0 && res.constructor === Object) {
                    infiniteScroll.disabled = true;
                }
                setTimeout(() => {
                    this.products = this.products.concat(res.data);
                    this.checkProducts(this.products);
                    infiniteScroll.complete();
                    if (this.page >= res['last_page']) {
                        infiniteScroll.disabled = true;
                    }
                }, 500);
            });
        }
        else {
            this.page++;
            this.productService.search(this.searchTerm, this.page).subscribe(res => {
                if (Object.keys(res).length === 0 && res.constructor === Object) {
                    infiniteScroll.disabled = true;
                }
                setTimeout(() => {
                    this.products = this.products.concat(res.data);
                    this.checkProducts(this.products);
                    infiniteScroll.complete();
                    if (this.page >= res['last_page']) {
                        infiniteScroll.disabled = true;
                    }
                }, 500);
            });
        }
    }
    checkProducts(products) {
        if (this.products) {
            this.store_id;
            products.forEach(product => {
                if (this.cartService.checkInCart(product)) {
                    console.log(this.store_id);
                    product.incart = 1;
                }
                else {
                    product.incart = 0;
                }
                if (product.instock == 0) {
                    product.allowAdd = 0;
                }
                else {
                    product.allowAdd = 1;
                }
            });
        }
    }
    deleteProduct(id) {
        this.presentAlertConfirmDelete(id);
    }
    presentAlertConfirmDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'คุณต้องการลบสินค้าชิ้นนี้ใช่หรือไม่',
                buttons: [
                    {
                        text: 'ยกเลิก',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'ตกลง',
                        handler: () => {
                            this.productService.deleteProduct(id).subscribe(() => {
                                this.toastService.showToast(`ลบสินค้าเรียบร้อยแล้ว`, 'top');
                                this.loadProducts();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    submit(store_id) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(this.store_id)
            }
        };
        this.router.navigate(['/cart'], navigationExtras);
        console.log(navigationExtras);
        // this.router.navigateByUrl('/cart');
    }
};
ListComponent = __decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.scss'],
    }),
    __metadata("design:paramtypes", [ProductService,
        CartService,
        ToastService,
        AlertController,
        Router,
        ActivatedRoute])
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map