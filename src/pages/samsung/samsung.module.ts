import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SamsungPage } from './samsung';

@NgModule({
  declarations: [
    SamsungPage,
  ],
  imports: [
    IonicPageModule.forChild(SamsungPage),
  ],
})
export class SamsungPageModule {}
