import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Country } from './country';
import { COUNTRIES } from './countries';

@Injectable()
export class CountriesService {
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

  constructor(public authHttp: AuthHttp) {}

}
