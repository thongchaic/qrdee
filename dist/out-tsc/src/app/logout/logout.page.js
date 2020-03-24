import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LogoutService } from './shared/logout.service';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ToastService } from '../shared/services/toast.service';
import { Router } from '@angular/router';
let LogoutPage = class LogoutPage {
    constructor(toastController, http, logoutservice, router, storage, toastService) {
        this.toastController = toastController;
        this.http = http;
        this.logoutservice = logoutservice;
        this.router = router;
        this.storage = storage;
        this.toastService = toastService;
    }
    save() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('usertype');
        this.toastService.showToast('คุณได้ออกจากระบบแล้ว', 'top');
        this.router.navigateByUrl('/login');
    }
};
LogoutPage = __decorate([
    Component({
        selector: 'app-logout',
        templateUrl: './logout.page.html',
        styleUrls: ['./logout.page.scss'],
    }),
    __metadata("design:paramtypes", [ToastController,
        HttpClient,
        LogoutService,
        Router,
        Storage,
        ToastService])
], LogoutPage);
export { LogoutPage };
//# sourceMappingURL=logout.page.js.map