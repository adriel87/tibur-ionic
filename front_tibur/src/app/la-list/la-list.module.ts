import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaListPageRoutingModule } from './la-list-routing.module';

import { LaListPage } from './la-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaListPageRoutingModule
  ],
  declarations: [LaListPage]
})
export class LaListPageModule {}
