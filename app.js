angular.module('GiltApp', [])

.controller('GiltController',['$scope','$http','$log',

	function($scope,$http,$log){

		$scope.$log = $log;

		$scope.items = [];
		$scope.getItems = function(){
			$http({method:'GET',url:'https://api.gilt.com/v1/sales/active.json?apikey=31e61f5b3173cc7b9db11bd5441351c319c07999f139cdd368494c62457f0f53'})
			.success(function(data,status){
				$scope.items = data.sales;
			})
			.error(function(data,status){
				alert(status);
			});
		};

	}

]);
