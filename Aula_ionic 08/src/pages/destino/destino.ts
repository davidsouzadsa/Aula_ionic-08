/* *@Author: David de Souza @RA: 201314824*/ 

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filmes';

@IonicPage()
@Component({
  selector: 'page-destino',
  templateUrl: 'destino.html',
})
export class DestinoPage {
  public filme:Filme;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.filme = this.navParams.get("filmeSelecionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinoPage');
  }

}
