angular.module('app').
controller('onlineController', ['$scope','geolocationService', 'cameraService', 'connectivitySwitchService', function($scope, geolocationService, cameraService, connectivitySwitchService) {
	
	// Don't put controller in scope
	// - it's anti patern, the view must access the model not the controller !
	// - it's not good for performance as angular js is checking the changes on scope to refresh the view
	// Reuse the pattern we used in the nodejs project
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
				data:{
					position: JSON.stringify(position)
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
					picture: JSON.stringify(picture)
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
		
				data: config.data,
		
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
		},
		
		connectivitySwitch: function() {
	
			connectivitySwitchService.toggle({
				onlineLocation: "/online",
				offlineLocation: "/offline"
			});
		
			$scope.$apply();
		},
		
	};
	
	// Is it necessary ? Think about what you need, avoid copy paste without 
	// thinking of the reingeneering!
	document.addEventListener("deviceready", function() {
		$scope.controller.connectivitySwitch(); 
	}, false);
	
}]);
