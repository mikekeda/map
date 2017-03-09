webpackJsonp([0,3],{

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countries__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CountriesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountriesService = (function () {
    function CountriesService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.countriesUrl = window.location.hostname == 'localhost' ? 'http://localhost:8000/api/countries' : '/api/countries';
        this._visitedCountries = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.visitedCountries$ = this._visitedCountries.asObservable();
    }
    CountriesService.prototype.extractData = function (res) {
        var body = res.json();
        return body.countries || [];
    };
    CountriesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    CountriesService.prototype.getCountries = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__countries__["a" /* COUNTRIES */]);
    };
    CountriesService.prototype.getVisitedCountries = function (fid) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        params.set('fid', fid.toString());
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: this.headers,
            search: fid ? params : ''
        });
        return this.http.get(this.countriesUrl, options)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(function (countries) { return _this._visitedCountries.next(countries); });
    };
    CountriesService.prototype.setVisitedCountries = function (country_ids, access_token) {
        var _this = this;
        return this.http.post(this.countriesUrl, { 'country_ids': country_ids, 'access_token': access_token }, this.headers)
            .map(this.extractData)
            .catch(this.handleError)
            .subscribe(function (countries) { return _this._visitedCountries.next(countries); });
    };
    return CountriesService;
}());
CountriesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], CountriesService);

var _a;
//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/countries.service.js.map

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FbService = (function () {
    function FbService() {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this._user = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]());
        this.user$ = this._user.asObservable();
    }
    FbService.prototype.getUSer = function () {
        return this.user;
    };
    FbService.prototype.fbStatusChange = function () {
        var _this = this;
        FB.getLoginStatus(function (resp) {
            _this.statusChangeCallback(resp);
        });
    };
    FbService.prototype.statusChangeCallback = function (resp) {
        var _this = this;
        if (resp.status === 'connected') {
            if (this.user.fid !== 0) {
                this.user.fid = 0;
                this.user.access_token = '';
                this._user.next(this.user);
            }
            else {
                this.user.fid = Number(resp.authResponse.userID);
                this.user.access_token = resp.authResponse.accessToken;
                this._user.next(this.user);
            }
        }
        else {
            FB.login(function (resp) {
                if (resp.authResponse) {
                    _this.user.fid = Number(resp.authResponse.userID);
                    _this.user.access_token = resp.authResponse.accessToken;
                    _this._user.next(_this.user);
                }
                else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        }
    };
    return FbService;
}());
FbService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FbService);

//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/fb.service.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rxjs_operators__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__rxjs_operators__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Travel map';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(673),
        styles: [__webpack_require__(669)]
    })
], AppComponent);

//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/app.component.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return User; });
var User = (function () {
    function User(fid, access_token) {
        if (fid === void 0) { fid = 0; }
        if (access_token === void 0) { access_token = ''; }
        this.fid = 0;
        this.access_token = '';
        this.fid = fid;
        this.access_token = access_token;
    }
    return User;
}());

//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/user.js.map

/***/ },

/***/ 390:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ },

