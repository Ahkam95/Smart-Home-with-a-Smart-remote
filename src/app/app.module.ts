import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SelectionPage } from '../pages/selection/selection';
import { SonyPage } from '../pages/sony/sony';
import { SamsungPage } from '../pages/samsung/samsung';
import { HitachiPage } from '../pages/hitachi/hitachi';
import { SonySettingsPage } from '../pages/sony-settings/sony-settings';
import { SwitchesPage } from '../pages/switches/switches';

import { FIREBASE_CREDENTIALS } from "./firebase.credentials";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectionPage,
    SonyPage,
    SamsungPage,
    HitachiPage,
    SonySettingsPage,
    SwitchesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SelectionPage,
    SonyPage,
    SamsungPage,
    HitachiPage,
    SonySettingsPage,
    SwitchesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
