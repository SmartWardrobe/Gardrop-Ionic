import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListPage } from '../pages/list/list';
import { RequestsPage } from '../pages/requests/requests';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { UploadimagesPage } from '../pages/uploadimages/uploadimages';
import { Photouploadv2Page } from '../pages/photouploadv2/photouploadv2';
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
    RequestsPage,
    LoginPage,
    SignupPage,
    UploadimagesPage,
    ShowimagesPage,
    Photouploadv2Page,
    WeatherPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    ListPage,
    RequestsPage,
    LoginPage,
    SignupPage,
    UploadimagesPage,
    ShowimagesPage,
    Photouploadv2Page,
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
