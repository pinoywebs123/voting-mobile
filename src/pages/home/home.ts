import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VoteProvider } from '../../providers/vote/vote';
import { PartyinfoPage } from '../partyinfo/partyinfo';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: any;
  party: any;
  candidate: any;
  president: string;
  vice : string;
  secretary: string;
  treasurer: string;
  auditor: string;
  pio: string;
  bus: string;
  peace= [];
  rep: any;
  voted: any;
  constructor(public navCtrl: NavController, public voteProv : VoteProvider,public alertCtrl: AlertController) {
   this.pet= "partylist";

  }
  
  ionViewDidEnter(){
   this.voteProv.getParty().subscribe(party => {
     console.log(this.party = party);
   });

   this.voteProv.getCandidate().subscribe(candidate => {
    console.log(this.candidate = candidate); 
    
   });
    
  }

  clickParty(id){
    this.navCtrl.push(PartyinfoPage, id);
  }

  clickVote(){
    // if(this.president == null || this.vice == null || this.secretary == null || this.treasurer == null || this.auditor == null || this.pio == null || this.bus == null || this.rep == null || this.peace == null){
    //   this.showField();
    // }
    if(this.peace.length > 2){
      return this.showPeace();
    }
    this.voteProv.sendVote(this.president,this.vice,this.secretary,this.treasurer,this.auditor,this.pio,this.bus, this.rep, this.peace[0], this.peace[1]).subscribe(voted=> {
      console.log(this.voted = voted);
      if(this.voted.status == "ok"){
        return this.showFinish();
      }else if(this.voted.status == "no"){
        this.showAlert();
        localStorage.setItem("token", "");
        this.navCtrl.setRoot(LoginPage);
      }
     
      // if(this.voted.status == true){
      //   this.showAlert();

      //   localStorage.setItem("token", "");
      //   this.navCtrl.setRoot(LoginPage);
      //  }
    });

    
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!!',
      subTitle: 'Thank you for voting.',
      buttons: ['OK']
    });
    alert.present();
  }

  showPeace() {
    let alert = this.alertCtrl.create({
      title: 'Warning!!',
      subTitle: 'You can only vote 2 Peace Officers',
      buttons: ['OK']
    });
    alert.present();
  }

  showFinish() {
    let alert = this.alertCtrl.create({
      title: 'Oppss!!',
      subTitle: 'You have already voted. You can vote again next election. Thank You.',
      buttons: ['OK']
    });
    alert.present();
  }

  showField() {
    let alert = this.alertCtrl.create({
      title: 'Error!!',
      subTitle: 'You need to choose each candidate in every position. Thank You.',
      buttons: ['OK']
    });
    alert.present();
  }

  onSelect(){
    if(this.peace.length > 2){
      this.showPeace();
    }
  }

  logout(){
    localStorage.setItem("token", "");
    this.navCtrl.setRoot(LoginPage);
  }

}
