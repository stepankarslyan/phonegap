angular.module('app').
controller('GeolocationController', ['$scope', 'GeolocationService', function($scope, GeolocationService) {

	// Create a real controller object, look the other controller for details...

	$scope.sendGeolocation = function() {		
		var controller = this;
	
		GeolocationService.getGeolocation({
	
			onSuccess: function(position) {
				controller.sendGeolocation(position);	
			},
		
			onError: function(error) {
				controller.displayError(error);			
			}
		
		});	
	};

	$scope.sendGeolocation = function(position) {
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
	};

	$scope.displayError = function(error) {
		if (error.code != undefined) {
			alert('code: ' + error.code + ' ' + error.message);
		}
		else{
			alert('code: ' + error.status + ' ' + error.statusText);
		}
	};

	$scope.displaySuccess = function(message) {
		alert(message);
	};
	
}]);
