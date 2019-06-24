// not working in progress


import * as angular from "angular";

let appModule = angular.module('app');

appModule.factory('userService', ['$rootScope', function ($rootScope) {
    var service = {
        model: {
            name: '',
            email: ''
        },
        SaveState: function () {
            sessionStorage.userService = angular.toJson(service.model);
        },
        RestoreState: function () {
            service.model = angular.fromJson(sessionStorage.userService);
        }
    };

    $rootScope.$on("savestate", service.SaveState);
    $rootScope.$on("restorestate", service.RestoreState);

    return service;
}]);

