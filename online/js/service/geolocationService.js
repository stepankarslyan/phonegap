app.geolocationService = {

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
