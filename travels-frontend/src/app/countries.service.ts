import { Injectable } from '@angular/core';
import { Country } from './country';
import { COUNTRIES } from './countries';

@Injectable()
export class CountriesService {
  getCountries(): Promise<Country[]> {
    return Promise.resolve(COUNTRIES);
  }

  constructor() { }

}
