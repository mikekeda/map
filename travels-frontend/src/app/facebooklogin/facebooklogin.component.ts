import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../countries.service';

declare var FB: any;

@Component({
  selector: 'app-facebooklogin',
  templateUrl: './facebooklogin.component.html',
  styleUrls: ['./facebooklogin.component.css']
})
export class FacebookloginComponent {
  access_token: string;
  logged: boolean;


  constructor(private countriesService: CountriesService) {
    FB.init({
      appId      : '674727196042358',
      cookie     : false,  // enable cookies to allow the server to access
                           // the session
      xfbml      : true,   // parse social plugins on this page
      version    : 'v2.8', // use graph api version 2.5
      status     : true
    });
  }

  onFacebookLoginClick() {
    FB.getLoginStatus(response => {
      this.statusChangeCallback(response);
    });
  }

  statusChangeCallback(resp) {
    if (resp.status === 'connected') {
      this.access_token = resp.authResponse.accessToken;
      this.logged = true;
      this.countriesService.getVisitedCountries(this.access_token);
    }
    else {
      FB.login((result: any) => {
        this.logged = false;
        this.access_token = null;
        this.countriesService.getVisitedCountries();
      });
    }
  }
}
