/* *@Author: David de Souza @RA: 201314824*/ 

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtualizaFilmePage } from './atualiza-filme';

@NgModule({
  declarations: [
    AtualizaFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(AtualizaFilmePage),
  ],
})
export class AtualizaFilmePageModule {}
