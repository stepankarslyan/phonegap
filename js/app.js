angular.module('app', []).
config(['$routeProvider', function ($routeProvider) { 
	$routeProvider.
		when('/online', { templateUrl: '/templates/online.html'}).
		when('/offline', { templateUrl: '/templates/offline.html'}).
		otherwise({ redirectTo: '/' });
}]).
controller('appController', ['$scope', 'connectivitySwitchService', function($scope, connectivitySwitchService) {

	$scope.connectivitySwitch = function() {
	
		connectivitySwitchService.switch({
			onlineLocation: "#/online",
			offlineLocation: "#/offline"
		});
	};
	
}]);