/***/ 391:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(511);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/main.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__countries_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fb_service__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__facebooklogin_facebooklogin_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__compare_compare_component__ = __webpack_require__(508);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { FirebaseloginComponent } from './firebaselogin/firebaselogin.component';
var appRoutes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_8__map_map_component__["a" /* MapComponent */] },
    { path: 'u/:fid', component: __WEBPACK_IMPORTED_MODULE_8__map_map_component__["a" /* MapComponent */] },
    { path: 'compare/:fid1/:fid2', component: __WEBPACK_IMPORTED_MODULE_10__compare_compare_component__["a" /* CompareComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_9__facebooklogin_facebooklogin_component__["a" /* FacebookloginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__compare_compare_component__["a" /* CompareComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__countries_service__["a" /* CountriesService */], __WEBPACK_IMPORTED_MODULE_7__fb_service__["a" /* FbService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/app.module.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompareComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareComponent = (function () {
    function CompareComponent(route) {
        this.route = route;
        this.fid1 = 0;
        this.fid2 = 0;
    }
    CompareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.fid1 = +params['fid1'];
            _this.fid2 = +params['fid2'];
        });
    };
    CompareComponent.prototype.ngOnDestroy = function () { };
    return CompareComponent;
}());
CompareComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'compare-map',
        template: __webpack_require__(674),
        styles: [__webpack_require__(670)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], CompareComponent);

var _a;
//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/compare.component.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return COUNTRIES; });
var COUNTRIES = [
    { id: "AE", title: "United Arab Emirates", d: "M619.87,393.72L620.37,393.57L620.48,394.41L622.67,393.93L624.99,394.01L626.68,394.1L628.6,392.03L630.7,390.05L632.47,388.15L633,389.2L633.38,391.64L631.95,391.65L631.72,393.65L632.22,394.07L630.95,394.67L630.94,395.92L630.12,397.18L630.05,398.39L629.48,399.03L621.06,397.51L619.98,394.43z" },
    { id: "AF", title: "Afghanistan", d: "M646.88,356.9L649.74,358.2L651.85,357.74L652.44,356.19L654.65,355.67L656.23,354.62L656.79,351.83L659.15,351.15L659.59,349.9L660.92,350.84L661.76,350.95L663.32,350.98L665.44,351.72L666.29,352.14L668.32,351.02L669.27,351.69L670.17,350.09L671.85,350.16L672.28,349.64L672.58,348.21L673.79,346.98L675.3,347.78L675,348.87L675.85,349.04L675.58,351.99L676.69,353.14L677.67,352.4L678.92,352.06L680.66,350.49L682.59,350.75L685.49,350.75L685.99,351.76L684.35,352.15L682.93,352.8L679.71,353.2L676.7,353.93L675.06,355.44L675.72,356.9L676.05,358.6L674.65,360.03L674.77,361.33L674,362.55L671.33,362.44L672.43,364.66L670.65,365.51L669.46,367.51L669.61,369.49L668.51,370.41L667.48,370.11L665.33,370.54L665.03,371.45L662.94,371.45L661.38,373.29L661.28,376.04L657.63,377.37L655.68,377.09L655.11,377.79L653.44,377.39L650.63,377.87L645.94,376.23L648.48,373.3L648.25,371.2L646.13,370.65L645.91,368.56L644.99,365.92L646.19,364.09L644.97,363.6L645.74,361.15z" },
    { id: "AL", title: "Albania", d: "M532.98,334.66L532.63,335.93L533.03,337.52L534.19,338.42L534.13,339.39L533.22,339.93L533.05,341.12L531.75,342.88L531.27,342.63L531.22,341.83L529.66,340.6L529.42,338.85L529.66,336.32L530.04,335.16L529.57,334.57L529.38,333.38L530.6,331.51L530.77,332.23L531.53,331.89L532.13,332.91L532.8,333.29z" },
    { id: "AM", title: "Armenia", d: "M597.45,337.5L601.35,336.92L601.93,337.9L603,338.54L602.43,339.46L603.93,340.72L603.14,341.88L604.33,342.87L605.59,343.46L605.65,345.96L604.63,346.06L603.49,343.98L603.5,343.43L602.26,343.44L601.43,342.46L600.85,342.56L599.74,341.5L597.66,340.59L597.93,338.8z" },
    { id: "AO", title: "Angola", d: "M521.03,479.78l0.69,2.09l0.8,1.68l0.64,0.91l1.07,1.47l1.85,-0.23l0.93,-0.4l1.55,0.4l0.42,-0.7l0.7,-1.64l1.74,-0.11l0.15,-0.49l1.43,-0.01l-0.24,1.01l3.4,-0.02l0.05,1.77l0.57,1.09l-0.41,1.7l0.21,1.74l0.94,1.05l-0.15,3.37l0.69,-0.26l1.22,0.07l1.74,-0.42l1.28,0.17l0.3,0.88l-0.32,1.38l0.49,1.34l-0.42,1.07l0.24,0.99l-5.84,-0.04l-0.13,9.16l1.89,2.38l1.83,1.82l-5.15,1.19l-6.79,-0.41l-1.94,-1.4l-11.37,0.13l-0.42,0.21l-1.67,-1.32l-1.82,-0.09l-1.68,0.5l-1.35,0.56l-0.26,-1.83l0.39,-2.55l0.97,-2.65l0.15,-1.24l0.91,-2.59l0.67,-1.17l1.61,-1.87l0.9,-1.27l0.29,-2.11l-0.15,-1.61l-0.84,-1.01l-0.75,-1.72l-0.69,-1.69l0.15,-0.59l0.86,-1.12l-0.85,-2.72l-0.57,-1.88l-1.4,-1.77l0.27,-0.54l1.16,-0.38l0.81,0.05l0.98,-0.34L521.03,479.78zM510.12,479.24l-0.71,0.3l-0.75,-2.1l1.13,-1.21l0.85,-0.47l1.05,0.96l-1.02,0.59l-0.46,0.72L510.12,479.24z" },
    { id: "AR", title: "Argentina", d: "M291.6,648.91l-2.66,0.25l-1.43,-1.73l-1.69,-0.13l-3,0l0,-10.57l1.08,2.15l1.4,3.53l3.65,2.87l3.93,1.21L291.6,648.91zM293.1,526.47l1.65,2.18l1.09,-2.43l3.2,0.12l0.45,0.64l5.15,4.94l2.29,0.46l3.43,2.26l2.89,1.2l0.4,1.36l-2.76,4.73l2.83,0.85l3.15,0.48l2.22,-0.5l2.54,-2.4l0.46,-2.74l1.39,-0.59l1.41,1.79l-0.06,2.49l-2.36,1.73l-1.88,1.28l-3.16,3.08l-3.74,4.37l-0.7,2.59l-0.75,3.37l0.03,3.3l-0.61,0.74l-0.22,2.17l-0.19,1.76l3.56,2.91l-0.38,2.37l1.75,1.51l-0.14,1.7l-2.69,4.52l-4.16,1.91l-5.62,0.75l-3.08,-0.36l0.59,2.15l-0.57,2.72l0.52,1.85l-1.68,1.3l-2.87,0.51l-2.7,-1.35l-1.08,0.97l0.39,3.71l1.89,1.14l1.54,-1.19l0.84,1.96l-2.58,1.18l-2.25,2.38l-0.41,3.91l-0.66,2.11l-2.65,0.01l-2.2,2.04l-0.8,3.01l2.76,2.98l2.68,0.83l-0.96,3.73l-3.31,2.38l-1.82,5.03l-2.56,1.72l-1.15,2.06l0.91,4.64l1.87,2.63l-1.18,-0.23l-2.6,-0.71l-6.78,-0.61l-1.16,-2.63l0.05,-3.33l-1.87,0.28l-0.99,-1.6l-0.25,-4.6l2.15,-1.88l0.89,-2.68l-0.33,-2.11l1.49,-3.52l1.02,-5.35l-0.3,-2.33l1.22,-0.75l-0.3,-1.48l-1.3,-0.78l0.92,-1.63l-1.27,-1.46l-0.65,-4.4l1.13,-0.77l-0.47,-4.54l0.66,-3.75l0.75,-3.22l1.68,-1.3l-0.85,-3.46l-0.01,-3.22l2.12,-2.26l-0.06,-2.87l1.6,-3.31l0.01,-3.09l-0.73,-0.61l-1.29,-5.69l1.73,-3.34l-0.27,-3.11l1,-2.9l1.84,-2.96l1.98,-1.95l-0.84,-1.23l0.59,-1l-0.09,-5.14l3.05,-1.51l0.96,-3.16l-0.34,-0.76l2.34,-2.72L293.1,526.47z" },
    { id: "AT", title: "Austria", d: "M522.86,309.85L522.65,311.56L521.07,311.57L521.61,312.46L520.68,315.11L520.15,315.8L517.7,315.9L516.28,316.82L513.96,316.51L509.95,315.46L509.33,314.03L506.56,314.75L506.23,315.52L504.53,314.94L503.1,314.83L501.83,314.09L502.26,313.08L502.15,312.34L503,312.12L504.42,313.26L504.82,312.17L507.29,312.35L509.3,311.61L510.64,311.73L511.51,312.58L511.78,311.88L511.38,309.16L512.39,308.62L513.37,306.67L515.46,308.04L517.03,306.3L518.02,305.98L520.2,307.28L521.51,307.06L522.81,307.86L522.58,308.4z" },
    { id: "AU", title: "Australia", d: "M882.93,588.16l2.71,1.28l1.53,-0.51l2.19,-0.71l1.68,0.25l0.2,4.43l-0.96,1.3l-0.29,3.06l-0.98,-1.05l-1.95,2.67l-0.58,-0.21l-1.72,-0.12l-1.73,-3.28l-0.38,-2.5l-1.62,-3.25l0.07,-1.7L882.93,588.16zM877.78,502.1l1.01,2.25l1.8,-1.08l0.93,1.22l1.35,1.13l-0.29,1.28l0.6,2.48l0.43,1.45l0.71,0.35l0.76,2.5l-0.27,1.52l0.91,1.99l3.04,1.54l1.98,1.41l1.88,1.29l-0.37,0.72l1.6,1.87l1.09,3.25l1.12,-0.66l1.14,1.31l0.69,-0.46l0.48,3.21l1.99,1.87l1.3,1.17l2.19,2.49l0.79,2.49l0.07,1.77l-0.19,1.94l1.34,2.68l-0.16,2.81l-0.49,1.48l-0.76,2.87l0.06,1.86l-0.55,2.34l-1.24,3l-2.08,1.63l-1.02,2.59l-0.94,1.67l-0.83,2.93l-1.08,1.71l-0.71,2.58l-0.36,2.4l0.14,1.11l-1.61,1.22l-3.14,0.13l-2.59,1.45l-1.29,1.38l-1.69,1.54l-2.32,-1.58l-1.72,-0.63l0.44,-1.85l-1.53,0.67l-2.46,2.58l-2.42,-0.97l-1.59,-0.56l-1.6,-0.25l-2.71,-1.03l-1.81,-2.18l-0.52,-2.66l-0.65,-1.75l-1.38,-1.4l-2.7,-0.41l0.92,-1.66l-0.68,-2.52l-1.37,2.35l-2.5,0.63l1.47,-1.88l0.42,-1.95l1.08,-1.65l-0.22,-2.47l-2.28,2.85l-1.75,1.15l-1.07,2.69l-2.19,-1.4l0.09,-1.79l-1.75,-2.43l-1.48,-1.25l0.53,-0.77l-3.6,-2l-1.97,-0.09l-2.7,-1.6l-5.02,0.31l-3.63,1.18l-3.19,1.1l-2.68,-0.22l-2.97,1.7l-2.43,0.77l-0.54,1.75l-1.04,1.36l-2.38,0.08l-1.76,0.3l-2.48,-0.61l-2.02,0.37l-1.92,0.15l-1.67,1.8l-0.82,-0.15l-1.41,0.96l-1.35,1.08l-2.05,-0.13l-1.88,0l-2.97,-2.17l-1.51,-0.64l0.06,-1.93l1.39,-0.46l0.48,-0.76l-0.1,-1.2l0.34,-2.3l-0.31,-1.95l-1.48,-3.29l-0.46,-1.85l0.12,-1.83l-1.12,-2.08l-0.07,-0.93l-1.24,-1.26l-0.35,-2.47l-1.6,-2.48l-0.39,-1.33l1.23,1.35l-0.95,-2.88l1.39,0.9l0.83,1.2l-0.05,-1.59l-1.39,-2.43l-0.27,-0.97l-0.65,-0.92l0.3,-1.77l0.57,-0.75l0.38,-1.52l-0.3,-1.77l1.16,-2.17l0.21,2.29l1.18,-2.07l2.28,-1l1.37,-1.28l2.14,-1.1l1.27,-0.23l0.77,0.37l2.21,-1.11l1.7,-0.33l0.42,-0.65l0.74,-0.27l1.55,0.07l2.95,-0.87l1.52,-1.31l0.72,-1.58l1.64,-1.49l0.13,-1.17l0.07,-1.59l1.96,-2.47l1.18,2.51l1.19,-0.58l-1,-1.38l0.88,-1.41l1.24,0.63l0.34,-2.21l1.53,-1.42l0.68,-1.14l1.41,-0.49l0.04,-0.8l1.23,0.34l0.05,-0.72l1.23,-0.41l1.36,-0.39l2.07,1.32l1.56,1.71l1.75,0.02l1.78,0.27l-0.59,-1.58l1.34,-2.3l1.26,-0.75l-0.44,-0.71l1.22,-1.63l1.7,-1.01l1.43,0.34l2.36,-0.54l-0.05,-1.45l-2.05,-0.94l1.49,-0.41l1.86,0.7l1.49,1.17l2.36,0.73l0.8,-0.29l1.74,0.88l1.64,-0.82l1.05,0.25l0.66,-0.55l1.29,1.41l-0.75,1.53l-1.06,1.16l-0.96,0.1l0.33,1.15l-0.82,1.43l-1,1.41l0.2,0.81l2.23,1.6l2.16,0.93l1.44,1l2.03,1.72l0.79,0l1.47,0.75l0.43,0.9l2.68,0.99l1.85,-1l0.55,-1.57l0.57,-1.29l0.35,-1.59l0.85,-2.3l-0.39,-1.39l0.2,-0.84l-0.32,-1.64l0.37,-2.16l0.54,-0.58l-0.44,-0.95l0.68,-1.51l0.53,-1.56l0.07,-0.81l1.04,-1.06l0.79,1.39l0.19,1.78l0.7,0.34l0.12,1.2l1.02,1.45l0.21,1.62L877.78,502.1z" },
    { id: "AZ", title: "Azerbaijan", d: "M601.43,342.46l0.83,0.97l1.24,-0.01l-0.01,0.56l1.14,2.08l-1.92,-0.48l-1.42,-1.66l-0.44,-1.37L601.43,342.46zM608.08,337.03l1.24,0.25l0.48,-0.95l1.67,-1.51l1.47,1.97l1.43,2.62l1.31,0.17l0.86,0.99l-2.31,0.29l-0.49,2.82l-0.48,1.26l-1.03,0.84l0.08,1.77l-0.7,0.18l-1.75,-1.87l0.97,-1.78l-0.83,-1.06l-1.05,0.27l-3.31,2.66l-0.06,-2.5l-1.26,-0.59l-1.19,-0.99l0.79,-1.16l-1.49,-1.26l0.56,-0.92l-1.07,-0.64l-0.58,-0.97l0.69,-0.61l2.09,1.07l1.51,0.22l0.38,-0.43l-1.38,-2.02l0.73,-0.52l0.79,0.13L608.08,337.03z" },
    { id: "BA", title: "Bosnia and Herzegovina", d: "M528.54,323.11L529.56,323.1L528.86,324.82L530.21,326.32L529.8,328.14L529.14,328.31L528.61,328.67L527.7,329.56L527.29,331.66L524.81,330.22L523.75,328.61L522.68,327.76L521.39,326.31L520.79,325.1L519.41,323.27L520,321.63L521.01,322.54L521.61,321.72L522.92,321.63L525.33,322.29L527.27,322.23z" },
    { id: "BD", title: "Bangladesh", d: "M735.09,400.41L735.04,402.56L734.06,402.1L734.24,404.51L733.44,402.95L733.28,401.43L732.74,399.98L731.57,398.22L728.99,398.1L729.25,399.35L728.37,401.02L727.17,400.41L726.76,400.96L725.97,400.63L724.89,400.36L724.45,397.88L723.48,395.6L723.95,393.76L722.23,392.94L722.85,391.82L724.6,390.67L722.58,389.04L723.57,386.93L725.79,388.27L727.13,388.43L727.38,390.58L730.04,391L732.65,390.95L734.26,391.48L732.97,394.07L731.71,394.25L730.85,395.98L732.38,397.56L732.84,395.62L733.62,395.61z" },
    { id: "BE", title: "Belgium", d: "M484.55,295.91L486.6,296.26L489.2,295.33L490.97,297.28L492.52,298.32L492.2,301.29L491.47,301.45L491.16,303.88L488.71,301.91L487.27,302.25L485.31,300.19L484.01,298.42L482.71,298.35L482.3,296.79z" },
    { id: "BF", title: "Burkina Faso", d: "M467.33,436.4L465.41,435.67L464.09,435.78L463.11,436.49L461.85,435.89L461.36,434.96L460.1,434.34L459.91,432.7L460.68,431.49L460.61,430.53L462.84,428.17L463.25,426.21L464.02,425.51L465.38,425.89L466.55,425.31L466.93,424.57L469.11,423.29L469.64,422.39L472.26,421.19L473.81,420.78L474.51,421.33L476.3,421.32L476.08,422.72L476.46,424.03L478.04,425.9L478.12,427.28L481.36,427.93L481.29,429.88L480.68,430.74L479.31,431L478.74,432.24L477.78,432.56L475.32,432.5L474.02,432.28L473.12,432.74L471.88,432.53L467.01,432.66L466.94,434.27z" },
    { id: "BG", title: "Bulgaria", d: "M538.78,325.56L539.59,327.16L540.67,326.87L542.83,327.48L546.95,327.68L548.34,326.69L551.64,325.79L553.68,327.2L555.33,327.61L553.87,329.2L552.85,331.93L553.75,334.09L551.34,333.58L548.48,334.76L548.45,336.62L545.9,336.97L543.93,335.67L541.68,336.7L539.61,336.59L539.41,334.12L538,332.91L538.47,332.37L538.16,331.92L538.63,330.71L539.7,329.52L538.34,327.86L538.09,326.44z" },
    { id: "BI", title: "Burundi", d: "M557.52,475.93L557.34,472.56L556.63,471.3L558.34,471.52L559.2,469.93L560.69,470.11L560.85,471.21L561.45,471.84L561.48,472.75L560.79,473.33L559.69,474.79L558.68,475.8z" },
    { id: "BJ", title: "Benin", d: "M482.8,445.92L480.48,446.25L479.79,444.31L479.92,437.85L479.35,437.27L479.25,435.88L478.27,434.89L477.42,434.06L477.78,432.56L478.74,432.24L479.31,431L480.68,430.74L481.29,429.88L482.23,429.05L483.24,429.04L485.38,430.68L485.27,431.63L485.9,433.31L485.35,434.45L485.64,435.21L484.28,436.96L483.42,437.83L482.89,439.6L482.96,441.39z" },
    { id: "BN", title: "Brunei Darussalam", d: "M795.46,450.77L796.57,449.72L798.96,448.19L798.83,449.57L798.67,451.35L797.33,451.26L796.74,452.21z" },
    { id: "BO", title: "Bolivia", d: "M299.04,526.35L295.84,526.22L294.75,528.65L293.1,526.47L289.43,525.74L287.1,528.46L285.07,528.87L283.97,524.72L282.47,521.38L283.35,518.51L281.88,517.26L281.51,515.14L280.13,513.14L281.9,510L280.69,507.56L281.34,506.59L280.83,505.52L281.93,504.08L281.99,501.64L282.12,499.62L282.73,498.66L280.3,494.08L282.39,494.32L283.83,494.25L284.46,493.4L286.91,492.25L288.38,491.19L292.05,490.71L291.76,492.83L292.1,493.92L291.87,495.82L294.92,498.37L298.06,498.84L299.16,499.91L301.06,500.48L302.22,501.31L303.98,501.28L305.61,502.13L305.73,503.79L306.28,504.63L306.32,505.88L305.5,505.92L306.58,509.29L311.95,509.41L311.54,511.09L311.84,512.24L313.37,513.06L314.04,514.88L313.54,517.2L312.77,518.49L313.04,520.18L312.16,520.79L312.12,519.88L309.5,518.37L306.9,518.32L302.01,519.18L300.67,521.8L300.6,523.4L299.49,526.99z" },
    { id: "BR", title: "Brazil", d: "M313.68,551.79L317.42,547.42L320.59,544.34L322.47,543.06L324.83,541.33L324.89,538.84L323.48,537.05L322.09,537.64L322.64,535.86L323.02,534.04L323.02,532.36L322.01,531.81L320.96,532.3L319.92,532.17L319.59,530.99L319.33,528.22L318.8,527.32L316.91,526.5L315.77,527.09L312.81,526.51L312.99,522.45L312.16,520.79L313.04,520.18L312.77,518.49L313.54,517.2L314.04,514.88L313.37,513.06L311.84,512.24L311.54,511.09L311.95,509.41L306.58,509.29L305.5,505.92L306.32,505.88L306.28,504.63L305.73,503.79L305.61,502.13L303.98,501.28L302.22,501.31L301.06,500.48L299.16,499.91L298.06,498.84L294.92,498.37L291.87,495.82L292.1,493.92L291.76,492.83L292.05,490.71L288.38,491.19L286.91,492.25L284.46,493.4L283.83,494.25L282.39,494.32L280.3,494.08L278.72,494.57L277.44,494.24L277.63,489.94L275.33,491.6L272.86,491.53L271.8,490.02L269.94,489.86L270.53,488.65L268.97,486.93L267.8,484.4L268.54,483.89L268.54,482.7L270.24,481.89L269.96,480.38L270.67,479.4L270.88,478.1L274.08,476.19L276.38,475.66L276.75,475.24L279.28,475.37L280.54,467.72L280.61,466.51L280.17,464.92L278.93,463.9L278.94,461.88L280.52,461.42L281.08,461.71L281.17,460.64L279.53,460.35L279.5,458.61L284.96,458.67L285.89,457.71L286.67,458.59L287.21,460.24L287.74,459.89L289.29,461.37L291.47,461.19L292.01,460.33L294.09,459.68L295.25,459.23L295.57,458.05L297.58,457.25L297.42,456.67L295.05,456.43L294.66,454.67L294.77,452.8L293.52,452.08L294.04,451.82L296.12,452.18L298.35,452.88L299.16,452.22L301.17,451.78L304.31,450.74L305.34,449.67L304.96,448.88L306.42,448.76L307.08,449.4L306.71,450.63L307.67,451.05L308.32,452.35L307.54,453.33L307.09,455.71L307.81,457.12L308.01,458.41L309.74,459.71L311.12,459.85L311.43,459.31L312.31,459.19L313.58,458.7L314.49,457.96L316.04,458.19L316.72,458.09L318.25,458.32L318.5,457.75L318.03,457.2L318.31,456.39L319.44,456.64L320.77,456.35L322.37,456.94L323.6,457.52L324.47,456.76L325.09,456.88L325.48,457.67L326.82,457.47L327.89,456.41L328.75,454.35L330.41,451.8L331.37,451.67L332.06,453.21L333.63,458.09L335.13,458.55L335.21,460.47L333.1,462.76L333.97,463.6L338.93,464.04L339.03,466.83L341.16,465L344.69,466.01L349.34,467.71L350.71,469.34L350.25,470.88L353.51,470.02L358.97,471.5L363.16,471.39L367.3,473.7L370.88,476.83L373.04,477.63L375.44,477.75L376.46,478.63L377.41,482.2L377.88,483.89L376.76,488.55L375.33,490.39L371.38,494.33L369.59,497.54L367.52,500.02L366.82,500.08L366.03,502.18L366.23,507.58L365.45,512.06L365.15,513.99L364.27,515.14L363.77,519.08L360.93,522.96L360.45,526.05L358.18,527.36L357.52,529.17L354.48,529.16L350.07,530.33L348.09,531.68L344.95,532.57L341.65,535.01L339.28,538.07L338.87,540.39L339.34,542.12L338.81,545.3L338.18,546.85L336.22,548.6L333.11,554.28L330.64,556.87L328.73,558.41L327.46,561.57L325.6,563.48L324.82,561.58L326.06,560.01L324.44,557.76L322.24,555.94L319.35,553.86L318.31,553.95L315.5,551.45z" },
    { id: "BS", title: "Bahamas", d: "M257.86,395.2l-0.69,0.15l-0.71,-1.76l-1.05,-0.89l0.61,-1.95l0.84,0.12l0.98,2.55L257.86,395.2zM257.06,386.51l-3.06,0.5l-0.2,-1.15l1.32,-0.25l1.85,0.09L257.06,386.51zM259.36,386.48l-0.48,2.21l-0.52,-0.4l0.05,-1.63l-1.26,-1.23l-0.01,-0.36L259.36,386.48z" },
    { id: "BT", title: "Bhutan", d: "M732.36,382.78L733.5,383.78L733.3,385.71L731.01,385.8L728.65,385.59L726.88,386.08L724.33,384.89L724.28,384.26L726.13,381.92L727.64,381.12L729.65,381.85L731.13,381.93z" },
    { id: "BW", title: "Botswana", d: "M547.17,515.95L547.73,516.47L548.62,518.18L551.79,521.43L552.99,521.75L553,522.8L553.82,524.7L555.99,525.16L557.78,526.52L553.81,528.74L551.29,531L550.36,533.03L549.52,534.18L547.99,534.43L547.5,535.9L547.21,536.86L545.42,537.58L543.14,537.43L541.8,536.57L540.62,536.19L539.25,536.91L538.56,538.39L537.23,539.32L535.83,540.71L533.82,541.03L533.2,539.94L533.46,538.04L531.79,535.11L531.04,534.65L531.04,525.79L533.8,525.68L533.88,515.11L535.97,515.02L540.29,513.99L541.37,515.2L543.15,514.05L544.01,514.04L545.59,513.38L546.09,513.6z" },
    { id: "BY", title: "Belarus", d: "M541.1,284.07L543.81,284.11L546.85,282.31L547.5,279.59L549.8,278.02L549.54,275.82L551.24,274.98L554.26,273.05L557.21,274.31L557.61,275.54L559.08,274.95L561.82,276.13L562.09,278.44L561.49,279.76L563.25,282.91L564.39,283.78L564.22,284.64L566.11,285.47L566.92,286.72L565.83,287.74L563.57,287.58L563.03,288.02L563.69,289.56L564.38,292.49L561.97,292.76L561.11,293.76L560.92,296.02L559.81,295.59L557.28,295.81L556.54,294.76L555.49,295.54L554.44,294.89L552.23,294.8L549.1,293.72L546.27,293.36L544.1,293.46L542.56,294.69L541.22,294.86L541.17,292.85L540.3,290.73L541.98,289.79L542,287.94L541.22,286.16z" },
    { id: "BZ", title: "Belize", d: "M225.31,412.96L225.29,412.53L225.63,412.39L226.14,412.74L227.14,410.97L227.67,410.93L227.68,411.36L228.21,411.37L228.17,412.17L227.71,413.44L227.96,413.89L227.67,414.94L227.84,415.21L227.52,416.68L226.97,417.46L226.46,417.55L225.9,418.55L225.07,418.55L225.29,415.27z" },
    { id: "CA", title: "Canada", d: "M198.93,96.23l-0.22,-5.9l3.63,0.58l1.63,0.96l3.35,4.92l-0.76,4.97l-4.15,2.77l-2.28,-3.12L198.93,96.23zM212.14,108.88l0.33,-1.49l-1.97,-2.45l-5.65,-0.19l0.75,3.68l5.25,0.83L212.14,108.88zM248.49,155.83l3.08,5.1l0.81,0.57l3.07,-1.27l3.02,0.2l2.98,0.28l-0.25,-2.64l-4.84,-5.38l-6.42,-1.08l-1.35,0.67L248.49,155.83zM183.06,93.13l-2.71,4.19l6.24,0.52l4.61,4.44l4.58,1.5l-1.09,-5.68l-2.14,-6.73l-7.58,-5.35l-5.5,-2.04l0.2,5.69L183.06,93.13zM208.96,82.89l5.13,-0.12l-2.22,4l-0.04,5.3l3.01,5.76l5.81,1.77l4.96,-0.99l5.18,-10.73l3.85,-4.45l-3.38,-4.97l-2.21,-10.65l-4.6,-3.19l-4.72,-3.68l-3.58,-9.56l-6.52,0.94l1.23,4.15l-2.87,1.25l-1.94,5.32l-1.94,7.46l1.78,7.26L208.96,82.89zM145.21,136.27l3.92,1.95l12.67,-1.3l-5.82,4.77l0.36,3.43l4.26,-0.24l7.07,-4.58l9.5,-1.67l1.71,-5.22l-0.49,-5.57l-2.94,-0.5l-2.5,1.93l-1.1,-4.13l-0.95,-5.7l-2.9,-1.42l-2.57,4.41l4.01,11.05l-4.9,-0.85l-4.98,-6.79l-7.89,-4l-2.64,3.32L145.21,136.27zM167.77,94.21l-3.65,-2.9l-1.5,-0.66l-2.88,4.28l-0.05,2l4.66,0.01L167.77,94.21zM166.31,106.56l0.93,-3.99l-3.95,-2.12l-4.09,1.39l-2.27,4.26l4.16,4.21L166.31,106.56zM195.4,139.8l4.62,-1.11l1.28,-8.25l-0.09,-5.95l-2.14,-5.56l-0.22,1.6l-3.94,-0.7l-4.22,4.09l-3.02,-0.37l0.18,8.92l4.6,-0.87l-0.06,6.47L195.4,139.8zM192.12,185.41l-5.06,-3.93l-4.71,-4.21l-0.87,-6.18l-1.76,-8.92l-3.14,-3.84l-2.79,-1.55l-2.47,1.42l1.99,9.59l-1.41,3.73l-2.29,-8.98l-2.56,-3.11l-3.17,4.81l-3.9,-4.76l-6.24,2.87l1.4,-4.46l-2.87,-1.87l-7.51,5.84l-1.95,3.71l-2.35,6.77l4.9,2.32l4.33,-0.12l-6.5,3.46l1.48,3.13l3.98,0.17l5.99,-0.67l5.42,1.96l-3.66,1.44l-3.95,-0.37l-4.33,1.41l-1.87,0.87l3.45,6.35l2.49,-0.88l3.83,2.15l1.52,3.65l4.99,-0.73l7.1,-1.16l5.26,-2.65l3.26,-0.48l4.82,2.12l5.07,1.22l0.94,-2.86l-1.79,-3.05l4.6,-0.64L192.12,185.41zM199.86,184.43l-1.96,3.54l-2.47,2.49l3.83,3.54l2.28,-0.85l3.78,2.36l1.74,-2.73l-1.71,-3.03l-0.84,-1.53l-1.68,-1.46L199.86,184.43zM182.25,154.98l-2.13,-2.17l-3.76,0.4l-0.95,1.38l4.37,6.75L182.25,154.98zM210.94,168.15l3.01,-6.93l3.34,-1.85l4.19,-8.74l-5.36,-2.47l-5.84,-0.36l-2.78,2.77l-1.47,4.23l-0.04,4.82l1.75,8.19L210.94,168.15zM228.09,145.15l5.76,-0.18l8.04,-1.61l3.59,1.28l4.18,-2.26l1.75,-2.84l-0.63,-4.52l-3,-4.23l-4.56,-0.8l-5.71,0.97l-4.46,2.44l-4.09,-0.94l-3.78,-0.5l-1.78,-2.7l-3.22,-2.61l0.64,-4.43l-2.42,-3.98l-5.52,0.03l-3.11,-3.99l-5.78,-0.8l-1.06,5.1l3.25,3.74l5.8,1.45l2.81,5.09l0.34,5.6l0.97,5.99l7.45,3.42L228.09,145.15zM139.07,126.88l5.21,-5.05l2.62,-0.59l2.16,-4.23l0.38,-9.77l-3.85,1.91l-4.3,-0.18l-5.76,8.19l-4.76,8.98l3.8,2.51L139.07,126.88zM211.25,143.05l1.53,-4.14l-1.02,-3.46l-2.45,-3.92l-4.03,3.02l-1.49,4.92l3.4,2.79L211.25,143.05zM202.94,154.49l-0.73,-2.88l-5,1.26l-3.34,-2.11l-3.32,4.8l3.09,6.28l-5.72,-1.17l-0.06,3.01l6.97,7.05l1.94,3.38l2.7,0.73l4.6,-3.41l0.5,-8.21l-4.24,-4.07L202.94,154.49zM128.95,308.23l-1.16,-2.34l-2.8,-1.77l-1.39,-2.05l-0.95,-1.5l-2.64,-0.46l-1.72,-0.67l-2.94,-0.96l-0.24,1.02l1.08,2.38l2.89,0.78l0.5,1.23l2.51,1.5l0.84,1.51l4.6,1.92L128.95,308.23zM250.65,230.6l-2,-2.11l-2.06,0.5l-0.25,-3.06l-3.21,-2.04l-3.07,-2.27l-1.63,-1.75l-1.43,1.03l-0.52,-2.96l-2.03,-0.55l-0.96,6.13l-0.36,5.11l-2.44,3.14l3.8,-0.6l0.96,3.65l3.99,-3.23l2.78,-3.38l1.57,2.86l4.36,1.51L250.65,230.6zM130.12,178.05l7.38,-4.18V170l3.48,-6.41l6.88,-6.69l3.52,-2.47l-3.01,-4.2l-2.72,-2.95l-7.16,-0.57l-4,-2.16l-9.48,1.63l2.74,6.23l-2.43,6.43l-1.94,6.87l-1.2,3.86l6.47,4.69L130.12,178.05zM264.36,205.36l0.32,-1.01l-0.03,-3.17l-2.19,-2.08l-2.57,1.05l-1.19,4.17l0.7,3.56l3.14,-0.36L264.36,205.36zM288.18,212.9l4.41,6.6l3.45,2.85l4.92,-7.87l0.87,-4.93l-4.41,-0.47l-4.03,-6.7l-4.45,-1.64l-6.6,-4.97l5.15,-3.63l-2.65,-7.54l-2.44,-3.35l-6.77,-3.35l-2.92,-5.55l-5.21,1.99l-0.36,-3.86l-3.86,-4.32l-6.22,-4.71l-2.65,3.71l-5.55,2.66l0.42,-6.06l-4.81,-10.05l-7.11,4.06l-2.59,7.7l-2.21,-5.92l2.06,-6.37l-7.24,2.65l-2.88,3.99l-2.15,8.42l0.89,9.05l3.98,0.04l-2.93,3.92l2.33,2.96l4.55,1.25l5.93,2.42l10.2,1.82l5.08,-1.04l1.5,-2.42l2.21,2.79l2.47,0.46l2.97,4.96l-1.8,1.98l5.68,2.63l4.29,3.68l1.08,2.55l0.77,3.24l-3.63,6.93l-0.98,3.44l0.94,2.42l-5.77,0.86l-5.27,0.12l-1.85,4.87l2.37,2.23l8.11,-1.03l-0.04,-1.89l4.08,3.15l4.18,3.28l-0.98,1.77l3.4,3.02l6.02,3.53l7.6,2.39l-0.46,-2.09l-2.92,-3.67l-3.96,-5.37l7.03,5l3.54,1.66l0.97,-4.44l-1.82,-6.3l-1.16,-1.73l-3.81,-3.03l-2.95,-3.91l0.35,-3.94L288.18,212.9zM222.35,51.34l2.34,7.29l4.96,5.88l9.81,-1.09l6.31,1.97l-4.38,6.05l-2.21,-1.78l-7.66,-0.71l1.19,8.31l3.96,6.04l-0.8,5.2l-4.97,3.46l-2.27,5.47l4.55,2.65l3.82,8.55l-7.5,-5.7l-1.71,0.94l1.38,9.38l-5.18,2.83l0.35,5.85l5.3,0.63l4.17,1.44l8.24,-1.84l7.33,3.27l7.49,-7.19l-0.06,-3.02l-4.79,0.48l-0.39,-2.84l3.92,-3.83l1.33,-5.15l4.33,-3.83l2.66,-4.76l-2.32,-7.1l1.94,-2.65l-3.86,-1.89l8.49,-1.63l1.79,-3.15l5.78,-2.6l4.8,-13.47l4.57,-4.94l6.62,-11.12l-6.1,0.1l2.54,-4.3l6.78,-3.99l6.84,-8.9l0.12,-5.73l-5.13,-6.04l-6.02,-2.93l-7.49,-1.82l-6.07,-1.49l-6.07,-1.5l-8.1,3.98l-1.49,-2.53l-8.57,0.98l-5.03,2.57l-3.7,3.65l-2.13,11.74L239,24.52l-3.48,-1.14l-4.12,7.97l-5.5,3.35l-3.27,0.66l-4.17,3.84l0.61,6.65L222.35,51.34zM296.75,316.34l-0.98,-1.98l-1.06,1.26l0.7,1.36l3.56,1.71l1.04,-0.26l1.38,-1.66l-2.6,0.11L296.75,316.34zM239.75,238.48l0.61,1.63l1.98,0.14l3.28,-3.34l0.06,-1.19l-3.85,-0.06L239.75,238.48zM301.88,304.92l-2.87,-1.8l-3.69,-1.09l-0.97,0.37l2.61,2.04l3.63,1.34l1.36,-0.08L301.88,304.92zM326.76,309.71l-0.36,-2.24l-1.96,0.72l0.87,-3.11l-2.8,-1.32l-1.29,1.05l-2.49,-1.18l0.98,-1.51l-1.88,-0.93l-1.83,1.47l1.86,-3.82l1.5,-2.8l0.54,-1.22l-1.3,-0.2l-2.43,1.55l-1.74,2.53l-2.9,6.92l-2.35,2.56l1.22,1.14l-1.75,1.47l0.43,1.23l5.44,0.13l3.01,-0.25l2.69,1.01l-1.98,1.93l1.67,0.14l3.25,-3.58l0.78,0.53l-0.61,3.37l1.84,0.77l1.27,-0.15l1.18,-3.61L326.76,309.71zM305.57,314.47l-2.81,4.56l-4.63,0.58l-3.64,-2.01l-0.92,-3.07l-0.89,-4.46l2.65,-2.83l-2.48,-2.09l-4.19,0.43l-5.88,3.53l-4.5,5.45l-2.38,0.67l3.23,-3.8l4.04,-5.57l3.57,-1.9l2.35,-3.11l2.9,-0.3l4.21,0.03l6,0.92l4.74,-0.71l3.53,-3.62l4.62,-1.59l2.01,-1.58l2.04,-1.71l-0.2,-5.19l-1.13,-1.77l-2.18,-0.63l-1.11,-4.05l-1.8,-1.55l-4.47,-1.26l-2.52,-2.82l-3.73,-2.83l1.13,-3.2l-3.1,-6.26l-3.65,-6.89l-2.18,-4.98l-1.86,2.61l-2.68,6.05l-4.06,2.97l-2.03,-3.16l-2.56,-0.85l-0.93,-6.99l0.08,-4.8l-5,-0.44l-0.85,-2.27l-3.45,-3.44l-2.61,-2.04l-2.32,1.58l-2.88,-0.58l-4.81,-1.65l-1.95,1.4l0.94,9.18l1.22,5.12l-3.31,5.75l3.41,4.02l1.9,4.44l0.23,3.42l-1.55,3.5l-3.18,3.46l-4.49,2.28l1.98,2.53l1.46,7.4l-1.52,4.68l-2.16,1.46l-4.17,-4.28l-2.03,-5.17l-0.87,-4.76l0.46,-4.19l-3.05,-0.47l-4.63,-0.28l-2.97,-2.08l-3.51,-1.37l-2.01,-2.38l-2.8,-1.94l-5.21,-2.23l-3.92,1.02l-1.31,-3.95l-1.26,-4.99l-4.12,-0.9l0.15,-6.41l1.09,-4.48l3.04,-6.6l3.43,-4.9l3.26,-0.77l0.19,-4.05l2.21,-2.68l4.01,-0.42l3.25,-4.39l0.82,-2.9l2.7,-5.73l0.84,-3.5l2.9,2.11l3.9,-1.08l5.49,-4.96l0.36,-3.54l-1.98,-3.98l2.09,-4.06l-0.17,-3.87l-3.76,-3.95l-4.14,-1.19l-3.98,-0.62l-0.15,8.71l-2.04,6.56l-2.93,5.3l-2.71,-4.95l0.84,-5.61l-3.35,-5.02l-3.75,6.09l0.01,-7.99l-5.21,-1.63l2.49,-4.01l-3.81,-9.59l-2.84,-3.91l-3.7,-1.44l-3.32,6.43l-0.22,9.34l3.27,3.29l3,4.91l-1.27,7.71l-2.26,-0.2l-1.78,5.88l0.02,-7l-4.34,-2.58l-2.49,1.33l0.32,4.67l-4.09,-0.18l-4.35,1.17l-4.95,-3.35l-3.13,0.6l-2.82,-4.11l-2.26,-1.84l-2.24,0.77l-3.41,0.35l-1.81,2.61l2.86,3.19l-3.05,3.72l-2.99,-4.42l-2.39,1.3l-7.57,0.87l-5.07,-1.59l3.94,-3.74l-3.78,-3.9l-2.75,0.5l-3.86,-1.32l-6.56,-2.89l-4.29,-3.37l-3.4,-0.47l-1.06,2.36l-3.44,1.31l-0.38,-6.15l-3.73,5.5l-4.74,-7.32l-1.94,-0.89l-0.63,3.91l-2.09,1.9l-1.93,-3.39l-4.59,2.05l-4.2,3.55l-4.17,-0.98l-3.4,2.5l-2.46,3.28l-2.92,-0.72l-4.41,-3.8l-5.23,-1.94l-0.02,27.65l-0.01,35.43l2.76,0.17l2.73,1.56l1.96,2.44l2.49,3.6l2.73,-3.05l2.81,-1.79l1.49,2.85l1.89,2.23l2.57,2.42l1.75,3.79l2.87,5.88l4.77,3.2l0.08,3.12l-1.56,2.35l0.06,2.48l3.39,3.45l0.49,3.76l3.59,1.96l-0.4,2.79l1.56,3.96l5.08,1.82l2,1.89l5.43,4.23l0.38,0.01h7.96h8.32h2.76h8.55h8.27h8.41l8.42,0l9.53,0l9.59,0l5.8,0l0.01,-1.64l0.95,-0.02l0.5,2.35l0.87,0.72l1.96,0.26l2.86,0.67l2.72,1.3l2.27,-0.55l3.45,1.09l1.14,-1.66l1.59,-0.66l0.62,-1.03l0.63,-0.55l2.61,0.86l1.93,0.1l0.67,0.57l0.94,2.38l3.15,0.63l-0.49,1.18l1.11,1.21l-0.48,1.56l1.18,0.51l-0.59,1.37l0.75,0.13l0.53,-0.6l0.55,0.9l2.1,0.5l2.13,0.04l2.27,0.41l2.51,0.78l0.91,1.26l1.82,3.04l-0.9,1.3l-2.28,-0.54l-1.42,-2.44l0.36,2.49l-1.34,2.17l0.15,1.84l-0.23,1.07l-1.81,1.27l-1.32,2.09l-0.62,1.32l1.54,0.24l2.08,-1.2l1.23,-1.06l0.83,-0.17l1.54,0.38l0.75,-0.59l1.37,-0.48l2.44,-0.47v0l0,0l-0.25,-1.15l-0.13,0.04l-0.86,0.2l-1.12,-0.36l0.84,-1.32l0.85,-0.46l1.98,-0.56l2.37,-0.53l1.24,0.73l0.78,-0.85l0.89,-0.54l0.6,0.29l0.03,0.06l2.87,-2.73l1.27,-0.73l4.26,-0.03l5.17,0l0.28,-0.98l0.9,-0.2l1.19,-0.62l1,-1.82l0.86,-3.15l2.14,-3.1l0.93,1.08l1.88,-0.7l1.25,1.19l0,5.52l1.83,2.25l3.12,-0.48l4.49,-0.13l-4.87,3.26l0.11,3.29l2.13,0.28l3.13,-2.79l2.78,-1.58l6.21,-2.35l3.47,-2.62l-1.81,-1.46L305.57,314.47zM251.91,243.37l1.1,-3.12l-0.71,-1.23l-1.15,-0.13l-1.08,1.8l-0.13,0.41l0.74,1.77L251.91,243.37zM109.25,279.8L109.25,279.8l1.56,-2.35L109.25,279.8zM105.85,283.09l-2.69,0.38l-1.32,-0.62l-0.17,1.52l0.52,2.07l1.42,1.46l1.04,2.13l1.69,2.1l1.12,0.01l-2.44,-3.7L105.85,283.09z" },
    { id: "CD", title: "Democratic Republic of Congo", d: "M561.71,453.61L561.54,456.87L562.66,457.24L561.76,458.23L560.68,458.97L559.61,460.43L559.02,461.72L558.86,463.96L558.21,465.02L558.19,467.12L557.38,467.9L557.28,469.56L556.89,469.77L556.63,471.3L557.34,472.56L557.52,475.93L558.02,478.5L557.74,479.96L558.3,481.58L559.93,483.15L561.44,486.7L560.34,486.41L556.57,486.89L555.82,487.22L555.02,489.02L555.65,490.27L555.15,493.62L554.8,496.47L555.56,496.98L557.52,498.08L558.29,497.57L558.53,500.65L556.38,500.62L555.23,499.05L554.2,497.83L552.05,497.43L551.42,495.94L549.7,496.84L547.46,496.44L546.52,495.15L544.74,494.89L543.43,494.96L543.27,494.08L542.3,494.01L541.02,493.84L539.29,494.26L538.07,494.19L537.37,494.45L537.52,491.08L536.59,490.03L536.38,488.3L536.79,486.6L536.23,485.51L536.18,483.75L532.77,483.77L533.02,482.76L531.59,482.77L531.44,483.26L529.7,483.37L528.99,485L528.57,485.71L527.02,485.31L526.1,485.71L524.24,485.93L523.17,484.46L522.53,483.55L521.72,481.87L521.03,479.78L512.76,479.75L511.77,480.08L510.96,480.03L509.8,480.41L509.41,479.54L510.12,479.24L510.21,478.02L510.67,477.3L511.69,476.72L512.43,477L513.39,475.93L514.91,475.96L515.09,476.75L516.14,477.25L517.79,475.49L519.42,474.13L520.13,473.24L520.04,470.94L521.26,468.23L522.54,466.8L524.39,465.46L524.71,464.57L524.78,463.55L525.24,462.58L525.09,461L525.44,458.53L525.99,456.79L526.83,455.3L526.99,453.62L527.24,451.67L528.34,450.25L529.84,449.35L532.15,450.3L533.93,451.33L535.98,451.61L538.07,452.15L538.91,450.47L539.3,450.25L540.57,450.53L543.7,449.14L544.8,449.73L545.71,449.65L546.13,448.97L547.17,448.73L549.28,449.02L551.08,449.08L552.01,448.79L553.7,451.1L554.96,451.43L555.71,450.96L557.01,451.15L558.57,450.56L559.24,451.75z" },
    { id: "CF", title: "Central African Republic", d: "M518.09,442.66L520.41,442.44L520.93,441.72L521.39,441.78L522.09,442.41L525.62,441.34L526.81,440.24L528.28,439.25L528,438.26L528.79,438L531.5,438.18L534.14,436.87L536.16,433.78L537.59,432.64L539.36,432.15L539.68,433.37L541.3,435.14L541.3,436.29L540.85,437.47L541.03,438.34L542,439.15L544.14,440.39L545.67,441.52L545.7,442.44L547.58,443.9L548.75,445.11L549.46,446.79L551.56,447.9L552.01,448.79L551.08,449.08L549.28,449.02L547.17,448.73L546.13,448.97L545.71,449.65L544.8,449.73L543.7,449.14L540.57,450.53L539.3,450.25L538.91,450.47L538.07,452.15L535.98,451.61L533.93,451.33L532.15,450.3L529.84,449.35L528.34,450.25L527.24,451.67L526.99,453.62L525.19,453.46L523.29,452.99L521.62,454.47L520.15,457.07L519.85,456.26L519.73,454.99L518.45,454.09L517.41,452.65L517.17,451.65L515.85,450.19L516.07,449.36L515.79,448.18L516.01,446.01L516.68,445.5z" },
    { id: "CG", title: "Republic of Congo", d: "M511.69,476.72L510.64,475.76L509.79,476.23L508.66,477.43L506.36,474.48L508.49,472.94L507.44,471.09L508.4,470.39L510.29,470.05L510.51,468.81L512.01,470.15L514.49,470.27L515.35,468.95L515.7,467.1L515.39,464.92L514.07,463.28L515.28,460.05L514.58,459.5L512.5,459.72L511.71,458.29L511.92,457.07L515.45,457.18L517.72,457.91L519.95,458.57L520.15,457.07L521.62,454.47L523.29,452.99L525.19,453.46L526.99,453.62L526.83,455.3L525.99,456.79L525.44,458.53L525.09,461L525.24,462.58L524.78,463.55L524.71,464.57L524.39,465.46L522.54,466.8L521.26,468.23L520.04,470.94L520.13,473.24L519.42,474.13L517.79,475.49L516.14,477.25L515.09,476.75L514.91,475.96L513.39,475.93L512.43,477z" },
    { id: "CH", title: "Switzerland", d: "M502.15,312.34L502.26,313.08L501.83,314.09L503.1,314.83L504.53,314.94L504.31,316.61L503.08,317.3L501,316.79L500.39,318.42L499.06,318.55L498.57,317.91L497,319.27L495.65,319.46L494.44,318.6L493.48,316.83L492.14,317.47L492.18,315.63L494.23,313.32L494.14,312.27L495.42,312.66L496.19,311.95L498.57,311.98L499.15,311.08z" },
    { id: "CI", title: "Côte d'Ivoire", d: "M467.24,449.46L465.97,449.49L464.01,448.94L462.22,448.97L458.89,449.46L456.95,450.27L454.17,451.29L453.63,451.22L453.84,448.92L454.11,448.57L454.03,447.46L452.84,446.29L451.95,446.1L451.13,445.33L451.74,444.09L451.46,442.73L451.59,441.91L452.04,441.91L452.2,440.68L451.98,440.14L452.25,439.75L453.29,439.41L452.6,437.15L451.95,435.99L452.18,435.02L452.74,434.81L453.1,434.55L453.88,434.97L456.04,435L456.56,434.17L457.04,434.23L457.85,433.91L458.29,435.12L458.94,434.76L460.1,434.34L461.36,434.96L461.85,435.89L463.11,436.49L464.09,435.78L465.41,435.67L467.33,436.4L468.07,440.41L466.89,442.77L466.16,445.94L467.37,448.35z" },
    { id: "CL", title: "Chile", d: "M282.81,636.73l0,10.57l3,0l1.69,0.13l-0.93,1.98l-2.4,1.53l-1.38,-0.16l-1.66,-0.4l-2.04,-1.48l-2.94,-0.71l-3.53,-2.71l-2.86,-2.57l-3.86,-5.25l2.31,0.97l3.94,3.13l3.72,1.7l1.45,-2.17l0.91,-3.2l2.58,-1.91L282.81,636.73zM283.97,524.72l1.1,4.15l2.02,-0.41l0.34,0.76l-0.96,3.16l-3.05,1.51l0.09,5.14l-0.59,1l0.84,1.23l-1.98,1.95l-1.84,2.96l-1,2.9l0.27,3.11l-1.73,3.34l1.29,5.69l0.73,0.61l-0.01,3.09l-1.6,3.31l0.06,2.87l-2.12,2.26l0.01,3.22l0.85,3.46l-1.68,1.3l-0.75,3.22l-0.66,3.75l0.47,4.54l-1.13,0.77l0.65,4.4l1.27,1.46l-0.92,1.63l1.3,0.78l0.3,1.48l-1.22,0.75l0.3,2.33l-1.02,5.35l-1.49,3.52l0.33,2.11l-0.89,2.68l-2.15,1.88l0.25,4.6l0.99,1.6l1.87,-0.28l-0.05,3.33l1.16,2.63l6.78,0.61l2.6,0.71l-2.49,-0.03l-1.35,1.13l-2.53,1.67l-0.45,4.38l-1.19,0.11l-3.16,-1.54l-3.21,-3.25l0,0l-3.49,-2.63l-0.88,-2.87l0.79,-2.62l-1.41,-2.94l-0.36,-7.34l1.19,-4.03l2.96,-3.19l-4.26,-1.19l2.67,-3.57l0.95,-6.56l3.12,1.37l1.46,-7.97l-1.88,-1l-0.88,4.75l-1.77,-0.54l0.88,-5.42l0.96,-6.84l1.29,-2.48l-0.81,-3.5l-0.23,-3.98l1.18,-0.11l1.72,-5.6l1.94,-5.43l1.19,-4.97l-0.65,-4.91l0.84,-2.67l-0.34,-3.96l1.64,-3.87l0.51,-6.04l0.9,-6.37l0.88,-6.75l-0.21,-4.87l-0.58,-4.15l1.44,-0.75l0.75,-1.5l1.37,1.99l0.37,2.12l1.47,1.25l-0.88,2.87L283.97,524.72z" },
    { id: "CM", title: "Cameroon", d: "M511.92,457.07L511.57,456.92L509.91,457.28L508.2,456.9L506.87,457.09L502.31,457.02L502.72,454.82L501.62,452.98L500.34,452.5L499.77,451.25L499.05,450.85L499.09,450.08L499.81,448.1L501.14,445.4L501.95,445.37L503.62,443.73L504.69,443.69L506.26,444.84L508.19,443.89L508.45,442.73L509.08,441.59L509.51,440.17L511.01,439.01L511.58,437.04L512.17,436.41L512.57,434.94L513.31,433.13L515.67,430.93L515.82,429.98L516.13,429.47L515.02,428.33L515.11,427.43L515.9,427.26L517.01,429.09L517.2,430.98L517.1,432.87L518.62,435.44L517.06,435.41L516.27,435.61L514.99,435.33L514.38,436.66L516.03,438.31L517.25,438.79L517.65,439.96L518.53,441.89L518.09,442.66L516.68,445.5L516.01,446.01L515.79,448.18L516.07,449.36L515.85,450.19L517.17,451.65L517.41,452.65L518.45,454.09L519.73,454.99L519.85,456.26L520.15,457.07L519.95,458.57L517.72,457.91L515.45,457.18z" },
    { id: "CN", title: "China", d: "M784.63,410.41l-2.42,1.41l-2.3,-0.91l-0.08,-2.53l1.38,-1.34l3.06,-0.83l1.61,0.07l0.63,1.13l-1.23,1.3L784.63,410.41zM833.19,302.89l4.88,1.38l3.32,3.03l1.13,3.95l4.26,0l2.43,-1.65l4.63,-1.24l-1.47,3.76l-1.09,1.51l-0.96,4.46l-1.89,3.89l-3.4,-0.7l-2.41,1.4l0.74,3.36l-0.4,4.55l-1.43,0.1l0.02,1.93l-1.81,-2.24l-1.11,2.13l-4.33,1.62l0.44,1.97l-2.42,-0.14l-1.33,-1.17l-1.93,2.64l-3.09,1.98l-2.28,2.35l-3.92,1.06l-2.06,1.69l-3.02,0.98l1.49,-1.67l-0.59,-1.41l2.22,-2.45l-1.48,-1.93l-2.44,1.3l-3.17,2.54l-1.73,2.34l-2.75,0.17l-1.43,1.68l1.48,2.41l2.29,0.58l0.09,1.58l2.22,1.02l3.14,-2.51l2.49,1.37l1.81,0.09l0.46,1.84l-3.97,0.97l-1.31,1.87l-2.73,1.73l-1.44,2.39l3.02,1.86l1.1,3.31l1.71,3.05l1.9,2.53l-0.05,2.43l-1.76,0.89l0.67,1.73l1.65,1l-0.43,2.61l-0.71,2.52l-1.57,0.28l-2.05,3.41l-2.27,4.09l-2.6,3.68l-3.86,2.82l-3.9,2.55l-3.16,0.35l-1.71,1.34l-0.97,-0.98l-1.59,1.5l-3.92,1.5l-2.97,0.46l-0.96,3.15l-1.55,0.17l-0.74,-2.16l0.66,-1.16l-3.76,-0.96l-1.33,0.49l-2.82,-0.78l-1.33,-1.22l0.44,-1.74l-2.56,-0.55l-1.35,-1.14l-2.39,1.62l-2.73,0.35l-2.24,-0.02l-1.5,0.74l-1.45,0.44l0.42,3.43l-1.5,-0.08l-0.25,-0.7l-0.08,-1.24l-2.06,0.87l-1.21,-0.55l-2.08,-1.13l0.82,-2.51l-1.78,-0.59l-0.67,-2.8l-2.96,0.51l0.34,-3.63l2.66,-2.58l0.11,-2.57l-0.08,-2.4l-1.22,-0.75l-0.94,-1.86l-1.64,0.24l-3.02,-0.47l0.95,-1.33l-1.31,-1.99l-2,1.35L740.4,378l-3.23,2.03l-2.55,2.36l-2.26,0.39l-1.23,-0.85l-1.48,-0.08l-2,-0.73l-1.51,0.8l-1.85,2.34l-0.24,-2.48l-1.71,0.66l-3.27,-0.31l-3.17,-0.73l-2.28,-1.39l-2.18,-0.63l-0.94,-1.53l-1.58,-0.46l-2.83,-2.09l-2.25,-0.99l-1.16,0.77l-3.9,-2.26l-2.75,-2.07l-0.79,-3.63l2.01,0.44l0.09,-1.69l-1.12,-1.71l0.28,-2.74l-3.01,-3.99l-4.61,-1.39l-0.83,-2.66l-2.07,-1.63l-0.5,-1.01l-0.42,-2.01l0.1,-1.38l-1.7,-0.81l-0.92,0.36l-0.71,-3.32l0.8,-0.83l-0.39,-0.85l2.68,-1.73l1.94,-0.72l2.97,0.49l1.06,-2.35l3.6,-0.44l1,-1.48l4.42,-2.03l0.39,-0.85l-0.22,-2.17l1.92,-1l-2.52,-6.75l5.55,-1.58l1.44,-0.89l2.02,-7.26l5.56,1.35l1.56,-1.86l0.13,-4.19l2.33,-0.39l2.13,-2.83l1.1,-0.35l0.74,2.97l2.36,2.23l4,1.57l1.93,3.32l-1.08,4.73l1.01,1.73l3.33,0.68l3.78,0.55l3.39,2.45l1.73,0.43l1.28,3.57l1.65,2.27l3.09,-0.09l5.79,0.85l3.73,-0.53l2.77,0.57l4.15,2.29l3.39,0l1.24,1.16l3.26,-2.01l4.53,-1.31l4.2,-0.14l3.28,-1.34l2.01,-2.05l1.96,-1.3l-0.45,-1.28l-0.9,-1.5l1.47,-2.54l1.58,0.36l2.88,0.8l2.79,-2.1l4.28,-1.55l2.05,-2.66l1.97,-1.16l4.07,-0.54l2.21,0.46l0.31,-1.45l-2.54,-2.89l-2.25,-1.33l-2.16,1.54l-2.77,-0.65l-1.59,0.53l-0.72,-1.71l1.98,-4.23l1.37,-3.25l3.37,1.63l3.95,-2.74l-0.03,-1.93l2.53,-4.73l1.56,-1.45l-0.04,-2.52l-1.54,-1.1l2.32,-2.31l3.48,-0.84l3.72,-0.13l4.2,1.39l2.46,1.71l1.73,4.61l1.05,1.94l0.98,2.73L833.19,302.89z" },
    { id: "CO", title: "Colombia", d: "M263.92,463.81L262.72,463.15L261.34,462.23L260.54,462.67L258.16,462.28L257.48,461.08L256.96,461.13L254.15,459.54L253.77,458.67L254.82,458.46L254.7,457.07L255.35,456.06L256.74,455.87L257.93,454.12L259,452.66L257.96,451.99L258.49,450.37L257.86,447.81L258.46,447.08L258.02,444.71L256.88,443.21L257.24,441.85L258.15,442.05L258.68,441.21L258.03,439.56L258.37,439.14L259.81,439.23L261.92,437.26L263.07,436.96L263.1,436.03L263.62,433.64L265.23,432.32L266.99,432.27L267.21,431.68L269.41,431.91L271.62,430.48L272.71,429.84L274.06,428.47L275.06,428.64L275.79,429.39L275.25,430.35L273.45,430.83L272.74,432.25L271.65,433.06L270.84,434.12L270.49,436.13L269.72,437.79L271.16,437.97L271.52,439.27L272.14,439.89L272.36,441.02L272.03,442.06L272.13,442.65L272.82,442.88L273.49,443.86L277.09,443.59L278.72,443.95L280.7,446.36L281.83,446.06L283.85,446.21L285.45,445.89L286.44,446.38L285.93,447.88L285.31,448.82L285.09,450.83L285.65,452.68L286.45,453.51L286.54,454.14L285.12,455.53L286.14,456.14L286.89,457.12L287.74,459.89L287.21,460.24L286.67,458.59L285.89,457.71L284.96,458.67L279.5,458.61L279.53,460.35L281.17,460.64L281.08,461.71L280.52,461.42L278.94,461.88L278.93,463.9L280.17,464.92L280.61,466.51L280.54,467.72L279.28,475.37L277.88,473.88L277.04,473.82L278.85,470.98L276.7,469.67L275.02,469.91L274.01,469.43L272.46,470.17L270.37,469.82L268.72,466.9L267.42,466.18L266.53,464.86L264.67,463.54z" },
    { id: "CR", title: "Costa Rica", d: "M242.63,440.4L241.11,439.77L240.54,439.18L240.86,438.69L240.76,438.07L239.98,437.39L238.88,436.84L237.91,436.48L237.73,435.65L236.99,435.14L237.17,435.97L236.61,436.64L235.97,435.86L235.07,435.58L234.69,435.01L234.71,434.15L235.08,433.25L234.29,432.85L234.93,432.31L235.35,431.94L237.2,432.69L237.84,432.32L238.73,432.56L239.2,433.14L240.02,433.33L240.69,432.73L241.41,434.27L242.49,435.41L243.81,436.62L242.72,436.87L242.74,438L243.32,438.42L242.9,438.76L243.01,439.27L242.78,439.84z" },
    { id: "CU", title: "Cuba", d: "M244.58,396.94L247.01,397.16L249.21,397.19L251.84,398.22L252.96,399.33L255.58,398.99L256.57,399.69L258.95,401.56L260.69,402.91L261.61,402.87L263.29,403.48L263.08,404.32L265.15,404.44L267.27,405.66L266.94,406.35L265.07,406.73L263.18,406.88L261.25,406.64L257.24,406.93L259.12,405.27L257.98,404.5L256.17,404.3L255.2,403.44L254.53,401.74L252.95,401.85L250.33,401.05L249.49,400.42L245.84,399.95L244.86,399.36L245.91,398.61L243.16,398.46L241.15,400.02L239.98,400.06L239.58,400.8L238.2,401.13L237,400.84L238.48,399.91L239.08,398.82L240.35,398.15L241.78,397.56L243.91,397.27z" },
    { id: "CY", title: "Cyprus", d: "M570.31,358.29L572.2,356.83L569.65,357.85L567.63,357.8L567.23,358.63L567.03,358.65L565.7,358.77L566.35,360.14L567.72,360.58L570.6,359.2L570.51,358.93z" },
    { id: "CZ", title: "Czech Republic", d: "M522.81,307.86L521.51,307.06L520.2,307.28L518.02,305.98L517.03,306.3L515.46,308.04L513.37,306.67L511.79,304.84L510.36,303.8L510.06,301.98L509.57,300.68L511.61,299.73L512.65,298.63L514.66,297.77L515.37,296.93L516.11,297.44L517.36,296.97L518.69,298.4L520.78,298.79L520.61,300L522.13,300.9L522.55,299.77L524.47,300.26L524.74,301.63L526.82,301.89L528.11,304.02L527.28,304.03L526.84,304.8L526.2,304.99L526.02,305.96L525.48,306.17L525.4,306.56L524.45,307L523.2,306.93z" },
    { id: "DE", title: "Germany", d: "M503.07,278.92L503.12,280.8L505.96,281.92L505.93,283.62L508.78,282.72L510.35,281.41L513.52,283.3L514.84,284.81L515.5,287.2L514.72,288.45L515.73,290.1L516.43,292.55L516.21,294.11L517.36,296.97L516.11,297.44L515.37,296.93L514.66,297.77L512.65,298.63L511.61,299.73L509.57,300.68L510.06,301.98L510.36,303.8L511.79,304.84L513.37,306.67L512.39,308.62L511.38,309.16L511.78,311.88L511.51,312.58L510.64,311.73L509.3,311.61L507.29,312.35L504.82,312.17L504.42,313.26L503,312.12L502.15,312.34L499.15,311.08L498.57,311.98L496.19,311.95L496.54,308.97L497.96,306.07L493.92,305.29L492.6,304.16L492.76,302.27L492.2,301.29L492.52,298.32L492.04,293.63L493.73,293.63L494.44,291.92L495.14,287.69L494.61,286.11L495.16,285.11L497.5,284.85L498.02,285.89L499.93,283.56L499.29,281.77L499.16,279.02L501.28,279.66z" },
    { id: "DJ", title: "Djibouti", d: "M596.05,427.72L596.71,428.6L596.62,429.79L595.02,430.47L596.23,431.24L595.19,432.76L594.57,432.26L593.9,432.46L592.33,432.41L592.28,431.55L592.07,430.76L593.01,429.43L594,428.17L595.2,428.42z" },
    { id: "DK", title: "Denmark", d: "M510.83,275.84l-1.68,3.97l-2.93,-2.76l-0.39,-2.05l4.11,-1.66L510.83,275.84zM505.85,271.59l-0.69,1.9l-0.83,-0.55l-2.02,3.59l0.76,2.39l-1.79,0.74l-2.12,-0.64l-1.14,-2.72l-0.08,-5.12l0.47,-1.38l0.8,-1.54l2.47,-0.32l0.98,-1.43l2.26,-1.47l-0.1,2.68l-0.83,1.68l0.34,1.43L505.85,271.59z" },
    { id: "DO", title: "Dominican Republic", d: "M274.18,407.35L274.53,406.84L276.72,406.86L278.38,407.62L279.12,407.54L279.63,408.59L281.16,408.53L281.07,409.41L282.32,409.52L283.7,410.6L282.66,411.8L281.32,411.16L280.04,411.28L279.12,411.14L278.61,411.68L277.53,411.86L277.11,411.14L276.18,411.57L275.06,413.57L274.34,413.11L274.19,412.27L274.25,411.47L273.53,410.59L274.21,410.09L274.43,408.96z" },
    { id: "DZ", title: "Algeria", d: "M508.9,396.08L499.29,401.83L491.17,407.68L487.22,409L484.11,409.29L484.08,407.41L482.78,406.93L481.03,406.08L480.37,404.69L470.91,398.14L461.45,391.49L450.9,383.96L450.96,383.35L450.96,383.14L450.93,379.39L455.46,377.03L458.26,376.54L460.55,375.68L461.63,374.06L464.91,372.77L465.03,370.36L466.65,370.07L467.92,368.86L471.59,368.3L472.1,367.02L471.36,366.31L470.39,362.78L470.23,360.73L469.17,358.55L471.86,356.68L474.9,356.08L476.67,354.65L479.37,353.6L484.12,352.98L488.76,352.69L490.17,353.21L492.81,351.84L495.81,351.81L496.95,352.62L498.86,352.41L498.29,354.2L498.74,357.48L498.08,360.3L496.35,362.18L496.6,364.71L498.89,366.69L498.92,367.5L500.64,368.83L501.84,374.69L502.75,377.53L502.9,379.01L502.41,381.6L502.61,383.04L502.25,384.76L502.5,386.73L501.38,388.02L503.04,390.28L503.15,391.6L504.14,393.31L505.45,392.75L507.67,394.17z" },
    { id: "EC", title: "Ecuador", d: "M250.1,472.87L251.59,470.79L250.98,469.57L249.91,470.87L248.23,469.64L248.8,468.86L248.33,466.33L249.31,465.91L249.83,464.18L250.89,462.38L250.69,461.25L252.23,460.65L254.15,459.54L256.96,461.13L257.48,461.08L258.16,462.28L260.54,462.67L261.34,462.23L262.72,463.15L263.92,463.81L264.31,465.92L263.44,467.73L260.38,470.65L257.01,471.75L255.29,474.18L254.76,476.06L253.17,477.21L252,475.8L250.86,475.5L249.7,475.72L249.63,474.7L250.43,474.04z" },
    { id: "EE", title: "Estonia", d: "M543.42,264.71L543.75,261.59L542.72,262.26L540.94,260.36L540.69,257.25L544.24,255.72L547.77,254.91L550.81,255.83L553.71,255.66L554.13,256.62L552.14,259.76L552.97,264.72L551.77,266.38L549.45,266.37L547.04,264.43L545.81,263.78z" },
    { id: "EG", title: "Egypt", d: "M573.17,377.28L572.38,378.57L571.78,380.97L571.02,382.61L570.36,383.17L569.43,382.15L568.16,380.73L566.16,376.16L565.88,376.45L567.04,379.82L568.76,383L570.88,387.88L571.91,389.56L572.81,391.3L575.33,394.7L574.77,395.23L574.86,397.2L578.13,399.91L578.62,400.53L567.5,400.53L556.62,400.53L545.35,400.53L545.35,389.3L545.35,378.12L544.51,375.54L545.23,373.54L544.8,372.15L545.81,370.58L549.54,370.53L552.24,371.39L555.02,372.36L556.32,372.86L558.48,371.83L559.63,370.9L562.11,370.63L564.1,371.04L564.87,372.66L565.52,371.59L567.76,372.36L569.95,372.55L571.33,371.73z" },
    { id: "EH", title: "Western Sahara", d: "M438.57,383.06L442.19,383.07L450.94,383.1L450.94,383.1L450.94,383.1L442.19,383.07L438.57,383.06L438.46,383.15L438.41,383.19L436.63,386.39L434.77,387.53L433.75,389.44L433.69,391.09L432.94,392.88L432,393.37L430.44,395.31L429.48,397.46L429.66,398.48L428.74,400.05L427.66,400.87L427.53,402.26L427.41,403.53L428.02,402.53L439,402.55L438.47,398.2L439.16,396.65L441.78,396.38L441.69,388.52L450.9,388.69L450.9,383.96L450.96,383.35L450.96,383.14z" },
    { id: "ER", title: "Eritrea", d: "M594,428.17L593.04,427.24L591.89,425.57L590.65,424.65L589.92,423.65L587.48,422.5L585.56,422.47L584.88,421.86L583.24,422.54L581.54,421.23L580.66,423.38L577.4,422.78L577.1,421.63L578.31,417.38L578.58,415.45L579.46,414.55L581.53,414.07L582.95,412.4L584.58,415.78L585.35,418.45L586.89,419.86L590.71,422.58L592.27,424.22L593.79,425.88L594.67,426.86L596.05,427.72L595.2,428.42z" },
    { id: "ES", title: "Spain", d: "M449.92,334.56L450.06,331.88L448.92,330.22L452.88,327.45L456.31,328.15L460.08,328.12L463.06,328.78L465.39,328.58L469.92,328.7L471.04,330.19L476.2,331.92L477.22,331.1L480.38,332.82L483.63,332.33L483.78,334.52L481.12,337.01L477.53,337.79L477.28,339.03L475.55,341.06L474.47,344.02L475.56,346.07L473.94,347.67L473.34,349.97L471.22,350.67L469.23,353.36L465.68,353.41L463,353.35L461.25,354.57L460.18,355.88L458.8,355.59L457.77,354.42L456.97,352.42L454.35,351.88L454.12,350.72L455.16,349.4L455.54,348.44L454.58,347.38L455.35,345.03L454.23,342.86L455.44,342.56L455.55,340.84L456.01,340.31L456.04,337.43L457.34,336.43L456.56,334.55L454.92,334.42L454.44,334.89L452.79,334.9L452.08,333.06L450.94,333.61z" },
    { id: "ET", title: "Ethiopia", d: "M581.54,421.23L583.24,422.54L584.88,421.86L585.56,422.47L587.48,422.5L589.92,423.65L590.65,424.65L591.89,425.57L593.04,427.24L594,428.17L593.01,429.43L592.07,430.76L592.28,431.55L592.33,432.41L593.9,432.46L594.57,432.26L595.19,432.76L594.58,433.77L595.62,435.33L596.65,436.69L597.72,437.7L606.89,441.04L609.25,441.02L601.32,449.44L597.67,449.56L595.17,451.53L593.38,451.58L592.61,452.46L590.69,452.46L589.56,451.52L587,452.69L586.17,453.85L584.3,453.63L583.68,453.31L583.02,453.38L582.14,453.36L578.59,450.98L576.64,450.98L575.68,450.07L575.68,448.5L574.22,448.03L572.57,444.98L571.29,444.33L570.79,443.21L569.37,441.84L567.65,441.64L568.61,440.03L570.09,439.96L570.51,439.1L570.48,436.57L571.31,433.61L572.63,432.81L572.92,431.65L574.12,429.48L575.81,428.06L576.95,425.25L577.4,422.78L580.66,423.38z" },
    { id: "FK", title: "Falkland Islands", d: "M303.66,633.13L307.02,630.44L309.41,631.56L311.09,629.77L313.33,631.78L312.49,633.36L308.7,634.72L307.44,633.13L305.06,635.18z" },
    { id: "FI", title: "Finland", d: "M555.42,193.1L555.01,198.5L559.31,203.49L556.72,208.97L559.98,216.93L558.09,222.69L560.62,227.55L559.47,231.69L563.62,235.95L562.56,239.05L559.96,242.5L553.96,249.91L548.87,250.36L543.94,252.43L539.38,253.61L537.75,250.54L535.04,248.67L535.66,242.95L534.3,237.54L535.64,233.96L538.18,230.02L544.59,223L546.47,221.61L546.17,218.77L542.27,215.55L541.33,212.85L541.25,201.73L536.88,196.58L533.14,192.77L534.82,190.69L537.94,194.84L541.6,194.45L544.61,196.32L547.28,192.88L548.66,187.03L553.01,184.25L556.61,187.51z" },
    { id: "FJ", title: "Fiji", d: "M980.53,508.61l-0.35,1.4l-0.23,0.16l-1.78,0.72l-1.79,0.61l-0.36,-1.09l1.4,-0.6l0.89,-0.16l1.64,-0.91L980.53,508.61zM974.69,512.92l-1.27,-0.36l-1.08,1l0.27,1.29l1.55,0.36l1.74,-0.4l0.46,-1.53l-0.96,-0.84L974.69,512.92z" },
    { id: "FR", title: "France", d: "M502.06,333.54l-0.93,2.89l-1.27,-0.76l-0.65,-2.53l0.57,-1.41l1.81,-1.45L502.06,333.54zM485.31,300.19l1.96,2.06l1.44,-0.34l2.45,1.97l0.63,0.37l0.81,-0.09l1.32,1.12l4.04,0.79l-1.42,2.9l-0.36,2.98l-0.77,0.71l-1.28,-0.38l0.09,1.05l-2.05,2.3l-0.04,1.84l1.34,-0.63l0.96,1.77l-0.12,1.13l0.83,1.5l-0.97,1.21l0.72,3.04l1.52,0.49l-0.32,1.68l-2.54,2.17l-5.53,-1.04l-4.08,1.24l-0.32,2.29l-3.25,0.49l-3.15,-1.72l-1.02,0.82l-5.16,-1.73l-1.12,-1.49l1.45,-2.32l0.53,-7.88l-2.89,-4.26l-2.07,-2.09l-4.29,-1.6l-0.28,-3.07l3.64,-0.92l4.71,1.09l-0.89,-4.84l2.65,1.85l6.53,-3.37l0.84,-3.61l2.45,-0.9l0.41,1.56l1.3,0.07L485.31,300.19z" },
    { id: "GA", title: "Gabon", d: "M506.36,474.48L503.48,471.66L501.62,469.36L499.92,466.48L500.01,465.56L500.62,464.66L501.3,462.64L501.87,460.57L502.82,460.41L506.89,460.44L506.87,457.09L508.2,456.9L509.91,457.28L511.57,456.92L511.92,457.07L511.71,458.29L512.5,459.72L514.58,459.5L515.28,460.05L514.07,463.28L515.39,464.92L515.7,467.1L515.35,468.95L514.49,470.27L512.01,470.15L510.51,468.81L510.29,470.05L508.4,470.39L507.44,471.09L508.49,472.94z" },
    { id: "GB", title: "United Kingdom", d: "M459.38,281l-1.5,3.29l-2.12,-0.98l-1.73,0.07l0.58,-2.57l-0.58,-2.6l2.35,-0.2L459.38,281zM466.83,260.24l-3,5.73l2.86,-0.72l3.07,0.03l-0.73,4.22l-2.52,4.53l2.9,0.32l0.22,0.52l2.5,5.79l1.92,0.77l1.73,5.41l0.8,1.84l3.4,0.88l-0.34,2.93l-1.43,1.33l1.12,2.33l-2.52,2.33l-3.75,-0.04l-4.77,1.21l-1.31,-0.87l-1.85,2.06l-2.59,-0.5l-1.97,1.67l-1.49,-0.87l4.11,-4.64l2.51,-0.97l-0.02,0l-4.38,-0.75l-0.79,-1.8l2.93,-1.41l-1.54,-2.48l0.53,-3.06l4.17,0.42l0,0l0.41,-2.74l-1.88,-2.95l-0.04,-0.07l-3.4,-0.85l-0.67,-1.32l1.02,-2.2l-0.92,-1.37l-1.51,2.34l-0.16,-4.8l-1.42,-2.59l1.02,-5.36l2.18,-4.31l2.24,0.42L466.83,260.24z" },
    { id: "GE", title: "Georgia", d: "M591.76,335.85L592.18,334.25L591.48,331.68L589.86,330.27L588.31,329.83L587.28,328.66L587.62,328.2L589.99,328.86L594.12,329.48L597.94,331.31L598.43,332.02L600.13,331.42L602.75,332.22L603.6,333.77L605.37,334.64L604.64,335.15L606.02,337.17L605.64,337.6L604.13,337.38L602.04,336.32L601.35,336.92L597.45,337.5L594.75,335.68z" },
    { id: "GF", title: "French Guiana", d: "M327.89,456.41l-1.07,1.06l-1.34,0.2l-0.38,-0.78l-0.63,-0.12l-0.87,0.76l-1.22,-0.57l0.71,-1.19l0.24,-1.27l0.48,-1.2l-1.09,-1.65l-0.22,-1.91l1.46,-2.41l0.95,0.31l2.06,0.66l2.97,2.36l0.46,1.14l-1.66,2.55L327.89,456.41z" },
    { id: "GH", title: "Ghana", d: "M478.23,446.84L473.83,448.48L472.27,449.44L469.74,450.25L467.24,449.46L467.37,448.35L466.16,445.94L466.89,442.77L468.07,440.41L467.33,436.4L466.94,434.27L467.01,432.66L471.88,432.53L473.12,432.74L474.02,432.28L475.32,432.5L475.11,433.39L476.28,434.85L476.28,436.9L476.55,439.12L477.25,440.15L476.63,442.68L476.85,444.08L477.6,445.86z" },
    { id: "GL", title: "Greenland", d: "M344.13,23.91L353.55,10.3L363.39,11.37L366.96,2.42L376.87,0L399.27,3.15L416.81,21.74L411.63,30.04L400.9,30.97L385.81,33L387.22,36.64L397.15,34.4L405.59,41.31L411.04,35.19L413.37,42.34L410.29,53.31L417.43,46.38L431.04,38.83L439.45,42.64L441.02,50.76L429.59,63.42L428.01,67.32L419.05,70.18L425.54,70.97L422.26,82.48L420,92.07L420.09,107.33L423.46,115.67L419.08,116.18L414.47,120.06L419.64,126.36L420.3,135.98L417.3,137L420.93,146.15L414.71,146.9L417.96,151.04L417.04,154.55L413.09,156.06L409.18,156.09L412.69,162.57L412.73,166.7L407.18,162.87L405.74,165.36L409.52,167.65L413.2,173.13L414.26,180.08L409.26,181.7L407.1,178.44L403.63,173.46L404.59,179.33L401.34,183.74L408.72,184.09L412.59,184.54L405.07,191.57L397.45,197.7L389.25,200.31L386.16,200.35L383.26,203.22L379.36,210.85L373.33,215.74L371.39,216.03L367.65,217.7L363.63,219.29L361.22,223.41L361.18,227.97L359.77,232.13L355.19,237.08L356.32,241.79L355.06,246.64L353.63,252.2L349.68,252.54L345.54,247.91L339.93,247.88L337.21,244.7L335.34,238.9L330.48,231.22L329.06,227.07L328.68,221.18L324.79,214.91L325.8,209.74L323.93,207.21L326.7,198.56L330.92,195.71L332.03,192.45L332.62,186.19L329.41,189.05L327.89,190.24L325.37,191.38L321.93,188.77L321.74,183.22L322.84,178.74L325.44,178.62L331.16,180.87L326.34,175.44L323.83,172.43L321.04,173.67L318.7,171.48L321.83,162.98L320.13,159.45L317.9,152.71L314.53,141.8L310.96,137.63L310.99,133L303.46,126.31L297.51,125.46L290.02,125.93L283.18,126.79L279.92,123.04L275.05,115.38L282.41,111.41L288.06,110.73L276.06,107.37L269.74,101.93L270.13,96.59L280.74,89.72L291.01,82.56L292.09,76.92L284.53,71.16L286.97,64.52L296.68,52.19L300.76,50.21L299.59,41.64L306.23,36.4L314.85,33.19L323.47,33.01L326.53,39.31L333.97,27.99L340.66,35.77L344.59,37.36L350.42,43.77L343.75,33z" },
    { id: "GM", title: "Gambia", d: "M428.03,426.43L428.39,425.16L431.44,425.07L432.08,424.4L432.97,424.35L434.07,425.06L434.94,425.07L435.87,424.59L436.43,425.41L435.22,426.06L434,426.01L432.8,425.4L431.76,426.06L431.26,426.09L430.58,426.49z" },
    { id: "GN", title: "Guinea", d: "M451.59,441.91L450.8,441.84L450.23,442.97L449.43,442.96L448.89,442.36L449.07,441.23L447.9,439.51L447.17,439.82L446.57,439.89L445.8,440.05L445.83,439.02L445.38,438.28L445.47,437.46L444.86,436.27L444.08,435.26L441.84,435.26L441.19,435.79L440.41,435.85L439.93,436.46L439.61,437.25L438.11,438.49L436.88,436.82L435.79,435.71L435.07,435.35L434.37,434.78L434.06,433.53L433.65,432.91L432.83,432.44L434.08,431.06L434.93,431.11L435.66,430.63L436.28,430.63L436.72,430.25L436.48,429.31L436.79,429.01L436.84,428.04L438.19,428.07L440.21,428.77L440.83,428.7L441.04,428.39L442.56,428.61L442.97,428.45L443.13,429.5L443.58,429.49L444.31,429.11L444.77,429.21L445.55,429.93L446.75,430.16L447.52,429.54L448.43,429.16L449.1,428.76L449.66,428.84L450.28,429.46L450.62,430.25L451.77,431.44L451.19,432.17L451.08,433.09L451.68,432.81L452.03,433.15L451.88,433.99L452.74,434.81L452.18,435.02L451.95,435.99L452.6,437.15L453.29,439.41L452.25,439.75L451.98,440.14L452.2,440.68L452.04,441.91z" },
    { id: "GQ", title: "Equatorial Guinea", d: "M501.87,460.57L501.34,460.15L502.31,457.02L506.87,457.09L506.89,460.44L502.82,460.41z" },
    { id: "GR", title: "Greece", d: "M541.7,356.71l1.53,1.16l2.18,-0.19l2.09,0.24l-0.07,0.6l1.53,-0.41l-0.35,1.01l-4.04,0.29l0.03,-0.56l-3.42,-0.67L541.7,356.71zM549.85,335.75l-0.87,2.33l-0.67,0.41l-1.71,-0.1l-1.46,-0.35l-3.4,0.96l1.94,2.06l-1.42,0.59l-1.56,0l-1.48,-1.88l-0.53,0.8l0.63,2.18l1.4,1.7l-1.06,0.79l1.56,1.65l1.39,1.03l0.04,2l-1.36,-1.15l-1.24,0.21l0.83,1.8l-0.92,0.19l-1,-0.69l1.2,3.95l-0.58,0l-0.45,-1.25l-0.57,-0.02l-0.26,1.32l-0.45,-0.3l0.1,-0.74l-0.56,-1.04h-0.64l0.12,0.84l-0.25,0.27l-0.62,-0.54l-0.38,-1.01l0.52,-0.57l-0.36,-0.74l-0.41,-0.38l-0.42,-0.09l-0.49,-0.94l0.58,-0.52l0.36,-0.48l0.56,0.1l0.25,-0.41l0.59,-0.16l0.68,0.46l0.55,0.17l0.39,-0.62l-0.94,-0.08l-0.56,-0.19l-1.25,0.28l-1.22,0.05l-1.09,-1.64l-0.18,-0.25l0.17,-0.64l-1.42,-1.15l-0.19,-1.03l1.3,-1.76l0.17,-1.19l0.91,-0.53l0.06,-0.97l1.83,-0.33l1.07,-0.81l1.52,0.07l0.46,-0.65l0.53,-0.12l2.07,0.11l2.25,-1.02l1.98,1.3l2.55,-0.35l0.03,-1.86L549.85,335.75z" },
    { id: "GT", title: "Guatemala", d: "M222.64,424.75L221.2,424.25L219.45,424.2L218.17,423.63L216.66,422.45L216.73,421.61L217.05,420.93L216.66,420.39L218.01,418.03L221.6,418.02L221.68,417.04L221.22,416.86L220.91,416.23L219.87,415.56L218.83,414.58L220.1,414.58L220.1,412.93L222.72,412.93L225.31,412.96L225.29,415.27L225.07,418.55L225.9,418.55L226.82,419.08L227.06,418.64L227.88,419.01L226.61,420.12L225.28,420.93L225.08,421.48L225.3,422.04L224.72,422.78L224.06,422.95L224.21,423.29L223.69,423.61L222.73,424.33z" },
    { id: "GW", title: "Guinea-Bissau", d: "M432.83,432.44L431.33,431.25L430.15,431.07L429.51,430.26L429.52,429.83L428.67,429.23L428.49,428.62L429.98,428.15L430.91,428.24L431.66,427.92L436.84,428.04L436.79,429.01L436.48,429.31L436.72,430.25L436.28,430.63L435.66,430.63L434.93,431.11L434.08,431.06z" },
    { id: "GY", title: "Guyana", d: "M307.7,440L309.54,441.03L311.28,442.86L311.35,444.31L312.41,444.38L313.91,445.74L315.02,446.72L314.57,449.24L312.87,449.97L313.02,450.62L312.5,452.07L313.75,454.09L314.64,454.1L315.01,455.67L316.72,458.09L316.04,458.19L314.49,457.96L313.58,458.7L312.31,459.19L311.43,459.31L311.12,459.85L309.74,459.71L308.01,458.41L307.81,457.12L307.09,455.71L307.54,453.33L308.32,452.35L307.67,451.05L306.71,450.63L307.08,449.4L306.42,448.76L304.96,448.88L303.07,446.76L303.83,445.99L303.77,444.69L305.5,444.24L306.19,443.72L305.23,442.68L305.48,441.65z" },
    { id: "HN", title: "Honduras", d: "M230.43,426.9L229.95,426.01L229.09,425.76L229.29,424.61L228.91,424.3L228.33,424.1L227.1,424.44L227,424.05L226.15,423.59L225.55,423.02L224.72,422.78L225.3,422.04L225.08,421.48L225.28,420.93L226.61,420.12L227.88,419.01L228.17,419.13L228.79,418.62L229.59,418.58L229.85,418.81L230.29,418.67L231.59,418.93L232.89,418.85L233.79,418.53L234.12,418.21L235.01,418.36L235.68,418.56L236.41,418.49L236.97,418.24L238.25,418.64L238.7,418.7L239.55,419.24L240.36,419.89L241.38,420.33L242.12,421.13L241.16,421.07L240.77,421.46L239.8,421.84L239.09,421.84L238.47,422.21L237.91,422.08L237.43,421.64L237.14,421.72L236.78,422.41L236.51,422.38L236.46,422.98L235.48,423.77L234.97,424.11L234.68,424.47L233.85,423.89L233.25,424.65L232.66,424.63L232,424.7L232.06,426.11L231.65,426.13L231.3,426.79z" },
    { id: "HR", title: "Croatia", d: "M528.05,318.93L528.73,320.48L529.62,321.62L528.54,323.11L527.27,322.23L525.33,322.29L522.92,321.63L521.61,321.72L521.01,322.54L520,321.63L519.41,323.27L520.79,325.1L521.39,326.31L522.68,327.76L523.75,328.61L524.81,330.22L527.29,331.66L526.98,332.3L524.35,330.9L522.72,329.52L520.16,328.38L517.8,325.53L518.37,325.23L517.09,323.59L517.03,322.25L515.23,321.63L514.37,323.34L513.54,322.01L513.61,320.63L513.71,320.57L515.66,320.71L516.18,320.03L517.13,320.68L518.23,320.76L518.22,319.64L519.19,319.23L519.47,317.61L521.7,316.53L522.59,317.03L524.69,318.76L527,319.53z" },
    { id: "HT", title: "Haiti", d: "M270.04,406.75L271.75,406.88L274.18,407.35L274.43,408.96L274.21,410.09L273.53,410.59L274.25,411.47L274.19,412.27L272.33,411.77L271.01,411.97L269.3,411.76L267.99,412.31L266.48,411.39L266.73,410.44L269.31,410.85L271.43,411.09L272.44,410.43L271.16,409.16L271.18,408.03L269.41,407.57z" },
    { id: "HU", title: "Hungary", d: "M520.68,315.11L521.61,312.46L521.07,311.57L522.65,311.56L522.86,309.85L524.29,310.92L525.32,311.38L527.68,310.87L527.9,310.03L529.02,309.9L530.38,309.25L530.68,309.52L532,309L532.66,308L533.58,307.75L536.58,309.03L537.18,308.6L538.73,309.74L538.93,310.86L537.22,311.73L535.89,314.53L534.2,317.29L531.95,318.05L530.2,317.88L528.05,318.93L527,319.53L524.69,318.76L522.59,317.03L521.7,316.53L521.15,315.16z" },
    { id: "ID", title: "Indonesia", d: "M813.72,492.06l-1.18,0.05l-3.72,-1.98l2.61,-0.56l1.47,0.86l0.98,0.86L813.72,492.06zM824.15,491.78l-2.4,0.62l-0.34,-0.34l0.25,-0.96l1.21,-1.72l2.77,-1.12l0.28,0.56l0.05,0.86L824.15,491.78zM805.83,486.01l1.01,0.75l1.73,-0.23l0.7,1.2l-3.24,0.57l-1.94,0.38l-1.51,-0.02l0.96,-1.62l1.54,-0.02L805.83,486.01zM819.86,486l-0.41,1.56l-4.21,0.8l-3.73,-0.35l-0.01,-1.03l2.23,-0.59l1.76,0.84l1.87,-0.21L819.86,486zM779.82,482.31l5.37,0.28l0.62,-1.16l5.2,1.35l1.02,1.82l4.21,0.51l3.44,1.67l-3.2,1.07l-3.08,-1.13l-2.54,0.08l-2.91,-0.21l-2.62,-0.51l-3.25,-1.07l-2.06,-0.28l-1.17,0.35l-5.11,-1.16l-0.49,-1.21l-2.57,-0.21l1.92,-2.68l3.4,0.17l2.26,1.09l1.16,0.21L779.82,482.31zM853,480.73l-1.44,1.91l-0.27,-2.11l0.5,-1.01l0.59,-0.95l0.64,0.82L853,480.73zM832.04,473.02l-1.05,0.93l-1.94,-0.51l-0.55,-1.2l2.84,-0.13L832.04,473.02zM841.08,472.01l1.02,2.13l-2.37,-1.15l-2.34,-0.23l-1.58,0.18l-1.94,-0.1l0.67,-1.53l3.46,-0.12L841.08,472.01zM851.37,466.59l0.78,4.51l2.9,1.67l2.34,-2.96l3.22,-1.68l2.49,0l2.4,0.97l2.08,1l3.01,0.53l0.05,9.1l0.05,9.16l-2.5,-2.31l-2.85,-0.57l-0.69,0.8l-3.55,0.09l1.19,-2.29l1.77,-0.78l-0.73,-3.05l-1.35,-2.35l-5.44,-2.37l-2.31,-0.23l-4.21,-2.58l-0.83,1.36l-1.08,0.25l-0.64,-1.02l-0.01,-1.21l-2.14,-1.37l3.02,-1l2,0.05l-0.24,-0.74l-4.1,-0.01l-1.11,-1.66l-2.5,-0.51l-1.19,-1.38l3.78,-0.67l1.44,-0.91l4.5,1.14L851.37,466.59zM826.41,459.43l-2.25,2.76l-2.11,0.54l-2.7,-0.54l-4.67,0.14l-2.45,0.4l-0.4,2.11l2.51,2.48l1.51,-1.26l5.23,-0.95l-0.23,1.28l-1.22,-0.4l-1.22,1.63l-2.47,1.08l2.65,3.57l-0.51,0.96l2.52,3.22l-0.02,1.84l-1.5,0.82l-1.1,-0.98l1.36,-2.29l-2.75,1.08l-0.7,-0.77l0.36,-1.08l-2.02,-1.64l0.21,-2.72l-1.87,0.85l0.24,3.25l0.11,4l-1.78,0.41l-1.2,-0.82l0.8,-2.57l-0.43,-2.69l-1.18,-0.02l-0.87,-1.91l1.16,-1.83l0.4,-2.21l1.41,-4.2l0.59,-1.15l2.38,-2.07l2.19,0.82l3.54,0.39l3.22,-0.12l2.77,-2.02L826.41,459.43zM836.08,460.23l-0.15,2.43l-1.45,-0.27l-0.43,1.69l1.16,1.47l-0.79,0.33l-1.13,-1.76l-0.83,-3.56l0.56,-2.23l0.93,-1.01l0.2,1.52l1.66,0.24L836.08,460.23zM805.76,458.29l3.14,2.58l-3.32,0.33l-0.94,1.9l0.12,2.52l-2.7,1.91L802,470.3l-1.08,4.27l-0.41,-0.99l-3.19,1.26l-1.11,-1.71l-2,-0.16l-1.4,-0.89l-3.33,1l-1.02,-1.35l-1.84,0.15l-2.31,-0.32l-0.43,-3.74l-1.4,-0.77l-1.35,-2.38l-0.39,-2.44l0.33,-2.58l1.67,-1.85l0.47,1.86l1.92,1.57l1.81,-0.57l1.79,0.2l1.63,-1.41l1.34,-0.24l2.65,0.78l2.29,-0.59l1.44,-3.88l1.08,-0.97l0.97,-3.17l3.22,0l2.43,0.47l-1.59,2.52l2.06,2.64L805.76,458.29zM771.95,479.71l-3.1,0.06l-2.36,-2.34l-3.6,-2.28l-1.2,-1.69l-2.12,-2.27l-1.39,-2.09l-2.13,-3.9l-2.46,-2.32l-0.82,-2.39l-1.03,-2.17l-2.53,-1.75l-1.47,-2.39l-2.11,-1.56l-2.92,-3.08l-0.25,-1.42l1.81,0.11l4.34,0.54l2.48,2.73l2.17,1.89l1.55,1.16l2.66,3l2.85,0.04l2.36,1.91l1.62,2.33l2.13,1.27l-1.12,2.27l1.61,0.97l1.01,0.07l0.48,1.94l0.98,1.56l2.06,0.25l1.36,1.76l-0.7,3.47L771.95,479.71z" },
    { id: "IE", title: "Ireland", d: "M457.88,284.29L458.34,287.65L456.22,291.77L451.25,294.45L447.28,293.77L449.55,288.99L448.09,284.22L451.9,280.47L454.02,278.2L454.6,280.8L454.02,283.37L455.76,283.31z" },
    { id: "IL", title: "Israel", d: "M575.41,366.82L574.92,367.87L573.9,367.41L573.32,369.61L574.02,369.97L573.31,370.43L573.18,371.29L574.5,370.84L574.57,372.11L573.17,377.28L571.33,371.73L572.14,370.65L571.95,370.46L572.69,368.93L573.26,366.43L573.66,365.59L573.74,365.56L574.68,365.56L574.94,364.98L575.69,364.93L575.73,366.3L575.35,366.8z" },
    { id: "IN", title: "India", d: "M693.5,357.44L696.51,361.43L696.23,364.17L697.34,365.88L697.25,367.57L695.24,367.13L696.03,370.76L698.78,372.82L702.68,375.09L700.9,376.55L699.81,379.54L702.53,380.74L705.17,382.29L708.83,384.06L712.67,384.47L714.29,386.06L716.45,386.35L719.83,387.08L722.16,387.03L722.48,385.79L722.11,383.8L722.33,382.45L724.04,381.78L724.28,384.26L724.33,384.89L726.88,386.08L728.65,385.59L731.01,385.8L733.3,385.71L733.5,383.78L732.36,382.78L734.62,382.38L737.17,380.03L740.4,378L742.75,378.78L744.75,377.44L746.07,379.42L745.12,380.76L748.14,381.23L748.36,382.43L747.37,383.01L747.6,384.94L745.6,384.37L741.97,386.53L742.05,388.31L740.51,390.91L740.36,392.41L739.11,394.93L736.92,394.23L736.81,397.38L736.18,398.41L736.48,399.69L735.09,400.41L733.62,395.61L732.84,395.62L732.38,397.56L730.85,395.98L731.71,394.25L732.97,394.07L734.26,391.48L732.65,390.95L730.04,391L727.38,390.58L727.13,388.43L725.79,388.27L723.57,386.93L722.58,389.04L724.6,390.67L722.85,391.82L722.23,392.94L723.95,393.76L723.48,395.6L724.45,397.88L724.89,400.36L724.48,401.46L722.58,401.42L719.12,402.04L719.28,404.29L717.78,406.05L713.75,408.05L710.61,411.51L708.5,413.36L705.71,415.27L705.71,416.61L704.31,417.33L701.78,418.36L700.47,418.52L699.63,420.72L700.21,424.47L700.36,426.84L699.18,429.55L699.16,434.38L697.71,434.52L696.44,436.67L697.29,437.6L694.73,438.4L693.79,440.32L692.66,441.13L690.01,438.5L688.71,434.54L687.63,431.68L686.65,430.34L685.16,427.6L684.47,424.02L683.98,422.22L681.43,418.25L680.27,412.61L679.43,408.84L679.44,405.26L678.9,402.46L674.82,404.25L672.84,403.89L669.18,400.26L670.53,399.17L669.7,397.99L666.41,395.41L668.28,393.37L674.45,393.38L673.89,390.74L672.32,389.18L672,386.79L670.16,385.39L673.25,382.09L676.51,382.33L679.44,379.01L681.2,375.75L683.92,372.51L683.88,370.18L686.27,368.27L684,366.64L683.03,364.39L682.04,361.44L683.41,359.98L687.67,360.81L690.79,360.3z" },
    { id: "IQ", title: "Iraq", d: "M602.61,355.77L604.44,356.81L604.66,358.81L603.24,359.98L602.59,362.62L604.54,365.8L607.97,367.62L609.42,370.12L608.96,372.49L609.85,372.49L609.88,374.22L611.43,375.91L609.77,375.76L607.88,375.49L605.82,378.57L600.61,378.31L592.71,371.82L588.53,369.53L585.15,368.64L584.02,364.6L590.23,361.1L591.29,356.98L591.02,354.46L592.56,353.6L594,351.42L595.2,350.87L598.46,351.33L599.45,352.22L600.79,351.63z" },
    { id: "IR", title: "Iran", d: "M626.44,351.53L628.91,350.85L630.9,348.83L632.77,348.93L634,348.27L636,348.6L639.1,350.39L641.34,350.78L644.54,353.87L646.63,353.99L646.88,356.9L645.74,361.15L644.97,363.6L646.19,364.09L644.99,365.92L645.91,368.56L646.13,370.65L648.25,371.2L648.48,373.3L645.94,376.23L647.32,377.91L648.45,379.84L651.13,381.24L651.21,384.01L652.55,384.52L652.78,385.96L648.74,387.57L647.68,391.17L642.41,390.24L639.35,389.53L636.19,389.12L634.99,385.31L633.65,384.75L631.49,385.31L628.67,386.82L625.24,385.79L622.41,383.38L619.71,382.48L617.84,379.47L615.77,375.2L614.26,375.72L612.48,374.65L611.43,375.91L609.88,374.22L609.85,372.49L608.96,372.49L609.42,370.12L607.97,367.62L604.54,365.8L602.59,362.62L603.24,359.98L604.66,358.81L604.44,356.81L602.61,355.77L600.79,351.63L599.26,348.8L599.8,347.71L598.93,343.59L600.85,342.56L601.29,343.93L602.71,345.59L604.63,346.06L605.65,345.96L608.96,343.3L610.01,343.03L610.83,344.1L609.87,345.88L611.62,347.74L612.31,347.57L613.2,350.18L615.86,350.91L617.81,352.67L621.79,353.27L626.17,352.35z" },
    { id: "IS", title: "Iceland", d: "M434.57,212.43L433.93,216.91L437.09,221.51L433.45,226.52L425.36,230.9L422.94,232.05L419.25,231.12L411.43,229.11L414.19,226.27L408.09,223.07L413.05,221.79L412.93,219.82L407.05,218.25L408.94,213.78L413.19,212.75L417.56,217.43L421.82,213.68L425.35,215.64L429.92,211.93z" },
    { id: "IT", title: "Italy", d: "M518.77,347.88l-1.01,2.78l0.42,1.09l-0.59,1.79l-2.14,-1.31l-1.43,-0.38l-3.91,-1.79l0.39,-1.82l3.28,0.32l2.86,-0.39L518.77,347.88zM501.08,337.06l1.68,2.62l-0.39,4.81l-1.27,-0.23l-1.14,1.2l-1.06,-0.95l-0.11,-4.38l-0.64,-2.1l1.54,0.19L501.08,337.06zM509.95,315.46l4.01,1.05l-0.3,1.99l0.67,1.71l-2.23,-0.58l-2.28,1.42l0.16,1.97l-0.34,1.12l0.92,1.99l2.63,1.95l1.41,3.17l3.12,3.05l2.2,-0.02l0.68,0.83l-0.79,0.74l2.51,1.35l2.06,1.12l2.4,1.92l0.29,0.68l-0.52,1.31l-1.56,-1.7l-2.44,-0.6l-1.18,2.36l2.03,1.34l-0.33,1.88l-1.17,0.21l-1.5,3.06l-1.17,0.27l0.01,-1.08l0.57,-1.91l0.61,-0.77l-1.09,-2.09l-0.86,-1.83l-1.16,-0.46l-0.83,-1.58l-1.8,-0.67l-1.21,-1.49l-2.07,-0.24l-2.19,-1.68l-2.56,-2.45l-1.91,-2.19l-0.87,-3.8l-1.4,-0.45l-2.28,-1.29l-1.29,0.53l-1.62,1.8l-1.17,0.28l0.32,-1.68l-1.52,-0.49l-0.72,-3.04l0.97,-1.21l-0.83,-1.5l0.12,-1.13l1.21,0.86l1.35,-0.19l1.57,-1.36l0.49,0.64l1.34,-0.13l0.61,-1.63l2.07,0.51l1.24,-0.68l0.22,-1.67l1.7,0.58l0.33,-0.78l2.77,-0.71L509.95,315.46z" },
    { id: "JM", title: "Jamaica", d: "M257.76,410.96L259.65,411.22L261.14,411.93L261.6,412.73L259.63,412.78L258.78,413.27L257.21,412.8L255.61,411.73L255.94,411.06L257.12,410.86z" },
    { id: "JO", title: "Jordan", d: "M574.92,367.87L575.41,366.82L578.53,368.14L584.02,364.6L585.15,368.64L584.62,369.13L579,370.78L581.8,374.04L580.87,374.58L580.41,375.67L578.27,376.11L577.6,377.27L576.38,378.25L573.26,377.74L573.17,377.28L574.57,372.11L574.5,370.84L574.92,369.88z" },
    { id: "JP", title: "Japan", d: "M852.76,362.01l0.36,1.15l-1.58,2.03l-1.15,-1.07l-1.44,0.78l-0.74,1.95l-1.83,-0.95l0.02,-1.58l1.55,-2l1.59,0.39l1.15,-1.42L852.76,362.01zM870.53,351.73l-1.06,2.78l0.49,1.73l-1.46,2.42l-3.58,1.6l-4.93,0.21l-4,3.84l-1.88,-1.29L854,360.5l-4.88,0.75l-3.32,1.59l-3.28,0.06l2.84,2.46l-1.87,5.61l-1.81,1.37l-1.36,-1.27l0.69,-2.96l-1.77,-0.96l-1.14,-2.28l2.65,-1.03l1.47,-2.11l2.82,-1.75l2.06,-2.33l5.58,-1.02l3,0.7l2.93,-6.17l1.87,1.67l4.11,-3.51l1.59,-1.38l1.76,-4.38l-0.48,-4.1l1.18,-2.33l2.98,-0.68l1.53,5.11l-0.08,2.94l-2.59,3.6L870.53,351.73zM878.76,325.8l1.97,0.83l1.98,-1.65l0.62,4.35l-4.16,1.05l-2.46,3.76l-4.41,-2.58l-1.53,4.12l-3.12,0.06l-0.39,-3.74l1.39,-2.94l3,-0.21l0.82,-5.38l0.83,-3.09l3.29,4.12L878.76,325.8z" },
    { id: "KE", title: "Kenya", d: "M590.19,465.78L591.85,468.07L589.89,469.19L589.2,470.35L588.14,470.55L587.75,472.52L586.85,473.64L586.3,475.5L585.17,476.42L581.15,473.63L580.95,472.01L570.79,466.34L570.31,466.03L570.29,463.08L571.09,461.95L572.47,460.11L573.49,458.08L572.26,454.88L571.93,453.48L570.6,451.54L572.32,449.87L574.22,448.03L575.68,448.5L575.68,450.07L576.64,450.98L578.59,450.98L582.14,453.36L583.02,453.38L583.68,453.31L584.3,453.63L586.17,453.85L587,452.69L589.56,451.52L590.69,452.46L592.61,452.46L590.16,455.63z" },
    { id: "KG", title: "Kyrgyzstan", d: "M674.22,333.11L674.85,331.45L676.69,330.91L681.31,332.22L681.74,329.98L683.33,329.18L687.33,330.79L688.35,330.37L693,330.47L697.16,330.87L698.56,332.24L700.29,332.79L699.9,333.65L695.48,335.68L694.48,337.16L690.88,337.6L689.82,339.95L686.85,339.46L684.92,340.18L682.24,341.9L682.63,342.75L681.83,343.58L676.53,344.13L673.06,342.96L670.02,343.24L670.29,341.14L673.34,341.75L674.37,340.62L676.5,340.98L680.09,338.34L676.77,336.38L674.77,337.31L672.7,335.91L675.05,333.48z" },
    { id: "KH", title: "Cambodia", d: "M765.44,433.6L764.3,432.12L762.89,429.18L762.22,425.73L764.02,423.35L767.64,422.8L770.27,423.21L772.58,424.34L773.85,422.35L776.34,423.41L776.99,425.33L776.64,428.75L771.93,430.94L773.16,432.67L770.22,432.87L767.79,434.01z" },
    { id: "KP", title: "North Korea", d: "M841.55,332.62L841.94,333.29L840.88,333.06L839.66,334.33L838.82,335.61L838.93,338.28L837.48,339.09L836.98,339.74L835.92,340.82L834.05,341.42L832.84,342.4L832.75,343.97L832.42,344.37L833.54,344.95L835.13,346.53L834.72,347.39L833.53,347.62L831.55,347.79L830.46,349.39L829.2,349.27L829.03,349.59L827.67,348.92L827.33,349.58L826.51,349.87L826.41,349.21L825.68,348.89L824.93,348.32L825.7,346.75L826.36,346.33L826.11,345.68L826.82,343.74L826.63,343.15L825,342.75L823.68,341.78L825.96,339.43L829.05,337.45L830.98,334.8L832.31,335.97L834.73,336.11L834.29,334.14L838.62,332.51L839.74,330.38z" },
    { id: "KR", title: "South Korea", d: "M835.13,346.53L837.55,350.71L838.24,352.98L838.26,356.96L837.21,358.84L834.67,359.5L832.43,360.91L829.9,361.2L829.59,359.35L830.11,356.78L828.87,353.18L830.95,352.59L829.03,349.59L829.2,349.27L830.46,349.39L831.55,347.79L833.53,347.62L834.72,347.39z" },
    { id: "XK", title: "Kosovo", d: "M533.47,333.92L533.34,334.69L532.98,334.66L532.8,333.29L532.13,332.91L531.53,331.89L532.05,331.04L532.72,330.76L533.11,329.5L533.61,329.28L534.01,329.82L534.54,330.06L534.9,330.67L535.36,330.85L535.91,331.55L536.31,331.53L535.99,332.46L535.66,332.91L535.75,333.19L535.12,333.33z" },
    { id: "KW", title: "Kuwait", d: "M609.77,375.76L610.35,377.17L610.1,377.9L611,380.31L609.02,380.39L608.32,378.88L605.82,378.57L607.88,375.49z" },
    { id: "KZ", title: "Kazakhstan", d: "M674.22,333.11L672.61,333.81L668.92,336.42L667.69,339.07L666.64,339.09L665.88,337.34L662.31,337.22L661.74,334.16L660.37,334.13L660.58,330.33L657.23,327.53L652.42,327.83L649.13,328.39L646.45,324.89L644.16,323.41L639.81,320.57L639.29,320.22L632.07,322.57L632.18,336.7L630.74,336.88L628.78,333.95L626.88,332.89L623.7,333.68L622.46,334.93L622.3,334.01L622.99,332.44L622.46,331.12L619.21,329.82L617.94,326.35L616.4,325.37L616.3,324.09L619.03,324.46L619.14,321.58L621.52,320.94L623.97,321.53L624.48,317.62L623.98,315.11L621.17,315.31L618.79,314.31L615.54,316.1L612.93,316.96L611.5,316.3L611.79,314.2L610,311.44L607.92,311.55L605.54,308.72L607.16,305.5L606.34,304.63L608.57,299.86L611.46,302.39L611.81,299.2L617.59,294.35L621.97,294.23L628.16,297.33L631.47,299.12L634.45,297.25L638.89,297.17L642.48,299.46L643.3,298.15L647.23,298.34L647.94,296.23L643.39,293.14L646.08,290.91L645.56,289.66L648.25,288.45L646.23,285.25L647.51,283.63L658,281.97L659.37,280.78L666.39,278.99L668.91,276.95L673.95,278.01L674.83,283.02L677.76,281.86L681.36,283.49L681.13,286.07L683.82,285.8L690.84,281.31L689.82,282.81L693.4,286.47L699.66,298.05L701.16,295.72L705.02,298.28L709.05,297.14L710.59,297.94L711.94,300.49L713.9,301.33L715.1,303.18L718.71,302.6L720.2,305.23L718.06,308.06L715.73,308.46L715.6,312.64L714.04,314.5L708.48,313.15L706.46,320.41L705.02,321.3L699.47,322.88L701.99,329.63L700.07,330.63L700.29,332.79L698.56,332.24L697.16,330.87L693,330.47L688.35,330.37L687.33,330.79L683.33,329.18L681.74,329.98L681.31,332.22L676.69,330.91L674.85,331.45z" },
    { id: "LA", title: "Lao People's Democratic Republic", d: "M770.27,423.21L771.18,421.91L771.31,419.47L769.04,416.94L768.86,414.07L766.73,411.69L764.61,411.49L764.05,412.51L762.4,412.59L761.56,412.08L758.61,413.82L758.54,411.2L759.23,408.09L757.34,407.96L757.18,406.18L755.96,405.26L756.56,404.16L758.95,402.22L759.2,402.92L760.69,403L760.27,399.57L761.72,399.13L763.36,401.5L764.62,404.22L768.07,404.25L769.16,406.84L767.37,407.61L766.56,408.68L769.92,410.44L772.25,413.9L774.02,416.47L776.14,418.49L776.85,420.53L776.34,423.41L773.85,422.35L772.58,424.34z" },
    { id: "LB", title: "Lebanon", d: "M575.69,364.93L574.94,364.98L574.68,365.56L573.74,365.56L574.74,362.83L576.13,360.45L576.19,360.33L577.45,360.51L577.91,361.83L576.38,363.1z" },
    { id: "LK", title: "Sri Lanka", d: "M704.57,442.37L704.15,445.29L702.98,446.09L700.54,446.73L699.2,444.5L698.71,440.47L699.98,435.89L701.91,437.46L703.22,439.44z" },
    { id: "LR", title: "Liberia", d: "M453.63,451.22L452.89,451.24L450,449.91L447.46,447.78L445.07,446.25L443.18,444.44L443.85,443.54L444,442.73L445.26,441.2L446.57,439.89L447.17,439.82L447.9,439.51L449.07,441.23L448.89,442.36L449.43,442.96L450.23,442.97L450.8,441.84L451.59,441.91L451.46,442.73L451.74,444.09L451.13,445.33L451.95,446.1L452.84,446.29L454.03,447.46L454.11,448.57L453.84,448.92z" },
    { id: "LS", title: "Lesotho", d: "M556.5,547.75L557.48,548.71L556.62,550.27L556.14,551.32L554.58,551.82L554.06,552.86L553.06,553.18L550.96,550.69L552.45,548.66L553.97,547.41L555.28,546.77z" },
    { id: "LT", title: "Lithuania", d: "M538.99,282.09L538.76,280.87L539.06,279.54L537.82,278.77L534.89,277.91L534.29,273.75L537.5,272.2L542.2,272.53L544.96,272.03L545.35,273.08L546.84,273.4L549.54,275.82L549.8,278.02L547.5,279.59L546.85,282.31L543.81,284.11L541.1,284.07L540.43,282.61z" },
    { id: "LU", title: "Luxembourg", d: "M492.2,301.29L492.76,302.27L492.6,304.16L491.79,304.26L491.16,303.88L491.47,301.45z" },
    { id: "LV", title: "Latvia", d: "M534.29,273.75L534.39,269.94L535.77,266.7L538.41,264.92L540.63,268.8L542.88,268.7L543.42,264.71L545.81,263.78L547.04,264.43L549.45,266.37L551.77,266.38L553.12,267.57L553.35,270.06L554.26,273.05L551.24,274.98L549.54,275.82L546.84,273.4L545.35,273.08L544.96,272.03L542.2,272.53L537.5,272.2z" },
    { id: "LY", title: "Libya", d: "M516.89,397.93L514.91,399.05L513.33,397.39L508.9,396.08L507.67,394.17L505.45,392.75L504.14,393.31L503.15,391.6L503.04,390.28L501.38,388.02L502.5,386.73L502.25,384.76L502.61,383.04L502.41,381.6L502.9,379.01L502.75,377.53L501.84,374.69L503.21,373.94L503.45,372.56L503.15,371.21L505.08,369.95L505.94,368.9L507.31,367.95L507.47,365.4L510.76,366.55L511.94,366.26L514.28,366.82L518,368.29L519.31,371.21L521.83,371.85L525.78,373.21L528.77,374.82L530.14,373.98L531.48,372.49L530.83,369.98L531.71,368.38L533.73,366.83L535.66,366.38L539.45,367.06L540.41,368.54L541.45,368.55L542.34,369.11L545.13,369.5L545.81,370.58L544.8,372.15L545.23,373.54L544.51,375.54L545.35,378.12L545.35,389.3L545.35,400.53L545.35,406.49L542.13,406.5L542.09,407.74L530.91,402.04L519.72,396.27z" },
    { id: "MA", title: "Morocco", d: "M450.96,383.14L450.93,379.39L455.46,377.03L458.26,376.54L460.55,375.68L461.63,374.06L464.91,372.77L465.03,370.36L466.65,370.07L467.92,368.86L471.59,368.3L472.1,367.02L471.36,366.31L470.39,362.78L470.23,360.73L469.17,358.55L467.95,358.51L465.05,357.76L462.38,358L460.69,356.54L458.63,356.52L457.74,358.63L455.87,362.14L453.79,363.53L450.98,365.06L449.18,367.3L448.8,369.04L447.73,371.86L448.43,375.89L446.09,378.57L444.69,379.42L442.48,381.59L439.87,381.94L438.57,383.06L442.19,383.07L450.94,383.1L450.94,383.1L450.94,383.1L442.19,383.07L438.57,383.06z" },
    { id: "MD", title: "Moldova", d: "M549.89,309.45L550.56,308.83L552.42,308.41L554.49,309.72L555.64,309.88L556.91,311L556.71,312.41L557.73,313.08L558.13,314.8L559.11,315.84L558.92,316.44L559.44,316.86L558.7,317.15L557.04,317.04L556.77,316.47L556.18,316.8L556.38,317.52L555.61,318.81L555.12,320.18L554.42,320.62L553.91,318.79L554.21,317.07L554.12,315.28L552.5,312.84L551.61,311.09L550.74,309.85z" },
    { id: "ME", title: "Montenegro", d: "M530.77,332.23L530.6,331.51L529.38,333.38L529.57,334.57L528.98,334.28L528.2,333.05L526.98,332.3L527.29,331.66L527.7,329.56L528.61,328.67L529.14,328.31L529.88,328.97L530.29,329.51L531.21,329.92L532.28,330.71L532.05,331.04L531.53,331.89z" },
    { id: "MG", title: "Madagascar", d: "M614.17,498.4L614.91,499.61L615.6,501.5L616.06,504.96L616.78,506.31L616.5,507.69L616.01,508.55L615.05,506.85L614.53,507.71L615.06,509.85L614.81,511.09L614.04,511.76L613.86,514.24L612.76,517.66L611.38,521.75L609.64,527.42L608.57,531.63L607.3,535.18L605.02,535.91L602.57,537.22L600.96,536.43L598.73,535.33L597.96,533.71L597.77,531L596.79,528.58L596.53,526.41L597.03,524.25L598.32,523.73L598.33,522.74L599.67,520.48L599.92,518.6L599.27,517.2L598.74,515.35L598.52,512.65L599.5,511.02L599.87,509.17L601.27,509.07L602.84,508.47L603.87,507.95L605.11,507.91L606.7,506.26L609.01,504.48L609.85,503.04L609.47,501.81L610.66,502.16L612.21,500.17L612.26,498.45L613.19,497.17z" },
    { id: "MK", title: "Macedonia", d: "M532.98,334.66L533.34,334.69L533.47,333.92L535.12,333.33L535.75,333.19L536.71,332.97L538,332.91L539.41,334.12L539.61,336.59L539.07,336.71L538.61,337.36L537.09,337.29L536.02,338.1L534.19,338.42L533.03,337.52L532.63,335.93z" },
    { id: "ML", title: "Mali", d: "M441.13,422.22L442.07,421.7L442.54,420L443.43,419.93L445.39,420.73L446.97,420.16L448.05,420.35L448.48,419.71L459.73,419.67L460.35,417.64L459.86,417.28L458.51,404.6L457.16,391.54L461.45,391.49L470.91,398.14L480.37,404.69L481.03,406.08L482.78,406.93L484.08,407.41L484.11,409.29L487.22,409L487.23,415.75L485.69,417.69L485.45,419.48L482.96,419.93L479.14,420.18L478.1,421.21L476.3,421.32L474.51,421.33L473.81,420.78L472.26,421.19L469.64,422.39L469.11,423.29L466.93,424.57L466.55,425.31L465.38,425.89L464.02,425.51L463.25,426.21L462.84,428.17L460.61,430.53L460.68,431.49L459.91,432.7L460.1,434.34L458.94,434.76L458.29,435.12L457.85,433.91L457.04,434.23L456.56,434.17L456.04,435L453.88,434.97L453.1,434.55L452.74,434.81L451.88,433.99L452.03,433.15L451.68,432.81L451.08,433.09L451.19,432.17L451.77,431.44L450.62,430.25L450.28,429.46L449.66,428.84L449.1,428.76L448.43,429.16L447.52,429.54L446.75,430.16L445.55,429.93L444.77,429.21L444.31,429.11L443.58,429.49L443.13,429.5L442.97,428.45L443.1,427.56L442.86,426.46L441.81,425.65L441.26,424.01z" },
    { id: "MM", title: "Myanmar", d: "M754.36,405.95L752.72,407.23L750.74,407.37L749.46,410.56L748.28,411.09L749.64,413.66L751.42,415.79L752.56,417.71L751.54,420.23L750.57,420.76L751.24,422.21L753.11,424.49L753.43,426.09L753.38,427.42L754.48,430.02L752.94,432.67L751.58,435.58L751.31,433.48L752.17,431.3L751.23,429.62L751.46,426.51L750.32,425.03L749.41,421.59L748.9,417.93L747.69,415.53L745.84,416.99L742.65,419.05L741.08,418.79L739.34,418.12L740.31,414.51L739.73,411.77L737.53,408.38L737.87,407.31L736.23,406.93L734.24,404.51L734.06,402.1L735.04,402.56L735.09,400.41L736.48,399.69L736.18,398.41L736.81,397.38L736.92,394.23L739.11,394.93L740.36,392.41L740.51,390.91L742.05,388.31L741.97,386.53L745.6,384.37L747.6,384.94L747.37,383.01L748.36,382.43L748.14,381.23L749.78,380.99L750.72,382.85L751.94,383.6L752.03,386L751.91,388.57L749.26,391.15L748.92,394.78L751.88,394.28L752.55,397.08L754.33,397.67L753.51,400.17L755.59,401.3L756.81,401.85L758.86,400.98L758.95,402.22L756.56,404.16L755.96,405.26z" },
    { id: "MN", title: "Mongolia", d: "M721.29,304.88L724.25,304.14L729.6,300.4L733.87,298.33L736.3,299.68L739.23,299.74L741.1,301.79L743.9,301.94L747.96,303.03L750.68,300L749.54,297.4L752.45,292.74L755.59,294.61L758.13,295.14L761.43,296.29L761.96,299.61L765.95,301.45L768.6,300.64L772.14,300.07L774.95,300.65L777.7,302.74L779.4,304.94L782,304.9L785.53,305.59L788.11,304.53L791.8,303.82L795.91,300.76L797.59,301.23L799.06,302.69L802.4,302.33L801.04,305.58L799.06,309.8L799.78,311.51L801.37,310.98L804.13,311.63L806.29,310.09L808.54,311.42L811.08,314.31L810.77,315.76L808.56,315.3L804.49,315.84L802.51,317L800.46,319.66L796.18,321.21L793.39,323.31L790.51,322.51L788.93,322.15L787.46,324.69L788.35,326.19L788.81,327.47L786.84,328.77L784.83,330.82L781.56,332.15L777.35,332.3L772.82,333.61L769.56,335.62L768.32,334.46L764.93,334.46L760.78,332.17L758.01,331.6L754.28,332.13L748.49,331.28L745.4,331.37L743.76,329.1L742.48,325.53L740.75,325.1L737.36,322.65L733.58,322.1L730.25,321.42L729.24,319.69L730.32,314.96L728.39,311.65L724.39,310.08L722.03,307.85z" },
    { id: "MR", title: "Mauritania", d: "M441.13,422.22L439.28,420.24L437.58,418.11L435.72,417.34L434.38,416.49L432.81,416.52L431.45,417.15L430.05,416.9L429.09,417.83L428.85,416.27L429.63,414.83L429.98,412.08L429.67,409.17L429.33,407.7L429.61,406.23L428.89,404.81L427.41,403.53L428.02,402.53L439,402.55L438.47,398.2L439.16,396.65L441.78,396.38L441.69,388.52L450.9,388.69L450.9,383.96L461.45,391.49L457.16,391.54L458.51,404.6L459.86,417.28L460.35,417.64L459.73,419.67L448.48,419.71L448.05,420.35L446.97,420.16L445.39,420.73L443.43,419.93L442.54,420L442.07,421.7z" },
    { id: "MW", title: "Malawi", d: "M572.15,495.69L571.37,497.85L572.15,501.57L573.13,501.53L574.14,502.45L575.31,504.53L575.55,508.25L574.34,508.86L573.48,510.87L571.65,509.08L571.45,507.04L572.04,505.69L571.87,504.54L570.77,503.81L569.99,504.07L568.38,502.69L566.91,501.95L567.76,499.29L568.64,498.3L568.1,495.94L568.66,493.64L569.14,492.87L568.43,490.47L567.11,489.21L569.85,489.73L570.42,490.51L571.37,491.83z" },
    { id: "MX", title: "Mexico", d: "M202.89,388.72L201.8,391.43L201.31,393.64L201.1,397.72L200.83,399.19L201.32,400.83L202.19,402.3L202.75,404.61L204.61,406.82L205.26,408.51L206.36,409.96L209.34,410.75L210.5,411.97L212.96,411.15L215.09,410.86L217.19,410.33L218.96,409.82L220.74,408.62L221.41,406.89L221.64,404.4L222.13,403.53L224.02,402.74L226.99,402.05L229.47,402.15L231.17,401.9L231.84,402.53L231.75,403.97L230.24,405.74L229.58,407.55L230.09,408.06L229.67,409.34L228.97,411.63L228.26,410.88L227.67,410.93L227.14,410.97L226.14,412.74L225.63,412.39L225.29,412.53L225.31,412.96L222.72,412.93L220.1,412.93L220.1,414.58L218.83,414.58L219.87,415.56L220.91,416.23L221.22,416.86L221.68,417.04L221.6,418.02L218.01,418.03L216.66,420.39L217.05,420.93L216.73,421.61L216.66,422.45L213.49,419.34L212.04,418.4L209.75,417.64L208.19,417.85L205.93,418.94L204.52,419.23L202.54,418.47L200.44,417.91L197.82,416.58L195.72,416.17L192.54,414.82L190.2,413.42L189.49,412.64L187.92,412.47L185.05,411.54L183.88,410.2L180.87,408.53L179.47,406.66L178.8,405.21L179.73,404.92L179.44,404.07L180.09,403.3L180.1,402.26L179.16,400.92L178.9,399.72L177.96,398.2L175.49,395.18L172.67,392.79L171.31,390.88L168.9,389.62L168.39,388.86L168.82,386.94L167.39,386.21L165.73,384.69L165.03,382.5L163.52,382.24L161.9,380.58L160.58,379.03L160.46,378.03L158.95,375.61L157.96,373.13L158,371.88L155.97,370.59L155.04,370.73L153.44,369.83L152.99,371.16L153.45,372.72L153.72,375.15L154.69,376.48L156.77,378.69L157.23,379.44L157.66,379.66L158.02,380.76L158.52,380.71L159.09,382.75L159.94,383.55L160.53,384.66L162.3,386.26L163.23,389.15L164.06,390.5L164.84,391.94L164.99,393.56L166.34,393.66L167.47,395.05L168.49,396.41L168.42,396.95L167.24,398.06L166.74,398.05L166,396.2L164.17,394.47L162.15,392.99L160.71,392.21L160.8,389.96L160.38,388.28L159.04,387.32L157.11,385.93L156.74,386.33L156.04,385.51L154.31,384.76L152.66,382.93L152.86,382.69L154.01,382.87L155.05,381.69L155.16,380.26L153,377.99L151.36,377.1L150.32,375.09L149.28,372.97L147.98,370.36L146.84,367.4L150.03,367.15L153.59,366.79L153.33,367.43L157.56,369.04L163.96,371.35L169.54,371.32L171.76,371.32L171.76,369.97L176.62,369.97L177.64,371.14L179.08,372.17L180.74,373.6L181.67,375.29L182.37,377.05L183.82,378.02L186.15,378.98L187.91,376.45L190.21,376.39L192.18,377.67L193.59,379.85L194.56,381.71L196.21,383.51L196.83,385.7L197.62,387.17L199.8,388.13L201.79,388.81z" },
    { id: "MY", title: "Malaysia", d: "M758.65,446.07l0.22,1.44l1.85,-0.33l0.92,-1.15l0.64,0.26l1.66,1.69l1.18,1.87l0.16,1.88l-0.3,1.27l0.27,0.96l0.21,1.65l0.99,0.77l1.1,2.46l-0.05,0.94l-1.99,0.19l-2.65,-2.06l-3.32,-2.21l-0.33,-1.42l-1.62,-1.87l-0.39,-2.31l-1.01,-1.52l0.31,-2.04l-0.62,-1.19l0.49,-0.5L758.65,446.07zM807.84,450.9l-2.06,0.95l-2.43,-0.47l-3.22,0l-0.97,3.17l-1.08,0.97l-1.44,3.88l-2.29,0.59l-2.65,-0.78l-1.34,0.24l-1.63,1.41l-1.79,-0.2l-1.81,0.57l-1.92,-1.57l-0.47,-1.86l2.05,0.96l2.17,-0.52l0.56,-2.36l1.2,-0.53l3.36,-0.6l2.01,-2.21l1.38,-1.77l1.28,1.45l0.59,-0.95l1.34,0.09l0.16,-1.78l0.13,-1.38l2.16,-1.95l1.41,-2.19l1.13,-0.01l1.44,1.42l0.13,1.22l1.85,0.78l2.34,0.84l-0.2,1.1l-1.88,0.14L807.84,450.9z" },
    { id: "MZ", title: "Mozambique", d: "M572.15,495.69L574.26,495.46L577.63,496.26L578.37,495.9L580.32,495.83L581.32,494.98L583,495.02L586.06,493.92L588.29,492.28L588.75,493.55L588.63,496.38L588.98,498.88L589.09,503.36L589.58,504.76L588.75,506.83L587.66,508.84L585.87,510.64L583.31,511.75L580.15,513.16L576.98,516.31L575.9,516.85L573.94,518.94L572.79,519.63L572.55,521.75L573.88,524L574.43,525.76L574.47,526.66L574.96,526.51L574.88,529.47L574.43,530.88L575.09,531.4L574.67,532.67L573.5,533.76L571.19,534.8L567.82,536.46L566.59,537.61L566.83,538.91L567.54,539.12L567.3,540.76L565.18,540.74L564.94,539.36L564.52,537.97L564.28,536.86L564.78,533.43L564.05,531.26L562.71,527L565.66,523.59L566.4,521.44L566.83,521.17L567.14,519.43L566.69,518.55L566.81,516.35L567.36,514.31L567.35,510.62L565.9,509.68L564.56,509.47L563.96,508.75L562.66,508.14L560.32,508.2L560.14,507.12L559.87,505.07L568.38,502.69L569.99,504.07L570.77,503.81L571.87,504.54L572.04,505.69L571.45,507.04L571.65,509.08L573.48,510.87L574.34,508.86L575.55,508.25L575.31,504.53L574.14,502.45L573.13,501.53L572.15,501.57L571.37,497.85z" },
    { id: "NA", title: "Namibia", d: "M521.08,546.54L519,544.15L517.9,541.85L517.28,538.82L516.59,536.57L515.65,531.85L515.59,528.22L515.23,526.58L514.14,525.34L512.69,522.87L511.22,519.3L510.61,517.45L508.32,514.58L508.15,512.33L509.5,511.78L511.18,511.28L513,511.37L514.67,512.69L515.09,512.48L526.46,512.36L528.4,513.76L535.19,514.17L540.34,512.98L542.64,512.31L544.46,512.48L545.56,513.14L545.59,513.38L544.01,514.04L543.15,514.05L541.37,515.2L540.29,513.99L535.97,515.02L533.88,515.11L533.8,525.68L531.04,525.79L531.04,534.65L531.03,546.17L528.53,547.8L527.03,548.03L525.26,547.43L524,547.2L523.53,545.84L522.42,544.97z" },
    { id: "NC", title: "New Caledonia", d: "M940.08,523.48L942.38,525.34L943.83,526.72L942.77,527.45L941.22,526.63L939.22,525.28L937.41,523.69L935.56,521.59L935.17,520.58L936.37,520.63L937.95,521.64L939.18,522.65z" },
    { id: "NE", title: "Niger", d: "M481.29,429.88L481.36,427.93L478.12,427.28L478.04,425.9L476.46,424.03L476.08,422.72L476.3,421.32L478.1,421.21L479.14,420.18L482.96,419.93L485.45,419.48L485.69,417.69L487.23,415.75L487.22,409L491.17,407.68L499.29,401.83L508.9,396.08L513.33,397.39L514.91,399.05L516.89,397.93L517.58,402.6L518.63,403.38L518.68,404.33L519.84,405.35L519.23,406.63L518.15,412.61L518.01,416.4L514.43,419.14L513.22,422.94L514.39,424L514.38,425.85L516.18,425.92L515.9,427.26L515.11,427.43L515.02,428.33L514.49,428.4L512.6,425.27L511.94,425.15L509.75,426.75L507.58,425.92L506.07,425.75L505.26,426.15L503.61,426.07L501.96,427.29L500.53,427.36L497.14,425.88L495.81,426.58L494.38,426.53L493.33,425.45L490.51,424.38L487.5,424.72L486.77,425.34L486.38,426.99L485.57,428.14L485.38,430.68L483.24,429.04L482.23,429.05z" },
    { id: "NG", title: "Nigeria", d: "M499.09,450.08L496.18,451.08L495.11,450.94L494.03,451.56L491.79,451.5L490.29,449.75L489.37,447.73L487.38,445.89L485.27,445.92L482.8,445.92L482.96,441.39L482.89,439.6L483.42,437.83L484.28,436.96L485.64,435.21L485.35,434.45L485.9,433.31L485.27,431.63L485.38,430.68L485.57,428.14L486.38,426.99L486.77,425.34L487.5,424.72L490.51,424.38L493.33,425.45L494.38,426.53L495.81,426.58L497.14,425.88L500.53,427.36L501.96,427.29L503.61,426.07L505.26,426.15L506.07,425.75L507.58,425.92L509.75,426.75L511.94,425.15L512.6,425.27L514.49,428.4L515.02,428.33L516.13,429.47L515.82,429.98L515.67,430.93L513.31,433.13L512.57,434.94L512.17,436.41L511.58,437.04L511.01,439.01L509.51,440.17L509.08,441.59L508.45,442.73L508.19,443.89L506.26,444.84L504.69,443.69L503.62,443.73L501.95,445.37L501.14,445.4L499.81,448.1z" },
    { id: "NI", title: "Nicaragua", d: "M234.93,432.31L233.96,431.41L232.65,430.26L232.03,429.3L230.85,428.41L229.44,427.12L229.75,426.68L230.22,427.11L230.43,426.9L231.3,426.79L231.65,426.13L232.06,426.11L232,424.7L232.66,424.63L233.25,424.65L233.85,423.89L234.68,424.47L234.97,424.11L235.48,423.77L236.46,422.98L236.51,422.38L236.78,422.41L237.14,421.72L237.43,421.64L237.91,422.08L238.47,422.21L239.09,421.84L239.8,421.84L240.77,421.46L241.16,421.07L242.12,421.13L241.88,421.41L241.74,422.05L242.02,423.1L241.38,424.08L241.08,425.23L240.98,426.5L241.14,427.23L241.21,428.52L240.78,428.8L240.52,430.02L240.71,430.77L240.13,431.5L240.27,432.26L240.69,432.73L240.02,433.33L239.2,433.14L238.73,432.56L237.84,432.32L237.2,432.69L235.35,431.94z" },
    { id: "NL", title: "Netherlands", d: "M492.28,285.98L494.61,286.11L495.14,287.69L494.44,291.92L493.73,293.63L492.04,293.63L492.52,298.32L490.97,297.28L489.2,295.33L486.6,296.26L484.55,295.91L485.99,294.67L488.45,287.93z" },
    { id: "NO", title: "Norway", d: "M554.23,175.61l8.77,6.24l-3.61,2.23l3.07,5.11l-4.77,3.19l-2.26,0.72l1.19,-5.59l-3.6,-3.25l-4.35,2.78l-1.38,5.85l-2.67,3.44l-3.01,-1.87l-3.66,0.38l-3.12,-4.15l-1.68,2.09l-1.74,0.32l-0.41,5.08l-5.28,-1.22l-0.74,4.22l-2.69,-0.03l-1.85,5.24l-2.8,7.87l-4.35,9.5l1.02,2.23l-0.98,2.55l-2.78,-0.11l-1.82,5.91l0.17,8.04l1.79,2.98l-0.93,6.73l-2.33,3.81l-1.24,3.15l-1.88,-3.35l-5.54,6.27l-3.74,1.24l-3.88,-2.71l-1,-5.86l-0.89,-13.26l2.58,-3.88l7.4,-5.18l5.54,-6.59l5.13,-9.3l6.74,-13.76l4.7,-5.67l7.71,-9.89l6.15,-3.59l4.61,0.44l4.27,-6.99l5.11,0.38L554.23,175.61z" },
    { id: "NP", title: "Nepal", d: "M722.33,382.45L722.11,383.8L722.48,385.79L722.16,387.03L719.83,387.08L716.45,386.35L714.29,386.06L712.67,384.47L708.83,384.06L705.17,382.29L702.53,380.74L699.81,379.54L700.9,376.55L702.68,375.09L703.84,374.31L706.09,375.31L708.92,377.4L710.49,377.86L711.43,379.39L713.61,380.02L715.89,381.41L719.06,382.14z" },
    { id: "NZ", title: "New Zealand", d: "M960.38,588.63l0.64,1.53l1.99,-1.5l0.81,1.57l0,1.57l-1.04,1.74l-1.83,2.8l-1.43,1.54l1.03,1.86l-2.16,0.05l-2.4,1.46l-0.75,2.57l-1.59,4.03l-2.2,1.8l-1.4,1.16l-2.58,-0.09l-1.82,-1.34l-3.05,-0.28l-0.47,-1.48l1.51,-2.96l3.53,-3.87l1.81,-0.73l2.01,-1.47l2.4,-2.01l1.68,-1.98l1.25,-2.81l1.06,-0.95l0.42,-2.07l1.97,-1.7L960.38,588.63zM964.84,571.61l2.03,3.67l0.06,-2.38l1.27,0.95l0.42,2.65l2.26,1.15l1.89,0.28l1.6,-1.35l1.42,0.41l-0.68,3.15l-0.85,2.09l-2.14,-0.07l-0.75,1.1l0.26,1.56l-0.41,0.68l-1.06,1.97l-1.39,2.53l-2.17,1.49l-0.48,-0.98l-1.17,-0.54l1.62,-3.04l-0.92,-2.01l-3.02,-1.45l0.08,-1.31l2.03,-1.25l0.47,-2.74l-0.13,-2.28l-1.14,-2.34l0.08,-0.61l-1.34,-1.43l-2.21,-3.04l-1.17,-2.41l1.04,-0.27l1.53,1.89l2.18,0.89L964.84,571.61z" },
    { id: "OM", title: "Oman", d: "M640.29,403.18l-1.05,2.04l-1.27,-0.16l-0.58,0.71l-0.45,1.5l0.34,1.98l-0.26,0.36l-1.29,-0.01l-1.75,1.1l-0.27,1.43l-0.64,0.62l-1.74,-0.02l-1.1,0.74l0.01,1.18l-1.36,0.81l-1.55,-0.27l-1.88,0.98l-1.3,0.16l-0.92,-2.04l-2.19,-4.84l8.41,-2.96l1.87,-5.97l-1.29,-2.14l0.07,-1.22l0.82,-1.26l0.01,-1.25l1.27,-0.6l-0.5,-0.42l0.23,-2l1.43,-0.01l1.26,2.09l1.57,1.11l2.06,0.4l1.66,0.55l1.27,1.74l0.76,1l1,0.38l-0.01,0.67l-1.02,1.79l-0.45,0.84L640.29,403.18zM633.37,388.64L633,389.2l-0.53,-1.06l0.82,-1.06l0.35,0.27L633.37,388.64z" },
    { id: "PA", title: "Panama", d: "M256.88,443.21L255.95,442.4L255.35,440.88L256.04,440.13L255.33,439.94L254.81,439.01L253.41,438.23L252.18,438.41L251.62,439.39L250.48,440.09L249.87,440.19L249.6,440.78L250.93,442.3L250.17,442.66L249.76,443.08L248.46,443.22L247.97,441.54L247.61,442.02L246.68,441.86L246.12,440.72L244.97,440.54L244.24,440.21L243.04,440.21L242.95,440.82L242.63,440.4L242.78,439.84L243.01,439.27L242.9,438.76L243.32,438.42L242.74,438L242.72,436.87L243.81,436.62L244.81,437.63L244.75,438.23L245.87,438.35L246.14,438.12L246.91,438.82L248.29,438.61L249.48,437.9L251.18,437.33L252.14,436.49L253.69,436.65L253.58,436.93L255.15,437.03L256.4,437.52L257.31,438.36L258.37,439.14L258.03,439.56L258.68,441.21L258.15,442.05L257.24,441.85z" },
    { id: "PE", title: "Peru", d: "M280.13,513.14L279.38,514.65L277.94,515.39L275.13,513.71L274.88,512.51L269.33,509.59L264.3,506.42L262.13,504.64L260.97,502.27L261.43,501.44L259.06,497.69L256.29,492.45L253.65,486.83L252.5,485.54L251.62,483.48L249.44,481.64L247.44,480.51L248.35,479.26L246.99,476.59L247.86,474.64L250.1,472.87L250.43,474.04L249.63,474.7L249.7,475.72L250.86,475.5L252,475.8L253.17,477.21L254.76,476.06L255.29,474.18L257.01,471.75L260.38,470.65L263.44,467.73L264.31,465.92L263.92,463.81L264.67,463.54L266.53,464.86L267.42,466.18L268.72,466.9L270.37,469.82L272.46,470.17L274.01,469.43L275.02,469.91L276.7,469.67L278.85,470.98L277.04,473.82L277.88,473.88L279.28,475.37L276.75,475.24L276.38,475.66L274.08,476.19L270.88,478.1L270.67,479.4L269.96,480.38L270.24,481.89L268.54,482.7L268.54,483.89L267.8,484.4L268.97,486.93L270.53,488.65L269.94,489.86L271.8,490.02L272.86,491.53L275.33,491.6L277.63,489.94L277.44,494.24L278.72,494.57L280.3,494.08L282.73,498.66L282.12,499.62L281.99,501.64L281.93,504.08L280.83,505.52L281.34,506.59L280.69,507.56L281.9,510z" },
    { id: "PG", title: "Papua New Guinea", d: "M912.32,482.42l-0.79,0.28l-1.21,-1.08l-1.23,-1.78l-0.6,-2.13l0.39,-0.27l0.3,0.83l0.85,0.63l1.36,1.77l1.32,0.95L912.32,482.42zM901.39,478.67l-1.47,0.23l-0.44,0.79l-1.53,0.68l-1.44,0.66l-1.49,0l-2.3,-0.81l-1.6,-0.78l0.23,-0.87l2.51,0.41l1.53,-0.22l0.42,-1.34l0.4,-0.07l0.27,1.49l1.6,-0.21l0.79,-0.96l1.57,-1l-0.31,-1.65l1.68,-0.05l0.57,0.46l-0.06,1.55L901.39,478.67zM887.96,484.02l2.5,1.84l1.82,2.99l1.61,-0.09l-0.11,1.25l2.17,0.48l-0.84,0.53l2.98,1.19l-0.31,0.82l-1.86,0.2l-0.69,-0.73l-2.41,-0.32l-2.83,-0.43l-2.18,-1.8l-1.59,-1.55l-1.46,-2.46l-3.66,-1.23l-2.38,0.8l-1.71,0.93l0.36,2.08l-2.2,0.97l-1.57,-0.47l-2.9,-0.12l-0.05,-9.16l-0.05,-9.1l4.87,1.92l5.18,1.6l1.93,1.43l1.56,1.41l0.43,1.65l4.67,1.73l0.68,1.49l-2.58,0.3L887.96,484.02zM904.63,475.93l-0.88,0.74l-0.53,-1.65l-0.65,-1.08l-1.27,-0.91l-1.6,-1.19l-2.02,-0.82l0.78,-0.67l1.51,0.78l0.95,0.61l1.18,0.67l1.12,1.17l1.07,0.89L904.63,475.93z" },
    { id: "PH", title: "Philippines", d: "M829.59,439.86l0.29,1.87l0.17,1.58l-0.96,2.57l-1.02,-2.86l-1.31,1.42l0.9,2.06l-0.8,1.31l-3.3,-1.63l-0.79,-2.03l0.86,-1.33l-1.78,-1.33l-0.88,1.17l-1.32,-0.11l-2.08,1.57l-0.46,-0.82l1.1,-2.37l1.77,-0.79l1.53,-1.06l0.99,1.27l2.13,-0.77l0.46,-1.26l1.98,-0.08l-0.17,-2.18l2.27,1.34l0.24,1.42L829.59,439.86zM822.88,434.6l-1.01,0.93l-0.88,1.79l-0.88,0.84l-1.73,-1.95l0.58,-0.76l0.7,-0.79l0.31,-1.76l1.55,-0.17l-0.45,1.91l2.08,-2.74L822.88,434.6zM807.52,437.32l-3.73,2.67l1.38,-1.97l2.03,-1.74l1.68,-1.96l1.47,-2.82l0.5,2.31l-1.85,1.56L807.52,437.32zM817,430.02l1.68,0.88l1.78,0l-0.05,1.19l-1.3,1.2l-1.78,0.85l-0.1,-1.32l0.2,-1.45L817,430.02zM827.14,429.25l0.79,3.18l-2.16,-0.75l0.06,0.95l0.69,1.75l-1.33,0.63l-0.12,-1.99l-0.84,-0.15l-0.44,-1.72l1.65,0.23l-0.04,-1.08l-1.71,-2.18l2.69,0.06L827.14,429.25zM816,426.66l-0.74,2.47l-1.2,-1.42l-1.43,-2.18l2.4,0.1L816,426.66zM815.42,410.92l1.73,0.84l0.86,-0.76l0.25,0.75l-0.46,1.22l0.96,2.09l-0.74,2.42l-1.65,0.96l-0.44,2.33l0.63,2.29l1.49,0.32l1.24,-0.34l3.5,1.59l-0.27,1.56l0.92,0.69l-0.29,1.32l-2.18,-1.4l-1.04,-1.5l-0.72,1.05l-1.79,-1.72l-2.55,0.42l-1.4,-0.63l0.14,-1.19l0.88,-0.73l-0.84,-0.67l-0.36,1.04l-1.38,-1.65l-0.42,-1.26l-0.1,-2.77l1.13,0.96l0.29,-4.55l0.91,-2.66L815.42,410.92z" },
    { id: "PL", title: "Poland", d: "M517.36,296.97L516.21,294.11L516.43,292.55L515.73,290.1L514.72,288.45L515.5,287.2L514.84,284.81L516.76,283.42L521.13,281.2L524.67,279.56L527.46,280.38L527.67,281.56L530.38,281.62L533.83,282.17L538.99,282.09L540.43,282.61L541.1,284.07L541.22,286.16L542,287.94L541.98,289.79L540.3,290.73L541.17,292.85L541.22,294.86L542.63,298.75L542.33,299.99L540.94,300.5L538.39,304.11L539.11,306.03L538.5,305.78L535.84,304.14L533.82,304.74L532.5,304.3L530.84,305.22L529.43,303.7L528.27,304.28L528.11,304.02L526.82,301.89L524.74,301.63L524.47,300.26L522.55,299.77L522.13,300.9L520.61,300L520.78,298.79L518.69,298.4z" },
    { id: "PK", title: "Pakistan", d: "M685.99,351.76L688.06,353.39L688.89,356.05L693.5,357.44L690.79,360.3L687.67,360.81L683.41,359.98L682.04,361.44L683.03,364.39L684,366.64L686.27,368.27L683.88,370.18L683.92,372.51L681.2,375.75L679.44,379.01L676.51,382.33L673.25,382.09L670.16,385.39L672,386.79L672.32,389.18L673.89,390.74L674.45,393.38L668.28,393.37L666.41,395.41L664.36,394.64L663.52,392.44L661.35,390.1L656.19,390.68L651.63,390.73L647.68,391.17L648.74,387.57L652.78,385.96L652.55,384.52L651.21,384.01L651.13,381.24L648.45,379.84L647.32,377.91L645.94,376.23L650.63,377.87L653.44,377.39L655.11,377.79L655.68,377.09L657.63,377.37L661.28,376.04L661.38,373.29L662.94,371.45L665.03,371.45L665.33,370.54L667.48,370.11L668.51,370.41L669.61,369.49L669.46,367.51L670.65,365.51L672.43,364.66L671.33,362.44L674,362.55L674.77,361.33L674.65,360.03L676.05,358.6L675.72,356.9L675.06,355.44L676.7,353.93L679.71,353.2L682.93,352.8L684.35,352.15z" },
    { id: "PR", title: "Puerto Rico", d: "M289.41,410.89L290.84,411.15L291.35,411.73L290.63,412.47L288.52,412.45L286.88,412.55L286.72,411.3L287.11,410.87z" },
    { id: "PS", title: "Palestinian Territories", d: "M574.92,367.87L574.92,369.88L574.5,370.84L573.18,371.29L573.31,370.43L574.02,369.97L573.32,369.61L573.9,367.41z" },
    { id: "PT", title: "Portugal", d: "M449.92,334.56L450.94,333.61L452.08,333.06L452.79,334.9L454.44,334.89L454.92,334.42L456.56,334.55L457.34,336.43L456.04,337.43L456.01,340.31L455.55,340.84L455.44,342.56L454.23,342.86L455.35,345.03L454.58,347.38L455.54,348.44L455.16,349.4L454.12,350.72L454.35,351.88L453.23,352.79L451.75,352.3L450.3,352.68L450.73,349.94L450.47,347.76L449.21,347.43L448.54,346.08L448.77,343.72L449.88,342.41L450.08,340.94L450.67,338.73L450.6,337.16L450.04,335.82z" },
    { id: "PY", title: "Paraguay", d: "M299.49,526.99L300.6,523.4L300.67,521.8L302.01,519.18L306.9,518.32L309.5,518.37L312.12,519.88L312.16,520.79L312.99,522.45L312.81,526.51L315.77,527.09L316.91,526.5L318.8,527.32L319.33,528.22L319.59,530.99L319.92,532.17L320.96,532.3L322.01,531.81L323.02,532.36L323.02,534.04L322.64,535.86L322.09,537.64L321.63,540.39L319.09,542.79L316.87,543.29L313.72,542.81L310.9,541.96L313.66,537.23L313.25,535.86L310.37,534.66L306.94,532.4L304.65,531.94z" },
    { id: "QA", title: "Qatar", d: "M617.72,392.16L617.53,389.92L618.29,388.3L619.05,387.96L619.9,388.93L619.95,390.74L619.34,392.55L618.56,392.77z" },
    { id: "RO", title: "Romania", d: "M538.93,310.86L540.14,309.97L541.88,310.43L543.67,310.45L544.97,311.46L545.93,310.82L548,310.42L548.71,309.44L549.89,309.45L550.74,309.85L551.61,311.09L552.5,312.84L554.12,315.28L554.21,317.07L553.91,318.79L554.42,320.62L555.67,321.35L556.98,320.71L558.26,321.39L558.32,322.42L556.96,323.26L556.11,322.9L555.33,327.61L553.68,327.2L551.64,325.79L548.34,326.69L546.95,327.68L542.83,327.48L540.67,326.87L539.59,327.16L538.78,325.56L538.27,324.88L538.92,324.22L538.22,323.73L537.34,324.61L535.71,323.47L535.49,321.84L533.78,320.9L533.47,319.63L531.95,318.05L534.2,317.29L535.89,314.53L537.22,311.73z" },
    { id: "RS", title: "Serbia", d: "M533.78,320.9L535.49,321.84L535.71,323.47L537.34,324.61L538.22,323.73L538.92,324.22L538.27,324.88L538.78,325.56L538.09,326.44L538.34,327.86L539.7,329.52L538.63,330.71L538.16,331.92L538.47,332.37L538,332.91L536.71,332.97L535.75,333.19L535.66,332.91L535.99,332.46L536.31,331.53L535.91,331.55L535.36,330.85L534.9,330.67L534.54,330.06L534.01,329.82L533.61,329.28L533.11,329.5L532.72,330.76L532.05,331.04L532.28,330.71L531.21,329.92L530.29,329.51L529.88,328.97L529.14,328.31L529.8,328.14L530.21,326.32L528.86,324.82L529.56,323.1L528.54,323.11L529.62,321.62L528.73,320.48L528.05,318.93L530.2,317.88L531.95,318.05L533.47,319.63z" },
    { id: "RU", title: "Russia", d: "M1008.27,215.75l-2.78,2.97l-4.6,0.7l-0.07,6.46l-1.12,1.35l-2.63,-0.19l-2.14,-2.26l-3.73,-1.92l-0.63,-2.89l-2.85,-1.1l-3.19,0.87l-1.52,-2.37l0.61,-2.55l-3.36,1.64l1.26,3.19l-1.59,2.83l-0.02,0.04l-3.6,2.89l-3.63,-0.48l2.53,3.44l1.67,5.2l1.29,1.67l0.33,2.53l-0.72,1.6l-5.23,-1.32l-7.84,4.51l-2.49,0.69l-4.29,4.1l-4.07,3.5l-1.03,2.55l-4.01,-3.9l-7.31,4.42l-1.28,-2.08l-2.7,2.39l-3.75,-0.76l-0.9,3.63l-3.36,5.22l0.1,2.14l3.19,1.17l-0.38,7.46l-2.6,0.19l-1.2,4.15l1.17,2.1l-4.9,2.47l-0.97,5.4l-4.18,1.14l-0.84,4.66l-4.04,4.18l-1.04,-3.08l-1.2,-6.69l-1.56,-10.65l1.35,-6.95l2.37,-3.07l0.15,-2.44l4.36,-1.18l5.01,-6.78l4.83,-5.73l5.04,-4.57l2.25,-8.37l-3.41,0.51l-1.68,4.92l-7.11,6.36l-2.3,-7.14l-7.24,2l-7.02,9.56l2.32,3.38l-6.26,1.42l-4.33,0.56l0.2,-3.95l-4.36,-0.84l-3.47,2.7l-8.57,-0.94l-9.22,1.62l-9.08,10.33l-10.75,11.78l4.42,0.61l1.38,3l2.72,1.05l1.79,-2.38l3.08,0.31l4.05,5.19l0.09,3.92l-2.19,4.51l-0.24,5.27l-1.26,6.85l-4.23,6.01l-0.94,2.82l-3.81,4.66l-3.78,4.53l-1.81,2.28l-3.74,2.25l-1.77,0.05l-1.76,-1.86l-3.76,2.79l-0.44,1.26l-0.39,-0.66l-0.02,-1.93l1.43,-0.1l0.4,-4.55l-0.74,-3.36l2.41,-1.4l3.4,0.7l1.89,-3.89l0.96,-4.46l1.09,-1.51l1.47,-3.76l-4.63,1.24l-2.43,1.65l-4.26,0l-1.13,-3.95l-3.32,-3.03l-4.88,-1.38l-1.04,-4.28l-0.98,-2.73l-1.05,-1.94l-1.73,-4.61l-2.46,-1.71l-4.2,-1.39l-3.72,0.13l-3.48,0.84l-2.32,2.31l1.54,1.1l0.04,2.52l-1.56,1.45l-2.53,4.72l0.03,1.93l-3.95,2.74l-3.37,-1.63l-3.35,0.36l-1.47,-1.46l-1.68,-0.47l-4.11,3.06l-3.69,0.71l-2.58,1.06l-3.53,-0.7l-2.6,0.04l-1.7,-2.2l-2.75,-2.09l-2.81,-0.58l-3.55,0.57l-2.65,0.81l-3.98,-1.84l-0.53,-3.32l-3.3,-1.15l-2.54,-0.53l-3.14,-1.87l-2.9,4.66l1.14,2.6l-2.73,3.03l-4.05,-1.09l-2.8,-0.16l-1.87,-2.04l-2.92,-0.06l-2.44,-1.35l-4.26,2.07l-5.35,3.74l-2.96,0.74l-1.1,0.35l-1.49,-2.63l-3.61,0.58l-1.19,-1.84l-1.96,-0.85l-1.35,-2.55l-1.55,-0.8l-4.03,1.14l-3.86,-2.57l-1.49,2.33l-6.27,-11.58l-3.58,-3.66l1.03,-1.5l-7.03,4.49l-2.69,0.27l0.23,-2.58l-3.6,-1.63l-2.93,1.17l-0.88,-5.01l-5.04,-1.06l-2.52,2.03l-7.02,1.79l-1.37,1.19l-10.49,1.66l-1.29,1.62l2.02,3.21l-2.69,1.2l0.53,1.25l-2.69,2.22l4.54,3.1l-0.7,2.11l-3.94,-0.19l-0.81,1.31l-3.59,-2.29l-4.45,0.09l-2.98,1.87l-3.32,-1.79l-6.18,-3.1l-4.38,0.12l-5.79,4.85l-0.35,3.19l-2.88,-2.53l-2.24,4.77l0.82,0.87l-1.62,3.21l2.38,2.84l2.08,-0.12l1.79,2.76l-0.28,2.1l1.42,0.66l-1.28,2.39l-2.72,0.66l-2.79,4.09l2.55,3.7l-0.28,2.59l3.06,4.46l-1.67,1.51l-0.48,0.95l-1.24,-0.25l-1.93,-2.27l-0.79,-0.13l-1.76,-0.87l-0.86,-1.55l-2.62,-0.79l-1.7,0.6l-0.49,-0.71l-3.82,-1.83l-4.13,-0.62l-2.37,-0.66l-0.34,0.45l-3.57,-3.27l-3.2,-1.48l-2.42,-2.32l2.04,-0.64l2.33,-3.35l-1.57,-1.6l4.13,-1.67l-0.07,-0.9l-2.52,0.66l0.09,-1.83l1.45,-1.16l2.71,-0.31l0.44,-1.4l-0.62,-2.33l1.14,-2.23l-0.03,-1.26l-4.13,-1.41l-1.64,0.05l-1.73,-2.04l-2.15,0.69l-3.56,-1.54l0.06,-0.87l-1,-1.93l-2.24,-0.22l-0.23,-1.39l0.7,-0.91l-1.79,-2.58l-2.91,0.44l-0.85,-0.23l-0.71,1.04l-1.05,-0.18l-0.69,-2.94l-0.66,-1.54l0.54,-0.44l2.26,0.16l1.09,-1.02l-0.81,-1.25l-1.89,-0.83l0.17,-0.86l-1.14,-0.87l-1.76,-3.15l0.6,-1.31l-0.27,-2.31l-2.74,-1.18l-1.47,0.59l-0.4,-1.24l-2.95,-1.26l-0.9,-2.99l-0.24,-2.49l-1.35,-1.19l1.2,-1.66l-0.83,-4.96l2,-3.13l-0.42,-0.96l3.19,-3.07l-2.94,-2.68l6,-7.41l2.6,-3.45l1.05,-3.1l-4.15,-4.26l1.15,-4.15l-2.52,-4.85l1.89,-5.76l-3.26,-7.96l2.59,-5.48l-4.29,-4.99l0.41,-5.4l2.26,-0.72l4.77,-3.19l2.89,-2.81l4.61,4.86l7.68,1.88l10.59,8.65l2.15,3.51l0.19,4.8l-3.11,3.69l-4.58,1.85l-12.52,-5.31l-2.06,0.9l4.57,5.1l0.18,3.15l0.18,6.75l3.61,1.97l2.19,1.66l0.36,-3.11l-1.69,-2.8l1.78,-2.51l6.78,4.1l2.36,-1.59l-1.89,-4.88l6.53,-6.74l2.59,0.4l2.62,2.43l1.63,-4.81l-2.34,-4.28l1.37,-4.41l-2.06,-4.69l7.84,2.44l1.6,4.18l-3.55,0.91l0.02,4.04l2.21,2.44l4.33,-1.54l0.69,-4.61l5.86,-3.52l9.79,-6.54l2.11,0.38l-2.76,4.64l3.48,0.78l2.01,-2.58l5.25,-0.21l4.16,-3.19l3.2,4.62l3.19,-5.09l-2.94,-4.58l1.46,-2.66l8.28,2.44l3.88,2.49l10.16,8.8l1.88,-3.97l-2.85,-4.11l-0.08,-1.68l-3.38,-0.78l0.92,-3.83l-1.5,-6.49l-0.08,-2.74l5.17,-7.99l1.84,-8.42l2.08,-1.88l7.42,2.51l0.58,5.18l-2.66,7.28l1.74,2.78l0.9,5.94l-0.64,11.07l3.09,4.73l-1.2,5.01l-5.49,10.2l3.21,1.02l1.12,-2.51l3.08,-1.82l0.74,-3.55l2.43,-3.49l-1.63,-4.26l1.31,-5.08l-3.07,-0.64l-0.67,-4.42l2.24,-8.28l-3.64,-7.03l5.02,-6.04l-0.65,-6.62l1.4,-0.22l1.47,5.19l-1.11,8.67l3,1.59l-1.28,-6.37l4.69,-3.58l5.82,-0.49l5.18,5.18l-2.49,-7.62l-0.28,-10.28l4.88,-2.02l6.74,0.44l6.08,-1.32l-2.28,-5.38l3.25,-7.02l3.22,-0.3l5.45,-5.51l7.4,-1.51l0.94,-3.15l7.36,-1.08l2.29,2.61l6.29,-6.24l5.15,0.2l0.77,-5.24l2.68,-5.33l6.62,-5.31l4.81,4.21l-3.82,3.13l6.35,1.92l0.76,6.03l2.56,-2.94l8.2,0.16l6.32,5.84l2.25,4.35l-0.7,5.85l-3.1,3.24l-7.37,5.92l-2.11,3.08l3.48,1.43l4.15,2.55l2.52,-1.91l1.43,6.39l1.23,-2.56l4.48,-1.57l9,1.65l0.68,4.58l11.72,1.43l0.16,-7.47l5.95,1.74l4.48,-0.05l4.53,5.14l1.29,6.04l-1.66,3.84l3.52,6.98l4.41,3.49l2.71,-9.18l4.5,4l4.78,-2.38l5.43,2.72l2.07,-2.47l4.59,1.24l-2.02,-8.4l3.7,-4.07l25.32,6.06l2.39,5.35l7.34,6.65l11.32,-1.62l5.58,1.41l2.33,3.5l-0.34,6.02l3.45,2.29l3.75,-1.64l4.97,-0.21l5.29,1.57l5.31,-0.89l4.88,6.99l3.47,-2.48l-2.27,-5.07l1.25,-3.62l8.95,2.29l5.83,-0.49l8.06,3.84l3.92,3.44l6.87,5.86l7.35,7.34l-0.24,4.44l1.89,1.74l-0.65,-5.15l7.61,1.07L1008.27,215.75zM880.84,306.25l-2.82,-7.68l-1.16,-4.51l0.07,-4.5l-0.97,-4.5l-0.73,-3.15l-1.25,0.67l1.11,2.21l-2.59,2.17l-0.25,6.3l1.64,4.41l-0.12,5.85l-0.65,3.24l0.32,4.54l-0.31,4.01l0.52,3.4l1.84,-3.13l2.13,2.44l0.08,-2.84l-2.73,-4.23l1.72,-6.11L880.84,306.25zM537.82,278.77l-2.94,-0.86l-3.87,1.58l-0.64,2.13l3.45,0.55l5.16,-0.07l-0.22,-1.23l0.3,-1.33L537.82,278.77zM979.95,178.65l3.66,-0.52l2.89,-2.06l0.24,-1.19l-4.06,-2.51l-2.38,-0.02l-0.36,0.37l-3.57,3.64l0.5,2.73L979.95,178.65zM870.07,151.56l-2.66,3.92l0.49,0.52l5.75,1.08l4.25,-0.07l-0.34,-2.57l-3.98,-3.81L870.07,151.56zM894.64,142.03l3.24,-4.25l-7.04,-2.88l-5.23,-1.68l-0.67,3.59l5.21,4.27L894.64,142.03zM869.51,140.34l10.33,0.3l2.21,-8.14l-10.13,-6.07l-7.4,-0.51l-3.7,2.18l-1.51,7.75l5.55,7.01L869.51,140.34zM622.39,166.28l-2.87,1.96l0.41,4.83l5.08,2.35l0.74,3.82l9.16,1.1l1.66,-0.74l-5.36,-7.11l-0.57,-7.52l4.39,-9.14l4.18,-9.82l8.71,-10.17l8.56,-5.34l9.93,-5.74l1.88,-3.71l-1.95,-4.83l-5.46,1.6l-4.8,4.49l-9.33,2.22l-9.26,7.41l-6.27,5.85l0.76,4.87l-6.71,9.03l2.58,1.22l-5.56,8.27L622.39,166.28zM769.87,98.34l0.83,-5.72l-7.11,-8.34l-2.11,-0.98l-2.3,1.7l-5.12,18.6L769.87,98.34zM605.64,69.03l3.04,3.88l3.28,-2.69l0.39,-2.72l2.52,-1.27l3.76,-2.23l1.08,-2.62l-4.16,-3.85l-2.64,2.9l-1.61,4.12l-0.57,-4.65l-4.26,0.21L601,63.25l6.24,0.52L605.64,69.03zM736.89,82.07l4.65,5.73l7.81,4.2l6.12,-1.8l0.69,-13.62l-6.46,-16.04l-5.45,-9.02l-6.07,4.11l-7.28,11.83l3.83,3.27L736.89,82.07z" },
    { id: "RW", title: "Rwanda", d: "M560.54,466.55L561.66,468.12L561.49,469.76L560.69,470.11L559.2,469.93L558.34,471.52L556.63,471.3L556.89,469.77L557.28,469.56L557.38,467.9L558.19,467.12L558.87,467.41z" },
    { id: "SA", title: "Saudi Arabia", d: "M595.2,417.22L594.84,415.98L593.99,415.1L593.77,413.93L592.33,412.89L590.83,410.43L590.04,408.02L588.1,405.98L586.85,405.5L584.99,402.65L584.67,400.57L584.79,398.78L583.18,395.42L581.87,394.23L580.35,393.6L579.43,391.84L579.58,391.15L578.8,389.55L577.98,388.86L576.89,386.54L575.18,384.02L573.75,381.86L572.36,381.87L572.79,380.13L572.92,379.02L573.26,377.74L576.38,378.25L577.6,377.27L578.27,376.11L580.41,375.67L580.87,374.58L581.8,374.04L579,370.78L584.62,369.13L585.15,368.64L588.53,369.53L592.71,371.82L600.61,378.31L605.82,378.57L608.32,378.88L609.02,380.39L611,380.31L612.1,383.04L613.48,383.75L613.96,384.86L615.87,386.17L616.04,387.46L615.76,388.49L616.12,389.53L616.92,390.4L617.3,391.41L617.72,392.16L618.56,392.77L619.34,392.55L619.87,393.72L619.98,394.43L621.06,397.51L629.48,399.03L630.05,398.39L631.33,400.53L629.46,406.5L621.05,409.46L612.97,410.59L610.35,411.91L608.34,414.98L607.03,415.46L606.33,414.49L605.26,414.64L602.55,414.35L602.03,414.05L598.8,414.12L598.04,414.39L596.89,413.63L596.14,415.06L596.43,416.29z" },
    { id: "SB", title: "Solomon Islands", d: "M929.81,492.75l0.78,0.97l-1.96,-0.02l-1.07,-1.74l1.67,0.69L929.81,492.75zM926.26,491.02l-1.09,0.06l-1.72,-0.29l-0.59,-0.44l0.18,-1.12l1.85,0.44l0.91,0.59L926.26,491.02zM928.58,490.25l-0.42,0.52l-2.08,-2.45l-0.58,-1.68h0.95l1.01,2.25L928.58,490.25zM923.52,486.69l0.12,0.57l-2.2,-1.19l-1.54,-1.01l-1.05,-0.94l0.42,-0.29l1.29,0.67l2.3,1.29L923.52,486.69zM916.97,483.91l-0.56,0.16l-1.23,-0.64l-1.15,-1.15l0.14,-0.47l1.67,1.18L916.97,483.91z" },
    { id: "SD", title: "Sudan", d: "M570.48,436.9L570.09,436.85L570.14,435.44L569.8,434.47L568.36,433.35L568.02,431.3L568.36,429.2L567.06,429.01L566.87,429.64L565.18,429.79L565.86,430.62L566.1,432.33L564.56,433.89L563.16,435.93L561.72,436.22L559.36,434.57L558.3,435.15L558.01,435.98L556.57,436.51L556.47,437.09L553.68,437.09L553.29,436.51L551.27,436.41L550.26,436.9L549.49,436.65L548.05,435L547.57,434.23L545.54,434.62L544.77,435.93L544.05,438.45L543.09,438.98L542.23,439.29L542,439.15L541.03,438.34L540.85,437.47L541.3,436.29L541.3,435.14L539.68,433.37L539.36,432.15L539.39,431.46L538.36,430.63L538.33,428.97L537.75,427.87L536.76,428.04L537.04,426.99L537.77,425.79L537.45,424.61L538.37,423.73L537.79,423.06L538.53,421.28L539.81,419.15L542.23,419.35L542.09,407.74L542.13,406.5L545.35,406.49L545.35,400.53L556.62,400.53L567.5,400.53L578.62,400.53L579.52,403.47L578.91,404.01L579.32,407.07L580.35,410.59L581.41,411.32L582.95,412.4L581.53,414.07L579.46,414.55L578.58,415.45L578.31,417.38L577.1,421.63L577.4,422.78L576.95,425.25L575.81,428.06L574.12,429.48L572.92,431.65L572.63,432.81L571.31,433.61L570.48,436.57z" },
    { id: "SE", title: "Sweden", d: "M537.45,217.49L534.73,222.18L535.17,226.2L530.71,231.33L525.3,236.67L523.25,245.08L525.25,249.15L527.93,252.29L525.36,258.52L522.44,259.78L521.37,268.62L519.78,273.38L516.38,272.89L514.79,276.84L511.54,277.07L510.65,272.36L508.3,266.55L506.17,259.05L507.41,255.9L509.74,252.09L510.67,245.36L508.88,242.38L508.7,234.34L510.53,228.43L513.31,228.54L514.28,225.99L513.26,223.76L517.61,214.26L520.42,206.39L522.27,201.15L524.96,201.17L525.71,196.96L530.99,198.18L531.4,193.1L533.14,192.77L536.88,196.58L541.25,201.73L541.33,212.85L542.27,215.55z" },
    { id: "SI", title: "Slovenia", d: "M513.96,316.51L516.28,316.82L517.7,315.9L520.15,315.8L520.68,315.11L521.15,315.16L521.7,316.53L519.47,317.61L519.19,319.23L518.22,319.64L518.23,320.76L517.13,320.68L516.18,320.03L515.66,320.71L513.71,320.57L514.33,320.21L513.66,318.5z" },
    { id: "SJ", title: "Svalbard and Jan Mayen", d: "M544.58,104.49l-6.26,5.36l-4.95,-3.02l1.94,-3.42l-1.69,-4.34l5.81,-2.78l1.11,5.18L544.58,104.49zM526.43,77.81l9.23,11.29l-7.06,5.66l-1.56,10.09l-2.46,2.49l-1.33,10.51l-3.38,0.48l-6.03,-7.64l2.54,-4.62l-4.2,-3.86l-5.46,-11.82l-2.18,-11.79l7.64,-5.69l1.54,5.56l3.99,-0.22l1.06,-5.43l4.12,-0.56L526.43,77.81zM546.6,66.35l5.5,5.8l-4.16,8.52l-8.13,1.81l-8.27,-2.56l-0.5,-4.32l-4.02,-0.28l-3.07,-7.48l8.66,-4.72l4.07,4.08l2.84,-5.09L546.6,66.35z" },
    { id: "SK", title: "Slovakia", d: "M528.11,304.02L528.27,304.28L529.43,303.7L530.84,305.22L532.5,304.3L533.82,304.74L535.84,304.14L538.5,305.78L537.73,306.89L537.18,308.6L536.58,309.03L533.58,307.75L532.66,308L532,309L530.68,309.52L530.38,309.25L529.02,309.9L527.9,310.03L527.68,310.87L525.32,311.38L524.29,310.92L522.86,309.85L522.58,308.4L522.81,307.86L523.2,306.93L524.45,307L525.4,306.56L525.48,306.17L526.02,305.96L526.2,304.99L526.84,304.8L527.28,304.03z" },
    { id: "SL", title: "Sierra Leone", d: "M443.18,444.44L442.42,444.23L440.41,443.1L438.95,441.6L438.46,440.57L438.11,438.49L439.61,437.25L439.93,436.46L440.41,435.85L441.19,435.79L441.84,435.26L444.08,435.26L444.86,436.27L445.47,437.46L445.38,438.28L445.83,439.02L445.8,440.05L446.57,439.89L445.26,441.2L444,442.73L443.85,443.54z" },
    { id: "SN", title: "Senegal", d: "M428.39,425.16L427.23,422.92L425.83,421.9L427.07,421.35L428.43,419.32L429.09,417.83L430.05,416.9L431.45,417.15L432.81,416.52L434.38,416.49L435.72,417.34L437.58,418.11L439.28,420.24L441.13,422.22L441.26,424.01L441.81,425.65L442.86,426.46L443.1,427.56L442.97,428.45L442.56,428.61L441.04,428.39L440.83,428.7L440.21,428.77L438.19,428.07L436.84,428.04L431.66,427.92L430.91,428.24L429.98,428.15L428.49,428.62L428.03,426.43L430.58,426.49L431.26,426.09L431.76,426.06L432.8,425.4L434,426.01L435.22,426.06L436.43,425.41L435.87,424.59L434.94,425.07L434.07,425.06L432.97,424.35L432.08,424.4L431.44,425.07z" },
    { id: "SO", title: "Somalia", d: "M618.63,430.43L618.56,429.64L617.5,429.65L616.17,430.63L614.68,430.91L613.39,431.33L612.5,431.39L610.9,431.49L609.9,432.01L608.51,432.2L606.04,433.08L602.99,433.41L600.34,434.14L598.95,434.13L597.69,432.94L597.14,431.77L596.23,431.24L595.19,432.76L594.58,433.77L595.62,435.33L596.65,436.69L597.72,437.7L606.89,441.04L609.25,441.02L601.32,449.44L597.67,449.56L595.17,451.53L593.38,451.58L592.61,452.46L590.16,455.63L590.19,465.78L591.85,468.07L592.48,467.41L593.13,465.95L596.2,462.57L598.81,460.45L603.01,457.69L605.81,455.43L609.11,451.62L611.5,448.49L613.91,444.39L615.64,440.8L616.99,437.65L617.78,434.6L618.38,433.58L618.37,432.08z" },
    { id: "SR", title: "Suriname", d: "M315.02,446.72L318.38,447.28L318.68,446.77L320.95,446.57L323.96,447.33L322.5,449.73L322.72,451.64L323.83,453.3L323.34,454.5L323.09,455.77L322.37,456.94L320.77,456.35L319.44,456.64L318.31,456.39L318.03,457.2L318.5,457.75L318.25,458.32L316.72,458.09L315.01,455.67L314.64,454.1L313.75,454.09L312.5,452.07L313.02,450.62L312.87,449.97L314.57,449.24z" },
    { id: "SS", title: "South Sudan", d: "M570.48,436.9L570.51,439.1L570.09,439.96L568.61,440.03L567.65,441.64L569.37,441.84L570.79,443.21L571.29,444.33L572.57,444.98L574.22,448.03L572.32,449.87L570.6,451.54L568.87,452.82L566.9,452.82L564.64,453.47L562.86,452.84L561.71,453.61L559.24,451.75L558.57,450.56L557.01,451.15L555.71,450.96L554.96,451.43L553.7,451.1L552.01,448.79L551.56,447.9L549.46,446.79L548.75,445.11L547.58,443.9L545.7,442.44L545.67,441.52L544.14,440.39L542.23,439.29L543.09,438.98L544.05,438.45L544.77,435.93L545.54,434.62L547.57,434.23L548.05,435L549.49,436.65L550.26,436.9L551.27,436.41L553.29,436.51L553.68,437.09L556.47,437.09L556.57,436.51L558.01,435.98L558.3,435.15L559.36,434.57L561.72,436.22L563.16,435.93L564.56,433.89L566.1,432.33L565.86,430.62L565.18,429.79L566.87,429.64L567.06,429.01L568.36,429.2L568.02,431.3L568.36,433.35L569.8,434.47L570.14,435.44L570.09,436.85z" },
    { id: "SV", title: "El Salvador", d: "M229.09,425.76L228.78,426.43L227.16,426.39L226.15,426.12L224.99,425.55L223.43,425.37L222.64,424.75L222.73,424.33L223.69,423.61L224.21,423.29L224.06,422.95L224.72,422.78L225.55,423.02L226.15,423.59L227,424.05L227.1,424.44L228.33,424.1L228.91,424.3L229.29,424.61z" },
    { id: "SY", title: "Syria", d: "M584.02,364.6L578.53,368.14L575.41,366.82L575.35,366.8L575.73,366.3L575.69,364.93L576.38,363.1L577.91,361.83L577.45,360.51L576.19,360.33L575.93,357.72L576.61,356.31L577.36,355.56L578.11,354.8L578.27,352.86L579.18,353.54L582.27,352.57L583.76,353.22L586.07,353.21L589.29,351.9L590.81,351.96L594,351.42L592.56,353.6L591.02,354.46L591.29,356.98L590.23,361.1z" },
    { id: "SZ", title: "Swaziland", d: "M565.18,540.74L564.61,542.13L562.97,542.46L561.29,540.77L561.27,539.69L562.03,538.52L562.3,537.62L563.11,537.4L564.52,537.97L564.94,539.36z" },
    { id: "TD", title: "Chad", d: "M515.9,427.26L516.18,425.92L514.38,425.85L514.39,424L513.22,422.94L514.43,419.14L518.01,416.4L518.15,412.61L519.23,406.63L519.84,405.35L518.68,404.33L518.63,403.38L517.58,402.6L516.89,397.93L519.72,396.27L530.91,402.04L542.09,407.74L542.23,419.35L539.81,419.15L538.53,421.28L537.79,423.06L538.37,423.73L537.45,424.61L537.77,425.79L537.04,426.99L536.76,428.04L537.75,427.87L538.33,428.97L538.36,430.63L539.39,431.46L539.36,432.15L537.59,432.64L536.16,433.78L534.14,436.87L531.5,438.18L528.79,438L528,438.26L528.28,439.25L526.81,440.24L525.62,441.34L522.09,442.41L521.39,441.78L520.93,441.72L520.41,442.44L518.09,442.66L518.53,441.89L517.65,439.96L517.25,438.79L516.03,438.31L514.38,436.66L514.99,435.33L516.27,435.61L517.06,435.41L518.62,435.44L517.1,432.87L517.2,430.98L517.01,429.09z" },
    { id: "TF", title: "French Southern and Antarctic Lands", d: "M668.54,619.03L670.34,620.36L672.99,620.9L673.09,621.71L672.31,623.67L668,623.95L667.93,621.66L668.35,619.9z" },
    { id: "TG", title: "Togo", d: "M480.48,446.25L478.23,446.84L477.6,445.86L476.85,444.08L476.63,442.68L477.25,440.15L476.55,439.12L476.28,436.9L476.28,434.85L475.11,433.39L475.32,432.5L477.78,432.56L477.42,434.06L478.27,434.89L479.25,435.88L479.35,437.27L479.92,437.85L479.79,444.31z" },
    { id: "TH", title: "Thailand", d: "M762.89,429.18L760.37,427.87L757.97,427.93L758.38,425.68L755.91,425.7L755.69,428.84L754.18,432.99L753.27,435.49L753.46,437.54L755.28,437.63L756.42,440.2L756.93,442.63L758.49,444.24L760.19,444.57L761.64,446.02L760.73,447.17L758.87,447.51L758.65,446.07L756.37,444.84L755.88,445.34L754.77,444.27L754.29,442.88L752.8,441.29L751.44,439.96L750.98,441.61L750.45,440.05L750.76,438.29L751.58,435.58L752.94,432.67L754.48,430.02L753.38,427.42L753.43,426.09L753.11,424.49L751.24,422.21L750.57,420.76L751.54,420.23L752.56,417.71L751.42,415.79L749.64,413.66L748.28,411.09L749.46,410.56L750.74,407.37L752.72,407.23L754.36,405.95L755.96,405.26L757.18,406.18L757.34,407.96L759.23,408.09L758.54,411.2L758.61,413.82L761.56,412.08L762.4,412.59L764.05,412.51L764.61,411.49L766.73,411.69L768.86,414.07L769.04,416.94L771.31,419.47L771.18,421.91L770.27,423.21L767.64,422.8L764.02,423.35L762.22,425.73z" },
    { id: "TJ", title: "Tajikistan", d: "M674.37,340.62L673.34,341.75L670.29,341.14L670.02,343.24L673.06,342.96L676.53,344.13L681.83,343.58L682.54,346.91L683.46,346.55L685.16,347.36L685.07,348.74L685.49,350.75L682.59,350.75L680.66,350.49L678.92,352.06L677.67,352.4L676.69,353.14L675.58,351.99L675.85,349.04L675,348.87L675.3,347.78L673.79,346.98L672.58,348.21L672.28,349.64L671.85,350.16L670.17,350.09L669.27,351.69L668.32,351.02L666.29,352.14L665.44,351.72L667.01,348.15L666.41,345.49L664.35,344.63L665.08,343.04L667.42,343.21L668.75,341.2L669.64,338.85L673.39,337.99L672.81,339.7L673.21,340.72z" },
    { id: "TL", title: "Timor-Leste", d: "M825.65,488.25L825.98,487.59L828.39,486.96L830.35,486.86L831.22,486.51L832.28,486.86L831.25,487.62L828.33,488.85L825.98,489.67L825.93,488.81z" },
    { id: "TM", title: "Turkmenistan", d: "M646.88,356.9L646.63,353.99L644.54,353.87L641.34,350.78L639.1,350.39L636,348.6L634,348.27L632.77,348.93L630.9,348.83L628.91,350.85L626.44,351.53L625.92,349.04L626.33,345.31L624.14,344.09L624.86,341.61L623,341.39L623.62,338.3L626.26,339.21L628.73,338.02L626.68,335.79L625.88,333.65L623.62,334.61L623.34,337.34L622.46,334.93L623.7,333.68L626.88,332.89L628.78,333.95L630.74,336.88L632.18,336.7L635.34,336.65L634.88,334.77L637.28,333.47L639.64,331.27L643.42,333.27L643.72,336.26L644.79,337.03L647.82,336.86L648.76,337.53L650.14,341.32L653.35,343.83L655.18,345.52L658.11,347.27L661.84,348.79L661.76,350.95L660.92,350.84L659.59,349.9L659.15,351.15L656.79,351.83L656.23,354.62L654.65,355.67L652.44,356.19L651.85,357.74L649.74,358.2z" },
    { id: "TN", title: "Tunisia", d: "M501.84,374.69L500.64,368.83L498.92,367.5L498.89,366.69L496.6,364.71L496.35,362.18L498.08,360.3L498.74,357.48L498.29,354.2L498.86,352.41L501.92,351L503.88,351.42L503.8,353.19L506.18,351.9L506.38,352.57L504.97,354.28L504.96,355.88L505.93,356.73L505.56,359.69L503.71,361.4L504.24,363.23L505.69,363.29L506.4,364.88L507.47,365.4L507.31,367.95L505.94,368.9L505.08,369.95L503.15,371.21L503.45,372.56L503.21,373.94z" },
    { id: "TR", title: "Turkey", d: "M578.75,336.6l4.02,1.43l3.27,-0.57l2.41,0.33l3.31,-1.94l2.99,-0.18l2.7,1.83l0.48,1.3l-0.27,1.79l2.08,0.91l1.1,1.06l-1.92,1.03l0.88,4.11l-0.55,1.1l1.53,2.82l-1.34,0.59l-0.98,-0.89l-3.26,-0.45l-1.2,0.55l-3.19,0.54l-1.51,-0.06l-3.23,1.31l-2.31,0.01l-1.49,-0.66l-3.09,0.97l-0.92,-0.68l-0.15,1.94l-0.75,0.76l-0.75,0.76l-1.03,-1.57l1.06,-1.3l-1.71,0.3l-2.35,-0.8l-1.93,2l-4.26,0.39l-2.27,-1.86l-3.02,-0.12l-0.65,1.44l-1.94,0.41l-2.71,-1.85l-3.06,0.06l-1.66,-3.48l-2.05,-1.96l1.36,-2.78l-1.78,-1.72l3.11,-3.48l4.32,-0.15l1.18,-2.81l5.34,0.49l3.37,-2.42l3.27,-1.06l4.64,-0.08L578.75,336.6zM551.5,338.99l-2.34,1.98l-0.88,-1.71l0.04,-0.76l0.67,-0.41l0.87,-2.33l-1.37,-0.99l2.86,-1.18l2.41,0.5l0.33,1.44l2.45,1.2l-0.51,0.91l-3.33,0.2L551.5,338.99z" },
    { id: "TT", title: "Trinidad and Tobago", d: "M302.31,433.24L303.92,432.87L304.51,432.97L304.4,435.08L302.06,435.39L301.55,435.14L302.37,434.36z" },
    { id: "TW", title: "Taiwan", d: "M816.7,393.27L815.01,398.14L813.81,400.62L812.33,398.07L812.01,395.82L813.66,392.82L815.91,390.5L817.19,391.41z" },
    { id: "TZ", title: "Tanzania", d: "M570.31,466.03L570.79,466.34L580.95,472.01L581.15,473.63L585.17,476.42L583.88,479.87L584.04,481.46L585.84,482.48L585.92,483.21L585.15,484.91L585.31,485.76L585.13,487.11L586.11,488.87L587.27,491.66L588.29,492.28L586.06,493.92L583,495.02L581.32,494.98L580.32,495.83L578.37,495.9L577.63,496.26L574.26,495.46L572.15,495.69L571.37,491.83L570.42,490.51L569.85,489.73L567.11,489.21L565.51,488.36L563.73,487.89L562.61,487.41L561.44,486.7L559.93,483.15L558.3,481.58L557.74,479.96L558.02,478.5L557.52,475.93L558.68,475.8L559.69,474.79L560.79,473.33L561.48,472.75L561.45,471.84L560.85,471.21L560.69,470.11L561.49,469.76L561.66,468.12L560.54,466.55L561.53,466.21L564.6,466.25z" },
    { id: "UA", title: "Ukraine", d: "M564.38,292.49L565.42,292.68L566.13,291.64L566.98,291.87L569.89,291.43L571.68,294L570.98,294.92L571.21,296.31L573.45,296.52L574.45,298.45L574.39,299.32L577.95,300.86L580.1,300.17L581.83,302.21L583.47,302.17L587.6,303.57L587.63,304.84L586.5,307.07L587.11,309.4L586.67,310.79L583.96,311.1L582.52,312.26L582.43,314.09L580.19,314.42L578.32,315.74L575.7,315.95L573.28,317.47L571.96,318.5L573.45,319.97L574.82,320.93L577.68,320.69L577.13,322.11L574.06,322.79L570.25,325.06L568.7,324.27L569.31,322.42L566.25,321.26L566.75,320.49L569.91,318.86L569.51,318.05L569.06,318.46L568.62,318.24L564.26,317.22L564.07,315.71L561.47,316.21L560.43,318.44L558.26,321.39L556.98,320.71L555.67,321.35L554.42,320.62L555.12,320.18L555.61,318.81L556.38,317.52L556.18,316.8L556.77,316.48L557.04,317.04L558.7,317.15L559.44,316.86L558.92,316.44L559.11,315.84L558.13,314.8L557.73,313.08L556.71,312.41L556.91,311L555.64,309.88L554.49,309.72L552.42,308.41L550.56,308.83L549.89,309.45L548.71,309.44L548,310.42L545.93,310.82L544.98,311.46L543.67,310.45L541.88,310.43L540.14,309.97L538.93,310.86L538.73,309.74L537.18,308.6L537.73,306.89L538.5,305.79L539.12,306.03L538.39,304.11L540.94,300.5L542.33,299.99L542.63,298.75L541.22,294.86L542.56,294.69L544.1,293.46L546.27,293.36L549.1,293.72L552.23,294.8L554.44,294.89L555.49,295.54L556.54,294.76L557.28,295.81L559.81,295.59L560.92,296.02L561.11,293.76L561.97,292.76z" },
    { id: "UG", title: "Uganda", d: "M564.6,466.25L561.53,466.21L560.54,466.55L558.87,467.41L558.19,467.12L558.21,465.02L558.86,463.96L559.02,461.72L559.61,460.43L560.68,458.97L561.76,458.23L562.66,457.24L561.54,456.87L561.71,453.61L562.86,452.84L564.64,453.47L566.9,452.82L568.87,452.82L570.6,451.54L571.93,453.48L572.26,454.88L573.49,458.08L572.47,460.11L571.09,461.95L570.29,463.08L570.31,466.03z" },
    { id: "US", title: "United States", d: "M109.25,279.8L109.25,279.8l-1.54,-1.83l-2.47,-1.57l-0.79,-4.36l-3.61,-4.13l-1.51,-4.94l-2.69,-0.34l-4.46,-0.13l-3.29,-1.54l-5.8,-5.64l-2.68,-1.05l-4.9,-1.99l-3.88,0.48l-5.51,-2.59l-3.33,-2.43l-3.11,1.21l0.58,3.93l-1.55,0.36l-3.24,1.16l-2.47,1.86l-3.11,1.16l-0.4,-3.24l1.26,-5.53l2.98,-1.77l-0.77,-1.46l-3.57,3.22l-1.91,3.77l-4.04,3.95l2.05,2.65l-2.65,3.85l-3.01,2.21l-2.81,1.59l-0.69,2.29l-4.38,2.63l-0.89,2.36l-3.28,2.13l-1.92,-0.38l-2.62,1.38l-2.85,1.67l-2.33,1.63l-4.81,1.38l-0.44,-0.81l3.07,-2.27l2.74,-1.51l2.99,-2.71l3.48,-0.56l1.38,-2.06l3.89,-3.05l0.63,-1.03l2.07,-1.83l0.48,-4l1.43,-3.17l-3.23,1.64l-0.9,-0.93l-1.52,1.95l-1.83,-2.73l-0.76,1.94l-1.05,-2.7l-2.8,2.17l-1.72,0l-0.24,-3.23l0.51,-2.02l-1.81,-1.98l-3.65,1.07l-2.37,-2.63l-1.92,-1.36l-0.01,-3.25l-2.16,-2.48l1.08,-3.41l2.29,-3.37l1,-3.15l2.27,-0.45l1.92,0.99l2.26,-3.01l2.04,0.54l2.14,-1.96l-0.52,-2.92l-1.57,-1.16l2.08,-2.52l-1.72,0.07l-2.98,1.43l-0.85,1.43l-2.21,-1.43l-3.97,0.73l-4.11,-1.56l-1.18,-2.65l-3.55,-3.91l3.94,-2.87l6.25,-3.41h2.31l-0.38,3.48l5.92,-0.27l-2.28,-4.34l-3.45,-2.72l-1.99,-3.64l-2.69,-3.17l-3.85,-2.38l1.57,-4.03l4.97,-0.25l3.54,-3.58l0.67,-3.92l2.86,-3.91l2.73,-0.95l5.31,-3.76l2.58,0.57l4.31,-4.61l4.24,1.83l2.03,3.87l1.25,-1.65l4.74,0.51l-0.17,1.95l4.29,1.43l2.86,-0.84l5.91,2.64l5.39,0.78l2.16,1.07l3.73,-1.34l4.25,2.46l3.05,1.13l-0.02,27.65l-0.01,35.43l2.76,0.17l2.73,1.56l1.96,2.44l2.49,3.6l2.73,-3.05l2.81,-1.79l1.49,2.85l1.89,2.23l2.57,2.42l1.75,3.79l2.87,5.88l4.77,3.2l0.08,3.12L109.25,279.8zM285.18,314.23l-1.25,-1.19l-1.88,0.7l-0.93,-1.08l-2.14,3.1l-0.86,3.15l-1,1.82l-1.19,0.62l-0.9,0.2l-0.28,0.98l-5.17,0l-4.26,0.03l-1.27,0.73l-2.87,2.73l0.29,0.54l0.17,1.51l-2.1,1.27l-2.3,-0.32l-2.2,-0.14l-1.33,0.44l0.25,1.15l0,0l0.05,0.37l-2.42,2.27l-2.11,1.09l-1.44,0.51l-1.66,1.03l-2.03,0.5l-1.4,-0.19l-1.73,-0.77l0.96,-1.45l0.62,-1.32l1.32,-2.09l-0.14,-1.57l-0.5,-2.24l-1.04,-0.39l-1.74,1.7l-0.56,-0.03l-0.14,-0.97l1.54,-1.56l0.26,-1.79l-0.23,-1.79l-2.08,-1.55l-2.38,-0.8l-0.39,1.52l-0.62,0.4l-0.5,1.95l-0.26,-1.33l-1.12,0.95l-0.7,1.32l-0.73,1.92l-0.14,1.64l0.93,2.38l-0.08,2.51l-1.14,1.84l-0.57,0.52l-0.76,0.41l-0.95,0.02l-0.26,-0.25l-0.76,-1.98l-0.02,-0.98l0.08,-0.94l-0.35,-1.87l0.53,-2.18l0.63,-2.71l1.46,-3.03l-0.42,0.01l-2.06,2.54l-0.38,-0.46l1.1,-1.42l1.67,-2.57l1.91,-0.36l2.19,-0.8l2.21,0.42l0.09,0.02l2.47,-0.36l-1.4,-1.61l-0.75,-0.13l-0.86,-0.16l-0.59,-1.14l-2.75,0.36l-2.49,0.9l-1.97,-1.55l-1.59,-0.52l0.9,-2.17l-2.48,1.37l-2.25,1.33l-2.16,1.04l-1.72,-1.4l-2.81,0.85l0.01,-0.6l1.9,-1.73l1.99,-1.65l2.86,-1.37l-3.45,-1.09l-2.27,0.55l-2.72,-1.3l-2.86,-0.67l-1.96,-0.26l-0.87,-0.72l-0.5,-2.35l-0.95,0.02l-0.01,1.64l-5.8,0l-9.59,0l-9.53,0l-8.42,0h-8.41h-8.27h-8.55h-2.76h-8.32h-7.96l0.95,3.47l0.45,3.41l-0.69,1.09l-1.49,-3.91l-4.05,-1.42l-0.34,0.82l0.82,1.94l0.89,3.53l0.51,5.42l-0.34,3.59l-0.34,3.54l-1.1,3.61l0.9,2.9l0.1,3.2l-0.61,3.05l1.49,1.99l0.39,2.95l2.17,2.99l1.24,1.17l-0.1,0.82l2.34,4.85l2.72,3.45l0.34,1.87l0.71,0.55l2.6,0.33l1,0.91l1.57,0.17l0.31,0.96l1.31,0.4l1.82,1.92l0.47,1.7l3.19,-0.25l3.56,-0.36l-0.26,0.65l4.23,1.6l6.4,2.31l5.58,-0.02l2.22,0l0.01,-1.35l4.86,0l1.02,1.16l1.43,1.03l1.67,1.43l0.93,1.69l0.7,1.77l1.45,0.97l2.33,0.96l1.77,-2.53l2.29,-0.06l1.98,1.28l1.41,2.18l0.97,1.86l1.65,1.8l0.62,2.19l0.79,1.47l2.19,0.96l1.99,0.68l1.09,-0.09l-0.53,-1.06l-0.14,-1.5l0.03,-2.16l0.65,-1.42l1.53,-1.51l2.79,-1.37l2.55,-2.37l2.36,-0.75l1.74,-0.23l2.04,0.74l2.45,-0.4l2.09,1.69l2.03,0.1l1.05,-0.61l1.04,0.47l0.53,-0.42l-0.6,-0.63l0.05,-1.3l-0.5,-0.86l1.16,-0.5l2.14,-0.22l2.49,0.36l3.17,-0.41l1.76,0.8l1.36,1.5l0.5,0.16l2.83,-1.46l1.09,0.49l2.19,2.68l0.79,1.75l-0.58,2.1l0.42,1.23l1.3,2.4l1.49,2.68l1.07,0.71l0.44,1.35l1.38,0.37l0.84,-0.39l0.7,-1.89l0.12,-1.21l0.09,-2.1l-1.33,-3.65l-0.02,-1.37l-1.25,-2.25l-0.94,-2.75l-0.5,-2.25l0.43,-2.31l1.32,-1.94l1.58,-1.57l3.08,-2.16l0.4,-1.12l1.42,-1.23l1.4,-0.22l1.84,-1.98l2.9,-1.01l1.78,-2.53l-0.39,-3.46l-0.29,-1.21l-0.8,-0.24l-0.12,-3.35l-1.93,-1.14l1.85,0.56l-0.6,-2.26l0.54,-1.55l0.33,2.97l1.43,1.36l-0.87,2.4l0.26,0.14l1.58,-2.81l0.9,-1.38l-0.04,-1.35l-0.7,-0.64l-0.58,-1.94l0.92,0.9l0.62,0.19l0.21,0.92l2.04,-2.78l0.61,-2.62l-0.83,-0.17l0.85,-1.02l-0.08,0.45l1.79,-0.01l3.93,-1.11l-0.83,-0.7l-4.12,0.7l2.34,-1.07l1.63,-0.18l1.22,-0.19l2.07,-0.65l1.35,0.07l1.89,-0.61l0.22,-1.07l-0.84,-0.84l0.29,1.37l-1.16,-0.09l-0.93,-1.99l0.03,-2.01l0.48,-0.86l1.48,-2.28l2.96,-1.15l2.88,-1.34l2.99,-1.9l-0.48,-1.29l-1.83,-2.25L285.18,314.23zM45.62,263.79l-1.5,0.8l-2.55,1.86l0.43,2.42l1.43,1.32l2.8,-1.95l2.43,-2.47l-1.19,-1.63L45.62,263.79zM0,235.22l2.04,-1.26l0.23,-0.68L0,232.61V235.22zM8.5,250.59l-2.77,0.97l1.7,1.52l1.84,1.04l1.72,-0.87l-0.27,-2.15L8.5,250.59zM105.85,283.09l-2.69,0.38l-1.32,-0.62l-0.17,1.52l0.52,2.07l1.42,1.46l1.04,2.13l1.69,2.1l1.12,0.01l-2.44,-3.7L105.85,283.09zM37.13,403.77l-1,-0.28l-0.27,0.26l0.02,0.19l0.32,0.24l0.48,0.63l0.94,-0.21l0.23,-0.36L37.13,403.77zM34.14,403.23l1.5,0.09l0.09,-0.32l-1.38,-0.13L34.14,403.23zM40.03,406.52l-0.5,-0.26l-1.07,-0.5l-0.21,-0.06l-0.16,0.28l0.19,0.58l-0.49,0.48l-0.14,0.33l0.46,1.08l-0.08,0.83l0.7,0.42l0.41,-0.49l0.9,-0.46l1.1,-0.63l0.07,-0.16l-0.71,-1.04L40.03,406.52zM32.17,401.38l-0.75,0.41l0.11,0.12l0.36,0.68l0.98,0.11l0.2,0.04l0.15,-0.17l-0.81,-0.99L32.17,401.38zM27.77,399.82l-0.43,0.3l-0.15,0.22l0.94,0.55l0.33,-0.3l-0.06,-0.7L27.77,399.82z" },
    { id: "UY", title: "Uruguay", d: "M313.68,551.79L315.5,551.45L318.31,553.95L319.35,553.86L322.24,555.94L324.44,557.76L326.06,560.01L324.82,561.58L325.6,563.48L324.39,565.6L321.22,567.48L319.15,566.8L317.63,567.17L315.04,565.71L313.14,565.82L311.43,563.95L311.65,561.79L312.26,561.05L312.23,557.75L312.98,554.38z" },
    { id: "UZ", title: "Uzbekistan", d: "M661.76,350.95L661.84,348.79L658.11,347.27L655.18,345.52L653.35,343.83L650.14,341.32L648.76,337.53L647.82,336.86L644.79,337.03L643.72,336.26L643.42,333.27L639.64,331.27L637.28,333.47L634.88,334.77L635.34,336.65L632.18,336.7L632.07,322.57L639.29,320.22L639.81,320.57L644.16,323.41L646.45,324.89L649.13,328.39L652.42,327.83L657.23,327.53L660.58,330.33L660.37,334.13L661.74,334.16L662.31,337.22L665.88,337.34L666.64,339.09L667.69,339.07L668.92,336.42L672.61,333.81L674.22,333.11L675.05,333.48L672.7,335.91L674.77,337.31L676.77,336.38L680.09,338.34L676.5,340.98L674.37,340.62L673.21,340.72L672.81,339.7L673.39,337.99L669.64,338.85L668.75,341.2L667.42,343.21L665.08,343.04L664.35,344.63L666.41,345.49L667.01,348.15L665.44,351.72L663.32,350.98z" },
    { id: "VE", title: "Venezuela", d: "M275.25,430.35L275.17,431.02L273.52,431.35L274.44,432.64L274.4,434.13L273.17,435.77L274.23,438.01L275.44,437.83L276.07,435.79L275.2,434.79L275.06,432.65L278.55,431.49L278.16,430.15L279.14,429.25L280.15,431.25L282.12,431.3L283.94,432.88L284.05,433.82L286.56,433.84L289.56,433.55L291.17,434.82L293.31,435.17L294.88,434.29L294.91,433.57L298.39,433.4L301.75,433.36L299.37,434.2L300.32,435.54L302.57,435.75L304.69,437.14L305.14,439.4L306.6,439.33L307.7,440L305.48,441.65L305.23,442.68L306.19,443.72L305.5,444.24L303.77,444.69L303.83,445.99L303.07,446.76L304.96,448.88L305.34,449.67L304.31,450.74L301.17,451.78L299.16,452.22L298.35,452.88L296.12,452.18L294.04,451.82L293.52,452.08L294.77,452.8L294.66,454.67L295.05,456.43L297.42,456.67L297.58,457.25L295.57,458.05L295.25,459.23L294.09,459.68L292.01,460.33L291.47,461.19L289.29,461.37L287.74,459.89L286.89,457.12L286.14,456.14L285.12,455.53L286.54,454.14L286.45,453.51L285.65,452.68L285.09,450.83L285.31,448.82L285.93,447.88L286.44,446.38L285.45,445.89L283.85,446.21L281.83,446.06L280.7,446.36L278.72,443.95L277.09,443.59L273.49,443.86L272.82,442.88L272.13,442.65L272.03,442.06L272.36,441.02L272.14,439.89L271.52,439.27L271.16,437.97L269.72,437.79L270.49,436.13L270.84,434.12L271.65,433.06L272.74,432.25L273.45,430.83z" },
    { id: "VN", title: "Vietnam", d: "M778.21,401.87L774.47,404.43L772.13,407.24L771.51,409.29L773.66,412.38L776.28,416.2L778.82,417.99L780.53,420.32L781.81,425.64L781.43,430.66L779.1,432.53L775.88,434.36L773.6,436.72L770.1,439.34L769.08,437.53L769.87,435.62L767.79,434.01L770.22,432.87L773.16,432.67L771.93,430.94L776.64,428.75L776.99,425.33L776.34,423.41L776.85,420.53L776.14,418.49L774.02,416.47L772.25,413.9L769.92,410.44L766.56,408.68L767.37,407.61L769.16,406.84L768.07,404.25L764.62,404.22L763.36,401.5L761.72,399.13L763.23,398.39L765.46,398.41L768.19,398.06L770.58,396.44L771.93,397.58L774.5,398.13L774.05,399.87L775.39,401.09z" },
    { id: "VU", title: "Vanuatu", d: "M945.87,509.9l-0.92,0.38l-0.94,-1.27l0.1,-0.78L945.87,509.9zM943.8,505.46l0.46,2.33l-0.75,-0.36l-0.58,0.16l-0.4,-0.8l-0.06,-2.21L943.8,505.46z" },
    { id: "YE", title: "Yemen", d: "M624.16,416.33L622.13,417.12L621.59,418.4L621.52,419.39L618.73,420.61L614.25,421.96L611.74,423.99L610.51,424.14L609.67,423.97L608.03,425.17L606.24,425.72L603.89,425.87L603.18,426.03L602.57,426.78L601.83,426.99L601.4,427.72L600.01,427.66L599.11,428.04L597.17,427.9L596.44,426.23L596.52,424.66L596.07,423.81L595.52,421.69L594.71,420.5L595.27,420.36L594.98,419.04L595.32,418.48L595.2,417.22L596.43,416.29L596.14,415.06L596.89,413.63L598.04,414.39L598.8,414.12L602.03,414.05L602.55,414.35L605.26,414.64L606.33,414.49L607.03,415.46L608.34,414.98L610.35,411.91L612.97,410.59L621.05,409.46L623.25,414.3z" },
    { id: "ZA", title: "South Africa", d: "M563.63,548.71l-0.55,0.46l-1.19,1.63l-0.78,1.66l-1.59,2.33l-3.17,3.38l-1.98,1.98l-2.12,1.51l-2.93,1.3l-1.43,0.17l-0.36,0.93l-1.7,-0.5l-1.39,0.64l-3.04,-0.65l-1.7,0.41l-1.16,-0.18l-2.89,1.33l-2.39,0.54l-1.73,1.28l-1.28,0.08l-1.19,-1.21l-0.95,-0.06l-1.21,-1.51l-0.13,0.47l-0.37,-0.91l0.02,-1.96l-0.91,-2.23l0.9,-0.6l-0.07,-2.53l-1.84,-3.05l-1.41,-2.74l0,-0.01l-2.01,-4.15l1.34,-1.57l1.11,0.87l0.47,1.36l1.26,0.23l1.76,0.6l1.51,-0.23l2.5,-1.63l0,-11.52l0.76,0.46l1.66,2.93l-0.26,1.89l0.63,1.1l2.01,-0.32l1.4,-1.39l1.33,-0.93l0.69,-1.48l1.37,-0.72l1.18,0.38l1.34,0.87l2.28,0.15l1.79,-0.72l0.28,-0.96l0.49,-1.47l1.53,-0.25l0.84,-1.15l0.93,-2.03l2.52,-2.26l3.97,-2.22l1.14,0.03l1.36,0.51l0.94,-0.36l1.49,0.3l1.34,4.26l0.73,2.17l-0.5,3.43l0.24,1.11l-1.42,-0.57l-0.81,0.22l-0.26,0.9l-0.77,1.17l0.03,1.08l1.67,1.7l1.64,-0.34l0.57,-1.39l2.13,0.03l-0.7,2.28l-0.33,2.62l-0.73,1.43L563.63,548.71zM556.5,547.75l-1.22,-0.98l-1.31,0.65l-1.52,1.25l-1.5,2.03l2.1,2.48l1,-0.32l0.52,-1.03l1.56,-0.5l0.48,-1.05l0.86,-1.56L556.5,547.75z" },
    { id: "ZM", title: "Zambia", d: "M567.11,489.21L568.43,490.47L569.14,492.87L568.66,493.64L568.1,495.94L568.64,498.3L567.76,499.29L566.91,501.95L568.38,502.69L559.87,505.07L560.14,507.12L558.01,507.52L556.42,508.67L556.08,509.68L555.07,509.9L552.63,512.3L551.08,514.19L550.13,514.26L549.22,513.92L546.09,513.6L545.59,513.38L545.56,513.14L544.46,512.48L542.64,512.31L540.34,512.98L538.51,511.16L536.62,508.78L536.75,499.62L542.59,499.66L542.35,498.67L542.77,497.6L542.28,496.27L542.6,494.89L542.3,494.01L543.27,494.08L543.43,494.96L544.74,494.89L546.52,495.15L547.46,496.44L549.7,496.84L551.42,495.94L552.05,497.43L554.2,497.83L555.23,499.05L556.38,500.62L558.53,500.65L558.29,497.57L557.52,498.08L555.56,496.98L554.8,496.47L555.15,493.62L555.65,490.27L555.02,489.02L555.82,487.22L556.57,486.89L560.34,486.41L561.44,486.7L562.61,487.41L563.73,487.89L565.51,488.36z" },
    { id: "ZW", title: "Zimbabwe", d: "M562.71,527L561.22,526.7L560.27,527.06L558.92,526.55L557.78,526.52L555.99,525.16L553.82,524.7L553,522.8L552.99,521.75L551.79,521.43L548.62,518.18L547.73,516.47L547.17,515.95L546.09,513.6L549.22,513.92L550.13,514.26L551.08,514.19L552.63,512.3L555.07,509.9L556.08,509.68L556.42,508.67L558.01,507.52L560.14,507.12L560.32,508.2L562.66,508.14L563.96,508.75L564.56,509.47L565.9,509.68L567.35,510.62L567.36,514.31L566.81,516.35L566.69,518.55L567.14,519.43L566.83,521.17L566.4,521.44L565.66,523.59z" }
];
//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/countries.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countries_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fb_service__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FacebookloginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacebookloginComponent = (function () {
    function FacebookloginComponent(countriesService, fbService) {
        this.countriesService = countriesService;
        this.fbService = fbService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.btn_text = 'Sign in with Facebook';
        // TODO move this to fb service.
        FB.init({
            appId: '674727196042358',
            version: 'v2.8',
        });
    }
    FacebookloginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.fbService.user$
            .subscribe(function (user) {
            _this.user = user;
            _this.btn_text = user.fid !== 0 ? 'Sign out with Facebook' : 'Sign in with Facebook';
            // TODO There is a bug with clear map on logout.
            _this.countriesService.getVisitedCountries(user.fid);
        });
    };
    FacebookloginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FacebookloginComponent.prototype.onFacebookLoginClick = function () {
        this.fbService.fbStatusChange();
    };
    return FacebookloginComponent;
}());
FacebookloginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'app-facebooklogin',
        template: __webpack_require__(675),
        styles: [__webpack_require__(671)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__countries_service__["a" /* CountriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__countries_service__["a" /* CountriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__fb_service__["a" /* FbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__fb_service__["a" /* FbService */]) === "function" && _b || Object])
], FacebookloginComponent);

