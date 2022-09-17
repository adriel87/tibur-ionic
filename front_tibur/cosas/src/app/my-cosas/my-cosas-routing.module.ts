import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCosasPage } from './my-cosas.page';

const routes: Routes = [
  {
    path: '',
    component: MyCosasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCosasPageRoutingModule {}
