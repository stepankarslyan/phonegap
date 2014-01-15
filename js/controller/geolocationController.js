angular.module('app').
controller('geolocationController', ['$scope', 'geolocationService', function($scope, geolocationService) {

	$scope.controller = {

		locationText: "Push buttom to send to server your location information",
	
		getGeolocation: function() {		
			var controller = this;
	
			geolocationService.getGeolocation({
	
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
				url: "http://192.168.10.105:8080/geolocation",
		
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
			if (error.code != undefined) {
				alert('code: ' + error.code + ' ' + error.message);
			}
			else{
				alert('code: ' + error.status + ' ' + error.statusText);
			}
		},

		displaySuccess: function(message) {
			alert(message);
		}
	};
	
}]);
