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
  my_fid: number = 0;


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
    FB.getLoginStatus(resp => {
      this.statusChangeCallback(resp);
    });
  }

  statusChangeCallback(resp) {
    if (resp.status === 'connected') {
      if (this.logged) {
        this.logged = false;
        this.my_fid = 0;
        this.btn_text =  'Sign in with Facebook';
        this.access_token = null;
        this.countriesService.getVisitedCountries(this.access_token);
      }
      else {
        this.logged = true;
        this.my_fid = resp.authResponse.userID;
        this.btn_text =  'Sign out with Facebook';
        this.access_token = resp.authResponse.accessToken;
        this.countriesService.getVisitedCountries(this.access_token);
      }
    }
    else {
      FB.login((resp) => {
        if (resp.authResponse) {
          this.logged = true;
          this.my_fid = resp.authResponse.userID;
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
