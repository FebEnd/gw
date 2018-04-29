import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendVerifyPage } from './friend-verify';

@NgModule({
  declarations: [
    FriendVerifyPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendVerifyPage),
  ],
})
export class FriendVerifyPageModule {}
