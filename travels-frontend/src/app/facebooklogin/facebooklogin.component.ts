import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../countries.service';

declare var FB: any;

@Component({
  selector: 'app-facebooklogin',
  templateUrl: './facebooklogin.component.html',
  styleUrls: ['./facebooklogin.component.css']
})
export class FacebookloginComponent implements OnInit {

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
    FB.login((result: any) => {
      this.countriesService.getVisitedCountries(result.authResponse.accessToken);
    });
  }

  statusChangeCallback(resp) {
    if (resp.status === 'connected') {
      // connect here with your server for facebook login by passing access token given by facebook
    }
    else if (resp.status === 'not_authorized') {

    }
    else {

    }
  };

  ngOnInit() {
    FB.getLoginStatus(response => {
      this.statusChangeCallback(response);
    });
  }

}
