import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../country';
import { CountriesService } from '../countries.service';

declare var FB: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) { }

  subscription: Subscription;
  countries: Country[] = [];
  visitedCountries = [];
  fid: number = 0;
  access_token: string = '';
  errorMessage: string;

  ngOnInit(): void {
    this.countriesService.getCountries()
      .then(countries => this.countries = countries);
    this.subscription = this.countriesService.visitedCountries$
      .subscribe(visitedCountries => this.visitedCountries = visitedCountries);
    this.route.params.subscribe(params => {
      this.fid = +params['fid'];
      if (typeof FB.getAuthResponse === 'function') {
        let res = FB.getAuthResponse();
        this.access_token = res && 'accessToken' in res ? res['accessToken'] : '';
      }
      else {
        this.access_token = '';
      }
      this.countriesService.getVisitedCountries(this.fid);
    });
  }

  selectCountry(country): void {
    // TODO Improve this.
    if (!this.fid) {
      let index = this.visitedCountries.indexOf(country.id);
      let access_token = typeof FB.getAuthResponse === 'function' ? FB.getAuthResponse()['accessToken'] || '' : '';

      if (index === -1) {
        this.visitedCountries.push(country.id);
      }
      else {
        this.visitedCountries.splice(index, 1);
      }

      this.countriesService.setVisitedCountries(this.visitedCountries, access_token);
    }
  }
}
