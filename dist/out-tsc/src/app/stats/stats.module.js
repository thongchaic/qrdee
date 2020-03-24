import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { StatsPage } from './stats.page';
import { StatsService } from './shared/stats.service';
const routes = [
    {
        path: '',
        component: StatsPage
    }
];
let StatsPageModule = class StatsPageModule {
};
StatsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SharedModule,
            RouterModule.forChild(routes)
        ],
        declarations: [StatsPage],
        providers: [StatsService],
    })
], StatsPageModule);
export { StatsPageModule };
//# sourceMappingURL=stats.module.js.map