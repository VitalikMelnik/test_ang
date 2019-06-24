import './scss/_index.scss';
import * as angular from 'angular';
import '@uirouter/angularjs';
import 'angular-local-storage';

import {homeState, listState,addState} from "./app.states";
import {AppComponent} from './app.component';
import {NavComponent} from "./nav/nav.component";
import {AddComponent} from "./add/add.component";
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {StateProvider} from '@uirouter/angularjs';


let appModule = angular.module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider: StateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', homeState)
            .state('list', listState)
            .state('add', addState);
        $urlRouterProvider.otherwise("/");
    }])
    .component('myApp', AppComponent)
    .component('appNav', NavComponent)
    .component('appHome', HomeComponent)
    .component('appList', ListComponent)
    .component('appAdd', AddComponent);

angular.bootstrap(document, [appModule.name]);

