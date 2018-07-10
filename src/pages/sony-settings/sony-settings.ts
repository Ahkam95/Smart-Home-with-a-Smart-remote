import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database'
import { Chlist } from "../../model/chlist";
import { SonyPage } from '../sony/sony';

@Component({
  selector: 'page-sony-settings',
  templateUrl: 'sony-settings.html',
})
export class SonySettingsPage {
  
  
  c0:string=""; c1: string="";c2: string="";c3: string="";c4: string="";
  c5: string="";c6: string="";c7: string="";c8: string="";c9: string="";
  state2=true;
  btn0;
  btn1;
  btn2;
  btn3;
  btn4;
  btn5;
  btn6;
  btn7;
  btn8;
  btn9; 
  user$: FirebaseObjectObservable<Chlist>; 
  data;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase  ) {
    
    this.btn0 = db.object('user1');
    this.btn1 = db.object('user1');
     this.btn2 = db.object('user1');
     this.btn3 = db.object('user1');
     this.btn4 = db.object('user1');
     this.btn5 = db.object('user1');
     this.btn6 = db.object('user1');
     this.btn7 = db.object('user1');
     this.btn8 = db.object('user1');
     this.btn9 = db.object('user1'); 
     this.user$ = this.db.object("user1");
     this.user$.subscribe(datax=> this.data = datax);
     
  }

  chSubmit(){
    
    this.btn0.update({ channel_0: this.c0});
    this.btn1.update({ channel_1: this.c1});
    this.btn2.update({ channel_2: this.c2});
    this.btn3.update({ channel_3: this.c3});
    this.btn4.update({ channel_4: this.c4});
    this.btn5.update({ channel_5: this.c5});
    this.btn6.update({ channel_6: this.c6});
    this.btn7.update({ channel_7: this.c7});
    this.btn8.update({ channel_8: this.c8});
    this.btn9.update({ channel_9: this.c9});
    this.navCtrl.push(SonyPage);
  }
  progup(){
    var temp= this;
    this.user$.update({progup:true});
    setTimeout(function(){temp.user$.update({progup:false})}, 1500);
  }
  progdown(){
    var temp= this;
    this.user$.update({progdown:true});
    setTimeout(function(){temp.user$.update({progdown:false})}, 1500);
  }
  setings(){
    var temp= this;
    this.user$.update({settings:this.state2});
     this.state2 = !this.state2;
  }
  up(){
    var temp= this;
    this.user$.update({up:true});
    setTimeout(function(){temp.user$.update({up:false})}, 1500);
  }
  down(){
    var temp= this;
    this.user$.update({down:true});
    setTimeout(function(){temp.user$.update({down:false})}, 1500);
  }
  left(){
    var temp= this;
    this.user$.update({left:true});
    setTimeout(function(){temp.user$.update({left:false})}, 1500);
  }
  right(){
    var temp= this;
    this.user$.update({right:true});
    setTimeout(function(){temp.user$.update({right:false})}, 1500);
  }

} 
