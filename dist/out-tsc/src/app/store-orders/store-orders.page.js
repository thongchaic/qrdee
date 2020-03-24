import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OrderService } from './shared/order.service';
import { ToastService } from '../shared/services/toast.service';
import { Router } from '@angular/router';
let StoreOrdersPage = class StoreOrdersPage {
    constructor(storeorderService, route, alertController, toastService, router) {
        this.storeorderService = storeorderService;
        this.route = route;
        this.alertController = alertController;
        this.toastService = toastService;
        this.router = router;
    }
    ionViewWillEnter() {
        this.loadOrder();
    }
    loadOrder() {
        this.storeorderService.order().subscribe(data => {
            this.orders = data.products;
            console.log('orders', this.orders);
        });
    }
    deleteOrder(id) {
        this.presentAlertConfirmDelete(id);
    }
    presentAlertConfirmDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'คุณต้องการลบออเดอร์สินค้านี้หรือไม่',
                buttons: [
                    {
                        text: 'ยกเลิก',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'ตกลง',
                        handler: () => {
                            this.storeorderService.deleteOrder(id).subscribe(() => {
                                this.toastService.showToast(`ลบออเดอร์สินค้าเรียบร้อยแล้ว`, 'top');
                                this.loadOrder();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    order_store_product(code_randoms) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(code_randoms)
            }
        };
        this.router.navigate(['store-orders/storeorder/code_randoms'], navigationExtras);
        // console.log(code_randoms);
        console.log(navigationExtras);
    }
};
StoreOrdersPage = __decorate([
    Component({
        selector: 'app-store-orders',
        templateUrl: './store-orders.page.html',
        styleUrls: ['./store-orders.page.scss'],
    }),
    __metadata("design:paramtypes", [OrderService,
        ActivatedRoute,
        AlertController,
        ToastService,
        Router])
], StoreOrdersPage);
export { StoreOrdersPage };
//# sourceMappingURL=store-orders.page.js.map