import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from '../countries.service';

declare var FB: any;

@Component({
  selector: 'app-facebooklogin',
  templateUrl: './facebooklogin.component.html',
  styleUrls: ['./facebooklogin.component.scss']
})
export class FacebookloginComponent implements OnInit {
  access_token: string = null;
  btn_text: string = 'Sign in with Facebook';
  logged: boolean = false;
  my_fid: number = 0;
  fid: number = 0;


  constructor(private countriesService: CountriesService, private route: ActivatedRoute) {
    FB.init({
      appId      : '674727196042358',
      cookie     : false,  // enable cookies to allow the server to access
                           // the session
      xfbml      : true,   // parse social plugins on this page
      version    : 'v2.8', // use graph api version 2.5
      status     : true
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fid = +params['fid'];
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
        this.countriesService.getVisitedCountries(this.access_token, this.fid);
      }
      else {
        this.logged = true;
        this.my_fid = resp.authResponse.userID;
        this.btn_text =  'Sign out with Facebook';
        this.access_token = resp.authResponse.accessToken;
        this.countriesService.getVisitedCountries(this.access_token, this.fid);
      }
    }
    else {
      FB.login((resp) => {
        if (resp.authResponse) {
          this.logged = true;
          this.my_fid = resp.authResponse.userID;
          this.btn_text =  'Sign out with Facebook';
          this.access_token = resp.authResponse.accessToken;
          this.countriesService.getVisitedCountries(this.access_token, this.fid);
        }
        else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
  }
}
