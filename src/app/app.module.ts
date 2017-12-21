import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListPage } from '../pages/list/list';
import { RequestsPage } from '../pages/requests/requests';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { UploadimagesPage } from '../pages/uploadimages/uploadimages';
import { ShowimagesPage } from '../pages/showimages/showimages';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { PhotoServiceProvider } from '../providers/photo-service/photo-service';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    ListPage,
    RequestsPage,
    LoginPage,
    SignupPage,
    UploadimagesPage,
    ShowimagesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
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
    ShowimagesPage
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
    PhotoServiceProvider
  ]
})
export class AppModule {}
