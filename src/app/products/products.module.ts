import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ProductsPage } from './products.page';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ProductService } from './shared/product.service';
import { CartService } from '../cart/shared/cart.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ShowComponent } from './show/show.component';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FormsComponent }  from './forms/forms.component';
import { FormsService } from './shared/forms.service';

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
        path: 'imgs',
        component: FormsComponent,
         data: { title: 'เพิ่มรูป', formType: 'IMGS' }
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
      },
       {
        path: 'show/customer',
        component: ShowCustomerComponent,
         data: { title: 'ขนส่ง' }

        },
       
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsPage,
    ListComponent,
    FormComponent,
    ShowComponent,
    ShowCustomerComponent,
    FormsComponent,
  ],
  providers: [
    ProductService,
    FormsService,
    CartService,
    BarcodeScanner,
    File,
    Camera,
    WebView
  ]
})
export class ProductsPageModule {}
