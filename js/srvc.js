angular.module("assessment").service("srvc", function($http){
	this.callApi = function(){
		return $http.get("http://practiceapi.devmounta.in/products");
	};
	this.callApiForId = function(id){
		return $http.get("http://practiceapi.devmounta.in/products/" + id);
	};
});
