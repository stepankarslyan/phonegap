app.cameraService = {

	getPicture: function(config) {
		navigator.camera.getPicture(
			function(picture) {
				config.onSuccess(picture);
			},
			
			function(error) {
				config.onError(error)
			},
			
			{
				quality: 50,
				destinationType: Camera.DestinationType.DATA_URL,
				encodingType: Camera.EncodingType.JPEG
			}
		);
	}
	
};
