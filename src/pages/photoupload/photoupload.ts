import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {LoadingController, Loading, ToastController} from "ionic-angular";
import { NavController } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import {File, FileEntry} from "@ionic-native/file";
import {finalize} from "rxjs/operators/finalize";
import { Http } from '@angular/http'; 
import { PhotopropertiesPage } from '../photoproperties/photoproperties';

@IonicPage()
@Component({
  selector: 'page-photoupload',
  templateUrl: 'photoupload.html',
})
export class PhotouploadPage {
  public myPhoto: any;
  public myPhotoURL: any;
  public error: string;
  private loading: Loading;
  public result: any;
  public filename: string;
  public color: string;

  constructor(private readonly http: Http,
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController,
    private readonly camera: Camera,
    private readonly file: File,
    public navCtrl: NavController) {
}

  takePhoto() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto(imageData);
    }, error => {
      this.error = JSON.stringify(error);
    });
  }

  selectPhoto(): void {
    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 100,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto(imageData);
    }, error => {
      this.error = JSON.stringify(error);
    });
  }

  private uploadPhoto(imageFileUri: any): void {
    this.error = null;
    this.loading = this.loadingCtrl.create({
      content: 'Uploading...'
    });

    this.loading.present();

    this.file.resolveLocalFilesystemUrl(imageFileUri)
      .then(entry => (<FileEntry>entry).file(file => this.readFile(file)))
      .catch(err => console.log(err));
  }

  private readFile(file: any) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {type: file.type});
      formData.append('file', imgBlob, file.name);
      this.postData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  private postData(formData: FormData) {
    this.http.post("https://gardrop-api.herokuapp.com/v2/upload/pic", formData)
      .pipe(
        finalize(() => this.loading.dismiss())
      )
      .map(res => res.json())
      .subscribe(data => {
        this.filename = data['filename'];
        this.result = JSON.stringify(data);
        //this.showToast(this.result);
        this.navCtrl.push(PhotopropertiesPage, {
          filename: this.filename
        });
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
