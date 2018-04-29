import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendTagPage } from './friend-tag';

@NgModule({
  declarations: [
    FriendTagPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendTagPage),
  ],
})
export class FriendTagPageModule {}
