import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Country } from '../country';
import { CountriesService } from '../countries.service';

declare var FB: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }

  subscription: Subscription;
  countries: Country[] = [];
  visitedCountries = [];
  access_token: string;
  errorMessage: string;

  ngOnInit(): void {
    this.countriesService.getCountries()
      .then(countries => this.countries = countries);
    this.subscription = this.countriesService.visitedCountries$
      .subscribe(visitedCountries => this.visitedCountries = visitedCountries)
  }

  selectCountry(country): void {
    let index = this.visitedCountries.indexOf(country.id);
    let access_token = FB.getAuthResponse()['accessToken'] || '';
    let is_selected = index === -1;
    let country_ids = {};

    country_ids[country.id] = is_selected;

    this.countriesService.setVisitedCountries(country_ids, access_token);

    if (is_selected) {
      this.visitedCountries.push(country.id);
    }
    else {
      this.visitedCountries.splice(index, 1);
    }
  }
}
