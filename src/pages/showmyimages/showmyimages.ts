import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";



@IonicPage()
@Component({
  selector: 'page-showmyimages',
  templateUrl: 'showmyimages.html',
})
export class ShowmyimagesPage {
  galleryType = 'multi';
  userinfo: any;
  pics: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public global: GlobalProvider) {
    //this.userinfo = navParams.get('userinfo');
    this.global.global_user_info = navParams.get('userinfo');
    //console.log(this.userinfo);
    console.log(this.global.global_user_info);
    //this.pics = this.userinfo.pics;
    this.pics = this.global.global_user_info;
    console.log(`Pics: ${this.pics}`)
    for (let pic of this.pics) {
      console.log(`Pic: ${pic}`)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowmyimagesPage');
  }

}
