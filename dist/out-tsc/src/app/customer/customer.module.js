import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { CustomerPage } from './customer.page';
import { UserService } from './shared/user.service';
const routes = [
    {
        path: '',
        component: CustomerPage
    },
    {
        path: ':id',
        component: CustomerPage,
        data: { title: 'แก้ไขข้อมูล', formType: 'update' }
    },
];
let CustomerPageModule = class CustomerPageModule {
};
CustomerPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SharedModule,
            RouterModule.forChild(routes)
        ],
        declarations: [CustomerPage],
        providers: [UserService],
    })
], CustomerPageModule);
export { CustomerPageModule };
//# sourceMappingURL=customer.module.js.map