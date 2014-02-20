'use strict';

App.controller('HeaderController', ['$scope', function HomeController ($scope) {
	this.init = function () {
		this.initScope();
		this.load();
	};

	this.initScope = function () {

	};

	this.load = function () {
		this.setPageEvents();
	};

	this.setPageEvents = function () {
		$scope.clearActiveTab = function() {
			$('ul.nav li').removeClass('active');
		}
	};

	this.init();
}]);