import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { PhotouploadPage } from '../photoupload/photoupload';
import { WeatherserviceProvider } from '../../providers/weatherservice/weatherservice';
import { CombinePage } from '../combine/combine';

@IonicPage()
@Component({
  selector: 'page-showmyimages',
  templateUrl: 'showmyimages.html',
})
export class ShowmyimagesPage {
  galleryType = 'multi';
  pics: any;
  weatherType:any;
  weatherDegree:any;
  iconType:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public global: GlobalProvider,
              public weatherService: WeatherserviceProvider) {
    console.log(this.global.user_info);
    this.pics = this.global.user_info.pics;
    for (let pic of this.pics) {
      console.log(`Pic: Filename:${pic.filename} Color:${pic.color} Type:${pic.type}`)
    }
    this.loadWeather();
  }

  openPhotouploadPage(){
    this.navCtrl.push(PhotouploadPage);
  }
  openCombinePage(){
    this.navCtrl.push(CombinePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowmyimagesPage');
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
