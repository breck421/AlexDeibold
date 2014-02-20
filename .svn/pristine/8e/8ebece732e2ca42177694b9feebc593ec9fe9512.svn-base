'use strict';

App.factory('SponsorService', function SponsorService(AjaxService) {
	return {
		getSources: function() {
			var serviceUrl = "db/Sponsors.json";

			return AjaxService.makeCall(serviceUrl);
		}
	};
});