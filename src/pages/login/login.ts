import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})

export class LoginPage {

    segmentsArray = ['login', 'register'];
    welcome: string = 'login';
    registerForm: FormGroup;
    loginForm: FormGroup;
    nickname: any;
    phone: any;
    password: any;
    repeat: any;
    verify: any;
    lPhone: any;
    lPassword: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
        this.registerForm = formBuilder.group({

            phone: ['', [Validators.required, Validators.pattern("^[0-9]{11}$")]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            repeat : ['', [Validators.required, Validators.minLength(6)]],
            nickname : ['', [Validators.required]],
            verify : ['', [Validators.required, Validators.pattern("^[0-9]{4}$")]]
      
          })
          this.phone = this.registerForm.controls['phone'];
          this.password = this.registerForm.controls['password'];
          this.repeat = this.registerForm.controls['repeat'];
          this.nickname = this.registerForm.controls['nickname'];
          this.verify = this.registerForm.controls['verify'];
      
          this.loginForm = formBuilder.group({
      
            'lPhone': ['', [Validators.required, Validators.pattern("^[0-9]{11}$")]],
      
            'lPassword': ['', [Validators.required]]
      
          })
          this.lPhone = this.loginForm.controls['lPhone'];
          this.lPassword = this.loginForm.controls['lPassword'];
    }

    swipeEvent(event) {
        //向左滑
        if (event.direction == 2) {
            if (this.segmentsArray.indexOf(this.welcome) < 1) {
                this.swipeTo(this.segmentsArray.indexOf(this.welcome) + 1);
                // this.welcome = this.segmentsArray[this.segmentsArray.indexOf(this.welcome)+1];
            }
        }
        //向右滑
        if (event.direction == 4) {
            if (this.segmentsArray.indexOf(this.welcome) > 0) {
                this.swipeTo(this.segmentsArray.indexOf(this.welcome) - 1);
                // this.welcome = this.segmentsArray[this.segmentsArray.indexOf(this.welcome)-1];
            }
        }
    }

    //滑动至相应tab
    swipeTo(index) {
        if (index === 0 || index === 1)
            this.welcome = this.segmentsArray[index];
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }


}
