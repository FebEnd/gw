import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomentsListPage } from './moments-list';

@NgModule({
  declarations: [
    MomentsListPage,
  ],
  imports: [
    IonicPageModule.forChild(MomentsListPage),
  ],
})
export class MomentsListPageModule {}
