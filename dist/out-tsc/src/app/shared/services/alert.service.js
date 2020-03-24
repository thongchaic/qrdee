import { __awaiter, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    showAlert(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: options.header,
                subHeader: options.sub_header,
                message: options.message,
                buttons: options.buttons
            });
            yield alert.present();
        });
    }
};
AlertService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [AlertController])
], AlertService);
export { AlertService };
//# sourceMappingURL=alert.service.js.map