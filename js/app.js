angular.module("assessment", ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider
		.state('blog',{
			url: "/blog",
			templateUrl:"../views/blog.html"
		})
		.state('home', {
			url: "/home",
			templateUrl: "../views/home.html"
		})
		.state('about',{
			url: "/about",
			templateUrl: "../views/about.html"
		})
		.state('product-details',{
			url: "/product-details/:id",
			templateUrl: "../views/product-details.html"
		})
		.state('product-tmpl',{
			url: "/product-tmpl",
			templateUrl: "../views/product-tmpl.html"
		})
		.state('shop',{
			url: "/shop",
			templateUrl: "../views/shop.html"
		});

});
