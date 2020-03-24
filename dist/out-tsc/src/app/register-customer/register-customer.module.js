import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterCustomerService } from './shared/register-customer.service';
import { RegisterCustomerPage } from './register-customer.page';
const routes = [
    {
        path: '',
        component: RegisterCustomerPage
    }
];
let RegisterCustomerPageModule = class RegisterCustomerPageModule {
};
RegisterCustomerPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RegisterCustomerPage],
        providers: [RegisterCustomerService],
    })
], RegisterCustomerPageModule);
export { RegisterCustomerPageModule };
//# sourceMappingURL=register-customer.module.js.map