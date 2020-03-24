import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { StoreLogisticService } from './shared/store-logistic.service';
import { StoreLogisticPage } from './store-logistic.page';

const routes: Routes = [
  {
    path: '',
    component: StoreLogisticPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StoreLogisticPage],
  providers: [StoreLogisticService],
})
export class StoreLogisticPageModule {}
