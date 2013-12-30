angular.module('app').
controller('textController', ['$scope', function($scope) {

	// Use controller object
	// textController is not a well choosen name, use something corresponding to business vocabulary not to technical vocabulary

	$scope.text = {
		location: 'Push buttom to send to server your location information',
		camera: 'Push buttom to capture photo and send to server automaticly'
	};
	
}]);
