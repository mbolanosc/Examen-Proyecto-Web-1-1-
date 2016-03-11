var theApp = angular.module('examBank', ['LocalStorageModule',
		 'accountControllers', 'DetailControllers',
		 'transcControllers', 
		 'localStorageServiceBank', 'ngRoute']);
theApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/addaccount', {
		templateUrl: 'templates/list.html',
		controller: 'newaccountctrl'
	}).

	when('/transac', {
		templateUrl: 'templates/transc.html',
		controller: 'transctrl'
	}).

	when('/record', {
		templateUrl: 'templates/record.html',
		controller: 'transctrl'
	}).
	
	when('/record2/:itemId', {
		templateUrl: 'templates/moreInRecord.html',
		controller: 'detailCtrl'
	}).
	
	
	otherwise({
		redirectTo :'/addaccount'
	});
}]);








