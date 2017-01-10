import { Component, OnInit } from '@angular/core';

import { Country } from '../country';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private countriesService: CountriesService) { }

  countries: Country[] = [];

  ngOnInit(): void {
    this.countriesService.getCountries()
      .then(countries => this.countries = countries);
  }

  selectCountry(event): void {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
  }
}
