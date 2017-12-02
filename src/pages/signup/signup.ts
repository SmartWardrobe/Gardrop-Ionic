import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http'; 
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  data:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.data.username = '';
    this.data.fullname = '';
    this.data.email = '';
    this.data.password = '';

    this.http = http;
  }

  register() {
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append("Content-type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    console.log('Clicked Kayit ol!');
    let link = 'https://gardrop-api.herokuapp.com/v1/create_user';
    let myData = {
      "username": this.data.username,
      "fullname": this.data.fullname,
      "email":    this.data.email,
      "password": this.data.password
    };
    console.log(myData);
    this.http.post(link,myData,options)
      .subscribe(data => {
        this.data.response = data["_body"]; 
      }, error => {
        console.log("Oooops!");
      });
    }
  //ionViewDidLoad() {
    //console.log('ionViewDidLoad SignupPage');
  //}
}
