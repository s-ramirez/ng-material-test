'use strict';

angular.module('materialTest', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
	.config(function ($routeProvider, $mdThemingProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/main.html',
				controller: 'MainCtrl'
			})
			.when('/secondary', {
				templateUrl: 'app/secondary/secondary.html',
				controller: 'SecondaryCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});

      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('light-green');
	});
