import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyinfoPage } from './partyinfo';

@NgModule({
  declarations: [
    PartyinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PartyinfoPage),
  ],
})
export class PartyinfoPageModule {}
