import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { LoginStoreService } from './shared/login-store.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ModalController, Events } from '@ionic/angular';
import { ToastService } from '../shared/services/toast.service';
import { Storage } from '@ionic/storage';
let LoginPage = class LoginPage {
    constructor(loginService, router, navCtrl, http, modalController, event, toastService, storage) {
        this.loginService = loginService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.http = http;
        this.modalController = modalController;
        this.event = event;
        this.toastService = toastService;
        this.storage = storage;
        this.token = '';
        this.login = {};
        this.email = '';
        this.password = '';
        // is_disabled:boolean = false;
        this.usertype = '';
    }
    loginForm() {
        this.loginService.logintore(this.email, this.password).subscribe(trn => {
            console.log(trn);
            this.email = trn.data;
            this.token = trn.access_token;
            console.log("test", this.token);
            console.log('access_token ' + this.token);
            localStorage.setItem('access_token', this.token);
            localStorage.setItem('usertype', trn.usertype);
            console.log('usertype' + trn.usertype);
            if (trn.usertype == 1) {
                this.router.navigateByUrl('/cart');
            }
            if (trn.usertype == 2) {
                this.router.navigateByUrl('/logistic');
            }
            if (trn.usertype == 3) {
                this.router.navigateByUrl('/customer');
            }
            this.event.publish('user:changed', trn.usertype);
        });
    }
    goRegister_store() {
        this.router.navigateByUrl('/register');
    }
    goRegister_logistic() {
        this.router.navigateByUrl('/register-logistic');
    }
    goRegister_customer() {
        this.router.navigateByUrl('/register-customer');
    }
};
LoginPage = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    __metadata("design:paramtypes", [LoginStoreService,
        Router,
        NavController,
        HttpClient,
        ModalController,
        Events,
        ToastService,
        Storage])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map