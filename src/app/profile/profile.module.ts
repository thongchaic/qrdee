import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { ProfileService } from './shared/profile.service';
import { ProfilePage } from './profile.page';
import { FormComponent } from './form/form.component';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
// import { WebView } from '@ionic-native/ionic-webview/ngx';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: ':id',
        component: FormComponent,
        data: { title: 'แก้ไขข้อมูล', formType: 'EDIT' }
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
  declarations: [ProfilePage,FormComponent],
  providers: [
  ProfileService,
  File,
  Camera
  // ImagePicker,
  // WebView
  ],
})
export class ProfilePageModule {}
