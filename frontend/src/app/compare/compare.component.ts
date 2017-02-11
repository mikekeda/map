import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { Country } from '../country';
import { CountriesService } from '../countries.service';
import { FbService } from '../fb.service';

declare var FB: any;

@Component({
  selector: 'compare-map',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }

  fid1: number = 0;
  fid2: number = 0;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fid1 = +params['fid1'];
      this.fid2 = +params['fid2'];
    });
  }

  ngOnDestroy() {}
}
