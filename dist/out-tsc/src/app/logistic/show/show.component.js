import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogisticService } from '../shared/logistic.service';
import { AlertController } from '@ionic/angular';
import { ToastService } from '../../shared/services/toast.service';
let ShowComponent = class ShowComponent {
    constructor(http, logistic, alertController, toastService) {
        this.http = http;
        this.logistic = logistic;
        this.alertController = alertController;
        this.toastService = toastService;
        this.deliveryshows = [];
    }
    ionViewWillEnter() {
        this.loadLogistic();
    }
    loadLogistic() {
        this.logistic.getDeliveryShow().subscribe(res => {
            this.deliveryshows = res.products;
            console.log(res);
        });
    }
    // ionViewWillEnter(){
    // 	 this.logistic.getDeliveryShow().subscribe(res => {
    // 	 	     this.deliveryshows = res.products;
    //                 // this.firstname = res.products[0].firstname;
    //                 // this.lastname = res.products[0].lastname;
    //                 // this.updated_at = res.products[0].updated_at;
    //               console.log(res); 
    //             });
    //   }
    deleteLogistic(id) {
        this.presentAlertConfirmDelete(id);
    }
    presentAlertConfirmDelete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'คุณต้องการลบประวัติการส่งสินค้าหรือไม่',
                buttons: [
                    {
                        text: 'ยกเลิก',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'ตกลง',
                        handler: () => {
                            this.logistic.deleteLogistic(id).subscribe(() => {
                                this.toastService.showToast(`ลบประวัติการส่งสินค้าเรียบร้อยแล้ว`, 'top');
                                this.loadLogistic();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ShowComponent = __decorate([
    Component({
        selector: 'app-show',
        templateUrl: './show.component.html',
        styleUrls: ['./show.component.scss'],
    }),
    __metadata("design:paramtypes", [HttpClient,
        LogisticService,
        AlertController,
        ToastService])
], ShowComponent);
export { ShowComponent };
//# sourceMappingURL=show.component.js.map