import { Component, OnInit } from '@angular/core';

import { CountriesService } from '../countries.service';

declare var firebase: any;
declare var firebaseui: any;

@Component({
  selector: 'app-firebaselogin',
  templateUrl: './firebaselogin.component.html',
  styleUrls: ['./firebaselogin.component.css']
})
export class FirebaseloginComponent {

  constructor(private countriesService: CountriesService) {
    firebase.initializeApp({
      apiKey: "AIzaSyA2zNrhK7fGJHIEgm8Z-Yf7o_4naAjh3vw",
      authDomain: "travels-2711a.firebaseapp.com",
      databaseURL: "https://travels-2711a.firebaseio.com",
      storageBucket: "travels-2711a.appspot.com",
      messagingSenderId: "163642014547"
    });

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', {
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: '<your-tos-url>'
    });

    firebase.auth().onAuthStateChanged(function(user) {
      console.log(user);
    });
  }
}
