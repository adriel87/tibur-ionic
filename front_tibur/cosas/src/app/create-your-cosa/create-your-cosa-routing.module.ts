import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateYourCosaPage } from './create-your-cosa.page';

const routes: Routes = [
  {
    path: '',
    component: CreateYourCosaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateYourCosaPageRoutingModule {}
