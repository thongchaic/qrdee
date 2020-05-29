import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { CustomerPage } from './customer.page';
import { UserService } from './shared/user.service';
import { FormsService } from '../products/shared/forms.service';
import { CartmodalComponent } from './cartmodal/cartmodal.component';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MapmodalComponent } from './mapmodal/mapmodal.component';
import { TranslateModule } from '@ngx-translate/core';
import { StoreLocationComponent } from './store-location/store-location.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerPage
  },
   {
    path: 'cartmodal',
    component: CartmodalComponent
  }
  // ,
  //  {
  //   path: ':id',
  //       component: CustomerPage,
  //       data: { title: 'แก้ไขข้อมูล', formType: 'update' }
  // },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
  ],
  declarations: [
    CustomerPage,
    CartmodalComponent,
    StoreLocationComponent,
    MapmodalComponent
  ],
  entryComponents: [MapmodalComponent, CartmodalComponent, StoreLocationComponent],
  providers: [UserService,FormsService,CallNumber],
})
export class CustomerPageModule {}
