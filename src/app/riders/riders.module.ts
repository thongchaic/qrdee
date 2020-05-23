import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RidersPageRoutingModule } from './riders-routing.module';

import { RidersPage } from './riders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RidersPageRoutingModule
  ],
  declarations: [RidersPage]
})
export class RidersPageModule {}
