angular.module("assessment")
	.directive("products", function(){
		return{
			restrict: "E",
			templateUrl: "../views/product-tmpl.html",
			controller: 'ctrl',
			controllerAs: 'vm'
		};
});
