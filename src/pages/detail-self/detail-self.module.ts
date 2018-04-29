import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailSelfPage } from './detail-self';

@NgModule({
  declarations: [
    DetailSelfPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailSelfPage),
  ],
})
export class DetailSelfPageModule {}
