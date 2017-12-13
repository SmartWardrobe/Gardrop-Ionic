import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject,FileUploadOptions } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';

import { Camera, CameraOptions } from '@ionic-native/camera';


declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-uploadimages',
  templateUrl: 'uploadimages.html',
})
export class UploadimagesPage {
  public base64Image: string;
  lastImage: string = null;
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController) {
  }
  takePicture(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imagePath) => {
        // imageData is a base64 encoded string
        //this.base64Image = "data:image/jpeg;base64," + imageData;
        //this.lastImage=imageData;
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1); //0 bastan basla; lastIndexOf('/') sonda bulunan "/" karakterinin indexi
        this.lastImage = 'data:image/jpeg;base64,' + imagePath;
        this.copyFileToLocalDir(correctPath, currentName, this.lastImage);
       this.presentToast("okayyy get picture");
       this.presentToast("curname"+currentName);
       //this.presentToast(correctPath);
    }, (err) => {
        console.log(err);
        
        this.presentToast("Error get picture")
    });
    
  }
  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".jpg";
    this.presentToast("create file name"+newFileName);
    return newFileName;

  }
// Copy the image to a local folder
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.presentToast('1 Before Error while storing file.');
  //this.presentToast('name path ' + namePath);
  //this.presentToast('current name  ' + currentName);
  //this.presentToast('cordova file  ' + cordova.file.dataDirectory);
  //this.presentToast('new file name  ' + newFileName);
  
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.presentToast('2 Before Error while storing file.');
    //this.lastImage = newFileName;
    this.presentToast(newFileName);
  }, error => {
    this.presentToast('Error while storing file.');
  });
}  
   
private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 7000,
    position: 'top'
  });
  toast.present();
}
  // Always get the accurate path to your apps folder
public pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    return cordova.file.dataDirectory + img;
  }
}
  uploadFile(){
    let url = 'https://gardrop-api.herokuapp.com/uploader';
    let loader = this.loadingCtrl.create({
      content: "Uploading"
    });
    loader.present();
    const fileTransfer: TransferObject = this.transfer.create();
    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);
    // File name only
    var filename = this.lastImage;

    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
    let toasterr = this.toastCtrl.create({
      message: 'Errorrrr',
      duration: 3000,
      position: 'top'
    });
    let toastok = this.toastCtrl.create({
      message: 'Okkkkk',
      duration: 3000,
      position: 'top'
    });
    
    fileTransfer.upload(targetPath,encodeURI(url),options).then((data)=>{
      console.log(data+" Uploaded Successfully");
      //loader.dismiss();
      toastok.present();
    },(err)=>{
      //console.log(err);
      //loader.dismiss();
      toasterr.present();
    });

  }

  
}