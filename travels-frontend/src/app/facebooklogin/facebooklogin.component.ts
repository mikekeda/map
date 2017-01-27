import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from '../countries.service';
import { FbService } from '../fb.service';

declare var FB: any;

@Component({
  selector: 'app-facebooklogin',
  templateUrl: './facebooklogin.component.html',
  styleUrls: ['./facebooklogin.component.scss']
})
export class FacebookloginComponent implements OnInit {
  subscription: Subscription;
  access_token: number = 0;
  btn_text: string = 'Sign in with Facebook';
  logged: boolean = false;
  my_fid: number = 0;

  constructor(private countriesService: CountriesService, private fbService: FbService, private route: ActivatedRoute) {
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
    this.subscription = this.fbService.access_token$
      .subscribe(access_token => this.access_token = access_token);
    this.subscription = this.fbService.logged$
      .subscribe(logged => this.logged = logged);
    this.subscription = this.fbService.my_fid$
      .subscribe(my_fid => this.my_fid = my_fid);
  }

  onFacebookLoginClick() {
    this.fbService.fbStatusChange();
    this.btn_text =  this.logged ? 'Sign out with Facebook' : 'Sign in with Facebook';
    this.countriesService.getVisitedCountries(this.my_fid);

  }

  // statusChangeCallback(resp) {
  //   if (resp.status === 'connected') {
  //     if (this.logged) {
  //       this.logged = false;
  //       this.my_fid = 0;
  //       this.btn_text =  'Sign in with Facebook';
  //       this.access_token = null;
  //       this.countriesService.getVisitedCountries(this.my_fid);
  //     }
  //     else {
  //       this.logged = true;
  //       this.my_fid = resp.authResponse.userID;
  //       this.btn_text =  'Sign out with Facebook';
  //       this.access_token = resp.authResponse.accessToken;
  //       this.countriesService.getVisitedCountries(this.my_fid);
  //     }
  //   }
  //   else {
  //     FB.login((resp) => {
  //       if (resp.authResponse) {
  //         this.logged = true;
  //         this.my_fid = resp.authResponse.userID;
  //         this.btn_text =  'Sign out with Facebook';
  //         this.access_token = resp.authResponse.accessToken;
  //         this.countriesService.getVisitedCountries(this.my_fid);
  //       }
  //       else {
  //         console.log('User cancelled login or did not fully authorize.');
  //       }
  //     });
  //   }
  // }
}
