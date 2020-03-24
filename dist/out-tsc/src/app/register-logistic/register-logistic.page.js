import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { RegisterLogisticService } from './shared/register-logistic.service';
import { Router } from '@angular/router';
import { ToastService } from '../shared/services/toast.service';
let RegisterLogisticPage = class RegisterLogisticPage {
    constructor(router, registerService, toastService) {
        this.router = router;
        this.registerService = registerService;
        this.toastService = toastService;
        this.password = '';
        this.repassword = '';
        this.firstname = '';
        this.lastname = '';
        this.car_number = '';
        this.mobile_number = '';
        // store_name :string='';
        this.email = '';
    }
    RegisterLlogistic() {
        this.registerService.registerlogistic(this.password, this.firstname, this.lastname, this.mobile_number, this.email, this.car_number).subscribe(trn => {
            console.log(trn);
            this.toastService.showToast('ลงทะเบียนสำเร็จแล้ว กรุณาล็อคอิน', 'top');
            this.router.navigateByUrl('/login');
        });
    }
};
RegisterLogisticPage = __decorate([
    Component({
        selector: 'app-register-logistic',
        templateUrl: './register-logistic.page.html',
        styleUrls: ['./register-logistic.page.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        RegisterLogisticService,
        ToastService])
], RegisterLogisticPage);
export { RegisterLogisticPage };
//# sourceMappingURL=register-logistic.page.js.map