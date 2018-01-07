import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CombinePage } from './combine';

@NgModule({
  declarations: [
    CombinePage,
  ],
  imports: [
    IonicPageModule.forChild(CombinePage),
  ],
})
export class CombinePageModule {}
