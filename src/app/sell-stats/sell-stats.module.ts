import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SellStatsPage } from './sell-stats.page';
import { SellStatsService }  from './shared/sell-stats.service';
import { HttpClientInterceptor } from '../shared/interceptors/httpclient.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: SellStatsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [SellStatsPage],
   providers: [SellStatsService,
   { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }],
})
export class SellStatsPageModule {}
