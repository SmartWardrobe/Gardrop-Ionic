import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { ListPage } from '../pages/list/list';
import { RequestsPage } from '../pages/requests/requests';
import { LoginPage } from  '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { UploadimagesPage } from '../pages/uploadimages/uploadimages';
import { ShowimagesPage } from '../pages/showimages/showimages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Welcome', component: WelcomePage },
      { title: 'List', component: ListPage },
      { title: 'Requests', component: RequestsPage},
      { title: 'Login', component: LoginPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Upload Dress', component: UploadimagesPage},
      { title: 'My Gardrop', component:ShowimagesPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
