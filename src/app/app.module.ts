import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoursePage } from '../pages/course/course';
import { PageFourPage } from '../pages/page-four/page-four';
import { PageThreePage } from '../pages/page-three/page-three';
import { PageTwoPage } from '../pages/page-two/page-two';
import { PageOnePage } from '../pages/page-one/page-one';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoursePage,
    PageFourPage,
    PageThreePage,
    PageTwoPage,
    PageOnePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,



    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoursePage,
    PageFourPage,
    PageTwoPage,
    PageThreePage,
    PageOnePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
