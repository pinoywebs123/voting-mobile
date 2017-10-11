import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class VoteProvider {

  login: any;
  party: any;
  candidate : any;
  caninfo: any;
  constructor(public http: Http) {
    // this.login = "http://localhost:8100/api/v1/user";
    // this.party = "http://localhost:8100/api/v1/party";
    // this.candidate = "http://localhost:8100/api/v1/candidate?token=";
    // this.caninfo = "http://localhost:8100/api/v1/partylist";


    this.login = "https://e-votings.000webhostapp.com/api/v1/user";
    this.party = "https://e-votings.000webhostapp.com/api/v1/party";
    this.candidate = "https://e-votings.000webhostapp.com/api/v1/candidate?token=";
    this.caninfo = "https://e-votings.000webhostapp.com/api/v1/partylist";

  }

  userLogin(username, password){
    let headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
    
        let body = {
          "username": username,
          "password": password
        };
    
         return this.http.post(this.login, JSON.stringify(body),{headers: headers} )
         .map(res => res.json());
  }

  getParty(){
    return this.http.get(this.party).map(res => res.json());
  }

 getCandidate(){
  return this.http.get(this.candidate+localStorage.getItem("token")).map(res => res.json());
 }

getPartyinfo(id){
  return this.http.get(this.caninfo+"/"+id).map(res => res.json());
}

sendVote(president,vice,secretary,treasurer,auditor,pio,bus,rep,peace,peace2){
  let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
  
      let body = {
        "president": president,
        "vice": vice,
        "secretary": secretary,
        "treasurer": treasurer,
        "auditor": auditor,
        "pio": pio,
        "bus": bus,
        'rep': rep,
        'peace': peace,
        'peace2': peace2
      };
  
       return this.http.post(this.caninfo+"?token="+localStorage.getItem("token"), JSON.stringify(body),{headers: headers} )
       .map(res => res.json());
}



}
