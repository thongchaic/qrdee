import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { LogisticService } from '../shared/logistic.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
let HistoryComponent = class HistoryComponent {
    constructor(http, logistic) {
        this.http = http;
        this.logistic = logistic;
        // delivery_pic = '';
        this.url = environment.url;
        console.log('history');
    }
    ionViewWillEnter() {
        this.loadProfile();
        // this.historyservice.getHistory().subscribe(console.log)
    }
    loadProfile() {
        this.logistic.getProfile().subscribe(res => {
            this.delivery = res.data;
            console.log(this.delivery = res.data);
        });
    }
};
HistoryComponent = __decorate([
    Component({
        selector: 'app-history',
        templateUrl: './history.component.html',
        styleUrls: ['./history.component.scss'],
    }),
    __metadata("design:paramtypes", [HttpClient,
        LogisticService])
], HistoryComponent);
export { HistoryComponent };
//# sourceMappingURL=history.component.js.map