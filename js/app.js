var app = {

	sendGeolocation: function() {
		this.geolocationController.getGeolocation();
	},
	
	takePhoto: function() {
		this.cameraController.getPicture();
	}
	
};
