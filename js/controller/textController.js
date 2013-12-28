angular.module('app', []).
controller('textController', ['$scope', function($scope) {

	$scope.text = {
		location: 'Push buttom to send to server your location information',
		camera: 'Push buttom to capture photo and send to server automaticly'
	};
	
}]);
