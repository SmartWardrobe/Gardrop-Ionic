import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { PhotouploadPage } from '../photoupload/photoupload';

@IonicPage()
@Component({
  selector: 'page-showmyimages',
  templateUrl: 'showmyimages.html',
})
export class ShowmyimagesPage {
  galleryType = 'multi';
  pics: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public global: GlobalProvider) {
    console.log(this.global.user_info);
    this.pics = this.global.user_info.pics;
    for (let pic of this.pics) {
      console.log(`Pic: Filename:${pic.filename} Color:${pic.color} Type:${pic.type}`)
    }
  }

  openPhotouploadPage(){
    this.navCtrl.push(PhotouploadPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowmyimagesPage');
  }

}
