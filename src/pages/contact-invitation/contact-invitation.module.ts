import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactInvitationPage } from './contact-invitation';

@NgModule({
  declarations: [
    ContactInvitationPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactInvitationPage),
  ],
})
export class ContactInvitationPageModule {}
