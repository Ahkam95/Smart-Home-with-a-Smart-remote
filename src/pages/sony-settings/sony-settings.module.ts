import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SonySettingsPage } from './sony-settings';

@NgModule({
  declarations: [
    SonySettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SonySettingsPage),
  ],
})
export class SonySettingsPageModule {}
