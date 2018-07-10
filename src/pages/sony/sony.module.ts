import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SonyPage } from './sony';

@NgModule({
  declarations: [
    SonyPage,
  ],
  imports: [
    IonicPageModule.forChild(SonyPage),
  ],
})
export class SonyPageModule {}
