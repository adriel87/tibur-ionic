import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateYourCosaPageRoutingModule } from './create-your-cosa-routing.module';

import { CreateYourCosaPage } from './create-your-cosa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateYourCosaPageRoutingModule
  ],
  declarations: [CreateYourCosaPage]
})
export class CreateYourCosaPageModule {}
