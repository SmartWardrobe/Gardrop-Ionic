import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WeatherserviceProvider } from '../../providers/weatherservice/weatherservice';

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
    temp:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public weatherService: WeatherserviceProvider
    ) {
      this.getWeather();
  }
  getWeather(){
    this.weatherService.getWeather()
    //.subscribe(data => console.log(data.content.main.temp_min));
    .subscribe(data => this.temp = data.content.main.temp_max);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeatherPage');
  }

}
