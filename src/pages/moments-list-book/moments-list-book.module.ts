import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomentsListBookPage } from './moments-list-book';

@NgModule({
  declarations: [
    MomentsListBookPage,
  ],
  imports: [
    IonicPageModule.forChild(MomentsListBookPage),
  ],
})
export class MomentsListBookPageModule {}
