import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { CountriesService } from './countries.service';
import { MapComponent } from './map/map.component';
import { FacebookloginComponent } from './facebooklogin/facebooklogin.component';
import { FirebaseloginComponent } from './firebaselogin/firebaselogin.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FacebookloginComponent,
    //FirebaseloginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AUTH_PROVIDERS, CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
