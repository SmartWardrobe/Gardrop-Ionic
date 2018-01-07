import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ToastController } from "ionic-angular";
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
  result: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public global: GlobalProvider,
              public weatherService: WeatherserviceProvider,
              public http: Http,
              private readonly toastCtrl: ToastController) {
    this.http = http;
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

  deletePhoto(pic: any) {
    let link = `https://gardrop-api.herokuapp.com/v1/pic/${pic.filename}`;
    console.log(link);
    this.http.delete(link)
      .map(res => res.json())
      .subscribe(data => {
        this.result = data["content"]; //json donuyor
        if(data["status"]==="okey"){
          this.showToast(this.result);
          this.remove(this.global.user_info.pics, pic)
        }
      }, error => {
        this.showToast("Silinemiyor.");
        console.log("Oooops!");
      });
  }
  private showToast(content: string) {
    const toast = this.toastCtrl.create({
      message: content,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  private remove(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
  }
}
