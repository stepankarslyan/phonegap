app.geolocationController = {
	
	getGeolocation: function() {		
		var controller = this;
		
		app.geolocationService.getGeolocation({
		
			onSuccess: function(position) {
				controller.sendGeolocation(position);	
			},
			
			onError: function(error) {
				controller.displayError(error);			
			}
			
		});	
	},

	sendGeolocation: function(position) {
		var controller = this;
		
		$.ajax({
			type: "POST",
			url: "/geolocation",
			
			data: {
				position: JSON.stringify(position)
			},
			
			success: function() {
				controller.displaySuccess("Your data is sent to the server!");
			},

			error: function(error) {
				controller.displayError(error);
			}
      
		});		     
	}, 
	
	displayError: function(error) {
		alert('code: ' + error.code + ' ' + error.message);
	},
	
	displaySuccess: function(message) {
		alert(message);
	}
	
};
