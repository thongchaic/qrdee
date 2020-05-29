import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientInterceptor } from '../shared/interceptors/httpclient.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductOrderComponent } from './product-order/product-order.component';
import { StoreOrdersPage } from './store-orders.page';
import { OrderService } from './shared/order.service';
import { TranslateModule } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: StoreOrdersPage
  },
  {
    path: 'storeorder',
    component: ProductOrderComponent
  },
  {
    path: 'storeorder/code_randoms',
    component: ProductOrderComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [
  StoreOrdersPage,
  ProductOrderComponent
  ],
  providers: [OrderService,
  { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }],
})
export class StoreOrdersPageModule {}
