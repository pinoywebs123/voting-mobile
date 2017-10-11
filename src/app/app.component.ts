import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    if(localStorage.getItem("token") == null || localStorage.getItem("token") == ""){
      this.rootPage = LoginPage;
    }else{
      this.rootPage = HomePage;
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
    
  }

  // getPush(){
  //   const options: PushOptions = {
  //     android: {
  //         senderID: '866138985487'
  //     }
      
  //  };
   
  //  const pushObject: PushObject = this.push.init(options);

  
      
  //  pushObject.on('notification').subscribe((notification: any) =>{
  //    if(notification.additionalData.foreground){
  //     let alert = this.alertCtrl.create({
  //       title: 'Announcement!',
  //       message: notification.message,
  //       buttons: ['OK']
  //     });
  //     alert.present();
  //    }
  //  });
   
  //  pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
   
  //  pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  // }



}

