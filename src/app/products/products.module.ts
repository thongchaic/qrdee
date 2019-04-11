import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';

import { ProductsPage } from './products.page';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { FormComponent } from './form/form.component';

import { ProductService } from './shared/product.service';
import { CartService } from '../cart/shared/cart.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

const routes: Routes = [
  {
    path: '',
    component: ProductsPage,
    children: [
      {
        path: '',
        component: ListComponent,
        data: { title: 'รายการสินค้า' }
      },
      {
        path: 'create',
        component: FormComponent,
        data: { title: 'นำเข้าสินค้า', formType: 'CREATE' }
      },    
      {
        path: ':id/edit',
        component: FormComponent,
        data: { title: 'แก้ไขสินค้า', formType: 'EDIT' }
      },
      {
        path: ':id',
        component: ShowComponent,
        data: { title: 'รายละเอียดสินค้า' }
      }
    ]
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
    ListComponent,
    ShowComponent,
    FormComponent
  ],
  providers: [
    ProductService,
    CartService,
    BarcodeScanner
  ]
})
export class ProductsPageModule {}
