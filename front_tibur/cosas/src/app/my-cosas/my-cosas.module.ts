import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCosasPageRoutingModule } from './my-cosas-routing.module';

import { MyCosasPage } from './my-cosas.page';
import { MyCosasItemComponent } from '../my-cosas-item/my-cosas-item.component';
import { CreateNewCosaComponent } from '../create-new-cosa/create-new-cosa.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCosasPageRoutingModule
  ],
  declarations: [MyCosasPage, MyCosasItemComponent, CreateNewCosaComponent]
})
export class MyCosasPageModule {}
