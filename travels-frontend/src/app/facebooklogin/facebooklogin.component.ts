import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../user';
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
  user: User = new User(0, 0);
  btn_text: string = 'Sign in with Facebook';

  constructor(private countriesService: CountriesService, private fbService: FbService) {
    FB.init({
      appId      : '674727196042358',
      cookie     : false,  // enable cookies to allow the server to access
                           // the session
      xfbml      : true,   // parse social plugins on this page
      version    : 'v2.8', // use graph api version 2.5
      status     : true
    });
  }

  ngOnInit() {
    this.subscription = this.fbService.user$
      .subscribe(user => {
        this.user = user;
        this.btn_text = user.fid !== 0 ? 'Sign out with Facebook' : 'Sign in with Facebook';
        this.countriesService.getVisitedCountries(user.fid);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onFacebookLoginClick() {
    this.fbService.fbStatusChange();
  }
}
