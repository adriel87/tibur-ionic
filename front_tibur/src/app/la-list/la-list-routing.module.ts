import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaListPage } from './la-list.page';

const routes: Routes = [
  {
    path: '',
    component: LaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaListPageRoutingModule {}
