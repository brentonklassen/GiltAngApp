angular.module('GiltApp', ['ngRoute'])

.config(function($routeProvider){

	$routeProvider
		.when('/', {
			controller: 'SalesController',
			templateUrl: 'sales.html'
		})
		.when('/men', {
			controller: 'MenSalesController',
			templateUrl: 'sales.html'
		})
		.when('/women', {
			controller: 'WomenSalesController',
			templateUrl: 'sales.html'
		})
		.when('/about', {
			templateUrl: 'about.html'
		})
		.otherwise({ redirectTo: '/' });

})

.controller('SalesController',['$scope','$http','$log',

	function($scope,$http,$log){

		$scope.$log = $log;

		$scope.sales = [];
		$scope.getItems = function(){
			$http({method:'GET',url:'https://api.gilt.com/v1/sales/active.json?apikey=31e61f5b3173cc7b9db11bd5441351c319c07999f139cdd368494c62457f0f53'})
			.success(function(data,status){
				$scope.sales = data.sales;
			})
			.error(function(data,status){
				alert(status);
			});
		};

	}

])

.controller('WomenSalesController',['$scope','$http','$log',

	function($scope,$http,$log){

		$scope.$log = $log;

		$scope.sales = [];
		$scope.getItems = function(){
			$http({method:'GET',url:'https://api.gilt.com/v1/sales/women/active.json?apikey=31e61f5b3173cc7b9db11bd5441351c319c07999f139cdd368494c62457f0f53'})
			.success(function(data,status){
				$scope.sales = data.sales;
			})
			.error(function(data,status){
				alert(status);
			});
		};

	}

])

.controller('MenSalesController',['$scope','$http','$log',

	function($scope,$http,$log){

		$scope.$log = $log;

		$scope.sales = [];
		$scope.getItems = function(){
			$http({method:'GET',url:'https://api.gilt.com/v1/sales/men/active.json?apikey=31e61f5b3173cc7b9db11bd5441351c319c07999f139cdd368494c62457f0f53'})
			.success(function(data,status){
				$scope.sales = data.sales;
			})
			.error(function(data,status){
				alert(status);
			});
		};

	}

]);
