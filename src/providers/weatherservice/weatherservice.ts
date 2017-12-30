import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http' ;
import 'rxjs/add/operator/map';


//flasktan havadurumu verileri bu servis ile cekilecek.

@Injectable()
export class WeatherserviceProvider {

  constructor(public http: Http) {
    console.log('Hello WeatherserviceProvider Provider');
  }
  getWeather(){
   return this.http.get("https://gardrop-api.herokuapp.com/v1/temperature/istanbul")
   .map(this.extractData)
  }
  private extractData(res: Response){
    return res.json();
  }

}
