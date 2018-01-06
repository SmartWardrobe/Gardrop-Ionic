import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http'; 



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data:any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  this.data.email = '';
  this.data.password = '';

  this.http = http;
  }

  login(){
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append("Content-type", 'application/json');

    let options = new RequestOptions({ headers: headers });

    let link = 'https://gardrop-api.herokuapp.com/v1/login';
    let myData = {
      "email" : this.data.email,
      "password" : this.data.password
    };
    console.log(myData);
    this.http.post(link,myData,options)
      .subscribe(data => {
        this.data.response = data["status"]; // 200 donduruyor
        if (this.data.response === 200){
          this.data.response="Giriş Başarılı"
        }
        //yeni sayfaya yonlendirecek...
      },error => {
          console.log("Erorrr!");
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
