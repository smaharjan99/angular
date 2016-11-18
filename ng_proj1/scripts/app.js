'use strict!';

var appName = angular.module("appName", ['ngRoute']); //[] placeholder for dependencies
appName.config(function ($locationProvider, $routeProvider) {
    $routeProvider.when('/', {
            // controller:"personCtrl",
            templateUrl: "/view/samplePerson.html"
        })
        .when("/forms", {
            controller: "personCtrl",
            templateUrl: "/view/personForm.html"
        })
        .when("/tables", {
            controller: "personCtrl",
            templateUrl: "/view/tableForm.html"
        }).otherwise({
            templateUrl: "/view/error.html"
        });
    $locationProvider
        .html5Mode(false)
        .hashPrefix('!');
});