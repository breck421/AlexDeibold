'use strict';

App.factory("SocialMediaService", function(AjaxService) {
	return {
		getLinks: function() {
			var serviceUrl = "db/SocialMedia.json";
			return AjaxService.makeCall(serviceUrl);
		}
	};
});