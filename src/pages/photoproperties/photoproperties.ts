import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToastController} from "ionic-angular";
import { Http } from '@angular/http'; 
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
  selector: 'page-photoproperties',
  templateUrl: 'photoproperties.html',
})
export class PhotopropertiesPage {
  public photocolor:string;
  public filename: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private readonly http: Http,
              private readonly toastCtrl: ToastController,
              public global: GlobalProvider) {
                this.filename = navParams.get('filename');
  }
  updatePhotoProperties() {
    let myPhotoData = {
      "filename" : this.filename,
      "color" : this.photocolor
    };
    this.http.put("https://gardrop-api.herokuapp.com/v1/pic", myPhotoData)
      .map(res => res.json())
      .subscribe(data => {
        this.filename = data['filename'];
        this.showToast("updated.");
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
  

}
