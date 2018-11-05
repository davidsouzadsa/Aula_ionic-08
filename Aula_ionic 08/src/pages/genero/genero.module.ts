/* *@Author: David de Souza @RA: 201314824*/ 
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneroPage } from './genero';

@NgModule({
  declarations: [
    GeneroPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneroPage),
  ],
})
export class GeneroPageModule {}