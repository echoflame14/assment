angular.module("assessment").controller("ctrl",function($scope, srvc, $stateParams, $location){
	$scope.apiResults = srvc.callApi().then(function(response) {
		// console.log("got results from api");
		// console.log(response.data);
		$scope.data = response.data;
	});
	// $scope.apiResultsDeets = function(){
	// 	$scope.id = window.location.hash.slice(18);
	// 	console.log($scope.id);
	// 	srvc.callApiForId($scope.id).then(function(response){
	// 		console.log(response);
	// 		$scope.currData = response.data;
	// 		return response.data;
	// 	});
	// 	};
	console.log($stateParams);
});
