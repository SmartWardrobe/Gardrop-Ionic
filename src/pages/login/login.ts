import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http'; 
import { ShowmyimagesPage } from '../showmyimages/showmyimages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data:any = {};
  userinfo:any = {};

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
      .map(res => res.json())
      .subscribe(data => {
        this.data.response = data["status"]; // 200 donduruyor
        this.userinfo=data["data"];
        console.log(data);
        if (this.data.response === 200){
          this.data.response="Giriş Başarılı"
        }
        //yeni sayfaya yonlendirecek...
        this.navCtrl.push(ShowmyimagesPage, {
          userinfo: this.userinfo
        });
      },error => {
          console.log("Erorrr!");
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
