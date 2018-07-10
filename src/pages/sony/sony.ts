import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SonySettingsPage } from '../sony-settings/sony-settings';
import { AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database'
import { Chlist } from "../../model/chlist";

@Component({
  selector: 'page-sony',
  templateUrl: 'sony.html',
})
export class SonyPage implements OnInit {

  userRemote= {} as Chlist;
  state= false;
  state2= false;
  tv;
  channel_name:string;
  channel_no;
  data;
  data2: any;
  user$: FirebaseObjectObservable<Chlist>;
  user2$: FirebaseObjectObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase) {
    this.user$ = this.database.object("user1");
    this.user$.subscribe(datax=> this.data = datax);
    
  }

  ngOnInit(){

    if(this.data.power==true){
      this.tv="Switch On"
    }
    if(this.data.power==false){
      this.tv="Switch Off"
    }
  }

  mdSettings(){
    this.navCtrl.setRoot(SonySettingsPage);
  }

  mdSwitch(i: number){
    this.user$.update({current_channel:i});
    this.data2=i;
    if(this.data.current_channel==1){
      this.channel_name= this.data.channel_1;
      this.channel_no= this.data.current_channel;
      console.log(this.channel_name);
    }
    if(this.data.current_channel==2){
      this.channel_name= this.data.channel_2;
      this.channel_no= this.data.current_channel;
      console.log(this.channel_name);
    }
    if(this.data.current_channel==3){
      this.channel_name= this.data.channel_3;
      this.channel_no= this.data.current_channel;
      console.log(this.channel_name);
    }
    if(this.data.current_channel==4){
      this.channel_name= this.data.channel_4;
      this.channel_no= this.data.current_channel;
      console.log(this.channel_name);
    }
    if(this.data.current_channel==5){
      this.channel_name= this.data.channel_5;
      this.channel_no= this.data.current_channel;
      console.log(this.channel_name);
    }
    if(this.data.current_channel==6){
      this.channel_name= this.data.channel_6;
      this.channel_no= this.data.current_channel;
      console.log(this.channel_name);
    }
    if(this.data.current_channel==7){
      this.channel_name= this.data.channel_7;
      this.channel_no= this.data.current_channel;
      console.log(this.channel_name);
    }
    if(this.data.current_channel==8){
      this.channel_name= this.data.channel_8;
      this.channel_no= this.data.current_channel;
      console.log(this.channel_name);
    }
    if(this.data.current_channel==9){
      this.channel_name= this.data.channel_9;
      this.channel_no= this.data.current_channel;
      console.log(this.channel_name);
    }
    if(this.data.current_channel==0){
      this.channel_name= this.data.channel_0;
      this.channel_no= this.data.current_channel;
      console.log(this.channel_name);
    }
  }
  power(){
    if(this.data.power==true){
      this.tv="Switch On"
    }
    if(this.data.power==false){
      this.tv="Switch Off"
    }
    var temp= this;
    this.user$.update({power:this.state});
     this.state=!this.state;
  }

  mute(){
    var temp= this;
    this.user$.update({mute:this.state2});
     this.state2=!this.state2;
  }
  volup(){
    var temp= this;
    this.user$.update({volup:true});
    setTimeout(function(){temp.user$.update({volup:false})}, 1500);
  }
  progup(){
    var temp= this;
    this.user$.update({progup:true});
    setTimeout(function(){temp.user$.update({progup:false})}, 1500);
  }
  voldown(){
    var temp= this;
    this.user$.update({voldown:true});
    setTimeout(function(){temp.user$.update({voldown:false})}, 1500);
  }
  progdown(){
    var temp= this;
    this.user$.update({progdown:true});
    setTimeout(function(){temp.user$.update({progdown:false})}, 1500);
  }
}
