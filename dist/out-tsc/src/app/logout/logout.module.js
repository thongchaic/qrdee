import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LogoutPage } from './logout.page';
const routes = [
    {
        path: '',
        component: LogoutPage
    }
];
let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [LogoutPage]
    })
], LogoutPageModule);
export { LogoutPageModule };
//# sourceMappingURL=logout.module.js.map