import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {

  }
  openSignupPage(){
    this.navCtrl.push(SignupPage)
  }
  openLoginPage(){
    this.navCtrl.push(LoginPage)
  }
}
