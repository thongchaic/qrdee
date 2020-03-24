import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { RegisterCustomerService } from './shared/register-customer.service';
import { Router } from '@angular/router';
import { ToastService } from '../shared/services/toast.service';
let RegisterCustomerPage = class RegisterCustomerPage {
    constructor(router, registerService, toastService) {
        this.router = router;
        this.registerService = registerService;
        this.toastService = toastService;
        this.password = '';
        this.repassword = '';
        this.firstname = '';
        this.lastname = '';
        // promptpay:string='';
        this.mobile_number = '';
        // store_name :string='';
        this.email = '';
    }
    Register_customer() {
        this.registerService.registercustomer(this.password, this.firstname, this.lastname, this.mobile_number, this.email).subscribe(trn => {
            console.log(trn);
            this.toastService.showToast('ลงทะเบียนสำเร็จแล้ว กรุณาล็อคอิน', 'top');
            this.router.navigateByUrl('/login');
        });
    }
};
RegisterCustomerPage = __decorate([
    Component({
        selector: 'app-register-customer',
        templateUrl: './register-customer.page.html',
        styleUrls: ['./register-customer.page.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        RegisterCustomerService,
        ToastService])
], RegisterCustomerPage);
export { RegisterCustomerPage };
//# sourceMappingURL=register-customer.page.js.map