import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotopropertiesPage } from './photoproperties';

@NgModule({
  declarations: [
    PhotopropertiesPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotopropertiesPage),
  ],
})
export class PhotopropertiesPageModule {}
