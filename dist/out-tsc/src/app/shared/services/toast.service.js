import { __awaiter, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    showToast(message, position) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: position,
                duration: 1000,
                color: 'dark'
            });
            toast.present();
        });
    }
};
ToastService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [ToastController])
], ToastService);
export { ToastService };
//# sourceMappingURL=toast.service.js.map