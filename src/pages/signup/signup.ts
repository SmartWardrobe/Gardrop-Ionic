import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoginPage } from  '../login/login';
import { ToastController } from "ionic-angular";
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
  items : any;
  sg_result:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,private readonly toastCtrl: ToastController,) {
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
    let link = 'https://gardrop-api.herokuapp.com/v1/users';
    let myData = {
      "username": this.data.username,
      "fullname": this.data.fullname,
      "email":    this.data.email,
      "password": this.data.password
    };
    console.log(myData);
    this.http.post(link,myData,options)
      .map(res => res.json())
      .subscribe(data => {
        this.sg_result = data["content"]; //json donuyor
        if(data["status"]==="okey"){
          this.showToast("Kayıt olusturuldu");
          this.navCtrl.push(LoginPage);
        }
      }, error => {
        this.showToast("Bu kullanıcı adı kullanılmaktadır.");
        console.log("Oooops!");
      });
      return this.items
    }
    private showToast(content: string) {
      const toast = this.toastCtrl.create({
        message: content,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }

}
