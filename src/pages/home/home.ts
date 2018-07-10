import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectionPage } from '../selection/selection';
import { SwitchesPage } from '../switches/switches';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase} from 'angularfire2/database'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  switch;
  state:boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    //this.switch = db.object('user1/switch');
  }

  mdSwitch(){
    this.navCtrl.push(SwitchesPage);
  }

  mdTV(){
    this.navCtrl.push(SelectionPage);
  }

}
 