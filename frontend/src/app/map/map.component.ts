import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../country';
import { CountriesService } from '../countries.service';
import { FbService } from '../fb.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {

  @Input() fid: number = 0;

  constructor(private countriesService: CountriesService, private fbService: FbService, private route: ActivatedRoute) { }

  subscription: Subscription;
  countries: Country[] = [];
  visitedCountries: Array<string> = [];
  access_token: string = '';
  errorMessage: string;

  ngOnInit() {
    this.countriesService.getCountries()
      .then(countries => this.countries = countries);
    this.subscription = this.countriesService.visitedCountries$
      .subscribe(visitedCountries => this.visitedCountries = visitedCountries);
    this.route.params.subscribe(params => {
      let fid = Number(params['fid']);
      if (isNaN(fid)) {
        if (this.fid === 0) {
          let user = this.fbService.getUSer();

          this.fid = user.fid;
        }
      }
      else {
        this.fid = fid;
      }
      this.countriesService.getVisitedCountries(this.fid);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  selectCountry(country): void {
    let user = this.fbService.getUSer();

    if (!this.fid || this.fid === user.fid) {
      let index = this.visitedCountries.indexOf(country.id);

      if (index === -1) {
        this.visitedCountries.push(country.id);
      }
      else {
        this.visitedCountries.splice(index, 1);
      }

      this.countriesService.setVisitedCountries(this.visitedCountries, user.access_token);
    }
  }
}
