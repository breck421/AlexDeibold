'use strict';

App.controller('ContactController', ['$scope', 'EmailService', function ContactController ($scope, EmailService) {
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
		$scope.formSubmit = function(form) {
			EmailService.send(form).then(function(data) {
				if(data.message.sent) {
					$scope.resetForm();
					alert("Message Sent");
				}
				else {
					alert("Something went wrong.  Try emailing me.");
				}
			});
		};

		$scope.resetForm = function() {
			$scope.name = "";
			$scope.email = "";
			$scope.message = "";
		};
	};

	this.init();
}]);