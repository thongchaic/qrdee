import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SellStatsPage } from './sell-stats.page';
import { SellStatsService } from './shared/sell-stats.service';
import { HttpClientInterceptor } from '../shared/interceptors/httpclient.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
const routes = [
    {
        path: '',
        component: SellStatsPage
    }
];
let SellStatsPageModule = class SellStatsPageModule {
};
SellStatsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SharedModule,
            RouterModule.forChild(routes)
        ],
        declarations: [SellStatsPage],
        providers: [SellStatsService,
            { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }],
    })
], SellStatsPageModule);
export { SellStatsPageModule };
//# sourceMappingURL=sell-stats.module.js.map