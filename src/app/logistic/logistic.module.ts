import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HistoryComponent } from './history/history.component';
import { LogisticPage } from './logistic.page';
import { LogisticService } from './shared/logistic.service';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './form/form.component';
import { ShowComponent } from './show/show.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DeliverysComponent } from './delivery/deliverys/deliverys.component';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';



const routes: Routes = [
  {
    path: '',
    component: LogisticPage
  },
  {
        path:'history',
        component: HistoryComponent,
        data: { title: 'ประวัติการส่งสินค้า'}
   },
   {
        path: ':id',
        component: FormComponent,
        data: { title: 'แก้ไขข้อมูล', formType: 'EDIT' }

    },
   {
        path:'delivery/show',
        component: ShowComponent,
        data: { title: 'ประวัติ'}
   },
    {
        path:'delivery/codedelivery',
        component: DeliveryComponent,
        data: { title: 'ขนส่ง'}
    },
    {
        path: 'delivery/deliverys',
        component: DeliverysComponent,
         data: { title: 'ขนส่ง' }

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
  declarations: [
  LogisticPage,
  HistoryComponent,
  FormComponent,
  ShowComponent,
  DeliveryComponent,
  DeliverysComponent,
  ],
   providers: [
   LogisticService,
   File,
   Camera,
   // WebView
   ],
})
export class LogisticPageModule {}
