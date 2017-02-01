import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CountriesService } from './countries.service';
import { FbService } from './fb.service';
import { MapComponent } from './map/map.component';
import { FacebookloginComponent } from './facebooklogin/facebooklogin.component';
// import { FirebaseloginComponent } from './firebaselogin/firebaselogin.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: MapComponent },
  { path: 'u/:fid', component: MapComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FacebookloginComponent,
    //FirebaseloginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CountriesService, FbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
