import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { CustomerPage } from './customer.page';
import { UserService } from './shared/user.service';
import { FormsService } from '../products/shared/forms.service';
const routes: Routes = [
  {
    path: '',
    component: CustomerPage
  },
   {
    path: ':id',
        component: CustomerPage,
        data: { title: 'แก้ไขข้อมูล', formType: 'update' }
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerPage],
   providers: [UserService,FormsService],
})
export class CustomerPageModule {}
