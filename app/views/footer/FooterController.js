'use strict';

App.controller('FooterController', ['$scope', function HomeController ($scope) {
	this.init = function () {
		this.initScope();
		this.load();
	};

	this.initScope = function () {
		$scope.currentYear = new Date().getFullYear();
	};

	this.load = function () {
		this.setPageEvents();
	};

	this.setPageEvents = function () {

	};

	this.init();
}]);

