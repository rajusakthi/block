var myApp = angular.module("BonBlocApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/Main", {
			templateUrl: "partials/main.html",
			controller: "mainPageCtrl"
        })
        .when("/Company", {
			templateUrl: "partials/company.html"			
        })
        .when("/Signin", {
			templateUrl: "partials/signin.html"			
        })
        .when("/Signup", {
			templateUrl: "partials/signup.html"			
        })	
        .when("/Contact", {
			templateUrl: "partials/contact.html"			
        })	
        .when("/Careers", {
			templateUrl: "partials/careers.html"			
        })        
	.otherwise({
		redirectTo: "/Main"
	});
});

myApp.controller("mainPageCtrl", function($scope)
{

});