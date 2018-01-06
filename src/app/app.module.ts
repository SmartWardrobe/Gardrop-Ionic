import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import {IonicImageViewerModule } from 'ionic-img-viewer';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PhotouploadPage } from '../pages/photoupload/photoupload';
import { ShowimagesPage } from '../pages/showimages/showimages';
import { WeatherPage } from '../pages/weather/weather';

import { FileTransfer } from '@ionic-native/file-transfer';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { PhotoServiceProvider } from '../providers/photo-service/photo-service';
import { WeatherserviceProvider } from '../providers/weatherservice/weatherservice';



@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ShowimagesPage,
    PhotouploadPage,
    WeatherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ShowimagesPage,
    PhotouploadPage,
    WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    FilePath,
    Transfer,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhotoServiceProvider,
    WeatherserviceProvider
  ]
})
export class AppModule {}
