angular.module('app', ['ngRoute']).
config(['$routeProvider', function($routeProvider) { 
	$routeProvider.
		when('/online', { templateUrl: '/templates/online.html'}).
		when('/offline', { templateUrl: '/templates/offline.html'}).
		otherwise({ redirectTo: '/' });
}]);
