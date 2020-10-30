import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeroDAMPageRoutingModule } from './primero-dam-routing.module';

import { PrimeroDAMPage } from './primero-dam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeroDAMPageRoutingModule
  ],
  declarations: [PrimeroDAMPage]
})
export class PrimeroDAMPageModule {}
