import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowmyimagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showmyimages',
  templateUrl: 'showmyimages.html',
})
export class ShowmyimagesPage {
  galleryType = 'multi';
  userinfo: any;
  pics: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userinfo = navParams.get('userinfo');
    console.log(this.userinfo);
    this.pics = this.userinfo.pics;
    console.log(`Pics: ${this.pics}`)
    for (let pic of this.pics) {
      console.log(`Pic: ${pic}`)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowmyimagesPage');
  }

}
