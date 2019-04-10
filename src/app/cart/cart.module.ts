import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { QRCodeModule } from 'angularx-qrcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'

import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart.page';
import { PriceComponent } from './price/price.component';
import { ListComponent } from './list/list.component';

import { CartService } from './shared/cart.service';
import { QrmodalComponent } from './qrmodal/qrmodal.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    component: CartPage
  }
];

@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CartPage,
    PriceComponent,
    ListComponent,
    AddComponent,
    QrmodalComponent
  ],
  entryComponents: [
    QrmodalComponent
  ],
  providers: [
    CartService,
    BarcodeScanner
  ]
})
export class CartPageModule {}
