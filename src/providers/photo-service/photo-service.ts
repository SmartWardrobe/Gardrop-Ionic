import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';

@Injectable()
export class PhotoServiceProvider {
  data1: any;
  constructor(public http: Http) {
    console.log('Hello PhotoServiceProvider Provider');
  }
  load() {
    if (this.data1) {
      return Promise.resolve(this.data1);
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=10')
        .map(res => res.json())
        .subscribe(data => {
          this.data1 = data.results;
          resolve(this.data1);
        });
    });
} 

}
