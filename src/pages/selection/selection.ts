import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SonyPage } from '../sony/sony';
import { SamsungPage } from '../samsung/samsung';
import { HitachiPage } from '../hitachi/hitachi';

@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html',
})
export class SelectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    mdSony(){
      this.navCtrl.push(SonyPage);
    }
    mdSamsung(){
      this.navCtrl.push(SamsungPage);
    }
    mdHitachi(){
      this.navCtrl.push(HitachiPage);
    }

}