var _a, _b;
//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/facebooklogin.component.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(507);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/index.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countries_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fb_service__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = (function () {
    function MapComponent(countriesService, fbService, route) {
        this.countriesService = countriesService;
        this.fbService = fbService;
        this.route = route;
        this.fid = 0;
        this.countries = [];
        this.visitedCountries = [];
        this.access_token = '';
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countriesService.getCountries()
            .then(function (countries) { return _this.countries = countries; });
        this.subscription = this.countriesService.visitedCountries$
            .subscribe(function (visitedCountries) { return _this.visitedCountries = visitedCountries; });
        this.route.params.subscribe(function (params) {
            var fid = Number(params['fid']);
            if (isNaN(fid)) {
                if (_this.fid === 0) {
                    var user = _this.fbService.getUSer();
                    _this.fid = user.fid;
                }
            }
            else {
                _this.fid = fid;
            }
            _this.countriesService.getVisitedCountries(_this.fid);
        });
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MapComponent.prototype.selectCountry = function (country) {
        var user = this.fbService.getUSer();
        if (!this.fid || this.fid === user.fid) {
            var index = this.visitedCountries.indexOf(country.id);
            if (index === -1) {
                this.visitedCountries.push(country.id);
            }
            else {
                this.visitedCountries.splice(index, 1);
            }
            this.countriesService.setVisitedCountries(this.visitedCountries, user.access_token);
        }
    };
    return MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
    __metadata("design:type", Number)
], MapComponent.prototype, "fid", void 0);
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__(676),
        styles: [__webpack_require__(672)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__countries_service__["a" /* CountriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__countries_service__["a" /* CountriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__fb_service__["a" /* FbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__fb_service__["a" /* FbService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], MapComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/map.component.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// Statics

// Operators






//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/rxjs-operators.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    "output-path": "../static/"
};
//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/environment.js.map

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/voron/dev/django/map/frontend/src/polyfills.js.map

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = "#logo {\n  display: inline-block;\n  float: left;\n  padding: 0 15px;\n  color: #333;\n  text-decoration: none;\n  text-transform: uppercase; }\n"

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = "#compare {\n  float: left;\n  width: 100%; }\n\n.col-6 {\n  float: left;\n  box-sizing: border-box;\n  padding: 0 30px;\n  width: 50%; }\n"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "#main-menu {\n  float: right; }\n  #main-menu a {\n    padding: 3px 5px;\n    margin: 0 5px;\n    display: inline-block; }\n\n.btn-facebook {\n  cursor: pointer;\n  background: -webkit-linear-gradient(#4c69ba, #3b55a0);\n  background: linear-gradient(#4c69ba, #3b55a0);\n  border: none;\n  float: right;\n  font-size: .8rem;\n  padding: 5px 10px;\n  color: #fff; }\n"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "svg {\n  display: block;\n  margin: 0 auto;\n  min-height: 400px;\n  max-width: 100vw;\n  max-height: calc(100vh - 120px); }\n  svg path {\n    fill: #ccc; }\n    svg path.filtered {\n      fill: #aaa; }\n    svg path:hover {\n      fill: #555; }\n    svg path.visited {\n      fill: #777; }\n      svg path.visited.filtered {\n        fill: #555; }\n\n#country_filter {\n  padding: 2px 5px; }\n"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "<a id=\"logo\" routerLink=\"\"><h1>{{ title }}</h1></a>\n<app-facebooklogin></app-facebooklogin>\n<!--<app-firebaselogin></app-firebaselogin>-->\n<router-outlet></router-outlet>\n"

/***/ },

/***/ 674:
/***/ function(module, exports) {

module.exports = "<div id=\"compare\">\n  <div class=\"col-6\">\n    <app-map [fid]=\"1295742607131332\"></app-map>\n  </div>\n  <div class=\"col-6\">\n    <app-map [fid]=\"1295742607131332\"></app-map>\n  </div>\n</div>\n"

/***/ },

/***/ 675:
/***/ function(module, exports) {

module.exports = "<div>\n\t<div id=\"socials\">\n\t\t<button class=\"btn btn-lg btn-social btn-facebook\" (click)=\"onFacebookLoginClick()\">\n\t\t\t\t<i class=\"fa fa-facebook fa-fw\"></i>{{ btn_text }}\n\t\t</button>\n\t</div>\n\t<nav id=\"main-menu\">\n\t\t<a *ngIf=\"user.fid\" routerLink=\"/u/{{ user.fid }}\">My map</a>\n\t</nav>\n</div>\n"

/***/ },

/***/ 676:
/***/ function(module, exports) {

module.exports = "<p class=\"error\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n<svg id=\"map\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:amcharts=\"http://amcharts.com/ammap\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" viewBox=\"0 0 1000 700\">\n\t<defs>\n\t\t<style type=\"text/css\">\n\t\t\t.land\n\t\t\t{\n\t\t\t\tfill: #CCCCCC;\n\t\t\t\tfill-opacity: 1;\n\t\t\t\tstroke:white;\n\t\t\t\tstroke-opacity: 1;\n\t\t\t\tstroke-width:0.5;\n\t\t\t}\n\t\t</style>\n\t</defs>\n\t<g>\n\t  <path *ngFor=\"let country of countries\" (click)=\"selectCountry(country)\" [ngClass]=\"{'visited': (visitedCountries.indexOf(country.id) !== -1), 'filtered': (country.title.toLowerCase().indexOf(country_filter.value.toLowerCase()) !== -1) }\" id=\"{{ country.id }}\" title=\"{{ country.title }}\" [attr.d]=\"country.d\"/>\n  </g>\n</svg>\n<input id=\"country_filter\" placeholder=\"Country filter\" #country_filter (keyup)=\"0\">\n"

/***/ },

/***/ 709:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ }

},[709]);
//# sourceMappingURL=main.bundle.map