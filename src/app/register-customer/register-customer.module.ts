import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterCustomerService } from './shared/register-customer.service';
import { RegisterCustomerPage } from './register-customer.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterCustomerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterCustomerPage],
  providers: [RegisterCustomerService],
})
export class RegisterCustomerPageModule {}
