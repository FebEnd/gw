import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomentsSearchPage } from './moments-search';

@NgModule({
  declarations: [
    MomentsSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(MomentsSearchPage),
  ],
})
export class MomentsSearchPageModule {}
