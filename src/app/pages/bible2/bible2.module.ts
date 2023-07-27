import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bible2PageRoutingModule } from './bible2-routing.module';

import { Bible2Page } from './bible2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bible2PageRoutingModule
  ],
  declarations: [Bible2Page]
})
export class Bible2PageModule {}
