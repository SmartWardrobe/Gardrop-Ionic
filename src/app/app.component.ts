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
  weatherType:any;
  weatherDegree:any;
  iconType:any;
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
    
    this.loadWeather();
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
  loadWeather(){
    this.weatherService.getWeather()
    .subscribe(data => {
      this.weatherDegree = data.content.main.temp_max - 273.15;
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
}
