import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { COUNTRIES } from '../countries';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectCountry(event): void {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
  }
}
