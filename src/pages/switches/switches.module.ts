import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwitchesPage } from './switches';

@NgModule({
  declarations: [
    SwitchesPage,
  ],
  imports: [
    IonicPageModule.forChild(SwitchesPage),
  ],
})
export class SwitchesPageModule {}
