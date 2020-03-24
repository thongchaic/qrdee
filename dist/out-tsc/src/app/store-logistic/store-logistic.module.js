import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { StoreLogisticService } from './shared/store-logistic.service';
import { StoreLogisticPage } from './store-logistic.page';
const routes = [
    {
        path: '',
        component: StoreLogisticPage
    }
];
let StoreLogisticPageModule = class StoreLogisticPageModule {
};
StoreLogisticPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SharedModule,
            RouterModule.forChild(routes)
        ],
        declarations: [StoreLogisticPage],
        providers: [StoreLogisticService],
    })
], StoreLogisticPageModule);
export { StoreLogisticPageModule };
//# sourceMappingURL=store-logistic.module.js.map