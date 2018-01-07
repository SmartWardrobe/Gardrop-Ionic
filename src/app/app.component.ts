import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from  '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ShowmyimagesPage  } from '../pages/showmyimages/showmyimages';
import { PhotouploadPage } from '../pages/photoupload/photoupload';
import { PhotopropertiesPage } from '../pages/photoproperties/photoproperties';
import { WeatherPage } from '../pages/weather/weather';

import { WeatherserviceProvider } from '../providers/weatherservice/weatherservice';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  weatherType:any;
  iconType:any;
  temp:any; //havadurumu
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
      { title: 'Login', component: LoginPage },
      { title: 'Signup', component: SignupPage },
      { title: 'Show Weather', component:WeatherPage},
      { title: 'Kıyafet Yükle', component:PhotouploadPage},
      { title: 'Kıyafet Özellikleri', component:PhotopropertiesPage }
    ];
    this.getWeather();
    this.getWeatherType();
    
    console.log("lolll");
  }
  getWeather(){
    this.weatherService.getWeather()
    .subscribe(data => this.temp = data.content.main.temp_max - 273.15);
  }
  getWeatherType(){
    this.weatherService.getWeather()
    .subscribe(data => {
      this.weatherType = data.content.weather[0].main;
      this.showWeatherType();
    });
  }
  showWeatherType(){
    if(this.weatherType==='Rain'){
      console.log("weather is rain")
      this.iconType="ios-rainy-outline";
    }else if(this.weatherType==='Sunny' || this.weatherType==='Clear'){
      this.iconType="ios-sunny-outline";
    }else if(this.weatherType==='Snow'){
      this.iconType="ios-snow-outline";
    }else if(this.weatherType==='Clouds'){
      this.iconType="ios-cloud-outline";
    }else if(this.weatherType === 'Mist'){
      this.iconType="ios-barcode-outline";
    }
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
