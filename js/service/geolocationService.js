angular.module('app').
factory('geolocationService', function() {

	return {

		getGeolocation: function(config) {
			navigator.geolocation.getCurrentPosition(
				function(position) {
					config.onSuccess(position);
				},
			
				function(error) {
					config.onError(error);
				}
			);	
		}
	
	};

});
