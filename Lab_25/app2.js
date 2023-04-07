var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
	
	$scope.langs = ["html", "css", "js", "php"];

	$scope.cities = {
		"Варшава": "Польща",
		"Вільнюс": "Литва",
		"Київ": "Україна"
	};
});
