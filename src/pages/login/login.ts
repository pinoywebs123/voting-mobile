import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VoteProvider } from '../../providers/vote/vote';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username : string;
  password : string;
  logged : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public voteProv : VoteProvider,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  clickLogin(){

    this.voteProv.userLogin(this.username, this.password).subscribe(logged => {
      console.log(this.logged = logged);
      if(this.logged.status == true){
        localStorage.setItem("token", this.logged.token);
        this.navCtrl.setRoot(HomePage);
      }else{
        this.showError();
      }
    });

  }


  showError() {
    let alert = this.alertCtrl.create({
      title: 'Error!!',
      subTitle: 'Invalid Username/Password',
      buttons: ['OK']
    });
    alert.present();
  }



}
