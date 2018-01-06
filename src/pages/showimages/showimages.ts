import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoServiceProvider } from '../../providers/photo-service/photo-service';


@IonicPage()
@Component({
  selector: 'page-showimages',
  templateUrl: 'showimages.html',
  providers: [PhotoServiceProvider]
})
export class ShowimagesPage {
  galleryType = 'multi';
  public dress:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public photoService:PhotoServiceProvider) {
   this.loadPicture();
  }
  
  loadPicture(){
    this.photoService.load()
      .then(data1 => {
        this.dress = data1;
      });
  }


}


