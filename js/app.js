angular.module('app', ['ngRoute']).
config(['$routeProvider', function($routeProvider) { 
	$routeProvider.
		when('/online', { templateUrl: '/template/online.html'}).
		when('/offline', { templateUrl: '/template/offline.html'}).
		otherwise({ redirectTo: '/' });
}]);
