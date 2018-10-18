# SmartWardrobe Mobile App - Ionic

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

# Ionic Providers
   Providers, uygulamanız için servis oluşturmanıza izin verir. Providers ile oluşturduğumuz servis ile bir sunucudan veri     getirme, veri işlemleri yapma, verileri paylaşma, karmaşık matematiksel işlemler seti verme gibi işlemler yapılabilir. Uygulamadaki bütünsel kodları servis kullanarak parçalayarak proje yapısını hafifletebiliriz. Bu şekilde kod tabanı daha sürdürülebilir kılınır ve uygulamanın birden çok farklı yerinde (veya tamamen farklı bir uygulamada) aynı provider ı yeniden kullanmamızı sağlar. 

## Photo-Service Provider'ının Eklenmesi (showimages)  (Ionic 3)
   Provider oluşturmak için Ionic CLI 'de 
   $ ionic g provider photoservices
   komutu ile provider oluşturulur. 'app.module.ts' te otamatik olarak import edilir.
   Provider ı kullanacağımız sayfa (showimages) nın ts dosyasına (showimages) 
   import { PhotoServiceProvider } from '../../providers/photo-service/photo-service';
   şeklinde import edilir.
   
   @Component({
   selector: 'page-showimages',
   templateUrl: 'showimages.html',
   providers: [PhotoServiceProvider] //provider eklenmesi
   })
   
   Constructor ' a da PhotoServiseProvider eklenerek oluşturduğumuz provider ı kullanabiliriz.
   constructor(public navCtrl: NavController, public navParams: NavParams, public photoService:PhotoServiceProvider) {
   this.loadPicture();
  }
   


# Ionic Projesi Ornegi

https://github.com/matiastucci/ionic-ocr-example

# Heroku
  Heroku da canli olarak uygulamayi gorebiliyoruz.
  `Procfile` ve `server.js` dosyalari heroku icin kullaniliyoruz.
  
  Baska repo olusturuldugun 2 dosyanin tasinmasi gerekli ve heroku da otomatik deploy ayarlanmali.
