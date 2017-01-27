import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Country } from './country';
import { COUNTRIES } from './countries';

import { Observable }     from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var FB: any;

@Injectable()
export class CountriesService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private countriesUrl = 'http://localhost:8000/api/countries';

  private _visitedCountries = new BehaviorSubject<Array<string>>([]);
  visitedCountries$ = this._visitedCountries.asObservable();

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.countries || [];
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getCountries(): Promise<Country[]> {
    return Promise.resolve(COUNTRIES);
  }

  getVisitedCountries (fid: number) {
    let params = new URLSearchParams();
    params.set('fid', fid.toString());
    let options = new RequestOptions({
        headers: this.headers,
        search: fid ? params : ''
    });
    return this.http.get(this.countriesUrl, options)
                    .map(this.extractData)
                    .catch(this.handleError)
                    .subscribe((countries: Array<string>) => this._visitedCountries.next(countries));
  }

  setVisitedCountries (country_ids: Object, access_token: string) {
    return this.http.post(this.countriesUrl, {'country_ids': country_ids, 'access_token': access_token}, this.headers)
                    .map(this.extractData)
                    .catch(this.handleError)
                    .subscribe((countries: Array<string>) => this._visitedCountries.next(countries));
  }
}
