(function() {
    'use strict';

    angular.module('templates', []);

    var app = angular.module('app', [
        'ngRoute',
        'ngAnimate',
        'templates',
        'app.filters',
        'app.services',
        'app.directives',
        'app.controllers'
    ]).value('version', '0.1');

    app.config(['$routeProvider', function($routeProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: 'home.html'
        });
        $routeProvider.when('/images', {
            templateUrl: 'images.html'
        });
        $routeProvider.when('/video', {
            templateUrl: 'video.html'
        });
        $routeProvider.when('/news', {
            templateUrl: 'news.html'
        });
        $routeProvider.when('/about', {
            templateUrl: 'about.html'
        });
        $routeProvider.otherwise({ redirectTo: '/' });
    }]);
}());
