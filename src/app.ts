import './scss/_index.scss';
import * as angular from 'angular';
import '@uirouter/angularjs';
import { homeState, aboutState } from "./app.states";
import { AppComponent } from './app.component';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StateProvider } from '@uirouter/angularjs';

let appModule = angular.module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider: StateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', homeState)
            .state('about', aboutState);

      $urlRouterProvider.otherwise("/");

    }])
    .component('myApp', AppComponent)
    .component('appNav', NavComponent)
    .component('appHome', HomeComponent)
    .component('appAbout', AboutComponent);

angular.bootstrap(document, [appModule.name]);