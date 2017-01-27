import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Country } from './country';
import { COUNTRIES } from './countries';

import { Observable }     from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var FB: any;

@Injectable()
export class FbService {
  access_token: number = 0;
  logged: boolean = false;
  my_fid: number = 0

  private _logged = new BehaviorSubject<boolean>(false);
  logged$ = this._logged.asObservable();

  private _fid = new BehaviorSubject<number>(0);
  my_fid$ = this._fid.asObservable();

  private _access_token = new BehaviorSubject<number>(0);
  access_token$ = this._access_token.asObservable();

  constructor() { }

  fbStatusChange() {
    FB.getLoginStatus(resp => {
      this.statusChangeCallback(resp);
    });
  }

  statusChangeCallback(resp) {
    if (resp.status === 'connected') {
      if (this.logged) {
        this.logged = false;
        this.my_fid = 0;
        this.access_token = null;
      }
      else {
        this.logged = true;
        this.my_fid = resp.authResponse.userID;
        this.access_token = resp.authResponse.accessToken;
      }
    }
    else {
      FB.login((resp) => {
        if (resp.authResponse) {
          this.logged = true;
          this.my_fid = resp.authResponse.userID;
          this.access_token = resp.authResponse.accessToken;
        }
        else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
  }
}
