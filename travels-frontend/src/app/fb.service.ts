import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { User } from './user';

import { Observable }     from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var FB: any;

@Injectable()
export class FbService {
  user: User = new User();

  private _user = new BehaviorSubject<User>(new User());
  user$ = this._user.asObservable();

  constructor() { }

  getUSer() {
    return this.user;
  }

  fbStatusChange() {
    FB.getLoginStatus(resp => {
      this.statusChangeCallback(resp);
    });
  }

  statusChangeCallback(resp) {
    if (resp.status === 'connected') {
      if (this.user.fid !== 0) {
        this.user.fid = 0;
        this.user.access_token = '';
        this._user.next(this.user);
      }
      else {
        this.user.fid = Number(resp.authResponse.userID);
        this.user.access_token = resp.authResponse.accessToken;
        this._user.next(this.user);
      }
    }
    else {
      FB.login((resp) => {
        if (resp.authResponse) {
          this.user.fid = Number(resp.authResponse.userID);
          this.user.access_token = resp.authResponse.accessToken;
          this._user.next(this.user);
        }
        else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
  }
}
