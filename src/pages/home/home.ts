import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chat } from '../../model/chat';
import { Message } from "../../model/message";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chats : Chat[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.chats = this.getChats();
  }

  getChats() {
    let chat = new Chat();
    chat.avatar = "assets/imgs/test.png";
    chat.chatId = "123456789";
    chat.title = "title";
    let msg = new Message();
    msg.avatar = "assets/imgs/test.png";
    msg.msg = "test msg";
    msg.nickname = "testnick";
    msg.phone = "12345678901";
    msg.read = false;
    msg.time = "20180505 12:00:00";
    chat.msg = [msg,msg,msg];
    msg.msg = "newest";
    chat.msg.push(msg);
    let chats = [chat,chat,chat];
    return chats;
  }

  getInChat(chatId : any) {
    alert(chatId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
