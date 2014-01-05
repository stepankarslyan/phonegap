angular.module('app').
controller('connectivitySwitchController', ['$scope', 'connectivitySwitchService', function($scope, connectivitySwitchService) {

	$scope.connectivitySwitch = function() {
	
		connectivitySwitchService.switch({
			onlineLocation: "/online",
			offlineLocation: "/offline"
		});
		
		$scope.$apply();
	};
	
}]);
