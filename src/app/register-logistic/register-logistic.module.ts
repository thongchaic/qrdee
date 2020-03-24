import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { RegisterLogisticService } from './shared/register-logistic.service';
import { RegisterLogisticPage } from './register-logistic.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterLogisticPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterLogisticPage],
   providers: [RegisterLogisticService],
})
export class RegisterLogisticPageModule {}
