import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { QrmodalComponent } from './qrmodal/qrmodal.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { CartPage } from './cart.page';
import { ProductService } from '../products/shared/product.service';
import { CartService } from './shared/cart.service';
import { PriceComponent } from './price/price.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'
import { QRCodeModule } from 'angularx-qrcode';

// import { QRScanner } from '@ionic-native/qr-scanner/ngx';


const routes: Routes = [
  {
    path: '',
    component: CartPage
  },
   {
    path: 'qrmodal',
    component: QrmodalComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    QRCodeModule,
    // QRScanner,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CartPage,
    PriceComponent,
    ListComponent,
    AddComponent,
    QrmodalComponent,
  ],
  entryComponents: [
    QrmodalComponent
  ],
  providers: [
    CartService,
    ProductService,
    BarcodeScanner,
  ],
   schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})
export class CartPageModule {}
