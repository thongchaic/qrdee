import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SellStatsService } from './shared/sell-stats.service';
import { ToastService } from '../shared/services/toast.service';
import { Router } from '@angular/router';
let SellStatsPage = class SellStatsPage {
    constructor(sellstats, route, alertController, toastService, router) {
        this.sellstats = sellstats;
        this.route = route;
        this.alertController = alertController;
        this.toastService = toastService;
        this.router = router;
        this.page = 1;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.loadsell();
    }
    loadsell() {
        this.sellstats.orders().subscribe((data) => {
            this.sellstatss = data.products;
            // this.page = 1;
            console.log(data);
            console.log(this.sellstatss);
        });
    }
    loadData(infiniteScroll) {
        this.sellstats.orders().subscribe((data) => {
            this.sellstatss = data.products;
            this.page++;
            // this.sellstats.orders(this.page).subscribe(res => {
            if (Object.keys(data).length === 0 && data.constructor === Object) {
                infiniteScroll.disabled = true;
            }
            setTimeout(() => {
                this.sellstatss = this.sellstatss.concat(data.products);
                infiniteScroll.complete();
                if (this.page >= data['last_page']) {
                    infiniteScroll.disabled = true;
                }
            }, 500);
        });
        // });
    }
};
SellStatsPage = __decorate([
    Component({
        selector: 'app-sell-stats',
        templateUrl: './sell-stats.page.html',
        styleUrls: ['./sell-stats.page.scss'],
    }),
    __metadata("design:paramtypes", [SellStatsService,
        ActivatedRoute,
        AlertController,
        ToastService,
        Router])
], SellStatsPage);
export { SellStatsPage };
//# sourceMappingURL=sell-stats.page.js.map