import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailFriendPage } from './detail-friend';

@NgModule({
  declarations: [
    DetailFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailFriendPage),
  ],
})
export class DetailFriendPageModule {}
