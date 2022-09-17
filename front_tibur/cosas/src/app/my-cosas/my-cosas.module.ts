import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCosasPageRoutingModule } from './my-cosas-routing.module';

import { MyCosasPage } from './my-cosas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCosasPageRoutingModule
  ],
  declarations: [MyCosasPage]
})
export class MyCosasPageModule {}
