import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }

  countries: Country[] = [];
  visitedCountries = [];
  access_token: string;
  errorMessage: string;

  ngOnInit(): void {
    this.countriesService.getCountries()
      .then(countries => this.countries = countries);
    this.countriesService.getVisitedCountries(this.access_token)
      .then(
        visitedCountries => this.visitedCountries = visitedCountries,
        error => this.errorMessage = <any>error
      );
  }

  selectCountry(country): void {
    var index = this.visitedCountries.indexOf(country.id);

    if (index === -1) {
      this.visitedCountries.push(country.id);
    }
    else {
      this.visitedCountries.splice(index, 1);
    }
  }
}
