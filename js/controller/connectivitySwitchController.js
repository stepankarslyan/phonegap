angular.module('app').
controller('connectivitySwitchController', ['$scope', 'connectivitySwitchService', function($scope, connectivitySwitchService) {

	$scope.connectivitySwitch = function() {
	
		connectivitySwitchService.toggle({
			onlineLocation: "/online",
			offlineLocation: "/offline"
		});
		
		$scope.$apply();
	};
	
	document.addEventListener("deviceready", function() {
		$scope.connectivitySwitch(); 
	}, false);
	
}]);
