import { Component } from '@angular/core';

// import { DiscoveryPage } from '../discovery/discovery';
// import { HomePage } from '../home/home';
// import { MePage } from '../me/me';
// import { ContactsPage } from '../contacts/contacts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';//HomePage;
  tab2Root = 'ContactsPage';//ContactsPage;
  tab3Root = 'DiscoveryPage';//DiscoveryPage;
  tab4Root = 'MePage'//MePage;

  constructor() {

  }
}
