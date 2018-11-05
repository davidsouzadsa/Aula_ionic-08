/* *@Author: David de Souza @RA: 201314824*/ 

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularidadePage } from './popularidade';

@NgModule({
  declarations: [
    PopularidadePage,
  ],
  imports: [
    IonicPageModule.forChild(PopularidadePage),
  ],
})
export class PopularidadePageModule {}
