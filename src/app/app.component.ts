import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { ShowmyimagesPage  } from '../pages/showmyimages/showmyimages';
import { PhotouploadPage } from '../pages/photoupload/photoupload';
import { CombinePage } from '../pages/combine/combine';
import { WeatherserviceProvider } from '../providers/weatherservice/weatherservice';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public weatherService: WeatherserviceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Anasayfa', component: WelcomePage },     
      { title: 'Gardrobum', component:ShowmyimagesPage}, 
      { title: 'Kıyafet Yükle', component:PhotouploadPage},
      { title: 'Kombin', component:CombinePage}
    ];
    
    console.log("lolll");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
