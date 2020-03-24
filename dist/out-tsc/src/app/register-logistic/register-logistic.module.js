import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterLogisticService } from './shared/register-logistic.service';
import { RegisterLogisticPage } from './register-logistic.page';
const routes = [
    {
        path: '',
        component: RegisterLogisticPage
    }
];
let RegisterLogisticPageModule = class RegisterLogisticPageModule {
};
RegisterLogisticPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RegisterLogisticPage],
        providers: [RegisterLogisticService],
    })
], RegisterLogisticPageModule);
export { RegisterLogisticPageModule };
//# sourceMappingURL=register-logistic.module.js.map