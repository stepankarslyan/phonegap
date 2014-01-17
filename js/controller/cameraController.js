angular.module('app').
controller('cameraController', ['$scope', 'cameraService', function($scope, cameraService) {

	$scope.controller = {
	
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
				url: 'http://192.168.10.105:8080/pictures', // You shoudl find a way to put the server url only in one config place and not to repeat in code in every ajax because when code will grow you'll duplicate the url and it will be difficult to change later
	
				data: {
					picture: picture
				}, // <-- you forgot one empty line before function
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
			// Why this mess? Don't put differrent kind of structure in the same parameter
			// Why do you ask to display error that is undefined or a string? Call this function with the right error object !
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
