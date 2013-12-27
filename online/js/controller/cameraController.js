app.cameraController = {

	getPicture: function() {
		var controller = this;
	
		app.cameraService.getPicture({
		
			onSuccess: function(picture) {
				controller.sendToServer(picture);
			},
			
			onError: function(error) {
				controller.displayError(error);
			}
			
		});
	},
	
	sendToServer: function(picture) {
		var controller = this;
		
		$.ajax({
			url: '/camera',
			type: 'POST',
			
			data: {
				picture: picture
			},
			success: function() {
				controller.displaySuccess("picture saved on server successly");
			},
			
			error: function(error) {
				controller.displayError(error);
			}
			
		});
	},
	
	displaySuccess: function(message) {
		alert(message);
	},
	
	displayError: function(error) {
		if(error.message == undefined && typeof(error) != 'string') {
			alert("Code: " + error.status + ' ' + error.statusText);
		}
		else {
			
			if(typeof(error) == 'string') {
				alert(error);
			}
			else {
				alert("Code: " + error.code + ' ' + error.message);
			}
			
		}
	}
	
};
