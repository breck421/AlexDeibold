'use strict';

var App = angular.module('App', ['ngResource', 'ngRoute', 'ngSanitize']);

App.config(function ($routeProvider) {
	var viewsPath = 'app/views/';

	var home = {
		templateUrl: viewsPath + 'home/home.html',
		controller: 'HomeController',
		activeTab: 'home'
	};

	var about = {
		templateUrl: viewsPath + 'about/about.html',
		controller: 'AboutController',
		activeTab: 'about'
	};

	var photo = {
		templateUrl: viewsPath + 'photos/photos.html',
		controller: 'PhotosController',
		activeTab: 'photos'
	};

	var contact = {
		templateUrl: viewsPath + 'contact/contact.html',
		controller: 'ContactController',
		activeTab: 'contact'
	};

	$routeProvider.when('/', home);
	$routeProvider.when('/home', home);
	$routeProvider.when('/about', about);
	$routeProvider.when('/photos', photo);
	$routeProvider.when('/contact', contact);
	// $routeProvider.otherwise({redirectTo: 'home'});
});

App.directive('navToggle', function () {
	return {
		restrict: 'A',
		replace: false,
		link: function(scope, $el, attrs) {
			$el.on('click', 'li', function (evt) {
				var $li = $(evt.currentTarget);
				$li.siblings().removeClass('active');
				$li.addClass('active');
			});
		}
	};
});