import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase} from 'angularfire2/database'

/**
 * Generated class for the SwitchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-switches',
  templateUrl: 'switches.html',
})
export class SwitchesPage {

  switch;
  state1:boolean = true;
  state2:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
    this.switch = db.object('user1/Switch');
  }

  fan(){
    this.switch.update({ switch1: this.state1});
    this.state1=!this.state1
  }
  light(){
    this.switch.update({ switch2: this.state2});
    this.state2=!this.state2
  }

}
