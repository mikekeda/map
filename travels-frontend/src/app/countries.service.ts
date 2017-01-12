import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Country } from './country';
import { COUNTRIES } from './countries';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CountriesService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private countriesUrl = 'api/countries';  // URL to web api

  constructor(private http: Http) { }

  getCountries(): Promise<Country[]> {
    return Promise.resolve(COUNTRIES);
  }
  getVisitedCountries(): Promise<Array<string>> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(['UA']), 2000);
    });
  }
  // getVisitedCountries() {
  //   this.authHttp.get('http://example.com/api/thing')
  //     .subscribe(
  //       data => console.log(data),
  //       err => console.log(err),
  //       () => console.log('Request Complete')
  //     );
  // }
}
