import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RidersPage } from './riders.page';

const routes: Routes = [
  {
    path: '',
    component: RidersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RidersPageRoutingModule {}
