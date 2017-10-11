import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VoteProvider } from '../../providers/vote/vote';


@IonicPage()
@Component({
  selector: 'page-partyinfo',
  templateUrl: 'partyinfo.html',
})
export class PartyinfoPage {
  data: any;
  pet: any;
  info: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public voteProv : VoteProvider) {
    this.data = this.navParams.data;
    this.pet = "candidate";
    
  }

  ionViewDidEnter() {
    this.voteProv.getPartyinfo(this.data).subscribe(info => {
      console.log(this.info = info);
    });

    

  }

  

}
