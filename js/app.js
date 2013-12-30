angular.module('app', []).
config(['$routeProvider', function ($routeProvider) { 
	$routeProvider.
		when('/online', { templateUrl: '/templates/online.html'}). // link controller to view here
		when('/offline', { templateUrl: '/templates/offline.html'}).
		otherwise({ redirectTo: '/' });
}]).

// Define controller in a file corresponding to the controller name in the controller folder not in app.js
controller('appController', ['$scope', 'connectivitySwitchService', function($scope, connectivitySwitchService) {

	$scope.connectivitySwitch = function() {
	
		connectivitySwitchService.switch({
			onlineLocation: "#/online",
			offlineLocation: "#/offline"
		});
	};
	
}]);

