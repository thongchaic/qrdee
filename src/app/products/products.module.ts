import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { ProductsPage } from './products.page';
import { ListComponent } from './list/list.component';
import { ProductService } from './shared/product.service';
import { CartService } from '../cart/shared/cart.service';


const routes: Routes = [
  {
    path: '',
    component: ProductsPage
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
    ProductsPage,
    ListComponent
  ],
  providers: [
    ProductService,
    CartService
  ]
})
export class ProductsPageModule {}
