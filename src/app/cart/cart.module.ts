import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart.page';
import { PriceComponent } from './price/price.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CartPage,
    PriceComponent,
    ProductsComponent
  ],
  providers: [

  ]
})
export class CartPageModule {}
