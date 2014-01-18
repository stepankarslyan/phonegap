angular.module('app').
controller('onlineController', ['$scope','geolocationService', 'cameraService', function($scope, geolocationService, cameraService) {
	
	$scope.controller = {
	
		serverUrl: 'http://localhost:8080',

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
			var config = {
				url: controller.serverUrl + "/geolocation",
				data: {
					position: position
				},
				successMessage: "Your data sent to server"
			};
			controller.sendToServer(config);
		},
				
		getPicture: function() {
			var controller = this;

			cameraService.getPicture({

				onSuccess: function(picture) {
					controller.sendPicture(picture);
				},
	
				onError: function(error) {
					controller.displayError(error);
				}
	
			});
		},

		sendPicture: function(picture) {
			var controller = this;
			var config = {
				url: controller.serverUrl + "/geolocation",
				data: {
					picture: picture
				},
				successMessage: "Your picture saved on server successly"
			};
			controller.sendToServer(config);
		},
		
		sendToServer: function(config) {
			var controller = this;
	
			$.ajax({
				type: "POST",
				url: config.url,
		
				data: JSON.stringify(config.data),
		
				success: function() {
					controller.displaySuccess(config.successMessage);
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
