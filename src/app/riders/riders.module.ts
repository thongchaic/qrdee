import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

import { RidersPageRoutingModule } from './riders-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { IonicMqttModule, MQTTService } from 'ionic-mqtt';

import { RidersPage } from './riders.page';
import { RoutesComponent } from './routes/routes.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidersPageRoutingModule,
    QRCodeModule,
    TranslateModule.forChild()
  ],
  declarations: [
    RidersPage, 
    RoutesComponent
  ],
  entryComponents: [
    RoutesComponent
  ],
  providers: [
    MQTTService,
    CallNumber
  ]
})
export class RidersPageModule {}
