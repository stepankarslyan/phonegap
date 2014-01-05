angular.module('app').
controller('cameraController', ['$scope', 'cameraService', function($scope, cameraService) {

	$scope.controller = {
	
		cameraText: "Push buttom to capture photo and send to server automaticly",
	
		getPicture: function() {
			var controller = this;

			cameraService.getPicture({

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
				type: 'POST',
				url: 'http://192.168.10.105:8080/pictures',
	
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
	
}]);
