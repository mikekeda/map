import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../countries.service';

declare var FB: any;

@Component({
  selector: 'app-facebooklogin',
  templateUrl: './facebooklogin.component.html',
  styleUrls: ['./facebooklogin.component.scss']
})
export class FacebookloginComponent {
  access_token: string = null;
  btn_text: string = 'Sign in with Facebook';
  logged: boolean = false;


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
      if (this.logged) {
        this.logged = false;
        this.btn_text =  'Sign in with Facebook';
        this.access_token = null;
        this.countriesService.getVisitedCountries();
      }
      else {
        this.logged = true;
        this.btn_text =  'Sign out with Facebook';
        this.access_token = resp.authResponse.accessToken;
        this.countriesService.getVisitedCountries(this.access_token);
      }
    }
    else {
      FB.login((resp) => {
        if (resp.authResponse) {
          this.logged = true;
          this.btn_text =  'Sign out with Facebook';
          this.access_token = resp.authResponse.accessToken;
          this.countriesService.getVisitedCountries(this.access_token);
        }
        else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
  }
}
