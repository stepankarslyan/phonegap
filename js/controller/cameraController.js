angular.module('app').
controller('CameraController', ['$scope', 'CameraService', function($scope, CameraService) {
	
	$scope.getPicture = function() {
		var controller = this;

		CameraService.getPicture({

			onSuccess: function(picture) {
				controller.sendToServer(picture);
			},
	
			onError: function(error) {
				controller.displayError(error);
			}
	
		});
	};

	$scope.sendToServer = function(picture) {
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
	};
	
	$scope.displaySuccess = function(message) {
		alert(message);
	};

	$scope.displayError = function(error) {
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
	};
	
}]);

