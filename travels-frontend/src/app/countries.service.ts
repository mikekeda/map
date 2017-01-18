import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Country } from './country';
import { COUNTRIES } from './countries';

import { Observable }     from 'rxjs/Observable';

declare var FB: any;

@Injectable()
export class CountriesService {
  //visitedCountriesUpdated:EventEmitter = new EventEmitter();
  private headers = new Headers({'Content-Type': 'application/json'});
  private countriesUrl = 'http://localhost:8000/api/countries';

  visitedCountries = [];

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    this.visitedCountries = body.countries || [];
    //this.visitedCountriesUpdated.emit(this.visitedCountries);
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

  getVisitedCountries (access_token: string): Observable<Array<string>> {
    console.log('FB');
    console.log(access_token);
    return this.http.post(this.countriesUrl, {'access_token': access_token}, this.headers)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}
